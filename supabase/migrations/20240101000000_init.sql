-- ============================================================
-- 1. Profiles table (auto-populated on user signup)
-- ============================================================
create table if not exists public.profiles (
  id         uuid references auth.users(id) on delete cascade primary key,
  email      text not null,
  full_name  text,
  avatar_url text,
  company    text,
  role       text not null default 'user' check (role in ('user', 'admin')),
  created_at timestamptz not null default now(),
  updated_at timestamptz not null default now()
);

alter table public.profiles enable row level security;

-- Users can read their own profile
create policy "Users can view own profile"
  on public.profiles for select
  using (auth.uid() = id);

-- Users can update their own profile
create policy "Users can update own profile"
  on public.profiles for update
  using (auth.uid() = id)
  with check (auth.uid() = id);

-- ============================================================
-- 2. Projects table
-- ============================================================
create table if not exists public.projects (
  id          uuid default gen_random_uuid() primary key,
  user_id     uuid references public.profiles(id) on delete cascade not null,
  name        text not null,
  description text,
  module      text not null,
  status      text not null default 'active' check (status in ('active', 'paused', 'completed')),
  config      jsonb not null default '{}',
  created_at  timestamptz not null default now(),
  updated_at  timestamptz not null default now()
);

alter table public.projects enable row level security;

create policy "Users can view own projects"
  on public.projects for select
  using (auth.uid() = user_id);

create policy "Users can create own projects"
  on public.projects for insert
  with check (auth.uid() = user_id);

create policy "Users can update own projects"
  on public.projects for update
  using (auth.uid() = user_id);

create policy "Users can delete own projects"
  on public.projects for delete
  using (auth.uid() = user_id);

-- ============================================================
-- 3. Activity logs table
-- ============================================================
create table if not exists public.activity_logs (
  id          uuid default gen_random_uuid() primary key,
  user_id     uuid references public.profiles(id) on delete cascade not null,
  project_id  uuid references public.projects(id) on delete set null,
  action      text not null,
  details     jsonb not null default '{}',
  created_at  timestamptz not null default now()
);

alter table public.activity_logs enable row level security;

create policy "Users can view own activity"
  on public.activity_logs for select
  using (auth.uid() = user_id);

create policy "Users can insert own activity"
  on public.activity_logs for insert
  with check (auth.uid() = user_id);

-- ============================================================
-- 4. API usage tracking table
-- ============================================================
create table if not exists public.api_usage (
  id          uuid default gen_random_uuid() primary key,
  user_id     uuid references public.profiles(id) on delete cascade not null,
  module      text not null,
  tokens_used integer not null default 0,
  cost        numeric(10, 6) not null default 0,
  created_at  timestamptz not null default now()
);

alter table public.api_usage enable row level security;

create policy "Users can view own usage"
  on public.api_usage for select
  using (auth.uid() = user_id);

-- ============================================================
-- 5. Indexes for performance
-- ============================================================
create index if not exists idx_projects_user_id on public.projects(user_id);
create index if not exists idx_projects_module on public.projects(module);
create index if not exists idx_activity_logs_user_id on public.activity_logs(user_id);
create index if not exists idx_activity_logs_created_at on public.activity_logs(created_at desc);
create index if not exists idx_api_usage_user_id on public.api_usage(user_id);
create index if not exists idx_api_usage_created_at on public.api_usage(created_at desc);

-- ============================================================
-- 6. Enable real-time for selected tables
-- ============================================================
alter publication supabase_realtime add table public.projects;
alter publication supabase_realtime add table public.activity_logs;

-- ============================================================
-- 7. Auto-create profile on new user signup (trigger)
-- ============================================================
create or replace function public.handle_new_user()
returns trigger
language plpgsql
security definer set search_path = ''
as $$
begin
  insert into public.profiles (id, email, full_name, avatar_url)
  values (
    new.id,
    new.email,
    coalesce(new.raw_user_meta_data ->> 'full_name', new.raw_user_meta_data ->> 'name'),
    coalesce(new.raw_user_meta_data ->> 'avatar_url', new.raw_user_meta_data ->> 'picture')
  );
  return new;
end;
$$;

-- Drop trigger if exists, then create
drop trigger if exists on_auth_user_created on auth.users;
create trigger on_auth_user_created
  after insert on auth.users
  for each row execute function public.handle_new_user();

-- ============================================================
-- 8. Auto-update updated_at timestamp
-- ============================================================
create or replace function public.handle_updated_at()
returns trigger
language plpgsql
as $$
begin
  new.updated_at = now();
  return new;
end;
$$;

create trigger set_profiles_updated_at
  before update on public.profiles
  for each row execute function public.handle_updated_at();

create trigger set_projects_updated_at
  before update on public.projects
  for each row execute function public.handle_updated_at();

-- ============================================================
-- 9. Utility function: get user usage stats
-- ============================================================
create or replace function public.get_user_usage_stats(p_user_id uuid)
returns table (
  total_tokens bigint,
  total_cost   numeric,
  module_breakdown jsonb
)
language plpgsql
security definer
as $$
begin
  return query
  select
    coalesce(sum(tokens_used), 0)::bigint as total_tokens,
    coalesce(sum(cost), 0)::numeric as total_cost,
    coalesce(
      jsonb_object_agg(sub.module, jsonb_build_object('tokens', sub.mod_tokens, 'cost', sub.mod_cost)),
      '{}'::jsonb
    ) as module_breakdown
  from (
    select
      a.module,
      sum(a.tokens_used) as mod_tokens,
      sum(a.cost) as mod_cost
    from public.api_usage a
    where a.user_id = p_user_id
    group by a.module
  ) sub;
end;
$$;
