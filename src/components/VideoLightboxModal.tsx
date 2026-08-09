import React, { useState } from 'react';
import { X, ExternalLink, Play, AlertCircle } from 'lucide-react';
import { VideoItem } from '../types';

interface VideoLightboxModalProps {
  video: VideoItem | null;
  onClose: () => void;
}

export const VideoLightboxModal: React.FC<VideoLightboxModalProps> = ({ video, onClose }) => {
  const [iframeError, setIframeError] = useState(false);

  if (!video) return null;

  return (
    <div 
      className="fixed inset-0 z-50 flex items-center justify-center bg-slate-900/80 backdrop-blur-md p-4 transition-opacity"
      role="dialog"
      aria-modal="true"
      aria-labelledby="video-modal-title"
    >
      <div className="relative w-full max-w-4xl bg-white rounded-2xl shadow-2xl overflow-hidden border border-slate-200">
        {/* Header */}
        <div className="flex items-center justify-between px-6 py-4 bg-slate-900 text-white">
          <div>
            <span className="text-xs uppercase tracking-wider text-teal-400 font-semibold">
              {video.category}
            </span>
            <h3 id="video-modal-title" className="text-lg font-bold text-white line-clamp-1">
              {video.title}
            </h3>
          </div>
          <button
            onClick={onClose}
            className="p-2 text-slate-400 hover:text-white bg-slate-800 hover:bg-slate-700 rounded-full transition-colors focus:outline-none focus:ring-2 focus:ring-teal-400"
            aria-label="Close video modal"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Video Player Box */}
        <div className="relative w-full aspect-video bg-black flex items-center justify-center overflow-hidden">
          {!iframeError ? (
            <iframe
              src={`${video.embedUrl}?autoplay=1&title=0&byline=0`}
              title={video.title}
              className="w-full h-full border-0"
              allow="autoplay; fullscreen; picture-in-picture"
              allowFullScreen
              onError={() => setIframeError(true)}
            />
          ) : (
            <div className="p-8 text-center bg-slate-900 text-white flex flex-col items-center justify-center space-y-4">
              <AlertCircle className="w-12 h-12 text-teal-400" />
              <h4 className="text-xl font-semibold">Play Video Directly</h4>
              <p className="text-slate-300 max-w-md text-sm">
                Click below to watch this video in high definition on Streamable.
              </p>
              <a
                href={video.pageUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center space-x-2 px-6 py-3 bg-teal-600 hover:bg-teal-500 text-white font-medium rounded-xl shadow-lg transition-transform transform hover:-translate-y-0.5"
              >
                <span>Watch Video</span>
                <ExternalLink className="w-4 h-4" />
              </a>
            </div>
          )}
        </div>

        {/* Description & External Link */}
        <div className="p-6 bg-slate-50 flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4 border-t border-slate-200">
          <p className="text-sm text-slate-700 max-w-2xl">
            {video.description}
          </p>
          <a
            href={video.pageUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center space-x-2 text-sm font-semibold text-teal-700 hover:text-teal-900 shrink-0"
          >
            <span>Open in New Tab</span>
            <ExternalLink className="w-4 h-4" />
          </a>
        </div>
      </div>
    </div>
  );
};
