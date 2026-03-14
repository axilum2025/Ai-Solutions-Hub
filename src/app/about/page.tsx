import Link from "next/link";
import {
  BrainIcon, DatabaseIcon, ShieldIcon, GlobeIcon,
  LockIcon, BoltIcon, SparklesIcon, RouterIcon,
} from "@/components/Icons";

export default function AboutPage() {
  return (
    <div className="min-h-screen bg-[#05050a] text-white">
      {/* Hero */}
      <section className="relative overflow-hidden py-24">
        <div className="absolute inset-0 bg-mesh" />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 h-80 w-80 rounded-full bg-indigo-500/10 blur-[120px]" />
        <div className="relative mx-auto max-w-4xl px-6 text-center">
          <h1 className="text-4xl font-bold tracking-tight md:text-5xl">
            About <span className="text-gradient">AI Solutions Hub</span>
          </h1>
          <p className="mt-6 text-lg leading-8 text-zinc-400">
            Empowering businesses with comprehensive AI automation through intelligent technology and innovative solutions.
          </p>
        </div>
      </section>

      {/* Platform Overview */}
      <section className="relative border-t border-white/5 py-24">
        <div className="relative mx-auto max-w-4xl px-6">
          <h2 className="text-2xl font-bold">Platform <span className="text-gradient">Overview</span></h2>
          <div className="mt-6 space-y-4 text-zinc-400 leading-7">
            <p>
              AI Solutions Hub is an enterprise-grade AI platform designed to transform business operations through intelligent automation. We combine cutting-edge artificial intelligence with robust infrastructure to deliver 8 specialized modules that address critical business needs.
            </p>
            <p>
              Our platform serves as a comprehensive solution for businesses seeking to leverage AI technology without the complexity of managing multiple vendors, APIs, and integration points. From marketing automation to legal guidance, from inventory management to document processing, we provide a unified ecosystem that streamlines operations and drives growth.
            </p>
            <p>
              Built on modern cloud infrastructure and powered by multiple AI engines, AI Solutions Hub delivers reliable, scalable, and secure solutions that adapt to your business requirements. Our commitment to innovation ensures that you always have access to the latest AI capabilities while maintaining enterprise-level security and compliance standards.
            </p>
          </div>
        </div>
      </section>

      {/* AI Router Technology */}
      <section className="relative border-t border-white/5 py-24">
        <div className="absolute inset-0 bg-mesh opacity-30" />
        <div className="relative mx-auto max-w-4xl px-6">
          <h2 className="text-2xl font-bold">AI Router <span className="text-gradient">Technology</span></h2>
          <div className="mt-6 space-y-4 text-zinc-400 leading-7">
            <p>
              At the core of our platform lies our proprietary AI Router Technology — an intelligent routing system that automatically selects the optimal AI engine for each task. This multi-engine approach ensures superior performance, cost efficiency, and reliability.
            </p>
            <p>
              Our AI Router intelligently distributes tasks across multiple AI providers including Google Gemini for complex analysis, specialized OCR engines for document processing, sentiment analysis for customer communications, and cost-effective models for routine operations. This dynamic routing happens seamlessly in the background, optimizing for speed, accuracy, and cost.
            </p>
            <p>
              The system includes automatic failover capabilities, ensuring uninterrupted service even if one AI provider experiences issues. Combined with intelligent caching and response optimization, our AI Router delivers enterprise-grade reliability while maintaining optimal performance across all modules.
            </p>
          </div>
        </div>
      </section>

      {/* Platform Architecture */}
      <section className="relative border-t border-white/5 py-24">
        <div className="absolute inset-0 bg-mesh opacity-40" />
        <div className="relative mx-auto max-w-6xl px-6">
          <h2 className="mb-12 text-center text-2xl font-bold">Platform <span className="text-gradient">Architecture</span></h2>
          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4">
            {[
              { Icon: BrainIcon, title: "AI Router Technology", desc: "Multi-engine routing with Gemini, Llama, and specialized AI engines" },
              { Icon: DatabaseIcon, title: "Supabase Backend", desc: "Real-time database, authentication, and edge functions" },
              { Icon: ShieldIcon, title: "Enterprise Security", desc: "Role-based access control and data encryption" },
              { Icon: GlobeIcon, title: "Edge Computing", desc: "Global edge functions for low-latency responses" },
            ].map((a, i) => (
              <div key={a.title} className="glass-card glow-border rounded-2xl p-6 text-center animate-slide-up" style={{ animationDelay: `${i * 150}ms` }}>
                <div className="mx-auto flex h-14 w-14 items-center justify-center rounded-xl bg-indigo-500/10">
                  <a.Icon className="h-8 w-8" />
                </div>
                <h3 className="mt-4 font-semibold text-white">{a.title}</h3>
                <p className="mt-2 text-sm text-zinc-500">{a.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Technology Stack */}
      <section className="relative border-t border-white/5 py-24">
        <div className="relative mx-auto max-w-4xl px-6">
          <h2 className="text-2xl font-bold">Technology <span className="text-gradient">Stack</span></h2>
          <p className="mt-6 text-zinc-400 leading-7">
            Our platform is built on a modern, scalable architecture leveraging Supabase for backend services including PostgreSQL database, real-time subscriptions, authentication, and storage. Edge functions deployed globally ensure low-latency responses regardless of user location. We implement comprehensive security measures including row-level security policies, encrypted data transmission, and role-based access control to protect your sensitive business information.
          </p>
          <div className="mt-10 grid gap-4 md:grid-cols-3">
            {[
              { Icon: LockIcon, title: "Security First", desc: "End-to-end encryption" },
              { Icon: GlobeIcon, title: "Global Scale", desc: "Edge network deployment" },
              { Icon: BoltIcon, title: "High Performance", desc: "Real-time processing" },
            ].map((s) => (
              <div key={s.title} className="glass-card flex items-center gap-4 rounded-xl p-5">
                <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-gradient-to-br from-indigo-600/20 to-purple-600/20">
                  <s.Icon className="h-5 w-5" />
                </div>
                <div>
                  <div className="font-semibold text-white">{s.title}</div>
                  <div className="text-sm text-zinc-500">{s.desc}</div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Mission & Vision */}
      <section className="relative border-t border-white/5 py-24">
        <div className="absolute inset-0 bg-mesh opacity-20" />
        <div className="relative mx-auto max-w-4xl px-6">
          <div className="grid gap-12 md:grid-cols-2">
            <div className="glass-card rounded-2xl p-8">
              <h2 className="text-2xl font-bold text-gradient">Our Mission</h2>
              <div className="mt-4 space-y-4 text-zinc-400 leading-7">
                <p>
                  To empower businesses of all sizes with comprehensive AI automation tools that are powerful, accessible, and cost-effective. We believe that advanced AI capabilities should not be limited to large enterprises with extensive technical resources.
                </p>
                <p>
                  Our mission is to democratize AI technology by providing an all-in-one platform that eliminates complexity while delivering enterprise-grade capabilities. We strive to make AI adoption seamless, enabling businesses to focus on growth rather than infrastructure management.
                </p>
              </div>
            </div>
            <div className="glass-card rounded-2xl p-8">
              <h2 className="text-2xl font-bold text-gradient">Our Vision</h2>
              <div className="mt-4 space-y-4 text-zinc-400 leading-7">
                <p>
                  To become the leading enterprise AI platform that transforms how businesses operate, enabling unprecedented efficiency, innovation, and growth through intelligent automation.
                </p>
                <p>
                  We envision a future where AI seamlessly integrates into every aspect of business operations, where complex tasks are automated intelligently, and where businesses can scale without proportional increases in operational complexity or costs.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Core Principles */}
      <section className="relative border-t border-white/5 py-24">
        <div className="relative mx-auto max-w-4xl px-6">
          <h2 className="text-2xl font-bold">Our Core <span className="text-gradient">Principles</span></h2>
          <div className="mt-8 space-y-4">
            {[
              { Icon: SparklesIcon, text: "Innovation through intelligent AI routing and task optimization" },
              { Icon: LockIcon, text: "Security with enterprise-grade authentication and data protection" },
              { Icon: RouterIcon, text: "Scalability built on modern cloud infrastructure" },
              { Icon: ShieldIcon, text: "Reliability with automated failover and monitoring" },
              { Icon: BrainIcon, text: "Accessibility through intuitive interfaces and comprehensive documentation" },
            ].map((p) => (
              <div key={p.text} className="glass-card flex items-start gap-4 rounded-xl p-5">
                <p.Icon className="mt-0.5 h-6 w-6 shrink-0" />
                <span className="text-zinc-300">{p.text}</span>
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
