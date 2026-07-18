import { PERSONAL_INFO } from '../data';
import { ArrowUp, Github } from 'lucide-react';
import { GithubColorful, LinkedinColorful, TwitterColorful } from './SocialIcons';

export default function Footer() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="py-12 border-t border-border-subtle bg-surface relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 lg:px-12 relative z-10 flex flex-col md:flex-row items-center justify-between gap-6">
        <div className="flex flex-col items-center md:items-start">
          <a href="#" className="font-display font-bold text-2xl tracking-tighter text-text-main mb-2">
            {PERSONAL_INFO.name}<span className="text-accent">.</span>
          </a>
          <p className="text-text-muted text-sm">
            © {new Date().getFullYear()} All rights reserved.
          </p>
        </div>

        <div className="flex items-center gap-4">
          <a 
            href={PERSONAL_INFO.github} 
            target="_blank" 
            rel="noopener noreferrer"
            className="w-10 h-10 rounded-full glass flex items-center justify-center text-text-muted hover:text-text-main hover:scale-110 hover:shadow-[0_0_15px_var(--glow)] transition-all duration-300"
          >
            <Github className="w-5 h-5" />
          </a>
          <a 
            href={PERSONAL_INFO.linkedin} 
            target="_blank" 
            rel="noopener noreferrer"
            className="w-10 h-10 rounded-full glass flex items-center justify-center hover:scale-110 hover:shadow-[0_0_15px_var(--glow)] transition-all duration-300"
          >
            <LinkedinColorful className="w-6 h-6" />
          </a>
          <a 
            href={PERSONAL_INFO.twitter} 
            target="_blank" 
            rel="noopener noreferrer"
            className="w-10 h-10 rounded-full glass flex items-center justify-center hover:scale-110 hover:shadow-[0_0_15px_var(--glow)] transition-all duration-300"
          >
            <TwitterColorful className="w-6 h-6" />
          </a>
        </div>

        <button 
          onClick={scrollToTop}
          className="w-12 h-12 rounded-full bg-accent/20 text-accent flex items-center justify-center hover:bg-accent-hover hover:text-text-main transition-all"
        >
          <ArrowUp className="w-5 h-5" />
        </button>
      </div>
    </footer>
  );
}
