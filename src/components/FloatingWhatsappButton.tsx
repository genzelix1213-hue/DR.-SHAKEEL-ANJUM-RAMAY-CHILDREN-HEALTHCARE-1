import React from 'react';
import { MessageCircle } from 'lucide-react';
import { DOCTOR_PROFILE } from '../data/doctorData';

export const FloatingWhatsappButton: React.FC = () => {
  return (
    <a
      href={DOCTOR_PROFILE.whatsappUrl}
      target="_blank"
      rel="noopener noreferrer"
      className="hidden lg:flex fixed bottom-8 right-8 z-40 items-center space-x-2 px-4 py-3 bg-emerald-600 hover:bg-emerald-500 text-white rounded-full shadow-2xl hover:shadow-emerald-900/30 transition-all transform hover:scale-105 group border border-emerald-400/30"
      aria-label="Chat on WhatsApp"
      title="WhatsApp Dr. Shakeel Anjum Ramay"
    >
      <div className="w-8 h-8 rounded-full bg-white/20 flex items-center justify-center shrink-0">
        <MessageCircle className="w-5 h-5 fill-white text-emerald-600" />
      </div>
      <span className="text-xs font-bold tracking-wide pr-1">WhatsApp Us</span>
    </a>
  );
};
