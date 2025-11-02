import { motion } from 'framer-motion';
import { Trophy, Medal, Award, Star } from 'lucide-react';

const prizes = [
  {
    title: '1st Place',
    reward: '₹12,000 + Certificates + Goodies',
    Icon: Trophy,
    grad: 'from-[#00FFC6] to-[#8A2BE2]'
  },
  {
    title: '2nd Place',
    reward: '₹8,000 + Certificates + Goodies',
    Icon: Medal,
    grad: 'from-[#8A2BE2] to-[#00FFC6]'
  },
  {
    title: '3rd Place',
    reward: '₹5,000 + Certificates',
    Icon: Award,
    grad: 'from-[#00FFC6] to-[#8A2BE2]'
  }
];

const perks = [
  'Certificates of Participation',
  'Networking opportunities with industry mentors',
  'Swags And Goodies (Bags, Bottles, Stickers)'
];

export default function PrizesRewards() {
  return (
    <section id="prizes" className="relative w-full bg-[#0A0A0A] py-24 text-[#EAEAEA]">
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(55%_45%_at_50%_0%,rgba(0,255,198,0.12),transparent_60%)]" />
      <div className="relative mx-auto max-w-7xl px-6">
        <div className="mb-12 text-center">
          <motion.h2
            initial={{ opacity: 0, y: 8 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ type: 'spring', stiffness: 120, damping: 18 }}
            className="text-3xl font-bold sm:text-4xl"
          >
            Prizes & Rewards
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 8 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.05, type: 'spring', stiffness: 120, damping: 18 }}
            className="mt-2 text-white/70"
          >
            Compete, create, and claim the glory.
          </motion.p>
        </div>

        <div className="grid grid-cols-1 gap-6 sm:grid-cols-3">
          {prizes.map((p, i) => (
            <motion.div
              key={p.title}
              initial={{ opacity: 0, y: 18 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{ delay: i * 0.08, type: 'spring', stiffness: 140, damping: 18 }}
              whileHover={{ y: -6 }}
              whileTap={{ scale: 0.98 }}
              className="group relative overflow-hidden rounded-2xl border border-white/10 bg-white/5 p-6 text-center backdrop-blur-md shadow-[inset_0_1px_0_rgba(255,255,255,0.05),0_0_40px_rgba(0,255,198,0.06)]"
            >
              <div className={`pointer-events-none absolute -inset-px opacity-60 blur-2xl bg-gradient-to-br ${p.grad}`} />
              <motion.div
                initial={{ y: 0 }}
                animate={{ y: [0, -4, 0] }}
                transition={{ duration: 3, repeat: Infinity, ease: 'easeInOut', delay: i * 0.2 }}
                className="relative mx-auto mb-4 grid h-16 w-16 place-items-center rounded-2xl bg-white/5 ring-1 ring-white/10"
              >
                <p.Icon className="h-8 w-8 text-white" />
              </motion.div>
              <div className="relative text-xl font-bold tracking-wide">{p.title}</div>
              <div className="relative mt-2">
                {(() => {
                  const m = p.reward.match(/(₹[0-9,]+)/);
                  const amount = m ? m[1] : null;
                  const rest = amount ? p.reward.replace(amount, '').replace(/^\s*[+-]\s*/,'').trim() : p.reward;
                  return (
                    <>
                      {amount ? (
                        <div className="text-center">
                          <div className="text-2xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-[#00FFC6] to-[#8A2BE2]">
                            {amount}
                          </div>
                          {rest && <div className="mt-1 text-sm text-white/80">{rest}</div>}
                        </div>
                      ) : (
                        <p className="text-sm text-white/80">{p.reward}</p>
                      )}
                    </>
                  );
                })()}
              </div>
              <div className="pointer-events-none absolute inset-x-0 -bottom-24 h-24 bg-gradient-to-t from-[#00FFC6]/15 to-transparent blur-xl" />
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 18 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ delay: 0.2, type: 'spring', stiffness: 140, damping: 18 }}
          className="relative mt-12 overflow-hidden rounded-2xl border border-white/10 bg-white/5 p-6 backdrop-blur-md"
        >
          <div className="pointer-events-none absolute inset-0 bg-gradient-to-r from-[#00FFC6]/10 via-transparent to-[#8A2BE2]/10" />
          <div className="relative flex items-start gap-3">
            <div className="mt-1 grid h-10 w-10 place-items-center rounded-xl bg-gradient-to-br from-[#00FFC6]/20 to-[#8A2BE2]/20 ring-1 ring-white/10">
              <Star className="h-5 w-5 text-white" />
            </div>
            <div>
              <div className="text-lg font-semibold">All Participants receive</div>
              <ul className="mt-2 space-y-1 text-white/80">
                {perks.map((pk) => (
                  <li key={pk} className="flex items-center gap-2">
                    <span className="inline-block h-1.5 w-1.5 rounded-full bg-[#00FFC6]" />
                    <span className="text-sm">{pk}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
