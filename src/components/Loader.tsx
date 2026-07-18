import { motion, AnimatePresence } from 'motion/react';
import { useEffect, useState } from 'react';
import profileImg from '../assets/images/Arnab.jpg';

export default function Loader({ onComplete }: { onComplete: () => void }) {
  const [progress, setProgress] = useState(0);
  const [message, setMessage] = useState('Initializing...');

  useEffect(() => {
    const startTime = Date.now();
    const duration = 2200; // Total loading time ~2.2 seconds
    
    let animationFrame: number;
    
    const updateProgress = () => {
      const currentTime = Date.now();
      const elapsed = currentTime - startTime;
      
      if (elapsed < duration) {
        // Easing function (easeOutCubic)
        const t = elapsed / duration;
        const easedProgress = 1 - Math.pow(1 - t, 3);
        const currentProgress = Math.min(easedProgress * 100, 100);
        
        setProgress(currentProgress);
        
        if (currentProgress < 20) setMessage('Initializing...');
        else if (currentProgress < 40) setMessage('Loading Assets...');
        else if (currentProgress < 60) setMessage('Preparing Experience...');
        else if (currentProgress < 80) setMessage('Building Portfolio...');
        else if (currentProgress < 100) setMessage('Almost Ready...');
        
        animationFrame = requestAnimationFrame(updateProgress);
      } else {
        setProgress(100);
        setMessage('✓ Welcome');
        setTimeout(onComplete, 500); // Pause at 100% to show flash/welcome before fading out
      }
    };
    
    animationFrame = requestAnimationFrame(updateProgress);
    
    return () => cancelAnimationFrame(animationFrame);
  }, [onComplete]);

  return (
    <motion.div
      initial={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
      className="fixed inset-0 z-[100] flex flex-col items-center justify-center bg-background overflow-hidden"
    >
      {/* Cyan Flash at 100% */}
      <AnimatePresence>
        {progress === 100 && (
           <motion.div 
             initial={{ opacity: 0 }}
             animate={{ opacity: 1 }}
             exit={{ opacity: 0 }}
             transition={{ duration: 0.4, ease: "easeOut" }}
             className="absolute inset-0 bg-accent/10 pointer-events-none z-0" 
           />
        )}
      </AnimatePresence>

      <div className="flex flex-col items-center z-10">
        <motion.div
          initial={{ opacity: 0, scale: 0.8, y: 10 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="mb-6 md:mb-8"
        >
          <motion.div
            animate={{ 
              y: [0, -4, 0]
            }}
            transition={{ 
              duration: 4, 
              repeat: Infinity, 
              ease: "easeInOut" 
            }}
          >
            <motion.div
              animate={{ 
                boxShadow: [
                  "0 0 10px rgba(34,211,238,0.4)", 
                  "0 0 25px rgba(34,211,238,0.7)", 
                  "0 0 10px rgba(34,211,238,0.4)"
                ]
              }}
              transition={{ 
                duration: 4, 
                repeat: Infinity, 
                ease: "easeInOut" 
              }}
              className="w-[70px] h-[70px] md:w-[80px] md:h-[80px] lg:w-[90px] lg:h-[90px] rounded-full border-2 border-accent overflow-hidden bg-surface"
            >
              <img 
                src={profileImg} 
                alt="Arnab Pal" 
                className="w-full h-full object-cover"
              />
            </motion.div>
          </motion.div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1, ease: "easeOut", delay: 0.1 }}
          className="text-3xl md:text-5xl font-display font-bold tracking-tighter text-text-main mb-8 flex items-center"
        >
          My Portfolio
          <motion.span 
            className="text-accent inline-block"
            animate={{ opacity: [1, 0.4, 1], scale: [1, 1.1, 1] }}
            transition={{ duration: 1.5, repeat: Infinity, ease: "easeInOut" }}
          >
            .
          </motion.span>
        </motion.div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 0.2 }}
          className="w-56 md:w-72 flex flex-col items-center gap-4"
        >
          <div className="w-full flex justify-between items-center text-[10px] md:text-xs font-mono text-accent font-medium tracking-widest uppercase">
            <span className="opacity-80">{message}</span>
            <span>{Math.round(progress)}%</span>
          </div>
          
          <div className="w-full h-[2px] bg-surface rounded-full overflow-hidden relative">
            <motion.div
              className="absolute top-0 left-0 h-full bg-gradient-to-r from-accent via-accent to-accent shadow-[0_0_10px_var(--glow)]"
              style={{ width: `${progress}%` }}
              transition={{ duration: 0.1 }}
            >
              {/* Moving glow effect inside progress bar */}
              <motion.div 
                className="absolute top-0 right-0 bottom-0 w-20 bg-white/30 blur-[2px]"
                animate={{ x: ['-100%', '200%'] }}
                transition={{ duration: 1.5, repeat: Infinity, ease: "linear" }}
              />
            </motion.div>
          </div>
        </motion.div>
      </div>
    </motion.div>
  );
}
