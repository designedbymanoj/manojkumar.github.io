import { useState, useEffect } from 'react';
import { motion } from 'motion/react';
import { Menu, X, Moon, Sun, ArrowUpRight } from 'lucide-react';
import { cn } from '../lib/utils';

export function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isDark, setIsDark] = useState(true);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    if (isDark) {
      document.documentElement.classList.add('dark');
    } else {
      document.documentElement.classList.remove('dark');
    }
  }, [isDark]);

  const toggleTheme = () => setIsDark(!isDark);

  const navLinks = [
    { name: 'Home', href: '#' },
    { name: 'Services', href: '#services' },
    { name: 'Work', href: '#portfolio' },
  ];

  return (
    <>
      <div className="fixed top-6 left-0 right-0 z-50 flex justify-center px-4 pointer-events-none">
        <nav className="pointer-events-auto bg-[#1C1C1C] dark:bg-[#1A1A1A] border border-white/10 text-white rounded-full p-2 flex items-center gap-2 md:gap-6 shadow-2xl backdrop-blur-md">
          <a href="#" className="flex items-center gap-2 pl-4 pr-2">
            <svg viewBox="0 0 100 100" className="w-8 h-8 text-aura-green fill-current">
              <path d="M 25 10 Q 50 35 75 10 L 65 25 Q 50 40 35 25 Z" />
              <path d="M 90 25 Q 65 50 90 75 L 75 65 Q 60 50 75 35 Z" />
              <path d="M 75 90 Q 50 65 25 90 L 35 75 Q 50 60 65 75 Z" />
              <path d="M 10 75 Q 35 50 10 25 L 25 35 Q 40 50 25 65 Z" />
            </svg>
            <span className="font-sans font-bold text-xl tracking-tight text-white">Aarasoft</span>
          </a>
          
          <div className="hidden md:flex items-center gap-6 text-sm font-medium text-gray-300">
            {navLinks.map((link) => (
              <a key={link.name} href={link.href} className="hover:text-white transition-colors">
                {link.name}
              </a>
            ))}
          </div>

          <div className="flex items-center gap-2 pl-2">
            <button
              onClick={toggleTheme}
              className="p-2 rounded-full hover:bg-white/10 transition-colors text-gray-300 hidden sm:block"
              aria-label="Toggle theme"
            >
              {isDark ? <Sun className="w-4 h-4" /> : <Moon className="w-4 h-4" />}
            </button>
            <a
              href="#contact"
              className="flex items-center gap-2 px-5 py-2.5 rounded-full bg-white/10 hover:bg-white/20 transition-colors text-sm font-medium border border-white/5"
            >
              <ArrowUpRight className="w-4 h-4" />
              Get in touch
            </a>
            <button
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="p-2 rounded-full hover:bg-white/10 transition-colors text-gray-300 md:hidden"
            >
              {isMobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
            </button>
          </div>
        </nav>
      </div>

      {/* Mobile Menu */}
      {isMobileMenuOpen && (
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -20 }}
          className="md:hidden fixed top-24 left-4 right-4 z-40 bg-[#1C1C1C] dark:bg-[#1A1A1A] border border-white/10 rounded-2xl shadow-2xl overflow-hidden"
        >
          <div className="px-4 py-4 space-y-2">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                onClick={() => setIsMobileMenuOpen(false)}
                className="block px-4 py-3 text-base font-medium text-gray-300 hover:text-white hover:bg-white/5 rounded-xl transition-colors"
              >
                {link.name}
              </a>
            ))}
            <div className="pt-4 mt-2 border-t border-white/10 flex justify-between items-center px-4">
              <span className="text-sm text-gray-400">Theme</span>
              <button
                onClick={toggleTheme}
                className="p-2 rounded-full bg-white/5 hover:bg-white/10 transition-colors text-gray-300"
              >
                {isDark ? <Sun className="w-5 h-5" /> : <Moon className="w-5 h-5" />}
              </button>
            </div>
          </div>
        </motion.div>
      )}
    </>
  );
}
