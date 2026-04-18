"use client";
import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";
import Image from "next/image";
import { Award, Clock, Users, Building2 } from "lucide-react";

export default function About() {
  const containerRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end start"]
  });

  const y1 = useTransform(scrollYProgress, [0, 1], [100, -100]);
  const y2 = useTransform(scrollYProgress, [0, 1], [-100, 100]);

  const stats = [
    { icon: Building2, label: "Est. 2021", value: "Modern Facility" },
    { icon: Users, label: "Patients", value: "10k+ Treated" },
    { icon: Award, label: "Excellence", value: "TNCEA Reg." },
    { icon: Clock, label: "Emergency", value: "24/7 Open" },
  ];

  return (
    <section id="about" ref={containerRef} className="py-32 relative bg-[var(--background)] overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 grid lg:grid-cols-2 gap-16 items-center">
        
        {/* Left Side: Text Content */}
        <motion.div
           initial={{ opacity: 0, x: -50 }}
           whileInView={{ opacity: 1, x: 0 }}
           transition={{ duration: 0.8, ease: "easeOut" }}
           viewport={{ once: true, margin: "-100px" }}
        >
          <h2 className="text-base font-semibold uppercase tracking-widest text-teal-600 mb-3">Who We Are</h2>
          <h3 className="text-4xl md:text-5xl font-serif text-primary leading-tight mb-6">
            A Legacy of Care and Compassion
          </h3>
          <p className="text-lg text-text-muted mb-10 leading-relaxed">
            Established in 2021 in Ramanathapuram, Krishna Hospital aims to provide the <span className="font-semibold text-primary">highest standards</span> of surgical and maternity care. With a strong focus on <span className="font-semibold text-primary">maternal and child care</span> along with general and <span className="font-semibold text-primary">laparoscopic surgeries</span>, the hospital is committed to delivering compassionate, affordable, and <span className="font-semibold text-primary">high-quality healthcare</span>.
          </p>

          <div className="grid grid-cols-2 gap-x-8 gap-y-10">
            {stats.map((stat, idx) => (
              <div key={idx} className="flex gap-4 items-start group">
                 <div className="w-12 h-12 rounded-2xl bg-teal-50 flex items-center justify-center shrink-0 group-hover:bg-teal-100 transition-colors">
                   <stat.icon className="w-6 h-6 text-teal-600" />
                 </div>
                 <div>
                   <div className="font-serif font-bold text-xl text-primary mb-1">{stat.value}</div>
                   <div className="text-base text-text-muted leading-tight">{stat.label}</div>
                 </div>
              </div>
            ))}
          </div>
        </motion.div>

        {/* Right Side: Parallax Images */}
        <div className="relative h-[600px] hidden lg:block">
           <motion.div style={{ y: y1 }} className="absolute top-0 right-0 w-[60%] h-[70%] rounded-3xl overflow-hidden shadow-2xl z-10">
              <Image 
                src="/advanced_setup_v2.png" 
                alt="Advanced Medical Setup" 
                fill
                className="object-cover"
              />
              <div className="absolute inset-0 bg-primary/5 hover:bg-transparent transition-colors duration-500"></div>
           </motion.div>
           
           <motion.div style={{ y: y2 }} className="absolute bottom-10 left-0 w-[55%] h-[60%] rounded-3xl overflow-hidden shadow-xl border-8 border-white z-20">
              <Image 
               src="/expert_care_v4.png" 
               alt="Expert Medical Care" 
               fill
               className="object-cover"
              />
              <div className="absolute inset-0 bg-teal-600/5 hover:bg-transparent transition-colors duration-500"></div>
           </motion.div>
        </div>
        
      </div>
    </section>
  );
}
