import React, { useState, useEffect } from 'react';
import { Phone, MessageCircle, Calendar, Menu, X, ShieldCheck, HeartPulse } from 'lucide-react';
import { DOCTOR_PROFILE } from '../data/doctorData';

interface HeaderProps {
  onOpenAppointment: () => void;
  onOpenAdmin: () => void;
}

export const Header: React.FC<HeaderProps> = ({ onOpenAppointment, onOpenAdmin }) => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'Home', href: '#home' },
    { name: 'About Doctor', href: '#about' },
    { name: 'Services', href: '#services' },
    { name: 'Videos', href: '#videos' },
    { name: 'Appointment', href: '#appointment' },
    { name: 'Location', href: '#location' },
    { name: 'Testimonials', href: '#testimonials' },
    { name: 'FAQs', href: '#faqs' },
    { name: 'Contact', href: '#contact' },
  ];

  const handleNavClick = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    e.preventDefault();
    setMobileMenuOpen(false);
    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <header 
      className={`sticky top-0 z-40 w-full transition-all duration-300 ${
        isScrolled 
          ? 'bg-white/95 backdrop-blur-md shadow-md border-b border-slate-200/80 py-2.5' 
          : 'bg-white border-b border-slate-100 py-3.5'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between">
          
          {/* LEFT BRANDING */}
          <a href="#home" className="flex items-center space-x-3 group">
            <div className="w-10 h-10 rounded-xl bg-teal-600 text-white flex items-center justify-center font-bold text-lg shadow-sm group-hover:bg-teal-700 transition-colors">
              <HeartPulse className="w-6 h-6 text-white" />
            </div>
            <div>
              <div className="font-extrabold text-slate-900 text-lg leading-tight tracking-tight group-hover:text-teal-700 transition-colors">
                {DOCTOR_PROFILE.name}
              </div>
              <div className="text-xs font-semibold text-teal-700 tracking-wide uppercase">
                Child Healthcare | {DOCTOR_PROFILE.location}
              </div>
            </div>
          </a>

          {/* DESKTOP NAVIGATION */}
          <nav className="hidden xl:flex items-center space-x-1" aria-label="Main Navigation">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                onClick={(e) => handleNavClick(e, link.href)}
                className="px-3 py-1.5 text-xs font-semibold text-slate-700 hover:text-teal-700 hover:bg-teal-50/80 rounded-lg transition-colors"
              >
                {link.name}
              </a>
            ))}
          </nav>

          {/* DESKTOP RIGHT ACTION BUTTONS */}
          <div className="hidden lg:flex items-center space-x-2">
            <a
              href={DOCTOR_PROFILE.callUrl}
              className="inline-flex items-center space-x-1.5 px-3 py-2 text-xs font-bold text-slate-700 hover:text-teal-700 hover:bg-slate-100 rounded-lg transition-colors border border-slate-200"
              title="Call Clinic"
            >
              <Phone className="w-3.5 h-3.5 text-teal-600" />
              <span>Call Now</span>
            </a>

            <a
              href={DOCTOR_PROFILE.whatsappUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center space-x-1.5 px-3 py-2 text-xs font-bold text-emerald-700 bg-emerald-50 hover:bg-emerald-100 border border-emerald-200 rounded-lg transition-colors"
              title="WhatsApp Clinic"
            >
              <MessageCircle className="w-3.5 h-3.5 text-emerald-600 fill-emerald-600" />
              <span>WhatsApp</span>
            </a>

            <button
              onClick={onOpenAppointment}
              className="inline-flex items-center space-x-1.5 px-4 py-2 text-xs font-bold text-white bg-teal-600 hover:bg-teal-700 rounded-lg shadow-sm transition-all transform hover:-translate-y-0.5 active:translate-y-0"
            >
              <Calendar className="w-3.5 h-3.5" />
              <span>Book Appointment</span>
            </button>

            {/* Admin trigger button */}
            <button
              onClick={onOpenAdmin}
              className="p-2 text-slate-500 hover:text-slate-800 hover:bg-slate-100 rounded-lg transition-colors"
              title="Clinic Staff Portal"
              aria-label="Clinic Staff Portal"
            >
              <ShieldCheck className="w-4 h-4" />
            </button>
          </div>

          {/* MOBILE MENU TOGGLE */}
          <div className="flex xl:hidden items-center space-x-2">
            <button
              onClick={onOpenAppointment}
              className="lg:hidden px-3 py-1.5 text-xs font-bold text-white bg-teal-600 rounded-lg shadow-sm"
            >
              Book
            </button>
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="p-2 text-slate-700 hover:bg-slate-100 rounded-lg focus:outline-none"
              aria-label="Toggle navigation menu"
            >
              {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>

        </div>
      </div>

      {/* MOBILE DRAWER MENU */}
      {mobileMenuOpen && (
        <div className="xl:hidden bg-white border-b border-slate-200 px-4 pt-3 pb-6 space-y-3 shadow-lg">
          <div className="grid grid-cols-2 gap-2 pb-2 border-b border-slate-100">
            <a
              href={DOCTOR_PROFILE.callUrl}
              className="flex items-center justify-center space-x-2 py-2.5 px-3 text-xs font-bold text-slate-800 bg-slate-100 rounded-lg"
            >
              <Phone className="w-4 h-4 text-teal-600" />
              <span>Call Now</span>
            </a>
            <a
              href={DOCTOR_PROFILE.whatsappUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center justify-center space-x-2 py-2.5 px-3 text-xs font-bold text-emerald-800 bg-emerald-50 rounded-lg border border-emerald-200"
            >
              <MessageCircle className="w-4 h-4 text-emerald-600" />
              <span>WhatsApp</span>
            </a>
          </div>

          <nav className="flex flex-col space-y-1">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                onClick={(e) => handleNavClick(e, link.href)}
                className="px-3 py-2 text-sm font-semibold text-slate-700 hover:bg-slate-100 rounded-lg"
              >
                {link.name}
              </a>
            ))}
          </nav>

          <div className="pt-2 border-t border-slate-100 flex items-center justify-between">
            <button
              onClick={() => {
                setMobileMenuOpen(false);
                onOpenAppointment();
              }}
              className="w-full py-3 text-center text-sm font-bold text-white bg-teal-600 rounded-xl shadow-sm"
            >
              Book an Appointment
            </button>
          </div>
        </div>
      )}
    </header>
  );
};
