import Link from "next/link";

const modules = [
  {
    icon: "📢",
    title: "Marketing AI",
    desc: "Automated campaign management and content generation powered by AI. Create compelling marketing materials, optimize ad spend, and analyze campaign performance with intelligent automation.",
    features: ["AI-generated copy and content", "Campaign performance analytics", "A/B testing automation", "Multi-channel optimization"],
  },
  {
    icon: "⚖️",
    title: "Legal Guidance",
    desc: "AI-powered legal document analysis, contract review, and compliance monitoring. Streamline legal workflows with intelligent document processing and risk assessment.",
    features: ["Contract analysis and review", "Compliance monitoring", "Risk assessment", "Document template generation"],
  },
  {
    icon: "📦",
    title: "Inventory Management",
    desc: "Smart stock management with demand forecasting, automated reordering, and supply chain optimization. Reduce waste and ensure optimal inventory levels.",
    features: ["Demand forecasting", "Automated reordering", "Supply chain optimization", "Real-time stock tracking"],
  },
  {
    icon: "📄",
    title: "Document Processing",
    desc: "Advanced OCR and intelligent data extraction from documents, invoices, and forms. Transform unstructured data into actionable information.",
    features: ["OCR scanning and extraction", "Invoice processing", "Form data capture", "Document classification"],
  },
  {
    icon: "💬",
    title: "Customer Support",
    desc: "AI-powered chatbots, sentiment analysis, and automated ticket routing. Deliver exceptional customer experiences with intelligent support automation.",
    features: ["AI chatbot with NLP", "Sentiment analysis", "Automated ticket routing", "Response suggestions"],
  },
  {
    icon: "📊",
    title: "Business Analytics",
    desc: "Real-time dashboards, predictive analytics, and automated reporting. Transform raw data into actionable business insights and strategic forecasts.",
    features: ["Real-time dashboards", "Predictive analytics", "Automated reporting", "KPI tracking"],
  },
  {
    icon: "🔐",
    title: "Security Module",
    desc: "AI-driven threat detection, vulnerability assessment, and compliance monitoring. Protect your business with intelligent security automation.",
    features: ["Threat detection", "Vulnerability scanning", "Compliance auditing", "Access monitoring"],
  },
  {
    icon: "🤖",
    title: "Process Automation",
    desc: "Intelligent workflow automation, task scheduling, and process optimization. Eliminate repetitive tasks and streamline business operations.",
    features: ["Workflow automation", "Task scheduling", "Process mining", "Efficiency optimization"],
  },
];

export default function FeaturesPage() {
  return (
    <div className="min-h-screen">
      {/* Hero */}
      <section className="bg-gradient-to-br from-zinc-50 via-blue-50 to-violet-50 py-20 dark:from-zinc-950 dark:via-zinc-900 dark:to-zinc-950">
        <div className="mx-auto max-w-4xl px-6 text-center">
          <h1 className="text-4xl font-bold tracking-tight text-zinc-900 dark:text-white md:text-5xl">
            Features & Modules
          </h1>
          <p className="mt-6 text-lg leading-8 text-zinc-600 dark:text-zinc-400">
            8 specialized AI modules designed to address every critical business need — all powered by our intelligent AI Router.
          </p>
        </div>
      </section>

      {/* Modules Grid */}
      <section className="border-t border-zinc-200 bg-white py-20 dark:border-zinc-800 dark:bg-zinc-950">
        <div className="mx-auto max-w-6xl px-6">
          <div className="grid gap-8 md:grid-cols-2">
            {modules.map((m) => (
              <div key={m.title} className="group rounded-2xl border border-zinc-200 bg-zinc-50 p-8 transition hover:border-blue-300 hover:shadow-lg dark:border-zinc-800 dark:bg-zinc-900 dark:hover:border-blue-700">
                <div className="flex items-center gap-4">
                  <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-blue-50 text-2xl transition group-hover:bg-blue-100 dark:bg-blue-950 dark:group-hover:bg-blue-900">
                    {m.icon}
                  </div>
                  <h3 className="text-xl font-bold text-zinc-900 dark:text-white">{m.title}</h3>
                </div>
                <p className="mt-4 text-sm leading-6 text-zinc-600 dark:text-zinc-400">{m.desc}</p>
                <ul className="mt-6 space-y-2">
                  {m.features.map((f) => (
                    <li key={f} className="flex items-center gap-2 text-sm text-zinc-700 dark:text-zinc-300">
                      <span className="flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-blue-100 text-xs text-blue-600 dark:bg-blue-900 dark:text-blue-300">✓</span>
                      {f}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* AI Router Detail */}
      <section className="border-t border-zinc-200 bg-zinc-50 py-20 dark:border-zinc-800 dark:bg-zinc-900">
        <div className="mx-auto max-w-4xl px-6">
          <h2 className="text-center text-2xl font-bold text-zinc-900 dark:text-white">Powered by AI Router Technology</h2>
          <p className="mt-4 text-center text-zinc-600 dark:text-zinc-400">
            Every module benefits from our intelligent routing system that selects the optimal AI engine for each task.
          </p>
          <div className="mt-12 grid gap-6 md:grid-cols-3">
            {[
              { icon: "⚡", title: "Speed", desc: "Intelligent caching and optimized response paths for sub-second performance" },
              { icon: "🎯", title: "Accuracy", desc: "Task-specific AI engine selection ensures the highest quality results" },
              { icon: "💰", title: "Cost Efficiency", desc: "Dynamic routing to cost-effective models for routine operations" },
            ].map((r) => (
              <div key={r.title} className="rounded-xl border border-zinc-200 bg-white p-6 text-center dark:border-zinc-800 dark:bg-zinc-950">
                <div className="text-3xl">{r.icon}</div>
                <h3 className="mt-3 font-semibold text-zinc-900 dark:text-white">{r.title}</h3>
                <p className="mt-2 text-sm text-zinc-500 dark:text-zinc-400">{r.desc}</p>
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
