"use client";
import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";

export default function Doctors() {
  const doctors = [
    { name: "Dr. N. Dinesh Mukil", role: "Laparoscopic & General Surgery", desc: "MBBS, MS, FIAGES, FAGIE, FALS", img: "DM" },
    { name: "Dr. P. Nandhini", role: "Obstetrics & Gynecology", desc: "MBBS, MS (OG)", img: "PN" },
  ];

  return (
    <section id="doctors" className="py-32 bg-primary text-white relative overflow-hidden">
      {/* Background decorations */}
      <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-white/5 rounded-full blur-3xl -translate-y-1/2 translate-x-1/3 pointer-events-none"></div>
      <div className="absolute bottom-0 left-0 w-[400px] h-[400px] bg-accent/10 rounded-full blur-3xl translate-y-1/2 -translate-x-1/2 pointer-events-none"></div>
      
      <div className="max-w-7xl mx-auto px-6 relative z-10">
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-20 gap-8">
          <div className="max-w-2xl">
            <motion.h2 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-sm font-semibold uppercase tracking-widest text-accent-light mb-3"
            >
              Our Experts
            </motion.h2>
            <motion.h3 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}
              className="text-4xl md:text-5xl font-serif leading-tight text-white mb-6"
            >
              Meet Our Board <br /> Certified Specialists
            </motion.h3>
          </div>
          <motion.a 
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            href="#contact" 
            className="inline-flex items-center gap-2 group text-accent-light hover:text-white transition-colors pb-2 border-b border-accent-light/30 hover:border-white shrink-0"
          >
            <span>View All Doctors</span>
            <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
          </motion.a>
        </div>

        <div className="grid md:grid-cols-2 gap-8">
          {doctors.map((doc, idx) => (
            <motion.div 
              key={idx}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.1 }}
              className="group flex flex-col sm:flex-row gap-6 items-center sm:items-start p-6 rounded-3xl bg-white/5 border border-white/10 hover:bg-white/10 transition-colors"
            >
               <div className="w-32 h-32 rounded-2xl bg-white/10 shrink-0 overflow-hidden relative border border-white/5">
                 {/* Image Placeholder */}
                 <div className="absolute inset-0 flex items-center justify-center text-white/50 font-serif font-bold text-4xl group-hover:scale-110 transition-transform duration-500">{doc.img}</div>
               </div>
               <div className="text-center sm:text-left">
                  <h4 className="text-2xl font-serif font-bold mb-1">{doc.name}</h4>
                  <p className="text-accent-light text-sm font-medium mb-4">{doc.role}</p>
                  <p className="text-slate-300 leading-relaxed text-sm mb-6">{doc.desc}</p>
                  <a href="tel:9789223246" className="inline-flex text-sm border border-white/20 px-5 py-2.5 rounded-full hover:bg-white hover:text-primary transition-all font-medium group-hover:shadow-lg">
                    Book Appointment
                  </a>
               </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
