import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { ArrowDown, FileDown, Github, Linkedin, Mail, Check, Sparkles } from 'lucide-react';
import { personalInfo } from '../data/portfolio';

export default function Hero() {
  const [copied, setCopied] = useState(false);

  const handleCopyEmail = () => {
    navigator.clipboard.writeText(personalInfo.email);
    setCopied(true);
    setTimeout(() => setCopied(false), 2200);
  };

  return (
    <section
      id="home"
      className="relative min-h-screen pt-28 pb-16 flex items-center justify-center overflow-hidden"
    >
      {/* Subtle Background Glow Elements */}
      <div
        className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[550px] h-[550px] rounded-full pointer-events-none blur-[120px] -z-10 opacity-30 dark:bg-indigo-600/30 light:bg-indigo-300/40"
        aria-hidden="true"
      />
      <div
        className="absolute bottom-10 right-10 w-[350px] h-[350px] rounded-full pointer-events-none blur-[100px] -z-10 opacity-20 dark:bg-cyan-500/20 light:bg-cyan-300/30"
        aria-hidden="true"
      />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
          {/* LEFT SIDE: Introduction & Calls to Action */}
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.65, ease: 'easeOut' }}
            className="lg:col-span-7 flex flex-col items-start"
          >
            {/* Availability Badge */}
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full text-xs font-medium mb-6 dark:bg-slate-800/80 dark:border-white/10 dark:text-emerald-400 light:bg-emerald-50 light:border-emerald-200 light:text-emerald-700 border shadow-sm">
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500"></span>
              </span>
              <span>{personalInfo.hero.status}</span>
            </div>

            {/* Small Greeting */}
            <p className="text-xs sm:text-sm font-semibold tracking-widest font-mono uppercase mb-2 dark:text-indigo-400 light:text-indigo-600 flex items-center gap-2">
              <Sparkles className="w-3.5 h-3.5" />
              {personalInfo.hero.greeting}
            </p>

            {/* Main Heading */}
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight mb-4 font-sans dark:text-white light:text-slate-900 leading-[1.1]">
              {personalInfo.hero.heading}
            </h1>

            {/* Professional Headline */}
            <h2 className="text-xl sm:text-2xl lg:text-3xl font-semibold mb-5 font-sans bg-clip-text text-transparent bg-gradient-to-r dark:from-indigo-300 dark:via-purple-200 dark:to-cyan-300 light:from-indigo-600 light:via-purple-700 light:to-cyan-600">
              {personalInfo.hero.headline}
            </h2>

            {/* Supporting Description */}
            <p className="text-base sm:text-lg mb-8 leading-relaxed max-w-2xl dark:text-slate-300 light:text-slate-600">
              {personalInfo.hero.description}
            </p>

            {/* Action Buttons */}
            <div className="flex flex-wrap items-center gap-4 mb-9 w-full sm:w-auto">
              <a
                href="#projects"
                className="inline-flex items-center justify-center gap-2 px-6 py-3 rounded-xl text-sm font-semibold text-white bg-indigo-600 hover:bg-indigo-500 shadow-md hover:shadow-indigo-500/25 transition-all duration-200 active:scale-[0.98]"
              >
                <span>View My Projects</span>
                <ArrowDown className="w-4 h-4 animate-bounce" />
              </a>

              <a
                href={personalInfo.resumePath}
                download="Miraj_Miah_Resume.pdf"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-2 px-6 py-3 rounded-xl text-sm font-semibold transition-all duration-200 active:scale-[0.98]
                  dark:bg-slate-800/90 dark:text-slate-100 dark:hover:bg-slate-700 dark:border-white/10
                  light:bg-white light:text-slate-800 light:hover:bg-slate-50 light:border-slate-300 border shadow-sm"
              >
                <FileDown className="w-4 h-4 text-indigo-500" />
                <span>Download Resume</span>
              </a>
            </div>

            {/* Social Links & Copy Email */}
            <div className="pt-6 border-t dark:border-white/10 light:border-slate-200 w-full flex flex-wrap items-center gap-4 text-sm">
              <span className="text-xs font-mono uppercase tracking-wider dark:text-slate-400 light:text-slate-500">
                Connect directly:
              </span>

              <a
                href={personalInfo.github}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg text-xs font-medium transition-colors
                  dark:bg-slate-800/70 dark:text-slate-300 dark:hover:text-white dark:hover:bg-slate-700
                  light:bg-slate-100 light:text-slate-700 light:hover:text-slate-900 light:hover:bg-slate-200"
                aria-label="GitHub Profile"
              >
                <Github className="w-3.5 h-3.5" />
                <span>GitHub</span>
              </a>

              <a
                href={personalInfo.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg text-xs font-medium transition-colors
                  dark:bg-slate-800/70 dark:text-slate-300 dark:hover:text-white dark:hover:bg-slate-700
                  light:bg-slate-100 light:text-slate-700 light:hover:text-slate-900 light:hover:bg-slate-200"
                aria-label="LinkedIn Profile"
              >
                <Linkedin className="w-3.5 h-3.5 text-blue-500" />
                <span>LinkedIn</span>
              </a>

              <button
                onClick={handleCopyEmail}
                type="button"
                className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg text-xs font-medium transition-colors
                  dark:bg-slate-800/70 dark:text-slate-300 dark:hover:text-white dark:hover:bg-slate-700
                  light:bg-slate-100 light:text-slate-700 light:hover:text-slate-900 light:hover:bg-slate-200"
                title="Copy Email Address"
              >
                {copied ? (
                  <>
                    <Check className="w-3.5 h-3.5 text-emerald-400" />
                    <span className="text-emerald-400 font-semibold">Email Copied!</span>
                  </>
                ) : (
                  <>
                    <Mail className="w-3.5 h-3.5 text-indigo-400" />
                    <span>Copy Email</span>
                  </>
                )}
              </button>
            </div>
          </motion.div>

          {/* RIGHT SIDE: Real Profile Photograph */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.7, delay: 0.15, ease: 'easeOut' }}
            className="lg:col-span-5 flex justify-center lg:justify-end"
          >
            <div className="relative group w-full max-w-[340px] sm:max-w-[380px]">
              {/* Subtle ambient decorative backdrops */}
              <div
                className="absolute -inset-1.5 rounded-3xl bg-gradient-to-tr from-indigo-500/30 via-purple-500/20 to-cyan-400/30 blur-xl opacity-75 group-hover:opacity-100 transition duration-700 -z-10"
                aria-hidden="true"
              />

              {/* Card Container Frame */}
              <div className="relative overflow-hidden rounded-2xl border dark:border-white/10 dark:bg-slate-900/90 light:border-slate-200 light:bg-white shadow-2xl p-2.5 backdrop-blur-sm">
                {/* Waist-up cropped image keeping face centered */}
                <div className="relative aspect-[4/5] w-full overflow-hidden rounded-xl bg-slate-800">
                  <img
                    src={personalInfo.profileImage}
                    alt="Miraj Miah - Computer Science and Engineering Student & Aspiring Developer"
                    loading="eager"
                    decoding="async"
                    className="w-full h-full object-cover object-[50%_22%] transition-transform duration-500 group-hover:scale-[1.02]"
                  />
                  {/* Subtle bottom gradient overlay for card elegance */}
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-80" />

                  {/* Identification Pill overlay at bottom */}
                  <div className="absolute bottom-3 left-3 right-3 p-2.5 rounded-lg backdrop-blur-md bg-black/50 border border-white/15 text-white">
                    <p className="text-xs font-semibold tracking-wide">Miraj Miah</p>
                    <p className="text-[11px] text-slate-300 font-mono">
                      B.Tech CSE &bull; Class of 2027
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
