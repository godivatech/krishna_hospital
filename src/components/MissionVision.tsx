"use client";
import { motion } from "framer-motion";
import { Target, Eye } from "lucide-react";

export default function MissionVision() {
  return (
    <section className="py-24 bg-slate-50 relative overflow-hidden">
      {/* Background decorations */}
      <div className="absolute top-0 right-0 w-64 h-64 bg-primary/5 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2 pointer-events-none"></div>
      <div className="absolute bottom-0 left-0 w-64 h-64 bg-accent/5 rounded-full blur-3xl translate-y-1/2 -translate-x-1/2 pointer-events-none"></div>

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        <div className="grid md:grid-cols-2 gap-8 lg:gap-16">
          
          <motion.div 
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="group bg-white p-10 lg:p-12 rounded-3xl shadow-[0_8px_30px_rgb(0,0,0,0.04)] hover:shadow-[0_8px_30px_rgb(0,0,0,0.08)] transition-all duration-300 border-t-4 border-primary relative overflow-hidden"
          >
            <div className="absolute top-0 right-0 p-8 opacity-[0.03] group-hover:scale-110 group-hover:rotate-12 transition-all duration-500 pointer-events-none text-primary">
              <Eye className="w-40 h-40" />
            </div>
            
            <div className="w-16 h-16 bg-primary/10 rounded-2xl flex items-center justify-center mb-8 relative z-10">
              <span className="text-secondary font-serif font-bold text-3xl">V</span>
            </div>
            
            <h3 className="text-3xl font-serif text-primary font-bold mb-4 relative z-10">Our Vision</h3>
            <p className="text-lg text-text-muted leading-relaxed relative z-10">
              To provide safe and advanced healthcare services, ensuring the well-being of our community through continuous innovation and excellence.
            </p>
          </motion.div>

          <motion.div 
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="group bg-white p-10 lg:p-12 rounded-3xl shadow-[0_8px_30px_rgb(0,0,0,0.04)] hover:shadow-[0_8px_30px_rgb(0,0,0,0.08)] transition-all duration-300 border-t-4 border-accent relative overflow-hidden"
          >
            <div className="absolute top-0 right-0 p-8 opacity-[0.03] group-hover:scale-110 group-hover:rotate-12 transition-all duration-500 pointer-events-none text-accent">
              <Target className="w-40 h-40" />
            </div>

            <div className="w-16 h-16 bg-accent/10 rounded-2xl flex items-center justify-center mb-8 relative z-10">
              <span className="text-accent font-serif font-bold text-3xl">M</span>
            </div>

            <h3 className="text-3xl font-serif text-primary font-bold mb-4 relative z-10">Our Mission</h3>
            <p className="text-lg text-text-muted leading-relaxed relative z-10">
              To deliver quality treatment with compassion, focusing on surgery and maternity care, while making healthcare affordable and accessible.
            </p>
          </motion.div>

        </div>
      </div>
    </section>
  );
}
