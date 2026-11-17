import React from 'react';
import { Sun, Moon } from 'lucide-react';

export default function ThemeToggle({ theme, toggleTheme }) {
  const isDark = theme === 'dark';

  return (
    <button
      onClick={toggleTheme}
      type="button"
      className="relative p-2 rounded-full transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-indigo-500/50
        dark:bg-slate-800/80 dark:text-amber-400 dark:hover:bg-slate-700/80 dark:border-white/10
        light:bg-slate-100 light:text-slate-700 light:hover:bg-slate-200 light:border-slate-200 border"
      title={`Switch to ${isDark ? 'light' : 'dark'} mode`}
      aria-label={`Switch to ${isDark ? 'light' : 'dark'} mode`}
    >
      <div className="relative w-5 h-5 flex items-center justify-center">
        {isDark ? (
          <Sun className="w-4 h-4 transition-transform duration-300 hover:rotate-45" />
        ) : (
          <Moon className="w-4 h-4 transition-transform duration-300 hover:-rotate-12" />
        )}
      </div>
    </button>
  );
}
