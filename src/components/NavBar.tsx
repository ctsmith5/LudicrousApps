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
    <header className="sticky top-0 z-50 border-b border-slate-200 bg-white/80 backdrop-blur dark:border-slate-800 dark:bg-slate-900/80">
      <div className="mx-auto flex max-w-5xl items-center justify-between px-6 py-4">
        <a href="#top" className="group inline-flex items-center gap-2">
          {" "}
        </a>
        <nav className="hidden items-center gap-7 sm:flex" aria-label="Primary">
          <SchedulingButton />
          {NAV_ITEMS.map((item) => (
            <a
              key={item.id}
              href={`#${item.id}`}
              className="text-sm font-medium text-slate-700 hover:text-slate-900 dark:text-slate-300 dark:hover:text-slate-100"
            >
              {item.label}
            </a>
          ))}
          <Toggle
            isOn={isDarkMode}
            handleToggle={toggleTheme}
            id="dark-mode"
            icons={["☾", "☀"]}
          />
        </nav>

        <button
          type="button"
          className="inline-flex items-center justify-center rounded-xl border border-slate-200 bg-white px-3 py-2 text-sm font-semibold text-slate-900 shadow-sm hover:bg-slate-50 dark:border-slate-700 dark:bg-slate-800 dark:text-slate-100 dark:hover:bg-slate-700 sm:hidden"
          aria-label="Open menu"
          aria-expanded={isOpen}
          onClick={() => setIsOpen((v) => !v)}
        >
          Menu
        </button>
      </div>

      {isOpen ? (
        <div className="border-t border-slate-200 bg-white dark:border-slate-800 dark:bg-slate-900 sm:hidden">
          <div className="mx-auto max-w-5xl px-6 py-4">
            <nav className="flex flex-col gap-3" aria-label="Mobile">
              {NAV_ITEMS.map((item) => (
                <a
                  key={item.id}
                  href={`#${item.id}`}
                  className="rounded-lg px-3 py-2 text-sm font-medium text-slate-700 hover:bg-slate-50 hover:text-slate-900 dark:text-slate-300 dark:hover:bg-slate-800 dark:hover:text-slate-100"
                  onClick={() => setIsOpen(false)}
                >
                  {item.label}
                </a>
              ))}
              <a
                href="#contact"
                className="mt-1 inline-flex items-center justify-center rounded-xl bg-slate-900 px-4 py-2 text-sm font-semibold text-white shadow-sm hover:bg-slate-800 dark:bg-brand-600 dark:hover:bg-brand-700"
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
