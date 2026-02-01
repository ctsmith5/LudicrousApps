import { Canvas } from "@react-three/fiber";
import { WarpScene } from "../three/WarpScene";

export function Hero() {
  return (
    <section className="py-14 sm:py-20">
      <div className="mx-auto max-w-5xl px-6">
        <div className="relative overflow-hidden rounded-3xl border border-slate-200 bg-white shadow-lg dark:border-slate-800 dark:bg-slate-900">
          {/* Space-warp background */}
          <div className="pointer-events-none absolute inset-0">
            <Canvas
              dpr={[1, 1.5]}
              camera={{ fov: 100, near: 0.1, far: 600 }}
              gl={{ antialias: true, alpha: false, powerPreference: "high-performance" }}
            >
              <WarpScene />
            </Canvas>

            {/* Minimal readability overlay (we'll tune later) */}
            <div className="absolute inset-0 bg-white/70 dark:bg-slate-900/70" />
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(255,204,128,0.15)_0,rgba(99,102,241,0.18)_50%,rgba(255, 255, 255, 0.28)_90%)] dark:bg-[radial-gradient(circle_at_center,rgba(99,102,241,0.25)_0,rgba(99,102,241,0.15)_50%,rgba(15,23,42,0.85)_90%)]" />
          </div>

          <div className="relative p-8 sm:p-12">
            <p className="inline-flex items-center gap-2 rounded-full border border-slate-200 bg-white/70 px-3 py-1 text-xs font-medium text-slate-600 dark:border-slate-700 dark:bg-slate-800/70 dark:text-slate-300">
              Fullstack Engineer
              <span className="h-1 w-1 rounded-full bg-slate-300 dark:bg-slate-500" />
              Flutter • iOS • Go/C# • GCP • MongoDB
            </p>

            <h1 className="mt-6 text-balance text-4xl font-semibold tracking-tight text-slate-900 dark:text-slate-100 sm:text-5xl">
              Build your next app at{" "}
              <span className="bg-gradient-to-r from-brand-600 to-brand-800 bg-clip-text text-transparent">
                Ludicrous Speed
              </span>
              .
            </h1>

            <p className="mt-5 max-w-2xl text-pretty text-base text-slate-600 dark:text-slate-300 sm:text-lg">
              LudicrousApps helps teams ship polished apps, websites, and the backends
              behind them, with fast iterations, clean engineering, and solid cloud
              practices.
            </p>

            <div className="mt-8 flex flex-col gap-3 sm:flex-row sm:items-center">
              <a
                href="#contact"
                className="inline-flex items-center justify-center rounded-xl bg-slate-900 px-5 py-3 text-sm font-semibold text-white shadow-sm hover:bg-slate-800 dark:bg-brand-600 dark:hover:bg-brand-700"
              >
                Start a project
              </a>
              <a
                href="#services"
                className="inline-flex items-center justify-center rounded-xl border border-slate-200 bg-white px-5 py-3 text-sm font-semibold text-slate-900 shadow-sm hover:bg-slate-50 dark:border-slate-700 dark:bg-slate-800 dark:text-slate-100 dark:hover:bg-slate-700"
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

