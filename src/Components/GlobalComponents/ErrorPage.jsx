import React from "react";
import { MdErrorOutline, MdRefresh, MdHome } from "react-icons/md";

const ErrorPage = ({ message = "Something went wrong", code = "", onRetry, homePath = "/" }) => {
  const handleRetry = () => {
    if (typeof onRetry === "function") return onRetry();
    window.location.reload();
  };

  const goHome = () => {
    try {
      window.location.href = homePath;
    } catch {
      window.location.reload();
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center text-black bg-white">
      {/* subtle background glow */}
      <div className="absolute inset-0 pointer-events-none opacity-20 bg-gradient-to-r from-transparent via-blue-700 to-transparent blur-3xl"></div>

      <div className="relative z-10 max-w-xl w-full mx-4">
        <div className="rounded-2xl overflow-hidden shadow-2xl border border-black/10">
  
          {/* Header */}
          <div
            className="flex items-center gap-3 px-6 py-4"
            style={{
              background: "linear-gradient(90deg, rgba(0,0,0,0.95) 0%, rgba(3,37,65,0.95) 50%, rgba(0,89,255,0.95) 100%)"
            }}
          >
            <div className="p-2 rounded-full bg-black/10">
              <MdErrorOutline size={28} className="text-white" />
            </div>
            <div>
              <h3 className="text-lg md:text-xl font-semibold text-white">Error</h3>
              {code !== "" && <div className="text-xs text-black/70">Code: {code}</div>}
            </div>
          </div>

          {/* Body */}
          <div className="bg-white px-6 py-8 text-black">
            <p className="text-sm md:text-base mb-4">{message}</p>

            <div className="flex flex-col sm:flex-row sm:items-center gap-3">
              <button
                onClick={handleRetry}
                className="flex items-center gap-2 px-4 py-2 rounded-lg bg-blue-500 hover:bg-blue-600 transition shadow-sm text-white"
              >
                <MdRefresh size={18} />
                <span className="font-medium">Retry</span>
              </button>
              <button
                onClick={goHome}
                className="flex items-center gap-2 px-4 py-2 rounded-lg bg-transparent border border-black/10 hover:bg-black/5 transition"
              >
                <MdHome size={18} />
                <span className="font-medium">Home</span>
              </button>
            </div>

            <div className="mt-6 text-xs text-black/70">
              If this error persists, try clearing cache or contact the admin.
            </div>
          </div>
        </div>

        {/* Footer */}
        <div className="mt-4 text-center text-xs text-black/40">
          AniWave
        </div>
      </div>
    </div>
  );
};

export default ErrorPage;
