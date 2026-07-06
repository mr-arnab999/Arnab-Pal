import { motion } from 'motion/react';
import { SKILLS } from '../data';
import { Code2, Cpu, Database, Layout, Server, Brain } from 'lucide-react';

const categoryIcons: Record<string, any> = {
  "Web Development": Code2,
  "UI/UX": Layout,
  "AI & ML": Brain,
  "Databases": Database,
  "Cloud": Server,
};

export default function Skills() {
  const categories = Array.from(new Set(SKILLS.map(s => s.category)));

  return (
    <section id="skills" className="py-24 relative bg-[#030712] overflow-hidden">
      <div className="absolute top-[20%] right-0 w-[40rem] h-[40rem] bg-cyan-500/5 rounded-full blur-[120px] pointer-events-none -z-10" />

      <motion.div 
        initial={{ opacity: 0, y: 150 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: false, margin: "-100px" }}
        transition={{ duration: 1, ease: "easeOut" }}
        className="max-w-7xl mx-auto px-6 lg:px-12"
      >
        <div className="mb-16 md:text-center relative">
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-3xl md:text-5xl font-display font-bold mb-4"
          >
            Technical Arsenal
          </motion.h2>
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-slate-400 text-lg max-w-2xl mx-auto"
          >
            A curated list of technologies and tools I use to build digital products.
          </motion.p>
        </div>

        <div className="grid md:grid-cols-2 gap-8 relative z-10">
          {categories.map((category, idx) => {
            const Icon = categoryIcons[category] || Cpu;
            const categorySkills = SKILLS.filter(s => s.category === category);
            
            return (
              <motion.div
                key={category}
                initial={{ opacity: 0, scale: 0.95 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: idx * 0.1, duration: 0.5 }}
                className="glass-card-premium p-8 rounded-[2rem] hover:-translate-y-2 transition-transform duration-300"
              >
                <div className="flex items-center gap-4 mb-8">
                  <div className="w-14 h-14 rounded-2xl bg-cyan-500/10 border border-cyan-500/20 flex items-center justify-center text-cyan-400 box-neon-glow">
                    <Icon className="w-7 h-7" />
                  </div>
                  <h3 className="text-2xl font-display font-bold text-white">{category}</h3>
                </div>

                <div className="space-y-6">
                  {categorySkills.map((skill, sIdx) => (
                    <div key={skill.name} className="group/skill">
                      <div className="flex justify-between mb-2">
                        <span className="font-medium text-slate-300 group-hover/skill:text-cyan-300 transition-colors">{skill.name}</span>
                        <span className="text-cyan-500/50 text-sm font-mono">{skill.level}%</span>
                      </div>
                      <div className="w-full h-1.5 bg-slate-800/50 rounded-full overflow-hidden backdrop-blur-sm border border-white/5">
                        <motion.div 
                          initial={{ width: 0 }}
                          whileInView={{ width: `${skill.level}%` }}
                          viewport={{ once: true }}
                          transition={{ duration: 1.2, delay: 0.2 + (sIdx * 0.1), ease: "easeOut" }}
                          className="h-full bg-gradient-to-r from-cyan-500 via-indigo-500 to-fuchsia-500 rounded-full relative"
                        >
                          <div className="absolute top-0 right-0 bottom-0 w-4 bg-white/50 blur-[2px] animate-pulse"></div>
                        </motion.div>
                      </div>
                    </div>
                  ))}
                </div>
              </motion.div>
            );
          })}
        </div>
      </motion.div>
    </section>
  );
}
