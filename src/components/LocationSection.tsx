import React from 'react';
import { MapPin, Navigation, Phone, MessageCircle, Clock } from 'lucide-react';
import { DOCTOR_PROFILE, CLINIC_IMAGES } from '../data/doctorData';

export const LocationSection: React.FC = () => {
  const clinicImage = CLINIC_IMAGES.find(img => img.id === 'img5') || CLINIC_IMAGES[4];

  return (
    <section id="location" className="py-16 sm:py-24 bg-slate-50/70 border-b border-slate-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* HEADER */}
        <div className="text-center max-w-3xl mx-auto mb-12 space-y-3">
          <span className="text-xs font-bold uppercase tracking-wider text-teal-700 bg-teal-100/80 px-3.5 py-1 rounded-full border border-teal-200">
            CLINIC LOCATION
          </span>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 tracking-tight">
            Al Shifa Children and Maternity Home
          </h2>
          <p className="text-base font-bold text-teal-800">
            Gamber, Pakistan
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
          
          {/* LOCATION DETAILS CARD */}
          <div className="lg:col-span-5 bg-white p-8 rounded-3xl border border-slate-200 shadow-md space-y-6">
            <div className="flex items-center space-x-3">
              <div className="w-12 h-12 rounded-2xl bg-teal-600 text-white flex items-center justify-center shrink-0">
                <MapPin className="w-6 h-6" />
              </div>
              <div>
                <span className="text-[10px] font-extrabold text-teal-700 uppercase tracking-wider block">CLINIC LOCATION</span>
                <h3 className="text-lg font-extrabold text-slate-900 leading-tight">Al Shifa Children and Maternity Home</h3>
                <p className="text-xs text-slate-600 font-bold uppercase tracking-wide">Gamber, Pakistan</p>
              </div>
            </div>

            <div className="space-y-4 text-xs text-slate-700">
              <div className="flex items-start space-x-3 p-3 bg-slate-50 rounded-xl border border-slate-100">
                <MapPin className="w-4 h-4 text-teal-600 shrink-0 mt-0.5" />
                <div>
                  <span className="font-bold text-slate-900 block">Address</span>
                  <span>Al Shifa Children and Maternity Home, Gamber, Pakistan</span>
                </div>
              </div>

              <div className="flex items-start space-x-3 p-3 bg-slate-50 rounded-xl border border-slate-100">
                <Phone className="w-4 h-4 text-teal-600 shrink-0 mt-0.5" />
                <div>
                  <span className="font-bold text-slate-900 block">Clinic Contact</span>
                  <span>{DOCTOR_PROFILE.phone}</span>
                </div>
              </div>

              <div className="flex items-start space-x-3 p-3 bg-slate-50 rounded-xl border border-slate-100">
                <Clock className="w-4 h-4 text-teal-600 shrink-0 mt-0.5" />
                <div>
                  <span className="font-bold text-slate-900 block">Consultation Days</span>
                  <span>Monday – Saturday (Morning & Evening Sessions)</span>
                </div>
              </div>
            </div>

            <div className="pt-2">
              <a
                href={DOCTOR_PROFILE.googleMapsUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full inline-flex items-center justify-center space-x-2 px-6 py-3.5 bg-teal-600 hover:bg-teal-700 text-white font-bold text-sm rounded-xl shadow-md transition-transform transform hover:-translate-y-0.5"
              >
                <Navigation className="w-4 h-4" />
                <span>Get Directions on Google Maps</span>
              </a>
            </div>
          </div>

          {/* MAP VISUAL & CLINIC PHOTO */}
          <div className="lg:col-span-7 grid grid-cols-1 sm:grid-cols-2 gap-4">
            
            {/* Embedded Google Map iframe fallback */}
            <div className="relative h-72 sm:h-auto min-h-[280px] rounded-3xl overflow-hidden border border-slate-200 shadow-md bg-slate-100 flex flex-col justify-between p-6">
              <div className="relative z-10 bg-white/90 backdrop-blur-md p-4 rounded-2xl border border-slate-200 shadow-sm space-y-1">
                <span className="text-[10px] uppercase font-extrabold tracking-wider text-teal-700">Google Maps Navigation</span>
                <h4 className="text-sm font-bold text-slate-900">Al Shifa Children & Maternity Home</h4>
                <p className="text-xs text-slate-600">Click below to launch turn-by-turn navigation to Al Shifa Children and Maternity Home, Gamber on Google Maps.</p>
              </div>

              <div className="relative z-10 pt-4">
                <a
                  href={DOCTOR_PROFILE.googleMapsUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center space-x-2 px-4 py-2 bg-slate-900 text-white text-xs font-bold rounded-xl shadow-md hover:bg-slate-800"
                >
                  <Navigation className="w-3.5 h-3.5 text-teal-400" />
                  <span>View on Google Maps</span>
                </a>
              </div>
            </div>

            {/* Clinic Supporting Photo */}
            <div className="relative rounded-3xl overflow-hidden border border-slate-200 shadow-md bg-white p-2">
              <img
                src={clinicImage.directUrl}
                alt={clinicImage.alt}
                className="w-full h-full object-cover rounded-2xl max-h-[300px]"
                loading="lazy"
              />
            </div>

          </div>

        </div>

      </div>
    </section>
  );
};
