import React, { useState, useEffect } from 'react';
import { ArrowUp } from 'lucide-react';

export default function BackToTop() {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setVisible(window.scrollY > 400);
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  if (!visible) return null;

  return (
    <button
      onClick={scrollToTop}
      type="button"
      className="fixed bottom-6 right-6 z-40 p-3 rounded-full shadow-lg transition-all duration-300 active:scale-95
        dark:bg-indigo-600 dark:text-white dark:hover:bg-indigo-500
        light:bg-indigo-600 light:text-white light:hover:bg-indigo-700
        focus:outline-none focus:ring-2 focus:ring-indigo-400"
      aria-label="Scroll to top of page"
      title="Back to top"
    >
      <ArrowUp className="w-5 h-5" />
    </button>
  );
}
