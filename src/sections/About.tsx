import PhotoStack from "../components/PhotoStack";
import DocumentIcon from "../assets/document.svg";
import resumePdf from "../assets/ResumeColinSmith_Feb-2026.pdf";

const STATS = [
  { value: "10+", label: "Years Experience" },
  { value: "50+", label: "Projects Delivered" },
  { value: "100%", label: "Client Satisfaction" },
];

export function About() {
  return (
    <section id="about" className="scroll-mt-24 py-20 sm:py-28">
      <div className="mx-auto max-w-6xl px-6">
        {/* Header */}
        <div className="mb-16 text-center">
          <p className="text-sm font-semibold uppercase tracking-wider text-purple-600 dark:text-cyan-400">
            About
          </p>
          <h2 className="mt-3 text-balance text-4xl font-bold tracking-tight text-slate-900 dark:text-slate-100 sm:text-5xl">
            Engineer. Builder. Problem Solver.
          </h2>
        </div>

        <div className="grid gap-12 lg:grid-cols-12 lg:items-center">
          {/* Left - Image */}
          <div className="lg:col-span-5">
            <div className="relative">
              <div className="absolute -inset-4 rounded-3xl bg-gradient-to-r from-purple-500/20 to-cyan-500/20 blur-2xl" />
              <div className="relative">
                <PhotoStack photoPath="CS-275.jpg" />
              </div>
              
              {/* Stats overlay */}
              <div className="absolute -bottom-6 -right-6 hidden rounded-2xl border border-slate-200 bg-white p-4 shadow-xl dark:border-slate-700 dark:bg-slate-800 sm:block">
                <div className="flex gap-6">
                  {STATS.map((stat) => (
                    <div key={stat.label} className="text-center">
                      <p className="text-2xl font-bold text-purple-600 dark:text-cyan-400">
                        {stat.value}
                      </p>
                      <p className="text-xs text-slate-500 dark:text-slate-400">
                        {stat.label}
                      </p>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>

          {/* Right - Content */}
          <div className="lg:col-span-7">
            <div className="space-y-6">
              <p className="text-lg text-slate-600 dark:text-slate-300">
                I'm <span className="font-semibold text-slate-900 dark:text-slate-100">Colin Smith</span> — a Fullstack 
                Engineer who turns ideas into production-ready applications. I specialize in building 
                mobile apps, web platforms, and the cloud infrastructure that powers them.
              </p>

              <p className="text-slate-600 dark:text-slate-300">
                With expertise spanning Flutter, native iOS, Go, React, and Google Cloud, I help teams 
                ship products that scale. Whether you need an MVP in weeks or a hardened production 
                system, I bring the technical depth and product sense to get it done.
              </p>

              {/* Feature cards */}
              <div className="grid gap-4 pt-4 sm:grid-cols-2">
                <div className="group rounded-2xl border border-slate-200 bg-white p-5 shadow-sm transition-all hover:border-purple-200 hover:shadow-md dark:border-slate-700 dark:bg-slate-800 dark:hover:border-purple-800">
                  <div className="mb-3 flex h-10 w-10 items-center justify-center rounded-lg bg-gradient-to-r from-purple-500 to-purple-600 text-white">
                    <svg className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                    </svg>
                  </div>
                  <h3 className="font-semibold text-slate-900 dark:text-slate-100">
                    Rapid Delivery
                  </h3>
                  <p className="mt-1 text-sm text-slate-600 dark:text-slate-300">
                    Tight feedback loops and shippable increments every week.
                  </p>
                </div>

                <div className="group rounded-2xl border border-slate-200 bg-white p-5 shadow-sm transition-all hover:border-cyan-200 hover:shadow-md dark:border-slate-700 dark:bg-slate-800 dark:hover:border-cyan-800">
                  <div className="mb-3 flex h-10 w-10 items-center justify-center rounded-lg bg-gradient-to-r from-cyan-500 to-cyan-600 text-white">
                    <svg className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                    </svg>
                  </div>
                  <h3 className="font-semibold text-slate-900 dark:text-slate-100">
                    Production Quality
                  </h3>
                  <p className="mt-1 text-sm text-slate-600 dark:text-slate-300">
                    Maintainable code, automated testing, and solid observability.
                  </p>
                </div>
              </div>

              {/* CTA buttons */}
              <div className="flex flex-col gap-3 pt-4 sm:flex-row">
                <a
                  href="https://www.linkedin.com/in/colintsmith"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center justify-center gap-2 rounded-xl border border-slate-200 bg-white px-5 py-3 text-sm font-semibold text-slate-700 shadow-sm transition-all hover:border-purple-200 hover:bg-purple-50 hover:text-purple-700 dark:border-slate-700 dark:bg-slate-800 dark:text-slate-200 dark:hover:border-purple-800 dark:hover:bg-purple-900/20 dark:hover:text-purple-300"
                >
                  <svg className="h-5 w-5" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
                  </svg>
                  Connect on LinkedIn
                </a>
                <a
                  href={resumePdf}
                  download="ColinSmith_Resume_Feb-2026.pdf"
                  className="inline-flex items-center justify-center gap-2 rounded-xl border border-slate-200 bg-white px-5 py-3 text-sm font-semibold text-slate-700 shadow-sm transition-all hover:border-cyan-200 hover:bg-cyan-50 hover:text-cyan-700 dark:border-slate-700 dark:bg-slate-800 dark:text-slate-200 dark:hover:border-cyan-800 dark:hover:bg-cyan-900/20 dark:hover:text-cyan-300"
                >
                  <img src={DocumentIcon} alt="" className="h-5 w-5 opacity-70" />
                  Download Resume
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
