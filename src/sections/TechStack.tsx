const STACK = [
  { name: "Flutter", category: "Mobile" },
  { name: "iOS", category: "Mobile" },
  { name: "React", category: "Web" },
  { name: "TypeScript", category: "Web" },
  { name: "Go", category: "Backend" },
  { name: "C#", category: "Backend" },
  { name: "Google Cloud", category: "Cloud" },
  { name: "Firebase", category: "Cloud" },
  { name: "MongoDB", category: "Database" },
  { name: "PostgreSQL", category: "Database" },
  { name: "Docker", category: "DevOps" },
  { name: "CI/CD", category: "DevOps" },
] as const;

const CATEGORY_COLORS: Record<string, string> = {
  Mobile: "bg-purple-100 text-purple-700 dark:bg-purple-900/40 dark:text-purple-300",
  Web: "bg-cyan-100 text-cyan-700 dark:bg-cyan-900/40 dark:text-cyan-300",
  Backend: "bg-indigo-100 text-indigo-700 dark:bg-indigo-900/40 dark:text-indigo-300",
  Cloud: "bg-sky-100 text-sky-700 dark:bg-sky-900/40 dark:text-sky-300",
  Database: "bg-emerald-100 text-emerald-700 dark:bg-emerald-900/40 dark:text-emerald-300",
  DevOps: "bg-amber-100 text-amber-700 dark:bg-amber-900/40 dark:text-amber-300",
};

export function TechStack() {
  return (
    <section className="py-20 sm:py-28">
      <div className="mx-auto max-w-6xl px-6">
        <div className="relative overflow-hidden rounded-3xl bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 p-8 shadow-2xl sm:p-12">
          {/* Background pattern */}
          <div className="absolute inset-0 opacity-30">
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_20%,rgba(168,85,247,0.4)_0,transparent_50%)]" />
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_70%_80%,rgba(6,182,212,0.4)_0,transparent_50%)]" />
          </div>

          <div className="relative">
            <div className="flex flex-col gap-6 sm:flex-row sm:items-center sm:justify-between">
              <div>
                <p className="text-sm font-semibold uppercase tracking-wider text-purple-300">
                  Tech Stack
                </p>
                <h2 className="mt-2 text-balance text-3xl font-bold tracking-tight text-white sm:text-4xl">
                  Proven Technologies
                </h2>
                <p className="mt-3 max-w-xl text-slate-300">
                  I work with modern, battle-tested technologies that scale. 
                  Comfortable adapting to your existing stack.
                </p>
              </div>
            </div>

            {/* Tech grid */}
            <div className="mt-10 grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
              {STACK.map((tech) => (
                <div
                  key={tech.name}
                  className="group flex items-center justify-between rounded-xl border border-white/10 bg-white/5 p-4 backdrop-blur-sm transition-all hover:bg-white/10"
                >
                  <span className="font-semibold text-white">
                    {tech.name}
                  </span>
                  <span className={`rounded-full px-2.5 py-0.5 text-xs font-medium ${CATEGORY_COLORS[tech.category]}`}>
                    {tech.category}
                  </span>
                </div>
              ))}
            </div>

            {/* Bottom note */}
            <p className="mt-8 text-center text-sm text-slate-400">
              And more — happy to work with your preferred technologies
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
