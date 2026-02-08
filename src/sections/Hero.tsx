import { Canvas } from "@react-three/fiber";
import { WarpScene } from "../three/WarpScene";

export function Hero() {
  return (
    <section className="relative overflow-hidden py-20 sm:py-28">
      {/* Background gradient */}
      <div className="absolute inset-0 bg-gradient-to-br from-slate-50 via-white to-purple-50 dark:from-slate-900 dark:via-slate-900 dark:to-purple-900/20" />
      
      {/* Animated background elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute -top-40 -right-40 h-80 w-80 rounded-full bg-purple-500/10 blur-3xl dark:bg-purple-500/20" />
        <div className="absolute -bottom-40 -left-40 h-80 w-80 rounded-full bg-cyan-500/10 blur-3xl dark:bg-cyan-500/20" />
      </div>

      <div className="relative mx-auto max-w-6xl px-6">
        <div className="grid gap-12 lg:grid-cols-2 lg:items-center">
          {/* Left content */}
          <div className="text-center lg:text-left">
            <div className="inline-flex items-center gap-2 rounded-full border border-purple-200 bg-purple-50/80 px-4 py-1.5 text-sm font-medium text-purple-700 dark:border-purple-800 dark:bg-purple-900/30 dark:text-purple-300">
              <span className="flex h-2 w-2 rounded-full bg-purple-500 animate-pulse" />
              Available for new projects
            </div>

            <h1 className="mt-6 text-balance text-5xl font-bold tracking-tight text-slate-900 dark:text-slate-100 sm:text-6xl lg:text-7xl">
              Build at{" "}
              <span className="bg-gradient-to-r from-purple-600 via-purple-500 to-cyan-500 bg-clip-text text-transparent">
                Ludicrous Speed
              </span>
            </h1>

            <p className="mt-6 text-lg text-slate-600 dark:text-slate-300 sm:text-xl">
              Fullstack engineer shipping polished apps, websites, and cloud backends 
              with fast iterations and clean engineering.
            </p>

            <div className="mt-8 flex flex-col gap-3 sm:flex-row sm:justify-center lg:justify-start">
              <a
                href="#contact"
                className="inline-flex items-center justify-center rounded-xl bg-gradient-to-r from-purple-600 to-cyan-500 px-6 py-3.5 text-sm font-semibold text-white shadow-lg shadow-purple-500/25 transition-all hover:shadow-purple-500/40 hover:scale-105"
              >
                Start a project
                <svg className="ml-2 h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
                </svg>
              </a>
              <a
                href="#showcase"
                className="inline-flex items-center justify-center rounded-xl border border-slate-200 bg-white px-6 py-3.5 text-sm font-semibold text-slate-700 shadow-sm transition-all hover:bg-slate-50 hover:border-purple-200 dark:border-slate-700 dark:bg-slate-800 dark:text-slate-200 dark:hover:border-purple-800 dark:hover:bg-slate-700"
              >
                View work
              </a>
              <a
                href="/tucker"
                className="inline-flex items-center justify-center rounded-xl border-2 border-purple-500/30 bg-transparent px-6 py-3.5 text-sm font-semibold text-purple-600 transition-all hover:bg-purple-50 hover:border-purple-500 dark:text-cyan-400 dark:hover:bg-cyan-950/30 dark:hover:border-cyan-500"
              >
                <svg className="mr-2 h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                </svg>
                Meet Tucker
              </a>
            </div>

            {/* Tech stack pills */}
            <div className="mt-10 flex flex-wrap justify-center gap-2 lg:justify-start">
              {["Flutter", "iOS", "Go", "React", "GCP", "MongoDB"].map((tech) => (
                <span
                  key={tech}
                  className="rounded-full border border-slate-200 bg-white/80 px-3 py-1 text-xs font-medium text-slate-600 backdrop-blur-sm dark:border-slate-700 dark:bg-slate-800/80 dark:text-slate-300"
                >
                  {tech}
                </span>
              ))}
            </div>
          </div>

          {/* Right content - 3D Scene */}
          <div className="relative hidden lg:block">
            <div className="relative aspect-square overflow-hidden rounded-3xl border border-slate-200/60 bg-white/50 shadow-2xl shadow-purple-500/10 backdrop-blur-sm dark:border-slate-700/60 dark:bg-slate-800/50">
              <Canvas
                dpr={[1, 1.5]}
                camera={{ fov: 100, near: 0.1, far: 600 }}
                gl={{ antialias: true, alpha: false, powerPreference: "high-performance" }}
              >
                <WarpScene />
              </Canvas>
              
              {/* Gradient overlay */}
              <div className="absolute inset-0 bg-gradient-to-br from-purple-500/10 via-transparent to-cyan-500/10" />
            </div>
            
            {/* Floating badge */}
            <div className="absolute -bottom-4 -left-4 rounded-2xl border border-slate-200 bg-white p-4 shadow-xl dark:border-slate-700 dark:bg-slate-800">
              <div className="flex items-center gap-3">
                <div className="flex h-10 w-10 items-center justify-center rounded-full bg-gradient-to-r from-purple-600 to-cyan-500">
                  <svg className="h-5 w-5 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                </div>
                <div>
                  <p className="text-sm font-semibold text-slate-900 dark:text-slate-100">Production Ready</p>
                  <p className="text-xs text-slate-500 dark:text-slate-400">Apps shipped to App Store</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
