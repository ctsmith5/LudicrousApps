const LINKEDIN_URL = "https://www.linkedin.com/in/colintsmith";

export function Footer() {
  return (
    <footer className="border-t border-slate-200 dark:border-slate-800">
      <div className="mx-auto flex max-w-5xl flex-col gap-3 px-6 py-10 text-sm text-slate-600 dark:text-slate-400 sm:flex-row sm:items-center sm:justify-between">
        <p>© {new Date().getFullYear()} LudicrousApps. All rights reserved.</p>
        <a
          href={LINKEDIN_URL}
          target="_blank"
          rel="noreferrer"
          className="font-semibold text-slate-700 hover:text-slate-900 dark:text-slate-300 dark:hover:text-slate-100"
        >
          LinkedIn
        </a>
      </div>
    </footer>
  );
}

