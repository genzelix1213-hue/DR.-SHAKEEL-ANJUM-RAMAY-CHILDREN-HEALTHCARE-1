import React from 'react';
import { Award, GraduationCap, Stethoscope, HeartHandshake } from 'lucide-react';

export const TrustSection: React.FC = () => {
  const trustCards = [
    {
      stat: '20+',
      label: 'Years of Experience',
      desc: 'Dedicated child healthcare practice',
      icon: Award,
      color: 'bg-teal-50 text-teal-700 border-teal-200'
    },
    {
      stat: 'MD',
      label: 'Medicine',
      desc: 'Postgraduate Medical Degree',
      icon: GraduationCap,
      color: 'bg-sky-50 text-sky-700 border-sky-200'
    },
    {
      stat: 'MBBS',
      label: 'Medical Qualification',
      desc: 'Registered Medical Practitioner (RMP)',
      icon: Stethoscope,
      color: 'bg-indigo-50 text-indigo-700 border-indigo-200'
    },
    {
      stat: 'Child Health',
      label: 'Experienced Care',
      desc: 'Diploma in Child Health & Pediatric Care',
      icon: HeartHandshake,
      color: 'bg-emerald-50 text-emerald-700 border-emerald-200'
    }
  ];

  return (
    <section className="py-12 bg-white border-b border-slate-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-10 space-y-2">
          <h2 className="text-2xl sm:text-3xl font-extrabold text-slate-900 tracking-tight">
            20+ Years of Experience in Child Healthcare
          </h2>
          <p className="text-sm sm:text-base text-slate-600 font-medium">
            Serving families in Okara and surrounding areas for more than two decades.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {trustCards.map((card, idx) => {
            const IconComponent = card.icon;
            return (
              <div
                key={idx}
                className="bg-slate-50/80 hover:bg-white rounded-2xl p-6 border border-slate-200/80 shadow-xs hover:shadow-md transition-all duration-300 flex flex-col items-center text-center group"
              >
                <div className={`w-14 h-14 rounded-2xl flex items-center justify-center border ${card.color} mb-4 group-hover:scale-105 transition-transform`}>
                  <IconComponent className="w-7 h-7" />
                </div>
                <div className="text-2xl font-black text-slate-900 mb-1">{card.stat}</div>
                <div className="text-sm font-bold text-slate-800 mb-1">{card.label}</div>
                <div className="text-xs text-slate-600 font-medium">{card.desc}</div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};
