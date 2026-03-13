import Link from "next/link";

export default function AboutPage() {
  return (
    <div className="min-h-screen">
      {/* Hero */}
      <section className="bg-gradient-to-br from-zinc-50 via-blue-50 to-violet-50 py-20 dark:from-zinc-950 dark:via-zinc-900 dark:to-zinc-950">
        <div className="mx-auto max-w-4xl px-6 text-center">
          <h1 className="text-4xl font-bold tracking-tight text-zinc-900 dark:text-white md:text-5xl">
            About AI Solutions Hub
          </h1>
          <p className="mt-6 text-lg leading-8 text-zinc-600 dark:text-zinc-400">
            Empowering businesses with comprehensive AI automation through intelligent technology and innovative solutions.
          </p>
        </div>
      </section>

      {/* Platform Overview */}
      <section className="border-t border-zinc-200 bg-white py-20 dark:border-zinc-800 dark:bg-zinc-950">
        <div className="mx-auto max-w-4xl px-6">
          <h2 className="text-2xl font-bold text-zinc-900 dark:text-white">Platform Overview</h2>
          <div className="mt-6 space-y-4 text-zinc-600 dark:text-zinc-400 leading-7">
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
      <section className="border-t border-zinc-200 bg-zinc-50 py-20 dark:border-zinc-800 dark:bg-zinc-900">
        <div className="mx-auto max-w-4xl px-6">
          <h2 className="text-2xl font-bold text-zinc-900 dark:text-white">AI Router Technology</h2>
          <div className="mt-6 space-y-4 text-zinc-600 dark:text-zinc-400 leading-7">
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
      <section className="border-t border-zinc-200 bg-white py-20 dark:border-zinc-800 dark:bg-zinc-950">
        <div className="mx-auto max-w-6xl px-6">
          <h2 className="mb-12 text-center text-2xl font-bold text-zinc-900 dark:text-white">Platform Architecture</h2>
          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4">
            {[
              { icon: "🧠", title: "AI Router Technology", desc: "Multi-engine routing with Gemini, Llama, and specialized AI engines" },
              { icon: "🗄️", title: "Supabase Backend", desc: "Real-time database, authentication, and edge functions" },
              { icon: "🛡️", title: "Enterprise Security", desc: "Role-based access control and data encryption" },
              { icon: "🌐", title: "Edge Computing", desc: "Global edge functions for low-latency responses" },
            ].map((a) => (
              <div key={a.title} className="rounded-2xl border border-zinc-200 bg-zinc-50 p-6 text-center dark:border-zinc-800 dark:bg-zinc-900">
                <div className="mx-auto flex h-14 w-14 items-center justify-center rounded-xl bg-blue-50 text-2xl dark:bg-blue-950">{a.icon}</div>
                <h3 className="mt-4 font-semibold text-zinc-900 dark:text-white">{a.title}</h3>
                <p className="mt-2 text-sm text-zinc-500 dark:text-zinc-400">{a.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Technology Stack */}
      <section className="border-t border-zinc-200 bg-zinc-50 py-20 dark:border-zinc-800 dark:bg-zinc-900">
        <div className="mx-auto max-w-4xl px-6">
          <h2 className="text-2xl font-bold text-zinc-900 dark:text-white">Technology Stack</h2>
          <p className="mt-6 text-zinc-600 dark:text-zinc-400 leading-7">
            Our platform is built on a modern, scalable architecture leveraging Supabase for backend services including PostgreSQL database, real-time subscriptions, authentication, and storage. Edge functions deployed globally ensure low-latency responses regardless of user location. We implement comprehensive security measures including row-level security policies, encrypted data transmission, and role-based access control to protect your sensitive business information.
          </p>
          <div className="mt-10 grid gap-4 md:grid-cols-3">
            {[
              { icon: "🔒", title: "Security First", desc: "End-to-end encryption" },
              { icon: "🌍", title: "Global Scale", desc: "Edge network deployment" },
              { icon: "⚡", title: "High Performance", desc: "Real-time processing" },
            ].map((s) => (
              <div key={s.title} className="flex items-center gap-4 rounded-xl border border-zinc-200 bg-white p-5 dark:border-zinc-800 dark:bg-zinc-950">
                <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-gradient-to-br from-blue-600 to-violet-600 text-lg">{s.icon}</div>
                <div>
                  <div className="font-semibold text-zinc-900 dark:text-white">{s.title}</div>
                  <div className="text-sm text-zinc-500 dark:text-zinc-400">{s.desc}</div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Mission & Vision */}
      <section className="border-t border-zinc-200 bg-white py-20 dark:border-zinc-800 dark:bg-zinc-950">
        <div className="mx-auto max-w-4xl px-6">
          <div className="grid gap-12 md:grid-cols-2">
            <div>
              <h2 className="text-2xl font-bold text-zinc-900 dark:text-white">Our Mission</h2>
              <div className="mt-4 space-y-4 text-zinc-600 dark:text-zinc-400 leading-7">
                <p>
                  To empower businesses of all sizes with comprehensive AI automation tools that are powerful, accessible, and cost-effective. We believe that advanced AI capabilities should not be limited to large enterprises with extensive technical resources.
                </p>
                <p>
                  Our mission is to democratize AI technology by providing an all-in-one platform that eliminates complexity while delivering enterprise-grade capabilities. We strive to make AI adoption seamless, enabling businesses to focus on growth rather than infrastructure management.
                </p>
              </div>
            </div>
            <div>
              <h2 className="text-2xl font-bold text-zinc-900 dark:text-white">Our Vision</h2>
              <div className="mt-4 space-y-4 text-zinc-600 dark:text-zinc-400 leading-7">
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
      <section className="border-t border-zinc-200 bg-zinc-50 py-20 dark:border-zinc-800 dark:bg-zinc-900">
        <div className="mx-auto max-w-4xl px-6">
          <h2 className="text-2xl font-bold text-zinc-900 dark:text-white">Our Core Principles</h2>
          <div className="mt-8 space-y-4">
            {[
              { icon: "💡", text: "Innovation through intelligent AI routing and task optimization" },
              { icon: "🔐", text: "Security with enterprise-grade authentication and data protection" },
              { icon: "📈", text: "Scalability built on modern cloud infrastructure" },
              { icon: "✅", text: "Reliability with automated failover and monitoring" },
              { icon: "🎯", text: "Accessibility through intuitive interfaces and comprehensive documentation" },
            ].map((p) => (
              <div key={p.text} className="flex items-start gap-4 rounded-xl border border-zinc-200 bg-white p-5 dark:border-zinc-800 dark:bg-zinc-950">
                <span className="mt-0.5 text-xl">{p.icon}</span>
                <span className="text-zinc-700 dark:text-zinc-300">{p.text}</span>
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
