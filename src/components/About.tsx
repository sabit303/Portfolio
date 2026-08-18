import React from 'react';
import { motion } from 'framer-motion';
import { Code2, Terminal, Cpu, CheckCircle2 } from 'lucide-react';
import { PORTFOLIO_DATA } from '../data/portfolioData';

export const About: React.FC = () => {
  return (
    <section id="about" className="py-24 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.5 }}>
          <p className="text-xs font-mono uppercase tracking-widest text-cyan-400 mb-2">01. Overview</p>
          <h2 className="text-3xl sm:text-4xl font-bold text-white mb-12">About Me</h2>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
            <div className="lg:col-span-7 glass-card p-8 rounded-2xl">
              <p className="text-neutral-300 text-base leading-relaxed mb-6">
                {PORTFOLIO_DATA.about.bio}
              </p>
              <p className="text-neutral-400 text-sm leading-relaxed mb-8">
                Currently pursuing a B.Sc. in Computer Science and Engineering at Mymensingh Engineering College[cite: 1], alongside hands-on testing and development experience at Arvyo Soft[cite: 1].
              </p>

              <p className="font-mono text-xs uppercase text-cyan-400 tracking-wider mb-4">Core Focus Areas</p>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                {PORTFOLIO_DATA.about.focus.map((item, idx) => (
                  <div key={idx} className="flex items-center gap-2.5 text-sm text-neutral-200">
                    <CheckCircle2 className="w-4 h-4 text-cyan-400 shrink-0" />
                    <span>{item}</span>
                  </div>
                ))}
              </div>
            </div>

            <div className="lg:col-span-5 grid grid-cols-1 gap-4">
              <div className="glass-card p-6 rounded-xl flex items-start gap-4">
                <Terminal className="w-8 h-8 text-cyan-400 shrink-0 mt-1" />
                <div>
                  <h3 className="text-white font-semibold mb-1">Academic Background</h3>
                  <p className="text-sm text-neutral-400">Computer Science student at Mymensingh Engineering College (2023 – Present)[cite: 1].</p>
                </div>
              </div>

              <div className="glass-card p-6 rounded-xl flex items-start gap-4">
                <Code2 className="w-8 h-8 text-blue-400 shrink-0 mt-1" />
                <div>
                  <h3 className="text-white font-semibold mb-1">Industry Experience</h3>
                  <p className="text-sm text-neutral-400">Software Engineer Intern at Arvyo Soft, working on client APIs and web UIs[cite: 1].</p>
                </div>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};