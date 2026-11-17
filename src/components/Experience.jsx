import React from 'react';
import { motion } from 'framer-motion';
import { Plane, Calendar, MapPin, CheckCircle2, Radio, Network, Monitor, ShieldCheck } from 'lucide-react';
import { personalInfo } from '../data/portfolio';

export default function Experience() {
  const exp = personalInfo.experience[0];

  const exposureIcons = [Radio, Network, Monitor, ShieldCheck];

  return (
    <section id="experience" className="py-24 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-xs sm:text-sm font-semibold tracking-widest font-mono uppercase mb-2 dark:text-indigo-400 light:text-indigo-600">
            Professional Growth
          </h2>
          <p className="text-3xl sm:text-4xl font-extrabold tracking-tight font-sans dark:text-white light:text-slate-900">
            Experience &amp; Professional Journey
          </p>
          <div className="mt-3 w-12 h-1 bg-indigo-500 rounded-full mx-auto" />
        </div>

        {/* Timeline Container */}
        <div className="max-w-4xl mx-auto relative">
          <motion.div
            initial={{ opacity: 0, y: 25 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="relative"
          >
            {/* Experience Card */}
            <div className="p-6 sm:p-8 rounded-2xl border dark:border-white/10 dark:bg-dark-card light:border-slate-200 light:bg-white shadow-lg space-y-6">
              {/* Header Info */}
              <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 pb-5 border-b dark:border-white/10 light:border-slate-200">
                <div>
                  <div className="flex items-center gap-2 mb-1">
                    <span className="px-2.5 py-0.5 rounded-full text-[11px] font-mono font-medium dark:bg-indigo-500/10 dark:text-indigo-400 dark:border dark:border-indigo-500/20 light:bg-indigo-50 light:text-indigo-600 light:border light:border-indigo-200">
                      {exp.type}
                    </span>
                  </div>
                  <h3 className="text-xl sm:text-2xl font-bold font-sans dark:text-white light:text-slate-900">
                    {exp.position}
                  </h3>
                  <p className="text-sm font-semibold dark:text-slate-300 light:text-slate-700 flex items-center gap-1.5 mt-0.5">
                    <Plane className="w-4 h-4 text-indigo-400" />
                    {exp.organization}
                  </p>
                </div>

                <div className="flex flex-col sm:items-end gap-1 text-xs font-mono text-slate-400">
                  <span className="flex items-center gap-1.5">
                    <Calendar className="w-3.5 h-3.5 text-indigo-400" />
                    {exp.duration}
                  </span>
                  <span className="flex items-center gap-1.5">
                    <MapPin className="w-3.5 h-3.5 text-cyan-400" />
                    {exp.location}
                  </span>
                </div>
              </div>

              {/* Technical Exposure Bullet Points */}
              <div className="space-y-3">
                {exp.points.map((point, index) => {
                  const Icon = exposureIcons[index % exposureIcons.length] || CheckCircle2;
                  return (
                    <div
                      key={index}
                      className="flex items-start gap-3.5 p-4 rounded-xl border dark:border-white/5 dark:bg-white/[0.02] light:border-slate-100 light:bg-slate-50/70"
                    >
                      <div className="p-2 rounded-lg dark:bg-indigo-500/10 dark:text-indigo-400 light:bg-indigo-100/60 light:text-indigo-600 mt-0.5 shrink-0">
                        <Icon className="w-4 h-4" />
                      </div>
                      <p className="text-xs sm:text-sm leading-relaxed dark:text-slate-300 light:text-slate-700">
                        {point}
                      </p>
                    </div>
                  );
                })}
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
