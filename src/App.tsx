import { Sprout, Timer, BarChart3, Monitor } from 'lucide-react';
import { Navbar } from './components/Navbar';
import { ExtensionPreview } from './components/ExtensionPreview';
import { FeatureCard } from './components/FeatureCard';

const CHROME_STORE_URL = '#';

const features = [
  {
    icon: <Timer />,
    title: 'Smart Pomodoro',
    description: 'Built-in sessions with background persistence.',
  },
  {
    icon: <Sprout />,
    title: 'Visual Growth',
    description: 'Watch your desert transform into a lush garden.',
  },
  {
    icon: <BarChart3 />,
    title: 'Deep History',
    description: 'Detailed 7-day analytics for your focus sessions.',
  },
] as const;

function App() {
  return (
    <div className="min-h-screen bg-[#050a0a] text-white font-sans selection:bg-emerald-500/30 overflow-x-hidden">
      <div className="fixed top-0 left-1/2 -translate-x-1/2 w-full h-[600px] bg-emerald-900/10 blur-[120px] pointer-events-none" />

      <Navbar />

      <header className="relative z-10 max-w-6xl mx-auto px-6 pt-16 pb-32">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <div className="text-left">
            <h1 className="text-6xl md:text-7xl font-black mb-8 tracking-tight leading-[1.1]">
              Grow your focus, <br />
              <span className="text-emerald-400">one plant at a time.</span>
            </h1>
            <p className="text-xl text-stone-400 mb-10 leading-relaxed max-w-xl">
              A minimalist Pomodoro timer for Chrome that turns your productivity into a
              thriving virtual garden. Dark mode by default, focus by nature.
            </p>
            <a
              href={CHROME_STORE_URL}
              className="inline-flex items-center gap-3 bg-emerald-500 text-black px-8 py-4 rounded-2xl font-bold text-lg shadow-[0_0_30px_rgba(16,185,129,0.2)] hover:bg-emerald-400 transition-all hover:scale-105 active:scale-95"
            >
              <Monitor className="w-5 h-5" />
              Add to Chrome
            </a>
          </div>

          <ExtensionPreview />
        </div>
      </header>

      <section className="relative z-10 max-w-6xl mx-auto px-6 py-32 border-t border-white/5">
        <div className="grid md:grid-cols-3 gap-8">
          {features.map((feature) => (
            <FeatureCard
              key={feature.title}
              icon={feature.icon}
              title={feature.title}
              description={feature.description}
            />
          ))}
        </div>
      </section>

      <footer className="relative z-10 py-20 text-center border-t border-white/5 bg-[#030707]">
        <p className="text-stone-500 text-sm font-medium tracking-wide">
          Built by <span className="text-stone-300">Iccrtlity</span> · 🌿 Focus Garden 2026
        </p>
      </footer>
    </div>
  );
}

export default App;
