"use client";
import { motion } from "framer-motion";
import { Stethoscope, FileHeart, Activity, Baby, Pill, ShieldPlus, Syringe, Dna, Ear, Flame, Heart, HeartPulse, Brain } from "lucide-react";

export default function Departments() {
  const departments = [
    { name: "Pregnancy Care", icon: Baby, desc: "Expert pregnancy and delivery care for a safe journey." },
    { name: "High risk Pregnancy", icon: FileHeart, desc: "Specialized care for complex and high-risk pregnancies." },
    { name: "Gastro & General Surgery", icon: Syringe, desc: "Comprehensive gastrointestinal and general surgical procedures." },
    { name: "Laparoscopic Surgery", icon: Activity, desc: "Advanced minimally invasive surgical techniques." },
    { name: "Cancer Surgery", icon: Pill, desc: "Specialized surgical treatment and oncology care." },
    { name: "Pediatric & Neonatal Care", icon: Baby, desc: "Specialized healthcare for children and intensive care for newborns." },
    { name: "Infertility", icon: Dna, desc: "Advanced fertility solutions and compassionate support." },
    { name: "Orthopaedics", icon: FileHeart, desc: "Expert bone, joint, and musculoskeletal care." },
    { name: "Emergency & Trauma", icon: ShieldPlus, desc: "24/7 critical care and trauma support for emergencies." },
    { name: "Urology & Nephrology", icon: Stethoscope, desc: "Dedicated care for kidney and urinary tract health." },
    { name: "Plastic Surgery", icon: HeartPulse, desc: "Advanced reconstructive and aesthetic surgical procedures." },
    { name: "Neurosurgery", icon: Brain, desc: "Advanced surgical care for brain, spine, and nervous system disorders." },
    { name: "ICU services", icon: ShieldPlus, desc: "24/7 intensive care monitoring and support for critically ill patients." }
  ];

  return (
    <section id="departments" className="py-32 bg-[var(--background)] relative">
      <div className="max-w-7xl mx-auto px-6">

        <div className="text-center max-w-2xl mx-auto mb-20">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-base font-semibold uppercase tracking-widest text-teal-600 mb-3"
          >
            Capabilities
          </motion.h2>
          <motion.h3
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-4xl md:text-5xl font-serif text-primary leading-tight mb-6"
          >
            Specialized Departments
          </motion.h3>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="text-lg text-text-muted"
          >
            With 13 recognized departments, our team of experts provides comprehensive care across a wide range of medical specialties ensuring swift recovery.
          </motion.p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {departments.map((dept, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.05 }}
              whileHover={{ y: -8 }}
              className="bg-white p-8 rounded-3xl shadow-sm hover:shadow-xl hover:shadow-teal-900/5 transition-all border border-slate-100 group relative overflow-hidden"
            >
              <div className="absolute top-0 right-0 p-8 opacity-0 group-hover:opacity-5 transition-opacity duration-500 pointer-events-none transform translate-x-4 -translate-y-4">
                <dept.icon className="w-32 h-32 text-teal-600" />
              </div>
              <div className="w-14 h-14 rounded-2xl bg-teal-50 flex items-center justify-center mb-6 group-hover:bg-teal-600 transition-colors duration-300 relative z-10">
                <dept.icon className="w-7 h-7 text-teal-600 group-hover:text-white transition-colors duration-300" />
              </div>
              <h4 className="text-xl font-serif font-bold text-primary mb-3 relative z-10">{dept.name}</h4>
              <p className="text-text-muted text-lg leading-relaxed relative z-10">{dept.desc}</p>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
}
