"use client";
import { motion } from "framer-motion";
import { Star, Quote } from "lucide-react";

export default function Testimonials() {
  const testimonials = [
    { text: "Excellent care and supportive staff.", author: "Anonymous", role: "Maternity / Surgery Patient" },
    { text: "State-of-the-art facilities in Ramanathapuram. The surgical team is incredibly skilled and the recovery process was extremely smooth and comfortable.", author: "R. Krishnan", role: "Surgery Patient" },
    { text: "My father was admitted to the ICU here. The 24/7 care and advanced equipment saved his life. Eternally grateful to the medical staff.", author: "V. Kumar", role: "Family Member" },
    { text: "Very professional environment. The entire team makes you feel safe and comfortable right from the consultation all the way through to treatment.", author: "S. Meena", role: "Patient" },
  ];

  return (
    <section id="testimonials" className="py-32 bg-white relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 mb-16 text-center">
         <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-base font-semibold uppercase tracking-widest text-teal-600 mb-3"
          >
            Patient Stories
          </motion.h2>
          <motion.h3 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-4xl md:text-5xl font-serif text-primary leading-tight"
          >
            Trusted by Thousands
          </motion.h3>
      </div>

      {/* Marquee Container */}
      <div className="relative w-full flex overflow-hidden pt-8 pb-12 group cursor-default">
        {/* We use two inner containers side by side, animated continuously */}
        <div className="flex animate-marquee gap-8 whitespace-nowrap pl-8 group-hover:[animation-play-state:paused]">
          {[...testimonials, ...testimonials].map((t, i) => (
             <div key={i} className="whitespace-normal min-w-[350px] max-w-[400px] w-full bg-[#f8fafc] border border-slate-100 p-8 rounded-3xl shadow-sm hover:shadow-md transition-shadow relative">
                <Quote className="absolute top-6 right-6 w-12 h-12 text-slate-200 -z-0" />
                <div className="flex gap-1 text-yellow-400 mb-6 relative z-10">
                  {[...Array(5)].map((_, idx) => (
                     <Star key={idx} className="w-4 h-4 fill-current" />
                  ))}
                </div>
                <p className="text-text-muted mb-8 relative z-10 text-lg italic leading-relaxed min-h-[120px]">
                  &quot;{t.text}&quot;
                </p>
                <div className="relative z-10 flex items-center gap-4" suppressHydrationWarning>
                   <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center text-primary font-bold font-serif" suppressHydrationWarning>
                     {t.author.charAt(0)}
                   </div>
                   <div suppressHydrationWarning>
                     <p className="font-bold text-primary font-serif">{t.author}</p>
                     <p className="text-sm font-semibold text-teal-600 uppercase tracking-wider">{t.role}</p>
                   </div>
                </div>
             </div>
          ))}
        </div>
        
        {/* Gradients to hide sharp edges */}
        <div className="absolute top-0 bottom-0 left-0 w-12 md:w-32 bg-gradient-to-r from-white to-transparent z-20 pointer-events-none"></div>
        <div className="absolute top-0 bottom-0 right-0 w-12 md:w-32 bg-gradient-to-l from-white to-transparent z-20 pointer-events-none"></div>
      </div>
    </section>
  );
}
