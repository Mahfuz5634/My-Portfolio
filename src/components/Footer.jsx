import React from "react";

export default function Footer() {
  return (
    <footer className="mt-20 pb-8">
      <div className="max-w-6xl mx-auto px-6">
        {/* subtle line */}
        <div className="h-px w-full bg-gradient-to-r from-transparent via-slate-600/60 to-transparent mb-4" />

        <div className="flex flex-col items-center gap-1 text-sm text-slate-300">
          <p className="text-xs text-slate-400">
            Open to interesting projects & collaborations.
          </p>
          <p>© {new Date().getFullYear()} Mahfuz</p>
        </div>
      </div>
    </footer>
  );
}
