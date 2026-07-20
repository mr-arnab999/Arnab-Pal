cat << 'TSX' > src/components/Experience.tsx
import { motion, AnimatePresence } from 'motion/react';
import { useState } from 'react';
import { EXPERIENCE } from '../data';
import { Briefcase, GraduationCap, ChevronDown } from 'lucide-react';
import type { ExperienceItem } from '../types';

function ExperienceItemCard({ item, idx }: { item: ExperienceItem; idx: number }) {
  const [isExpanded, setIsExpanded] = useState(false);

  return (
    <motion.div 
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-100px" }}
      transition={{ delay: idx * 0.1, duration: 0.5 }}
      className="relative pl-8 md:pl-0 mb-12 last:mb-0 md:flex md:justify-between items-center group"
    >
      {/* Timeline dot */}
      <div className="absolute left-0 top-0 md:left-1/2 w-10 h-10 rounded-full bg-background border border-accent/30 -translate-x-1/2 flex items-center justify-center z-10 group-hover:border-accent transition-all duration-700 group-hover:scale-110 group-hover:rotate-[360deg] box-neon-glow">
        {item.type === 'work' ? <Briefcase className="w-5 h-5 text-accent" /> : <GraduationCap className="w-5 h-5 text-accent" />}
      </div>

      {/* Content - alternating on desktop */}
      <div className={`md:w-5/12 ${idx % 2 === 0 ? 'md:pr-12 md:text-right md:ml-auto md:order-1' : 'md:pl-12 md:mr-auto'}`}>
        <div className="glass-card-premium p-8 rounded-2xl hover:-translate-y-1 hover:border-accent/50 transition-all duration-300">
          <motion.span 
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className={`animate-text-color-cycle text-sm font-mono tracking-wider uppercase mb-2 block font-semibold`}
          >
            {item.date}
          </motion.span>
          <h3 className="text-2xl font-display font-bold mb-1 text-text-main">{item.title}</h3>
          {item.link ? (
            <a href={item.link} target="_blank" rel="noopener noreferrer" className="text-accent-hover font-medium mb-4 block hover:text-accent hover:underline transition-colors">
              {item.company}
            </a>
          ) : (
            <div className="text-accent-hover font-medium mb-4">{item.company}</div>
          )}
          
          {item.performance ? (
            <div className="mt-2">
              <button
                className={`flex items-center gap-2 text-sm font-bold cursor-pointer transition-all duration-300 px-4 py-2.5 rounded-[16px] border border-black/5 dark:border-white/10 bg-white/40 dark:bg-black/40 backdrop-blur-md shadow-[0_4px_12px_rgba(59,130,246,0.08)] dark:shadow-[0_4px_12px_rgba(34,211,238,0.1)] hover:-translate-y-[2px] hover:shadow-[0_6px_16px_rgba(59,130,246,0.15)] dark:hover:shadow-[0_6px_16px_rgba(34,211,238,0.2)] ${idx % 2 === 0 ? "md:ml-auto md:flex-row-reverse" : ""}`} 
                onClick={() => setIsExpanded(!isExpanded)}
              >
                {item.type === 'education' && <span className="text-lg leading-none">🎓</span>}
                <span className="text-sparkle leading-none mt-0.5">{item.description}</span>
                <ChevronDown className={`w-4 h-4 text-text-main transition-transform duration-300 ${isExpanded ? 'rotate-180' : ''}`} />
              </button>
              
              <AnimatePresence>
                {isExpanded && (
                  <motion.div
                    initial={{ opacity: 0, height: 0 }}
                    animate={{ opacity: 1, height: 'auto' }}
                    exit={{ opacity: 0, height: 0 }}
                    transition={{ duration: 0.3, ease: "easeInOut" }}
                    className="overflow-hidden mt-4"
                  >
                    <div className="p-4 rounded-xl bg-white/5 dark:bg-black/20 border-l-2 border-accent backdrop-blur-sm text-left">
                      <h4 className="text-text-main font-semibold mb-3 border-b border-white/10 pb-2">{item.performance.title}</h4>
                      <ul className="space-y-2 mb-3">
                        {item.performance.semesters.map((sem, sIdx) => (
                          <li key={sIdx} className="flex justify-between text-sm text-text-muted hover:text-text-main transition-colors px-2 py-1 rounded hover:bg-white/5">
                            <span>{sem.name}</span>
                            <span className="font-mono text-accent">{sem.gpa}</span>
                          </li>
                        ))}
                      </ul>
                      <div className="pt-2 border-t border-white/10 flex justify-between font-bold text-sm">
                        <span className="text-text-main">Overall CGPA:</span>
                        <span className="text-accent">{item.performance.overall}</span>
                      </div>
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
          ) : (
            <p className="text-sparkle leading-relaxed text-sm font-bold">
              {item.description}
            </p>
          )}
        </div>
      </div>
    </motion.div>
  );
}

export default function Experience() {
  return (
    <section id="experience" className="py-24 relative overflow-hidden">
      {/* Background ambient glow */}
      <div className="absolute top-0 right-1/4 w-[30rem] h-[30rem] bg-accent/10 rounded-full blur-[100px] pointer-events-none -z-10" />

      <motion.div 
        initial={{ opacity: 0, y: 150 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: false, margin: "-100px" }}
        transition={{ duration: 1, ease: "easeOut" }}
        className="max-w-4xl mx-auto px-6 lg:px-12"
      >
        <div className="mb-16 md:text-center">
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-3xl md:text-5xl font-display font-bold mb-4"
          >
            Journey & Experience
          </motion.h2>
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-text-muted text-lg"
          >
            A timeline of my professional work and education.
          </motion.p>
        </div>

        <div className="relative border-l border-border-subtle md:border-transparent ml-4 md:ml-0 md:pl-0">
          {/* Desktop center line with gradient */}
          <div className="hidden md:block absolute left-1/2 top-0 bottom-0 w-[2px] bg-gradient-to-b from-accent-hover/50 via-indigo-500/50 to-transparent -translate-x-1/2 z-0"></div>

          {EXPERIENCE.map((item, idx) => (
            <ExperienceItemCard key={idx} item={item} idx={idx} />
          ))}
        </div>
      </motion.div>
    </section>
  );
}
TSX
