import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Github, ExternalLink, Info, Check, X, Layers, Code, Sparkles } from 'lucide-react';
import { personalInfo } from '../data/portfolio';

export default function Projects() {
  const [activeCategory, setActiveCategory] = useState('All');
  const [selectedProject, setSelectedProject] = useState(null);

  const categories = ['All', 'Full Stack', 'Applications'];

  const filteredProjects =
    activeCategory === 'All'
      ? personalInfo.projects
      : personalInfo.projects.filter((p) => p.category === activeCategory);

  return (
    <section id="projects" className="py-24 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-12">
          <h2 className="text-xs sm:text-sm font-semibold tracking-widest font-mono uppercase mb-2 dark:text-indigo-400 light:text-indigo-600">
            {personalInfo.projects.subtitle || "Some things I've worked on and built."}
          </h2>
          <p className="text-3xl sm:text-4xl font-extrabold tracking-tight font-sans dark:text-white light:text-slate-900">
            Featured Projects
          </p>
          <div className="mt-3 w-12 h-1 bg-indigo-500 rounded-full mx-auto" />
        </div>

        {/* Filter Pills */}
        <div className="flex justify-center gap-2 mb-12">
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setActiveCategory(cat)}
              type="button"
              className={`px-4 py-2 rounded-xl text-xs sm:text-sm font-medium transition-all duration-200 ${
                activeCategory === cat
                  ? 'bg-indigo-600 text-white shadow-md shadow-indigo-500/20'
                  : 'dark:bg-slate-800/80 dark:text-slate-300 dark:hover:bg-slate-700 dark:border-white/10 light:bg-slate-100 light:text-slate-600 light:hover:bg-slate-200 border border-transparent'
              }`}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* Projects Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredProjects.map((project, idx) => (
            <motion.div
              key={project.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.45, delay: idx * 0.1 }}
              className="group flex flex-col rounded-2xl overflow-hidden border dark:border-white/10 dark:bg-dark-card light:border-slate-200 light:bg-white shadow-sm hover:shadow-xl dark:hover:border-indigo-500/30 light:hover:border-indigo-300 transition-all duration-300"
            >
              {/* Thumbnail Container */}
              <div className="relative aspect-[16/10] overflow-hidden bg-slate-900/50">
                <img
                  src={project.image}
                  alt={project.title}
                  loading="lazy"
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent" />

                {/* Status Badge */}
                <div className="absolute top-3 right-3">
                  <span className="px-2.5 py-1 rounded-full text-[11px] font-mono font-medium backdrop-blur-md bg-black/60 text-white border border-white/15">
                    {project.status}
                  </span>
                </div>

                <div className="absolute bottom-3 left-4 right-4 text-white">
                  <span className="text-[11px] font-mono uppercase text-indigo-300 tracking-wider">
                    {project.tagline}
                  </span>
                  <h3 className="text-xl font-bold font-sans tracking-tight">
                    {project.title}
                  </h3>
                </div>
              </div>

              {/* Content Area */}
              <div className="p-6 flex-1 flex flex-col justify-between space-y-5">
                <div>
                  <p className="text-sm leading-relaxed dark:text-slate-300 light:text-slate-600 line-clamp-3 mb-4">
                    {project.description}
                  </p>

                  {/* Tech stack badges */}
                  <div className="flex flex-wrap gap-1.5 mb-4">
                    {project.technologies.map((tech) => (
                      <span
                        key={tech}
                        className="px-2.5 py-0.5 rounded-md text-[11px] font-mono dark:bg-white/5 dark:text-slate-300 dark:border-white/10 light:bg-slate-100 light:text-slate-700 border"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>

                {/* Card Actions */}
                <div className="pt-4 border-t dark:border-white/10 light:border-slate-200 flex items-center justify-between gap-2">
                  <div className="flex items-center gap-2">
                    <a
                      href={project.githubUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="p-2 rounded-lg transition-colors dark:bg-white/5 dark:hover:bg-white/10 dark:text-slate-200 light:bg-slate-100 light:hover:bg-slate-200 light:text-slate-700"
                      title="View GitHub Repository"
                      aria-label={`${project.title} GitHub repository`}
                    >
                      <Github className="w-4 h-4" />
                    </a>

                    {project.liveUrl ? (
                      <a
                        href={project.liveUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="p-2 rounded-lg transition-colors dark:bg-white/5 dark:hover:bg-white/10 dark:text-slate-200 light:bg-slate-100 light:hover:bg-slate-200 light:text-slate-700"
                        title="Live Demo"
                        aria-label={`${project.title} live demo`}
                      >
                        <ExternalLink className="w-4 h-4" />
                      </a>
                    ) : (
                      <span
                        className="p-2 rounded-lg opacity-40 cursor-not-allowed dark:text-slate-400 light:text-slate-400"
                        title="Live demo link will be available upon deployment"
                      >
                        <ExternalLink className="w-4 h-4" />
                      </span>
                    )}
                  </div>

                  <button
                    onClick={() => setSelectedProject(project)}
                    type="button"
                    className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg text-xs font-semibold dark:bg-indigo-500/10 dark:text-indigo-400 dark:hover:bg-indigo-500/20 light:bg-indigo-50 light:text-indigo-600 light:hover:bg-indigo-100 transition-colors"
                  >
                    <Info className="w-3.5 h-3.5" />
                    <span>View Features</span>
                  </button>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>

      {/* Feature Details Modal */}
      <AnimatePresence>
        {selectedProject && (
          <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/70 backdrop-blur-sm">
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.95 }}
              className="relative w-full max-w-xl max-h-[85vh] overflow-y-auto rounded-2xl border dark:border-white/15 dark:bg-dark-surface light:border-slate-200 light:bg-white p-6 sm:p-8 shadow-2xl"
            >
              {/* Close Button */}
              <button
                onClick={() => setSelectedProject(null)}
                className="absolute top-5 right-5 p-2 rounded-full dark:text-slate-400 dark:hover:text-white dark:hover:bg-white/10 light:text-slate-500 light:hover:text-slate-900 light:hover:bg-slate-100 transition-colors"
                aria-label="Close modal"
              >
                <X className="w-5 h-5" />
              </button>

              <div className="mb-4">
                <span className="text-xs font-mono uppercase text-indigo-400 tracking-wider">
                  {selectedProject.tagline}
                </span>
                <h3 className="text-2xl font-bold font-sans dark:text-white light:text-slate-900">
                  {selectedProject.title}
                </h3>
              </div>

              <p className="text-sm dark:text-slate-300 light:text-slate-600 mb-6 leading-relaxed">
                {selectedProject.description}
              </p>

              <div className="mb-6">
                <h4 className="text-xs font-bold font-mono uppercase tracking-wider mb-3 dark:text-slate-200 light:text-slate-700 flex items-center gap-1.5">
                  <Sparkles className="w-3.5 h-3.5 text-indigo-400" />
                  Key Capabilities & Architected Features
                </h4>
                <ul className="space-y-2">
                  {selectedProject.features.map((feature, i) => (
                    <li
                      key={i}
                      className="flex items-start gap-2.5 text-xs sm:text-sm dark:text-slate-300 light:text-slate-600"
                    >
                      <Check className="w-4 h-4 text-emerald-400 shrink-0 mt-0.5" />
                      <span>{feature}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <div className="mb-6">
                <h4 className="text-xs font-bold font-mono uppercase tracking-wider mb-2 dark:text-slate-200 light:text-slate-700">
                  Tech Stack
                </h4>
                <div className="flex flex-wrap gap-2">
                  {selectedProject.technologies.map((t) => (
                    <span
                      key={t}
                      className="px-2.5 py-1 rounded-md text-xs font-mono dark:bg-white/10 dark:text-slate-200 light:bg-slate-100 light:text-slate-800"
                    >
                      {t}
                    </span>
                  ))}
                </div>
              </div>

              <div className="pt-4 border-t dark:border-white/10 light:border-slate-200 flex justify-end gap-3">
                <a
                  href={selectedProject.githubUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-1.5 px-4 py-2 rounded-xl text-xs font-semibold text-white bg-indigo-600 hover:bg-indigo-500 shadow-sm transition-colors"
                >
                  <Github className="w-3.5 h-3.5" />
                  <span>GitHub Repository</span>
                </a>
              </div>
            </motion.div>
          </div>
        )}
      </AnimatePresence>
    </section>
  );
}
