import React from 'react';
import { Award, Heart, Shield, Sparkles, CalendarCheck, PhoneCall, MapPin } from 'lucide-react';
import { CLINIC_IMAGES } from '../data/doctorData';

export const WhyChooseUs: React.FC = () => {
  const reasons = [
    {
      title: '20+ Years Experience',
      desc: "Two decades of hands-on medical experience diagnosing and managing children's health conditions in Gamber and Okara.",
      icon: Award
    },
    {
      title: 'Child-Focused Care',
      desc: 'Gentle, patient, and welcoming approach specially attuned to reducing anxiety in infants and young children.',
      icon: Heart
    },
    {
      title: 'Professional Medical Background',
      desc: 'MD (Medicine), MBBS, D.A. (PGMI), Diploma in Child Health, and Member Pakistan Pediatric Association Punjab.',
      icon: Shield
    },
    {
      title: 'Compassionate Approach',
      desc: 'Clear, reassuring health guidance for parents, empowering families with proper home care and preventive tips.',
      icon: Sparkles
    },
    {
      title: 'Easy Appointment Booking',
      desc: 'Simple multi-step online request form with custom date, day, and time selection.',
      icon: CalendarCheck
    },
    {
      title: 'Direct WhatsApp & Phone Contact',
      desc: 'Quick access to clinic staff via telephone and instant WhatsApp messaging for all inquiries.',
      icon: PhoneCall
    },
    {
      title: 'Convenient Adda Gamber Location',
      desc: 'Accessible clinic location at Adda Gamber with direct Google Maps navigation.',
      icon: MapPin
    }
  ];

  const supportingImg1 = CLINIC_IMAGES.find(img => img.id === 'img2') || CLINIC_IMAGES[1];
  const supportingImg2 = CLINIC_IMAGES.find(img => img.id === 'img4') || CLINIC_IMAGES[3];

  return (
    <section className="py-16 sm:py-24 bg-slate-50/70 border-b border-slate-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* HEADER */}
        <div className="text-center max-w-3xl mx-auto mb-14 space-y-3">
          <span className="text-xs font-bold uppercase tracking-wider text-teal-700 bg-teal-100/80 px-3.5 py-1 rounded-full border border-teal-200">
            Dedicated Patient Commitment
          </span>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 tracking-tight">
            Why Families Choose Experienced Care
          </h2>
          <p className="text-base text-slate-600">
            Providing reliable child healthcare, clinical excellence, and family-centered consultation in Adda Gamber.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
          
          {/* REASONS GRID */}
          <div className="lg:col-span-7 grid grid-cols-1 sm:grid-cols-2 gap-5">
            {reasons.map((item, idx) => {
              const IconComponent = item.icon;
              return (
                <div
                  key={idx}
                  className="bg-white p-5 rounded-2xl border border-slate-200/80 shadow-2xs hover:shadow-md hover:border-teal-300 transition-all duration-300 group"
                >
                  <div className="w-10 h-10 rounded-xl bg-teal-50 text-teal-700 flex items-center justify-center mb-3 group-hover:bg-teal-600 group-hover:text-white transition-colors">
                    <IconComponent className="w-5 h-5" />
                  </div>
                  <h3 className="text-base font-bold text-slate-900 mb-1.5 group-hover:text-teal-800 transition-colors">
                    {item.title}
                  </h3>
                  <p className="text-xs text-slate-600 leading-relaxed">
                    {item.desc}
                  </p>
                </div>
              );
            })}
          </div>

          {/* VISUAL COLLAGE */}
          <div className="lg:col-span-5 space-y-5">
            <div className="relative rounded-3xl overflow-hidden shadow-lg border border-slate-200 bg-white p-2">
              <img
                src={supportingImg1.directUrl}
                alt={supportingImg1.alt}
                className="w-full h-auto object-cover rounded-2xl max-h-[280px]"
                loading="lazy"
              />
            </div>
            <div className="relative rounded-3xl overflow-hidden shadow-lg border border-slate-200 bg-white p-2">
              <img
                src={supportingImg2.directUrl}
                alt={supportingImg2.alt}
                className="w-full h-auto object-cover rounded-2xl max-h-[260px]"
                loading="lazy"
              />
            </div>
          </div>

        </div>

      </div>
    </section>
  );
};
