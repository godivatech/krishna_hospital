"use client";
import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Image from "next/image";
import { ArrowRight, Calendar, ChevronLeft, ChevronRight, Activity } from "lucide-react";
import BookAppointmentModal from "./BookAppointmentModal";

export default function Hero() {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [isModalOpen, setIsModalOpen] = useState(false);

  const slides = [
    {
      title: "Advanced Surgery &",
      subtitle: "Maternity Care",
      description: "Ramanathapuram's trusted multi-specialty hospital. We bring surgical excellence and compassionate maternity care together under one roof.",
      image: "/banner_1.png",
      accent: "text-teal-200"
    },
    {
      title: "Healing hands,",
      subtitle: "Caring hearts",
      description: "Always ready to help. Our dedicated emergency department handles critical situations round the clock with expert specialists.",
      image: "/banner_2.png",
      accent: "text-teal-200"
    },
    {
      title: "Advanced",
      subtitle: "ICU & NICU",
      description: "Providing the highest level of critical care and advanced life support for adult and neonatal patients in a safe environment.",
      image: "/banner_3.png",
      accent: "text-teal-400"
    }
  ];

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % slides.length);
    }, 6000);
    return () => clearInterval(timer);
  }, [slides.length]);

  const nextSlide = () => setCurrentSlide((prev) => (prev + 1) % slides.length);
  const prevSlide = () => setCurrentSlide((prev) => (prev - 1 + slides.length) % slides.length);

  return (
    <section className="relative min-h-[100svh] flex items-center overflow-hidden bg-primary-deep">
      <AnimatePresence mode="wait">
        <motion.div
          key={currentSlide}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 1, ease: "easeInOut" }}
          className="absolute inset-0 z-0"
        >
          <Image
            src={slides[currentSlide].image}
            alt="Hospital Banner"
            fill
            className="object-cover"
            priority
          />
          {/* Enhanced Dark Overlay for Text Readability */}
          <div className="absolute inset-0 bg-gradient-to-r from-primary-deep/90 via-primary-deep/60 to-transparent z-10" />
          <div className="absolute inset-0 bg-primary-deep/30 z-10" />
          
          {/* Refined Mesh Gradient Overlays */}
          <div className="absolute inset-0 opacity-30 mix-blend-soft-light z-20" 
               style={{ 
                 backgroundImage: `radial-gradient(circle at 20% 30%, var(--accent) 0%, transparent 40%), 
                                   radial-gradient(circle at 80% 70%, var(--accent-light) 0%, transparent 40%)` 
               }} 
          />
          
          <div className="absolute inset-0 opacity-5 z-20" 
               style={{ backgroundImage: 'radial-gradient(circle at 2px 2px, white 1px, transparent 0)', backgroundSize: '48px 48px' }} 
          />
        </motion.div>
      </AnimatePresence>

      <div className="max-w-7xl mx-auto px-6 w-full relative z-30 py-32 mt-16 lg:mt-0">
        <div className="max-w-[1000px]">
          <AnimatePresence mode="wait">
            <motion.div
              key={currentSlide}
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -30 }}
              transition={{ duration: 0.8, ease: "easeOut" }}
            >
              <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/10 text-white backdrop-blur-md mb-8 border border-white/10 shadow-lg">
                <Activity className="w-4 h-4 text-teal-300" />
                <span className="text-base font-medium tracking-wide">TNCEA Registered Excellence</span>
              </div>

              <h1 className="text-4xl md:text-5xl lg:text-7xl font-serif text-white leading-[1.2] mb-6">
                {slides[currentSlide].title} <span className={slides[currentSlide].accent}>{slides[currentSlide].subtitle}</span>
              </h1>

              <p className="text-lg md:text-xl text-white/90 mb-10 leading-relaxed max-w-xl">
                {slides[currentSlide].description}
              </p>

              <div className="flex flex-wrap items-center gap-4">
                <button
                  onClick={() => setIsModalOpen(true)}
                  className="flex items-center justify-center gap-2 bg-accent text-white px-8 py-4 rounded-full font-semibold hover:bg-accent-light transition-all w-full sm:w-auto shadow-xl hover:shadow-accent/40 hover:-translate-y-1 group"
                >
                  <Calendar className="w-4 h-4 group-hover:scale-110 transition-transform" />
                  Book Appointment
                </button>
                <a href="#departments" className="flex items-center justify-center gap-2 bg-white/10 backdrop-blur-md text-white border border-white/20 px-8 py-4 rounded-full font-medium hover:bg-white/20 transition-all w-full sm:w-auto">
                  Our Services
                  <ArrowRight className="w-4 h-4 ml-1" />
                </a>
              </div>
            </motion.div>
          </AnimatePresence>
        </div>
      </div>

      {/* Slider Controls */}
      <div className="absolute bottom-10 left-6 md:left-auto md:right-10 z-40 flex items-center justify-center md:justify-start gap-6 w-[calc(100%-3rem)] md:w-auto mt-8 md:mt-0">
        <button
          onClick={prevSlide}
          className="w-12 h-12 rounded-full border border-white/20 flex items-center justify-center text-white hover:bg-white/10 backdrop-blur-sm transition-colors shrink-0 focus:outline-none focus:ring-2 focus:ring-white/50"
          aria-label="Previous slide"
        >
          <ChevronLeft className="w-5 h-5" />
        </button>
        <div className="flex gap-3">
          {slides.map((_, idx) => (
            <button
              key={idx}
              onClick={() => setCurrentSlide(idx)}
              className={`h-2 rounded-full transition-all duration-500 focus:outline-none ${currentSlide === idx ? "w-10 bg-white" : "w-3 bg-white/30 hover:bg-white/50"
                }`}
              aria-label={`Go to slide ${idx + 1}`}
            />
          ))}
        </div>
        <button
          onClick={nextSlide}
          className="w-12 h-12 rounded-full border border-white/20 flex items-center justify-center text-white hover:bg-white/10 backdrop-blur-sm transition-colors shrink-0 focus:outline-none focus:ring-2 focus:ring-white/50"
          aria-label="Next slide"
        >
          <ChevronRight className="w-5 h-5" />
        </button>
      </div>

      <BookAppointmentModal isOpen={isModalOpen} onClose={() => setIsModalOpen(false)} />
    </section>
  );
}
