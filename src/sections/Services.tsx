type Service = {
  title: string;
  description: string;
  highlights: string[];
};

const SERVICES: Service[] = [
  {
    title: "Mobile apps",
    description:
      "Modern mobile experiences with great UX, fast iteration, and production-grade reliability.",
    highlights: ["Flutter", "Native iOS", "App performance", "Crash/analytics"],
  },
  {
    title: "Backend + APIs",
    description:
      "APIs and services that are simple to operate, easy to extend, and built for scale.",
    highlights: ["Go", "C#", "Auth", "REST/GraphQL (as needed)"],
  },
  {
    title: "Cloud delivery",
    description:
      "Deploy with confidence using sensible infrastructure, CI/CD, and observability.",
    highlights: ["Google Cloud", "CI/CD", "Logging/metrics", "Cost awareness"],
  },
  {
    title: "Data systems",
    description:
      "Choose the right data model and keep it healthy as your product grows.",
    highlights: ["MongoDB", "Schema design", "Migrations", "Indexing"],
  },
];

export function Services() {
  return (
    <section id="services" className="scroll-mt-24 py-14 sm:py-20">
      <div className="mx-auto max-w-5xl px-6">
        <div className="flex flex-col gap-3 sm:flex-row sm:items-end sm:justify-between">
          <div>
            <p className="text-sm font-semibold text-brand-700">Services</p>
            <h2 className="mt-2 text-balance text-3xl font-semibold tracking-tight text-slate-900">
              What I build for clients
            </h2>
          </div>
          <p className="max-w-xl text-pretty text-sm text-slate-600 sm:text-base">
            From first prototype to production hardening — shipped with clean
            engineering and rapid feedback loops.
          </p>
        </div>

        <div className="mt-10 grid gap-5 sm:grid-cols-2">
          {SERVICES.map((service) => (
            <div
              key={service.title}
              className="rounded-3xl border border-slate-200 bg-white p-7 shadow-sm"
            >
              <h3 className="text-lg font-semibold tracking-tight text-slate-900">
                {service.title}
              </h3>
              <p className="mt-2 text-sm text-slate-600">
                {service.description}
              </p>
              <ul className="mt-5 flex flex-wrap gap-2">
                {service.highlights.map((h) => (
                  <li
                    key={h}
                    className="rounded-full border border-slate-200 bg-slate-50 px-3 py-1 text-xs font-medium text-slate-700"
                  >
                    {h}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

