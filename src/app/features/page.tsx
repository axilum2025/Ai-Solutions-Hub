import Link from "next/link";

const modules = [
  {
    icon: "📢",
    title: "AI Marketing & Business Growth",
    desc: "Transform your marketing strategy with AI-powered campaign generation, audience targeting, and growth analytics. Our marketing module leverages advanced AI to create compelling campaigns, analyze market trends, and identify growth opportunities.",
    longDesc: "Generate data-driven marketing strategies, optimize conversion funnels, and track campaign performance in real-time. The system provides actionable insights for market positioning, competitive analysis, and customer segmentation to maximize your marketing ROI.",
    features: ["AI-powered campaign generation", "Audience targeting & segmentation", "Growth analytics & ROI tracking", "Competitive analysis & market trends"],
  },
  {
    icon: "⚖️",
    title: "AI Legal Advisor",
    desc: "Access comprehensive legal guidance for business operations, contracts, and compliance matters. Our AI Legal Advisor provides expert analysis of legal documents, contract review, compliance checking, and regulatory guidance.",
    longDesc: "Get instant answers to legal questions, draft legal documents with AI assistance, and ensure your business operations comply with relevant regulations. The module covers business formation, intellectual property, employment law, and contract management with professional-grade analysis and recommendations.",
    features: ["Contract review & analysis", "Compliance checking & regulatory guidance", "AI-assisted document drafting", "IP, employment law & business formation"],
  },
  {
    icon: "📦",
    title: "AI Smart Inventory Tracker",
    desc: "Optimize inventory management with intelligent demand forecasting, stock level monitoring, and automated reordering. Our Smart Inventory system uses AI to predict demand patterns, prevent stockouts, and minimize excess inventory costs.",
    longDesc: "Track products across multiple locations, generate automated purchase orders, and receive alerts for low stock levels. Advanced analytics provide insights into inventory turnover, seasonal trends, and optimal reorder points to maximize inventory efficiency and reduce carrying costs.",
    features: ["Intelligent demand forecasting", "Automated reordering & purchase orders", "Multi-location stock tracking", "Seasonal trends & reorder optimization"],
  },
  {
    icon: "📞",
    title: "AI Voice & SMS Support",
    desc: "Deliver exceptional customer support through AI-powered voice and SMS automation integrated with Twilio. Handle customer inquiries 24/7 with intelligent conversational AI that understands context, sentiment, and intent.",
    longDesc: "Automate routine support tasks, route complex issues to human agents, and maintain conversation history for personalized interactions. The system supports multi-channel communication, automated follow-ups, and real-time sentiment analysis to ensure customer satisfaction and efficient support operations.",
    features: ["24/7 voice & SMS automation (Twilio)", "Context-aware conversational AI", "Intelligent routing to human agents", "Real-time sentiment analysis"],
  },
  {
    icon: "✉️",
    title: "AI Email Assistant",
    desc: "Create and manage sophisticated email campaigns with AI-powered content generation and SendGrid integration. Generate personalized email content, compelling subject lines, and targeted messaging based on audience segments.",
    longDesc: "Schedule automated email sequences, A/B test different approaches, and track engagement metrics including open rates, click-through rates, and conversions. The assistant learns from campaign performance to continuously improve email effectiveness and delivers actionable insights for optimizing your email marketing strategy.",
    features: ["AI content generation (SendGrid)", "Personalized subject lines & messaging", "Automated sequences & A/B testing", "Open rate, CTR & conversion tracking"],
  },
  {
    icon: "📊",
    title: "AI Data Analyzer & Insights",
    desc: "Transform raw data into actionable insights with advanced analytics and predictive modeling. Our Data Analyzer processes complex datasets to identify trends, patterns, and anomalies that drive business decisions.",
    longDesc: "Upload CSV files, connect to databases, and visualize data through interactive dashboards. Get AI-generated insights including statistical analysis, correlation discovery, predictive forecasting, and recommendation reports. The module supports custom metrics, automated reporting, and real-time data visualization to empower data-driven decision making.",
    features: ["CSV upload & database connections", "Interactive dashboards & visualization", "Predictive forecasting & correlation analysis", "Automated reporting & custom metrics"],
  },
  {
    icon: "🚚",
    title: "AI Logistics & Route Optimizer",
    desc: "Optimize delivery routes, reduce transportation costs, and improve logistics efficiency with AI-powered route planning integrated with Google Maps. Calculate optimal delivery sequences considering traffic patterns, time windows, vehicle capacity, and distance constraints.",
    longDesc: "Track shipments in real-time, manage fleet operations, and reduce fuel costs through intelligent route optimization. The system provides predictive ETAs, identifies bottlenecks, and suggests alternative routes to ensure on-time deliveries while minimizing operational costs and environmental impact.",
    features: ["Google Maps route optimization", "Real-time shipment tracking", "Fleet management & fuel optimization", "Predictive ETAs & bottleneck detection"],
  },
  {
    icon: "📄",
    title: "AI Document Automation & e-Sign",
    desc: "Streamline document workflows with AI-powered document generation, template management, and electronic signatures. Automatically create contracts, agreements, and business documents using intelligent templates with variable substitution.",
    longDesc: "Generate custom documents from prompts, manage document versions, and track approval workflows. The system includes secure e-signature capabilities, document storage, automated notifications, and compliance tracking. Reduce manual document processing time, eliminate errors, and maintain organized document repositories with comprehensive audit trails.",
    features: ["AI document generation & templates", "Secure electronic signatures", "Version control & approval workflows", "Automated notifications & audit trails"],
  },
];

