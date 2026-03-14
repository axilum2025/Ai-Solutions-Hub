import Link from "next/link";
import {
  MarketingIcon, LegalIcon, InventoryIcon, VoiceIcon,
  EmailIcon, DataIcon, LogisticsIcon, DocumentIcon,
  BrainIcon, RouterIcon, ShieldIcon, SparklesIcon, GlobeIcon, BoltIcon,
} from "@/components/Icons";
import type { ComponentType } from "react";

const modules: { Icon: ComponentType<{ className?: string }>; title: string; desc: string; longDesc: string; features: string[] }[] = [
  {
    Icon: MarketingIcon,
    title: "AI Marketing & Business Growth",
    desc: "Transform your marketing strategy with AI-powered campaign generation, audience targeting, and growth analytics. Our marketing module leverages advanced AI to create compelling campaigns, analyze market trends, and identify growth opportunities.",
    longDesc: "Generate data-driven marketing strategies, optimize conversion funnels, and track campaign performance in real-time. The system provides actionable insights for market positioning, competitive analysis, and customer segmentation to maximize your marketing ROI.",
    features: ["AI-powered campaign generation", "Audience targeting & segmentation", "Growth analytics & ROI tracking", "Competitive analysis & market trends"],
  },
  {
    Icon: LegalIcon,
    title: "AI Legal Advisor",
    desc: "Access comprehensive legal guidance for business operations, contracts, and compliance matters. Our AI Legal Advisor provides expert analysis of legal documents, contract review, compliance checking, and regulatory guidance.",
    longDesc: "Get instant answers to legal questions, draft legal documents with AI assistance, and ensure your business operations comply with relevant regulations. The module covers business formation, intellectual property, employment law, and contract management with professional-grade analysis and recommendations.",
    features: ["Contract review & analysis", "Compliance checking & regulatory guidance", "AI-assisted document drafting", "IP, employment law & business formation"],
  },
  {
    Icon: InventoryIcon,
    title: "AI Smart Inventory Tracker",
    desc: "Optimize inventory management with intelligent demand forecasting, stock level monitoring, and automated reordering. Our Smart Inventory system uses AI to predict demand patterns, prevent stockouts, and minimize excess inventory costs.",
    longDesc: "Track products across multiple locations, generate automated purchase orders, and receive alerts for low stock levels. Advanced analytics provide insights into inventory turnover, seasonal trends, and optimal reorder points to maximize inventory efficiency and reduce carrying costs.",
    features: ["Intelligent demand forecasting", "Automated reordering & purchase orders", "Multi-location stock tracking", "Seasonal trends & reorder optimization"],
  },
  {
    Icon: VoiceIcon,
    title: "AI Voice & SMS Support",
    desc: "Deliver exceptional customer support through AI-powered voice and SMS automation integrated with Twilio. Handle customer inquiries 24/7 with intelligent conversational AI that understands context, sentiment, and intent.",
    longDesc: "Automate routine support tasks, route complex issues to human agents, and maintain conversation history for personalized interactions. The system supports multi-channel communication, automated follow-ups, and real-time sentiment analysis to ensure customer satisfaction and efficient support operations.",
    features: ["24/7 voice & SMS automation (Twilio)", "Context-aware conversational AI", "Intelligent routing to human agents", "Real-time sentiment analysis"],
  },
  {
    Icon: EmailIcon,
    title: "AI Email Assistant",
    desc: "Create and manage sophisticated email campaigns with AI-powered content generation and SendGrid integration. Generate personalized email content, compelling subject lines, and targeted messaging based on audience segments.",
    longDesc: "Schedule automated email sequences, A/B test different approaches, and track engagement metrics including open rates, click-through rates, and conversions. The assistant learns from campaign performance to continuously improve email effectiveness and delivers actionable insights for optimizing your email marketing strategy.",
    features: ["AI content generation (SendGrid)", "Personalized subject lines & messaging", "Automated sequences & A/B testing", "Open rate, CTR & conversion tracking"],
  },
  {
    Icon: DataIcon,
    title: "AI Data Analyzer & Insights",
    desc: "Transform raw data into actionable insights with advanced analytics and predictive modeling. Our Data Analyzer processes complex datasets to identify trends, patterns, and anomalies that drive business decisions.",
    longDesc: "Upload CSV files, connect to databases, and visualize data through interactive dashboards. Get AI-generated insights including statistical analysis, correlation discovery, predictive forecasting, and recommendation reports. The module supports custom metrics, automated reporting, and real-time data visualization to empower data-driven decision making.",
    features: ["CSV upload & database connections", "Interactive dashboards & visualization", "Predictive forecasting & correlation analysis", "Automated reporting & custom metrics"],
  },
  {
    Icon: LogisticsIcon,
    title: "AI Logistics & Route Optimizer",
    desc: "Optimize delivery routes, reduce transportation costs, and improve logistics efficiency with AI-powered route planning integrated with Google Maps. Calculate optimal delivery sequences considering traffic patterns, time windows, vehicle capacity, and distance constraints.",
    longDesc: "Track shipments in real-time, manage fleet operations, and reduce fuel costs through intelligent route optimization. The system provides predictive ETAs, identifies bottlenecks, and suggests alternative routes to ensure on-time deliveries while minimizing operational costs and environmental impact.",
    features: ["Google Maps route optimization", "Real-time shipment tracking", "Fleet management & fuel optimization", "Predictive ETAs & bottleneck detection"],
  },
  {
    Icon: DocumentIcon,
    title: "AI Document Automation & e-Sign",
    desc: "Streamline document workflows with AI-powered document generation, template management, and electronic signatures. Automatically create contracts, agreements, and business documents using intelligent templates with variable substitution.",
    longDesc: "Generate custom documents from prompts, manage document versions, and track approval workflows. The system includes secure e-signature capabilities, document storage, automated notifications, and compliance tracking. Reduce manual document processing time, eliminate errors, and maintain organized document repositories with comprehensive audit trails.",
    features: ["AI document generation & templates", "Secure electronic signatures", "Version control & approval workflows", "Automated notifications & audit trails"],
  },
];

