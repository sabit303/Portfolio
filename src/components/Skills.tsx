import React from 'react';
import { motion } from 'framer-motion';
import { PORTFOLIO_DATA } from '../data/portfolioData';

export const Skills: React.FC = () => {
  return (
    <section id="skills" className="py-24 relative bg-black/30">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.5 }}>
          <p className="text-xs font-mono uppercase tracking-widest text-cyan-400 mb-2">02. Expertise</p>
          <h2 className="text-3xl sm:text-4xl font-bold text-white mb-12">Skills & Tech Stack</h2>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {PORTFOLIO_DATA.skills.map((group, idx) => (
              <div key={idx} className="glass-card p-6 rounded-2xl border border-white/5 hover:border-cyan-500/30 transition-all">
                <h3 className="text-sm font-mono text-cyan-400 uppercase tracking-wider mb-6 pb-2 border-b border-white/5">
                  {group.category}
                </h3>
                <div className="flex flex-wrap gap-2">
                  {group.items.map((skill, sIdx) => (
                    <span key={sIdx} className="px-3 py-1.5 rounded-lg bg-neutral-900/80 text-neutral-300 text-xs font-medium border border-white/5 hover:border-cyan-500/20 hover:text-white transition-all">
                      {skill}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
};