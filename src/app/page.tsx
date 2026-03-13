import Link from "next/link";

export default function Home() {
  return (
    <div className="min-h-screen">
      {/* Hero */}
      <section className="relative overflow-hidden bg-gradient-to-br from-zinc-50 via-blue-50 to-violet-50 dark:from-zinc-950 dark:via-zinc-900 dark:to-zinc-950">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_right,_var(--tw-gradient-stops))] from-blue-600/10 via-transparent to-violet-600/10" />
        <div className="relative mx-auto max-w-6xl px-6 py-24 md:py-36">
          <div className="mx-auto max-w-3xl text-center">
            <div className="mb-6 inline-flex items-center gap-2 rounded-full border border-blue-200 bg-blue-50 px-4 py-1.5 text-sm font-medium text-blue-700 dark:border-blue-800 dark:bg-blue-950 dark:text-blue-300">
              <span className="h-2 w-2 rounded-full bg-blue-500" />
              Enterprise AI Platform
            </div>
            <h1 className="text-4xl font-bold tracking-tight text-zinc-900 dark:text-white md:text-6xl">
              Empowering Businesses with{" "}
              <span className="bg-gradient-to-r from-blue-600 to-violet-600 bg-clip-text text-transparent">
                Comprehensive AI
              </span>{" "}
              Automation
            </h1>
            <p className="mt-6 text-lg leading-8 text-zinc-600 dark:text-zinc-400">
              Intelligent technology and innovative solutions — 8 specialized modules powered by our proprietary AI Router Technology.
            </p>
            <div className="mt-10 flex flex-col items-center gap-4 sm:flex-row sm:justify-center">
              <Link href="/signin" className="w-full rounded-full bg-gradient-to-r from-blue-600 to-violet-600 px-8 py-3.5 text-sm font-semibold text-white shadow-lg shadow-blue-500/25 transition hover:opacity-90 sm:w-auto">
                Get Started Now
              </Link>
              <Link href="/features" className="w-full rounded-full border border-zinc-300 px-8 py-3.5 text-sm font-semibold text-zinc-900 transition hover:bg-zinc-100 dark:border-zinc-700 dark:text-white dark:hover:bg-zinc-800 sm:w-auto">
                Explore Features
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* AI Router */}
      <section className="border-t border-zinc-200 bg-white py-20 dark:border-zinc-800 dark:bg-zinc-950">
        <div className="mx-auto max-w-6xl px-6">
          <div className="mx-auto max-w-2xl text-center">
            <h2 className="text-3xl font-bold tracking-tight text-zinc-900 dark:text-white">
              AI Router Technology
            </h2>
            <p className="mt-4 text-zinc-600 dark:text-zinc-400">
              Our proprietary routing system automatically selects the optimal AI engine for each task — ensuring superior performance, cost efficiency, and reliability.
            </p>
          </div>
          <div className="mt-16 grid gap-6 md:grid-cols-3">
            {[
              { icon: "⚡", title: "Multi-Engine Routing", desc: "Gemini, Llama, and specialized AI engines working together" },
              { icon: "🔄", title: "Automatic Failover", desc: "Uninterrupted service with intelligent fallback capabilities" },
              { icon: "💰", title: "Cost Optimization", desc: "Dynamic routing optimizes for speed, accuracy, and cost" },
            ].map((item) => (
              <div key={item.title} className="rounded-2xl border border-zinc-200 bg-zinc-50 p-8 transition hover:border-blue-300 hover:shadow-lg dark:border-zinc-800 dark:bg-zinc-900 dark:hover:border-blue-700">
                <div className="text-3xl">{item.icon}</div>
                <h3 className="mt-4 text-lg font-semibold text-zinc-900 dark:text-white">{item.title}</h3>
                <p className="mt-2 text-sm text-zinc-600 dark:text-zinc-400">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 8 Modules Overview */}
      <section className="border-t border-zinc-200 bg-zinc-50 py-20 dark:border-zinc-800 dark:bg-zinc-900">
        <div className="mx-auto max-w-6xl px-6">
          <div className="mx-auto max-w-2xl text-center">
            <h2 className="text-3xl font-bold tracking-tight text-zinc-900 dark:text-white">
              8 Specialized Modules
            </h2>
            <p className="mt-4 text-zinc-600 dark:text-zinc-400">
              A unified ecosystem that streamlines operations and drives growth.
            </p>
          </div>
          <div className="mt-16 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
            {[
              { icon: "📢", title: "AI Marketing & Growth", desc: "Campaign generation, targeting & analytics" },
              { icon: "⚖️", title: "AI Legal Advisor", desc: "Contracts, compliance & regulatory guidance" },
              { icon: "📦", title: "Smart Inventory Tracker", desc: "Demand forecasting & automated reordering" },
              { icon: "📞", title: "Voice & SMS Support", desc: "24/7 AI support via Twilio integration" },
              { icon: "✉️", title: "AI Email Assistant", desc: "Campaigns & content with SendGrid" },
              { icon: "📊", title: "Data Analyzer & Insights", desc: "Analytics, dashboards & predictions" },
              { icon: "🚚", title: "Logistics & Route Optimizer", desc: "Route planning with Google Maps" },
              { icon: "📄", title: "Document Automation & e-Sign", desc: "Templates, generation & e-signatures" },
            ].map((m) => (
              <div key={m.title} className="rounded-xl border border-zinc-200 bg-white p-6 transition hover:border-blue-300 hover:shadow-md dark:border-zinc-800 dark:bg-zinc-950 dark:hover:border-blue-700">
                <div className="text-2xl">{m.icon}</div>
                <h3 className="mt-3 font-semibold text-zinc-900 dark:text-white">{m.title}</h3>
                <p className="mt-1 text-sm text-zinc-500 dark:text-zinc-400">{m.desc}</p>
              </div>
            ))}
          </div>
          <div className="mt-10 text-center">
            <Link href="/features" className="text-sm font-medium text-blue-600 transition hover:text-blue-800 dark:text-blue-400">
              Learn more about all features →
            </Link>
          </div>
        </div>
      </section>

      {/* Architecture */}
      <section className="border-t border-zinc-200 bg-white py-20 dark:border-zinc-800 dark:bg-zinc-950">
        <div className="mx-auto max-w-6xl px-6">
          <div className="mx-auto max-w-2xl text-center">
            <h2 className="text-3xl font-bold tracking-tight text-zinc-900 dark:text-white">
              Platform Architecture
            </h2>
          </div>
          <div className="mt-16 grid gap-6 md:grid-cols-2 lg:grid-cols-4">
            {[
              { icon: "🧠", title: "AI Router Technology", desc: "Multi-engine routing with Gemini, Llama, and specialized AI engines" },
              { icon: "🗄️", title: "Supabase Backend", desc: "Real-time database, authentication, and edge functions" },
              { icon: "🛡️", title: "Enterprise Security", desc: "Role-based access control and data encryption" },
              { icon: "🌐", title: "Edge Computing", desc: "Global edge functions for low-latency responses" },
            ].map((a) => (
              <div key={a.title} className="group rounded-2xl border border-zinc-200 p-6 text-center transition hover:border-blue-300 hover:shadow-lg dark:border-zinc-800 dark:hover:border-blue-700">
                <div className="mx-auto flex h-14 w-14 items-center justify-center rounded-xl bg-blue-50 text-2xl transition group-hover:bg-blue-100 dark:bg-blue-950 dark:group-hover:bg-blue-900">{a.icon}</div>
                <h3 className="mt-4 font-semibold text-zinc-900 dark:text-white">{a.title}</h3>
                <p className="mt-2 text-sm text-zinc-500 dark:text-zinc-400">{a.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Stats */}
      <section className="border-t border-zinc-200 bg-zinc-50 py-16 dark:border-zinc-800 dark:bg-zinc-900">
        <div className="mx-auto max-w-6xl px-6">
          <div className="grid gap-8 md:grid-cols-3">
            {[
              { icon: "🔒", label: "Security First", desc: "End-to-end encryption" },
              { icon: "🌍", label: "Global Scale", desc: "Edge network deployment" },
              { icon: "⚡", label: "High Performance", desc: "Real-time processing" },
            ].map((s) => (
              <div key={s.label} className="flex items-center gap-4 rounded-xl border border-zinc-200 bg-white p-6 dark:border-zinc-800 dark:bg-zinc-950">
                <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-lg bg-gradient-to-br from-blue-600 to-violet-600 text-xl">{s.icon}</div>
                <div>
                  <div className="font-semibold text-zinc-900 dark:text-white">{s.label}</div>
                  <div className="text-sm text-zinc-500 dark:text-zinc-400">{s.desc}</div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="border-t border-zinc-200 bg-gradient-to-br from-blue-600 to-violet-600 py-20 dark:border-zinc-800">
        <div className="mx-auto max-w-3xl px-6 text-center">
          <h2 className="text-3xl font-bold tracking-tight text-white">
            Ready to Transform Your Business?
          </h2>
          <p className="mt-4 text-lg text-blue-100">
            Join hundreds of businesses leveraging AI to drive growth and efficiency.
          </p>
          <Link href="/signin" className="mt-8 inline-block rounded-full bg-white px-8 py-3.5 text-sm font-semibold text-blue-600 shadow-lg transition hover:bg-zinc-100">
            Get Started Now
          </Link>
        </div>
      </section>
    </div>
  );
}
