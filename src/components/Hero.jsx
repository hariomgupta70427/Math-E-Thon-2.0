import { useEffect, useMemo, useState } from 'react';
import { motion } from 'framer-motion';
import Spline from '@splinetool/react-spline';
import { Rocket, Play } from 'lucide-react';

const targetDate = new Date('2025-11-09T00:00:00Z');

function useCountdown(target) {
  const [now, setNow] = useState(() => new Date());

  useEffect(() => {
    const id = setInterval(() => setNow(new Date()), 1000);
    return () => clearInterval(id);
  }, []);

  const diff = Math.max(0, target.getTime() - now.getTime());

  const time = useMemo(() => {
    const seconds = Math.floor(diff / 1000);
    const days = Math.floor(seconds / (3600 * 24));
    const hours = Math.floor((seconds % (3600 * 24)) / 3600);
    const minutes = Math.floor((seconds % 3600) / 60);
    const secs = seconds % 60;
    return { days, hours, minutes, secs };
  }, [diff]);

  return time;
}

export default function Hero() {
  const { days, hours, minutes, secs } = useCountdown(targetDate);

  return (
    <section className="relative h-[100vh] w-full overflow-hidden bg-[#0A0A0A] text-[#EAEAEA]">
      <div className="absolute inset-0">
        <Spline
          scene="https://prod.spline.design/7m4PRZ7kg6K1jPfF/scene.splinecode"
          style={{ width: '100%', height: '100%' }}
        />
      </div>

      {/* Top gradient glow overlay */}
      <div className="pointer-events-none absolute inset-0 bg-gradient-to-b from-[#0A0A0A]/40 via-transparent to-[#0A0A0A]" />

      <div className="relative z-10 mx-auto flex h-full max-w-7xl flex-col items-center justify-center px-6 text-center">
        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-4xl font-extrabold sm:text-6xl md:text-7xl"
        >
          <span className="tracking-tight">
            <span className="text-[#EAEAEA] drop-shadow-[0_0_20px_rgba(138,43,226,0.35)]">Math-E-Thon</span>
            <span className="ml-3 bg-gradient-to-r from-[#00FFC6] to-[#8A2BE2] bg-clip-text text-transparent">2.0</span>
          </span>
          <span className="mt-3 block text-lg font-medium text-white/80 sm:text-2xl">
            24-Hour International Hybrid Hackathon
          </span>
        </motion.h1>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.15, duration: 0.8 }}
          className="mt-8 flex flex-col items-center gap-4 sm:flex-row"
        >
          <a
            href="https://unstop.com/o/fT7GYtP?lb=QfgrOBN"
            target="_blank"
            rel="noreferrer"
            className="group inline-flex items-center gap-2 rounded-full bg-gradient-to-r from-[#00FFC6] to-[#8A2BE2] px-6 py-3 font-semibold text-[#0A0A0A] shadow-[0_0_30px_rgba(0,255,198,0.35)] transition-transform hover:scale-[1.03]"
          >
            <Rocket className="h-5 w-5" />
            Register Now
          </a>
          <a
            href="#about"
            className="inline-flex items-center gap-2 rounded-full border border-white/15 bg-white/5 px-6 py-3 font-medium text-white/90 backdrop-blur-md transition-colors hover:border-white/25 hover:bg-white/10"
          >
            <Play className="h-5 w-5" /> Explore Event
          </a>
        </motion.div>

        {/* Countdown */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3, duration: 0.8 }}
          className="mt-10 grid grid-cols-4 gap-3"
        >
          {[
            { label: 'Days', value: days },
            { label: 'Hours', value: hours },
            { label: 'Minutes', value: minutes },
            { label: 'Seconds', value: secs },
          ].map((item) => (
            <div
              key={item.label}
              className="flex h-20 w-24 flex-col items-center justify-center rounded-xl border border-white/10 bg-white/5 text-white/90 shadow-[inset_0_1px_0_rgba(255,255,255,0.05),0_0_40px_rgba(138,43,226,0.15)] backdrop-blur-md"
            >
              <div className="text-2xl font-bold tabular-nums">{String(item.value).padStart(2, '0')}</div>
              <div className="text-xs text-white/60">{item.label}</div>
            </div>
          ))}
        </motion.div>

        {/* Floating math symbols */}
        <div className="pointer-events-none absolute left-0 top-0 h-full w-full">
          {["∑", "π", "√", "{ }", "∞"].map((sym, idx) => (
            <motion.span
              key={idx}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 0.6, y: [0, -20, 0] }}
              transition={{ duration: 6 + idx, repeat: Infinity, ease: 'easeInOut' }}
              className="absolute text-5xl font-bold text-white/10"
              style={{ left: `${10 + idx * 18}%`, top: `${20 + idx * 12}%` }}
            >
              {sym}
            </motion.span>
          ))}
        </div>
      </div>
    </section>
  );
}
