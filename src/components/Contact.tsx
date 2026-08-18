import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Mail, Github, Linkedin, Copy, Check } from 'lucide-react';
import { PORTFOLIO_DATA } from '../data/portfolioData';

export const Contact: React.FC = () => {
  const [copied, setCopied] = useState(false);

  const copyEmail = () => {
    navigator.clipboard.writeText(PORTFOLIO_DATA.personal.email);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <section id="contact" className="py-24 relative bg-black/40">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.5 }} className="max-w-3xl mx-auto text-center">
          <p className="text-xs font-mono uppercase tracking-widest text-cyan-400 mb-2">06. Get In Touch</p>
          <h2 className="text-3xl sm:text-5xl font-bold text-white mb-6">Let's build something meaningful.</h2>
          <p className="text-neutral-400 text-base mb-10 leading-relaxed">
            I am currently open to software engineering opportunities, research collaborations, and technical discussions[cite: 1].
          </p>

          <div className="glass-card p-8 rounded-2xl flex flex-col sm:flex-row items-center justify-between gap-6 border border-white/10 mb-12">
            <div className="flex items-center gap-4">
              <div className="p-3 rounded-xl bg-cyan-500/10 text-cyan-400">
                <Mail className="w-6 h-6" />
              </div>
              <div className="text-left">
                <p className="text-xs font-mono text-neutral-500">Direct Email</p>
                <p className="text-white font-mono text-sm sm:text-base">{PORTFOLIO_DATA.personal.email}</p>
              </div>
            </div>

            <button onClick={copyEmail} className="inline-flex items-center gap-2 px-4 py-2.5 rounded-xl bg-white/5 hover:bg-white/10 text-white font-mono text-xs transition-all border border-white/10">
              {copied ? <Check className="w-4 h-4 text-green-400" /> : <Copy className="w-4 h-4 text-cyan-400" />}
              {copied ? 'Copied to Clipboard!' : 'Copy Email'}
            </button>
          </div>

          <div className="flex items-center justify-center gap-6">
            <a href={PORTFOLIO_DATA.personal.github} target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 text-neutral-400 hover:text-white text-sm font-mono transition-colors">
              <Github className="w-5 h-5" /> GitHub
            </a>
            <a href={PORTFOLIO_DATA.personal.linkedin} target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 text-neutral-400 hover:text-white text-sm font-mono transition-colors">
              <Linkedin className="w-5 h-5" /> LinkedIn
            </a>
          </div>
        </motion.div>
      </div>
    </section>
  );
};