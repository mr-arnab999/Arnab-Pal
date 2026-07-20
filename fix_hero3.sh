cat << 'TSX' > src/components/Hero.tsx
import { motion, useMotionValue, useSpring, useTransform, useReducedMotion } from 'motion/react';
import { ArrowRight, Download } from 'lucide-react';
import { useEffect, useState } from 'react';
import { PERSONAL_INFO } from '../data';
import Hero3D from './Hero3D';

const FloatingParticles = () => {
  const prefersReducedMotion = useReducedMotion();
  
  if (prefersReducedMotion) return null;

  return (
    <div className="absolute inset-0 z-0 overflow-hidden pointer-events-none">
      {[...Array(30)].map((_, i) => (
        <motion.div
          key={i}
          className="absolute w-1 h-1 bg-accent rounded-full box-neon-glow will-change-transform"
          initial={{
            x: Math.random() * (typeof window !== 'undefined' ? window.innerWidth : 1000),
            y: Math.random() * (typeof window !== 'undefined' ? window.innerHeight : 1000),
            scale: Math.random() * 0.5 + 0.5,
          }}
          animate={{
            y: [null, Math.random() * -300 - 100],
            x: [null, Math.random() * 100 - 50],
            opacity: [0, 0.8, 0],
          }}
          transition={{
            duration: Math.random() * 5 + 5,
            repeat: Infinity,
            ease: "linear",
            delay: Math.random() * 5,
          }}
        />
      ))}
    </div>
  );
};

