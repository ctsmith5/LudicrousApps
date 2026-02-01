import { useMemo, useState } from "react";
import type { FormEvent } from "react";

const CONTACT_EMAIL = "hello@ludicrousapps.io";
const LINKEDIN_URL = "https://www.linkedin.com/in/colintsmith";

function buildMailto(params: { name: string; email: string; message: string }) {
  const subject = `Project inquiry — ${params.name}`;
  const body = [
    `Name: ${params.name}`,
    `Email: ${params.email}`,
    "",
    params.message,
  ].join("\n");

  const href = `mailto:${encodeURIComponent(CONTACT_EMAIL)}?subject=${encodeURIComponent(
    subject,
  )}&body=${encodeURIComponent(body)}`;

  return href;
}

export function Contact() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [error, setError] = useState<string | null>(null);

  const mailto = useMemo(() => buildMailto({ name, email, message }), [
    name,
    email,
    message,
  ]);

  function onSubmit(e: FormEvent) {
    e.preventDefault();
    setError(null);

    if (!name.trim()) return setError("Please enter your name.");
    if (!email.trim()) return setError("Please enter your email.");
    if (!message.trim()) return setError("Please enter a short message.");

    window.location.href = mailto;
  }

  return (
    <section id="contact" className="scroll-mt-24 py-14 sm:py-20">
      <div className="mx-auto max-w-5xl px-6">
        <div className="grid gap-10 sm:grid-cols-12 sm:items-start">
          <div className="sm:col-span-5">
            <p className="text-sm font-semibold text-brand-700 dark:text-brand-400">Contact</p>
            <h2 className="mt-2 text-balance text-3xl font-semibold tracking-tight text-slate-900 dark:text-slate-100">
              Let's build something.
            </h2>
            <p className="mt-3 text-pretty text-sm text-slate-600 dark:text-slate-300 sm:text-base">
              Share what you're building and I'll reply with questions, a
              suggested approach, and a realistic timeline.
            </p>

            <div className="mt-6 space-y-3 text-sm text-slate-700 dark:text-slate-300">
              <p>
                <span className="font-semibold text-slate-900 dark:text-slate-100">Email:</span>{" "}
                <a className="underline hover:text-slate-900 dark:hover:text-slate-100" href={mailto}>
                  {CONTACT_EMAIL}
                </a>
              </p>
              <p>
                <span className="font-semibold text-slate-900 dark:text-slate-100">LinkedIn:</span>{" "}
                <a
                  className="underline hover:text-slate-900 dark:hover:text-slate-100"
                  href={LINKEDIN_URL}
                  target="_blank"
                  rel="noreferrer"
                >
                  /in/colintsmith
                </a>
              </p>
            </div>
          </div>

          <div className="sm:col-span-7">
            <div className="rounded-3xl border border-slate-200 bg-white p-7 shadow-sm dark:border-slate-700 dark:bg-slate-800 sm:p-8">
              <form className="space-y-5" onSubmit={onSubmit}>
                <div className="grid gap-5 sm:grid-cols-2">
                  <label className="block">
                    <span className="text-sm font-semibold text-slate-900 dark:text-slate-100">
                      Name
                    </span>
                    <input
                      className="mt-2 w-full rounded-xl border border-slate-200 bg-white px-4 py-3 text-sm text-slate-900 shadow-sm outline-none ring-brand-500 placeholder:text-slate-400 focus:ring-2 dark:border-slate-600 dark:bg-slate-700 dark:text-slate-100 dark:placeholder:text-slate-400"
                      value={name}
                      onChange={(e) => setName(e.target.value)}
                      placeholder="Your name"
                      autoComplete="name"
                    />
                  </label>

                  <label className="block">
                    <span className="text-sm font-semibold text-slate-900 dark:text-slate-100">
                      Email
                    </span>
                    <input
                      className="mt-2 w-full rounded-xl border border-slate-200 bg-white px-4 py-3 text-sm text-slate-900 shadow-sm outline-none ring-brand-500 placeholder:text-slate-400 focus:ring-2 dark:border-slate-600 dark:bg-slate-700 dark:text-slate-100 dark:placeholder:text-slate-400"
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      placeholder="you@company.com"
                      autoComplete="email"
                      inputMode="email"
                    />
                  </label>
                </div>

                <label className="block">
                  <span className="text-sm font-semibold text-slate-900 dark:text-slate-100">
                    Message
                  </span>
                  <textarea
                    className="mt-2 min-h-32 w-full resize-y rounded-xl border border-slate-200 bg-white px-4 py-3 text-sm text-slate-900 shadow-sm outline-none ring-brand-500 placeholder:text-slate-400 focus:ring-2 dark:border-slate-600 dark:bg-slate-700 dark:text-slate-100 dark:placeholder:text-slate-400"
                    value={message}
                    onChange={(e) => setMessage(e.target.value)}
                    placeholder="What are you building? What's the timeline?"
                  />
                </label>

                {error ? (
                  <p className="text-sm font-medium text-red-700 dark:text-red-400">{error}</p>
                ) : null}

                <div className="flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between">
                  <button
                    type="submit"
                    className="inline-flex items-center justify-center rounded-xl bg-slate-900 px-5 py-3 text-sm font-semibold text-white shadow-sm hover:bg-slate-800 dark:bg-brand-600 dark:hover:bg-brand-700"
                  >
                    Send message
                  </button>

                  <a
                    href={mailto}
                    className="text-sm font-semibold text-slate-700 hover:text-slate-900 dark:text-slate-300 dark:hover:text-slate-100"
                  >
                    Or email directly →
                  </a>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

