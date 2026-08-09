import React from 'react';
import { Phone, MessageCircle, Calendar, Award, ShieldCheck, HeartPulse } from 'lucide-react';
import { DOCTOR_PROFILE } from '../data/doctorData';

interface HeroProps {
  onOpenAppointment: () => void;
}

export const Hero: React.FC<HeroProps> = ({ onOpenAppointment }) => {
  return (
    <section id="home" className="relative bg-gradient-to-b from-teal-50/60 via-white to-slate-50 pt-8 pb-16 lg:pt-14 lg:pb-24 overflow-hidden border-b border-slate-100">
      {/* Background Decorative Circles */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full max-w-7xl h-full pointer-events-none opacity-40">
        <div className="absolute top-10 left-10 w-72 h-72 bg-teal-200/40 rounded-full blur-3xl"></div>
        <div className="absolute bottom-10 right-10 w-96 h-96 bg-sky-200/40 rounded-full blur-3xl"></div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
          
          {/* LEFT CONTENT */}
          <div className="lg:col-span-7 space-y-6 text-left">
            
            {/* BADGE */}
            <div className="inline-flex items-center space-x-2 px-3.5 py-1.5 rounded-full bg-teal-100/80 border border-teal-200/80 text-teal-800 text-xs font-bold tracking-wide uppercase shadow-2xs">
              <Award className="w-4 h-4 text-teal-700" />
              <span>20+ Years of Experience</span>
            </div>

            {/* HEADLINE */}
            <h1 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-slate-900 tracking-tight leading-tight">
              Compassionate Child Healthcare, Backed by <span className="text-teal-700 underline decoration-teal-300 decoration-wavy underline-offset-4">20+ Years</span> of Experience
            </h1>

            {/* SUPPORTING TEXT */}
            <p className="text-base sm:text-lg text-slate-700 leading-relaxed max-w-2xl font-normal">
              Experienced healthcare for children, with compassionate guidance for parents and families in Gamber and Okara.
            </p>

            {/* DOCTOR CREDENTIALS CARD IN HERO */}
            <div className="p-4 rounded-xl bg-white/90 border border-slate-200/80 shadow-sm backdrop-blur-sm space-y-2 max-w-xl">
              <div className="flex items-center space-x-2">
                <HeartPulse className="w-5 h-5 text-teal-600 shrink-0" />
                <span className="font-bold text-slate-900 text-lg">{DOCTOR_PROFILE.name}</span>
              </div>
              <div className="flex flex-wrap gap-1.5 pt-1">
                {DOCTOR_PROFILE.credentials.map((cred, i) => (
                  <span key={i} className="px-2.5 py-1 bg-slate-100 text-slate-800 text-xs font-semibold rounded-md border border-slate-200">
                    {cred}
                  </span>
                ))}
              </div>
            </div>

            {/* ACTION BUTTONS */}
            <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-3 pt-2">
              <button
                onClick={onOpenAppointment}
                className="inline-flex items-center justify-center space-x-2.5 px-6 py-3.5 text-sm font-bold text-white bg-teal-600 hover:bg-teal-700 rounded-xl shadow-md hover:shadow-lg transition-all transform hover:-translate-y-0.5 active:translate-y-0"
              >
                <Calendar className="w-4 h-4" />
                <span>BOOK AN APPOINTMENT</span>
              </button>

              <a
                href={DOCTOR_PROFILE.callUrl}
                className="inline-flex items-center justify-center space-x-2 px-5 py-3.5 text-sm font-bold text-slate-800 bg-white hover:bg-slate-50 border border-slate-300 rounded-xl shadow-xs transition-colors"
              >
                <Phone className="w-4 h-4 text-teal-600" />
                <span>CALL NOW</span>
              </a>

              <a
                href={DOCTOR_PROFILE.whatsappUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center space-x-2 px-5 py-3.5 text-sm font-bold text-emerald-800 bg-emerald-50 hover:bg-emerald-100 border border-emerald-300 rounded-xl shadow-xs transition-colors"
              >
                <MessageCircle className="w-4 h-4 text-emerald-600 fill-emerald-600" />
                <span>WHATSAPP US</span>
              </a>
            </div>

            {/* TRUST MINI BADGES */}
            <div className="pt-4 flex flex-wrap items-center gap-6 text-xs text-slate-600 font-medium">
              <div className="flex items-center space-x-1.5">
                <ShieldCheck className="w-4 h-4 text-teal-600" />
                <span>Only Location: Adda Gamber</span>
              </div>
              <div className="flex items-center space-x-1.5">
                <ShieldCheck className="w-4 h-4 text-teal-600" />
                <span>Diploma in Child Health</span>
              </div>
              <div className="flex items-center space-x-1.5">
                <ShieldCheck className="w-4 h-4 text-teal-600" />
                <span>Member PPA Punjab</span>
              </div>
            </div>

          </div>

          {/* RIGHT HERO IMAGE */}
          <div className="lg:col-span-5 relative flex justify-center">
            <div className="relative w-full max-w-md lg:max-w-none">
              
              {/* Decorative Card Accent */}
              <div className="absolute -inset-2 bg-gradient-to-r from-teal-500 to-sky-500 rounded-3xl blur-lg opacity-25 transform rotate-1"></div>

              {/* Main Image Container */}
              <div className="relative bg-white p-2.5 rounded-3xl shadow-xl border border-slate-200/90 overflow-hidden">
                <img
                  src={DOCTOR_PROFILE.heroImage}
                  alt="Dr. Shakeel Anjum Ramay - Experienced Child Healthcare Doctor in Adda Gamber"
                  className="w-full h-auto object-cover rounded-2xl max-h-[500px] lg:max-h-[560px] shadow-sm"
                  loading="eager"
                  width="600"
                  height="700"
                />

                {/* Floating Trust Badge */}
                <div className="absolute bottom-5 left-5 right-5 bg-white/95 backdrop-blur-md p-3.5 rounded-2xl border border-slate-200/80 shadow-md flex items-center space-x-3">
                  <div className="w-10 h-10 rounded-xl bg-teal-100 text-teal-700 flex items-center justify-center shrink-0 font-bold">
                    20+
                  </div>
                  <div>
                    <div className="text-xs font-bold text-slate-900">Dr. Shakeel Anjum Ramay</div>
                    <div className="text-[11px] font-medium text-slate-600">Child Healthcare Specialist in Gamber & Okara</div>
                  </div>
                </div>

              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};
