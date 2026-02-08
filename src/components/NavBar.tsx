import { useEffect, useState } from "react";
import Toggle from "./Toggle";
import { useTheme } from "../contexts/ThemeContext";
import SchedulingButton from "./Calendly";

type NavItem = {
  id: string;
  label: string;
};

const NAV_ITEMS: NavItem[] = [
  { id: "about", label: "About" },
  { id: "services", label: "Services" },
  { id: "showcase", label: "Work" },
  { id: "contact", label: "Contact" },
];

export function NavBar() {
  const [isOpen, setIsOpen] = useState(false);
  const { isDarkMode, toggleTheme } = useTheme();

  useEffect(() => {
    function onKeyDown(e: KeyboardEvent) {
      if (e.key === "Escape") setIsOpen(false);
    }
    window.addEventListener("keydown", onKeyDown);
    return () => window.removeEventListener("keydown", onKeyDown);
  }, []);

  return (
    <header className="sticky top-0 z-50 border-b border-slate-200/80 bg-white/90 backdrop-blur-md dark:border-slate-800/80 dark:bg-slate-900/90">
      <div className="mx-auto flex max-w-6xl items-center justify-between px-6 py-4">
        <a href="#top" className="group inline-flex items-center gap-3">
          <img
            src="https://storage.googleapis.com/ludicrousapps-c1ea7.firebasestorage.app/PathwayEdu/LudicrousLogo.png"
            alt="LudicrousApps"
            className="h-10 w-auto"
          />
          <span className="text-xl font-bold bg-gradient-to-r from-purple-600 to-cyan-500 bg-clip-text text-transparent">
            LudicrousApps
          </span>
        </a>
        
        <nav className="hidden items-center gap-6 sm:flex" aria-label="Primary">
          {NAV_ITEMS.map((item) => (
            <a
              key={item.id}
              href={`#${item.id}`}
              className="relative text-sm font-medium text-slate-600 transition-colors hover:text-purple-600 dark:text-slate-300 dark:hover:text-cyan-400 after:absolute after:-bottom-1 after:left-0 after:h-0.5 after:w-0 after:bg-gradient-to-r after:from-purple-600 after:to-cyan-500 after:transition-all hover:after:w-full"
            >
              {item.label}
            </a>
          ))}
          <div className="h-6 w-px bg-slate-200 dark:bg-slate-700" />
          <SchedulingButton />
          <Toggle
            isOn={isDarkMode}
            handleToggle={toggleTheme}
            id="dark-mode"
            icons={["☾", "☀"]}
          />
        </nav>

        <button
          type="button"
          className="inline-flex items-center justify-center rounded-xl bg-gradient-to-r from-purple-600 to-cyan-500 px-4 py-2 text-sm font-semibold text-white shadow-lg shadow-purple-500/25 hover:shadow-purple-500/40 sm:hidden"
          aria-label="Open menu"
          aria-expanded={isOpen}
          onClick={() => setIsOpen((v) => !v)}
        >
          Menu
        </button>
      </div>

      {isOpen ? (
        <div className="border-t border-slate-200/80 bg-white/95 backdrop-blur-md dark:border-slate-800/80 dark:bg-slate-900/95 sm:hidden">
          <div className="mx-auto max-w-6xl px-6 py-4">
            <nav className="flex flex-col gap-2" aria-label="Mobile">
              {NAV_ITEMS.map((item) => (
                <a
                  key={item.id}
                  href={`#${item.id}`}
                  className="rounded-lg px-3 py-2 text-sm font-medium text-slate-700 hover:bg-purple-50 hover:text-purple-600 dark:text-slate-300 dark:hover:bg-slate-800 dark:hover:text-cyan-400"
                  onClick={() => setIsOpen(false)}
                >
                  {item.label}
                </a>
              ))}
              <div className="my-2 h-px bg-slate-200 dark:bg-slate-700" />
              <a
                href="#contact"
                className="mt-1 inline-flex items-center justify-center rounded-xl bg-gradient-to-r from-purple-600 to-cyan-500 px-4 py-2 text-sm font-semibold text-white shadow-lg"
                onClick={() => setIsOpen(false)}
              >
                Let's talk
              </a>
            </nav>
          </div>
        </div>
      ) : null}
    </header>
  );
}
