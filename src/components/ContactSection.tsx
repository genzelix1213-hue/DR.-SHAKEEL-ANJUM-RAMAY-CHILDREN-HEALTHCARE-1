import React, { useState } from 'react';
import { Phone, MessageCircle, Calendar, Navigation, MapPin, Send, CheckCircle2 } from 'lucide-react';
import { DOCTOR_PROFILE } from '../data/doctorData';

interface ContactSectionProps {
  onOpenAppointment: () => void;
}

export const ContactSection: React.FC<ContactSectionProps> = ({ onOpenAppointment }) => {
  const [name, setName] = useState('');
  const [phone, setPhone] = useState('');
  const [message, setMessage] = useState('');
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!name.trim() || !phone.trim()) return;

    setSubmitted(true);
  };

  return (
    <section id="contact" className="py-16 sm:py-24 bg-white border-b border-slate-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* HEADER */}
        <div className="text-center max-w-3xl mx-auto mb-14 space-y-3">
          <span className="text-xs font-bold uppercase tracking-wider text-teal-700 bg-teal-100/80 px-3.5 py-1 rounded-full border border-teal-200">
            Direct Communication
          </span>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 tracking-tight">
            Contact Dr. Shakeel Anjum Ramay
          </h2>
          <p className="text-sm text-slate-600">
            Reach out directly for clinic inquiries, appointment availability, or directions to AI Shifa Children and Maternity Home, Okara.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10">
          
          {/* CONTACT INFO & QUICK BUTTONS */}
          <div className="lg:col-span-6 space-y-6">
            <div className="bg-slate-50/80 p-6 sm:p-8 rounded-3xl border border-slate-200/90 space-y-6">
              
              <div className="flex items-center space-x-3 pb-4 border-b border-slate-200">
                <div className="w-12 h-12 rounded-2xl bg-teal-600 text-white flex items-center justify-center font-bold">
                  DS
                </div>
                <div>
                  <h3 className="text-lg font-bold text-slate-900">{DOCTOR_PROFILE.name}</h3>
                  <p className="text-xs text-slate-600 font-medium">Child Healthcare Practitioner • Okara, Pakistan</p>
                </div>
              </div>

              <div className="space-y-3 text-xs">
                <div className="flex items-center space-x-3 p-3 bg-white rounded-xl border border-slate-200">
                  <Phone className="w-4 h-4 text-teal-600 shrink-0" />
                  <div>
                    <span className="text-slate-500 font-medium block">Phone Number</span>
                    <a href={DOCTOR_PROFILE.callUrl} className="font-bold text-slate-900 hover:text-teal-700 text-sm">
                      {DOCTOR_PROFILE.phone}
                    </a>
                  </div>
                </div>

                <div className="flex items-center space-x-3 p-3 bg-white rounded-xl border border-slate-200">
                  <MessageCircle className="w-4 h-4 text-emerald-600 shrink-0" />
                  <div>
                    <span className="text-slate-500 font-medium block">WhatsApp Number</span>
                    <a href={DOCTOR_PROFILE.whatsappUrl} target="_blank" rel="noreferrer" className="font-bold text-emerald-700 hover:underline text-sm">
                      {DOCTOR_PROFILE.whatsapp}
                    </a>
                  </div>
                </div>

                <div className="flex items-center space-x-3 p-3 bg-white rounded-xl border border-slate-200">
                  <MapPin className="w-4 h-4 text-teal-600 shrink-0" />
                  <div>
                    <span className="text-slate-500 font-medium block">Clinic Location</span>
                    <span className="font-bold text-slate-900 text-sm">AI Shifa Children and Maternity Home, Okara, Pakistan</span>
                  </div>
                </div>
              </div>

              {/* ACTION BUTTONS GRID */}
              <div className="grid grid-cols-2 gap-3 pt-2">
                <a
                  href={DOCTOR_PROFILE.callUrl}
                  className="flex items-center justify-center space-x-2 py-3 px-4 bg-slate-900 hover:bg-slate-800 text-white text-xs font-bold rounded-xl shadow-xs"
                >
                  <Phone className="w-3.5 h-3.5 text-teal-400" />
                  <span>Call Now</span>
                </a>

                <a
                  href={DOCTOR_PROFILE.whatsappUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center justify-center space-x-2 py-3 px-4 bg-emerald-600 hover:bg-emerald-700 text-white text-xs font-bold rounded-xl shadow-xs"
                >
                  <MessageCircle className="w-3.5 h-3.5 fill-white" />
                  <span>WhatsApp Us</span>
                </a>

                <button
                  onClick={onOpenAppointment}
                  className="flex items-center justify-center space-x-2 py-3 px-4 bg-teal-600 hover:bg-teal-700 text-white text-xs font-bold rounded-xl shadow-xs"
                >
                  <Calendar className="w-3.5 h-3.5" />
                  <span>Book Appointment</span>
                </button>

                <a
                  href={DOCTOR_PROFILE.googleMapsUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center justify-center space-x-2 py-3 px-4 bg-white hover:bg-slate-50 border border-slate-300 text-slate-800 text-xs font-bold rounded-xl"
                >
                  <Navigation className="w-3.5 h-3.5 text-teal-600" />
                  <span>Get Directions</span>
                </a>
              </div>

            </div>
          </div>

          {/* QUICK INQUIRY FORM */}
          <div className="lg:col-span-6 bg-slate-50/80 p-6 sm:p-8 rounded-3xl border border-slate-200/90">
            <h3 className="text-lg font-bold text-slate-900 mb-2">Send a Quick Message</h3>
            <p className="text-xs text-slate-600 mb-6">
              Have a question regarding clinic timings or general inquiries? Fill in your details below.
            </p>

            {submitted ? (
              <div className="p-6 bg-emerald-50 border border-emerald-200 rounded-2xl text-center space-y-3">
                <CheckCircle2 className="w-10 h-10 text-emerald-600 mx-auto" />
                <h4 className="text-base font-bold text-slate-900">Message Sent Successfully</h4>
                <p className="text-xs text-slate-600">
                  Thank you, {name}. Our clinic staff will contact you shortly at {phone}.
                </p>
                <button
                  onClick={() => {
                    setName('');
                    setPhone('');
                    setMessage('');
                    setSubmitted(false);
                  }}
                  className="px-4 py-2 bg-emerald-600 text-white text-xs font-bold rounded-xl"
                >
                  Send Another Message
                </button>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-4">
                <div>
                  <label className="block text-xs font-bold text-slate-800 uppercase tracking-wide mb-1.5">
                    Your Name *
                  </label>
                  <input
                    type="text"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    placeholder="Enter full name"
                    className="w-full px-4 py-3 bg-white border border-slate-300 rounded-xl text-sm font-medium text-slate-900 focus:outline-none focus:ring-2 focus:ring-teal-500"
                    required
                  />
                </div>

                <div>
                  <label className="block text-xs font-bold text-slate-800 uppercase tracking-wide mb-1.5">
                    Phone Number *
                  </label>
                  <input
                    type="tel"
                    value={phone}
                    onChange={(e) => setPhone(e.target.value)}
                    placeholder="0300 1234567"
                    className="w-full px-4 py-3 bg-white border border-slate-300 rounded-xl text-sm font-medium text-slate-900 focus:outline-none focus:ring-2 focus:ring-teal-500"
                    required
                  />
                </div>

                <div>
                  <label className="block text-xs font-bold text-slate-800 uppercase tracking-wide mb-1.5">
                    Your Message (Optional)
                  </label>
                  <textarea
                    rows={4}
                    value={message}
                    onChange={(e) => setMessage(e.target.value)}
                    placeholder="Type your question or message..."
                    className="w-full px-4 py-3 bg-white border border-slate-300 rounded-xl text-sm font-medium text-slate-900 focus:outline-none focus:ring-2 focus:ring-teal-500"
                  ></textarea>
                </div>

                <button
                  type="submit"
                  className="w-full inline-flex items-center justify-center space-x-2 py-3.5 bg-teal-600 hover:bg-teal-700 text-white font-bold text-sm rounded-xl shadow-md transition-all"
                >
                  <Send className="w-4 h-4" />
                  <span>Send Message</span>
                </button>
              </form>
            )}
          </div>

        </div>

      </div>
    </section>
  );
};
