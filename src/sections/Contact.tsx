import { useMemo, useState } from "react";
import type { FormEvent } from "react";
import ReCAPTCHA from "react-google-recaptcha";

const CONTACT_EMAIL = "support@ludicrousapps.io";
const LINKEDIN_URL = "https://www.linkedin.com/in/colintsmith";
const API_BASE_URL =
  "https://rummage-backend-287868745320.us-central1.run.app";
const CONTACT_ENDPOINT = `${API_BASE_URL}/api/support`;
const RECAPTCHA_SITE_KEY = import.meta.env.VITE_RUMMAGE_RECAPTCHA_SITE_KEY;

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
  const [recaptchaToken, setRecaptchaToken] = useState<string | null>(null);
  const [status, setStatus] = useState<"idle" | "sending" | "sent" | "error">(
    "idle",
  );
  const [error, setError] = useState<string | null>(null);

  const mailto = useMemo(
    () => buildMailto({ name, email, message }),
    [name, email, message],
  );

  async function onSubmit(e: FormEvent) {
    e.preventDefault();
    setError(null);

    if (!name.trim()) return setError("Please enter your name.");
    if (!email.trim()) return setError("Please enter your email.");
    if (!message.trim()) return setError("Please enter a short message.");
    if (!RECAPTCHA_SITE_KEY)
      return setError(
        "reCAPTCHA is not configured (missing site key). Please contact support via email link.",
      );
    if (!recaptchaToken)
      return setError("Please complete the reCAPTCHA before sending.");

    setStatus("sending");
    try {
      const res = await fetch(CONTACT_ENDPOINT, {
        method: "POST",
        headers: { "content-type": "application/json", accept: "application/json" },
        body: JSON.stringify({
          name,
          email,
          message,
          recaptchaToken,
          // Common alternate field name some backends expect:
          gRecaptchaResponse: recaptchaToken,
        }),
      });

      if (!res.ok) {
        const text = await res.text().catch(() => "");
        throw new Error(text || `Request failed (${res.status})`);
      }

      setStatus("sent");
    } catch (err) {
      // Fallback: allow users to still contact via mailto if API isn't configured.
      setStatus("error");
      setError(
        "Could not send automatically right now. Please use the email link below.",
      );
      console.error(err);
    }
  }

  return (
    <section id="contact" className="scroll-mt-24 py-20 sm:py-28">
      <div className="mx-auto max-w-6xl px-6">
        {/* Header */}
        <div className="mb-16 text-center">
          <p className="text-sm font-semibold uppercase tracking-wider text-purple-600 dark:text-cyan-400">
            Contact
          </p>
          <h2 className="mt-3 text-balance text-4xl font-bold tracking-tight text-slate-900 dark:text-slate-100 sm:text-5xl">
            Let's Build Something
          </h2>
          <p className="mx-auto mt-4 max-w-2xl text-lg text-slate-600 dark:text-slate-300">
            Have a project in mind? I'd love to hear about it. Send me a message 
            and let's discuss how we can work together.
          </p>
        </div>

        <div className="grid gap-12 lg:grid-cols-12 lg:items-start">
          <div className="lg:col-span-5">
            <div className="rounded-2xl border border-slate-200 bg-gradient-to-br from-purple-50 to-cyan-50 p-8 dark:border-slate-700 dark:from-purple-900/20 dark:to-cyan-900/20">
              <h3 className="text-xl font-bold text-slate-900 dark:text-slate-100">
                Get in Touch
              </h3>
              <p className="mt-2 text-slate-600 dark:text-slate-300">
                Prefer email? Reach out directly and I'll respond within 24 hours.
              </p>
            <p className="mt-3 text-pretty text-sm text-slate-600 dark:text-slate-300 sm:text-base">
              Share what you're building and I'll reply with questions, a
              suggested approach, and a realistic timeline.
            </p>

            <div className="mt-6 space-y-3 text-sm text-slate-700 dark:text-slate-300">
              <p>
                <span className="font-semibold text-slate-900 dark:text-slate-100">
                  Email:
                </span>{" "}
                <a
                  className="underline hover:text-slate-900 dark:hover:text-slate-100"
                  href={mailto}
                >
                  {CONTACT_EMAIL}
                </a>
              </p>
              <p>
                <span className="font-semibold text-slate-900 dark:text-slate-100">
                  LinkedIn:
                </span>{" "}
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

                <div className="rounded-2xl border border-slate-200 bg-slate-50 p-4 dark:border-slate-600 dark:bg-slate-700">
                  {RECAPTCHA_SITE_KEY ? (
                    <ReCAPTCHA
                      sitekey={RECAPTCHA_SITE_KEY}
                      onChange={(token: string | null) => setRecaptchaToken(token)}
                      onExpired={() => setRecaptchaToken(null)}
                    />
                  ) : (
                    <p className="text-sm text-slate-700 dark:text-slate-300">
                      reCAPTCHA is not configured for this environment.
                    </p>
                  )}
                </div>

                {error ? (
                  <p className="text-sm font-medium text-red-700 dark:text-red-400">
                    {error}
                  </p>
                ) : null}

                {status === "sent" ? (
                  <p className="rounded-xl border border-emerald-200 bg-emerald-50 px-4 py-3 text-sm font-semibold text-emerald-800 dark:border-emerald-800 dark:bg-emerald-900/30 dark:text-emerald-300">
                    Message sent. Thank you!
                  </p>
                ) : null}

                <div className="flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between">
                  <button
                    type="submit"
                    disabled={
                      status === "sending" ||
                      status === "sent" ||
                      !recaptchaToken ||
                      !RECAPTCHA_SITE_KEY
                    }
                    className="inline-flex items-center justify-center rounded-xl bg-slate-900 px-5 py-3 text-sm font-semibold text-white shadow-sm hover:bg-slate-800 disabled:cursor-not-allowed disabled:opacity-60 dark:bg-brand-600 dark:hover:bg-brand-700"
                  >
                    {status === "sending" ? "Sending…" : "Send message"}
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
