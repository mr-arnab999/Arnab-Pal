import { motion, AnimatePresence } from 'motion/react';
import { Menu, X, Github } from 'lucide-react';
import { LinkedinColorful, TwitterColorful } from './SocialIcons';
import { useState, useEffect } from 'react';
import { PERSONAL_INFO } from '../data';
import ThemeToggle from './ThemeToggle';

const NAV_LINKS = [
  { name: 'About', href: '#about' },
  { name: 'Skills', href: '#skills' },
  { name: 'Experience', href: '#experience' },
  { name: 'Projects', href: '#projects' },
  { name: 'Services', href: '#services' },
  { name: 'Contact', href: '#contact' },
];

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    let ticking = false;
    const handleScroll = () => {
      if (!ticking) {
        window.requestAnimationFrame(() => {
          setIsScrolled(window.scrollY > 50);
          ticking = false;
        });
        ticking = true;
      }
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    if (isMobileMenuOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }
    return () => {
      document.body.style.overflow = '';
    };
  }, [isMobileMenuOpen]);

  return (
    <>
      <motion.nav
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
          isScrolled ? 'glass py-4' : 'bg-transparent py-6'
        }`}
      >
        <div className="max-w-7xl mx-auto px-6 lg:px-12 flex items-center justify-between">
          <a href="#" className="font-display font-bold text-2xl tracking-tighter text-text-main">
            My Portfolio<span className="text-accent">.</span>
          </a>

          {/* Desktop Nav */}
          <div className="hidden md:flex items-center gap-8">
            <div className="flex items-center gap-6">
              {NAV_LINKS.map((link) => (
                <a
                  key={link.name}
                  href={link.href}
                  className="text-sm font-medium text-text-muted hover:text-text-main transition-colors"
                >
                  {link.name}
                </a>
              ))}
            </div>
            
            <div className="h-4 w-[1px] bg-white/20"></div>

            <div className="flex items-center gap-4">
              <a href={PERSONAL_INFO.github} target="_blank" rel="noopener noreferrer" className="hover:scale-110 transition-transform text-text-muted hover:text-text-main"><Github className="w-5 h-5" /></a>
              <a href={PERSONAL_INFO.linkedin} target="_blank" rel="noopener noreferrer" className="hover:scale-110 transition-transform"><LinkedinColorful className="w-5 h-5" /></a>
              <div className="h-4 w-[1px] bg-border-subtle mx-2"></div>
              <ThemeToggle />
            </div>
          </div>

          {/* Mobile Toggle & Theme */}
          <div className="flex md:hidden items-center gap-4">
            <ThemeToggle />
            <button 
              className="text-text-muted hover:text-text-main"
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            >
              {isMobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>
      </motion.nav>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            className="fixed inset-0 z-40 glass-card pt-24 px-6 md:hidden flex flex-col"
          >
            <div className="flex flex-col gap-6 text-center">
              {NAV_LINKS.map((link) => (
                <a
                  key={link.name}
                  href={link.href}
                  onClick={() => setIsMobileMenuOpen(false)}
                  className="text-lg font-medium text-text-main hover:text-text-main"
                >
                  {link.name}
                </a>
              ))}
              <div className="flex justify-center gap-6 mt-8">
                <a href={PERSONAL_INFO.github} target="_blank" rel="noopener noreferrer" className="hover:scale-110 transition-transform text-text-muted hover:text-text-main"><Github className="w-6 h-6" /></a>
                <a href={PERSONAL_INFO.linkedin} target="_blank" rel="noopener noreferrer" className="hover:scale-110 transition-transform"><LinkedinColorful className="w-6 h-6" /></a>
                <a href={PERSONAL_INFO.twitter} target="_blank" rel="noopener noreferrer" className="hover:scale-110 transition-transform"><TwitterColorful className="w-6 h-6" /></a>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
