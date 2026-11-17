import React from 'react';
import { motion } from 'framer-motion';
import { GraduationCap, BookOpen, Calendar, MapPin, CheckCircle2 } from 'lucide-react';
import { personalInfo } from '../data/portfolio';

export default function Education() {
  const edu = personalInfo.education[0];

  return (
    <section id="education" className="py-24 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-xs sm:text-sm font-semibold tracking-widest font-mono uppercase mb-2 dark:text-indigo-400 light:text-indigo-600">
            Academic Background
          </h2>
          <p className="text-3xl sm:text-4xl font-extrabold tracking-tight font-sans dark:text-white light:text-slate-900">
            Education
          </p>
          <div className="mt-3 w-12 h-1 bg-indigo-500 rounded-full mx-auto" />
        </div>

        {/* Education Card */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="max-w-4xl mx-auto p-6 sm:p-10 rounded-2xl border dark:border-white/10 dark:bg-dark-card light:border-slate-200 light:bg-white shadow-lg space-y-8"
        >
          {/* Main Info */}
          <div className="flex flex-col sm:flex-row sm:items-start justify-between gap-4 pb-6 border-b dark:border-white/10 light:border-slate-200">
            <div className="space-y-2">
              <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-mono font-medium dark:bg-indigo-500/10 dark:text-indigo-400 dark:border dark:border-indigo-500/20 light:bg-indigo-50 light:text-indigo-600 light:border light:border-indigo-200">
                <GraduationCap className="w-3.5 h-3.5" />
                {edu.status}
              </span>

              <h3 className="text-2xl sm:text-3xl font-bold font-sans dark:text-white light:text-slate-900">
                {edu.institution}
              </h3>

              <p className="text-base sm:text-lg font-medium text-indigo-500 dark:text-indigo-400">
                {edu.degree} &mdash; {edu.field}
              </p>
            </div>

            <div className="flex flex-col sm:items-end gap-1.5 text-xs font-mono text-slate-400">
              <span className="flex items-center gap-1.5">
                <Calendar className="w-3.5 h-3.5 text-indigo-400" />
                Graduation: {edu.graduationYear} ({edu.duration})
              </span>
              <span className="flex items-center gap-1.5">
                <MapPin className="w-3.5 h-3.5 text-cyan-400" />
                Siliguri, West Bengal
              </span>
            </div>
          </div>

          {/* Relevant Coursework */}
          <div>
            <h4 className="text-xs font-mono uppercase tracking-wider font-bold mb-4 dark:text-indigo-400 light:text-indigo-600 flex items-center gap-2">
              <BookOpen className="w-4 h-4" />
              Relevant Coursework & Core Engineering Subjects
            </h4>
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-3">
              {edu.coursework.map((course) => (
                <div
                  key={course}
                  className="flex items-center gap-2 p-3 rounded-xl border dark:border-white/5 dark:bg-white/[0.02] light:border-slate-100 light:bg-slate-50/70"
                >
                  <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0" />
                  <span className="text-xs sm:text-sm font-medium dark:text-slate-200 light:text-slate-700">
                    {course}
                  </span>
                </div>
              ))}
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
