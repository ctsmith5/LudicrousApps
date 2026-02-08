type Service = {
  title: string;
  description: string;
  highlights: string[];
  icon: string;
  gradient: string;
};

const SERVICES: Service[] = [
  {
    title: "Mobile Apps",
    description:
      "Beautiful, performant mobile experiences built with Flutter and native iOS. From concept to App Store.",
    highlights: ["Flutter", "iOS", "App Store", "Performance"],
    icon: "M12 18h.01M8 21h8a2 2 0 002-2V5a2 2 0 00-2-2H8a2 2 0 00-2 2v14a2 2 0 002 2z",
    gradient: "from-purple-500 to-purple-600",
  },
  {
    title: "Web Platforms",
    description:
      "Modern web applications with React, TypeScript, and responsive design that works everywhere.",
    highlights: ["React", "TypeScript", "Responsive", "SEO"],
    icon: "M21 12a9 9 0 01-9 9m9-9a9 9 0 00-9-9m9 9H3m9 9a9 9 0 01-9-9m9 9c1.657 0 3-4.03 3-9s-1.343-9-3-9m0 18c-1.657 0-3-4.03-3-9s1.343-9 3-9m-9 9a9 9 0 019-9",
    gradient: "from-cyan-500 to-cyan-600",
  },
  {
    title: "Backend & APIs",
    description:
      "Scalable APIs and microservices built with Go and C#. REST, GraphQL, and real-time systems.",
    highlights: ["Go", "C#", "REST/GraphQL", "Microservices"],
    icon: "M5 12h14M5 12a2 2 0 01-2-2V6a2 2 0 012-2h14a2 2 0 012 2v4a2 2 0 01-2 2M5 12a2 2 0 00-2 2v4a2 2 0 002 2h14a2 2 0 002-2v-4a2 2 0 00-2-2m-2-4h.01M17 16h.01",
    gradient: "from-purple-600 to-cyan-500",
  },
  {
    title: "Cloud Infrastructure",
    description:
      "Production-ready deployments on Google Cloud with CI/CD, monitoring, and cost optimization.",
    highlights: ["Google Cloud", "CI/CD", "Docker", "Kubernetes"],
    icon: "M3 15a4 4 0 004 4h9a5 5 0 10-.1-9.999 5.002 5.002 0 10-9.78 2.096A4.001 4.001 0 003 15z",
    gradient: "from-cyan-600 to-purple-500",
  },
];

export function Services() {
  return (
    <section id="services" className="scroll-mt-24 py-20 sm:py-28">
      <div className="mx-auto max-w-6xl px-6">
        {/* Header */}
        <div className="mb-16 text-center">
          <p className="text-sm font-semibold uppercase tracking-wider text-purple-600 dark:text-cyan-400">
            Services
          </p>
          <h2 className="mt-3 text-balance text-4xl font-bold tracking-tight text-slate-900 dark:text-slate-100 sm:text-5xl">
            What I Build
          </h2>
          <p className="mx-auto mt-4 max-w-2xl text-lg text-slate-600 dark:text-slate-300">
            From first prototype to production deployment — shipped with clean 
            engineering and rapid feedback loops.
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {SERVICES.map((service) => (
            <div
              key={service.title}
              className="group relative overflow-hidden rounded-2xl border border-slate-200 bg-white p-6 shadow-sm transition-all hover:-translate-y-1 hover:shadow-xl dark:border-slate-700 dark:bg-slate-800"
            >
              {/* Gradient border on hover */}
              <div className={`absolute inset-0 rounded-2xl bg-gradient-to-r ${service.gradient} opacity-0 transition-opacity group-hover:opacity-100`} style={{ padding: '2px' }}>
                <div className="h-full w-full rounded-2xl bg-white dark:bg-slate-800" />
              </div>
              
              <div className="relative">
                {/* Icon */}
                <div className={`mb-4 inline-flex h-12 w-12 items-center justify-center rounded-xl bg-gradient-to-r ${service.gradient} text-white shadow-lg`}>
                  <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d={service.icon} />
                  </svg>
                </div>

                <h3 className="text-lg font-bold text-slate-900 dark:text-slate-100">
                  {service.title}
                </h3>
                
                <p className="mt-2 text-sm text-slate-600 dark:text-slate-300">
                  {service.description}
                </p>

                {/* Highlights */}
                <div className="mt-4 flex flex-wrap gap-1.5">
                  {service.highlights.map((h) => (
                    <span
                      key={h}
                      className="rounded-full bg-slate-100 px-2.5 py-0.5 text-xs font-medium text-slate-600 dark:bg-slate-700 dark:text-slate-300"
                    >
                      {h}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Bottom CTA */}
        <div className="mt-12 text-center">
          <a
            href="#contact"
            className="inline-flex items-center justify-center rounded-xl bg-gradient-to-r from-purple-600 to-cyan-500 px-6 py-3 text-sm font-semibold text-white shadow-lg shadow-purple-500/25 transition-all hover:shadow-purple-500/40"
          >
            Discuss your project
            <svg className="ml-2 h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
            </svg>
          </a>
        </div>
      </div>
    </section>
  );
}
