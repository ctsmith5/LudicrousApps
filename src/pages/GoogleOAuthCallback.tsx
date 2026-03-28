import { useEffect, useState } from "react";
import { useSearchParams } from "react-router-dom";

export function GoogleOAuthCallback() {
  const [searchParams] = useSearchParams();
  const code = searchParams.get("code");
  const error = searchParams.get("error");
  const errorDescription = searchParams.get("error_description");
  const [copied, setCopied] = useState(false);

  useEffect(() => {
    document.title = "OAuth Callback - LudicrousApps";
  }, []);

  function copyCode() {
    if (!code) return;
    navigator.clipboard.writeText(code).then(() => {
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    });
  }

  return (
    <div className="min-h-screen bg-slate-950 flex items-center justify-center p-6">
      <div className="bg-slate-900 border border-slate-800 rounded-xl p-8 max-w-xl w-full shadow-lg">
        <h1 className="text-2xl font-semibold text-slate-100 mb-6">
          OAuth Authorization
        </h1>

        {error ? (
          <div>
            <h2 className="text-red-400 font-medium mb-2">Authorization Error</h2>
            <p className="text-slate-400 text-sm">
              <span className="text-slate-300 font-medium">Error:</span> {error}
            </p>
            {errorDescription && (
              <p className="text-slate-400 text-sm mt-1">
                <span className="text-slate-300 font-medium">Description:</span>{" "}
                {errorDescription}
              </p>
            )}
          </div>
        ) : code ? (
          <div>
            <h2 className="text-green-400 font-medium mb-3">
              Authorization Successful
            </h2>
            <p className="text-slate-400 text-sm mb-3">
              Copy this authorization code and paste it into your app:
            </p>
            <div className="bg-slate-800 border border-slate-700 rounded-lg p-4 font-mono text-sm text-slate-200 break-all mb-4">
              {code}
            </div>
            <button
              onClick={copyCode}
              className="bg-blue-600 hover:bg-blue-500 text-white text-sm font-medium px-4 py-2 rounded-lg transition-colors"
            >
              {copied ? "Copied!" : "Copy to Clipboard"}
            </button>
          </div>
        ) : (
          <div>
            <h2 className="text-slate-300 font-medium mb-2">
              Waiting for Authorization...
            </h2>
            <p className="text-slate-400 text-sm">
              No authorization code found in URL. If you were redirected here
              from Google, please check the URL contains{" "}
              <code className="text-slate-300">?code=...</code>
            </p>
          </div>
        )}
      </div>
    </div>
  );
}
