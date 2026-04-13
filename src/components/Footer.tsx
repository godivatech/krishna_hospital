"use client";
import { Phone, Mail, MapPin, Clock, ChevronRight, HeartPulse, Globe, MessageCircle, Share2 } from "lucide-react";

export default function Footer() {
  const quickLinks = [
    { name: "About Hospital", href: "#about" },
    { name: "Specialized Departments", href: "#departments" },
    { name: "Our Doctors", href: "#doctors" },
    { name: "Patient Testimonials", href: "#testimonials" },
    { name: "Book Appointment", href: "#contact" },
  ];

  return (
    <footer id="contact" className="bg-primary text-slate-300 pt-20 pb-10 border-t border-white/10">
      <div className="max-w-7xl mx-auto px-6 grid md:grid-cols-2 lg:grid-cols-4 gap-12 mb-16">
        
        {/* Brand Col */}
        <div className="lg:col-span-1">
          <div className="flex items-center gap-2 mb-6">
            <div className="w-10 h-10 rounded-xl bg-accent flex items-center justify-center text-white shrink-0 shadow-lg">
              <HeartPulse className="w-6 h-6" />
            </div>
            <span className="font-serif text-2xl font-bold tracking-tight text-white leading-none">
              Krishna <br /> <span className="text-sm font-medium text-accent uppercase tracking-widest font-sans">Hospitals</span>
            </span>
          </div>
          <p className="text-sm leading-relaxed mb-8">
            Providing world-class medical care with compassion and excellence in Ramanathapuram since 2022. 
          </p>
          <div className="flex gap-4">
            <a href="#" className="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center hover:bg-accent hover:text-white transition-colors">
              <Globe className="w-4 h-4" />
            </a>
            <a href="https://wa.me/919789223246" target="_blank" rel="noopener noreferrer" className="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center hover:bg-accent hover:text-white transition-colors">
              <MessageCircle className="w-4 h-4" />
            </a>
            <a href="#" className="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center hover:bg-accent hover:text-white transition-colors">
              <Share2 className="w-4 h-4" />
            </a>
          </div>
        </div>

        {/* Quick Links */}
        <div>
          <h4 className="text-white font-serif font-bold text-xl mb-6">Quick Links</h4>
          <ul className="space-y-3">
            {quickLinks.map((link, idx) => (
              <li key={idx}>
                <a href={link.href} className="group flex items-center gap-2 text-sm hover:text-accent transition-colors">
                  <ChevronRight className="w-3 h-3 text-white/30 group-hover:text-accent" />
                  {link.name}
                </a>
              </li>
            ))}
          </ul>
        </div>

        {/* Contact Info */}
        <div>
          <h4 className="text-white font-serif font-bold text-xl mb-6">Contact Us</h4>
          <ul className="space-y-5">
            <li className="flex items-start gap-4">
              <div className="mt-1"><MapPin className="w-5 h-5 text-accent" /></div>
              <span className="text-sm leading-relaxed">
                Madurai Main Road,<br />
                Near Villaiyar Kovil Bus Stop,<br />
                Opp. to Chidambaram Pillai Oorani,<br />
                Ramanathapuram - 623501
              </span>
            </li>
            <li className="flex items-center gap-4">
              <Phone className="w-5 h-5 text-accent" />
              <div className="text-sm">
                <a href="tel:9789223246" className="hover:text-accent transition-colors block">9789223246</a>
                <a href="tel:7871195487" className="hover:text-accent transition-colors block mt-1">7871195487</a>
              </div>
            </li>
            <li className="flex items-center gap-4">
              <Mail className="w-5 h-5 text-accent" />
              <a href="mailto:krishnahospitalskh@gmail.com" className="text-sm hover:text-accent transition-colors">
                krishnahospitalskh@gmail.com
              </a>
            </li>
          </ul>
        </div>

        {/* Timings */}
        <div>
          <h4 className="text-white font-serif font-bold text-xl mb-6">Working Hours</h4>
          <div className="bg-white/5 border border-white/10 rounded-2xl p-5">
            <div className="flex items-center gap-3 mb-4 pb-4 border-b border-white/10">
               <Clock className="w-5 h-5 text-accent shrink-0" />
               <div className="text-sm">
                 <p className="text-white font-medium">Emergency Care</p>
                 <p className="text-accent-light">24 Hours / 7 Days</p>
               </div>
            </div>
            <div className="space-y-3 text-sm">
               <div className="flex justify-between">
                 <span>Mon - Sat</span>
                 <span className="text-white font-medium">9:00 AM - 9:00 PM</span>
               </div>
               <div className="flex justify-between">
                 <span>Sunday</span>
                 <span className="text-white font-medium">9:00 AM - 2:00 PM</span>
               </div>
            </div>
          </div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-6 border-t border-white/10 pt-8 flex flex-col md:flex-row justify-between items-center gap-4 text-xs text-white/50">
        <p>&copy; {new Date().getFullYear()} Krishna Hospitals. All rights reserved.</p>
        <div className="flex flex-wrap justify-center md:justify-end items-center gap-y-2 gap-x-6">
          <div className="flex gap-6">
            <a href="#" className="hover:text-white transition-colors">Privacy Policy</a>
            <a href="#" className="hover:text-white transition-colors">Terms of Service</a>
          </div>
          <span className="w-px h-3 bg-white/10 hidden lg:block"></span>
          <p className="flex items-center gap-1 text-sm">
            Designed & Developed by{" "}
            <a 
              href="https://godivatech.com" 
              target="_blank" 
              rel="noopener noreferrer"
              className="text-white hover:text-accent font-bold transition-colors"
            >
              godivatech
            </a>
          </p>
        </div>
      </div>
    </footer>
  );
}
