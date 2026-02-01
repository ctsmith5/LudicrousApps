const STACK = [
  "Flutter",
  "Native iOS",
  "Go",
  "C#",
  "Google Cloud",
  "MongoDB",
  "Firebase (optional)",
  "CI/CD",
  "Testing",
  "Observability",
] as const;

export function TechStack() {
  return (
    <section className="py-14 sm:py-20">
      <div className="mx-auto max-w-5xl px-6">
        <div className="rounded-3xl border border-slate-200 bg-gradient-to-br from-white to-slate-50 p-8 shadow-sm dark:border-slate-700 dark:from-slate-800 dark:to-slate-900 sm:p-10">
          <div className="flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between">
            <div>
              <p className="text-sm font-semibold text-brand-700 dark:text-brand-400">Toolbox</p>
              <h2 className="mt-2 text-balance text-2xl font-semibold tracking-tight text-slate-900 dark:text-slate-100 sm:text-3xl">
                Proven stack, adaptable to yours
              </h2>
            </div>
            <p className="max-w-xl text-pretty text-sm text-slate-600 dark:text-slate-300 sm:text-base">
              I'm comfortable meeting teams where they are — and improving the
              system without needless rewrites.
            </p>
          </div>

          <div className="mt-8 flex flex-wrap gap-2">
            {STACK.map((item) => (
              <span
                key={item}
                className="rounded-full border border-slate-200 bg-white px-3 py-1 text-xs font-medium text-slate-700 shadow-sm dark:border-slate-600 dark:bg-slate-700 dark:text-slate-200"
              >
                {item}
              </span>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

