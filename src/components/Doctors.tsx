"use client";
import { motion } from "framer-motion";
import { Phone, Activity } from "lucide-react";
import Image from "next/image";

export default function Doctors() {
  const doctors = [
    { 
      name: "Dr. Dinesh Mukil", 
      role: "Surgical Gastroenterologist", 
      desc: "MBBS., MS., FIAGES., FALS.", 
      img: "/dr-dinesh-mukil.png" 
    },
    { 
      name: "Dr. Nandhini Dinesh Mukil", 
      role: "Obstetrician & Gynaecologist", 
      desc: "MBBS., MS(OG)., DNB(OG)., MRCOG(UK)., FMAS.", 
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
              Healing Hands, Exceptional Expertise
            </motion.h3>
          </div>
        </div>

        <div className="grid lg:grid-cols-2 gap-12">
          {doctors.map((doc, idx) => (
            <motion.div 
              key={idx}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.2 }}
              className="group flex flex-col md:flex-row gap-8 items-center md:items-stretch p-8 rounded-[2.5rem] bg-white/[0.07] backdrop-blur-xl border border-white/10 hover:border-teal-400/40 transition-all duration-500 hover:shadow-[0_20px_50px_rgba(0,0,0,0.3)] relative overflow-hidden"
            >
              {/* Decorative background glow for hover */}
              <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-br from-teal-400/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none"></div>

               <div className="w-full md:w-72 aspect-square rounded-3xl overflow-hidden relative border border-white/10 group-hover:border-teal-400/30 transition-all duration-500 shadow-2xl ring-1 ring-white/5">
                 <Image
                   src={doc.img}
                   alt={doc.name}
                   fill
                   className="object-cover group-hover:scale-110 transition-transform duration-1000 ease-in-out"
                   sizes="(max-width: 768px) 100vw, 288px"
                   priority={idx === 0}
                 />
                 <div className="absolute inset-0 bg-gradient-to-t from-primary-deep/80 via-primary-deep/20 to-transparent opacity-80 group-hover:opacity-60 transition-opacity duration-500"></div>
                 
                 {/* Decorative Overlay */}
                 <div className="absolute bottom-6 left-6 right-6 z-20">
                    <div className="flex items-center gap-2.5 bg-primary-deep/40 backdrop-blur-md px-3 py-1.5 rounded-full w-fit border border-white/10">
                      <span className="w-2 h-2 rounded-full bg-teal-400 shadow-[0_0_8px_rgba(45,212,191,0.8)] animate-pulse"></span>
                      <span className="text-[10px] uppercase tracking-[0.2em] font-bold text-teal-50">Senior Specialist</span>
                    </div>
                 </div>
               </div>
               
               <div className="flex flex-col flex-1 py-4 relative z-10">
                  <div className="mb-auto text-center md:text-left">
                    <h4 className="text-3xl font-serif font-bold mb-3 text-white group-hover:text-teal-200 transition-colors tracking-tight">{doc.name}</h4>
                    <p className="text-teal-200 text-lg font-semibold mb-5 flex items-center justify-center md:justify-start gap-2.5">
                      <span className="p-1.5 bg-teal-400/10 rounded-lg">
                        <Activity className="w-4 h-4 text-teal-300" />
                      </span>
                      {doc.role}
                    </p>
                    <div className="h-[2px] w-12 bg-gradient-to-r from-teal-400/50 to-transparent mb-6 mx-auto md:mx-0"></div>
                    <p className="text-slate-200/90 leading-relaxed text-base mb-10 font-medium italic">
                      {doc.desc}
                    </p>
                  </div>
                  
                  <div className="flex flex-col sm:flex-row gap-4">
                    <a 
                      href="tel:9789223246" 
                      className="flex-1 inline-flex items-center justify-center gap-2.5 bg-gradient-to-r from-accent to-accent-light text-white px-8 py-4.5 rounded-2xl hover:shadow-xl hover:shadow-accent/30 transition-all duration-300 font-bold tracking-wide active:scale-95 group/btn"
                    >
                      <Phone className="w-4 h-4 group-hover/btn:rotate-12 transition-transform" />
                      <span>Consult Now</span>
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
