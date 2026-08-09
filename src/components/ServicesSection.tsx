import React from 'react';
import { 
  Stethoscope, Activity, Thermometer, Wind, ShieldAlert, 
  TrendingUp, Baby, Apple, Sparkles, HeartPulse, Clock, Users, Calendar, ArrowRight
} from 'lucide-react';
import { MEDICAL_SERVICES } from '../data/doctorData';

interface ServicesSectionProps {
  onOpenAppointment: (serviceTitle?: string) => void;
}

const iconMap: Record<string, React.ElementType> = {
  Stethoscope,
  Activity,
  Thermometer,
  Wind,
  ShieldAlert,
  TrendingUp,
  Baby,
  Apple,
  Sparkles,
  HeartPulse,
  Clock,
  Users
};

export const ServicesSection: React.FC<ServicesSectionProps> = ({ onOpenAppointment }) => {
  return (
    <section id="services" className="py-16 sm:py-24 bg-white border-b border-slate-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* HEADER */}
        <div className="text-center max-w-3xl mx-auto mb-14 space-y-3">
          <span className="text-xs font-bold uppercase tracking-wider text-teal-700 bg-teal-100/80 px-3.5 py-1 rounded-full border border-teal-200">
            Comprehensive Medical Care
          </span>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 tracking-tight">
            Child Healthcare Services
          </h2>
          <p className="text-base text-slate-600 leading-relaxed">
            Professional diagnostic consultation, thoughtful illness assessment, and compassionate guidance tailored for infants, children, and young adolescents.
          </p>
        </div>

        {/* SERVICES GRID */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {MEDICAL_SERVICES.map((service) => {
            const IconComponent = iconMap[service.iconName] || Stethoscope;
            return (
              <div
                key={service.id}
                className="bg-slate-50/70 hover:bg-white rounded-2xl p-6 border border-slate-200/80 shadow-2xs hover:shadow-lg transition-all duration-300 flex flex-col justify-between group"
              >
                <div>
                  <div className="w-12 h-12 rounded-xl bg-teal-100 text-teal-700 flex items-center justify-center mb-4 group-hover:bg-teal-600 group-hover:text-white transition-colors duration-300">
                    <IconComponent className="w-6 h-6" />
                  </div>
                  <h3 className="text-lg font-bold text-slate-900 mb-2 group-hover:text-teal-700 transition-colors">
                    {service.title}
                  </h3>
                  <p className="text-xs text-slate-600 leading-relaxed font-normal mb-6">
                    {service.description}
                  </p>
                </div>

                <button
                  onClick={() => onOpenAppointment(service.title)}
                  className="w-full inline-flex items-center justify-between pt-3 border-t border-slate-200/80 text-xs font-bold text-teal-700 hover:text-teal-900 transition-colors group-hover:border-teal-200"
                >
                  <span className="flex items-center space-x-1.5">
                    <Calendar className="w-3.5 h-3.5" />
                    <span>Book Appointment</span>
                  </span>
                  <ArrowRight className="w-3.5 h-3.5 transform group-hover:translate-x-1 transition-transform" />
                </button>
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
};
