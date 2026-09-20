import React, { useState, useEffect } from 'react';
import { useTheme } from '../../context/ThemeContext';
import { Sun, Moon, Menu, X, ArrowUpRight } from 'lucide-react';
import { MagneticButton } from '../ui/MagneticButton';

const navLinks = [
  { name: 'About', href: '#about' },
  { name: 'Skills', href: '#skills' },
  { name: 'Services', href: '#services' },
  { name: 'Projects', href: '#projects' },
  { name: 'Process', href: '#process' },
  { name: 'Experience', href: '#experience' },
  { name: 'Certification', href: '#certifications' },
  { name: 'Reviews', href: '#testimonials' },
  { name: 'Contact', href: '#contact' },
];

export const Navbar = () => {
  const { theme, toggleTheme } = useTheme();
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('hero');

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 30);

      const sectionIds = ['hero', 'about', 'skills', 'services', 'projects', 'process', 'experience', 'certifications', 'testimonials', 'contact'];
      for (const id of sectionIds.reverse()) {
        const el = document.getElementById(id);
        if (el) {
          const rect = el.getBoundingClientRect();
          if (rect.top <= 220) {
            setActiveSection(id);
            break;
          }
        }
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollTo = (href) => {
    setMobileMenuOpen(false);
    const target = document.querySelector(href);
    if (target) {
      target.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-40 transition-all duration-300 ${isScrolled
        ? 'py-3 bg-slate-950/80 dark:bg-slate-950/85 light:bg-white/85 backdrop-blur-xl border-b border-white/10 shadow-xl'
        : 'py-6 bg-transparent'
        }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between">
        {/* Brand Monogram */}
        <a
          href="#hero"
          onClick={(e) => {
            e.preventDefault();
            scrollTo('#hero');
          }}
          className="flex items-center gap-3 group focus:outline-none cursor-pointer"
        >
          <div className="w-10 h-10 rounded-xl bg-gradient-to-tr from-cyan-500 to-indigo-600 p-[1.5px] shadow-lg shadow-cyan-500/20 group-hover:scale-105 transition-transform">
            <div className="w-full h-full bg-slate-950 rounded-[10px] flex items-center justify-center font-mono font-black text-cyan-400 text-sm">
              OK
            </div>
          </div>
          <div className="flex flex-col text-left">
            <span className="font-heading font-extrabold text-base tracking-tight text-white dark:text-white light:text-slate-900 group-hover:text-cyan-400 transition-colors">
              Oyes Kuruni
            </span>
            <span className="text-[10px] font-mono text-cyan-400 uppercase -mt-0.5 tracking-wider">
              Web Dev • Analytics • Ads
            </span>
          </div>
        </a>

        {/* Desktop Navigation Links */}
        <nav className="hidden lg:flex items-center gap-1 px-3 py-1.5 rounded-full bg-slate-900/70 dark:bg-slate-900/70 light:bg-slate-100/80 backdrop-blur-md border border-white/10 dark:border-white/10 light:border-slate-300 shadow-inner">
          {navLinks.map((item) => {
            const isActive = activeSection === item.href.substring(1);
            return (
              <a
                key={item.name}
                href={item.href}
                onClick={(e) => {
                  e.preventDefault();
                  scrollTo(item.href);
                }}
                className={`px-3 py-1.5 rounded-full text-xs font-medium transition-all duration-200 cursor-pointer ${isActive
                  ? 'bg-cyan-500/20 text-cyan-400 font-semibold shadow-sm shadow-cyan-500/20'
                  : 'text-slate-400 dark:text-slate-300 light:text-slate-600 hover:text-white hover:bg-white/5'
                  }`}
              >
                {item.name}
              </a>
            );
          })}
        </nav>

        {/* Controls: Theme Toggle + Contact CTA */}
        <div className="hidden sm:flex items-center gap-3">
          {/* <button
            onClick={toggleTheme}
            aria-label="Toggle dark/light theme"
            className="p-2.5 rounded-xl border border-white/10 dark:border-white/10 light:border-slate-300 bg-slate-900/60 dark:bg-slate-900/60 light:bg-slate-100 text-slate-300 hover:text-cyan-400 hover:border-cyan-500/40 transition-all cursor-pointer"
          >
            {theme === 'dark' ? (
              <Sun className="w-4 h-4 text-amber-400" />
            ) : (
              <Moon className="w-4 h-4 text-indigo-500" />
            )}
          </button> */}

          <MagneticButton
            onClick={() => scrollTo('#contact')}
            className="px-4 py-2 rounded-xl bg-gradient-to-r from-cyan-500 to-indigo-600 hover:from-cyan-400 hover:to-indigo-500 text-slate-950 font-bold text-xs shadow-md shadow-cyan-500/20 gap-1.5 transition-all cursor-pointer"
          >
            <span>Let's Talk</span>
            <ArrowUpRight className="w-3.5 h-3.5" />
          </MagneticButton>
        </div>

        {/* Mobile menu triggers */}
        <div className="flex lg:hidden items-center gap-2">
          {/* <button
            onClick={toggleTheme}
            aria-label="Toggle theme"
            className="p-2 rounded-lg bg-slate-900 border border-white/10 text-slate-300 cursor-pointer"
          >
            {theme === 'dark' ? <Sun className="w-4 h-4 text-amber-400" /> : <Moon className="w-4 h-4 text-indigo-400" />}
          </button> */}

          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            aria-label="Open navigation menu"
            className="p-2 rounded-lg bg-slate-900 border border-white/10 text-slate-200 cursor-pointer"
          >
            {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
          </button>
        </div>
      </div>

      {/* Mobile Drawer Menu */}
      {mobileMenuOpen && (
        <div className="lg:hidden px-4 pt-4 pb-6 bg-slate-950/95 backdrop-blur-2xl border-b border-white/10 animate-in slide-in-from-top-4">
          <div className="flex flex-col gap-1.5">
            {navLinks.map((item) => (
              <a
                key={item.name}
                href={item.href}
                onClick={(e) => {
                  e.preventDefault();
                  scrollTo(item.href);
                }}
                className="px-4 py-2.5 rounded-lg text-sm font-medium text-slate-300 hover:text-cyan-400 hover:bg-slate-900/80 transition-colors cursor-pointer"
              >
                {item.name}
              </a>
            ))}
            <button
              onClick={() => scrollTo('#contact')}
              className="mt-3 flex items-center justify-center gap-2 py-3 rounded-xl bg-gradient-to-r from-cyan-500 to-indigo-600 text-slate-950 font-bold text-sm shadow-md cursor-pointer"
            >
              <span>Get In Touch</span>
              <ArrowUpRight className="w-4 h-4" />
            </button>
          </div>
        </div>
      )}
    </header>
  );
};
