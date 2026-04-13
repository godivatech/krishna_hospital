"use client";
import { motion, Variants } from "framer-motion";
import { ArrowRight, Activity, Heart, ShieldPlus, Phone } from "lucide-react";

export default function Hero() {
  const containerVariants: Variants = {
    hidden: { opacity: 0 },
    visible: { 
      opacity: 1,
      transition: { staggerChildren: 0.15, delayChildren: 0.4 }
    }
  };

  const itemVariants: Variants = {
    hidden: { opacity: 0, y: 30 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.8, ease: "easeOut" } }
  };

  return (
    <section className="relative min-h-[100svh] flex items-center pt-20 overflow-hidden bg-background">
      {/* Abstract Background Shapes */}
      <div className="absolute top-0 right-0 w-[800px] h-[800px] bg-primary/5 rounded-full blur-3xl -translate-y-1/2 translate-x-1/3 pointer-events-none" />
      <div className="absolute bottom-0 left-0 w-[600px] h-[600px] bg-accent/5 rounded-full blur-3xl translate-y-1/3 -translate-x-1/3 pointer-events-none" />
      
      <div className="max-w-7xl mx-auto px-6 w-full relative z-10 grid lg:grid-cols-2 gap-12 lg:gap-8 items-center">
        <motion.div 
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          className="max-w-2xl py-12 lg:py-0"
        >
          <motion.div variants={itemVariants} className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/5 text-primary text-sm font-medium mb-6">
            <Activity className="w-4 h-4" />
            <span>TNCEA Registered Excellence</span>
          </motion.div>
          
          <motion.h1 variants={itemVariants} className="text-5xl md:text-7xl font-serif text-primary leading-[1.1] mb-6">
            Advanced Surgery, <br />
            <span className="text-gradient">Safe Motherhood.</span>
          </motion.h1>
          
          <motion.p variants={itemVariants} className="text-lg md:text-xl text-text-muted mb-8 leading-relaxed max-w-xl">
            Ramanathapuram&apos;s trusted multi-specialty hospital for over 3 years. We bring advanced surgical excellence and compassionate maternity care together under one roof. Equipped with advanced ICU & NICU facilities to ensure the safest treatment.
          </motion.p>
          
          <motion.div variants={itemVariants} className="flex flex-wrap items-center gap-4">
            <a href="#departments" className="flex items-center justify-center gap-2 bg-primary text-white px-8 py-4 rounded-full font-medium hover:bg-primary-light transition-all shadow-xl hover:shadow-2xl hover:-translate-y-1 w-full sm:w-auto">
              Our Services
              <ArrowRight className="w-4 h-4" />
            </a>
            <a href="tel:9789223246" className="flex items-center justify-center gap-2 bg-white text-primary border border-primary/20 px-8 py-4 rounded-full font-medium hover:bg-primary/5 transition-all w-full sm:w-auto group">
              <Phone className="w-4 h-4 group-hover:scale-110 transition-transform" />
              Book Appointment
            </a>
          </motion.div>

          <motion.div variants={itemVariants} className="mt-12 grid grid-cols-2 gap-6 sm:gap-12">
            <div className="flex items-start gap-4">
              <div className="w-12 h-12 rounded-2xl bg-accent/10 flex items-center justify-center shrink-0">
                <ShieldPlus className="w-6 h-6 text-accent" />
              </div>
              <div>
                <h4 className="font-serif font-bold text-primary text-lg">Expert Care</h4>
                <p className="text-sm text-text-muted mt-1 leading-snug">Specialized surgical & maternity experts</p>
              </div>
            </div>
            <div className="flex items-start gap-4">
              <div className="w-12 h-12 rounded-2xl bg-accent/10 flex items-center justify-center shrink-0">
                <Heart className="w-6 h-6 text-accent" />
              </div>
              <div>
                <h4 className="font-serif font-bold text-primary text-lg">Modern ICU/NICU</h4>
                <p className="text-sm text-text-muted mt-1 leading-snug">Advanced critical care facilities</p>
              </div>
            </div>
          </motion.div>
        </motion.div>

        {/* Hero Visual Element */}
        <motion.div 
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1, delay: 0.6, ease: [0.22, 1, 0.36, 1] }}
          className="relative h-[600px] hidden lg:block"
        >
          <div className="absolute inset-0 bg-primary rounded-[2.5rem] overflow-hidden">
            <div className="absolute inset-0 bg-gradient-to-br from-primary to-primary-light" />
            <div className="absolute inset-0 opacity-10 mix-blend-overlay" style={{ backgroundImage: 'radial-gradient(circle at 2px 2px, white 2px, transparent 0)', backgroundSize: '40px 40px' }} />
            <div className="absolute inset-0 flex items-center justify-center">
               <div className="w-64 h-64 rounded-full border border-white/10 flex items-center justify-center">
                 <div className="w-48 h-48 rounded-full border border-white/20 flex items-center justify-center">
                   <div className="w-32 h-32 rounded-full border border-white/30 flex items-center justify-center bg-white/5 backdrop-blur-xl">
                      <div className="text-white font-serif italic font-bold text-7xl">K</div>
                   </div>
                 </div>
               </div>
            </div>
          </div>
          
          {/* Floating Elements */}
          <motion.div 
            animate={{ y: [0, -20, 0] }}
            transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }}
            className="absolute top-12 -left-12 glass p-6 rounded-2xl shadow-xl flex items-center gap-4"
          >
            <div className="w-12 h-12 bg-white rounded-full flex items-center justify-center shadow-md">
              <Activity className="w-6 h-6 text-accent" />
            </div>
            <div>
              <p className="text-xs text-text-muted font-medium uppercase tracking-wider">Est. 2022</p>
              <p className="font-serif font-bold text-primary">Trusted Care</p>
            </div>
          </motion.div>

          <motion.div 
            animate={{ y: [0, 20, 0] }}
            transition={{ duration: 6, repeat: Infinity, ease: "easeInOut", delay: 1 }}
            className="absolute bottom-24 -right-12 glass p-6 rounded-2xl shadow-xl flex items-center gap-4"
          >
            <div className="w-12 h-12 bg-white rounded-full flex items-center justify-center shadow-md">
              <Heart className="w-6 h-6 text-accent" />
            </div>
            <div>
              <p className="font-serif font-bold text-primary">24/7 Emergency</p>
              <p className="text-xs text-text-muted font-medium mt-0.5">Always ready to help</p>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
