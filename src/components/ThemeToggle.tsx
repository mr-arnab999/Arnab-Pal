import { Sun, Moon } from 'lucide-react';
import { useTheme } from './ThemeProvider';
import { motion } from 'motion/react';

export default function ThemeToggle() {
  const { theme, toggleTheme } = useTheme();
  
  return (
    <button
      onClick={toggleTheme}
      className="relative flex items-center justify-center w-12 h-12 rounded-full glass hover:bg-accent/10 transition-colors focus:outline-none focus:ring-2 focus:ring-accent group"
      aria-label="Toggle theme"
    >
      <motion.div
        initial={false}
        animate={{ 
          rotate: theme === 'dark' ? 0 : 180,
          scale: theme === 'dark' ? 1 : 0,
          opacity: theme === 'dark' ? 1 : 0
        }}
        transition={{ duration: 0.4, ease: "anticipate" }}
        className="absolute inset-0 flex items-center justify-center text-accent"
      >
        <Moon className="w-6 h-6" />
      </motion.div>
      <motion.div
        initial={false}
        animate={{ 
          rotate: theme === 'light' ? 0 : -180,
          scale: theme === 'light' ? 1 : 0,
          opacity: theme === 'light' ? 1 : 0
        }}
        transition={{ duration: 0.4, ease: "anticipate" }}
        className="absolute inset-0 flex items-center justify-center text-accent"
      >
        <Sun className="w-6 h-6" />
      </motion.div>
    </button>
  );
}
