import React from 'react';
import { Phone, MessageCircle, MapPin, Calendar, HeartPulse } from 'lucide-react';
import { DOCTOR_PROFILE } from '../data/doctorData';

interface FooterProps {
  onOpenAppointment: () => void;
  onOpenAdmin: () => void;
}

export const Footer: React.FC<FooterProps> = ({ onOpenAppointment, onOpenAdmin }) => {
  const currentYear = new Date().getFullYear();

  const handleNavClick = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    e.preventDefault();
    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <footer className="bg-slate-900 text-slate-300 pt-16 pb-24 lg:pb-12 border-t border-slate-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* TOP FOUR COLUMNS */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10 pb-12 border-b border-slate-800">
          
          {/* COL 1: BRANDING */}
          <div className="space-y-4">
            <div className="flex items-center space-x-3">
              <div className="w-10 h-10 rounded-xl bg-teal-600 text-white flex items-center justify-center font-bold">
                <HeartPulse className="w-6 h-6" />
              </div>
              <span className="text-lg font-extrabold text-white">{DOCTOR_PROFILE.name}</span>
            </div>
            <p className="text-xs text-slate-400 leading-relaxed font-normal">
              Experienced Child Healthcare in Okara, Pakistan
            </p>
            <p className="text-xs text-slate-400 leading-relaxed">
              MD (Medicine), MBBS, RMP, D.A. (PGMI), Diploma in Child Health. Over 20 years of dedicated medical experience treating children's illnesses.
            </p>
          </div>

          {/* COL 2: QUICK LINKS */}
          <div className="space-y-3">
            <h4 className="text-xs font-bold uppercase tracking-wider text-teal-400">Quick Links</h4>
            <ul className="space-y-2 text-xs font-medium">
              {[
                { name: 'Home', href: '#home' },
                { name: 'About Doctor', href: '#about' },
                { name: 'Services', href: '#services' },
                { name: 'Videos', href: '#videos' },
                { name: 'Appointment', href: '#appointment' },
                { name: 'Location', href: '#location' },
                { name: 'FAQs', href: '#faqs' },
                { name: 'Contact', href: '#contact' },
              ].map((link) => (
                <li key={link.name}>
                  <a
                    href={link.href}
                    onClick={(e) => handleNavClick(e, link.href)}
                    className="hover:text-teal-300 transition-colors"
                  >
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* COL 3: CONTACT */}
          <div className="space-y-3">
            <h4 className="text-xs font-bold uppercase tracking-wider text-teal-400">Clinic Contact</h4>
            <ul className="space-y-2.5 text-xs">
              <li className="flex items-center space-x-2.5">
                <Phone className="w-4 h-4 text-teal-500 shrink-0" />
                <a href={DOCTOR_PROFILE.callUrl} className="hover:text-white font-semibold">
                  {DOCTOR_PROFILE.phone}
                </a>
              </li>
              <li className="flex items-center space-x-2.5">
                <MessageCircle className="w-4 h-4 text-emerald-500 shrink-0" />
                <a href={DOCTOR_PROFILE.whatsappUrl} target="_blank" rel="noreferrer" className="hover:text-emerald-300 font-semibold">
                  WhatsApp: {DOCTOR_PROFILE.whatsapp}
                </a>
              </li>
              <li className="flex items-start space-x-2.5">
                <MapPin className="w-4 h-4 text-teal-500 shrink-0 mt-0.5" />
                <span>AI Shifa Children and Maternity Home, Okara, Pakistan</span>
              </li>
            </ul>
          </div>

          {/* COL 4: BOOK APPOINTMENT */}
          <div className="space-y-4">
            <h4 className="text-xs font-bold uppercase tracking-wider text-teal-400">Book Appointment</h4>
            <p className="text-xs text-slate-400 leading-relaxed">
              Request a medical consultation slot for your child at AI Shifa Children and Maternity Home, Okara.
            </p>
            <button
              onClick={onOpenAppointment}
              className="w-full inline-flex items-center justify-center space-x-2 py-3 px-4 bg-teal-600 hover:bg-teal-500 text-white font-bold text-xs rounded-xl shadow-sm transition-colors"
            >
              <Calendar className="w-4 h-4" />
              <span>Book Appointment</span>
            </button>
            <div className="pt-2">
              <button
                onClick={onOpenAdmin}
                className="text-[11px] text-slate-500 hover:text-slate-300 underline"
              >
                Clinic Staff Portal
              </button>
            </div>
          </div>

        </div>

        {/* BOTTOM DISCLAIMER & COPYRIGHT */}
        <div className="pt-8 text-center space-y-4">
          <p className="text-[11px] text-slate-500 max-w-3xl mx-auto leading-relaxed">
            Medical information on this website is for general informational purposes and does not replace professional medical consultation.
          </p>
          <div className="text-xs text-slate-400 font-semibold">
            © {currentYear} Dr. Shakeel Anjum Ramay. All Rights Reserved.
          </div>
        </div>

      </div>
    </footer>
  );
};
