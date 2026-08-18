import React from 'react';
import { motion } from 'framer-motion';
import { ArrowUpRight, Download, Github, Linkedin } from 'lucide-react';
import { PORTFOLIO_DATA } from '../data/portfolioData';

export const Hero: React.FC = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center pt-24 pb-16 overflow-hidden">
      <div className="glow-orb top-1/3 left-1/2 -translate-x-1/2 -translate-y-1/2" />
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 w-full">
        <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }} className="max-w-3xl">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full glass-card mb-6 text-xs font-mono text-cyan-400 border border-cyan-500/20">
            <span className="w-2 h-2 rounded-full bg-cyan-400 animate-pulse" />
            Software Engineer Intern @ Arvyo Soft[cite: 1]
          </div>

          <h1 className="text-4xl sm:text-6xl lg:text-7xl font-bold tracking-tight text-white mb-6">
            Hi, I'm <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-blue-500">{PORTFOLIO_DATA.personal.name}</span>
          </h1>

          <p className="text-lg sm:text-2xl font-mono text-neutral-400 mb-6">
            Computer Science Student • Software Engineer[cite: 1]
          </p>

          <p className="text-base sm:text-lg text-neutral-300 mb-10 leading-relaxed max-w-2xl">
            {PORTFOLIO_DATA.personal.tagline}
          </p>

          <div className="flex flex-wrap items-center gap-4">
            <a href="#projects" className="inline-flex items-center gap-2 px-6 py-3 rounded-xl bg-cyan-500 text-neutral-950 font-semibold hover:bg-cyan-400 transition-all shadow-lg shadow-cyan-500/20">
              View Projects
              <ArrowUpRight className="w-4 h-4" />
            </a>

            <a href="/cv.pdf" target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2 px-6 py-3 rounded-xl glass-card text-white font-medium hover:border-cyan-500/40 transition-all">
              <Download className="w-4 h-4 text-cyan-400" />
              Download CV
            </a>

            <div className="flex items-center gap-3 ml-2">
              <a href={PORTFOLIO_DATA.personal.github} target="_blank" rel="noopener noreferrer" className="p-3 rounded-xl glass-card text-neutral-300 hover:text-white hover:border-cyan-500/40 transition-all" aria-label="GitHub">
                <Github className="w-5 h-5" />
              </a>
              <a href={PORTFOLIO_DATA.personal.linkedin} target="_blank" rel="noopener noreferrer" className="p-3 rounded-xl glass-card text-neutral-300 hover:text-white hover:border-cyan-500/40 transition-all" aria-label="LinkedIn">
                <Linkedin className="w-5 h-5" />
              </a>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};