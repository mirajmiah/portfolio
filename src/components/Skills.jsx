import React, { useState } from 'react';
import { motion } from 'framer-motion';
import {
  Code2,
  Terminal,
  FileCode,
  Layout,
  Palette,
  Braces,
  Layers,
  Server,
  Cpu,
  Network,
  Database,
  FileJson,
  GitBranch,
  Github,
  Laptop,
  Cloud,
  CheckCircle
} from 'lucide-react';
import { personalInfo } from '../data/portfolio';

// Icon mapping helper
const iconMap = {
  Code2,
  Terminal,
  FileCode,
  Layout,
  Palette,
  Braces,
  Layers,
  Server,
  Cpu,
  Network,
  Database,
  FileJson,
  GitBranch,
  Github,
  Laptop,
  Cloud,
};

export default function Skills() {
  const [activeTab, setActiveTab] = useState('All');

  const categories = ['All', ...personalInfo.skills.categories.map((c) => c.name)];

  const displayedCategories =
    activeTab === 'All'
      ? personalInfo.skills.categories
      : personalInfo.skills.categories.filter((c) => c.name === activeTab);

  return (
    <section id="skills" className="py-24 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-12">
          <h2 className="text-xs sm:text-sm font-semibold tracking-widest font-mono uppercase mb-2 dark:text-indigo-400 light:text-indigo-600">
            {personalInfo.skills.subtitle}
          </h2>
          <p className="text-3xl sm:text-4xl font-extrabold tracking-tight font-sans dark:text-white light:text-slate-900">
            {personalInfo.skills.title}
          </p>
          <div className="mt-3 w-12 h-1 bg-indigo-500 rounded-full mx-auto" />
        </div>

        {/* Category Filter Pills */}
        <div className="flex flex-wrap items-center justify-center gap-2 mb-12">
          {categories.map((category) => (
            <button
              key={category}
              onClick={() => setActiveTab(category)}
              type="button"
              className={`px-4 py-2 rounded-xl text-xs sm:text-sm font-medium transition-all duration-200 ${
                activeTab === category
                  ? 'bg-indigo-600 text-white shadow-md shadow-indigo-500/20'
                  : 'dark:bg-slate-800/80 dark:text-slate-300 dark:hover:bg-slate-700 dark:border-white/10 light:bg-slate-100 light:text-slate-600 light:hover:bg-slate-200 border border-transparent'
              }`}
            >
              {category}
            </button>
          ))}
        </div>

        {/* Categories Grid */}
        <div className="space-y-10">
          {displayedCategories.map((cat, catIdx) => (
            <motion.div
              key={cat.name}
              initial={{ opacity: 0, y: 15 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: catIdx * 0.08 }}
              className="p-6 sm:p-8 rounded-2xl border dark:border-white/10 dark:bg-dark-card light:border-slate-200 light:bg-white shadow-sm"
            >
              <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-1 mb-6 pb-4 border-b dark:border-white/10 light:border-slate-200">
                <div>
                  <h3 className="text-lg font-bold dark:text-white light:text-slate-900 font-sans">
                    {cat.name}
                  </h3>
                  <p className="text-xs dark:text-slate-400 light:text-slate-500 font-mono mt-0.5">
                    {cat.description}
                  </p>
                </div>
                <span className="text-xs font-semibold px-2.5 py-1 rounded-full dark:bg-white/5 dark:text-slate-300 light:bg-slate-100 light:text-slate-600 self-start sm:self-center">
                  {cat.skills.length} Technologies
                </span>
              </div>

              {/* Skills Cards Grid */}
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
                {cat.skills.map((skill) => {
                  const IconComponent = iconMap[skill.icon] || Code2;
                  return (
                    <div
                      key={skill.name}
                      className="group flex items-center gap-3.5 p-3.5 rounded-xl border dark:border-white/5 dark:bg-white/[0.02] dark:hover:bg-white/[0.06] dark:hover:border-indigo-500/30 light:border-slate-100 light:bg-slate-50/70 light:hover:bg-indigo-50/50 light:hover:border-indigo-200 transition-all duration-200"
                    >
                      <div className="p-2.5 rounded-lg dark:bg-indigo-500/10 dark:text-indigo-400 light:bg-indigo-100/60 light:text-indigo-600 group-hover:scale-105 transition-transform">
                        <IconComponent className="w-5 h-5" />
                      </div>
                      <div className="flex-1 min-w-0">
                        <h4 className="text-sm font-semibold truncate dark:text-slate-100 light:text-slate-800">
                          {skill.name}
                        </h4>
                        <span className="text-xs font-mono text-slate-400 block truncate">
                          {skill.level}
                        </span>
                      </div>
                    </div>
                  );
                })}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
