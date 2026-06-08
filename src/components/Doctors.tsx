"use client";
import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { Phone, Activity, ChevronLeft, ChevronRight } from "lucide-react";
import Image from "next/image";

export default function Doctors() {
  const doctors = [
    {
      name: "Dr. Dinesh Mukil",
      role: "HOD OF SURGERY",
      badge: "HOD of Surgery",
      desc: "MBBS., MS., FIAGES., FAGIE. FALS., DIP LAP (Starsbourg).",
      img: "/dr-dinesh-mukil.png"
    },
    {
      name: "Dr. Nandini Parasuraman",
      role: "HOD OF OBSTETRICS & GYNECOLOGY",
      badge: "HOD of OBG",
      desc: "MBBS., MS OG., FMAS.",
      img: "/dr-nandhini.png"
    },
    {
      name: "Dr. A. Arulmohan",
      role: "TRAUMA & JOINT REPLACEMENT SURGEON",
      badge: "Orthopedics",
      desc: "M.B.B.S., M.S. ORTHOPAEDICS.",
      img: "/Arul mohan.jpeg"
    }
  ];

  const [isDesktop, setIsDesktop] = useState(false);
  const [current, setCurrent] = useState(0);

  useEffect(() => {
    const checkScreen = () => {
      setIsDesktop(window.innerWidth >= 1024); // Use lg screen size (1024px) for 2-column view
    };
    checkScreen();
    window.addEventListener("resize", checkScreen);
    return () => window.removeEventListener("resize", checkScreen);
  }, []);

  const maxIndex = isDesktop ? doctors.length - 2 : doctors.length - 1;
  const activeCurrent = Math.min(current, maxIndex);

  const slideNext = () => {
    setCurrent((prev) => (prev >= maxIndex ? 0 : prev + 1));
  };

  const slidePrev = () => {
    setCurrent((prev) => (prev <= 0 ? maxIndex : prev - 1));
  };

  return (
    <section id="doctors" className="py-32 bg-primary text-white relative overflow-hidden">
      {/* Dynamic CSS styles for sliding steps and layout */}
      <style dangerouslySetInnerHTML={{ __html: `
        #doctor-track {
          --slide-step: calc(100% + 32px);
        }
        @media (min-width: 1024px) {
          #doctor-track {
            --slide-step: calc(50% + 16px);
          }
        }
      `}} />

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
          
          {/* Desktop Slide Controls (top-right of section header) */}
          <div className="hidden lg:flex gap-4">
            <button
              onClick={slidePrev}
              className="w-14 h-14 rounded-full border border-white/20 flex items-center justify-center text-white hover:bg-white/10 hover:border-teal-400/40 backdrop-blur-sm transition-all duration-300 shrink-0 shadow-lg active:scale-95 cursor-pointer"
              aria-label="Previous Doctor"
            >
              <ChevronLeft className="w-6 h-6 text-teal-300" />
            </button>
            <button
              onClick={slideNext}
              className="w-14 h-14 rounded-full border border-white/20 flex items-center justify-center text-white hover:bg-white/10 hover:border-teal-400/40 backdrop-blur-sm transition-all duration-300 shrink-0 shadow-lg active:scale-95 cursor-pointer"
              aria-label="Next Doctor"
            >
              <ChevronRight className="w-6 h-6 text-teal-300" />
            </button>
          </div>
        </div>

        {/* Slider Container Wrapper */}
        <div className="relative overflow-hidden py-4 -mx-4 px-4">
          <div
            id="doctor-track"
            className="flex gap-8 transition-transform duration-500 ease-out"
            style={{
              transform: `translateX(calc(-${activeCurrent} * var(--slide-step)))`,
            }}
          >
            {doctors.map((doc, idx) => (
              <div
                key={idx}
                className="w-full lg:w-[calc(50%-16px)] shrink-0 group flex flex-col md:flex-row gap-8 items-center md:items-stretch p-8 rounded-[2.5rem] bg-white/[0.07] backdrop-blur-xl border border-white/10 hover:border-teal-400/40 transition-all duration-500 hover:shadow-[0_20px_50px_rgba(0,0,0,0.3)] relative overflow-hidden"
              >
                {/* Decorative background glow for hover */}
                <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-br from-teal-400/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none"></div>

                <div className="w-full md:w-72 aspect-square rounded-3xl overflow-hidden relative border border-white/10 group-hover:border-teal-400/30 transition-all duration-500 shadow-2xl ring-1 ring-white/5 shrink-0">
                  <Image
                    src={doc.img}
                    alt={doc.name}
                    fill
                    className="object-cover group-hover:scale-110 transition-transform duration-1000 ease-in-out"
                    sizes="(max-width: 768px) 100vw, 288px"
                    priority={idx < 2}
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-primary-deep/80 via-primary-deep/20 to-transparent opacity-80 group-hover:opacity-60 transition-opacity duration-500"></div>

                  {/* Decorative Overlay */}
                  <div className="absolute bottom-6 left-6 right-6 z-20">
                    <div className="flex items-center gap-2.5 bg-primary-deep/40 backdrop-blur-md px-3 py-1.5 rounded-full w-fit border border-white/10">
                      <span className="w-2 h-2 rounded-full bg-teal-400 shadow-[0_0_8px_rgba(45,212,191,0.8)] animate-pulse"></span>
                      <span className="text-[10px] uppercase tracking-[0.2em] font-bold text-teal-50">{doc.badge}</span>
                    </div>
                  </div>
                </div>

                <div className="flex flex-col flex-1 py-4 relative z-10">
                  <div className="mb-auto text-center md:text-left">
                    <h4 className="text-3xl font-serif font-bold mb-3 text-white group-hover:text-teal-200 transition-colors tracking-tight">
                      {doc.name}
                    </h4>
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
              </div>
            ))}
          </div>
        </div>

        {/* Mobile controls & Pagination Dots */}
        <div className="flex flex-col items-center gap-6 mt-12">
          {/* Mobile Arrows */}
          <div className="flex lg:hidden gap-6">
            <button
              onClick={slidePrev}
              className="w-12 h-12 rounded-full border border-white/20 flex items-center justify-center text-white hover:bg-white/10 backdrop-blur-sm transition-colors active:scale-95"
              aria-label="Previous Doctor"
            >
              <ChevronLeft className="w-5 h-5 text-teal-300" />
            </button>
            <button
              onClick={slideNext}
              className="w-12 h-12 rounded-full border border-white/20 flex items-center justify-center text-white hover:bg-white/10 backdrop-blur-sm transition-colors active:scale-95"
              aria-label="Next Doctor"
            >
              <ChevronRight className="w-5 h-5 text-teal-300" />
            </button>
          </div>

          {/* Pagination Indicators */}
          <div className="flex gap-3">
            {doctors.slice(0, maxIndex + 1).map((_, idx) => (
              <button
                key={idx}
                onClick={() => setCurrent(idx)}
                className={`h-2.5 rounded-full transition-all duration-500 cursor-pointer ${
                  activeCurrent === idx ? "w-8 bg-teal-400" : "w-2.5 bg-white/30 hover:bg-white/50"
                }`}
                aria-label={`Go to slide ${idx + 1}`}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
