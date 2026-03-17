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
    <div className="min-h-screen bg-white text-gray-900">
      {/* ── Hero ── */}
      <section className="relative overflow-hidden bg-gradient-to-b from-indigo-50/60 via-white to-white">
        <div className="absolute inset-0 bg-mesh" />
        <div className="relative mx-auto max-w-6xl px-6 py-28 md:py-40">
          <div className="mx-auto max-w-3xl text-center">
            <div className="mb-6 inline-flex items-center gap-2 rounded-full border border-indigo-200 bg-indigo-50 px-5 py-2 text-sm font-medium text-indigo-700">
              <span className="relative flex h-2 w-2">
                <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-indigo-400 opacity-75" />
                <span className="relative inline-flex h-2 w-2 rounded-full bg-indigo-600" />
              </span>
              Enterprise AI Platform
            </div>
            <h1 className="text-4xl font-bold tracking-tight text-gray-900 md:text-6xl">
              AI-Powered Enterprise Solutions{" "}
              <span className="text-gradient">
                All in One Platform
              </span>
            </h1>
            <p className="mt-6 text-lg leading-8 text-gray-500">
              Intelligent technology and innovative solutions — 8 specialized modules powered by our proprietary AI Router Technology.
            </p>
            <div className="mt-10 flex flex-col items-center gap-4 sm:flex-row sm:justify-center">
              <Link href="/signin" className="btn-futuristic w-full rounded-full px-8 py-3.5 text-sm font-semibold text-white sm:w-auto">
                <span>Start Free Trial</span>
              </Link>
              <Link href="/features" className="w-full rounded-full border border-gray-200 bg-white px-8 py-3.5 text-sm font-semibold text-gray-700 transition hover:border-indigo-300 hover:text-indigo-600 sm:w-auto">
                View Demo
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* ── AI Router ── */}
      <section className="border-t border-gray-100 py-24">
        <div className="mx-auto max-w-6xl px-6">
          <div className="mx-auto max-w-2xl text-center">
            <h2 className="text-3xl font-bold tracking-tight text-gray-900">
              AI Router <span className="text-gradient">Technology</span>
            </h2>
            <p className="mt-4 text-gray-500">
              Our proprietary routing system automatically selects the optimal AI engine for each task — ensuring superior performance, cost efficiency, and reliability.
            </p>
          </div>
          <div className="mt-16 grid gap-6 md:grid-cols-3">
            {[
              { Icon: RouterIcon, title: "Multi-Engine Routing", desc: "Gemini, Llama, and specialized AI engines working together" },
              { Icon: FailoverIcon, title: "Automatic Failover", desc: "Uninterrupted service with intelligent fallback capabilities" },
              { Icon: CostIcon, title: "Cost Optimization", desc: "Dynamic routing optimizes for speed, accuracy, and cost" },
            ].map((item, i) => (
              <div key={item.title} className="card rounded-2xl p-8 animate-slide-up" style={{ animationDelay: `${i * 150}ms` }}>
                <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-indigo-50">
                  <item.Icon className="h-7 w-7" />
                </div>
                <h3 className="mt-5 text-lg font-semibold text-gray-900">{item.title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-gray-500">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── 8 Modules Overview ── */}
      <section className="border-t border-gray-100 bg-gray-50/50 py-24">
        <div className="mx-auto max-w-6xl px-6">
          <div className="mx-auto max-w-2xl text-center">
            <h2 className="text-3xl font-bold tracking-tight text-gray-900">
              8 <span className="text-gradient">Specialized</span> Modules
            </h2>
            <p className="mt-4 text-gray-500">
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
              <div key={m.title} className="card rounded-xl p-6 animate-slide-up" style={{ animationDelay: `${i * 100}ms` }}>
                <div className="flex h-11 w-11 items-center justify-center rounded-lg bg-indigo-50">
                  <m.Icon className="h-7 w-7" />
                </div>
                <h3 className="mt-3 font-semibold text-gray-900">{m.title}</h3>
                <p className="mt-1 text-sm text-gray-500">{m.desc}</p>
              </div>
            ))}
          </div>
          <div className="mt-10 text-center">
            <Link href="/features" className="text-sm font-medium text-indigo-600 transition hover:text-indigo-500">
              Learn more about all features →
            </Link>
          </div>
        </div>
      </section>

      {/* ── Architecture ── */}
      <section className="border-t border-gray-100 py-24">
        <div className="mx-auto max-w-6xl px-6">
          <div className="mx-auto max-w-2xl text-center">
            <h2 className="text-3xl font-bold tracking-tight text-gray-900">
              Enterprise-Grade <span className="text-gradient">Infrastructure</span>
            </h2>
          </div>
          <div className="mt-16 grid gap-6 md:grid-cols-2 lg:grid-cols-4">
            {[
              { Icon: BrainIcon, title: "AI Router Technology", desc: "Multi-engine routing with Gemini, Llama, and specialized AI engines" },
              { Icon: DatabaseIcon, title: "Supabase Backend", desc: "Real-time database, authentication, and edge functions" },
              { Icon: ShieldIcon, title: "Enterprise Security", desc: "Role-based access control and data encryption" },
              { Icon: GlobeIcon, title: "Edge Computing", desc: "Global edge functions for low-latency responses" },
            ].map((a, i) => (
              <div key={a.title} className="card group rounded-2xl p-6 text-center animate-slide-up" style={{ animationDelay: `${i * 150}ms` }}>
                <div className="mx-auto flex h-14 w-14 items-center justify-center rounded-xl bg-indigo-50 transition group-hover:bg-indigo-100">
                  <a.Icon className="h-8 w-8" />
                </div>
                <h3 className="mt-4 font-semibold text-gray-900">{a.title}</h3>
                <p className="mt-2 text-sm text-gray-500">{a.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Stats ── */}
      <section className="border-t border-gray-100 bg-gray-50/50 py-16">
        <div className="mx-auto max-w-6xl px-6">
          <div className="grid gap-6 md:grid-cols-3">
            {[
              { Icon: LockIcon, label: "Security First", desc: "End-to-end encryption" },
              { Icon: GlobeIcon, label: "Global Scale", desc: "Edge network deployment" },
              { Icon: BoltIcon, label: "High Performance", desc: "Real-time processing" },
            ].map((s) => (
              <div key={s.label} className="card flex items-center gap-4 rounded-xl p-6">
                <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-lg bg-indigo-50">
                  <s.Icon className="h-6 w-6" />
                </div>
                <div>
                  <div className="font-semibold text-gray-900">{s.label}</div>
                  <div className="text-sm text-gray-500">{s.desc}</div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── CTA ── */}
      <section className="relative overflow-hidden border-t border-gray-100 py-24">
        <div className="absolute inset-0 bg-gradient-to-br from-indigo-600 to-purple-700" />
        <div className="relative mx-auto max-w-3xl px-6 text-center">
          <SparklesIcon className="mx-auto h-12 w-12 mb-6 animate-float" />
          <h2 className="text-3xl font-bold tracking-tight text-white md:text-4xl">
            Ready to Transform Your Business?
          </h2>
          <p className="mt-4 text-lg text-indigo-100">
            Join hundreds of businesses leveraging AI to drive growth and efficiency.
          </p>
          <Link href="/signin" className="mt-8 inline-block rounded-full bg-white px-8 py-3.5 text-sm font-semibold text-indigo-700 transition hover:bg-indigo-50">
            Start Free Trial
          </Link>
        </div>
      </section>
    </div>
  );
}
