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
      <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">
        <Link href="/" className="flex items-center gap-3 group">
          <img src="/logo.png" alt="Krishna Hospitals" className="h-20 md:h-24 w-auto object-contain transition-transform group-hover:scale-105" />
        </Link>
        
        <nav className="hidden md:flex gap-8 text-base font-medium text-primary">
          <Link href="#about" className="hover:text-accent transition-colors">About</Link>
          <Link href="#departments" className="hover:text-accent transition-colors">Departments</Link>
          <Link href="#doctors" className="hover:text-accent transition-colors">Doctors</Link>
          <Link href="#testimonials" className="hover:text-accent transition-colors">Testimonials</Link>
        </nav>

        <a href="tel:9789223246" className="hidden md:flex items-center gap-2 bg-primary text-white px-5 py-2.5 rounded-full text-base font-medium hover:bg-primary-light transition-all shadow-lg hover:shadow-xl transform hover:-translate-y-0.5">
          <Phone className="w-4 h-4" />
          <span>Emergency: 9789223246</span>
        </a>
      </div>
    </motion.header>
  );
}
