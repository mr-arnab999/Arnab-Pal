import { motion } from 'motion/react';
import { SKILLS } from '../data';
import { Code2, Cpu, Database, Layout, Server, Brain, Sparkles } from 'lucide-react';

const categoryIcons: Record<string, any> = {
  "Web Development": Code2,
  "UI/UX": Layout,
  "AI & ML": Brain,
  "Databases": Database,
  "Cloud": Server,
  "AI Tools": Sparkles,
};

export default function Skills() {
  const categories = Array.from(new Set(SKILLS.map(s => s.category)));

  return (
    <section id="skills" className="py-24 relative bg-background overflow-hidden">
      <div className="absolute top-[20%] right-0 w-[40rem] h-[40rem] bg-accent/10 rounded-full blur-[120px] pointer-events-none -z-10" />

      <div className="max-w-7xl mx-auto px-6 lg:px-12">
        <motion.div 
          initial={{ opacity: 0, y: 150 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: false, margin: "-100px" }}
          transition={{ duration: 1, ease: "easeOut" }}
          className="mb-16 md:text-center relative"
        >
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
            className="text-text-muted text-lg max-w-2xl mx-auto"
          >
            A curated list of technologies and tools I use to build digital products.
          </motion.p>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-8 relative z-10">
          {categories.map((category, idx) => {
            const Icon = categoryIcons[category] || Cpu;
            const categorySkills = SKILLS.filter(s => s.category === category);
            
            return (
              <motion.div
                key={category}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-100px" }}
                transition={{ delay: idx * 0.1, duration: 0.5 }}
                className="glass-card-premium p-8 rounded-[2rem] hover:-translate-y-2 hover:border-accent/50 transition-all duration-300"
              >
                <div className="flex items-center gap-4 mb-8">
                  <div className="w-14 h-14 rounded-2xl bg-accent/10 flex items-center justify-center text-accent border border-accent/20 box-neon-glow">
                    <Icon className="w-6 h-6" />
                  </div>
                  <h3 className="text-2xl font-display font-bold text-text-main">{category}</h3>
                </div>

                <div className="space-y-6">
                  {categorySkills.map((skill, sIdx) => (
                    <div key={skill.name} className="group/skill">
                      <div className="flex justify-between mb-2">
                        <span className="font-medium text-text-muted group-hover/skill:text-accent transition-colors">{skill.name}</span>
                        <span className="text-accent/70 text-sm font-mono">{skill.level}%</span>
                      </div>
                      <div className="w-full h-1.5 bg-surface/50 rounded-full overflow-hidden border border-border-subtle">
                        <motion.div 
                          initial={{ scaleX: 0 }}
                          whileInView={{ scaleX: skill.level / 100 }}
                          viewport={{ once: true }}
                          transition={{ duration: 1, delay: 0.2 + (sIdx * 0.1), ease: "easeOut" }}
                          className="h-full bg-gradient-to-r from-accent to-accent-hover rounded-full relative origin-left will-change-transform"
                          style={{ width: '100%' }}
                        >
                          <div className="absolute top-0 right-0 w-2 h-full bg-white blur-[2px] rounded-full animate-pulse"></div>
                        </motion.div>
                      </div>
                    </div>
                  ))}
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
