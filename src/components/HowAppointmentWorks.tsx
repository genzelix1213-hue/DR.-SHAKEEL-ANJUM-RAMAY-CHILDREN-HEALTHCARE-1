import React from 'react';
import { Calendar, FileText, CheckCircle2 } from 'lucide-react';

export const HowAppointmentWorks: React.FC = () => {
  const steps = [
    {
      num: '01',
      title: 'Choose Your Date & Time',
      desc: 'Select your preferred appointment date, day of the week, and suitable time slot for your visit to AI Shifa Children and Maternity Home, Okara.',
      icon: Calendar
    },
    {
      num: '02',
      title: 'Submit Appointment Request',
      desc: 'Provide patient details, child’s age, and primary reason for visit through our secure online appointment form.',
      icon: FileText
    },
    {
      num: '03',
      title: 'Clinic Confirms Your Appointment',
      desc: 'Our clinic reception will review availability and contact you via phone or WhatsApp to confirm your appointment time.',
      icon: CheckCircle2
    }
  ];

  return (
    <section className="py-16 bg-slate-50/80 border-b border-slate-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="text-center max-w-3xl mx-auto mb-12 space-y-2">
          <span className="text-xs font-bold uppercase tracking-wider text-teal-700 bg-teal-100/80 px-3.5 py-1 rounded-full border border-teal-200">
            Simple 3-Step Process
          </span>
          <h2 className="text-3xl font-extrabold text-slate-900 tracking-tight">
            How Booking Works
          </h2>
          <p className="text-sm text-slate-600">
            Convenient and hassle-free scheduling for your child's medical consultation.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {steps.map((step, idx) => {
            const IconComponent = step.icon;
            return (
              <div
                key={idx}
                className="bg-white p-6 rounded-2xl border border-slate-200/90 shadow-2xs hover:shadow-md transition-all relative flex flex-col justify-between"
              >
                <div>
                  <div className="flex items-center justify-between mb-4">
                    <span className="text-3xl font-black text-teal-600/30 font-mono">{step.num}</span>
                    <div className="w-10 h-10 rounded-xl bg-teal-50 text-teal-700 flex items-center justify-center">
                      <IconComponent className="w-5 h-5" />
                    </div>
                  </div>
                  <h3 className="text-lg font-bold text-slate-900 mb-2">{step.title}</h3>
                  <p className="text-xs text-slate-600 leading-relaxed">{step.desc}</p>
                </div>
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
};
