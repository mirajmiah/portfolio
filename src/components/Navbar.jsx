import React, { useState, useEffect } from 'react';
import { Menu, X, FileDown, ArrowRight } from 'lucide-react';
import ThemeToggle from './ThemeToggle';
import { personalInfo } from '../data/portfolio';

const navLinks = [
  { name: 'Home', href: '#home' },
  { name: 'About', href: '#about' },
  { name: 'Skills', href: '#skills' },
  { name: 'Projects', href: '#projects' },
  { name: 'Experience', href: '#experience' },
  { name: 'Education', href: '#education' },
  { name: 'Learning', href: '#learning' },
  { name: 'Contact', href: '#contact' },
];

export default function Navbar({ theme, toggleTheme }) {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('home');

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);

      // Section tracking
      const sections = navLinks.map(link => link.href.substring(1));
      const scrollPosition = window.scrollY + 120;

      for (let i = sections.length - 1; i >= 0; i--) {
        const section = document.getElementById(sections[i]);
        if (section && section.offsetTop <= scrollPosition) {
          setActiveSection(sections[i]);
          break;
        }
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleLinkClick = (e, href) => {
    e.preventDefault();
    setMobileMenuOpen(false);
    const targetElement = document.querySelector(href);
    if (targetElement) {
      targetElement.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled
          ? 'py-3.5 backdrop-blur-md dark:bg-dark-bg/85 dark:border-b dark:border-white/10 light:bg-white/85 light:border-b light:border-slate-200/80 shadow-sm'
          : 'py-5 bg-transparent'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between">
          {/* Brand Logo */}
          <a
            href="#home"
            onClick={(e) => handleLinkClick(e, '#home')}
            className="group flex items-center gap-2 focus:outline-none"
            aria-label="Miraj Miah Homepage"
          >
            <span className="font-mono text-xs px-2 py-0.5 rounded-md font-semibold dark:bg-indigo-500/10 dark:text-indigo-400 dark:border dark:border-indigo-500/20 light:bg-indigo-50 light:text-indigo-600 light:border light:border-indigo-200">
              dev
            </span>
            <span className="text-xl font-bold tracking-tight font-sans dark:text-white light:text-slate-900 group-hover:text-indigo-500 transition-colors">
              {personalInfo.logoText}
              <span className="text-indigo-500">.</span>
            </span>
          </a>

          {/* Desktop Navigation Links */}
          <nav className="hidden md:flex items-center space-x-1 lg:space-x-2" aria-label="Desktop navigation">
            {navLinks.map((link) => {
              const isActive = activeSection === link.href.substring(1);
              return (
                <a
                  key={link.name}
                  href={link.href}
                  onClick={(e) => handleLinkClick(e, link.href)}
                  className={`px-3 py-1.5 rounded-full text-xs lg:text-sm font-medium transition-all duration-200 ${
                    isActive
                      ? 'dark:text-white dark:bg-white/10 light:text-indigo-600 light:bg-indigo-50 font-semibold'
                      : 'dark:text-slate-300 dark:hover:text-white dark:hover:bg-white/5 light:text-slate-600 light:hover:text-slate-900 light:hover:bg-slate-100'
                  }`}
                >
                  {link.name}
                </a>
              );
            })}
          </nav>

          {/* Right Action Elements */}
          <div className="hidden sm:flex items-center gap-3">
            <ThemeToggle theme={theme} toggleTheme={toggleTheme} />

            <a
              href={personalInfo.resumePath}
              download="Miraj_Miah_Resume.pdf"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-full text-xs font-semibold transition-all duration-200
                dark:bg-slate-800 dark:text-slate-200 dark:hover:bg-slate-700 dark:border dark:border-white/10
                light:bg-slate-100 light:text-slate-700 light:hover:bg-slate-200 light:border light:border-slate-200 shadow-sm"
            >
              <FileDown className="w-3.5 h-3.5" />
              <span>Resume</span>
            </a>

            <a
              href="#contact"
              onClick={(e) => handleLinkClick(e, '#contact')}
              className="inline-flex items-center gap-1.5 px-4 py-1.5 rounded-full text-xs font-semibold text-white bg-indigo-600 hover:bg-indigo-500 shadow-sm transition-all duration-200 hover:shadow-indigo-500/25"
            >
              <span>Connect</span>
              <ArrowRight className="w-3.5 h-3.5" />
            </a>
          </div>

          {/* Mobile Actions: Theme Toggle & Hamburger */}
          <div className="flex items-center gap-2 md:hidden">
            <ThemeToggle theme={theme} toggleTheme={toggleTheme} />
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              type="button"
              className="p-2 rounded-lg text-slate-400 hover:text-white focus:outline-none dark:hover:bg-slate-800 light:hover:bg-slate-100 light:text-slate-600"
              aria-expanded={mobileMenuOpen}
              aria-label="Toggle Navigation Menu"
            >
              {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Drawer Menu */}
      {mobileMenuOpen && (
        <div className="md:hidden mt-2 border-b dark:bg-dark-surface dark:border-white/10 light:bg-white light:border-slate-200 shadow-xl px-4 pt-3 pb-6 space-y-1">
          {navLinks.map((link) => {
            const isActive = activeSection === link.href.substring(1);
            return (
              <a
                key={link.name}
                href={link.href}
                onClick={(e) => handleLinkClick(e, link.href)}
                className={`block px-3 py-2.5 rounded-lg text-sm font-medium transition-colors ${
                  isActive
                    ? 'dark:bg-indigo-600/20 dark:text-indigo-400 light:bg-indigo-50 light:text-indigo-600 font-semibold'
                    : 'dark:text-slate-300 dark:hover:bg-slate-800 light:text-slate-600 light:hover:bg-slate-50'
                }`}
              >
                {link.name}
              </a>
            );
          })}
          <div className="pt-4 border-t dark:border-white/10 light:border-slate-200 flex flex-col gap-2">
            <a
              href={personalInfo.resumePath}
              download="Miraj_Miah_Resume.pdf"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center justify-center gap-2 w-full py-2.5 rounded-lg text-sm font-medium dark:bg-slate-800 dark:text-slate-200 light:bg-slate-100 light:text-slate-700"
            >
              <FileDown className="w-4 h-4" />
              Download Resume
            </a>
            <a
              href="#contact"
              onClick={(e) => handleLinkClick(e, '#contact')}
              className="flex items-center justify-center gap-2 w-full py-2.5 rounded-lg text-sm font-medium text-white bg-indigo-600 hover:bg-indigo-500"
            >
              Get In Touch
              <ArrowRight className="w-4 h-4" />
            </a>
          </div>
        </div>
      )}
    </header>
  );
}
