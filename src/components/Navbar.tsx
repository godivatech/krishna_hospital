"use client";
import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Phone, Menu, X } from "lucide-react";
import Link from "next/link";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  // Close menu on resize to desktop
  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth >= 768) setIsOpen(false);
    };
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  // Prevent scroll when menu is open
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "unset";
    }
  }, [isOpen]);

  const navLinks = [
    { href: "#about", label: "About" },
    { href: "#departments", label: "Departments" },
    { href: "#doctors", label: "Doctors" },
    { href: "#testimonials", label: "Testimonials" },
  ];

  return (
    <motion.header 
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
      className="fixed top-0 w-full z-50 glass border-b border-white/20"
    >
      <div className="max-w-7xl mx-auto px-6 py-2 flex items-center justify-between">
        <Link href="/" className="flex items-center gap-3 group relative z-50">
          <img src="/Logo%20Png.png" alt="Krishna Hospital" className="h-16 md:h-24 w-auto object-contain transition-transform group-hover:scale-105" />
        </Link>
        
        {/* Desktop Nav */}
        <nav className="hidden md:flex gap-8 text-base font-medium text-primary">
          {navLinks.map((link) => (
            <Link key={link.href} href={link.href} className="hover:text-teal-600 transition-colors">
              {link.label}
            </Link>
          ))}
        </nav>

        <div className="flex items-center gap-4">
          <a href="tel:9789223246" className="hidden md:flex items-center gap-2 bg-accent text-white px-5 py-2.5 rounded-full text-base font-medium hover:bg-accent-light transition-all shadow-lg hover:shadow-accent/40 transform hover:-translate-y-0.5">
            <Phone className="w-4 h-4" />
            <span>Emergency: 9789223246</span>
          </a>

          {/* Mobile Menu Button */}
          <button 
            onClick={() => setIsOpen(!isOpen)}
            className="md:hidden p-2 text-primary relative z-50"
            aria-label="Toggle menu"
          >
            {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </div>

      {/* Mobile Menu Overlay */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, x: "100%" }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: "100%" }}
            transition={{ type: "spring", damping: 25, stiffness: 200 }}
            className="fixed inset-0 bg-white z-40 md:hidden flex flex-col justify-center items-center p-8"
          >
            <nav className="flex flex-col gap-8 text-center items-center">
              <Link href="/" onClick={() => setIsOpen(false)} className="mb-8">
                <img src="/Logo%20Png.png" alt="Krishna Hospital" className="h-24 w-auto object-contain" />
              </Link>

              {navLinks.map((link, i) => (
                <motion.div
                  key={link.href}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.1 + i * 0.1 }}
                >
                  <Link 
                    href={link.href}
                    onClick={() => setIsOpen(false)}
                    className="text-3xl font-serif text-primary hover:text-teal-600 transition-colors block p-2"
                  >
                    {link.label}
                  </Link>
                </motion.div>
              ))}
              
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.1 + navLinks.length * 0.1 }}
                className="mt-8 flex flex-col items-center gap-4"
              >
                <a 
                  href="tel:9789223246" 
                >
                  <div className="flex items-center gap-2 px-4 py-2 rounded-full bg-accent/10 border border-accent/20">
                    <span className="w-2 h-2 rounded-full bg-accent animate-pulse" />
                    <span className="text-2xl font-serif font-bold text-primary tracking-tight">Krishna Hospital</span>
                  </div>
                </a>
                <a href="tel:9789223246" className="text-2xl font-bold text-primary">
                  9789223246
                </a>
              </motion.div>
            </nav>
            
            {/* Decorative background element */}
            <div className="absolute top-0 right-0 -z-10 opacity-5 pointer-events-none">
              <img src="/Logo%20Png.png" alt="" className="w-96 h-96 object-contain" />
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.header>
  );
}

