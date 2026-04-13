import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X, Calendar, User, Phone, MessageSquare, HeartPulse } from 'lucide-react';

interface BookAppointmentModalProps {
  isOpen: boolean;
  onClose: () => void;
}

const departments = [
  "General Medicine",
  "General Surgery",
  "Laparoscopic Surgery",
  "Pregnancy Care",
  "High-Risk Pregnancy",
  "Infertility Treatment",
  "Neonatal Care",
  "Pediatric Care",
  "Emergency & Trauma Care",
  "Other"
];

const BookAppointmentModal: React.FC<BookAppointmentModalProps> = ({ isOpen, onClose }) => {
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    date: '',
    department: '',
    message: ''
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Here you would typically send the data to a backend or handle it via email/WhatsApp
    console.log("Appointment Booked:", formData);
    
    // For now, let's create a WhatsApp link to send the details directly to the hospital's number
    const text = `*New Appointment Request*%0A%0A*Name:* ${formData.name}%0A*Phone:* ${formData.phone}%0A*Date:* ${formData.date}%0A*Department:* ${formData.department}%0A*Message:* ${formData.message}`;
    window.open(`https://wa.me/919789223246?text=${text}`, '_blank');
    
    onClose();
    // Reset form
    setFormData({ name: '', phone: '', date: '', department: '', message: '' });
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  return (
    <AnimatePresence>
      {isOpen && (
        <>
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={onClose}
            className="fixed inset-0 bg-[#2D1A22]/80 backdrop-blur-sm z-50"
          />
          <div className="fixed inset-0 flex items-center justify-center p-4 z-50 pointer-events-none">
            <motion.div
              initial={{ opacity: 0, scale: 0.95, y: 20 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.95, y: 20 }}
              className="bg-white rounded-3xl shadow-2xl w-full max-w-lg overflow-hidden pointer-events-auto"
            >
              {/* Header */}
              <div className="bg-gradient-to-r from-primary to-primary-light p-6 text-white relative">
                <button
                  onClick={onClose}
                  className="absolute top-4 right-4 p-2 bg-white/10 hover:bg-white/20 rounded-full transition-colors focus:outline-none"
                >
                  <X className="w-5 h-5" />
                </button>
                <div className="flex items-center gap-3 mb-2">
                  <div className="p-2 bg-blue-500/20 rounded-lg">
                    <Calendar className="w-6 h-6 text-blue-300" />
                  </div>
                  <h2 className="text-2xl font-serif font-bold">Book Appointment</h2>
                </div>
                <p className="text-blue-100/80 text-base">Fill out the details below and we will confirm your visit.</p>
              </div>

              {/* Form */}
              <form onSubmit={handleSubmit} className="p-6 space-y-5">
                <div>
                  <label className="block text-base font-medium text-slate-700 mb-1">Full Name</label>
                  <div className="relative">
                    <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                      <User className="h-5 w-5 text-slate-400" />
                    </div>
                    <input
                      type="text"
                      name="name"
                      required
                      value={formData.name}
                      onChange={handleChange}
                      className="block w-full pl-10 pr-3 py-3 border border-slate-200 rounded-xl focus:ring-2 focus:ring-blue-600 focus:border-blue-600 transition-colors bg-slate-50 focus:bg-white text-slate-900"
                      placeholder="John Doe"
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-base font-medium text-slate-700 mb-1">Phone Number</label>
                  <div className="relative">
                    <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                      <Phone className="h-5 w-5 text-slate-400" />
                    </div>
                    <input
                      type="tel"
                      name="phone"
                      required
                      value={formData.phone}
                      onChange={handleChange}
                      className="block w-full pl-10 pr-3 py-3 border border-slate-200 rounded-xl focus:ring-2 focus:ring-blue-600 focus:border-blue-600 transition-colors bg-slate-50 focus:bg-white text-slate-900"
                      placeholder="+91 98765 43210"
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                  <div>
                    <label className="block text-base font-medium text-slate-700 mb-1">Preferred Date</label>
                    <div className="relative">
                      <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                        <Calendar className="h-5 w-5 text-slate-400" />
                      </div>
                      <input
                        type="date"
                        name="date"
                        required
                        value={formData.date}
                        onChange={handleChange}
                        className="block w-full pl-10 pr-3 py-3 border border-slate-200 rounded-xl focus:ring-2 focus:ring-blue-600 focus:border-blue-600 transition-colors bg-slate-50 focus:bg-white text-slate-900"
                      />
                    </div>
                  </div>

                  <div>
                    <label className="block text-base font-medium text-slate-700 mb-1">Department</label>
                    <div className="relative">
                      <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                        <HeartPulse className="h-5 w-5 text-slate-400" />
                      </div>
                      <select
                        name="department"
                        required
                        value={formData.department}
                        onChange={handleChange}
                        className="block w-full pl-10 pr-3 py-3 border border-slate-200 rounded-xl focus:ring-2 focus:ring-blue-600 focus:border-blue-600 transition-colors bg-slate-50 focus:bg-white text-slate-900 appearance-none"
                      >
                        <option value="" disabled>Select Service</option>
                        {departments.map((dept) => (
                          <option key={dept} value={dept}>{dept}</option>
                        ))}
                      </select>
                    </div>
                  </div>
                </div>

                <div>
                  <label className="block text-base font-medium text-slate-700 mb-1">Message (Optional)</label>
                  <div className="relative">
                    <div className="absolute top-3 left-3 pointer-events-none">
                      <MessageSquare className="h-5 w-5 text-slate-400" />
                    </div>
                    <textarea
                      name="message"
                      rows={3}
                      value={formData.message}
                      onChange={handleChange}
                      className="block w-full pl-10 pr-3 py-3 border border-slate-200 rounded-xl focus:ring-2 focus:ring-blue-600 focus:border-blue-600 transition-colors bg-slate-50 focus:bg-white text-slate-900 resize-none"
                      placeholder="Briefly describe your medical concern..."
                    />
                  </div>
                </div>

                <div className="pt-2">
                  <button
                    type="submit"
                    className="w-full bg-primary text-white py-4 rounded-xl font-medium hover:bg-primary-light transition-colors shadow-lg shadow-primary/20 flex items-center justify-center gap-2"
                  >
                    Confirm Appointment
                  </button>
                  <p className="text-center text-sm text-slate-500 mt-4">
                    Your details are secure. We will contact you shortly to confirm timings.
                  </p>
                </div>
              </form>
            </motion.div>
          </div>
        </>
      )}
    </AnimatePresence>
  );
};

export default BookAppointmentModal;
