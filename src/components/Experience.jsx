import React from 'react';
import { motion } from 'framer-motion';
import { Briefcase, Plane, Network, Radio, Monitor, ShieldCheck, PhoneCall, Calendar, MapPin } from 'lucide-react';
import { personalInfo } from '../data/portfolio';

export default function Experience() {
  const exp = personalInfo.experience[0];

  const exposureIcons = {
    FIDS: Monitor,
    CCTV: ShieldCheck,
    'PA System': Radio,
    EPABX: PhoneCall,
    'CAT6 Networking': Network,
    'Fibre-Optic Communication': Network,
  };

  return (
    <section id="experience" className="py-24 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-xs sm:text-sm font-semibold tracking-widest font-mono uppercase mb-2 dark:text-indigo-400 light:text-indigo-600">
            Professional Growth
          </h2>
          <p className="text-3xl sm:text-4xl font-extrabold tracking-tight font-sans dark:text-white light:text-slate-900">
            Experience & Professional Journey
          </p>
          <div className="mt-3 w-12 h-1 bg-indigo-500 rounded-full mx-auto" />
        </div>

        {/* Timeline Container */}
        <div className="max-w-4xl mx-auto relative">
          {/* Vertical central line */}
          <div
            className="absolute left-4 sm:left-1/2 top-4 bottom-4 w-0.5 -translate-x-1/2 dark:bg-white/10 light:bg-slate-200 hidden sm:block"
            aria-hidden="true"
          />

          <motion.div
            initial={{ opacity: 0, y: 25 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="relative"
          >
            {/* Center Timeline Node Marker */}
            <div className="hidden sm:flex absolute left-1/2 -translate-x-1/2 top-8 w-10 h-10 rounded-full border-4 dark:border-dark-bg light:border-light-bg bg-indigo-600 items-center justify-center text-white shadow-md z-10">
              <Plane className="w-4 h-4" />
            </div>

            {/* Experience Card */}
            <div className="sm:w-[calc(100%-40px)] mx-auto p-6 sm:p-8 rounded-2xl border dark:border-white/10 dark:bg-dark-card light:border-slate-200 light:bg-white shadow-lg space-y-6">
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

              {/* Description */}
              <p className="text-sm sm:text-base leading-relaxed dark:text-slate-300 light:text-slate-600">
                {exp.description}
              </p>

              {/* Technical Exposure Grid */}
              <div>
                <h4 className="text-xs font-mono uppercase tracking-wider font-bold mb-4 dark:text-indigo-400 light:text-indigo-600">
                  Areas of Practical Technical Exposure
                </h4>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3.5">
                  {exp.exposures.map((item) => {
                    const Icon = exposureIcons[item.name] || Network;
                    return (
                      <div
                        key={item.name}
                        className="p-3.5 rounded-xl border dark:border-white/5 dark:bg-white/[0.02] light:border-slate-100 light:bg-slate-50/70 space-y-1"
                      >
                        <div className="flex items-center gap-2">
                          <Icon className="w-4 h-4 text-indigo-400 shrink-0" />
                          <span className="text-xs font-bold font-mono dark:text-slate-200 light:text-slate-800">
                            {item.name}
                          </span>
                          <span className="text-[11px] text-slate-400 font-normal truncate">
                            &mdash; {item.fullName}
                          </span>
                        </div>
                        <p className="text-xs leading-relaxed dark:text-slate-400 light:text-slate-600 pl-6">
                          {item.desc}
                        </p>
                      </div>
                    );
                  })}
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
