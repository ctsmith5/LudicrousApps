export function Hero2() {
  const slices = Array.from({ length: 18 }, (_, i) => i);

  return (
    <section className="py-14 sm:py-20">
      <div className="mx-auto max-w-5xl px-6">
        <div className="relative overflow-hidden rounded-3xl border border-slate-200 bg-white p-8 shadow-sm sm:p-12">
          {/* Cohesive 3D tunnel: repeated slices moving through Z */}
          <div className="pointer-events-none absolute inset-0">
            <div className="absolute inset-0 bg-white" />

            <div className="absolute inset-0 [perspective:900px]">
              <div className="absolute inset-0 [transform-style:preserve-3d]">
                {slices.map((i) => (
                  <div
                    key={i}
                    className="animate-tunnel-slice absolute left-1/2 top-1/2 h-[110%] w-[110%] rounded-3xl"
                    style={{
                      animationDelay: `${-(i * 0.12)}s`,
                      backgroundImage:
                        "repeating-linear-gradient(90deg, rgba(99,102,241,0.68) 0 2px, rgba(0,0,0,0) 2px 92px), repeating-linear-gradient(0deg, rgba(249,115,22,0.80) 0 2px, rgba(0,0,0,0) 2px 92px)",
                      backgroundSize: "92px 92px",
                      boxShadow:
                        "inset 0 0 0 1px rgba(249,115,22,0.76), inset 0 0 0 2px rgba(99,102,241,0.28)",
                      filter: "blur(0.2px)",
                    }}
                  />
                ))}
              </div>
            </div>

            {/* Center glow + vignette for readability */}
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(255,204,128,0.95)_0,rgba(249,115,22,0.50)_16%,rgba(15,23,42,0)_55%)] opacity-55" />
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(255,255,255,0)_0,rgba(255,255,255,0.35)_50%,rgba(255,255,255,0.88)_100%)]" />

            {/* Subtle brand blobs (keep the existing aesthetic) */}
            <div className="animate-tunnel-pulse absolute -left-24 -top-32 h-72 w-72 rounded-full bg-brand-200 blur-3xl opacity-60" />
            <div className="animate-tunnel-pulse absolute -bottom-28 -right-24 h-72 w-72 rounded-full bg-brand-300 blur-3xl opacity-60" />
          </div>

          <div className="relative">
            <p className="inline-flex items-center gap-2 rounded-full border border-slate-200 bg-white/70 px-3 py-1 text-xs font-medium text-slate-600">
              Fullstack Engineer
              <span className="h-1 w-1 rounded-full bg-slate-300" />
              Flutter • iOS • Go/C# • GCP • MongoDB
            </p>

            <h1 className="mt-6 text-balance text-4xl font-semibold tracking-tight text-slate-900 sm:text-5xl">
              Build your next app at{" "}
              <span className="bg-gradient-to-r from-brand-600 to-brand-800 bg-clip-text text-transparent">
                Ludicrous Speed
              </span>
              .
            </h1>

            <p className="mt-5 max-w-2xl text-pretty text-base text-slate-600 sm:text-lg">
              LudicrousApps helps teams ship polished apps, websites, and the
              backends behind them, with fast iterations, clean engineering, and
              solid cloud practices.
            </p>

            <div className="mt-8 flex flex-col gap-3 sm:flex-row sm:items-center">
              <a
                href="#contact"
                className="inline-flex items-center justify-center rounded-xl bg-slate-900 px-5 py-3 text-sm font-semibold text-white shadow-sm hover:bg-slate-800"
              >
                Start a project
              </a>
              <a
                href="#services"
                className="inline-flex items-center justify-center rounded-xl border border-slate-200 bg-white px-5 py-3 text-sm font-semibold text-slate-900 shadow-sm hover:bg-slate-50"
              >
                See services
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}