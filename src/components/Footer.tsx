import React from 'react';
import { PORTFOLIO_DATA } from '../data/portfolioData';

export const Footer: React.FC = () => {
  return (
    <footer className="py-8 border-t border-white/5 text-center text-xs font-mono text-neutral-500">
      <div className="max-w-7xl mx-auto px-4">
        <p>© {new Date().getFullYear()} {PORTFOLIO_DATA.personal.name}. All rights reserved.</p>
        <p className="mt-2 text-neutral-600">Built with React, TypeScript, Tailwind CSS & Framer Motion.</p>
      </div>
    </footer>
  );
};