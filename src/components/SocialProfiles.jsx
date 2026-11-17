import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Github, Linkedin, Mail, ArrowUpRight, Copy, Check } from 'lucide-react';
import { personalInfo } from '../data/portfolio';

export default function SocialProfiles() {
  const [copied, setCopied] = useState(false);

  const handleCopyEmail = (e) => {
    e.preventDefault();
    navigator.clipboard.writeText(personalInfo.email);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  const socials = [
    {
      name: 'GitHub',
      handle: '@mirajmiah',
      url: personalInfo.github,
      desc: 'Explore open source code, repositories, and development activity.',
      icon: Github,
      accent: 'hover:border-slate-400 dark:hover:border-slate-500',
      actionText: 'View Repositories',
    },
    {
      name: 'LinkedIn',
      handle: 'Miraj Miah',
      url: personalInfo.linkedin,
      desc: 'Professional network, academic journey, and career updates.',
      icon: Linkedin,
      accent: 'hover:border-blue-500/50',
      actionText: 'Connect on LinkedIn',
    },
    {
      name: 'Direct Email',
      handle: personalInfo.email,
      url: `mailto:${personalInfo.email}`,
      desc: 'Get in touch for internships, opportunities, or engineering discussions.',
      icon: Mail,
      accent: 'hover:border-indigo-500/50',
      actionText: 'Send Email',
      isEmail: true,
    },
  ];

  return (
    <section className="py-16 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-2xl mx-auto mb-12">
          <h2 className="text-xs sm:text-sm font-semibold tracking-widest font-mono uppercase mb-2 dark:text-indigo-400 light:text-indigo-600">
            Professional Profiles
          </h2>
          <p className="text-2xl sm:text-3xl font-extrabold tracking-tight font-sans dark:text-white light:text-slate-900">
            Find Me Online
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-5xl mx-auto">
          {socials.map((item, idx) => {
            const Icon = item.icon;
            return (
              <motion.div
                key={item.name}
                initial={{ opacity: 0, y: 15 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: idx * 0.1 }}
                className={`group p-6 rounded-2xl border dark:border-white/10 dark:bg-dark-card light:border-slate-200 light:bg-white shadow-sm transition-all duration-300 ${item.accent} flex flex-col justify-between`}
              >
                <div>
                  <div className="flex items-center justify-between mb-4">
                    <div className="p-3 rounded-xl dark:bg-white/5 light:bg-slate-100 group-hover:scale-110 transition-transform">
                      <Icon className="w-6 h-6 text-indigo-500" />
                    </div>
                    {item.isEmail ? (
                      <button
                        onClick={handleCopyEmail}
                        type="button"
                        className="p-1.5 rounded-lg text-xs font-mono flex items-center gap-1 dark:bg-white/5 dark:hover:bg-white/10 dark:text-slate-300 light:bg-slate-100 light:hover:bg-slate-200 light:text-slate-600 transition-colors"
                        title="Copy email to clipboard"
                      >
                        {copied ? (
                          <>
                            <Check className="w-3.5 h-3.5 text-emerald-400" />
                            <span className="text-[11px] text-emerald-400">Copied</span>
                          </>
                        ) : (
                          <>
                            <Copy className="w-3.5 h-3.5" />
                            <span className="text-[11px]">Copy</span>
                          </>
                        )}
                      </button>
                    ) : (
                      <ArrowUpRight className="w-4 h-4 text-slate-400 group-hover:text-indigo-400 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
                    )}
                  </div>

                  <h3 className="text-lg font-bold font-sans dark:text-white light:text-slate-900">
                    {item.name}
                  </h3>
                  <p className="text-xs font-mono text-indigo-400 mb-2 truncate">
                    {item.handle}
                  </p>
                  <p className="text-xs sm:text-sm dark:text-slate-300 light:text-slate-600 leading-relaxed mb-6">
                    {item.desc}
                  </p>
                </div>

                <a
                  href={item.url}
                  target={item.isEmail ? '_self' : '_blank'}
                  rel="noopener noreferrer"
                  className="w-full py-2.5 px-4 rounded-xl text-xs font-semibold text-center dark:bg-white/5 dark:hover:bg-white/10 dark:text-slate-200 light:bg-slate-100 light:hover:bg-slate-200 light:text-slate-700 transition-colors flex items-center justify-center gap-2"
                >
                  <span>{item.actionText}</span>
                  <ArrowUpRight className="w-3.5 h-3.5" />
                </a>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