export default function FeaturesPage() {
  return (
    <div className="min-h-screen bg-[#05050a] text-white">
      {/* Hero */}
      <section className="relative overflow-hidden py-24">
        <div className="absolute inset-0 bg-mesh" />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 h-80 w-80 rounded-full bg-purple-500/10 blur-[120px]" />
        <div className="relative mx-auto max-w-4xl px-6 text-center">
          <h1 className="text-4xl font-bold tracking-tight md:text-5xl">
            Powerful <span className="text-gradient">Features</span>
          </h1>
          <p className="mt-6 text-lg leading-8 text-zinc-400">
            Explore our comprehensive suite of 8 specialized AI modules designed to transform every aspect of your business operations.
          </p>
        </div>
      </section>

      {/* Modules — full detail */}
      <section className="relative border-t border-white/5 py-24">
        <div className="absolute inset-0 bg-mesh opacity-30" />
        <div className="relative mx-auto max-w-5xl px-6">
          <div className="space-y-8">
            {modules.map((m, i) => (
              <div key={m.title} className="glass-card glow-border group rounded-2xl p-8 md:p-10 animate-slide-up" style={{ animationDelay: `${i * 80}ms` }}>
                <div className="flex items-center gap-4">
                  <div className="flex h-14 w-14 items-center justify-center rounded-xl bg-indigo-500/10 transition group-hover:bg-indigo-500/20">
                    <m.Icon className="h-8 w-8" />
                  </div>
                  <div>
                    <span className="text-xs font-semibold uppercase tracking-wider text-indigo-400">Module {i + 1}</span>
                    <h3 className="text-xl font-bold text-white">{m.title}</h3>
                  </div>
                </div>
                <p className="mt-5 leading-7 text-zinc-400">{m.desc}</p>
                <p className="mt-3 leading-7 text-zinc-400">{m.longDesc}</p>
                <ul className="mt-6 grid gap-2 sm:grid-cols-2">
                  {m.features.map((f) => (
                    <li key={f} className="flex items-center gap-2 text-sm text-zinc-300">
                      <span className="flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-indigo-500/20 text-xs text-indigo-400">✓</span>
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
      <section className="relative border-t border-white/5 py-24">
        <div className="absolute inset-0 bg-mesh opacity-20" />
        <div className="relative mx-auto max-w-5xl px-6">
          <h2 className="text-center text-2xl font-bold">
            Platform <span className="text-gradient">Benefits</span>
          </h2>
          <div className="mt-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {[
              { Icon: BrainIcon, text: "All modules integrate with our AI Router for intelligent task processing" },
              { Icon: SparklesIcon, text: "Subscription-based access with Free, Pro, and Enterprise tiers" },
              { Icon: DataIcon, text: "Real-time usage tracking and analytics across all modules" },
              { Icon: RouterIcon, text: "Seamless integration between modules for unified workflows" },
              { Icon: ShieldIcon, text: "Enterprise-grade security and data protection" },
              { Icon: BoltIcon, text: "Regular updates with new AI capabilities and features" },
            ].map((b) => (
              <div key={b.text} className="glass-card flex items-start gap-3 rounded-xl p-5">
                <b.Icon className="mt-0.5 h-6 w-6 shrink-0" />
                <span className="text-sm leading-6 text-zinc-300">{b.text}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Seamless Integration */}
      <section className="relative border-t border-white/5 py-24">
        <div className="absolute inset-0 bg-mesh opacity-30" />
        <div className="relative mx-auto max-w-5xl px-6">
          <h2 className="text-center text-2xl font-bold">
            Seamless <span className="text-gradient">Integration</span>
          </h2>
          <div className="mt-12 grid gap-6 md:grid-cols-3">
            {[
              { Icon: RouterIcon, title: "AI Router", desc: "Intelligent task routing across multiple AI engines for optimal performance" },
              { Icon: DataIcon, title: "Analytics", desc: "Comprehensive tracking and insights across all modules and operations" },
              { Icon: GlobeIcon, title: "Unified Platform", desc: "All modules work together seamlessly in one integrated ecosystem" },
            ].map((r) => (
              <div key={r.title} className="glass-card glow-border rounded-2xl p-8 text-center">
                <div className="mx-auto flex h-14 w-14 items-center justify-center rounded-xl bg-indigo-500/10">
                  <r.Icon className="h-8 w-8" />
                </div>
                <h3 className="mt-4 font-semibold text-white">{r.title}</h3>
                <p className="mt-2 text-sm text-zinc-500">{r.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="relative overflow-hidden border-t border-white/5 py-24">
        <div className="absolute inset-0 bg-gradient-to-br from-indigo-600/20 via-purple-600/10 to-transparent" />
        <div className="absolute inset-0 bg-mesh" />
        <div className="relative mx-auto max-w-3xl px-6 text-center">
          <h2 className="text-3xl font-bold tracking-tight">
            Ready to Get Started?
          </h2>
          <p className="mt-4 text-lg text-zinc-400">
            Choose your plan and start transforming your business with AI today.
          </p>
          <div className="mt-8 flex flex-col items-center gap-4 sm:flex-row sm:justify-center">
            <Link href="/signin" className="btn-futuristic w-full rounded-full px-8 py-3.5 text-sm font-semibold text-white sm:w-auto">
              <span>Start Free Trial</span>
            </Link>
            <Link href="/about" className="w-full rounded-full border border-white/10 px-8 py-3.5 text-sm font-semibold text-zinc-300 transition hover:border-indigo-500/30 hover:bg-white/5 sm:w-auto">
              Learn More
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
