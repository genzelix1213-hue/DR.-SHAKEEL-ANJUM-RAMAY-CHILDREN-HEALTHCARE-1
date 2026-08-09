import React from 'react';
import { MessageSquareQuote, ShieldAlert } from 'lucide-react';

export const TestimonialsSection: React.FC = () => {
  return (
    <section id="testimonials" className="py-16 bg-slate-50/80 border-b border-slate-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* HEADER */}
        <div className="text-center max-w-3xl mx-auto mb-12 space-y-3">
          <span className="text-xs font-bold uppercase tracking-wider text-teal-700 bg-teal-100/80 px-3.5 py-1 rounded-full border border-teal-200">
            Parent Feedback Policy
          </span>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 tracking-tight">
            What Parents Say
          </h2>
          <p className="text-sm text-slate-600">
            We maintain total integrity in patient communication. Real verified parent reviews and testimonials will appear here following clinic verification.
          </p>
        </div>

        {/* TESTIMONIAL PLACEHOLDER CARDS */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {[1, 2, 3].map((num) => (
            <div
              key={num}
              className="bg-white p-6 rounded-2xl border border-dashed border-slate-300 shadow-2xs flex flex-col justify-between space-y-4 relative"
            >
              <div className="space-y-3">
                <div className="w-10 h-10 rounded-xl bg-teal-50 text-teal-600 flex items-center justify-center">
                  <MessageSquareQuote className="w-5 h-5" />
                </div>
                <p className="text-xs font-medium text-slate-500 italic leading-relaxed">
                  "Verified patient review will appear here following patient consent and clinic publication."
                </p>
              </div>

              <div className="pt-3 border-t border-slate-100 flex items-center space-x-2 text-[11px] font-semibold text-slate-400">
                <ShieldAlert className="w-3.5 h-3.5 text-slate-400" />
                <span>Patient Review Slot #{num} (Pending Verification)</span>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};
