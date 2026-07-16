import { motion } from 'motion/react';
import { PERSONAL_INFO } from '../data';
import profileImg from '../assets/images/Arnab.jpg';

const Counter = ({ value, label }: { value: string, label: string }) => (
  <motion.div 
    whileHover={{ y: -5 }}
    className="p-6 rounded-2xl glass-card-premium text-center sm:text-left"
  >
    <div className="text-4xl md:text-5xl font-display font-bold text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-indigo-400 mb-2">{value}</div>
    <div className="text-sm text-slate-400 font-mono tracking-wide uppercase">{label}</div>
  </motion.div>
);

export default function About() {
  return (
    <section id="about" className="py-24 relative overflow-hidden">
      {/* Background ambient glow */}
      <div className="absolute top-1/2 left-0 -translate-y-1/2 w-[30rem] h-[30rem] bg-indigo-500/10 rounded-full blur-[100px] pointer-events-none -z-10" />

      <div className="max-w-7xl mx-auto px-6 lg:px-12">
        <motion.div 
          initial={{ opacity: 0, y: 150 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: false, margin: "-100px" }}
          transition={{ duration: 1, ease: "easeOut" }}
          className="grid lg:grid-cols-2 gap-16 items-center"
        >
          <div>
            <h2 className="text-3xl md:text-5xl font-display font-bold mb-8 leading-tight">
              Building the future with AI, <br />
              <span className="text-slate-500">one project at a time.</span>
            </h2>
            <div className="space-y-6 text-slate-400 text-lg leading-relaxed relative">
              <div className="absolute left-0 top-0 bottom-0 w-[2px] bg-gradient-to-b from-cyan-500 via-indigo-500 to-transparent opacity-50" />
              <p className="pl-6">
                My journey into technology began with a curiosity about how software, websites, and artificial intelligence work. Today, I'm focused on learning, building, and improving my skills in AI, Python, web development, UI/UX design, and Android app development.
              </p>
              <p className="pl-6">
                I use modern AI tools to transform ideas into responsive websites, innovative applications, and intuitive user experiences. My goal is to create digital products that are visually appealing, user-friendly, and solve real-world problems.
              </p>
              <p className="pl-6">
                I'm constantly exploring new technologies, experimenting with AI-powered workflows, and building projects that help me grow as a developer. Every project is an opportunity to learn something new and improve my craft.
              </p>
            </div>
            
            <div className="grid grid-cols-2 sm:grid-cols-3 gap-6 mt-12 pt-12 border-t border-white/5">
              <Counter value="01+" label="Years Exp." />
              <Counter value="05+" label="Projects" />
              <Counter value="01+" label="Clients" />
            </div>
          </div>

          <div className="relative flex justify-center items-center">
            <motion.div 
              initial={{ scale: 0.9, opacity: 0 }}
              whileInView={{ scale: 1, opacity: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="w-64 md:w-80 aspect-[4/5] rounded-[2rem] overflow-hidden glass p-2 relative box-neon-buzz group"
            >
              <div className="w-full h-full rounded-[1.5rem] overflow-hidden relative">
                <img 
                  src={profileImg} 
                  alt="Portrait"
                  loading="lazy"
                  decoding="async"
                  className="relative z-10 w-full h-full object-cover object-top group-hover:scale-105 transition-transform duration-1000 ease-out will-change-transform"
                />
              </div>
            </motion.div>
            
            {/* Floating decoration */}
            <motion.div 
              animate={{ y: [0, -20, 0] }}
              transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
              className="absolute -bottom-8 -left-8 md:-left-12 glass-card-premium p-6 rounded-2xl z-10 box-neon-glow"
            >
              <div className="text-xs font-mono text-cyan-400 mb-1 uppercase tracking-widest">Based in</div>
              <div className="text-xl font-display font-bold text-white flex items-center gap-2">
                📍 {PERSONAL_INFO.location}
              </div>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
