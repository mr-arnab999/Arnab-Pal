import { motion } from 'motion/react';

export default function BackgroundShapes() {
  return (
    <div className="fixed inset-0 pointer-events-none z-[-1] overflow-hidden">
      <motion.div
        animate={{
          y: [0, -50, 0],
          rotate: [0, 90, 360],
          scale: [1, 1.1, 1]
        }}
        transition={{
          duration: 20,
          repeat: Infinity,
          ease: "linear"
        }}
        className="absolute top-1/4 left-1/4 w-64 h-64 border border-accent/10 rounded-3xl opacity-20 dark:opacity-10"
      />
      <motion.div
        animate={{
          y: [0, 50, 0],
          rotate: [360, 180, 0],
          scale: [1, 1.2, 1]
        }}
        transition={{
          duration: 25,
          repeat: Infinity,
          ease: "linear"
        }}
        className="absolute bottom-1/4 right-1/4 w-72 h-72 border border-accent-hover/10 rounded-full opacity-20 dark:opacity-10"
      />
      <motion.div
        animate={{
          x: [0, -30, 0],
          y: [0, 30, 0],
          rotate: [0, -45, 0]
        }}
        transition={{
          duration: 15,
          repeat: Infinity,
          ease: "linear"
        }}
        className="absolute top-1/2 right-1/3 w-40 h-40 border-2 border-accent/5 opacity-30 dark:opacity-10"
        style={{ clipPath: 'polygon(50% 0%, 0% 100%, 100% 100%)' }}
      />
    </div>
  );
}
