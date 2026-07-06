import { motion, useMotionValue, useSpring, useTransform } from 'motion/react';
import { PROJECTS } from '../data';
import { ExternalLink, Github } from 'lucide-react';
import React, { useRef } from 'react';

const TiltCard = ({ children, className }: { children: React.ReactNode, className?: string }) => {
  const ref = useRef<HTMLDivElement>(null);

  const x = useMotionValue(0);
  const y = useMotionValue(0);

  const mouseXSpring = useSpring(x, { stiffness: 300, damping: 40 });
  const mouseYSpring = useSpring(y, { stiffness: 300, damping: 40 });

  const rotateX = useTransform(mouseYSpring, [-0.5, 0.5], ["10deg", "-10deg"]);
  const rotateY = useTransform(mouseXSpring, [-0.5, 0.5], ["-10deg", "10deg"]);

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (!ref.current) return;
    const rect = ref.current.getBoundingClientRect();
    const width = rect.width;
    const height = rect.height;
    
    const mouseX = e.clientX - rect.left;
    const mouseY = e.clientY - rect.top;
    
    const xPct = mouseX / width - 0.5;
    const yPct = mouseY / height - 0.5;
    
    x.set(xPct);
    y.set(yPct);
  };

  const handleMouseLeave = () => {
    x.set(0);
    y.set(0);
  };

  return (
    <motion.div
      ref={ref}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      style={{
        rotateX,
        rotateY,
        transformStyle: "preserve-3d",
      }}
      className={className}
    >
      <div style={{ transform: "translateZ(30px)" }} className="h-full">
        {children}
      </div>
    </motion.div>
  );
};

export default function Projects() {
  return (
    <section id="projects" className="py-24 relative bg-[#030712]">
      <motion.div 
        initial={{ opacity: 0, y: 150 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: false, margin: "-100px" }}
        transition={{ duration: 1, ease: "easeOut" }}
        className="max-w-7xl mx-auto px-6 lg:px-12"
      >
        <div className="mb-16 md:text-center">
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-3xl md:text-5xl font-display font-bold mb-4"
          >
            Selected Works
          </motion.h2>
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-slate-400 text-lg max-w-2xl mx-auto"
          >
            Some of the projects I've built that showcase my passion for clean code and exceptional design.
          </motion.p>
        </div>

        <div className="grid md:grid-cols-2 gap-12 lg:gap-16 perspective-1000">
          {PROJECTS.map((project, idx) => (
            <motion.div
              key={project.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.1 }}
            >
              <TiltCard className="group rounded-3xl h-full glass-card-premium">
                <div className="relative aspect-video overflow-hidden rounded-t-3xl border-b border-white/5">
                  <div className="absolute inset-0 bg-slate-950/40 z-10 group-hover:bg-transparent transition-colors duration-500"></div>
                  <img 
                    src={project.image} 
                    alt={project.title}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700 ease-out"
                  />
                  <div className="absolute top-4 right-4 z-20 flex gap-2 translate-y-[-150%] group-hover:translate-y-0 transition-transform duration-500 ease-out">
                    <a 
                      href={project.github}
                      className="w-10 h-10 rounded-full glass flex items-center justify-center text-white hover:bg-cyan-500 hover:text-slate-950 transition-colors box-neon-glow"
                    >
                      <Github className="w-5 h-5" />
                    </a>
                    <a 
                      href={project.demo}
                      className="w-10 h-10 rounded-full glass flex items-center justify-center text-white hover:bg-cyan-500 hover:text-slate-950 transition-colors box-neon-glow"
                    >
                      <ExternalLink className="w-5 h-5" />
                    </a>
                  </div>
                </div>
                
                <div className="p-8">
                  <div className="text-cyan-400 text-xs font-bold tracking-widest uppercase mb-3">
                    {project.category}
                  </div>
                  <h3 className="text-2xl font-display font-bold mb-3 text-white group-hover:text-cyan-300 transition-colors">{project.title}</h3>
                  <p className="text-slate-400 mb-6 line-clamp-2">
                    {project.description}
                  </p>
                  <div className="flex flex-wrap gap-2">
                    {project.tags.map(tag => (
                      <span 
                        key={tag}
                        className="px-3 py-1 text-xs font-mono text-cyan-100 bg-cyan-900/30 border border-cyan-500/20 rounded-full"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>
              </TiltCard>
            </motion.div>
          ))}
        </div>
      </motion.div>
    </section>
  );
}
