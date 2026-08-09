import React from 'react';
import { Phone, MessageCircle, Calendar } from 'lucide-react';
import { DOCTOR_PROFILE } from '../data/doctorData';

interface StickyMobileActionBarProps {
  onOpenAppointment: () => void;
}

export const StickyMobileActionBar: React.FC<StickyMobileActionBarProps> = ({ onOpenAppointment }) => {
  return (
    <div className="lg:hidden fixed bottom-0 left-0 right-0 z-40 bg-white/95 backdrop-blur-md border-t border-slate-200 p-2.5 shadow-2xl">
      <div className="grid grid-cols-3 gap-2 max-w-md mx-auto">
        <a
          href={DOCTOR_PROFILE.callUrl}
          className="flex flex-col items-center justify-center py-2 px-1 bg-slate-900 text-white rounded-xl text-[11px] font-bold active:scale-95 transition-transform"
        >
          <Phone className="w-4 h-4 mb-0.5 text-teal-400" />
          <span>CALL</span>
        </a>

        <a
          href={DOCTOR_PROFILE.whatsappUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="flex flex-col items-center justify-center py-2 px-1 bg-emerald-600 text-white rounded-xl text-[11px] font-bold active:scale-95 transition-transform"
        >
          <MessageCircle className="w-4 h-4 mb-0.5 fill-white" />
          <span>WHATSAPP</span>
        </a>

        <button
          onClick={onOpenAppointment}
          className="flex flex-col items-center justify-center py-2 px-1 bg-teal-600 text-white rounded-xl text-[11px] font-bold active:scale-95 transition-transform"
        >
          <Calendar className="w-4 h-4 mb-0.5" />
          <span>BOOK</span>
        </button>
      </div>
    </div>
  );
};
