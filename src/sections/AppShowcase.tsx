import { useEffect, useState } from "react";
import { ref, getDownloadURL } from "firebase/storage";
import { storage } from "../lib/firebase";

export function AppShowcase() {
  const [bannerUrl, setBannerUrl] = useState("");
  const [qrUrl, setQrUrl] = useState("");
  const [androidUrl, setAndroidUrl] = useState("");

  useEffect(() => {
    getDownloadURL(ref(storage, "Landscape Banner Ad - 1200x720.png"))
      .then(setBannerUrl)
      .catch((e) => console.error("Failed to load banner", e));

    getDownloadURL(ref(storage, "qr-code.png"))
      .then(setQrUrl)
      .catch((e) => console.error("Failed to load QR", e));

    getDownloadURL(ref(storage, "android_14191.png"))
      .then(setAndroidUrl)
      .catch((e) => console.error("Failed to load Android image", e));
  }, []);

  return (
    <section id="showcase" className="scroll-mt-24 py-20 sm:py-28">
      <div className="mx-auto max-w-6xl px-6">
        {/* Header */}
        <div className="mb-16 text-center">
          <p className="text-sm font-semibold uppercase tracking-wider text-purple-600 dark:text-cyan-400">
            App Showcase
          </p>
          <h2 className="mt-3 text-balance text-4xl font-bold tracking-tight text-slate-900 dark:text-slate-100 sm:text-5xl">
            Apps in Production
          </h2>
          <p className="mx-auto mt-4 max-w-2xl text-lg text-slate-600 dark:text-slate-300">
            Real apps shipping to real users. Here's what I've built recently.
          </p>
        </div>

        {/* Rummage App Card */}
        <div className="relative overflow-hidden rounded-3xl border border-slate-200 bg-white shadow-xl dark:border-slate-700 dark:bg-slate-800">
          <div className="grid lg:grid-cols-2">
            {/* Left - Banner */}
            <div className="relative aspect-video overflow-hidden bg-slate-100 dark:bg-slate-900 lg:aspect-auto">
              {bannerUrl ? (
                <img
                  src={bannerUrl}
                  alt="Rummage App"
                  className="h-full w-full object-cover"
                />
              ) : (
                <div className="flex h-full items-center justify-center">
                  <div className="h-8 w-8 animate-spin rounded-full border-2 border-purple-500 border-t-transparent" />
                </div>
              )}
            </div>

            {/* Right - Content */}
            <div className="flex flex-col justify-center p-8 lg:p-12">
              <div className="mb-4 inline-flex w-fit items-center gap-2 rounded-full bg-green-100 px-3 py-1 text-sm font-medium text-green-700 dark:bg-green-900/40 dark:text-green-300">
                <span className="h-2 w-2 rounded-full bg-green-500" />
                Live on App Store
              </div>

              <h3 className="text-3xl font-bold text-slate-900 dark:text-slate-100">
                Rummage
              </h3>
              <p className="mt-3 text-slate-600 dark:text-slate-300">
                Discover local garage sales in your neighborhood. Browse listings, 
                view photos, and navigate to sales near you. Built with Flutter for 
                iOS and Android.
              </p>

              {/* Features */}
              <ul className="mt-6 space-y-2">
                {[
                  "Real-time listings with Firebase",
                  "Image upload and moderation",
                  "Location-based search",
                  "Cross-platform (iOS & Android)",
                ].map((feature) => (
                  <li key={feature} className="flex items-center gap-2 text-sm text-slate-600 dark:text-slate-300">
                    <svg className="h-5 w-5 text-purple-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                    {feature}
                  </li>
                ))}
              </ul>

              {/* Download buttons */}
              <div className="mt-8 flex flex-col gap-3 sm:flex-row">
                <a
                  href="https://apple.co/4rm6Lw0"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center justify-center gap-2 rounded-xl bg-slate-900 px-5 py-3 text-sm font-semibold text-white shadow-lg transition-all hover:bg-slate-800 dark:bg-white dark:text-slate-900 dark:hover:bg-slate-100"
                >
                  <svg className="h-5 w-5" viewBox="0 0 24 24" fill="currentColor">
                    <path d="M18.71 19.5c-.83 1.24-1.71 2.45-3.05 2.47-1.34.03-1.77-.79-3.29-.79-1.53 0-2 .77-3.27.82-1.31.05-2.3-1.32-3.14-2.53C4.25 17 2.94 12.45 4.7 9.39c.87-1.52 2.43-2.48 4.12-2.51 1.28-.02 2.5.87 3.29.87.78 0 2.26-1.07 3.81-.91.65.03 2.47.26 3.64 1.98-.09.06-2.17 1.28-2.15 3.81.03 3.02 2.65 4.03 2.68 4.04-.03.07-.42 1.44-1.38 2.83M13 3.5c.73-.83 1.94-1.46 2.94-1.5.13 1.17-.34 2.35-1.04 3.19-.69.85-1.83 1.51-2.95 1.42-.15-1.15.41-2.35 1.05-3.11z"/>
                  </svg>
                  Download on App Store
                </a>
                <a
                  href="https://play.google.com/store/apps/details?id=com.rummageapps.rummage"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center justify-center gap-2 rounded-xl bg-gradient-to-r from-green-600 to-green-500 px-5 py-3 text-sm font-semibold text-white shadow-lg shadow-green-500/25 transition-all hover:shadow-green-500/40"
                >
                  {androidUrl ? (
                    <img src={androidUrl} alt="" className="h-5 w-5" />
                  ) : null}
                  Download Latest Build
                </a>
                <a
                  href="https://play.google.com/apps/testing/com.rummageapps.rummage"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center justify-center gap-2 rounded-xl border-2 border-green-600 bg-transparent px-5 py-3 text-sm font-semibold text-green-600 transition-all hover:bg-green-50 dark:hover:bg-green-900/20"
                >
                  Join Android Alpha
                </a>
              </div>
            </div>
          </div>
        </div>

        {/* QR Code Section - Desktop */}
        {qrUrl && (
          <div className="mt-8 hidden rounded-2xl border border-slate-200 bg-white p-6 text-center dark:border-slate-700 dark:bg-slate-800 lg:block">
            <p className="mb-4 text-sm font-medium text-slate-600 dark:text-slate-300">
              Scan to download Rummage
            </p>
            <img
              src={qrUrl}
              alt="Download QR Code"
              className="mx-auto h-40 w-40 rounded-xl"
            />
          </div>
        )}
      </div>
    </section>
  );
}
