"use client";
import { useState, useEffect } from "react";
import { createPortal } from "react-dom";
import { motion, AnimatePresence } from "framer-motion";
import { Phone, Menu, X } from "lucide-react";
import Link from "next/link";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [mounted, setMounted] = useState(false);

  // Safe SSR check for React Portal
  useEffect(() => {
    setMounted(true);
  }, []);

  // Close menu on resize to desktop (md breakpoint)
  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth >= 768) setIsOpen(false);
    };
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  // Keyboard accessibility: Close on Escape key
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape" && isOpen) {
        setIsOpen(false);
      }
    };
    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [isOpen]);

  // Robust Mobile Body Scroll Lock across iOS Safari and Android
  useEffect(() => {
    if (isOpen) {
      const scrollY = window.scrollY;
      const originalBodyOverflow = document.body.style.overflow;
      const originalHtmlOverflow = document.documentElement.style.overflow;
      const originalTouchAction = document.body.style.touchAction;

      document.body.style.overflow = "hidden";
      document.documentElement.style.overflow = "hidden";
      document.body.style.touchAction = "none";

      return () => {
        document.body.style.overflow = originalBodyOverflow;
        document.documentElement.style.overflow = originalHtmlOverflow;
        document.body.style.touchAction = originalTouchAction;
        window.scrollTo(0, scrollY);
      };
    }
  }, [isOpen]);

  const navLinks = [
    { href: "#about", label: "About" },
    { href: "#departments", label: "Departments" },
    { href: "#doctors", label: "Doctors" },
    { href: "#testimonials", label: "Testimonials" },
  ];

  const handleLinkClick = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    setIsOpen(false);
    if (href.startsWith("#")) {
      e.preventDefault();
      const target = document.querySelector(href);
      if (target) {
        setTimeout(() => {
          target.scrollIntoView({ behavior: "smooth" });
        }, 120);
      }
    }
  };

  return (
    <>
      <motion.header 
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
        className={`fixed top-0 w-full z-50 transition-colors duration-200 ${
          isOpen ? "bg-white md:glass border-b border-slate-100 md:border-white/20" : "glass border-b border-white/20"
        }`}
      >
        <div className="max-w-7xl mx-auto px-6 py-2 flex items-center justify-between">
          <Link href="/" onClick={() => setIsOpen(false)} className="flex items-center gap-3 group relative z-50">
            <img 
              src="/Logo%20Png.png" 
              alt="Krishna Hospital" 
              className="h-16 md:h-24 w-auto object-contain transition-transform group-hover:scale-105" 
            />
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
            <a 
              href="tel:9789223246" 
              className="hidden md:flex items-center gap-2 bg-accent text-white px-5 py-2.5 rounded-full text-base font-medium hover:bg-accent-light transition-all shadow-lg hover:shadow-accent/40 transform hover:-translate-y-0.5"
            >
              <Phone className="w-4 h-4" />
              <span>Emergency: 9789223246</span>
            </a>

            {/* Mobile Menu Button */}
            <button 
              onClick={() => setIsOpen(!isOpen)}
              className="md:hidden p-2 text-primary relative z-50 focus:outline-none"
              aria-expanded={isOpen}
              aria-label="Toggle menu"
            >
              {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>
      </motion.header>

      {/* Mobile Menu Overlay */}
      {mounted && createPortal(
        <AnimatePresence>
          {isOpen && (
            <motion.div
              initial={{ opacity: 0, x: "100%" }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: "100%" }}
              transition={{ type: "spring", damping: 25, stiffness: 200 }}
              className="fixed inset-0 bg-white z-40 md:hidden flex flex-col h-[100dvh] w-full overflow-y-auto overscroll-contain"
              role="dialog"
              aria-modal="true"
            >
              <div className="flex-1 flex flex-col justify-between items-center w-full max-w-lg mx-auto pt-[max(6rem,calc(env(safe-area-inset-top)+5rem))] pb-[max(2rem,env(safe-area-inset-bottom))] px-6 min-h-full">
                <nav className="flex flex-col gap-7 sm:gap-8 text-center items-center w-full my-auto">
                  {navLinks.map((link, i) => (
                    <motion.div
                      key={link.href}
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ delay: 0.1 + i * 0.1 }}
                    >
                      <Link 
                        href={link.href}
                        onClick={(e) => handleLinkClick(e, link.href)}
                        className="text-2xl sm:text-3xl font-serif text-primary hover:text-teal-600 transition-colors block p-2"
                      >
                        {link.label}
                      </Link>
                    </motion.div>
                  ))}
                  
                  <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.1 + navLinks.length * 0.1 }}
                    className="mt-6 sm:mt-8 flex flex-col items-center gap-4"
                  >
                    <a href="tel:9789223246">
                      <div className="flex items-center gap-2 px-4 py-2 rounded-full bg-accent/10 border border-accent/20">
                        <span className="w-2 h-2 rounded-full bg-accent animate-pulse" />
                        <span className="text-xl sm:text-2xl font-serif font-bold text-primary tracking-tight">
                          Krishna Hospital
                        </span>
                      </div>
                    </a>
                    <a 
                      href="tel:9789223246" 
                      className="text-xl sm:text-2xl font-bold text-primary hover:text-teal-600 transition-colors"
                    >
                      9789223246
                    </a>
                  </motion.div>
                </nav>
              </div>
              
              {/* Decorative background element */}
              <div className="absolute top-0 right-0 -z-10 opacity-5 pointer-events-none select-none">
                <img 
                  src="/Logo%20Png.png" 
                  alt="" 
                  className="w-80 sm:w-96 h-80 sm:h-96 object-contain" 
                />
              </div>
            </motion.div>
          )}
        </AnimatePresence>,
        document.body
      )}
    </>
  );
}
