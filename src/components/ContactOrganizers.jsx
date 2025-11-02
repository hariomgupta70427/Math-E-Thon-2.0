import { motion } from 'framer-motion';
import { Mail, Phone, Users } from 'lucide-react';

export default function ContactOrganizers() {
  return (
    <section id="contact" className="relative w-full bg-[#0A0A0A] py-24 text-[#EAEAEA]">
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(55%_45%_at_50%_0%,rgba(138,43,226,0.12),transparent_65%)]" />
      <div className="relative mx-auto max-w-7xl px-6">
        <div className="mb-12 text-center">
          <motion.h2
            initial={{ opacity: 0, y: 8 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ type: 'spring', stiffness: 120, damping: 18 }}
            className="text-3xl font-bold sm:text-4xl"
          >
            Contact Organizers
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 8 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.05, type: 'spring', stiffness: 120, damping: 18 }}
            className="mt-2 text-white/70"
          >
            Questions, partnerships, or sponsorships — we’d love to talk.
          </motion.p>
        </div>

        <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
          {/* Faculty Mentors */}
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ type: 'spring', stiffness: 140, damping: 18 }}
            whileHover={{ y: -6 }}
            className="relative overflow-hidden rounded-2xl border border-white/10 bg-white/5 p-6 backdrop-blur-md shadow-[inset_0_1px_0_rgba(255,255,255,0.05),0_0_40px_rgba(0,255,198,0.06)]"
          >
            <div className="pointer-events-none absolute -inset-px opacity-60 blur-2xl bg-gradient-to-br from-[#00FFC6]/20 to-[#8A2BE2]/20" />
            <div className="relative mb-4 flex items-center gap-3">
              <div className="grid h-10 w-10 place-items-center rounded-xl bg-gradient-to-br from-[#00FFC6]/20 to-[#8A2BE2]/20 ring-1 ring-white/10">
                <Users className="h-5 w-5 text-white" />
              </div>
              <h3 className="text-lg font-semibold">Faculty Mentors</h3>
            </div>
            <ul className="relative space-y-3 text-white/80">
              <li>
                <div className="font-medium text-white">Dr. P.P Vermani</div>
                <div className="text-sm text-white/70">Society Advisor</div>
              </li>
              <li>
                <div className="font-medium text-white">Dr. Manjeet Kaur</div>
                <div className="text-sm text-white/70">Society Convener</div>
              </li>
              <li>
                <div className="font-medium text-white">Ms. Harpreet Kaur</div>
                <div className="text-sm text-white/70">Society Convener</div>
              </li>
            </ul>
          </motion.div>

          {/* Student Coordinators */}
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ delay: 0.05, type: 'spring', stiffness: 140, damping: 18 }}
            whileHover={{ y: -6 }}
            className="relative overflow-hidden rounded-2xl border border-white/10 bg-white/5 p-6 backdrop-blur-md shadow-[inset_0_1px_0_rgba(255,255,255,0.05),0_0_40px_rgba(0,255,198,0.06)]"
          >
            <div className="pointer-events-none absolute -inset-px opacity-60 blur-2xl bg-gradient-to-br from-[#8A2BE2]/20 to-[#00FFC6]/20" />
            <div className="relative mb-4 flex items-center gap-3">
              <div className="grid h-10 w-10 place-items-center rounded-xl bg-gradient-to-br from-[#8A2BE2]/20 to-[#00FFC6]/20 ring-1 ring-white/10">
                <Users className="h-5 w-5 text-white" />
              </div>
              <h3 className="text-lg font-semibold">Student Coordinators</h3>
            </div>
              <ul className="relative space-y-4 text-white/80">
                <li>
                  <div className="font-medium text-white">Hariom Gupta</div>
                  <div className="mt-2 flex flex-wrap items-center gap-3 text-sm text-white/70">
                    <a href="tel:+919315175199" className="inline-flex items-center gap-1 hover:text-[#00FFC6]"><Phone className="h-4 w-4" /><span>+91 9315175199</span></a>
                    <a href="mailto:guptahariom049@gmail.com" className="inline-flex items-center gap-1 hover:text-[#8A2BE2]"><Mail className="h-4 w-4" /><span>guptahariom049@gmail.com</span></a>
                  </div>
                </li>
                <li>
                  <div className="font-medium text-white">Mohammad Kaif</div>
                  <div className="mt-2 flex flex-wrap items-center gap-3 text-sm text-white/70">
                    <a href="tel:+918130660841" className="inline-flex items-center gap-1 hover:text-[#00FFC6]"><Phone className="h-4 w-4" /><span>+91 8130660841</span></a>
                    <a href="mailto:kkaif2004@gmail.com" className="inline-flex items-center gap-1 hover:text-[#8A2BE2]"><Mail className="h-4 w-4" /><span>kkaif2004@gmail.com</span></a>
                  </div>
                </li>
                <li>
                  <div className="font-medium text-white">Tushar Yadav</div>
                  <div className="mt-2 flex flex-wrap items-center gap-3 text-sm text-white/70">
                    <a href="tel:+917982495462" className="inline-flex items-center gap-1 hover:text-[#00FFC6]"><Phone className="h-4 w-4" /><span>+91 7982495462</span></a>
                    <a href="mailto:tushar767676@gmail.com" className="inline-flex items-center gap-1 hover:text-[#8A2BE2]"><Mail className="h-4 w-4" /><span>tushar767676@gmail.com</span></a>
                  </div>
                </li>
              </ul>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
