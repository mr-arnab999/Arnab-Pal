import { motion } from 'motion/react';
import { PERSONAL_INFO } from '../data';
import { Mail, MapPin, Phone, Send } from 'lucide-react';

export default function Contact() {
  return (
    <section id="contact" className="py-24 relative bg-[#030712] border-t border-white/5 overflow-hidden">
      {/* Background glow */}
      <div className="absolute bottom-0 left-1/4 w-[40rem] h-[40rem] bg-indigo-500/10 rounded-full blur-[120px] pointer-events-none -z-10" />

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
            Let's create something <span className="text-gradient">together.</span>
          </motion.h2>
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-slate-400 text-lg max-w-2xl mx-auto"
          >
            Have a project in mind? Looking to partner or work together? Reach out through the form and I'll get back to you in the next 48 hours.
          </motion.p>
        </div>

        <div className="grid lg:grid-cols-2 gap-16">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
          >
            <div className="space-y-8">
              <a href={`mailto:${PERSONAL_INFO.email}`} className="flex items-start gap-6 group cursor-pointer block">
                <div className="w-14 h-14 rounded-full glass border border-white/10 flex items-center justify-center shrink-0 text-cyan-400 group-hover:bg-cyan-500/20 group-hover:scale-110 transition-all duration-300 box-neon-glow">
                  <Mail className="w-6 h-6" />
                </div>
                <div>
                  <h4 className="text-xl font-display font-bold mb-1 text-white">Email</h4>
                  <p className="text-slate-400 group-hover:text-cyan-400 transition-colors">
                    {PERSONAL_INFO.email}
                  </p>
                </div>
              </a>
              <a href={`tel:${PERSONAL_INFO.phone}`} className="flex items-start gap-6 group cursor-pointer block">
                <div className="w-14 h-14 rounded-full glass border border-white/10 flex items-center justify-center shrink-0 text-cyan-400 group-hover:bg-cyan-500/20 group-hover:scale-110 transition-all duration-300 box-neon-glow">
                  <Phone className="w-6 h-6" />
                </div>
                <div>
                  <h4 className="text-xl font-display font-bold mb-1 text-white">Phone</h4>
                  <p className="text-slate-400 group-hover:text-cyan-400 transition-colors">
                    {PERSONAL_INFO.phone}
                  </p>
                </div>
              </a>

              <div className="flex items-start gap-6 group cursor-pointer">
                <div className="w-14 h-14 rounded-full glass border border-white/10 flex items-center justify-center shrink-0 text-cyan-400 group-hover:bg-cyan-500/20 group-hover:scale-110 transition-all duration-300 box-neon-glow">
                  <MapPin className="w-6 h-6" />
                </div>
                <div>
                  <h4 className="text-xl font-display font-bold mb-1 text-white">Location</h4>
                  <p className="text-slate-400 group-hover:text-cyan-400 transition-colors">{PERSONAL_INFO.location}</p>
                </div>
              </div>
            </div>

            <a 
              href="https://www.google.com/maps/place/Mankanali,+West+Bengal+722133/@23.3246809,87.038734,16z/data=!3m1!4b1!4m6!3m5!1s0x39f7a841486c0441:0xb2f1325e7d62f84!8m2!3d23.3261753!4d87.0361917!16s%2Fg%2F1hhx18b8j?entry=ttu&g_ep=EgoyMDI2MDYyOS4wIKXMDSoASAFQAw%3D%3D"
              target="_blank"
              rel="noopener noreferrer"
              className="mt-12 w-full h-64 glass-card-premium rounded-[2rem] overflow-hidden flex items-center justify-center relative group block border border-white/5"
            >
              <div className="absolute inset-0 bg-slate-900/80 group-hover:bg-slate-900/60 transition-colors duration-500"></div>
              <div className="relative z-10 flex flex-col items-center text-slate-400 group-hover:text-cyan-400 transition-colors duration-300">
                <MapPin className="w-10 h-10 mb-3 group-hover:scale-110 transition-transform duration-500" />
                <span className="font-bold tracking-wide uppercase text-sm">Open in Google Maps</span>
              </div>
            </a>
          </motion.div>

          <motion.form
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            className="glass-card-premium p-10 rounded-[2.5rem] flex flex-col gap-6"
            onSubmit={(e) => {
              e.preventDefault();
              const form = e.currentTarget;
              const name = (form.elements.namedItem('name') as HTMLInputElement).value;
              const email = (form.elements.namedItem('email') as HTMLInputElement).value;
              const message = (form.elements.namedItem('message') as HTMLTextAreaElement).value;
              
              const subject = encodeURIComponent(`Portfolio Contact from ${name}`);
              const body = encodeURIComponent(`${message}\n\n---\nSender Email: ${email}`);
              
              window.location.href = `mailto:mrarnab861@gmail.com?subject=${subject}&body=${body}`;
            }}
          >
            <div className="group">
              <label htmlFor="name" className="block text-sm font-mono tracking-wider uppercase text-slate-400 mb-2 group-focus-within:text-cyan-400 transition-colors">Full Name</label>
              <input 
                type="text" 
                id="name" 
                name="name"
                required
                className="w-full bg-slate-950/40 border border-white/10 rounded-2xl px-6 py-4 text-base text-white placeholder-slate-600 focus:outline-none focus:border-cyan-500 focus:ring-1 focus:ring-cyan-500 transition-all box-neon-glow-focus"
                placeholder="John Doe"
              />
            </div>
            <div className="group">
              <label htmlFor="email" className="block text-sm font-mono tracking-wider uppercase text-slate-400 mb-2 group-focus-within:text-cyan-400 transition-colors">Email Address</label>
              <input 
                type="email" 
                id="email" 
                name="email"
                required
                className="w-full bg-slate-950/40 border border-white/10 rounded-2xl px-6 py-4 text-base text-white placeholder-slate-600 focus:outline-none focus:border-cyan-500 focus:ring-1 focus:ring-cyan-500 transition-all box-neon-glow-focus"
                placeholder="john@example.com"
              />
            </div>
            <div className="group flex-1 flex flex-col">
              <label htmlFor="message" className="block text-sm font-mono tracking-wider uppercase text-slate-400 mb-2 group-focus-within:text-cyan-400 transition-colors">Message</label>
              <textarea 
                id="message" 
                name="message"
                required
                className="w-full flex-1 bg-slate-950/40 border border-white/10 rounded-2xl px-6 py-4 text-base text-white placeholder-slate-600 focus:outline-none focus:border-cyan-500 focus:ring-1 focus:ring-cyan-500 transition-all resize-none box-neon-glow-focus min-h-[150px]"
                placeholder="Tell me about your project..."
              ></textarea>
            </div>
            <button 
              type="submit"
              className="group relative mt-2 flex items-center justify-center gap-2 bg-cyan-500 text-slate-950 px-8 py-5 rounded-2xl font-bold transition-all hover:bg-cyan-400 box-neon-glow overflow-hidden"
            >
              <div className="absolute inset-0 bg-white/20 translate-y-full group-hover:translate-y-0 transition-transform duration-300 ease-out" />
              <span className="relative z-10">Send Message</span>
              <Send className="w-5 h-5 relative z-10 group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
            </button>
          </motion.form>
        </div>
      </motion.div>
    </section>
  );
}
