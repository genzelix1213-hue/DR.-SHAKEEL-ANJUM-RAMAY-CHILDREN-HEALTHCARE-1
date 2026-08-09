import React from 'react';
import { Play, Video, ExternalLink } from 'lucide-react';
import { CLINIC_VIDEOS } from '../data/doctorData';
import { VideoItem } from '../types';

interface VideoGallerySectionProps {
  onSelectVideo: (video: VideoItem) => void;
}

export const VideoGallerySection: React.FC<VideoGallerySectionProps> = ({ onSelectVideo }) => {
  return (
    <section id="videos" className="py-16 sm:py-24 bg-white border-b border-slate-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* HEADER */}
        <div className="text-center max-w-3xl mx-auto mb-14 space-y-3">
          <span className="text-xs font-bold uppercase tracking-wider text-teal-700 bg-teal-100/80 px-3.5 py-1 rounded-full border border-teal-200">
            Video Insights & Clinic Tours
          </span>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 tracking-tight">
            Clinic & Doctor Video Gallery
          </h2>
          <p className="text-base text-slate-600">
            Explore authentic videos featuring Dr. Shakeel Anjum Ramay, clinic walkthroughs, pediatric care insights, and guidance for parents.
          </p>
        </div>

        {/* VIDEO GRID */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {CLINIC_VIDEOS.map((video) => (
            <div
              key={video.id}
              className="bg-slate-50/80 hover:bg-white rounded-2xl border border-slate-200/90 shadow-2xs hover:shadow-xl transition-all duration-300 overflow-hidden flex flex-col justify-between group"
            >
              <div>
                {/* Thumbnail Container */}
                <div 
                  onClick={() => onSelectVideo(video)}
                  className="relative aspect-video bg-slate-900 overflow-hidden cursor-pointer"
                >
                  <img
                    src={video.thumbnailUrl}
                    alt={video.title}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500 opacity-90 group-hover:opacity-100"
                    onError={(e) => {
                      (e.target as HTMLImageElement).src = 'https://i.ibb.co/RkYq5Ytx/Whats-App-Image-2026-08-09-at-8-21-20-AM.jpg';
                    }}
                  />
                  <div className="absolute inset-0 bg-slate-950/30 group-hover:bg-slate-950/15 transition-colors flex items-center justify-center">
                    <div className="w-12 h-12 rounded-full bg-teal-600 text-white flex items-center justify-center shadow-lg group-hover:scale-110 transition-transform">
                      <Play className="w-6 h-6 fill-white ml-0.5" />
                    </div>
                  </div>
                  <span className="absolute bottom-3 right-3 bg-slate-900/80 text-white text-[10px] font-bold px-2 py-0.5 rounded backdrop-blur-xs">
                    {video.category}
                  </span>
                </div>

                {/* Content */}
                <div className="p-5 space-y-2">
                  <h3 className="text-base font-bold text-slate-900 line-clamp-2 group-hover:text-teal-700 transition-colors">
                    {video.title}
                  </h3>
                  <p className="text-xs text-slate-600 leading-relaxed line-clamp-3">
                    {video.description}
                  </p>
                </div>
              </div>

              {/* Action Bar */}
              <div className="px-5 pb-5 pt-2 flex items-center justify-between border-t border-slate-100 gap-2">
                <button
                  onClick={() => onSelectVideo(video)}
                  className="inline-flex items-center space-x-1.5 text-xs font-bold text-teal-700 hover:text-teal-900"
                >
                  <Play className="w-3.5 h-3.5 fill-teal-700" />
                  <span>Play Video</span>
                </button>

                <a
                  href={video.pageUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center space-x-1 text-[11px] font-medium text-slate-500 hover:text-slate-800"
                  title="Watch Video on Streamable"
                >
                  <span>Streamable</span>
                  <ExternalLink className="w-3 h-3" />
                </a>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};
