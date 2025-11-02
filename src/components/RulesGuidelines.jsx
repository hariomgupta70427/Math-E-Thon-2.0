import { motion } from 'framer-motion';
import { CheckCircle2, Ban, Wrench, Link as LinkIcon, Upload, AlertTriangle, Gavel } from 'lucide-react';

const rules = [
  {
    title: 'Team Size: 2–4',
    desc: 'At least one female member is mandatory in each team.',
    Icon: CheckCircle2,
    hue: '#00FFC6'
  },
  {
    title: 'Originality Required',
    desc: 'Plagiarism or pre-built templates will lead to disqualification.',
    Icon: Ban,
    hue: '#FF6B6B'
  },
  {
    title: 'Credit Sources',
    desc: 'Internet and open-source resources are allowed with proper crediting.',
    Icon: LinkIcon,
    hue: '#00FFC6'
  },
  {
    title: 'Submit Before Deadline',
    desc: 'Teams must submit the final project link and presentation on time.',
    Icon: Upload,
    hue: '#8A2BE2'
  },
  {
    title: 'Professional Conduct',
    desc: 'Any misconduct or non-cooperation will lead to immediate elimination.',
    Icon: AlertTriangle,
    hue: '#FFB020'
  },
  {
    title: 'Final Decision',
    desc: 'Judges’ and organizers’ decisions are final and binding.',
    Icon: Gavel,
    hue: '#E2E8F0'
  }
];

export default function RulesGuidelines() {
  return (
    <section id="rules" className="relative w-full bg-[#0A0A0A] py-24 text-[#EAEAEA]">
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(55%_45%_at_50%_10%,rgba(138,43,226,0.12),transparent_60%)]" />
      <div className="relative mx-auto max-w-7xl px-6">
        <div className="mb-12 text-center">
          <motion.h2
            initial={{ opacity: 0, y: 8 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ type: 'spring', stiffness: 120, damping: 18 }}
            className="text-3xl font-bold sm:text-4xl"
          >
            Rules & Guidelines
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 8 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.05, type: 'spring', stiffness: 120, damping: 18 }}
            className="mt-2 text-white/70"
          >
            Play fair. Build bold. Respect the craft and the community.
          </motion.p>
        </div>

        <div className="grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {rules.map((r, i) => (
            <motion.div
              key={r.title}
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{ delay: i * 0.06, type: 'spring', stiffness: 140, damping: 18 }}
              whileHover={{ y: -6 }}
              className="group relative rounded-2xl border border-white/10 bg-white/5 p-5 backdrop-blur-md shadow-[inset_0_1px_0_rgba(255,255,255,0.05),0_0_40px_rgba(0,255,198,0.06)]"
            >
              <div className="absolute -inset-px rounded-2xl opacity-0 transition-opacity duration-300 group-hover:opacity-100 bg-gradient-to-r from-[#00FFC6]/10 via-transparent to-[#8A2BE2]/10" />
              <div className="relative flex items-start gap-3">
                <motion.div
                  initial={{ scale: 1 }}
                  whileHover={{ scale: 1.06 }}
                  className="mt-1 grid h-10 w-10 place-items-center rounded-xl ring-1 ring-white/10"
                  style={{ background: 'linear-gradient(135deg, rgba(0,255,198,0.18), rgba(138,43,226,0.18))' }}
                >
                  <r.Icon className="h-5 w-5" style={{ color: r.hue }} />
                </motion.div>
                <div>
                  <div className="text-sm font-semibold text-white">{i + 1}. {r.title}</div>
                  <p className="mt-1 text-sm text-white/75">{r.desc}</p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
