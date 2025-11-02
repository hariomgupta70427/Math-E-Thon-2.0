import { useMemo, useRef } from 'react';
import { motion, useScroll, useSpring } from 'framer-motion';
import {
  Mic,
  Laptop,
  Coffee,
  Users,
  Moon,
  Sun,
  Presentation,
  Award,
  Timer,
  Rocket
} from 'lucide-react';

const neonLine = 'from-[#00FFC6] to-[#8A2BE2]';

const day1 = [
  { time: '9:00 AM – 10:00 AM', title: 'Registrations', desc: 'Teams check in and settle down before the event begins.', icon: Timer },
  { time: '10:00 AM – 11:00 AM', title: 'Inauguration Ceremony', desc: 'Opening remarks by faculty and organizers. Rules, judging criteria, and timelines announced.', icon: Mic },
  { time: '11:00 AM – 1:00 PM', title: 'Hackathon Kickoff!', desc: 'Teams start working on their projects based on the given problem statements.', icon: Rocket },
  { time: '1:00 PM – 2:00 PM', title: 'Lunch Break', desc: 'Fuel up and recharge for the build.', icon: Coffee },
  { time: '2:00 PM – 7:00 PM', title: 'Development Phase – Round 1', desc: 'Teams continue building their projects. Mentors available for guidance. (Elimination round may occur towards the end.)', icon: Laptop },
  { time: '7:00 PM – 8:00 PM', title: 'Dinner Break', desc: 'Grab dinner and take a breather.', icon: Coffee },
  { time: '8:00 PM – 9:30 PM', title: 'Fun Activities & Team Engagement', desc: 'Relaxation & creativity sessions for the top 10 teams.', icon: Users },
  { time: '9:30 PM – 2:00 AM', title: 'Night Development Phase', desc: 'Teams resume coding with mentor assistance.', icon: Moon },
  { time: '2:00 AM – 3:00 AM', title: 'Midnight Mentor Round', desc: 'Mentors visit teams, review progress, and provide feedback.', icon: Users }
];

const day2 = [
  { time: '3:00 AM – 6:00 AM', title: 'Final Development Sprint', desc: 'Teams polish and finalize their projects.', icon: Laptop },
  { time: '6:00 AM – 7:00 AM', title: 'Mentor Interaction & Preliminary Evaluation', desc: 'Last checks with mentors and early scoring.', icon: Users },
  { time: '7:00 AM – 8:00 AM', title: 'Breakfast & Refresh Break', desc: 'Light breakfast to power the final push.', icon: Sun },
  { time: '8:00 AM – 9:30 AM', title: 'Final Presentations', desc: 'Top teams present their solutions before the judging panel.', icon: Presentation },
  { time: '9:30 AM – 10:30 AM', title: 'Closing & Award Ceremony', desc: 'Results announced, winners felicitated, and event concludes.', icon: Award }
];

function FloatingMath() {
  const items = useMemo(
    () => [
      { char: 'π', x: '10%', delay: 0 },
      { char: '∑', x: '30%', delay: 0.15 },
      { char: '√', x: '55%', delay: 0.3 },
      { char: '∞', x: '75%', delay: 0.45 }
    ],
    []
  );
  return (
    <div className="pointer-events-none absolute inset-0 overflow-hidden">
      {items.map((it, i) => (
        <motion.span
          key={i}
          initial={{ y: 40, opacity: 0 }}
          animate={{ y: -40, opacity: 0.6 }}
          transition={{ duration: 6, repeat: Infinity, repeatType: 'reverse', delay: it.delay, ease: 'easeInOut' }}
          className="absolute text-6xl font-semibold text-white/5 select-none"
          style={{ left: it.x, top: `${15 + i * 18}%` }}
        >
          {it.char}
        </motion.span>
      ))}
    </div>
  );
}

function TimelineCard({ i, time, title, desc, Icon }) {
  const fromLeft = i % 2 === 0;
  return (
    <motion.div
      initial={{ opacity: 0, x: fromLeft ? -32 : 32 }}
      whileInView={{ opacity: 1, x: 0 }}
      viewport={{ once: true, amount: 0.2 }}
      transition={{ type: 'spring', stiffness: 120, damping: 18 }}
      className={`relative w-full sm:w-[calc(50%-1.25rem)] ${fromLeft ? 'self-start sm:mr-auto' : 'self-end sm:ml-auto'}`}
    >
      <div className="group relative rounded-2xl border border-white/10 bg-white/5 p-5 backdrop-blur-md shadow-[inset_0_1px_0_rgba(255,255,255,0.05),0_0_40px_rgba(0,255,198,0.07)]">
        <div className="absolute -inset-px rounded-2xl opacity-0 transition-opacity duration-300 group-hover:opacity-100 bg-gradient-to-r from-[#00FFC6]/10 via-transparent to-[#8A2BE2]/10" />
        <div className="relative flex items-start gap-3">
          <div className="mt-1 flex h-9 w-9 items-center justify-center rounded-xl bg-gradient-to-br from-[#00FFC6]/20 to-[#8A2BE2]/20 text-[#00FFC6] ring-1 ring-white/10">
            <Icon className="h-5 w-5" />
          </div>
          <div>
            <div className="text-xs uppercase tracking-wide text-white/60">{time}</div>
            <div className="mt-1 text-lg font-semibold text-white">{title}</div>
            <p className="mt-1 text-sm text-white/75">{desc}</p>
          </div>
        </div>
      </div>
    </motion.div>
  );
}

