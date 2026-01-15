"use client";

export function ResetCookieButton() {
  const handleReset = () => {
    if (typeof window !== "undefined") {
      localStorage.removeItem("cookie-consent");
      window.location.reload();
    }
  };

  return (
    <div className="bg-polus-surface2 border border-polus-mint/20 rounded-lg p-6">
      <button
        onClick={handleReset}
        className="px-4 py-2 text-sm font-semibold bg-polus-gold text-polus-forest hover:brightness-110 rounded-lg transition"
      >
        Reset Cookie Preferences
      </button>
      <p className="text-xs text-[rgba(254,255,255,0.65)] mt-3">
        Click to show the cookie banner again and change your preferences.
      </p>
    </div>
  );
}
