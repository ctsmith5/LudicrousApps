import { useMemo, useState } from "react";
import type { FormEvent } from "react";
import rummageIcon from "../assets/appstore.png";
import ReCAPTCHA from "react-google-recaptcha";

const SUPPORT_EMAIL = "devcolin@icloud.com";
const RUMMAGE_API_BASE_URL =
  "https://rummage-backend-287868745320.us-central1.run.app";
const RUMMAGE_SUPPORT_ENDPOINT = `${RUMMAGE_API_BASE_URL}/api/support`;
const RUMMAGE_RECAPTCHA_SITE_KEY =
  import.meta.env.VITE_RUMMAGE_RECAPTCHA_SITE_KEY;

function buildMailto(params: { name: string; email: string; message: string }) {
  const subject = `Rummage Support — ${params.name}`;
  const body = [
    `Name: ${params.name}`,
    `Email: ${params.email}`,
    "",
    params.message,
  ].join("\n");

  return `mailto:${encodeURIComponent(SUPPORT_EMAIL)}?subject=${encodeURIComponent(
    subject,
  )}&body=${encodeURIComponent(body)}`;
}

export function RummageSupport() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [recaptchaToken, setRecaptchaToken] = useState<string | null>(null);
  const [status, setStatus] = useState<"idle" | "sending" | "sent" | "error">(
    "idle",
  );
  const [error, setError] = useState<string | null>(null);

  const mailto = useMemo(() => buildMailto({ name, email, message }), [
    name,
    email,
    message,
  ]);

  async function onSubmit(e: FormEvent) {
    e.preventDefault();
    setError(null);

    if (!name.trim()) return setError("Please enter your name.");
    if (!email.trim()) return setError("Please enter your email.");
    if (!message.trim()) return setError("Please enter a message.");
    if (!RUMMAGE_RECAPTCHA_SITE_KEY)
      return setError(
        "reCAPTCHA is not configured (missing site key). Please contact support via email link.",
      );
    if (!recaptchaToken)
      return setError("Please complete the reCAPTCHA before sending.");

    setStatus("sending");
    try {
      const res = await fetch(RUMMAGE_SUPPORT_ENDPOINT, {
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
        "Couldn’t send automatically right now. Please use the email link below.",
      );
      console.error(err);
    }
  }

  return (
    <main className="min-h-dvh bg-white">
      <div className="mx-auto max-w-2xl px-6 py-14 sm:py-20">
        <div className="rounded-3xl border border-slate-200 bg-white p-8 shadow-sm sm:p-10">
          <div className="flex items-start gap-4">
            <img
              src={rummageIcon}
              alt="Rummage app icon"
              className="h-12 w-12 rounded-2xl shadow-sm ring-1 ring-slate-200"
              loading="eager"
              decoding="async"
            />
            <div>
              <h1 className="text-balance text-2xl font-semibold tracking-tight text-slate-900 sm:text-3xl">
                Rummage Support
              </h1>
              <p className="mt-2 text-pretty text-sm text-slate-600 sm:text-base">
                Need help with Rummage? Send a message and we’ll get back to you
                as soon as possible.
              </p>
              <p className="mt-3 text-sm text-slate-600">
                Or email directly:{" "}
                <a className="font-semibold underline" href={mailto}>
                  {SUPPORT_EMAIL}
                </a>
              </p>
            </div>
          </div>

          <form className="mt-8 space-y-5" onSubmit={onSubmit}>
            <div className="grid gap-5 sm:grid-cols-2">
              <label className="block">
                <span className="text-sm font-semibold text-slate-900">Name</span>
                <input
                  className="mt-2 w-full rounded-xl border border-slate-200 bg-white px-4 py-3 text-sm text-slate-900 shadow-sm outline-none ring-brand-500 placeholder:text-slate-400 focus:ring-2"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  placeholder="Your name"
                  autoComplete="name"
                />
              </label>
              <label className="block">
                <span className="text-sm font-semibold text-slate-900">Email</span>
                <input
                  className="mt-2 w-full rounded-xl border border-slate-200 bg-white px-4 py-3 text-sm text-slate-900 shadow-sm outline-none ring-brand-500 placeholder:text-slate-400 focus:ring-2"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="you@example.com"
                  autoComplete="email"
                  inputMode="email"
                />
              </label>
            </div>

            <label className="block">
              <span className="text-sm font-semibold text-slate-900">Message</span>
              <textarea
                className="mt-2 min-h-32 w-full resize-y rounded-xl border border-slate-200 bg-white px-4 py-3 text-sm text-slate-900 shadow-sm outline-none ring-brand-500 placeholder:text-slate-400 focus:ring-2"
                value={message}
                onChange={(e) => setMessage(e.target.value)}
                placeholder="Describe the issue, what you expected, and what happened."
              />
            </label>

            <div className="rounded-2xl border border-slate-200 bg-slate-50 p-4">
              {RUMMAGE_RECAPTCHA_SITE_KEY ? (
                <ReCAPTCHA
                  sitekey={RUMMAGE_RECAPTCHA_SITE_KEY}
                  onChange={(token: string | null) => setRecaptchaToken(token)}
                  onExpired={() => setRecaptchaToken(null)}
                />
              ) : (
                <p className="text-sm text-slate-700">
                  reCAPTCHA is not configured for this environment.
                </p>
              )}
            </div>

            {error ? <p className="text-sm font-medium text-red-700">{error}</p> : null}

            {status === "sent" ? (
              <p className="rounded-xl border border-emerald-200 bg-emerald-50 px-4 py-3 text-sm font-semibold text-emerald-800">
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
                  !RUMMAGE_RECAPTCHA_SITE_KEY
                }
                className="inline-flex items-center justify-center rounded-xl bg-slate-900 px-5 py-3 text-sm font-semibold text-white shadow-sm hover:bg-slate-800 disabled:cursor-not-allowed disabled:opacity-60"
              >
                {status === "sending" ? "Sending…" : "Send"}
              </button>
            </div>
          </form>
        </div>
      </div>
    </main>
  );
}

