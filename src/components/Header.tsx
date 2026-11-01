// src/components/Header.tsx
import React, { useState, useEffect } from 'react';
import { Menu, X, Terminal, Github, Linkedin, FileText, Sun, Moon } from 'lucide-react';
import { useNavigate, useLocation } from 'react-router-dom';
import { RESUME_URLS } from '../data/resume';
import { useTheme } from '../context/ThemeContext';

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const { theme, toggleTheme } = useTheme();
  const navigate = useNavigate();
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const closeMenu = () => setIsMenuOpen(false);

  const goToSection = (id: string) => {
    closeMenu();

    if (location.pathname === '/' || location.pathname === '') {
      const el = document.getElementById(id);
      if (el) {
        el.scrollIntoView({ behavior: 'smooth', block: 'start' });
      }
      return;
    }

    navigate('/', { replace: false });
    setTimeout(() => {
      const el = document.getElementById(id);
      if (el) el.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }, 150);
  };

  const navItems = [
    { label: 'Services', id: 'services' },
    { label: 'Stack', id: 'technologies' },
    { label: 'Experience', id: 'experience' },
    { label: 'Portfolio', id: 'portfolio' },
    { label: 'Principles', id: 'principles' },
  ];

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled
          ? 'bg-white/90 dark:bg-slate-950/90 backdrop-blur-md shadow-xs dark:shadow-slate-950/60 border-b border-slate-200/70 dark:border-slate-800/80 py-2.5'
          : 'bg-white/75 dark:bg-slate-950/75 backdrop-blur-sm border-b border-slate-100/60 dark:border-slate-800/50 py-3.5'
      }`}
    >
      <nav className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between gap-4">
          
          {/* Brand Logo - Streamlined without duplicate subtext */}
          <button
            onClick={() => goToSection('hero')}
            className="flex items-center gap-2.5 group text-left focus:outline-none shrink-0"
          >
            <div className="w-9 h-9 rounded-xl bg-gradient-to-tr from-indigo-600 via-indigo-700 to-violet-600 flex items-center justify-center shadow-sm shadow-indigo-300/40 dark:shadow-indigo-950/60 group-hover:scale-105 transition-transform duration-200">
              <Terminal className="h-4.5 w-4.5 text-white stroke-[2.2]" />
            </div>
            <div className="flex items-center gap-2">
              <span className="text-base sm:text-lg font-bold tracking-tight text-slate-900 dark:text-white group-hover:text-indigo-600 dark:group-hover:text-indigo-400 transition-colors">
                Scriptcrux
              </span>
              <span className="hidden sm:inline-flex items-center px-2 py-0.5 rounded-full text-[10px] font-semibold bg-emerald-50 dark:bg-emerald-950/60 text-emerald-700 dark:text-emerald-400 border border-emerald-200/60 dark:border-emerald-800/60">
                <span className="w-1.5 h-1.5 rounded-full bg-emerald-500 animate-pulse mr-1"></span>
                Lead SDET
              </span>
            </div>
          </button>

          {/* Desktop Navigation - Concise, high-contrast pills */}
          <div className="hidden lg:flex items-center gap-1">
            {navItems.map((item) => (
              <button
                key={item.id}
                onClick={() => goToSection(item.id)}
                className="px-3 py-1.5 text-xs sm:text-sm font-medium text-slate-600 dark:text-slate-300 hover:text-indigo-600 dark:hover:text-indigo-400 hover:bg-slate-100/70 dark:hover:bg-slate-800/60 rounded-lg transition-all duration-150"
              >
                {item.label}
              </button>
            ))}
          </div>

          {/* Right Action Bar - Spaced, clean, categorized with dividers */}
          <div className="hidden md:flex items-center gap-1.5 lg:gap-2 shrink-0">
            {/* Theme Toggle Button */}
            <button
              onClick={toggleTheme}
              aria-label={theme === 'dark' ? 'Switch to Light Mode' : 'Switch to Dark Mode'}
              className="p-2 text-slate-600 dark:text-slate-300 hover:text-amber-500 dark:hover:text-amber-400 hover:bg-slate-100 dark:hover:bg-slate-800 rounded-lg transition-colors border border-transparent hover:border-slate-200 dark:hover:border-slate-700 focus:outline-none"
              title={theme === 'dark' ? 'Switch to Light Mode' : 'Switch to Dark Mode'}
            >
              {theme === 'dark' ? (
                <Sun className="w-4.5 h-4.5 text-amber-400 hover:rotate-45 transition-transform duration-300" />
              ) : (
                <Moon className="w-4.5 h-4.5 text-slate-600 hover:-rotate-12 transition-transform duration-300" />
              )}
            </button>

            <div className="h-4 w-px bg-slate-200 dark:bg-slate-800 mx-0.5" />

            {/* Social Icons */}
            <a
              href="https://github.com/APdrone"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="GitHub Profile"
              className="p-2 text-slate-500 dark:text-slate-400 hover:text-slate-900 dark:hover:text-white hover:bg-slate-100 dark:hover:bg-slate-800 rounded-lg transition-colors"
              title="GitHub Profile"
            >
              <Github className="w-4.5 h-4.5" />
            </a>

            <a
              href="https://www.linkedin.com/in/aman-patwal-376bb173/"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="LinkedIn Profile"
              className="p-2 text-slate-500 dark:text-slate-400 hover:text-blue-600 dark:hover:text-blue-400 hover:bg-blue-50 dark:hover:bg-slate-800 rounded-lg transition-colors"
              title="LinkedIn Profile"
            >
              <Linkedin className="w-4.5 h-4.5" />
            </a>

            <div className="h-4 w-px bg-slate-200 dark:bg-slate-800 mx-0.5" />

            {/* Compact Resume Pill */}
            <a
              href={RESUME_URLS.view}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1.5 px-3 py-1.5 text-xs font-semibold text-slate-700 dark:text-slate-300 bg-slate-100 dark:bg-slate-800/80 hover:bg-slate-200 dark:hover:bg-slate-800 rounded-lg transition-colors border border-slate-200 dark:border-slate-700"
              title="View & Download Latest Resume"
            >
              <FileText className="w-3.5 h-3.5 text-indigo-600 dark:text-indigo-400" />
              <span>Resume</span>
            </a>

            {/* Clean Primary Connect CTA */}
            <button
              onClick={() => goToSection('contact')}
              className="inline-flex items-center justify-center px-4 py-1.5 text-xs sm:text-sm font-semibold text-white bg-indigo-600 hover:bg-indigo-700 rounded-lg shadow-sm hover:shadow-indigo-500/20 transition-all duration-150 active:scale-95 ml-0.5"
            >
              Connect
            </button>
          </div>

          {/* Mobile Actions: Theme Toggle + Menu Button */}
          <div className="flex md:hidden items-center gap-2">
            <button
              onClick={toggleTheme}
              aria-label="Toggle dark mode"
              className="p-2 rounded-xl text-slate-700 dark:text-slate-300 hover:bg-slate-100 dark:hover:bg-slate-800 border border-slate-200 dark:border-slate-800 transition-colors"
            >
              {theme === 'dark' ? (
                <Sun className="w-4.5 h-4.5 text-amber-400" />
              ) : (
                <Moon className="w-4.5 h-4.5 text-slate-600" />
              )}
            </button>

            <button
              aria-label="Toggle navigation menu"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="p-2 rounded-xl text-slate-700 dark:text-slate-300 hover:bg-slate-100 dark:hover:bg-slate-800 focus:outline-none transition-colors border border-slate-200 dark:border-slate-800"
            >
              {isMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
            </button>
          </div>
        </div>

        {/* Mobile Navigation Dropdown */}
        {isMenuOpen && (
          <div className="lg:hidden mt-3 pt-3 pb-4 border-t border-slate-100 dark:border-slate-800 animate-in fade-in duration-200">
            <div className="flex flex-col space-y-1">
              {navItems.map((item) => (
                <button
                  key={item.id}
                  onClick={() => goToSection(item.id)}
                  className="px-3 py-2 text-sm font-medium text-slate-700 dark:text-slate-200 hover:text-indigo-600 dark:hover:text-indigo-400 hover:bg-indigo-50/60 dark:hover:bg-slate-800/60 rounded-lg text-left transition-colors"
                >
                  {item.label}
                </button>
              ))}

              <div className="pt-3 border-t border-slate-100 dark:border-slate-800 flex flex-wrap items-center gap-2">
                <a
                  href="https://github.com/APdrone"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-1.5 text-xs text-slate-700 dark:text-slate-300 px-3 py-2 rounded-lg hover:bg-slate-100 dark:hover:bg-slate-800 border border-slate-200 dark:border-slate-700"
                >
                  <Github className="w-4 h-4" />
                  <span>GitHub</span>
                </a>

                <a
                  href="https://www.linkedin.com/in/aman-patwal-376bb173/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-1.5 text-xs text-blue-700 dark:text-blue-400 bg-blue-50 dark:bg-blue-950/50 px-3 py-2 rounded-lg hover:bg-blue-100 dark:hover:bg-blue-900/50 border border-blue-200 dark:border-blue-800"
                >
                  <Linkedin className="w-4 h-4" />
                  <span>LinkedIn</span>
                </a>

                <a
                  href={RESUME_URLS.view}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-1.5 text-xs text-indigo-700 dark:text-indigo-300 bg-indigo-50 dark:bg-indigo-950/50 px-3 py-2 rounded-lg hover:bg-indigo-100 dark:hover:bg-indigo-900/50 border border-indigo-200 dark:border-indigo-800"
                >
                  <FileText className="w-4 h-4" />
                  <span>Resume</span>
                </a>

                <button
                  onClick={() => goToSection('contact')}
                  className="flex-1 bg-indigo-600 text-white text-xs font-semibold py-2 px-3 rounded-lg text-center hover:bg-indigo-700 transition-colors shadow-sm"
                >
                  Connect
                </button>
              </div>
            </div>
          </div>
        )}
      </nav>
    </header>
  );
}
