import React, { useState } from 'react';
import { Play, ExternalLink, Video, Sparkles, CheckCircle } from 'lucide-react';
import { CLINIC_VIDEOS } from '../data/doctorData';
import { VideoItem } from '../types';

interface FeaturedVideoSectionProps {
  onSelectVideo: (video: VideoItem) => void;
}

export const FeaturedVideoSection: React.FC<FeaturedVideoSectionProps> = ({ onSelectVideo }) => {
  const featuredVideo = CLINIC_VIDEOS.find(v => v.featured) || CLINIC_VIDEOS[0];
  const [hasError, setHasError] = useState(false);

  return (
    <section className="py-16 bg-slate-900 text-white border-b border-slate-800 relative overflow-hidden">
      {/* Background Glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full max-w-5xl h-96 bg-teal-500/10 rounded-full blur-3xl pointer-events-none"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
          
          {/* LEFT: TEXT CONTENT */}
          <div className="lg:col-span-5 space-y-5">
            <div className="inline-flex items-center space-x-2 px-3 py-1 rounded-full bg-teal-500/20 text-teal-300 text-xs font-bold uppercase tracking-wider border border-teal-500/30">
              <Sparkles className="w-3.5 h-3.5" />
              <span>Featured Video Message</span>
            </div>

            <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight leading-tight">
              A Message From Dr. Shakeel Anjum Ramay
            </h2>

            <p className="text-slate-300 text-sm sm:text-base leading-relaxed font-normal">
              Watch Dr. Shakeel Anjum Ramay explain his philosophy on compassionate child healthcare, early diagnosis, and parent partnership in Okara, Pakistan.
            </p>

            <div className="space-y-2 pt-2">
              <div className="flex items-center space-x-2.5 text-xs text-slate-300 font-medium">
                <CheckCircle className="w-4 h-4 text-teal-400 shrink-0" />
                <span>20+ Years Dedicated Medical Experience</span>
              </div>
              <div className="flex items-center space-x-2.5 text-xs text-slate-300 font-medium">
                <CheckCircle className="w-4 h-4 text-teal-400 shrink-0" />
                <span>Child-Friendly & Empathetic Practice</span>
              </div>
              <div className="flex items-center space-x-2.5 text-xs text-slate-300 font-medium">
                <CheckCircle className="w-4 h-4 text-teal-400 shrink-0" />
                <span>AI Shifa Children & Maternity Home, Okara</span>
              </div>
            </div>

            <div className="pt-3 flex flex-wrap gap-3">
              <button
                onClick={() => onSelectVideo(featuredVideo)}
                className="inline-flex items-center space-x-2 px-6 py-3 bg-teal-500 hover:bg-teal-400 text-slate-950 font-bold text-sm rounded-xl shadow-lg transition-transform transform hover:-translate-y-0.5"
              >
                <Play className="w-4 h-4 fill-slate-950" />
                <span>Play Introduction Video</span>
              </button>

              <a
                href={featuredVideo.pageUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center space-x-2 px-5 py-3 bg-slate-800 hover:bg-slate-700 text-white font-semibold text-sm rounded-xl border border-slate-700 transition-colors"
              >
                <span>Watch on Streamable</span>
                <ExternalLink className="w-4 h-4 text-slate-400" />
              </a>
            </div>
          </div>

          {/* RIGHT: VIDEO EMBED OR THUMBNAIL */}
          <div className="lg:col-span-7">
            <div className="relative rounded-2xl overflow-hidden bg-slate-950 border border-slate-800 shadow-2xl group">
              <div className="aspect-video relative w-full overflow-hidden flex items-center justify-center">
                {!hasError ? (
                  <iframe
                    src={`${featuredVideo.embedUrl}?autoplay=0`}
                    title={featuredVideo.title}
                    className="w-full h-full border-0"
                    allow="fullscreen; picture-in-picture"
                    allowFullScreen
                    onError={() => setHasError(true)}
                  />
                ) : (
                  <div 
                    onClick={() => onSelectVideo(featuredVideo)}
                    className="relative w-full h-full cursor-pointer flex items-center justify-center bg-slate-800 group"
                  >
                    <img
                      src={featuredVideo.thumbnailUrl}
                      alt={featuredVideo.title}
                      className="w-full h-full object-cover opacity-80 group-hover:opacity-100 transition-opacity"
                      onError={(e) => {
                        (e.target as HTMLImageElement).src = 'https://i.ibb.co/RkYq5Ytx/Whats-App-Image-2026-08-09-at-8-21-20-AM.jpg';
                      }}
                    />
                    <div className="absolute inset-0 bg-slate-950/40 group-hover:bg-slate-950/20 transition-colors flex items-center justify-center">
                      <div className="w-16 h-16 rounded-full bg-teal-500 text-slate-950 flex items-center justify-center shadow-xl group-hover:scale-110 transition-transform">
                        <Play className="w-8 h-8 fill-slate-950 ml-1" />
                      </div>
                    </div>
                  </div>
                )}
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};
