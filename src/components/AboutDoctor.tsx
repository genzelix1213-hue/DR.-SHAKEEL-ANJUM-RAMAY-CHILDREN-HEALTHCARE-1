import React from 'react';
import { Calendar, CheckCircle2, Award, Building2, UserCheck } from 'lucide-react';
import { DOCTOR_PROFILE, CLINIC_IMAGES } from '../data/doctorData';

interface AboutDoctorProps {
  onOpenAppointment: () => void;
}

export const AboutDoctor: React.FC<AboutDoctorProps> = ({ onOpenAppointment }) => {
  const aboutImage = CLINIC_IMAGES.find(img => img.id === 'img6') || CLINIC_IMAGES[0];

  return (
    <section id="about" className="py-16 sm:py-20 bg-slate-50/50 border-b border-slate-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          
          {/* LEFT: IMAGE & BADGE */}
          <div className="lg:col-span-5 relative">
            <div className="relative rounded-3xl overflow-hidden shadow-xl border border-slate-200 bg-white p-2">
              <img
                src={aboutImage.directUrl}
                alt={aboutImage.alt}
                className="w-full h-auto object-cover rounded-2xl max-h-[480px]"
                loading="lazy"
                width="500"
                height="600"
              />
              <div className="absolute top-6 right-6 bg-slate-900/90 text-white text-xs font-bold px-3 py-1.5 rounded-full backdrop-blur-md shadow-md">
                Adda Gamber Clinic
              </div>
            </div>

            {/* Experience Card Overlay */}
            <div className="mt-4 p-4 rounded-2xl bg-teal-800 text-white shadow-lg flex items-center space-x-4">
              <div className="w-12 h-12 rounded-xl bg-teal-700 flex items-center justify-center shrink-0">
                <Award className="w-6 h-6 text-teal-200" />
              </div>
              <div>
                <div className="text-lg font-bold">20+ Years Medical Practice</div>
                <div className="text-xs text-teal-100">Trusted Child Care in Gamber & Okara</div>
              </div>
            </div>
          </div>

          {/* RIGHT: DETAILED CONTENT */}
          <div className="lg:col-span-7 space-y-6">
            
            <div>
              <span className="text-xs font-bold uppercase tracking-wider text-teal-700 bg-teal-100/80 px-3 py-1 rounded-full border border-teal-200">
                About The Practitioner
              </span>
              <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 mt-3 tracking-tight">
                Meet Dr. Shakeel Anjum Ramay
              </h2>
            </div>

            <p className="text-base sm:text-lg text-slate-700 leading-relaxed font-normal">
              Dr. Shakeel Anjum Ramay is an experienced medical practitioner providing child healthcare services to families in Gamber and Okara. With more than 20 years of experience in treating children's diseases, his approach focuses on professional assessment, thoughtful medical guidance and compassionate care for children and their families.
            </p>

            {/* CREDENTIALS */}
            <div className="space-y-3 pt-2">
              <h3 className="text-sm font-bold text-slate-900 uppercase tracking-wide flex items-center space-x-2">
                <UserCheck className="w-4 h-4 text-teal-600" />
                <span>Qualifications & Degrees</span>
              </h3>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
                {DOCTOR_PROFILE.credentials.map((cred, idx) => (
                  <div key={idx} className="flex items-center space-x-2.5 p-2.5 rounded-xl bg-white border border-slate-200/90 shadow-2xs">
                    <CheckCircle2 className="w-4 h-4 text-teal-600 shrink-0" />
                    <span className="text-xs font-semibold text-slate-800">{cred}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* PROFESSIONAL BACKGROUND */}
            <div className="space-y-3 pt-2">
              <h3 className="text-sm font-bold text-slate-900 uppercase tracking-wide flex items-center space-x-2">
                <Building2 className="w-4 h-4 text-teal-600" />
                <span>Professional Leadership & Roles</span>
              </h3>
              <div className="space-y-2">
                {DOCTOR_PROFILE.background.map((bg, idx) => (
                  <div key={idx} className="flex items-start space-x-3 p-3 rounded-xl bg-white border border-slate-200/90 shadow-2xs">
                    <div className="w-2 h-2 rounded-full bg-teal-600 mt-1.5 shrink-0"></div>
                    <span className="text-xs font-medium text-slate-800">{bg}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* CTA */}
            <div className="pt-4">
              <button
                onClick={onOpenAppointment}
                className="inline-flex items-center space-x-2.5 px-6 py-3.5 text-sm font-bold text-white bg-teal-600 hover:bg-teal-700 rounded-xl shadow-md transition-all transform hover:-translate-y-0.5"
              >
                <Calendar className="w-4 h-4" />
                <span>Book an Appointment</span>
              </button>
            </div>

          </div>

        </div>
      </div>
    </section>
  );
};
