import { createClient } from "@/lib/supabase/server";

export default async function Home() {
  const supabase = await createClient();
  const { data: { user } } = await supabase.auth.getUser();

  return (
    <div className="flex min-h-screen items-center justify-center bg-zinc-50 font-sans dark:bg-black">
      <main className="flex w-full max-w-2xl flex-col items-center gap-8 py-20 px-8">
        <h1 className="text-4xl font-bold tracking-tight text-black dark:text-white">
          🚀 Ai Solutions Hub
        </h1>
        <p className="text-lg text-zinc-600 dark:text-zinc-400 text-center">
          Next.js + Supabase + Vercel
        </p>

        <div className="w-full rounded-xl border border-zinc-200 bg-white p-6 dark:border-zinc-800 dark:bg-zinc-900">
          <h2 className="text-sm font-medium text-zinc-500 dark:text-zinc-400 mb-2">
            Supabase Connection
          </h2>
          {user ? (
            <div className="flex items-center gap-3">
              <div className="h-3 w-3 rounded-full bg-green-500" />
              <p className="text-zinc-900 dark:text-zinc-100">
                Connecté : {user.email}
              </p>
            </div>
          ) : (
            <div className="flex items-center gap-3">
              <div className="h-3 w-3 rounded-full bg-yellow-500" />
              <p className="text-zinc-900 dark:text-zinc-100">
                Backend connecté — Aucun utilisateur authentifié
              </p>
            </div>
          )}
        </div>

        <div className="flex gap-4">
          <a
            className="rounded-full bg-black px-6 py-3 text-sm font-medium text-white transition hover:bg-zinc-800 dark:bg-white dark:text-black dark:hover:bg-zinc-200"
            href="/login"
          >
            Se connecter
          </a>
          <a
            className="rounded-full border border-zinc-300 px-6 py-3 text-sm font-medium text-zinc-900 transition hover:bg-zinc-100 dark:border-zinc-700 dark:text-zinc-100 dark:hover:bg-zinc-800"
            href="/dashboard"
          >
            Dashboard
          </a>
        </div>
      </main>
    </div>
  );
}
