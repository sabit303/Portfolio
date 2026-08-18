import React from 'react';
import { motion } from 'framer-motion';
import { Trophy, Award } from 'lucide-react';
import { PORTFOLIO_DATA } from '../data/portfolioData';

export const Achievements: React.FC = () => {
  return (
    <section id="achievements" className="py-24 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.5 }}>
          <p className="text-xs font-mono uppercase tracking-widest text-cyan-400 mb-2">05. Highlights</p>
          <h2 className="text-3xl sm:text-4xl font-bold text-white mb-12">Achievements</h2>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {PORTFOLIO_DATA.achievements.map((item) => (
              <div key={item.id} className="glass-card p-8 rounded-2xl flex items-start gap-6 border border-white/5 hover:border-cyan-500/30 transition-all">
                <div className="p-4 rounded-xl bg-cyan-500/10 text-cyan-400 shrink-0">
                  <Trophy className="w-6 h-6" />
                </div>

                <div>
                  <div className="flex items-center justify-between mb-1">
                    <span className="font-mono text-xs text-cyan-400">{item.year}</span>
                  </div>
                  <h3 className="text-xl font-bold text-white mb-1">{item.title}</h3>
                  <p className="text-sm font-medium text-neutral-300 mb-3">{item.event}</p>
                  <p className="text-sm text-neutral-400 leading-relaxed">{item.description}</p>
                </div>
              </div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
};