export default function Hero() {
  const prefersReducedMotion = useReducedMotion();
  const [isDesktop, setIsDesktop] = useState(false);
  
  useEffect(() => {
    const checkDesktop = () => setIsDesktop(window.innerWidth > 768);
    checkDesktop();
    window.addEventListener('resize', checkDesktop);
    return () => window.removeEventListener('resize', checkDesktop);
  }, []);

  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);

  const springConfig = { damping: 25, stiffness: 150 };
  const smoothMouseX = useSpring(mouseX, springConfig);
  const smoothMouseY = useSpring(mouseY, springConfig);

  const parallaxX1 = useTransform(smoothMouseX, [-0.5, 0.5], [-20, 20]);
  const parallaxY1 = useTransform(smoothMouseY, [-0.5, 0.5], [-20, 20]);
  const parallaxX2 = useTransform(smoothMouseX, [-0.5, 0.5], [15, -15]);
  const parallaxY2 = useTransform(smoothMouseY, [-0.5, 0.5], [15, -15]);
  const contentParallaxX = useTransform(smoothMouseX, [-0.5, 0.5], [-10, 10]);
  const contentParallaxY = useTransform(smoothMouseY, [-0.5, 0.5], [-10, 10]);

  const handleMouseMove = (e: React.MouseEvent) => {
    if (!isDesktop || prefersReducedMotion) return;
    const { clientX, clientY } = e;
    const { innerWidth, innerHeight } = window;
    mouseX.set(clientX / innerWidth - 0.5);
    mouseY.set(clientY / innerHeight - 0.5);
  };

  return (
    <section 
      className="relative min-h-screen flex items-center justify-center overflow-hidden pt-20"
      onMouseMove={handleMouseMove}
    >
      {/* Background Gradients */}
      <div className="absolute inset-0 z-0 will-change-transform">
        <motion.div 
          style={isDesktop && !prefersReducedMotion ? { x: parallaxX1, y: parallaxY1 } : {}}
          animate={prefersReducedMotion ? {} : { scale: [1, 1.2, 1], rotate: [0, 90, 0] }}
          transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
          className="absolute top-[10%] left-[5%] w-[40rem] h-[40rem] bg-accent/10 rounded-full blur-[120px] will-change-transform" 
        />
        <motion.div 
          style={isDesktop && !prefersReducedMotion ? { x: parallaxX2, y: parallaxY2 } : {}}
          animate={prefersReducedMotion ? {} : { scale: [1, 1.3, 1], rotate: [0, -90, 0] }}
          transition={{ duration: 25, repeat: Infinity, ease: "linear" }}
          className="absolute bottom-[10%] right-[5%] w-[35rem] h-[35rem] bg-indigo-600/10 rounded-full blur-[120px] will-change-transform" 
        />
      </div>
      
      <Hero3D />
      <FloatingParticles />

      <div className="relative z-10 max-w-7xl mx-auto px-6 lg:px-12 w-full text-center mt-20 pointer-events-none">
        <motion.div
          style={isDesktop && !prefersReducedMotion ? { x: contentParallaxX, y: contentParallaxY } : {}}
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
          className="max-w-4xl mx-auto relative pointer-events-auto"
        >
          {/* Smooth animated background circle behind the main content */}
          <motion.div
            className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[30rem] h-[30rem] md:w-[50rem] md:h-[50rem] bg-accent/20 rounded-full blur-[100px] pointer-events-none -z-10 will-change-transform"
            animate={prefersReducedMotion ? {} : { 
              scale: [1, 1.2, 1],
              opacity: [0.4, 0.7, 0.4]
            }}
            transition={{ 
              duration: 8, 
              repeat: Infinity, 
              ease: "easeInOut" 
            }}
          />

          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.2, duration: 0.5 }}
            className="inline-flex items-center gap-2 px-4 py-2 rounded-full glass border border-border-subtle text-sm font-medium text-text-muted mb-8"
          >
            <span className="w-2 h-2 rounded-full bg-emerald-400 animate-[pulse_4s_ease-in-out_infinite]" style={{ boxShadow: '0 0 8px rgba(52, 211, 153, 0.5)' }}></span>
            Open to Internships & Freelance
          </motion.div>

          <motion.h1 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3, duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
            className="text-4xl md:text-6xl lg:text-7xl font-display font-bold tracking-tight mb-8 leading-tight"
          >
            Hi, I'm <span className="premium-name-animation">Arnab Pal</span>. <br className="hidden md:block" />
            I Build Modern Websites & <br className="hidden md:block" />
            <span className="premium-gradient-slow drop-shadow-sm">AI-Powered Applications.</span>
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
              className="group relative flex items-center gap-2 bg-accent-hover text-surface px-6 py-3 text-sm rounded-full font-bold shadow-[0_4px_14px_rgba(6,182,212,0.2)] hover:shadow-[0_6px_20px_rgba(6,182,212,0.3)] transition-all duration-300 hover:-translate-y-[2px] active:scale-[0.98] w-full sm:w-auto justify-center overflow-hidden"
            >
              <div className="absolute inset-0 bg-white/20 translate-y-full group-hover:translate-y-0 transition-transform duration-300 ease-in-out" />
              <span className="relative z-10">View Projects</span>
              <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform duration-300 relative z-10" />
            </a>
            
            <a 
              href="/resume.pdf" 
              className="group flex items-center gap-2 glass px-6 py-3 text-sm rounded-full font-medium text-text-main hover:border-accent/50 hover:bg-accent/20 transition-all hover:-translate-y-[2px] active:scale-[0.98] hover:shadow-lg w-full sm:w-auto justify-center overflow-hidden relative"
            >
              <div className="absolute inset-0 bg-gradient-to-r from-accent-hover/10 to-indigo-500/10 translate-y-full group-hover:translate-y-0 transition-transform duration-300 ease-in-out" />
              <Download className="w-4 h-4 relative z-10 group-hover:-translate-y-[2px] transition-transform duration-300" />
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
          animate={prefersReducedMotion ? {} : { scaleY: [0, 1, 0], y: [0, 0, 48] }}
          transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
          className="w-[1px] h-12 bg-gradient-to-b from-accent-hover to-transparent origin-top will-change-transform"
        />
      </motion.div>
    </section>
  );
}
TSX
