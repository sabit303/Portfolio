import React, { useState, useEffect } from 'react';
import { Menu, X, Github, Linkedin, Mail } from 'lucide-react';
import { PORTFOLIO_DATA } from '../data/portfolioData';

export const Navbar: React.FC = () => {
  const [scrolled, setScrolled] = useState(false);
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'About', href: '#about' },
    { name: 'Skills', href: '#skills' },
    { name: 'Projects', href: '#projects' },
    { name: 'Experience', href: '#experience' },
    { name: 'Achievements', href: '#achievements' },
    { name: 'Contact', href: '#contact' },
  ];

  return (
    <header className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${scrolled ? 'bg-[#0b0c10]/80 backdrop-blur-md border-b border-white/5 py-4' : 'bg-transparent py-6'}`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between">
        <a href="#" className="font-mono text-lg font-bold text-white tracking-wider flex items-center gap-2">
          <span className="text-cyan-400">&lt;</span>
          {PORTFOLIO_DATA.personal.name.split(' ')[0]}
          <span className="text-cyan-400">/&gt;</span>
        </a>

        <nav className="hidden md:flex items-center gap-8">
          {navLinks.map((link) => (
            <a key={link.name} href={link.href} className="text-sm font-medium text-neutral-400 hover:text-white transition-colors">
              {link.name}
            </a>
          ))}
          <a href="/cv.pdf" target="_blank" rel="noopener noreferrer" className="px-4 py-2 rounded-lg text-xs font-mono font-semibold bg-cyan-500/10 text-cyan-400 border border-cyan-500/20 hover:bg-cyan-500/20 transition-all">
            CV.pdf
          </a>
        </nav>

        <button onClick={() => setIsOpen(!isOpen)} className="md:hidden text-neutral-400 hover:text-white" aria-label="Toggle menu">
          {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
        </button>
      </div>

      {isOpen && (
        <div className="md:hidden glass-card border-b border-white/10 px-4 pt-4 pb-6 mt-2 flex flex-col gap-4">
          {navLinks.map((link) => (
            <a key={link.name} href={link.href} onClick={() => setIsOpen(false)} className="text-sm font-medium text-neutral-300 hover:text-white py-1">
              {link.name}
            </a>
          ))}
          <a href="/cv.pdf" target="_blank" rel="noopener noreferrer" className="inline-block text-center px-4 py-2 rounded-lg text-xs font-mono font-semibold bg-cyan-500/10 text-cyan-400 border border-cyan-500/20">
            Download CV
          </a>
        </div>
      )}
    </header>
  );
};