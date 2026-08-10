import React, { useState } from 'react';
import { Calendar, CheckCircle2, Award, Building2, UserCheck, Video, Play, Sparkles } from 'lucide-react';
import { DOCTOR_PROFILE, CLINIC_IMAGES, CLINIC_VIDEOS } from '../data/doctorData';
import { VideoItem } from '../types';

interface AboutDoctorProps {
  onOpenAppointment: () => void;
  onSelectVideo?: (video: VideoItem) => void;
}

export const AboutDoctor: React.FC<AboutDoctorProps> = ({ onOpenAppointment, onSelectVideo }) => {
  const primaryImage = CLINIC_IMAGES.find(img => img.id === 'second_doctor_img') || CLINIC_IMAGES[1];
  const introVideo = CLINIC_VIDEOS.find(v => v.id === 'vid1') || CLINIC_VIDEOS[0];
  const [videoError, setVideoError] = useState(false);

  return (
    <section id="about" className="py-16 sm:py-20 bg-slate-50/50 border-b border-slate-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          
          {/* LEFT: IMAGE GALLERY & INTRODUCTION VIDEO */}
          <div className="lg:col-span-5 relative space-y-4">
            
            {/* Primary Profile Image Card */}
            <div className="relative rounded-2xl overflow-hidden shadow-lg border border-slate-200/90 bg-white p-1.5 group">
              <img
                src={primaryImage.directUrl}
                alt={primaryImage.alt}
                className="w-full h-72 sm:h-80 object-cover rounded-xl group-hover:scale-[1.01] transition-transform duration-500"
                loading="lazy"
                width="600"
                height="500"
              />
              <div className="absolute top-3 left-3 bg-teal-800/90 text-white text-[10px] font-bold px-2.5 py-1 rounded-full backdrop-blur-xs shadow-xs">
                Dr. Shakeel Anjum Ramay
              </div>
            </div>

            {/* MAIN DOCTOR INTRODUCTION VIDEO CARD */}
            <div className="p-3.5 bg-slate-900 text-white rounded-2xl border border-slate-800 shadow-xl space-y-2.5">
              <div className="flex items-center justify-between">
                <div className="flex items-center space-x-2">
                  <Video className="w-4 h-4 text-teal-400" />
                  <span className="text-xs font-bold text-white tracking-wide">
                    Official Practice Introduction Video
                  </span>
                </div>
                <span className="text-[10px] text-teal-300 bg-teal-950/90 px-2 py-0.5 rounded border border-teal-800/60 font-semibold">
                  Dr. Shakeel Anjum Ramay
                </span>
              </div>

              <div className="relative aspect-video rounded-xl overflow-hidden bg-slate-950 border border-slate-800 flex items-center justify-center group">
                {!videoError ? (
                  <iframe
                    src={`${introVideo.embedUrl}?autoplay=0`}
                    title={introVideo.title}
                    className="w-full h-full border-0"
                    allow="fullscreen; picture-in-picture"
                    allowFullScreen
                    onError={() => setVideoError(true)}
                  />
                ) : (
                  <div 
                    onClick={() => onSelectVideo && onSelectVideo(introVideo)}
                    className="relative w-full h-full cursor-pointer flex items-center justify-center bg-slate-800 group"
                  >
                    <img
                      src={introVideo.thumbnailUrl}
                      alt={introVideo.title}
                      className="w-full h-full object-cover opacity-80 group-hover:opacity-100 transition-opacity"
                      onError={(e) => {
                        (e.target as HTMLImageElement).src = DOCTOR_PROFILE.heroImage;
                      }}
                    />
                    <div className="absolute inset-0 bg-slate-950/40 group-hover:bg-slate-950/20 transition-colors flex items-center justify-center">
                      <div className="w-12 h-12 rounded-full bg-teal-500 text-slate-950 flex items-center justify-center shadow-lg group-hover:scale-110 transition-transform">
                        <Play className="w-6 h-6 fill-slate-950 ml-0.5" />
                      </div>
                    </div>
                  </div>
                )}
              </div>
              <p className="text-[11px] text-slate-300 font-medium text-center">
                Watch Dr. Shakeel Anjum Ramay introduce his 20+ years child healthcare practice in Gamber, Pakistan.
              </p>
            </div>

            {/* Experience Card Overlay */}
            <div className="p-4 rounded-2xl bg-teal-800 text-white shadow-lg flex items-center space-x-4">
              <div className="w-12 h-12 rounded-xl bg-teal-700 flex items-center justify-center shrink-0">
                <Award className="w-6 h-6 text-teal-200" />
              </div>
              <div>
                <div className="text-lg font-bold">20+ Years Medical Practice</div>
                <div className="text-xs text-teal-100">Al Shifa Children & Maternity Home, Gamber</div>
              </div>
            </div>
          </div>

          {/* RIGHT: DETAILED CONTENT */}
          <div className="lg:col-span-7 space-y-6">
            
            <div>
              <span className="text-xs font-bold uppercase tracking-wider text-teal-700 bg-teal-100/80 px-3 py-1 rounded-full border border-teal-200">
                About The Practitioner
              </span>
              <div className="flex flex-wrap items-baseline gap-3 mt-3">
                <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 tracking-tight">
                  Meet Dr. Shakeel Anjum Ramay
                </h2>
                {DOCTOR_PROFILE.nameUrdu && (
                  <span className="text-xl font-bold text-teal-800" dir="rtl">
                    ({DOCTOR_PROFILE.nameUrdu})
                  </span>
                )}
              </div>
            </div>

            <p className="text-base sm:text-lg text-slate-700 leading-relaxed font-normal">
              Dr. Shakeel Anjum Ramay is an experienced medical practitioner providing child healthcare services to families at Al Shifa Children and Maternity Home in Gamber, Pakistan. With more than 20 years of experience in treating children's diseases, his approach focuses on professional assessment, thoughtful medical guidance and compassionate care for children and their families.
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
