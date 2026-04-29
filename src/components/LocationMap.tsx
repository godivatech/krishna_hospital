"use client";
import { MapPin } from "lucide-react";

export default function LocationMap() {
  return (
    <section className="bg-slate-50 py-16">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-10">
          <h2 className="text-3xl md:text-4xl font-serif font-bold text-primary-deep mb-4">
            Find Us
          </h2>
          <p className="text-slate-600 max-w-2xl mx-auto flex items-center justify-center gap-2">
            <MapPin className="w-5 h-5 text-teal-600 shrink-0" />
            <span>NO.45, Madurai Road, Opposite to Chidambaram Pillai Oorani, Ramanathapuram-62350</span>
          </p>
        </div>
        <div className="w-full h-[400px] md:h-[500px] rounded-2xl overflow-hidden shadow-xl border border-slate-200 bg-white">
          <iframe
            src="https://maps.google.com/maps?q=Krishna%20Hospital,%20NO.45,%20Madurai%20Road,%20Ramanathapuram&t=&z=15&ie=UTF8&iwloc=&output=embed"
            width="100%"
            height="100%"
            style={{ border: 0 }}
            allowFullScreen={true}
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
            title="Krishna Hospital Location"
          ></iframe>
        </div>
      </div>
    </section>
  );
}
