import PhotoStack from "../components/PhotoStack";
import DocumentIcon from "../assets/document.svg";

const LINKEDIN_URL = "https://www.linkedin.com/in/colintsmith";
import resumePdf from "../assets/ResumeColinSmithFull.pdf";
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
            <script
              src="https://platform.linkedin.com/badges/js/profile.js"
              async
              defer
              type="text/javascript"
            ></script>
            <div className="mt-7 flex flex-col gap-3 sm:flex-row sm:items-center">
              <div
                className="badge-base LI-profile-badge"
                data-locale="en_US"
                data-size="medium"
                data-theme="light"
                data-type="HORIZONTAL"
                data-vanity="colintsmith"
                data-version="v1"
              >
                <a
                  className="badge-base__link LI-simple-link"
                  href="https://www.linkedin.com/in/colintsmith?trk=profile-badge"
                ></a>
              </div>
              <a
                href={resumePdf}
                download="ColinSmith-Resume.pdf"
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
