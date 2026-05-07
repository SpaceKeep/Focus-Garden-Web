import { Code } from 'lucide-react';

const GITHUB_URL = 'https://github.com/Iccrtlity/Focus-Garden';

export function Navbar() {
  return (
    <nav className="relative z-10 max-w-6xl mx-auto px-6 py-10 flex justify-between items-center">
      <div className="flex items-center gap-2 font-bold text-2xl tracking-tight">
        <div className="bg-violet-500/10 p-2 rounded-lg border border-violet-500/20">
          <img src="/src/assets/favicon.ico" className="w-6 h-6" alt="Focus Garden logo" />
        </div>
        <span className="text-stone-100">Focus Garden</span>
      </div>

      <a
        href={GITHUB_URL}
        target="_blank"
        rel="noreferrer"
        aria-label="View source on GitHub"
        className="text-stone-400 hover:text-emerald-400 transition-colors"
      >
        <Code className="w-6 h-6" />
      </a>
    </nav>
  );
}
