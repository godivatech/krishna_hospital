"use client";
import { motion } from "framer-motion";
import { ArrowRight, Phone, Activity } from "lucide-react";
import Image from "next/image";

export default function Doctors() {
  const doctors = [
    { 
      name: "Dr. N. Dinesh Mukil", 
      role: "Laparoscopic & General Surgery", 
      desc: "MBBS, MS, FIAGES, FAGIE, FALS", 
      img: "/dr-dinesh-mukil.png" 
    },
    { 
      name: "Dr. P. Nandhini", 
      role: "Obstetrics & Gynecology", 
      desc: "MBBS, MS (OG)", 
      img: "/dr-nandhini.png" 
    },
  ];

  return (
    <section id="doctors" className="py-32 bg-primary text-white relative overflow-hidden">
      {/* Background decorations */}
      <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-white/5 rounded-full blur-3xl -translate-y-1/2 translate-x-1/3 pointer-events-none"></div>
      <div className="absolute bottom-0 left-0 w-[400px] h-[400px] bg-teal-400/10 rounded-full blur-3xl translate-y-1/2 -translate-x-1/2 pointer-events-none"></div>
      
      <div className="max-w-7xl mx-auto px-6 relative z-10">
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-20 gap-8">
          <div className="max-w-2xl">
            <motion.h2 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-base font-semibold uppercase tracking-widest text-teal-200 mb-3"
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
              Meet Our Board Certified Specialists
            </motion.h3>
          </div>
          <motion.a 
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            href="#contact" 
            className="inline-flex items-center gap-2 group text-teal-200 hover:text-white transition-colors pb-2 border-b border-teal-200/30 hover:border-white shrink-0"
          >
            <span>View All Doctors</span>
            <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
          </motion.a>
        </div>

        <div className="grid lg:grid-cols-2 gap-12">
          {doctors.map((doc, idx) => (
            <motion.div 
              key={idx}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.2 }}
              className="group flex flex-col md:flex-row gap-8 items-center md:items-stretch p-8 rounded-[2rem] bg-white/[0.03] border border-white/10 hover:bg-white/[0.05] transition-all duration-500 hover:shadow-2xl hover:shadow-primary-deep/50"
            >
               <div className="w-full md:w-72 aspect-square rounded-2xl overflow-hidden relative border border-white/10 group-hover:border-teal-400/30 transition-colors duration-500 shadow-xl">
                 <Image
                   src={doc.img}
                   alt={doc.name}
                   fill
                   className="object-cover group-hover:scale-105 transition-transform duration-700 ease-in-out"
                   sizes="(max-width: 768px) 100vw, 288px"
                   priority={idx === 0}
                 />
                 <div className="absolute inset-0 bg-gradient-to-t from-primary/60 via-transparent to-transparent opacity-60"></div>
                 
                 {/* Decorative Overlay */}
                 <div className="absolute bottom-4 left-4 right-4 z-20">
                    <div className="flex items-center gap-2">
                      <span className="w-2 h-2 rounded-full bg-teal-400 animate-pulse"></span>
                      <span className="text-[10px] uppercase tracking-widest font-bold text-white/80">Senior Specialist</span>
                    </div>
                 </div>
               </div>
               
               <div className="flex flex-col flex-1 py-2">
                  <div className="mb-auto text-center md:text-left">
                    <h4 className="text-3xl font-serif font-bold mb-2 text-white group-hover:text-teal-200 transition-colors">{doc.name}</h4>
                    <p className="text-teal-400 text-lg font-medium mb-4 flex items-center justify-center md:justify-start gap-2">
                      <Activity className="w-4 h-4" />
                      {doc.role}
                    </p>
                    <div className="h-px w-12 bg-teal-400/30 mb-6 mx-auto md:mx-0"></div>
                    <p className="text-slate-300 leading-relaxed text-base mb-8 italic">
                      {doc.desc}
                    </p>
                  </div>
                  
                  <div className="flex flex-col sm:flex-row gap-4">
                    <a href="tel:9789223246" className="flex-1 inline-flex items-center justify-center gap-2 bg-accent text-white px-6 py-4 rounded-xl hover:bg-accent-light transition-all font-semibold shadow-lg hover:shadow-accent/40 hover:-translate-y-0.5">
                      <Phone className="w-4 h-4" />
                      Consult Now
                    </a>
                  </div>
               </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
