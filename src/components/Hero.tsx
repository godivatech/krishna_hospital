"use client";
import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
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
      bgColors: "from-primary to-primary-light",
      accent: "text-accent-light"
    },
    {
      title: "24/7 Emergency",
      subtitle: "Care",
      description: "Always ready to help. Our dedicated emergency department handles critical situations round the clock with expert specialists.",
      bgColors: "from-[#2D1A22] to-primary",
      accent: "text-accent"
    },
    {
      title: "State-of-the-Art",
      subtitle: "ICU & NICU",
      description: "Providing the highest level of critical care and advanced life support for adult and neonatal patients in a safe environment.",
      bgColors: "from-[#1a0f14] to-[#4A162B]",
      accent: "text-accent-light"
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
    <section className="relative min-h-[100svh] flex items-center overflow-hidden bg-[#2D1A22]">
      <AnimatePresence mode="wait">
        <motion.div
          key={currentSlide}
          initial={{ opacity: 0, scale: 1.05 }}
          animate={{ opacity: 1, scale: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 1.2, ease: "easeInOut" }}
          className={`absolute inset-0 bg-gradient-to-br ${slides[currentSlide].bgColors} z-0`}
        >
          {/* Abstract grid pattern or overlay */}
          <div className="absolute inset-0 opacity-10 mix-blend-overlay" style={{ backgroundImage: 'radial-gradient(circle at 2px 2px, white 2px, transparent 0)', backgroundSize: '40px 40px' }} />

          {/* Abstract shapes matching the theme */}
          <div className="absolute top-0 right-0 w-[800px] h-[800px] bg-white/5 rounded-full blur-3xl -translate-y-1/2 translate-x-1/3 pointer-events-none" />
          <div className="absolute bottom-0 left-0 w-[600px] h-[600px] bg-white/5 rounded-full blur-3xl translate-y-1/3 -translate-x-1/3 pointer-events-none" />
        </motion.div>
      </AnimatePresence>

      <div className="max-w-7xl mx-auto px-6 w-full relative z-10 py-32 mt-16 lg:mt-0">
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
                <Activity className="w-4 h-4 text-accent" />
                <span className="text-sm font-medium tracking-wide">TNCEA Registered Excellence</span>
              </div>

              <h1 className="text-4xl md:text-5xl lg:text-7xl font-serif text-white leading-[1.2] mb-6 whitespace-nowrap">
                {slides[currentSlide].title} <span className={slides[currentSlide].accent}>{slides[currentSlide].subtitle}</span>
              </h1>

              <p className="text-lg md:text-xl text-white/80 mb-10 leading-relaxed max-w-xl">
                {slides[currentSlide].description}
              </p>

              <div className="flex flex-wrap items-center gap-4">
                <a href="#departments" className="flex items-center justify-center gap-2 bg-white text-primary px-8 py-4 rounded-full font-medium hover:bg-white/90 transition-all w-full sm:w-auto shadow-xl hover:shadow-2xl hover:-translate-y-1">
                  Our Services
                  <ArrowRight className="w-4 h-4" />
                </a>
                <button 
                  onClick={() => setIsModalOpen(true)}
                  className="flex items-center justify-center gap-2 bg-white/10 backdrop-blur-md text-white border border-white/20 px-8 py-4 rounded-full font-medium hover:bg-white/20 transition-all w-full sm:w-auto group"
                >
                  <Calendar className="w-4 h-4 group-hover:scale-110 transition-transform" />
                  Book Appointment
                </button>
              </div>
            </motion.div>
          </AnimatePresence>
        </div>
      </div>

      {/* Slider Controls */}
      <div className="absolute bottom-10 left-6 md:left-auto md:right-10 z-20 flex items-center justify-center md:justify-start gap-6 w-[calc(100%-3rem)] md:w-auto mt-8 md:mt-0">
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
