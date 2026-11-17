import React from 'react';
import { motion } from 'framer-motion';
import {
  Coffee,
  Binary,
  Workflow,
  Layers,
  Database,
  Puzzle,
  Cpu,
  ShieldCheck,
  Sparkles,
} from 'lucide-react';
import { personalInfo } from '../data/portfolio';

const learningIcons = {
  Coffee,
  Binary,
  Workflow,
  Layers,
  Database,
  Puzzle,
  Cpu,
  ShieldCheck,
};

export default function Learning() {
  const { title, subtitle, interests } = personalInfo.learningInterests;

  return (
    <section id="learning" className="py-24 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-xs sm:text-sm font-semibold tracking-widest font-mono uppercase mb-2 dark:text-indigo-400 light:text-indigo-600">
            {subtitle}
          </h2>
          <p className="text-3xl sm:text-4xl font-extrabold tracking-tight font-sans dark:text-white light:text-slate-900">
            {title}
          </p>
          <div className="mt-3 w-12 h-1 bg-indigo-500 rounded-full mx-auto" />
        </div>

        {/* Interests Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {interests.map((item, idx) => {
            const Icon = learningIcons[item.icon] || Sparkles;
            return (
              <motion.div
                key={item.title}
                initial={{ opacity: 0, y: 15 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: idx * 0.06 }}
                className="group relative p-6 rounded-2xl border dark:border-white/10 dark:bg-dark-card light:border-slate-200 light:bg-white shadow-sm hover:shadow-lg dark:hover:border-indigo-500/30 light:hover:border-indigo-300 transition-all duration-300 flex flex-col justify-between"
              >
                <div>
                  <div className="w-12 h-12 rounded-xl mb-4 flex items-center justify-center dark:bg-indigo-500/10 dark:text-indigo-400 light:bg-indigo-50 light:text-indigo-600 group-hover:scale-110 transition-transform">
                    <Icon className="w-6 h-6" />
                  </div>
                  <h3 className="text-base font-bold font-sans dark:text-white light:text-slate-900 mb-2">
                    {item.title}
                  </h3>
                  <p className="text-xs sm:text-sm leading-relaxed dark:text-slate-300 light:text-slate-600">
                    {item.desc}
                  </p>
                </div>

                <div className="mt-5 pt-3 border-t dark:border-white/5 light:border-slate-100 flex items-center gap-1.5 text-[11px] font-mono dark:text-indigo-400 light:text-indigo-600">
                  <span className="w-1.5 h-1.5 rounded-full bg-indigo-500"></span>
                  <span>Continuous Exploration</span>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
