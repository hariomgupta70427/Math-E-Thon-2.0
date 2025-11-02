import Hero from './components/Hero';
import About from './components/About';
import ThemesGrid from './components/ThemesGrid';
import EventTimeline from './components/EventTimeline';
import RulesGuidelines from './components/RulesGuidelines';
import PrizesRewards from './components/PrizesRewards';
import ContactOrganizers from './components/ContactOrganizers';

function App() {
  return (
    <div className="min-h-screen scroll-smooth bg-[#0A0A0A] text-[#EAEAEA]">
      <Hero />
      <About />
      <ThemesGrid />
      <EventTimeline />
      <RulesGuidelines />
      <PrizesRewards />
      <ContactOrganizers />

      <footer className="relative w-full border-t border-white/10 bg-[#0A0A0A] py-10">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(0,255,198,0.08),transparent_55%)]" />
        <div className="relative mx-auto flex max-w-7xl flex-col items-center justify-between gap-4 px-6 text-center sm:flex-row sm:text-left">
          <div className="text-white/80">
            Built with ❤️ by Infinity – The Mathematics Society, GTBIT
          </div>
          <div className="flex items-center gap-4 text-sm text-white/70">
            <a href="#rules" className="hover:text-[#00FFC6]">Rules</a>
            <a href="#prizes" className="hover:text-[#8A2BE2]">Prizes</a>
            <a href="#contact" className="hover:text-[#00FFC6]">Contact</a>
          </div>
        </div>
      </footer>
    </div>
  );
}

export default App;
