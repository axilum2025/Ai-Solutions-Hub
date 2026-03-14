import Link from "next/link";
import {
  MarketingIcon, LegalIcon, InventoryIcon, VoiceIcon,
  EmailIcon, DataIcon, LogisticsIcon, DocumentIcon,
  RouterIcon, FailoverIcon, CostIcon,
  BrainIcon, DatabaseIcon, ShieldIcon, GlobeIcon,
  LockIcon, BoltIcon, SparklesIcon,
} from "@/components/Icons";

export default function Home() {
  return (
    <div className="min-h-screen bg-[#05050a] text-white">
      {/* ── Hero ── */}
      <section className="relative overflow-hidden">
        {/* Mesh gradient background */}
        <div className="absolute inset-0 bg-mesh" />
        <div className="absolute inset-0 bg-grid animate-grid-fade" style={{ animation: "grid-fade 8s ease-in-out infinite" }} />
        {/* Orbiting glows */}
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2">
          <div className="h-[500px] w-[500px] rounded-full bg-indigo-600/10 blur-[120px] animate-glow-pulse" />
        </div>
        <div className="absolute top-20 right-20 h-32 w-32 rounded-full bg-purple-500/20 blur-[80px] animate-glow-pulse" style={{ animationDelay: "2s" }} />
        <div className="absolute bottom-20 left-20 h-40 w-40 rounded-full bg-cyan-500/15 blur-[80px] animate-glow-pulse" style={{ animationDelay: "4s" }} />

        <div className="relative mx-auto max-w-6xl px-6 py-28 md:py-40">
          <div className="mx-auto max-w-3xl text-center">
            <div className="mb-6 inline-flex items-center gap-2 rounded-full border border-indigo-500/20 bg-indigo-500/5 px-5 py-2 text-sm font-medium text-indigo-300 backdrop-blur-sm">
              <span className="relative flex h-2 w-2">
                <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-indigo-400 opacity-75" />
                <span className="relative inline-flex h-2 w-2 rounded-full bg-indigo-500" />
              </span>
              Enterprise AI Platform
            </div>
            <h1 className="text-4xl font-bold tracking-tight md:text-7xl">
              Empowering Businesses with{" "}
              <span className="text-gradient animate-gradient-shift" style={{ backgroundSize: "200% 200%" }}>
                Comprehensive AI
              </span>{" "}
              Automation
            </h1>
            <p className="mt-6 text-lg leading-8 text-zinc-400">
              Intelligent technology and innovative solutions — 8 specialized modules powered by our proprietary AI Router Technology.
            </p>
            <div className="mt-10 flex flex-col items-center gap-4 sm:flex-row sm:justify-center">
              <Link href="/signin" className="btn-futuristic w-full rounded-full px-8 py-3.5 text-sm font-semibold text-white shadow-lg shadow-indigo-500/20 sm:w-auto">
                <span>Get Started Now</span>
              </Link>
              <Link href="/features" className="w-full rounded-full border border-white/10 px-8 py-3.5 text-sm font-semibold text-zinc-300 backdrop-blur-sm transition hover:border-indigo-500/30 hover:bg-white/5 sm:w-auto">
                Explore Features
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* ── AI Router ── */}
      <section className="relative border-t border-white/5 py-24">
        <div className="absolute inset-0 bg-mesh opacity-50" />
        <div className="relative mx-auto max-w-6xl px-6">
          <div className="mx-auto max-w-2xl text-center">
            <h2 className="text-3xl font-bold tracking-tight">
              AI Router <span className="text-gradient">Technology</span>
            </h2>
            <p className="mt-4 text-zinc-400">
              Our proprietary routing system automatically selects the optimal AI engine for each task — ensuring superior performance, cost efficiency, and reliability.
            </p>
          </div>
          <div className="mt-16 grid gap-6 md:grid-cols-3">
            {[
              { Icon: RouterIcon, title: "Multi-Engine Routing", desc: "Gemini, Llama, and specialized AI engines working together" },
              { Icon: FailoverIcon, title: "Automatic Failover", desc: "Uninterrupted service with intelligent fallback capabilities" },
              { Icon: CostIcon, title: "Cost Optimization", desc: "Dynamic routing optimizes for speed, accuracy, and cost" },
            ].map((item, i) => (
              <div key={item.title} className="glass-card glow-border rounded-2xl p-8 animate-slide-up" style={{ animationDelay: `${i * 150}ms` }}>
                <item.Icon className="h-10 w-10" />
                <h3 className="mt-5 text-lg font-semibold text-white">{item.title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-zinc-400">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── 8 Modules Overview ── */}
      <section className="relative border-t border-white/5 py-24">
        <div className="absolute inset-0 bg-mesh opacity-30" />
        <div className="relative mx-auto max-w-6xl px-6">
          <div className="mx-auto max-w-2xl text-center">
            <h2 className="text-3xl font-bold tracking-tight">
              8 <span className="text-gradient">Specialized</span> Modules
            </h2>
            <p className="mt-4 text-zinc-400">
              A unified ecosystem that streamlines operations and drives growth.
            </p>
          </div>
          <div className="mt-16 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
            {[
              { Icon: MarketingIcon, title: "AI Marketing & Growth", desc: "Campaign generation, targeting & analytics" },
              { Icon: LegalIcon, title: "AI Legal Advisor", desc: "Contracts, compliance & regulatory guidance" },
              { Icon: InventoryIcon, title: "Smart Inventory Tracker", desc: "Demand forecasting & automated reordering" },
              { Icon: VoiceIcon, title: "Voice & SMS Support", desc: "24/7 AI support via Twilio integration" },
              { Icon: EmailIcon, title: "AI Email Assistant", desc: "Campaigns & content with SendGrid" },
              { Icon: DataIcon, title: "Data Analyzer & Insights", desc: "Analytics, dashboards & predictions" },
              { Icon: LogisticsIcon, title: "Logistics & Route Optimizer", desc: "Route planning with Google Maps" },
              { Icon: DocumentIcon, title: "Document Automation & e-Sign", desc: "Templates, generation & e-signatures" },
            ].map((m, i) => (
              <div key={m.title} className="glass-card glow-border rounded-xl p-6 animate-slide-up" style={{ animationDelay: `${i * 100}ms` }}>
                <m.Icon className="h-9 w-9" />
                <h3 className="mt-3 font-semibold text-white">{m.title}</h3>
                <p className="mt-1 text-sm text-zinc-500">{m.desc}</p>
              </div>
            ))}
          </div>
          <div className="mt-10 text-center">
            <Link href="/features" className="text-sm font-medium text-indigo-400 transition hover:text-indigo-300">
              Learn more about all features →
            </Link>
          </div>
        </div>
      </section>

      {/* ── Architecture ── */}
      <section className="relative border-t border-white/5 py-24">
        <div className="absolute inset-0 bg-mesh opacity-40" />
        <div className="relative mx-auto max-w-6xl px-6">
          <div className="mx-auto max-w-2xl text-center">
            <h2 className="text-3xl font-bold tracking-tight">
              Platform <span className="text-gradient">Architecture</span>
            </h2>
          </div>
          <div className="mt-16 grid gap-6 md:grid-cols-2 lg:grid-cols-4">
            {[
              { Icon: BrainIcon, title: "AI Router Technology", desc: "Multi-engine routing with Gemini, Llama, and specialized AI engines" },
              { Icon: DatabaseIcon, title: "Supabase Backend", desc: "Real-time database, authentication, and edge functions" },
              { Icon: ShieldIcon, title: "Enterprise Security", desc: "Role-based access control and data encryption" },
              { Icon: GlobeIcon, title: "Edge Computing", desc: "Global edge functions for low-latency responses" },
            ].map((a, i) => (
              <div key={a.title} className="glass-card glow-border group rounded-2xl p-6 text-center animate-slide-up" style={{ animationDelay: `${i * 150}ms` }}>
                <div className="mx-auto flex h-16 w-16 items-center justify-center rounded-xl bg-indigo-500/10 transition group-hover:bg-indigo-500/20">
                  <a.Icon className="h-9 w-9" />
                </div>
                <h3 className="mt-4 font-semibold text-white">{a.title}</h3>
                <p className="mt-2 text-sm text-zinc-500">{a.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Stats ── */}
      <section className="relative border-t border-white/5 py-16">
        <div className="relative mx-auto max-w-6xl px-6">
          <div className="grid gap-6 md:grid-cols-3">
            {[
              { Icon: LockIcon, label: "Security First", desc: "End-to-end encryption" },
              { Icon: GlobeIcon, label: "Global Scale", desc: "Edge network deployment" },
              { Icon: BoltIcon, label: "High Performance", desc: "Real-time processing" },
            ].map((s, i) => (
              <div key={s.label} className="glass-card flex items-center gap-4 rounded-xl p-6">
                <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-lg bg-gradient-to-br from-indigo-600/20 to-purple-600/20">
                  <s.Icon className="h-6 w-6" />
                </div>
                <div>
                  <div className="font-semibold text-white">{s.label}</div>
                  <div className="text-sm text-zinc-500">{s.desc}</div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── CTA ── */}
      <section className="relative overflow-hidden border-t border-white/5 py-24">
        <div className="absolute inset-0 bg-gradient-to-br from-indigo-600/20 via-purple-600/10 to-cyan-600/10" />
        <div className="absolute inset-0 bg-mesh" />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 h-64 w-64 rounded-full bg-indigo-500/20 blur-[100px]" />

        <div className="relative mx-auto max-w-3xl px-6 text-center">
          <SparklesIcon className="mx-auto h-12 w-12 mb-6 animate-float" />
          <h2 className="text-3xl font-bold tracking-tight md:text-4xl">
            Ready to Transform Your Business?
          </h2>
          <p className="mt-4 text-lg text-zinc-400">
            Join hundreds of businesses leveraging AI to drive growth and efficiency.
          </p>
          <Link href="/signin" className="btn-futuristic mt-8 inline-block rounded-full px-8 py-3.5 text-sm font-semibold text-white">
            <span>Get Started Now</span>
          </Link>
        </div>
      </section>
    </div>
  );
}