export default function FeaturesPage() {
  return (
    <div className="min-h-screen">
      {/* Hero */}
      <section className="bg-gradient-to-br from-zinc-50 via-blue-50 to-violet-50 py-20 dark:from-zinc-950 dark:via-zinc-900 dark:to-zinc-950">
        <div className="mx-auto max-w-4xl px-6 text-center">
          <h1 className="text-4xl font-bold tracking-tight text-zinc-900 dark:text-white md:text-5xl">
            Powerful Features
          </h1>
          <p className="mt-6 text-lg leading-8 text-zinc-600 dark:text-zinc-400">
            Explore our comprehensive suite of 8 specialized AI modules designed to transform every aspect of your business operations.
          </p>
        </div>
      </section>

      {/* Modules — full detail */}
      <section className="border-t border-zinc-200 bg-white py-20 dark:border-zinc-800 dark:bg-zinc-950">
        <div className="mx-auto max-w-5xl px-6">
          <div className="space-y-10">
            {modules.map((m, i) => (
              <div key={m.title} className="group rounded-2xl border border-zinc-200 bg-zinc-50 p-8 transition hover:border-blue-300 hover:shadow-lg dark:border-zinc-800 dark:bg-zinc-900 dark:hover:border-blue-700 md:p-10">
                <div className="flex items-center gap-4">
                  <div className="flex h-14 w-14 items-center justify-center rounded-xl bg-blue-50 text-3xl transition group-hover:bg-blue-100 dark:bg-blue-950 dark:group-hover:bg-blue-900">
                    {m.icon}
                  </div>
                  <div>
                    <span className="text-xs font-semibold uppercase tracking-wider text-blue-600 dark:text-blue-400">Module {i + 1}</span>
                    <h3 className="text-xl font-bold text-zinc-900 dark:text-white">{m.title}</h3>
                  </div>
                </div>
                <p className="mt-5 leading-7 text-zinc-600 dark:text-zinc-400">{m.desc}</p>
                <p className="mt-3 leading-7 text-zinc-600 dark:text-zinc-400">{m.longDesc}</p>
                <ul className="mt-6 grid gap-2 sm:grid-cols-2">
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

      {/* Platform Benefits */}
      <section className="border-t border-zinc-200 bg-zinc-50 py-20 dark:border-zinc-800 dark:bg-zinc-900">
        <div className="mx-auto max-w-5xl px-6">
          <h2 className="text-center text-2xl font-bold text-zinc-900 dark:text-white">Platform Benefits</h2>
          <div className="mt-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {[
              { icon: "🧠", text: "All modules integrate with our AI Router for intelligent task processing" },
              { icon: "💳", text: "Subscription-based access with Free, Pro, and Enterprise tiers" },
              { icon: "📈", text: "Real-time usage tracking and analytics across all modules" },
              { icon: "🔗", text: "Seamless integration between modules for unified workflows" },
              { icon: "🛡️", text: "Enterprise-grade security and data protection" },
              { icon: "🚀", text: "Regular updates with new AI capabilities and features" },
            ].map((b) => (
              <div key={b.text} className="flex items-start gap-3 rounded-xl border border-zinc-200 bg-white p-5 dark:border-zinc-800 dark:bg-zinc-950">
                <span className="mt-0.5 text-xl">{b.icon}</span>
                <span className="text-sm leading-6 text-zinc-700 dark:text-zinc-300">{b.text}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Seamless Integration */}
      <section className="border-t border-zinc-200 bg-white py-20 dark:border-zinc-800 dark:bg-zinc-950">
        <div className="mx-auto max-w-5xl px-6">
          <h2 className="text-center text-2xl font-bold text-zinc-900 dark:text-white">Seamless Integration</h2>
          <div className="mt-12 grid gap-6 md:grid-cols-3">
            {[
              { icon: "🧠", title: "AI Router", desc: "Intelligent task routing across multiple AI engines for optimal performance" },
              { icon: "📊", title: "Analytics", desc: "Comprehensive tracking and insights across all modules and operations" },
              { icon: "🔗", title: "Unified Platform", desc: "All modules work together seamlessly in one integrated ecosystem" },
            ].map((r) => (
              <div key={r.title} className="rounded-2xl border border-zinc-200 bg-zinc-50 p-8 text-center transition hover:border-blue-300 hover:shadow-lg dark:border-zinc-800 dark:bg-zinc-900 dark:hover:border-blue-700">
                <div className="mx-auto flex h-14 w-14 items-center justify-center rounded-xl bg-blue-50 text-2xl dark:bg-blue-950">{r.icon}</div>
                <h3 className="mt-4 font-semibold text-zinc-900 dark:text-white">{r.title}</h3>
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
            Ready to Get Started?
          </h2>
          <p className="mt-4 text-lg text-blue-100">
            Choose your plan and start transforming your business with AI today.
          </p>
          <div className="mt-8 flex flex-col items-center gap-4 sm:flex-row sm:justify-center">
            <Link href="/signin" className="w-full rounded-full bg-white px-8 py-3.5 text-sm font-semibold text-blue-600 shadow-lg transition hover:bg-zinc-100 sm:w-auto">
              Start Free Trial
            </Link>
            <Link href="/about" className="w-full rounded-full border border-white/30 px-8 py-3.5 text-sm font-semibold text-white transition hover:bg-white/10 sm:w-auto">
              Learn More
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
