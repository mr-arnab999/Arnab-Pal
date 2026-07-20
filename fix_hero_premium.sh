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
      {[...Array(15)].map((_, i) => (
        <motion.div
          key={i}
          className="absolute w-1 h-1 bg-accent rounded-full will-change-transform"
          style={{ boxShadow: '0 0 10px rgba(6, 182, 212, 0.3)' }}
          initial={{
            x: Math.random() * (typeof window !== 'undefined' ? window.innerWidth : 1000),
            y: Math.random() * (typeof window !== 'undefined' ? window.innerHeight : 1000),
            scale: Math.random() * 0.5 + 0.5,
          }}
          animate={{
            y: [null, Math.random() * -200 - 50],
            x: [null, Math.random() * 50 - 25],
            opacity: [0, 0.4, 0],
          }}
          transition={{
            duration: Math.random() * 8 + 8,
            repeat: Infinity,
            ease: "linear",
            delay: Math.random() * 8,
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
      <div className="absolute inset-0 z-0 will-change-transform pointer-events-none flex items-center justify-center">
        {/* Soft radial gradient instead of strong glowing circles */}
        <motion.div 
          style={isDesktop && !prefersReducedMotion ? { x: parallaxX1, y: parallaxY1 } : {}}
          className="absolute w-[80vw] h-[80vw] md:w-[60vw] md:h-[60vw] bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-accent/10 to-transparent rounded-full blur-[100px] opacity-60"
        />
        <motion.div 
          style={isDesktop && !prefersReducedMotion ? { x: parallaxX2, y: parallaxY2 } : {}}
          className="absolute bottom-[10%] right-[5%] w-[40vw] h-[40vw] bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-blue-600/5 to-transparent rounded-full blur-[120px] opacity-60"
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
          {/* Subtle animated background circle behind the main content */}
          <motion.div
            className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[20rem] h-[20rem] md:w-[35rem] md:h-[35rem] bg-accent/5 rounded-full blur-[100px] pointer-events-none -z-10 will-change-transform"
            animate={prefersReducedMotion ? {} : { 
              scale: [1, 1.05, 1],
              opacity: [0.4, 0.6, 0.4]
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
            className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-white/5 bg-white/5 backdrop-blur-md shadow-sm text-sm font-medium text-text-muted mb-8"
          >
            <span className="w-2 h-2 rounded-full bg-emerald-400 animate-[pulse_4s_ease-in-out_infinite]" style={{ boxShadow: '0 0 8px rgba(52, 211, 153, 0.6)' }}></span>
            Open to Internships & Freelance
          </motion.div>

          <motion.h1 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3, duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
            className="text-4xl md:text-6xl lg:text-7xl font-display font-bold tracking-tight mb-8 leading-[1.15] text-white"
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
            className="flex flex-col sm:flex-row items-center justify-center gap-5 mt-4"
          >
            <a 
              href="#projects" 
              className="group relative flex items-center gap-2 bg-gradient-to-r from-cyan-500 to-blue-600 text-white px-8 py-3.5 text-sm rounded-full font-bold shadow-[0_4px_14px_rgba(6,182,212,0.2)] hover:shadow-[0_6px_20px_rgba(6,182,212,0.3)] transition-all duration-300 hover:-translate-y-[2px] active:scale-[0.98] w-full sm:w-auto justify-center overflow-hidden"
            >
              {/* Ripple effect container */}
              <div className="absolute inset-0 bg-white/20 translate-y-full group-hover:translate-y-0 transition-transform duration-300 ease-in-out" />
              <span className="relative z-10">View Projects</span>
              <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform duration-300 relative z-10" />
            </a>
            
            <a 
              href="/resume.pdf" 
              className="group flex items-center gap-2 px-8 py-3.5 text-sm rounded-full font-medium text-text-main hover:text-white border border-border-subtle bg-white/5 backdrop-blur-sm hover:bg-white/10 hover:border-white/20 transition-all duration-300 hover:-translate-y-[2px] active:scale-[0.98] w-full sm:w-auto justify-center"
            >
              <Download className="w-4 h-4 group-hover:-translate-y-0.5 transition-transform duration-300" />
              <span>Download CV</span>
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
        <span className="text-[10px] text-text-muted uppercase tracking-[0.2em] font-medium">Scroll</span>
        <motion.div 
          animate={prefersReducedMotion ? {} : { scaleY: [0, 1, 0], y: [0, 0, 48] }}
          transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
          className="w-[1px] h-12 bg-gradient-to-b from-cyan-500/50 to-transparent origin-top will-change-transform"
        />
      </motion.div>
    </section>
  );
}
TSX
