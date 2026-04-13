"use client";
import { motion } from "framer-motion";
import { Phone } from "lucide-react";
import Link from "next/link";

export default function Navbar() {
  return (
    <motion.header 
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
      className="fixed top-0 w-full z-50 glass border-b border-white/20"
    >
      <div className="max-w-7xl mx-auto px-6 h-20 flex items-center justify-between">
        <Link href="/" className="flex items-center gap-3 group">
          <div className="w-10 h-10 bg-primary rounded-full flex items-center justify-center text-white font-serif italic font-bold text-xl transition-transform group-hover:scale-105">K</div>
          <div className="flex flex-col">
            <span className="font-serif font-bold text-primary tracking-tight leading-none text-xl">Krishna Hospitals</span>
            <span className="text-[10px] uppercase tracking-widest text-[#20b2aa] font-bold mt-1">Surgery & Maternity</span>
          </div>
        </Link>
        
        <nav className="hidden md:flex gap-8 text-sm font-medium text-primary">
          <Link href="#about" className="hover:text-accent transition-colors">About</Link>
          <Link href="#departments" className="hover:text-accent transition-colors">Departments</Link>
          <Link href="#doctors" className="hover:text-accent transition-colors">Doctors</Link>
          <Link href="#testimonials" className="hover:text-accent transition-colors">Testimonials</Link>
        </nav>

        <a href="tel:9789223246" className="hidden md:flex items-center gap-2 bg-primary text-white px-5 py-2.5 rounded-full text-sm font-medium hover:bg-primary-light transition-all shadow-lg hover:shadow-xl transform hover:-translate-y-0.5">
          <Phone className="w-4 h-4" />
          <span>Emergency: 9789223246</span>
        </a>
      </div>
    </motion.header>
  );
}
