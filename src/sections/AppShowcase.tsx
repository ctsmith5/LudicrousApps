import { useEffect, useState } from "react";
import { ref, getDownloadURL } from "firebase/storage";
import { storage } from "../lib/firebase";

export function AppShowcase() {
  const [bannerUrl, setBannerUrl] = useState("");
  const [qrUrl, setQrUrl] = useState("");

  useEffect(() => {
    getDownloadURL(ref(storage, "Landscape Banner Ad - 1200x720.png"))
      .then(setBannerUrl)
      .catch((e) => console.error("Failed to load banner", e));

    getDownloadURL(ref(storage, "qr-code.png"))
      .then(setQrUrl)
      .catch((e) => console.error("Failed to load QR", e));
  }, []);

  return (
    <section id="showcase" className="scroll-mt-24 py-14 sm:py-20">
      <div className="mx-auto max-w-5xl px-6">
        <div className="mb-10 text-center sm:text-left">
          <p className="text-sm font-semibold text-brand-700 dark:text-brand-400">
            App Showcase
          </p>
          <h2 className="mt-2 text-3xl font-bold tracking-tight text-slate-900 dark:text-slate-100 sm:text-4xl">
            Check out some of the apps already in production.
          </h2>
        </div>

        <div className="flex flex-col items-center gap-6 sm:flex-row sm:items-start">
          {/* Banner */}
          <div className="relative overflow-hidden rounded-2xl shadow-lg sm:flex-1 lg:flex-none lg:w-[calc(100%-200px-1.5rem)]">
            {bannerUrl ? (
              <img
                src={bannerUrl}
                alt="App Showcase Banner"
                className="h-full w-full object-cover"
              />
            ) : (
              <div className="flex h-64 w-full items-center justify-center bg-slate-100 text-slate-400 dark:bg-slate-800">
                Loading...
              </div>
            )}
          </div>
          {/* QR Code - Desktop only */}
          <div className="relative hidden overflow-hidden rounded-2xl shadow-lg lg:block lg:w-[200px] lg:h-[200px] lg:flex-shrink-0">
            {qrUrl ? (
              <img
                src={qrUrl}
                alt="Download QR Code"
                className="h-full w-full object-contain"
              />
            ) : (
              <div className="flex h-full w-full items-center justify-center bg-slate-100 text-slate-400 dark:bg-slate-800">
                Loading...
              </div>
            )}
          </div>
        </div>

        {/* Mobile Download Link - Mobile only */}
        <div className="mt-6 lg:hidden">
          <a
            href="https://apple.co/4rm6Lw0"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex w-full items-center justify-center rounded-xl bg-slate-900 px-5 py-3 text-sm font-semibold text-white shadow-sm hover:bg-slate-800 dark:bg-brand-600 dark:hover:bg-brand-700"
          >
            Download on the App Store
          </a>
        </div>
      </div>
    </section>
  );
}
