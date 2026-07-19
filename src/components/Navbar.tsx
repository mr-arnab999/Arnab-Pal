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

    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') {
        setIsMobileMenuOpen(false);
      }
    };

    if (isMobileMenuOpen) {
      window.addEventListener('keydown', handleKeyDown);
    }

    return () => {
      document.body.style.overflow = '';
      window.removeEventListener('keydown', handleKeyDown);
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
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
            className="fixed inset-0 z-[60] md:hidden flex items-center justify-center p-4"
            style={{ backgroundColor: 'rgba(5, 10, 25, 0.75)', backdropFilter: 'blur(20px)', WebkitBackdropFilter: 'blur(20px)' }}
            onClick={() => setIsMobileMenuOpen(false)}
          >
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.95 }}
              transition={{ duration: 0.35, ease: [0.16, 1, 0.3, 1] }}
              className="flex flex-col items-center py-8 px-6 w-[85vw] max-w-[340px] rounded-[28px] relative"
              style={{
                backgroundColor: 'rgba(15, 23, 42, 0.55)',
                backdropFilter: 'blur(24px)',
                WebkitBackdropFilter: 'blur(24px)',
                border: '1px solid rgba(255, 255, 255, 0.1)',
                boxShadow: '0 8px 32px rgba(34, 211, 238, 0.15)'
              }}
              onClick={(e) => e.stopPropagation()}
            >
              <button
                className="absolute top-4 right-4 z-[70] cursor-pointer flex items-center justify-center w-12 h-12 rounded-full transition-all duration-300 hover:rotate-90 hover:bg-white/10 border border-white/10 text-white/70 hover:text-white"
                style={{ backgroundColor: 'rgba(255, 255, 255, 0.05)', backdropFilter: 'blur(10px)' }}
                onClick={(e) => {
                  e.stopPropagation();
                  setIsMobileMenuOpen(false);
                }}
                aria-label="Close menu"
              >
                <X className="w-6 h-6 pointer-events-none" />
              </button>

              <div className="flex flex-col gap-[18px] text-center w-full mt-4">
                {NAV_LINKS.map((link) => (
                  <a
                    key={link.name}
                    href={link.href}
                    onClick={() => setIsMobileMenuOpen(false)}
                    className="text-[24px] font-semibold text-white/90 hover:text-cyan-400 hover:drop-shadow-[0_0_8px_rgba(34,211,238,0.5)] transition-all duration-300 py-1"
                  >
                    {link.name}
                  </a>
                ))}
                
                <div className="h-[1px] w-full bg-white/10 my-2"></div>

                <div className="flex justify-center gap-6">
                  <a href={PERSONAL_INFO.github} target="_blank" rel="noopener noreferrer" className="hover:scale-110 hover:drop-shadow-[0_0_8px_rgba(255,255,255,0.5)] transition-all text-white/80 hover:text-white"><Github className="w-6 h-6" /></a>
                  <a href={PERSONAL_INFO.linkedin} target="_blank" rel="noopener noreferrer" className="hover:scale-110 hover:drop-shadow-[0_0_8px_rgba(255,255,255,0.5)] transition-all"><LinkedinColorful className="w-6 h-6" /></a>
                  <a href={PERSONAL_INFO.twitter} target="_blank" rel="noopener noreferrer" className="hover:scale-110 hover:drop-shadow-[0_0_8px_rgba(255,255,255,0.5)] transition-all"><TwitterColorful className="w-6 h-6" /></a>
                </div>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
