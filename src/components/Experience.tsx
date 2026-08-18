import React from 'react';
import { motion } from 'framer-motion';
import { Briefcase, GraduationCap } from 'lucide-react';
import { PORTFOLIO_DATA } from '../data/portfolioData';

export const Experience: React.FC = () => {
  return (
    <section id="experience" className="py-24 relative bg-black/30">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.5 }}>
          <p className="text-xs font-mono uppercase tracking-widest text-cyan-400 mb-2">04. Journey</p>
          <h2 className="text-3xl sm:text-4xl font-bold text-white mb-12">Experience & Education</h2>

          <div className="relative border-l border-white/10 ml-4 md:ml-32 space-y-12">
            {PORTFOLIO_DATA.experience.map((item) => (
              <div key={item.id} className="relative pl-8 md:pl-12">
                <div className="absolute -left-[17px] top-1.5 p-1.5 rounded-full bg-[#0b0c10] border border-cyan-400 text-cyan-400">
                  {item.type === 'work' ? <Briefcase className="w-4 h-4" /> : <GraduationCap className="w-4 h-4" />}
                </div>

                <div className="md:absolute md:-left-32 md:top-1.5 font-mono text-xs text-neutral-500 mb-2 md:mb-0">
                  {item.period}
                </div>

                <div className="glass-card p-6 rounded-2xl">
                  <h3 className="text-lg font-bold text-white">{item.role}</h3>
                  <p className="text-sm font-mono text-cyan-400 mb-4">{item.organization} • {item.location}</p>

                  <ul className="space-y-2">
                    {item.description.map((bullet, idx) => (
                      <li key={idx} className="text-sm text-neutral-300 flex items-start gap-2">
                        <span className="text-cyan-400 shrink-0">•</span>
                        <span>{bullet}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
};