import React from 'react';
import { Github, Linkedin, Mail, ArrowUp } from 'lucide-react';
import { personalInfo } from '../data/portfolio';

const navItems = [
  { name: 'Home', href: '#home' },
  { name: 'About', href: '#about' },
  { name: 'Skills', href: '#skills' },
  { name: 'Projects', href: '#projects' },
  { name: 'Experience', href: '#experience' },
  { name: 'Education', href: '#education' },
  { name: 'Learning', href: '#learning' },
  { name: 'Contact', href: '#contact' },
];

export default function Footer() {
  const currentYear = new Date().getFullYear();

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="border-t dark:border-white/10 dark:bg-dark-surface/50 light:border-slate-200 light:bg-slate-50 py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row items-center justify-between gap-6 pb-8 border-b dark:border-white/10 light:border-slate-200">
          <div>
            <h3 className="text-xl font-bold font-sans tracking-tight dark:text-white light:text-slate-900">
              MIRAJ MIAH
            </h3>
            <p className="text-xs text-slate-400 font-mono mt-1">
              Aspiring Software Developer &bull; CSE Student
            </p>
          </div>

          {/* Quick navigation */}
          <nav className="flex flex-wrap justify-center gap-4 text-xs font-medium dark:text-slate-300 light:text-slate-600">
            {navItems.map((item) => (
              <a
                key={item.name}
                href={item.href}
                className="hover:text-indigo-400 transition-colors"
              >
                {item.name}
              </a>
            ))}
          </nav>

          {/* Social Icons & Back to Top */}
          <div className="flex items-center gap-3">
            <a
              href={personalInfo.github}
              target="_blank"
              rel="noopener noreferrer"
              className="p-2 rounded-lg dark:bg-white/5 dark:hover:bg-white/10 dark:text-slate-300 light:bg-white light:hover:bg-slate-100 light:text-slate-600 border dark:border-transparent light:border-slate-200 transition-colors"
              aria-label="GitHub"
            >
              <Github className="w-4 h-4" />
            </a>
            <a
              href={personalInfo.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              className="p-2 rounded-lg dark:bg-white/5 dark:hover:bg-white/10 dark:text-slate-300 light:bg-white light:hover:bg-slate-100 light:text-slate-600 border dark:border-transparent light:border-slate-200 transition-colors"
              aria-label="LinkedIn"
            >
              <Linkedin className="w-4 h-4 text-blue-500" />
            </a>
            <a
              href={`mailto:${personalInfo.email}`}
              className="p-2 rounded-lg dark:bg-white/5 dark:hover:bg-white/10 dark:text-slate-300 light:bg-white light:hover:bg-slate-100 light:text-slate-600 border dark:border-transparent light:border-slate-200 transition-colors"
              aria-label="Email"
            >
              <Mail className="w-4 h-4 text-indigo-400" />
            </a>

            <button
              onClick={scrollToTop}
              className="p-2 rounded-lg dark:bg-indigo-600/20 dark:text-indigo-400 dark:hover:bg-indigo-600/30 light:bg-indigo-50 light:text-indigo-600 light:hover:bg-indigo-100 transition-colors"
              title="Back to top"
              aria-label="Back to top"
            >
              <ArrowUp className="w-4 h-4" />
            </button>
          </div>
        </div>

        <div className="pt-6 flex flex-col sm:flex-row items-center justify-between text-xs text-slate-400 gap-2 text-center">
          <p>
            Designed and built with passion by Miraj Miah.
          </p>
          <p className="font-mono">
            &copy; {currentYear} Miraj Miah. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}
