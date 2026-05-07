import { Sprout } from 'lucide-react';

const REINSTALL_URL = 'https://chromewebstore.google.com/detail/focus-garden';
const FEEDBACK_URL = 'https://github.com/Iccrtlity/Focus-Garden/issues';

const reasons = [
  "I didn't use it enough",
  "It was missing a feature I needed",
  "It conflicted with another extension",
  "It was too distracting",
  "Other",
] as const;

export function UninstallPage() {
  return (
    <div className="min-h-screen bg-[#050a0a] text-white font-sans flex flex-col items-center justify-center px-6 py-24 selection:bg-emerald-500/30">
      <div className="fixed top-0 left-1/2 -translate-x-1/2 w-full h-[600px] bg-emerald-900/10 blur-[120px] pointer-events-none" />

      <div className="relative z-10 max-w-lg w-full flex flex-col items-center text-center gap-8">

        {/* Icon */}
        <div className="w-20 h-20 bg-emerald-500/10 border border-emerald-500/20 rounded-3xl flex items-center justify-center">
          <Sprout className="w-10 h-10 text-emerald-400" />
        </div>

        {/* Heading */}
        <div className="flex flex-col gap-3">
          <h1 className="text-4xl font-black tracking-tight">
            Sorry to see you go 🌵
          </h1>
          <p className="text-stone-400 text-lg leading-relaxed">
            Focus Garden has been removed. Your garden will be waiting if you ever come back.
          </p>
        </div>

        {/* Feedback */}
        <div className="w-full bg-white/[0.02] border border-white/5 rounded-2xl p-6 text-left flex flex-col gap-4">
          <p className="text-sm font-semibold text-stone-300">
            Why did you remove it? <span className="text-stone-500 font-normal">(optional)</span>
          </p>
          <div className="flex flex-col gap-2">
            {reasons.map((reason) => (
              <label key={reason} className="flex items-center gap-3 cursor-pointer group">
                <input
                  type="radio"
                  name="reason"
                  value={reason}
                  className="accent-emerald-500 w-4 h-4 cursor-pointer"
                />
                <span className="text-stone-400 text-sm group-hover:text-stone-200 transition-colors">
                  {reason}
                </span>
              </label>
            ))}
          </div>
          <a
            href={FEEDBACK_URL}
            target="_blank"
            rel="noreferrer"
            className="text-xs text-emerald-400 hover:text-emerald-300 transition-colors mt-1"
          >
            Leave detailed feedback on GitHub →
          </a>
        </div>

        {/* Reinstall CTA */}
        <a
          href={REINSTALL_URL}
          target="_blank"
          rel="noreferrer"
          className="flex items-center gap-2 bg-emerald-500 text-black px-7 py-3.5 rounded-2xl font-bold hover:bg-emerald-400 transition-all hover:scale-105 active:scale-95 shadow-[0_0_30px_rgba(16,185,129,0.2)]"
        >
          <Sprout className="w-5 h-5" />
          Reinstall Focus Garden
        </a>

        <p className="text-stone-600 text-xs">
          Focus Garden is free and open source · Built by Iccrtlity
        </p>
      </div>
    </div>
  );
}
