import { motion } from 'framer-motion';
import { Brain, Banknote, GraduationCap, Leaf, Sparkles, Code2 } from 'lucide-react';

const themes = [
  { title: 'AI & Data Science', icon: Brain, sub: 'ML models, analytics, vision, NLP' },
  { title: 'FinTech', icon: Banknote, sub: 'Payments, risk, compliance, quant' },
  { title: 'EduTech', icon: GraduationCap, sub: 'Learning tools, assessments, LXP' },
  { title: 'Sustainability & Smart Cities', icon: Leaf, sub: 'Energy, mobility, environment' },
  { title: 'Open Innovation', icon: Sparkles, sub: 'Bring your boldest ideas' },
  { title: 'AI-ML', icon: Code2, sub: 'Agents, RAG, copilots, automation' },
];

export default function ThemesGrid() {
  return (
    <section id="themes" className="relative w-full bg-[#0A0A0A] py-20 text-[#EAEAEA]">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_bottom_left,rgba(0,255,198,0.12),transparent_45%)]" />
      <div className="relative mx-auto max-w-7xl px-6">
        <div className="mb-10 flex items-end justify-between gap-4">
          <h2 className="text-3xl font-bold sm:text-4xl">Themes & Domains</h2>
          <a href="https://drive.google.com/file/d/1IrC2p6dTqDjHWzZlLCUuYsgnwM5510IT/view" className="text-sm text-[#00FFC6] hover:underline">Download Problem Statement</a>
        </div>

        <div className="grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {themes.map(({ title, icon: Icon, sub }, idx) => (
            <motion.div
              key={title}
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{ delay: idx * 0.05, duration: 0.5 }}
              className="group relative overflow-hidden rounded-2xl border border-white/10 bg-white/5 p-5 shadow-[inset_0_1px_0_rgba(255,255,255,0.05),0_0_40px_rgba(138,43,226,0.08)] backdrop-blur-md"
            >
              <div className="absolute inset-0 opacity-0 transition-opacity duration-300 group-hover:opacity-100" style={{ background: 'linear-gradient(120deg, rgba(0,255,198,0.12), rgba(138,43,226,0.12))' }} />
              <div className="relative z-10">
                <div className="mb-4 inline-flex rounded-lg border border-white/10 bg-black/30 p-2 text-[#00FFC6]">
                  <Icon className="h-5 w-5" />
                </div>
                <h3 className="text-lg font-semibold">{title}</h3>
                <p className="mt-1 text-sm text-white/70">{sub}</p>
              </div>
              <div className="pointer-events-none absolute -right-8 -top-8 h-24 w-24 rounded-full bg-[#8A2BE2]/20 blur-2xl transition-transform group-hover:scale-110" />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
