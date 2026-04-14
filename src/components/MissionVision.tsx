"use client";
import { motion } from "framer-motion";
import { useState } from "react";
import { Target, Eye, Sparkles, HeartPulse } from "lucide-react";

export default function MissionVision() {
  const [hovered, setHovered] = useState<"vision" | "mission" | null>(null);

  return (
    <section className="py-24 bg-[var(--background)] relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-6">
        
        <div className="text-center mb-16">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-accent/5 text-accent text-sm font-semibold uppercase tracking-widest mb-4 border border-accent/10"
          >
            <Sparkles className="w-4 h-4" />
            <span>Discover Our Core</span>
          </motion.div>
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-4xl md:text-5xl font-serif text-primary leading-tight mb-6 text-center"
          >
            Our Driving Force
          </motion.h2>
        </div>

        {/* Interactive Accordion Container */}
        <motion.div 
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7, ease: "easeOut" }}
          className="flex flex-col md:flex-row min-h-[600px] w-full rounded-[2.5rem] overflow-hidden shadow-2xl"
        >
          {/* Vision Panel - Maroon */}
          <div 
            onMouseEnter={() => setHovered("vision")}
            onMouseLeave={() => setHovered(null)}
            onFocus={() => setHovered("vision")}
            onBlur={() => setHovered(null)}
            tabIndex={0}
            className={`group relative flex flex-col justify-end p-8 md:p-14 transition-all duration-[800ms] ease-[cubic-bezier(0.25,1,0.5,1)] cursor-pointer outline-none
              ${hovered === "vision" ? "md:flex-[1.5]" : hovered === "mission" ? "md:flex-[0.8]" : "md:flex-1"}
              flex-1 min-h-[300px] overflow-hidden
            `}
          >
            <div className="absolute inset-0 bg-gradient-to-br from-[#800020] to-[#4A0012] transition-transform duration-1000 group-hover:scale-105"></div>
            
            {/* Massive watermark icon */}
            <div className="absolute -top-24 -right-24 text-white/5 transition-transform duration-1000 group-hover:scale-110 group-hover:-translate-x-10 group-hover:rotate-12 pointer-events-none">
               <Eye className="w-96 h-96" />
            </div>

            <div className="relative z-10 w-full md:max-w-xl text-center md:text-left">
              <div className="w-16 h-16 bg-white/10 backdrop-blur-md rounded-2xl flex items-center justify-center mb-8 border border-white/20 transform transition-transform duration-700 group-hover:-translate-y-2 mx-auto md:mx-0">
                <Eye className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-4xl md:text-5xl font-serif font-bold text-white mb-6">Our Vision</h3>
              <p className="text-lg md:text-xl text-white/80 leading-relaxed font-light transition-opacity duration-700 delay-100">
                To provide safe and advanced healthcare services, ensuring the well-being of our community through continuous innovation and excellence.
              </p>
            </div>
          </div>

          {/* Mission Panel - Teal */}
          <div 
            onMouseEnter={() => setHovered("mission")}
            onMouseLeave={() => setHovered(null)}
            onFocus={() => setHovered("mission")}
            onBlur={() => setHovered(null)}
            tabIndex={0}
            className={`group relative flex flex-col justify-end p-8 md:p-14 transition-all duration-[800ms] ease-[cubic-bezier(0.25,1,0.5,1)] cursor-pointer outline-none
              ${hovered === "mission" ? "md:flex-[1.5]" : hovered === "vision" ? "md:flex-[0.8]" : "md:flex-1"}
              flex-1 min-h-[300px] overflow-hidden
            `}
          >
            <div className="absolute inset-0 bg-gradient-to-br from-[#24A8AC] to-[#1a7e81] transition-transform duration-1000 group-hover:scale-105"></div>
            
            {/* Massive watermark icon */}
            <div className="absolute -top-24 -right-24 text-white/10 transition-transform duration-1000 group-hover:scale-110 group-hover:-translate-x-10 group-hover:-rotate-12 pointer-events-none">
               <Target className="w-96 h-96" />
            </div>

            <div className="relative z-10 w-full md:max-w-xl text-center md:text-left">
              <div className="w-16 h-16 bg-white/20 backdrop-blur-md rounded-2xl flex items-center justify-center mb-8 border border-white/30 transform transition-transform duration-700 group-hover:-translate-y-2 mx-auto md:mx-0">
                <HeartPulse className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-4xl md:text-5xl font-serif font-bold text-white mb-6">Our Mission</h3>
              <p className="text-lg md:text-xl text-white/90 leading-relaxed font-light transition-opacity duration-700 delay-100">
                To deliver quality treatment with compassion, focusing on surgery and maternity care, while making healthcare affordable and accessible.
              </p>
            </div>
          </div>

        </motion.div>
      </div>
    </section>
  );
}
