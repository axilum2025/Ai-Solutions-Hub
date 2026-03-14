import { createClient } from "@/lib/supabase/server";
import { redirect } from "next/navigation";
import Link from "next/link";
import {
  MarketingIcon, LegalIcon, InventoryIcon, VoiceIcon,
  EmailIcon, DataIcon, LogisticsIcon, DocumentIcon,
} from "@/components/Icons";

export default async function DashboardPage() {
  const supabase = await createClient();
  const { data: { user } } = await supabase.auth.getUser();

  if (!user) {
    redirect("/signin");
  }

  const modules = [
    { Icon: MarketingIcon, title: "Marketing & Growth" },
    { Icon: LegalIcon, title: "Legal Advisor" },
    { Icon: InventoryIcon, title: "Inventory Tracker" },
    { Icon: VoiceIcon, title: "Voice & SMS" },
    { Icon: EmailIcon, title: "Email Assistant" },
    { Icon: DataIcon, title: "Data Analyzer" },
    { Icon: LogisticsIcon, title: "Logistics & Routes" },
    { Icon: DocumentIcon, title: "Documents & e-Sign" },
  ];

  return (
    <div className="min-h-screen bg-[#05050a] py-12 text-white">
      <div className="mx-auto max-w-4xl px-6">
        <div className="mb-8 flex items-center justify-between">
          <h1 className="text-3xl font-bold">Dashboard</h1>
          <form action="/auth/signout" method="POST">
            <button
              type="submit"
              className="rounded-full border border-white/10 px-5 py-2 text-sm font-medium text-zinc-300 transition hover:border-indigo-500/30 hover:bg-white/5"
            >
              Sign Out
            </button>
          </form>
        </div>

        <div className="glass-card rounded-2xl p-8">
          <div className="flex items-center gap-4">
            <div className="flex h-14 w-14 items-center justify-center rounded-full bg-gradient-to-br from-indigo-600 to-purple-600 text-xl text-white font-bold">
              {user.email?.charAt(0).toUpperCase()}
            </div>
            <div>
              <p className="text-lg font-semibold text-white">{user.email}</p>
              <p className="text-sm text-zinc-500">Connected via {user.app_metadata?.provider || "email"}</p>
            </div>
          </div>
        </div>

        <h2 className="mt-10 mb-6 text-xl font-bold">Your AI <span className="text-gradient">Modules</span></h2>
        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {modules.map((m) => (
            <div key={m.title} className="glass-card glow-border group cursor-pointer rounded-xl p-5">
              <m.Icon className="h-8 w-8" />
              <h3 className="mt-2 font-semibold text-white">{m.title}</h3>
              <p className="mt-1 text-xs text-zinc-500">Coming soon</p>
            </div>
          ))}
        </div>

        <div className="mt-8 text-center">
          <Link href="/features" className="text-sm font-medium text-indigo-400 hover:text-indigo-300">
            Learn more about all features →
          </Link>
        </div>
      </div>
    </div>
  );
}
