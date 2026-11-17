import React from 'react';
import { motion } from 'framer-motion';
import { GraduationCap, MapPin, Calendar, HeartHandshake, CheckCircle2, Terminal } from 'lucide-react';
import { personalInfo } from '../data/portfolio';

export default function About() {
  return (
    <section id="about" className="py-24 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-xs sm:text-sm font-semibold tracking-widest font-mono uppercase mb-2 dark:text-indigo-400 light:text-indigo-600">
            {personalInfo.about.subtitle}
          </h2>
          <p className="text-3xl sm:text-4xl font-extrabold tracking-tight font-sans dark:text-white light:text-slate-900">
            {personalInfo.about.title}
          </p>
          <div className="mt-3 w-12 h-1 bg-indigo-500 rounded-full mx-auto" />
        </div>

        {/* Two-Column Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
          {/* Left Column: Photo Card & Fast Facts */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="lg:col-span-5 space-y-6"
          >
            <div className="relative rounded-2xl overflow-hidden border dark:border-white/10 dark:bg-dark-card light:border-slate-200 light:bg-white p-3 shadow-lg">
              <div className="relative aspect-[4/3] rounded-xl overflow-hidden bg-slate-800">
                <img
                  src={personalInfo.profileImage}
                  alt="Miraj Miah at Bagdogra Airport"
                  loading="lazy"
                  className="w-full h-full object-cover object-[50%_20%]"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent" />
                <div className="absolute bottom-3 left-3 text-white">
                  <p className="font-bold text-sm">Miraj Miah</p>
                  <p className="text-xs text-slate-300">Bagdogra Airport, CNS Training Exposure</p>
                </div>
              </div>

              {/* Fast Facts Grid */}
              <div className="grid grid-cols-2 gap-3 mt-4 pt-3 border-t dark:border-white/10 light:border-slate-200">
                <div className="flex items-start gap-2.5 p-2 rounded-lg dark:bg-white/5 light:bg-slate-50">
                  <GraduationCap className="w-4 h-4 text-indigo-500 mt-0.5 shrink-0" />
                  <div>
                    <span className="block text-[11px] font-mono uppercase text-slate-400">Class</span>
                    <span className="text-xs font-semibold dark:text-slate-200 light:text-slate-800">2023 - 2027</span>
                  </div>
                </div>

                <div className="flex items-start gap-2.5 p-2 rounded-lg dark:bg-white/5 light:bg-slate-50">
                  <MapPin className="w-4 h-4 text-cyan-500 mt-0.5 shrink-0" />
                  <div>
                    <span className="block text-[11px] font-mono uppercase text-slate-400">Location</span>
                    <span className="text-xs font-semibold dark:text-slate-200 light:text-slate-800">Siliguri, India</span>
                  </div>
                </div>
              </div>
            </div>

            {/* Quick Highlights Card */}
            <div className="p-6 rounded-2xl border dark:border-white/10 dark:bg-dark-card light:border-slate-200 light:bg-white shadow-sm space-y-3">
              <h3 className="text-sm font-bold uppercase tracking-wider font-mono dark:text-indigo-400 light:text-indigo-600 flex items-center gap-2">
                <Terminal className="w-4 h-4" />
                Key Highlights
              </h3>
              <ul className="space-y-2.5 text-xs sm:text-sm">
                {personalInfo.about.highlights.map((h, i) => (
                  <li key={i} className="flex justify-between items-center py-1 border-b dark:border-white/5 light:border-slate-100 last:border-0">
                    <span className="text-slate-400 font-medium">{h.label}:</span>
                    <span className="font-semibold text-right dark:text-slate-200 light:text-slate-800">{h.value}</span>
                  </li>
                ))}
              </ul>
            </div>
          </motion.div>

          {/* Right Column: Biography & Personality Highlights */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="lg:col-span-7 space-y-6"
          >
            {/* Biography Content */}
            <div className="p-6 sm:p-8 rounded-2xl border dark:border-white/10 dark:bg-dark-card light:border-slate-200 light:bg-white shadow-sm space-y-4">
              <div className="space-y-4 text-sm sm:text-base leading-relaxed dark:text-slate-300 light:text-slate-600">
                {personalInfo.about.paragraphs.map((p, idx) => (
                  <p key={idx}>{p}</p>
                ))}
              </div>
            </div>

            {/* Personality Traits & Values */}
            <div className="p-6 sm:p-8 rounded-2xl border dark:border-white/10 dark:bg-dark-card light:border-slate-200 light:bg-white shadow-sm">
              <h3 className="text-sm font-bold uppercase tracking-wider font-mono mb-4 dark:text-indigo-400 light:text-indigo-600 flex items-center gap-2">
                <HeartHandshake className="w-4 h-4" />
                Mindset & Work Ethic
              </h3>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                {personalInfo.about.personalityTraits.map((trait, idx) => (
                  <div
                    key={idx}
                    className="flex items-center gap-2.5 p-3 rounded-xl dark:bg-slate-800/40 dark:border-white/5 light:bg-slate-50 light:border-slate-200 border"
                  >
                    <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0" />
                    <span className="text-xs sm:text-sm font-medium dark:text-slate-200 light:text-slate-800">
                      {trait}
                    </span>
                  </div>
                ))}
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
