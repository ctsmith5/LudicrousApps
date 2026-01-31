const LINKEDIN_URL = "https://www.linkedin.com/in/colintsmith";

export function Footer() {
  return (
    <footer className="border-t border-slate-200">
      <div className="mx-auto flex max-w-5xl flex-col gap-3 px-6 py-10 text-sm text-slate-600 sm:flex-row sm:items-center sm:justify-between">
        <p>© {new Date().getFullYear()} LudicrousApps. All rights reserved.</p>
        <a
          href={LINKEDIN_URL}
          target="_blank"
          rel="noreferrer"
          className="font-semibold text-slate-700 hover:text-slate-900"
        >
          LinkedIn
        </a>
      </div>
    </footer>
  );
}

