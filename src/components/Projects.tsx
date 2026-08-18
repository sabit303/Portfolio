import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Github, ExternalLink, X, ArrowUpRight } from 'lucide-react';
import { PORTFOLIO_DATA, Project } from '../data/portfolioData';

export const Projects: React.FC = () => {
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);

  return (
    <section id="projects" className="py-24 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.5 }}>
          <p className="text-xs font-mono uppercase tracking-widest text-cyan-400 mb-2">03. Portfolio</p>
          <h2 className="text-3xl sm:text-4xl font-bold text-white mb-12">Featured Projects</h2>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {PORTFOLIO_DATA.projects.map((project) => (
              <div key={project.id} className="glass-card glass-card-hover p-8 rounded-2xl flex flex-col justify-between cursor-pointer group" onClick={() => setSelectedProject(project)}>
                <div>
                  <div className="flex items-center justify-between mb-4">
                    <h3 className="text-xl font-bold text-white group-hover:text-cyan-400 transition-colors">
                      {project.title}
                    </h3>
                    <ArrowUpRight className="w-5 h-5 text-neutral-500 group-hover:text-cyan-400 transition-colors" />
                  </div>

                  <p className="text-neutral-300 text-sm mb-6 leading-relaxed">
                    {project.description}
                  </p>
                </div>

                <div>
                  <div className="flex flex-wrap gap-2 mb-6">
                    {project.technologies.map((tech, idx) => (
                      <span key={idx} className="px-2.5 py-1 rounded bg-cyan-500/10 text-cyan-400 text-xs font-mono">
                        {tech}
                      </span>
                    ))}
                  </div>

                  <div className="flex items-center justify-between pt-4 border-t border-white/5">
                    <span className="text-xs font-mono text-neutral-500">Click for details</span>
                    {project.githubUrl && (
                      <a href={project.githubUrl} target="_blank" rel="noopener noreferrer" onClick={(e) => e.stopPropagation()} className="text-neutral-400 hover:text-white transition-colors" aria-label="GitHub Link">
                        <Github className="w-5 h-5" />
                      </a>
                    )}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </motion.div>
      </div>

      <AnimatePresence>
        {selectedProject && (
          <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-sm" onClick={() => setSelectedProject(null)}>
            <motion.div initial={{ opacity: 0, scale: 0.95 }} animate={{ opacity: 1, scale: 1 }} exit={{ opacity: 0, scale: 0.95 }} onClick={(e) => e.stopPropagation()} className="glass-card p-8 rounded-2xl max-w-2xl w-full max-h-[90vh] overflow-y-auto relative border border-cyan-500/30">
              <button onClick={() => setSelectedProject(null)} className="absolute top-6 right-6 text-neutral-400 hover:text-white">
                <X className="w-6 h-6" />
              </button>

              <h3 className="text-2xl font-bold text-white mb-2">{selectedProject.title}</h3>
              <p className="text-sm font-mono text-cyan-400 mb-6">{selectedProject.tagline}</p>

              <div className="space-y-6 text-sm text-neutral-300 mb-8">
                <div>
                  <h4 className="font-mono text-xs uppercase text-neutral-400 mb-2">Problem</h4>
                  <p className="bg-neutral-900/50 p-4 rounded-xl border border-white/5">{selectedProject.problem}</p>
                </div>

                <div>
                  <h4 className="font-mono text-xs uppercase text-neutral-400 mb-2">Solution</h4>
                  <p className="bg-neutral-900/50 p-4 rounded-xl border border-white/5">{selectedProject.solution}</p>
                </div>
              </div>

              <div className="flex items-center justify-between pt-6 border-t border-white/10">
                <div className="flex flex-wrap gap-2">
                  {selectedProject.technologies.map((tech, idx) => (
                    <span key={idx} className="px-2.5 py-1 rounded bg-neutral-800 text-neutral-300 text-xs font-mono">
                      {tech}
                    </span>
                  ))}
                </div>

                {selectedProject.githubUrl && (
                  <a href={selectedProject.githubUrl} target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2 px-4 py-2 rounded-lg bg-cyan-500/10 text-cyan-400 hover:bg-cyan-500/20 font-mono text-xs font-semibold transition-all">
                    <Github className="w-4 h-4" /> View GitHub
                  </a>
                )}
              </div>
            </motion.div>
          </div>
        )}
      </AnimatePresence>
    </section>
  );
};