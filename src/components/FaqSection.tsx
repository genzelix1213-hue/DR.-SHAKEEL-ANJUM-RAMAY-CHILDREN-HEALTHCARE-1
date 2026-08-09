import React, { useState } from 'react';
import { ChevronDown, HelpCircle } from 'lucide-react';
import { FAQ_LIST } from '../data/doctorData';

export const FaqSection: React.FC = () => {
  const [openId, setOpenId] = useState<string | null>('faq-1');

  const toggleFaq = (id: string) => {
    setOpenId(openId === id ? null : id);
  };

  return (
    <section id="faqs" className="py-16 sm:py-24 bg-white border-b border-slate-100">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* HEADER */}
        <div className="text-center mb-12 space-y-3">
          <span className="text-xs font-bold uppercase tracking-wider text-teal-700 bg-teal-100/80 px-3.5 py-1 rounded-full border border-teal-200">
            Got Questions?
          </span>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 tracking-tight">
            Frequently Asked Questions
          </h2>
          <p className="text-sm text-slate-600 max-w-xl mx-auto">
            Find quick answers about Dr. Shakeel Anjum Ramay's practice, clinic location in Adda Gamber, and appointment procedures.
          </p>
        </div>

        {/* ACCORDION */}
        <div className="space-y-3">
          {FAQ_LIST.map((faq) => {
            const isOpen = openId === faq.id;
            return (
              <div
                key={faq.id}
                className="bg-slate-50/80 rounded-2xl border border-slate-200/90 overflow-hidden transition-all"
              >
                <button
                  onClick={() => toggleFaq(faq.id)}
                  className="w-full p-5 text-left flex items-center justify-between font-bold text-slate-900 text-sm sm:text-base hover:text-teal-700 focus:outline-none focus:bg-slate-100 transition-colors"
                  aria-expanded={isOpen}
                >
                  <span className="flex items-center space-x-3 pr-4">
                    <HelpCircle className="w-5 h-5 text-teal-600 shrink-0" />
                    <span>{faq.question}</span>
                  </span>
                  <ChevronDown className={`w-5 h-5 text-slate-500 shrink-0 transition-transform duration-300 ${isOpen ? 'transform rotate-180 text-teal-600' : ''}`} />
                </button>

                {isOpen && (
                  <div className="px-5 pb-5 pt-1 text-xs sm:text-sm text-slate-700 leading-relaxed border-t border-slate-200/60 font-normal">
                    {faq.answer}
                  </div>
                )}
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
};
