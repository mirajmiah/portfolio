import React from 'react';
import { useTheme } from './hooks/useTheme';
import ScrollProgress from './components/ScrollProgress';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import Skills from './components/Skills';
import Projects from './components/Projects';
import Experience from './components/Experience';
import Education from './components/Education';
import Learning from './components/Learning';
import SocialProfiles from './components/SocialProfiles';
import Contact from './components/Contact';
import Footer from './components/Footer';
import BackToTop from './components/BackToTop';

export default function App() {
  const { theme, toggleTheme } = useTheme();

  return (
    <div className="min-h-screen relative font-sans selection:bg-indigo-500 selection:text-white">
      {/* Top Reading Progress Bar */}
      <ScrollProgress />

      {/* Modern Sticky Navigation */}
      <Navbar theme={theme} toggleTheme={toggleTheme} />

      {/* Main Content Sections */}
      <main id="main-content" className="relative z-10">
        <Hero />
        <About />
        <Skills />
        <Projects />
        <Experience />
        <Education />
        <Learning />
        <SocialProfiles />
        <Contact />
      </main>

      {/* Footer */}
      <Footer />

      {/* Floating Back-to-Top Action Button */}
      <BackToTop />
    </div>
  );
}
