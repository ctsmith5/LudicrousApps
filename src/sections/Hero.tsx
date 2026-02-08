import { Canvas } from "@react-three/fiber";
import { WarpScene } from "../three/WarpScene";

export function Hero() {
  return (
    <section className="relative min-h-[90vh] overflow-hidden">
      {/* Background gradient base */}
      <div className="absolute inset-0 bg-gradient-to-br from-slate-50 via-white to-purple-50 dark:from-slate-900 dark:via-slate-900 dark:to-purple-900/20" />
      
      {/* WarpScene as full background */}
      <div className="absolute inset-0 z-0">
        <Canvas
          dpr={[1, 1.5]}
          camera={{ fov: 100, near: 0.1, far: 600 }}
          gl={{ antialias: true, alpha: true, powerPreference: "high-performance" }}
          className="h-full w-full"
        >
          <WarpScene />
        </Canvas>
        
        {/* Gradient overlays for readability */}
        <div className="absolute inset-0 bg-gradient-to-r from-white/90 via-white/70 to-transparent dark:from-slate-900/90 dark:via-slate-900/70 dark:to-transparent" />
        <div className="absolute inset-0 bg-gradient-to-b from-white/50 via-transparent to-white/80 dark:from-slate-900/50 dark:via-transparent dark:to-slate-900/80" />
      </div>

      {/* Content on top */}
      <div className="relative z-10 mx-auto flex min-h-[90vh] max-w-6xl items-center px-6 py-20">
        <div className="w-full max-w-3xl">
          <div className="inline-flex items-center gap-2 rounded-full border border-purple-200/80 bg-purple-50/90 px-4 py-1.5 text-sm font-medium text-purple-700 backdrop-blur-sm dark:border-purple-800/80 dark:bg-purple-900/40 dark:text-purple-300">
            <span className="flex h-2 w-2 rounded-full bg-purple-500 animate-pulse" />
            Available for new projects
          </div>

          <h1 className="mt-6 text-balance text-5xl font-bold tracking-tight text-slate-900 drop-shadow-sm dark:text-slate-100 sm:text-6xl lg:text-7xl">
            Build at{" "}
            <span className="bg-gradient-to-r from-purple-600 via-purple-500 to-cyan-500 bg-clip-text text-transparent">
              Ludicrous Speed
            </span>
          </h1>

          <p className="mt-6 max-w-2xl text-lg text-slate-700 drop-shadow-sm dark:text-slate-200 sm:text-xl">
            Fullstack engineer shipping polished apps, websites, and cloud backends 
            with fast iterations and clean engineering.
          </p>

          <div className="mt-8 flex flex-col gap-3 sm:flex-row">
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
              className="inline-flex items-center justify-center rounded-xl border border-slate-300 bg-white/90 px-6 py-3.5 text-sm font-semibold text-slate-700 shadow-sm backdrop-blur-sm transition-all hover:bg-white hover:border-purple-300 dark:border-slate-600 dark:bg-slate-800/90 dark:text-slate-200 dark:hover:border-purple-700 dark:hover:bg-slate-800"
            >
              View work
            </a>
            <a
              href="/tucker"
              className="inline-flex items-center justify-center rounded-xl border-2 border-purple-500/40 bg-white/80 px-6 py-3.5 text-sm font-semibold text-purple-700 backdrop-blur-sm transition-all hover:bg-purple-50 hover:border-purple-500 dark:border-cyan-500/40 dark:bg-slate-800/80 dark:text-cyan-400 dark:hover:bg-cyan-950/30 dark:hover:border-cyan-500"
            >
              <svg className="mr-2 h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
              </svg>
              Meet Tucker
            </a>
          </div>

          {/* Tech stack pills */}
          <div className="mt-10 flex flex-wrap gap-2">
            {["Flutter", "iOS", "Go", "React", "GCP", "MongoDB"].map((tech) => (
              <span
                key={tech}
                className="rounded-full border border-slate-300/80 bg-white/90 px-3 py-1 text-xs font-medium text-slate-700 backdrop-blur-sm dark:border-slate-600/80 dark:bg-slate-800/90 dark:text-slate-300"
              >
                {tech}
              </span>
            ))}
          </div>

          {/* Floating badge */}
          <div className="mt-8 inline-flex items-center gap-3 rounded-2xl border border-slate-200/80 bg-white/90 p-4 shadow-xl backdrop-blur-sm dark:border-slate-700/80 dark:bg-slate-800/90">
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
    </section>
  );
}
