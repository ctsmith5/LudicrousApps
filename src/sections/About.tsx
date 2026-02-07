import PhotoStack from "../components/PhotoStack";
import DocumentIcon from "../assets/document.svg";

import resumePdf from "../assets/ResumeColinSmith_Feb-2026.pdf";
export function About() {
  return (
    <section id="about" className="scroll-mt-24 py-14 sm:py-20">
      <div className="mx-auto max-w-5xl px-6">
        <div className="grid gap-10 sm:grid-cols-12 sm:items-start">
          <div className="sm:col-span-7">
            <p className="text-sm font-semibold text-brand-700 dark:text-brand-400">
              About
            </p>

            <p className="text-pretty text-base text-slate-600 dark:text-slate-300 sm:text-lg">
              I'm Colin Smith — a Fullstack Engineer. I build mobile apps,
              websites, and the backends behind them, and deploy them with solid
              cloud practices and secure data environments.
            </p>

            <div className="mt-6 grid gap-4 sm:grid-cols-2">
              <div className="rounded-2xl border border-slate-200 bg-white p-5 shadow-sm dark:border-slate-700 dark:bg-slate-800">
                <p className="text-sm font-semibold text-slate-900 dark:text-slate-100">
                  Fast delivery
                </p>
                <p className="mt-1 text-sm text-slate-600 dark:text-slate-300">
                  Tight feedback loops, clear scope, and shippable increments.
                </p>
              </div>
              <div className="rounded-2xl border border-slate-200 bg-white p-5 shadow-sm dark:border-slate-700 dark:bg-slate-800">
                <p className="text-sm font-semibold text-slate-900 dark:text-slate-100">
                  Production quality
                </p>
                <p className="mt-1 text-sm text-slate-600 dark:text-slate-300">
                  Maintainable codebases, tests where they matter, and sane
                  observability.
                </p>
              </div>
            </div>
            <div className="mt-7 flex flex-col gap-3 sm:flex-row sm:items-center">
              <a
                href="https://www.linkedin.com/in/colintsmith"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-2 rounded-xl border border-slate-200 bg-white px-5 py-3 text-sm font-semibold text-slate-900 shadow-sm hover:bg-slate-50 dark:border-slate-700 dark:bg-slate-800 dark:text-slate-100 dark:hover:bg-slate-700"
              >
                <svg
                  className="h-5 w-5"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
                </svg>
                Connect on LinkedIn
              </a>
              <a
                href={resumePdf}
                download="ColinSmith_Resume_Feb-2026.pdf"
                className="inline-flex items-center justify-center gap-2 rounded-xl border border-slate-200 bg-white px-5 py-3 text-sm font-semibold text-slate-900 shadow-sm hover:bg-slate-50 dark:border-slate-700 dark:bg-slate-800 dark:text-slate-100 dark:hover:bg-slate-700"
              >
                <img src={DocumentIcon} alt="" className="h-5 w-5 opacity-70" />
                Download Resume
              </a>
            </div>
          </div>
          <div className="sm:col-span-5">
            <PhotoStack photoPath="CS-275.jpg" />
          </div>
        </div>
      </div>
    </section>
  );
}
