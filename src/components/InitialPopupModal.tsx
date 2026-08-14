'use client';

import React, { useState, useEffect } from 'react';
import Image from 'next/image';
import { motion, AnimatePresence } from 'framer-motion';
import { X } from 'lucide-react';

interface InitialPopupModalProps {
  imageSrc?: string;
  altText?: string;
}

export default function InitialPopupModal({
  imageSrc = '/pop_up/pop_up.jpeg',
  altText = 'Krishna Hospital Special Announcement',
}: InitialPopupModalProps) {
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    // Open modal on initial page load
    const timer = setTimeout(() => {
      setIsOpen(true);
    }, 300);

    return () => clearTimeout(timer);
  }, []);

  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }

    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') {
        setIsOpen(false);
      }
    };

    window.addEventListener('keydown', handleKeyDown);
    return () => {
      document.body.style.overflow = 'unset';
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [isOpen]);

  const handleClose = () => {
    setIsOpen(false);
  };

  return (
    <AnimatePresence>
      {isOpen && (
        <div className="fixed inset-0 z-[100] flex items-center justify-center p-3 sm:p-5 overflow-y-auto">
          {/* Backdrop with rich blur effect */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
            onClick={handleClose}
            aria-hidden="true"
            className="fixed inset-0 bg-[#031C1D]/85 backdrop-blur-md transition-opacity cursor-pointer"
          />

          {/* Modal Content Box */}
          <motion.div
            initial={{ opacity: 0, scale: 0.88, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.9, y: 15 }}
            transition={{ type: 'spring', damping: 25, stiffness: 280 }}
            className="relative z-10 w-full max-w-[min(92vw,85vh)] flex flex-col items-center justify-center pointer-events-auto my-auto"
          >
            {/* Poster Card Container */}
            <div className="relative w-full aspect-square rounded-2xl sm:rounded-3xl overflow-hidden bg-slate-900 shadow-[0_25px_60px_-15px_rgba(0,0,0,0.8),0_0_35px_rgba(27,138,141,0.35)] border border-white/20 group">
              
              {/* Floating Top Right Close Button */}
              <button
                onClick={handleClose}
                aria-label="Close poster"
                className="absolute top-3 right-3 sm:top-4 sm:right-4 z-30 p-2.5 sm:p-3 rounded-full bg-black/65 hover:bg-accent text-white backdrop-blur-md transition-all duration-300 hover:scale-110 active:scale-95 border border-white/30 shadow-xl group/btn focus:outline-none focus:ring-2 focus:ring-accent cursor-pointer"
              >
                <X className="w-5 h-5 sm:w-6 sm:h-6 transition-transform duration-300 group-hover/btn:rotate-90" />
              </button>

              {/* Poster 1:1 Image */}
              <div className="relative w-full h-full cursor-pointer" onClick={handleClose}>
                <Image
                  src={imageSrc}
                  alt={altText}
                  fill
                  priority
                  sizes="(max-width: 768px) 92vw, 85vh"
                  className="object-cover transition-transform duration-700 ease-out hover:scale-[1.01]"
                />
              </div>
            </div>

            {/* Sub-caption hint below image */}
            <p className="mt-2.5 sm:mt-3 text-xs sm:text-sm text-slate-300/80 text-center font-medium tracking-wide flex items-center gap-1.5">
              <span>Click anywhere outside or press</span>
              <kbd className="px-2 py-0.5 text-[10px] sm:text-xs font-mono bg-white/10 text-white rounded border border-white/20">
                ESC
              </kbd>
              <span>to close</span>
            </p>
          </motion.div>
        </div>
      )}
    </AnimatePresence>
  );
}
