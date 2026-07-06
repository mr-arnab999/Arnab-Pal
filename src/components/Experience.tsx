import { motion } from 'motion/react';
import { EXPERIENCE } from '../data';
import { Briefcase, GraduationCap } from 'lucide-react';

export default function Experience() {
  return (
    <section id="experience" className="py-24 relative overflow-hidden">
      {/* Background ambient glow */}
      <div className="absolute top-0 right-1/4 w-[30rem] h-[30rem] bg-cyan-500/10 rounded-full blur-[100px] pointer-events-none -z-10" />

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
            className="text-slate-400 text-lg"
          >
            A timeline of my professional work and education.
          </motion.p>
        </div>

        <div className="relative border-l border-white/5 md:border-transparent ml-4 md:ml-0 md:pl-0">
          {/* Desktop center line with gradient */}
          <div className="hidden md:block absolute left-1/2 top-0 bottom-0 w-[2px] bg-gradient-to-b from-cyan-500/50 via-indigo-500/50 to-transparent -translate-x-1/2 z-0"></div>

          {EXPERIENCE.map((item, idx) => (
            <motion.div 
              key={idx}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ delay: idx * 0.1, duration: 0.5 }}
              className="relative pl-8 md:pl-0 mb-12 last:mb-0 md:flex md:justify-between items-center group"
            >
              {/* Timeline dot */}
              <div className="absolute left-0 top-0 md:left-1/2 w-10 h-10 rounded-full bg-[#030712] border border-blue-500/30 -translate-x-1/2 flex items-center justify-center z-10 group-hover:border-blue-400 transition-all duration-700 group-hover:scale-110 group-hover:rotate-[360deg] box-neon-glow">
                {item.type === 'work' ? <Briefcase className="w-5 h-5 text-blue-500" /> : <GraduationCap className="w-5 h-5 text-blue-500" />}
              </div>

              {/* Content - alternating on desktop */}
              <div className={`md:w-5/12 ${idx % 2 === 0 ? 'md:pr-12 md:text-right md:ml-auto md:order-1' : 'md:pl-12 md:mr-auto'}`}>
                <div className="glass-card-premium p-8 rounded-2xl hover:-translate-y-1 hover:border-cyan-500/50 transition-all duration-300">
                  <motion.span 
                    initial={{ opacity: 0, y: 10 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: 0.2 }}
                    className={`animate-text-color-cycle text-sm font-mono tracking-wider uppercase mb-2 block font-semibold`}
                  >
                    {item.date}
                  </motion.span>
                  <h3 className="text-2xl font-display font-bold mb-1 text-white">{item.title}</h3>
                  {item.link ? (
                    <a href={item.link} target="_blank" rel="noopener noreferrer" className="text-indigo-300 font-medium mb-4 block hover:text-blue-400 hover:underline transition-colors">
                      {item.company}
                    </a>
                  ) : (
                    <div className="text-indigo-300 font-medium mb-4">{item.company}</div>
                  )}
                  <p className="text-slate-400 leading-relaxed text-sm">
                    {item.description}
                  </p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </motion.div>
    </section>
  );
}