export default function EventTimeline() {
  const sectionRef = useRef(null);
  const { scrollYProgress } = useScroll({ target: sectionRef, offset: ['start end', 'end start'] });
  const progressX = useSpring(scrollYProgress, { stiffness: 120, damping: 30, mass: 0.2 });

  return (
    <section ref={sectionRef} id="timeline" className="relative w-full bg-[#0A0A0A] py-24 text-[#EAEAEA]">
      {/* Neon radial glow background */}
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(60%_50%_at_50%_0%,rgba(0,255,198,0.15),transparent_70%)]" />
      <FloatingMath />

      {/* Scroll progress bar */}
      <div className="sticky top-0 z-20 mx-auto w-full max-w-7xl px-6">
        <div className="relative h-1.5 w-full overflow-hidden rounded-full bg-white/10 backdrop-blur-sm">
          <motion.div style={{ scaleX: progressX }} className={`origin-left h-full bg-gradient-to-r ${neonLine} shadow-[0_0_20px_rgba(0,255,198,0.5)]`} />
        </div>
      </div>

      <div className="relative mx-auto mt-10 max-w-7xl px-6">
        <div className="mb-14 space-y-2">
          <h2 className="text-center text-3xl font-bold sm:text-4xl">Event Flow</h2>
          <p className="text-center text-white/70">A 24-hour neon journey from ideation to celebration</p>
        </div>

        {/* Day 1 */}
        <div className="relative">
          <h3 className="mb-10 inline-flex items-center gap-3 rounded-full bg-gradient-to-r from-[#00FFC6]/15 to-[#8A2BE2]/15 px-5 py-2 text-lg font-semibold text-white ring-1 ring-white/10">
            <span className="inline-block h-2 w-2 rounded-full bg-[#00FFC6] shadow-[0_0_12px_#00FFC6]" /> Day 1
          </h3>

          {/* Vertical neon line */}
          <div className="absolute left-1/2 top-0 hidden h-full -translate-x-1/2 sm:block">
            <div className={`h-full w-[3px] rounded-full bg-gradient-to-b ${neonLine}`} />
          </div>

          <div className="relative grid grid-cols-1 gap-6 sm:gap-8">
            {day1.map((ev, i) => (
              <div key={ev.title} className="relative flex flex-col sm:grid sm:grid-cols-2 sm:items-center">
                {/* connector dot for large screens */}
                <div className="pointer-events-none absolute left-1/2 top-1/2 hidden -translate-x-1/2 -translate-y-1/2 sm:block">
                  <div className="h-3 w-3 rounded-full bg-white/90 shadow-[0_0_12px_rgba(255,255,255,0.8)]" />
                </div>
                {i % 2 === 0 ? (
                  <TimelineCard i={i} {...ev} Icon={ev.icon} />
                ) : (
                  <div />
                )}
                {i % 2 === 1 ? <TimelineCard i={i} {...ev} Icon={ev.icon} /> : <div />}
              </div>
            ))}
          </div>
        </div>

        {/* Day 2 */}
        <div className="relative mt-20">
          <h3 className="mb-10 inline-flex items-center gap-3 rounded-full bg-gradient-to-r from-[#00FFC6]/15 to-[#8A2BE2]/15 px-5 py-2 text-lg font-semibold text-white ring-1 ring-white/10">
            <span className="inline-block h-2 w-2 rounded-full bg-[#8A2BE2] shadow-[0_0_12px_#8A2BE2]" /> Day 2
          </h3>

          <div className="absolute left-1/2 top-0 hidden h-full -translate-x-1/2 sm:block">
            <div className={`h-full w-[3px] rounded-full bg-gradient-to-b ${neonLine}`} />
          </div>

          <div className="relative grid grid-cols-1 gap-6 sm:gap-8">
            {day2.map((ev, i) => (
              <div key={ev.title} className="relative flex flex-col sm:grid sm:grid-cols-2 sm:items-center">
                <div className="pointer-events-none absolute left-1/2 top-1/2 hidden -translate-x-1/2 -translate-y-1/2 sm:block">
                  <div className="h-3 w-3 rounded-full bg-white/90 shadow-[0_0_12px_rgba(255,255,255,0.8)]" />
                </div>
                {i % 2 === 0 ? (
                  <TimelineCard i={i} {...ev} Icon={ev.icon} />
                ) : (
                  <div />
                )}
                {i % 2 === 1 ? <TimelineCard i={i} {...ev} Icon={ev.icon} /> : <div />}
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
