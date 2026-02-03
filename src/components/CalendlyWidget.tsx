import React, { useEffect, useRef } from "react";
interface CalendlyWidget {
  initInlineWidget(options: {
    url: string;
    parentElement: HTMLElement | null;
    prefill: Record<string, unknown>;
    utm: Record<string, unknown>;
  }): void;
}

declare global {
  interface Window {
    Calendly?: CalendlyWidget;
  }
}

// --- Component ---
const CalendlyWidget: React.FC = () => {
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const scriptSrc = "https://assets.calendly.com/assets/external/widget.js";
    let script = document.querySelector(
      `script[src="${scriptSrc}"]`,
    ) as HTMLScriptElement;

    // Helper to init the widget (preventing duplicates)
    const initWidget = () => {
      if (!containerRef.current || !window.Calendly) return;
      // Prevent double-initialization by clearing first
      containerRef.current.innerHTML = "";
      window.Calendly.initInlineWidget({
        url: `https://calendly.com/colin-smith356/30min?back=1&month=${new Date().getFullYear()}-${String(new Date().getMonth() + 1).padStart(2, "0")}`,
        parentElement: containerRef.current,
        prefill: {},
        utm: {},
      });
    };

    if (!script) {
      script = document.createElement("script");
      script.src = scriptSrc;
      script.async = true;
      document.body.appendChild(script);
    }

    // If already loaded, init immediately. Otherwise wait.
    if (window.Calendly) {
      initWidget();
    } else {
      script.addEventListener("load", initWidget);
    }

    return () => {
      script.removeEventListener("load", initWidget);
      if (containerRef.current) {
        containerRef.current.innerHTML = "";
      }
    };
  }, []);

  return <div ref={containerRef} className="w-full h-[850px]" />;
};

export default CalendlyWidget;
