import { motion } from 'framer-motion';
import { Users } from 'lucide-react';

export default function About() {
  return (
    <section id="about" className="relative w-full bg-[#0A0A0A] py-20 text-[#EAEAEA]">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,rgba(138,43,226,0.15),transparent_40%)]" />
      <div className="relative mx-auto grid max-w-7xl grid-cols-1 items-center gap-10 px-6 md:grid-cols-2">
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.6 }}
          className="space-y-6"
        >
          <h2 className="text-3xl font-bold sm:text-4xl">
            Where logic meets innovation
          </h2>
          <p className="text-white/80">
            Math-E-Thon 2.0 brings coders, analysts, and dreamers together to
            innovate through the lens of mathematics. Experience a premium,
            storytelling-first hackathon that fuses neon futurism with the rigor
            of problem solving.
          </p>
          <a
            href="https://chat.whatsapp.com/ENpAPCxio9727F9QaDbnw0"
            target="_blank"
            rel="noreferrer"
            className="inline-flex items-center gap-2 rounded-full border border-white/15 bg-white/5 px-5 py-2.5 font-medium text-white/90 backdrop-blur-md transition-colors hover:border-white/25 hover:bg-white/10"
          >
            <Users className="h-5 w-5" /> Join Community
          </a>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, x: 20 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.6 }}
          className="relative"
        >
          <div className="relative rounded-2xl border border-white/10 bg-white/5 p-1 shadow-[0_0_80px_rgba(0,255,198,0.08)] backdrop-blur-lg">
            <div className="rounded-xl bg-gradient-to-br from-[#0A0A0A] to-[#141414] p-6">
              <div className="mb-4 text-sm uppercase tracking-wide text-white/60">Event Highlights</div>
              <ul className="space-y-3 text-white/85">
                <li>• Hybrid format: global online + on-campus finale</li>
                <li>• Neon glassmorphism aesthetic with parallax layers</li>
                <li>• Focus on math-tech fusion: AI, FinTech, EduTech and more</li>
                <li>• Smooth, high-conversion storytelling landing experience</li>
              </ul>
            </div>
          </div>
          <div className="pointer-events-none absolute -left-6 -top-6 h-24 w-24 rounded-full bg-[#00FFC6]/20 blur-2xl" />
          <div className="pointer-events-none absolute -bottom-6 -right-6 h-28 w-28 rounded-full bg-[#8A2BE2]/20 blur-2xl" />
        </motion.div>
      </div>
    </section>
  );
}
