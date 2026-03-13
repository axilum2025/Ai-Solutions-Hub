import { createClient } from "@/lib/supabase/server";
import { redirect } from "next/navigation";
import Link from "next/link";

export default async function DashboardPage() {
  const supabase = await createClient();
  const { data: { user } } = await supabase.auth.getUser();

  if (!user) {
    redirect("/signin");
  }

  return (
    <div className="min-h-screen bg-zinc-50 py-12 dark:bg-zinc-950">
      <div className="mx-auto max-w-4xl px-6">
        <div className="mb-8 flex items-center justify-between">
          <h1 className="text-3xl font-bold text-zinc-900 dark:text-white">Dashboard</h1>
          <form action="/auth/signout" method="POST">
            <button
              type="submit"
              className="rounded-full border border-zinc-300 px-5 py-2 text-sm font-medium text-zinc-700 transition hover:bg-zinc-100 dark:border-zinc-700 dark:text-zinc-300 dark:hover:bg-zinc-800"
            >
              Sign Out
            </button>
          </form>
        </div>

        <div className="rounded-2xl border border-zinc-200 bg-white p-8 dark:border-zinc-800 dark:bg-zinc-900">
          <div className="flex items-center gap-4">
            <div className="flex h-14 w-14 items-center justify-center rounded-full bg-gradient-to-br from-blue-600 to-violet-600 text-xl text-white">
              {user.email?.charAt(0).toUpperCase()}
            </div>
            <div>
              <p className="text-lg font-semibold text-zinc-900 dark:text-white">{user.email}</p>
              <p className="text-sm text-zinc-500 dark:text-zinc-400">Connected via {user.app_metadata?.provider || "email"}</p>
            </div>
          </div>
        </div>

        <h2 className="mt-10 mb-6 text-xl font-bold text-zinc-900 dark:text-white">Your AI Modules</h2>
        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {[
            { icon: "📢", title: "Marketing AI" },
            { icon: "⚖️", title: "Legal Guidance" },
            { icon: "📦", title: "Inventory" },
            { icon: "📄", title: "Documents" },
            { icon: "💬", title: "Support" },
            { icon: "📊", title: "Analytics" },
            { icon: "🔐", title: "Security" },
            { icon: "🤖", title: "Automation" },
          ].map((m) => (
            <div key={m.title} className="group cursor-pointer rounded-xl border border-zinc-200 bg-white p-5 transition hover:border-blue-300 hover:shadow-md dark:border-zinc-800 dark:bg-zinc-900 dark:hover:border-blue-700">
              <div className="text-2xl">{m.icon}</div>
              <h3 className="mt-2 font-semibold text-zinc-900 dark:text-white">{m.title}</h3>
              <p className="mt-1 text-xs text-zinc-500 dark:text-zinc-400">Coming soon</p>
            </div>
          ))}
        </div>

        <div className="mt-8 text-center">
          <Link href="/features" className="text-sm font-medium text-blue-600 hover:text-blue-800 dark:text-blue-400">
            Learn more about all features →
          </Link>
        </div>
      </div>
    </div>
  );
}
