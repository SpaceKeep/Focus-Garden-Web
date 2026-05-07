import { Play, RotateCcw, BarChart2, Settings } from 'lucide-react';

const CIRCUMFERENCE = 2 * Math.PI * 44; // r=44

function GitHubIcon({ className }: { className?: string }) {
  return (
    <svg className={className} fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
      <path d="M12 0C5.37 0 0 5.37 0 12c0 5.31 3.435 9.795 8.205 11.385.6.105.825-.255.825-.57 0-.285-.015-1.23-.015-2.235-3.015.555-3.795-.735-4.035-1.41-.135-.345-.72-1.41-1.23-1.695-.42-.225-1.02-.78-.015-.795.945-.015 1.62.87 1.845 1.23 1.08 1.815 2.805 1.305 3.495.99.105-.78.42-1.305.765-1.605-2.67-.3-5.46-1.335-5.46-5.925 0-1.305.465-2.385 1.23-3.225-.12-.3-.54-1.53.12-3.18 0 0 1.005-.315 3.3 1.23.96-.27 1.98-.405 3-.405s2.04.135 3 .405c2.295-1.56 3.3-1.23 3.3-1.23.66 1.65.24 2.88.12 3.18.765.84 1.23 1.905 1.23 3.225 0 4.605-2.805 5.625-5.475 5.925.435.375.81 1.095.81 2.22 0 1.605-.015 2.895-.015 3.3 0 .315.225.69.825.57A12.02 12.02 0 0 0 24 12c0-6.63-5.37-12-12-12z" />
    </svg>
  );
}

export function ExtensionPreview() {
  return (
    <div className="relative group">
      <div className="absolute -inset-1 bg-gradient-to-r from-emerald-500 to-teal-500 rounded-[2rem] blur opacity-20 group-hover:opacity-40 transition duration-1000" />

      <div className="relative bg-[#0d1117] border border-white/10 rounded-[2rem] overflow-hidden shadow-2xl w-[320px]">
        <TitleBar />
        <Body />
      </div>
    </div>
  );
}

function TitleBar() {
  return (
    <div className="flex items-center justify-between px-5 py-4 border-b border-white/5 bg-[#0a0e13]">
      <div className="flex items-center gap-2">
        <img src="/src/assets/favicon.ico" className="w-5 h-5" alt="" />
        <span className="text-xs font-bold tracking-[0.18em] text-stone-200 uppercase">
          Focus Garden
        </span>
      </div>
      <div className="flex items-center gap-3 text-stone-500">
        <GitHubIcon className="w-4 h-4 hover:text-stone-300 cursor-pointer transition-colors" />
        <BarChart2 className="w-4 h-4 hover:text-stone-300 cursor-pointer transition-colors" />
        <Settings className="w-4 h-4 hover:text-stone-300 cursor-pointer transition-colors" />
      </div>
    </div>
  );
}

function Body() {
  return (
    <div className="flex flex-col items-center px-8 pt-7 pb-7 gap-7 bg-[#0d1117]">
      <SessionPill label="Focus" />
      <TimerRing time="25:00" progress={1} />
      <Controls />
      <GardenCard emoji="🏜️" sessionCount={0} />
    </div>
  );
}

function SessionPill({ label }: { label: string }) {
  return (
    <div className="bg-emerald-500/20 border border-emerald-500/30 rounded-full px-5 py-1">
      <span className="text-xs font-bold tracking-[0.2em] text-emerald-400 uppercase">
        {label}
      </span>
    </div>
  );
}

interface TimerRingProps {
  time: string;
  /** 0–1 fill fraction */
  progress: number;
}

function TimerRing({ time, progress }: TimerRingProps) {
  const offset = CIRCUMFERENCE * (1 - progress);

  return (
    <div className="relative flex items-center justify-center w-48 h-48">
      <svg
        className="absolute inset-0 w-full h-full -rotate-90"
        viewBox="0 0 100 100"
        aria-hidden="true"
      >
        <circle cx="50" cy="50" r="44" fill="none" stroke="rgba(16,185,129,0.12)" strokeWidth="5" />
        <circle
          cx="50" cy="50" r="44"
          fill="none"
          stroke="#10b981"
          strokeWidth="5"
          strokeDasharray={CIRCUMFERENCE}
          strokeDashoffset={offset}
          strokeLinecap="round"
        />
      </svg>
      <span className="text-4xl font-mono font-bold text-white tracking-tight">{time}</span>
    </div>
  );
}

function Controls() {
  return (
    <div className="flex items-center gap-5">
      <button
        className="w-11 h-11 rounded-full bg-white/5 border border-white/10 flex items-center justify-center hover:bg-white/10 transition-colors"
        aria-label="Reset timer"
      >
        <RotateCcw className="w-4 h-4 text-stone-400" />
      </button>

      <button
        className="w-16 h-16 bg-emerald-500 rounded-full flex items-center justify-center shadow-[0_0_30px_rgba(16,185,129,0.4)] hover:bg-emerald-400 hover:scale-105 active:scale-95 transition-all"
        aria-label="Start timer"
      >
        <Play className="w-7 h-7 text-black fill-current ml-0.5" />
      </button>

      {/* Spacer keeps the play button visually centred */}
      <div className="w-11 h-11" aria-hidden="true" />
    </div>
  );
}

interface GardenCardProps {
  emoji: string;
  sessionCount: number;
}

function GardenCard({ emoji, sessionCount }: GardenCardProps) {
  return (
    <div className="w-full bg-[#111820] border border-white/5 rounded-2xl p-5 flex flex-col items-center gap-2">
      <span className="text-5xl" role="img" aria-label="garden">{emoji}</span>
      <span className="text-sm text-stone-400 font-medium">
        {sessionCount} Sessions today
      </span>
    </div>
  );
}
