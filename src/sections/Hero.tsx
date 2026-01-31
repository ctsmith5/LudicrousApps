export function Hero() {
  return (
    <section className="py-14 sm:py-20">
      <div className="mx-auto max-w-5xl px-6">
        <div className="relative overflow-hidden rounded-3xl border border-slate-200 bg-white p-8 shadow-sm sm:p-12">
          {/* Ludicrous-speed tunnel background (pure CSS) */}
          <div className="pointer-events-none absolute inset-0">
            <div className="absolute inset-0 bg-white" />

            {/* 3D tunnel grid: floor + walls + ceiling */}
            <div className="absolute inset-0 [perspective:950px]">
              <div className="absolute inset-0 [transform-style:preserve-3d]">
                {/* Floor */}
                <div
                  className="animate-tunnel-reverse absolute inset-[-95%] opacity-35 [transform-origin:center] [transform:rotateX(74deg)_translateZ(-140px)_translateY(140px)]"
                  style={{
                    backgroundImage:
                      "repeating-linear-gradient(90deg, rgba(249,115,22,0.42) 0 2px, rgba(0,0,0,0) 2px 44px), repeating-linear-gradient(0deg, rgba(239,68,68,0.78) 0 2px, rgba(0,0,0,0) 2px 44px)",
                    backgroundSize: "44px 44px",
                  }}
                />

                {/* Ceiling */}
                <div
                  className="animate-tunnel-slow absolute inset-[-95%] opacity-28 [transform-origin:center] [transform:rotateX(-74deg)_translateZ(-140px)_translateY(-140px)]"
                  style={{
                    backgroundImage:
                      "repeating-linear-gradient(90deg, rgba(249,115,22,0.22) 0 2px, rgba(0,0,0,0) 2px 44px), repeating-linear-gradient(0deg, rgba(239,68,68,0.62) 0 2px, rgba(0,0,0,0) 2px 44px)",
                    backgroundSize: "44px 44px",
                  }}
                />

                {/* Left wall */}
                <div
                  className="animate-tunnel-x absolute inset-[-70%] opacity-22 [transform-origin:center] [transform:rotateY(80deg)_translateZ(-220px)_translateX(0px)]"
                  style={{
                    backgroundImage:
                      "repeating-linear-gradient(90deg, rgba(99,102,241,0.55) 0 2px, rgba(0,0,0,0) 2px 52px), repeating-linear-gradient(0deg, rgba(249,115,22,0.35) 0 2px, rgba(0,0,0,0) 2px 52px)",
                    backgroundSize: "52px 52px",
                  }}
                />

                {/* Right wall */}
                <div
                  className="animate-tunnel-x-reverse absolute inset-[-70%] opacity-22 [transform-origin:center] [transform:rotateY(-80deg)_translateZ(-220px)_translateX(0px)]"
                  style={{
                    backgroundImage:
                      "repeating-linear-gradient(90deg, rgba(99,102,241,0.55) 0 2px, rgba(0,0,0,0) 2px 52px), repeating-linear-gradient(0deg, rgba(249,115,22,0.35) 0 2px, rgba(0,0,0,0) 2px 52px)",
                    backgroundSize: "52px 52px",
                  }}
                />
              </div>
            </div>

            {/* Center glow + vignette for readability */}
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(255,204,128,0.9)_0,rgba(249,115,22,0.45)_16%,rgba(15,23,42,0)_55%)] opacity-60" />
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(255,255,255,0)_0,rgba(255,255,255,0.35)_50%,rgba(255,255,255,0.85)_100%)]" />

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
              LudicrousApps helps teams ship polished apps, websites, and the backends behind them, with fast iterations, clean engineering, and solid cloud practices.
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

