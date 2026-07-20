cat << 'TSX' > src/components/Hero.tsx
import { motion } from 'motion/react';
import { ArrowRight, Download } from 'lucide-react';
import { PERSONAL_INFO } from '../data';
import Hero3D from './Hero3D';

const FloatingParticles = () => {
  return (
    <div className="absolute inset-0 z-0 overflow-hidden pointer-events-none">
      {[...Array(15)].map((_, i) => (
        <motion.div
          key={i}
          className="absolute w-1 h-1 bg-accent rounded-full will-change-transform"
          style={{ boxShadow: '0 0 10px rgba(6, 182, 212, 0.4)' }}
          initial={{
            x: Math.random() * (typeof window !== 'undefined' ? window.innerWidth : 1000),
            y: Math.random() * (typeof window !== 'undefined' ? window.innerHeight : 1000),
            scale: Math.random() * 0.5 + 0.5,
          }}
          animate={{
            y: [null, Math.random() * -300 - 100],
            x: [null, Math.random() * 100 - 50],
            opacity: [0, 0.6, 0],
          }}
          transition={{
            duration: Math.random() * 6 + 6,
            repeat: Infinity,
            ease: "linear",
            delay: Math.random() * 6,
          }}
        />
      ))}
    </div>
  );
};

export default function Hero() {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden pt-20">
      {/* Background Gradients */}
      <div className="absolute inset-0 z-0 will-change-transform pointer-events-none flex items-center justify-center">
        {/* Soft radial gradient instead of strong glowing circles */}
        <div className="absolute w-[80vw] h-[80vw] md:w-[50vw] md:h-[50vw] bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-accent/5 to-transparent rounded-full blur-[100px] opacity-70"></div>
      </div>
      
      <Hero3D />
      <FloatingParticles />

      <div className="relative z-10 max-w-7xl mx-auto px-6 lg:px-12 w-full text-center mt-20 pointer-events-none">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
          className="max-w-4xl mx-auto relative pointer-events-auto"
        >
          {/* Subtle animated background circle behind the main content */}
          <motion.div
            className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[20rem] h-[20rem] md:w-[40rem] md:h-[40rem] bg-accent/10 rounded-full blur-[120px] pointer-events-none -z-10 will-change-transform"
            animate={{ 
              scale: [1, 1.1, 1],
              opacity: [0.3, 0.5, 0.3]
            }}
            transition={{ 
              duration: 10, 
              repeat: Infinity, 
              ease: "easeInOut" 
            }}
          />

          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.2, duration: 0.5 }}
            className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-black/5 dark:border-white/10 bg-white/40 dark:bg-black/20 backdrop-blur-md shadow-sm text-sm font-medium text-text-muted mb-8"
          >
            <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse"></span>
            Open to Internships & Freelance
          </motion.div>

          <motion.h1 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3, duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
            className="text-4xl md:text-6xl lg:text-7xl font-display font-bold tracking-tight mb-8 leading-[1.1] text-text-main"
          >
            Hi, I'm <span className="premium-name-animation">Arnab Pal</span>. <br className="hidden md:block" />
            <span className="text-white/95 dark:text-white/90">I Build Modern Websites &</span> <br className="hidden md:block" />
            <span className="bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent drop-shadow-sm">AI-Powered Applications.</span>
          </motion.h1>
          
          <motion.p 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.4, duration: 0.8 }}
            className="text-lg md:text-xl text-text-muted mb-12 max-w-2xl mx-auto leading-relaxed"
          >
            Building Modern Web Experiences with AI & Learning Full-Stack Development.
          </motion.p>

          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.6, duration: 0.8 }}
            className="flex flex-col sm:flex-row items-center justify-center gap-6 mt-4"
          >
            <a 
              href="#projects" 
              className="group relative flex items-center gap-2 bg-gradient-to-r from-cyan-500 to-blue-600 text-white px-8 py-3.5 text-sm rounded-full font-bold hover:shadow-[0_8px_25px_rgba(6,182,212,0.3)] transition-all duration-300 hover:-translate-y-1 w-full sm:w-auto justify-center overflow-hidden"
            >
              <div className="absolute inset-0 bg-white/20 translate-y-full group-hover:translate-y-0 transition-transform duration-300 ease-out" />
              <span className="relative z-10">View Projects</span>
              <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform relative z-10" />
            </a>
            
            <a 
              href="/resume.pdf" 
              className="group flex items-center gap-2 px-8 py-3.5 text-sm rounded-full font-medium text-text-main hover:text-white border border-border-subtle bg-white/5 backdrop-blur-sm hover:bg-white/10 hover:border-white/20 transition-all duration-300 hover:-translate-y-1 hover:shadow-lg w-full sm:w-auto justify-center overflow-hidden relative"
            >
              <Download className="w-4 h-4 relative z-10 group-hover:-translate-y-1 transition-transform" />
              <span className="relative z-10">Download CV</span>
            </a>
          </motion.div>
        </motion.div>
      </div>

      {/* Scroll indicator */}
      <motion.div 
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1, duration: 1 }}
        className="absolute bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2"
      >
        <span className="text-xs text-text-muted uppercase tracking-widest">Scroll</span>
        <motion.div 
          animate={{ scaleY: [0, 1, 0], y: [0, 0, 48] }}
          transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
          className="w-[1px] h-12 bg-gradient-to-b from-cyan-500 to-transparent origin-top will-change-transform"
        />
      </motion.div>
    </section>
  );
}
TSX
