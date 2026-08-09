import React, { useState, useEffect } from 'react';
import { 
  Calendar, Clock, User, Phone, MessageCircle, MapPin, 
  CheckCircle2, ArrowRight, ArrowLeft, ShieldCheck, Heart, AlertCircle 
} from 'lucide-react';
import { DOCTOR_PROFILE } from '../data/doctorData';
import { Appointment } from '../types';

interface AppointmentSectionProps {
  initialService?: string;
}

export const AppointmentSection: React.FC<AppointmentSectionProps> = ({ initialService = '' }) => {
  const [step, setStep] = useState<1 | 2 | 3 | 4>(1);

  // Form State
  const [parentName, setParentName] = useState('');
  const [childName, setChildName] = useState('');
  const [childAge, setChildAge] = useState('');
  const [gender, setGender] = useState('Male');
  const [phone, setPhone] = useState('');
  const [whatsapp, setWhatsapp] = useState('');
  const [sameAsPhone, setSameAsPhone] = useState(true);
  const [preferredDate, setPreferredDate] = useState('');
  const [preferredDay, setPreferredDay] = useState('');
  const [preferredTime, setPreferredTime] = useState('Morning (10:00 AM - 01:00 PM)');
  const [reason, setReason] = useState(initialService || 'General Consultation');
  const [message, setMessage] = useState('');
  const [consentConfirmed, setConsentConfirmed] = useState(false);
  const [submittedAppointment, setSubmittedAppointment] = useState<Appointment | null>(null);
  const [validationError, setValidationError] = useState('');

  useEffect(() => {
    if (initialService) {
      setReason(initialService);
    }
  }, [initialService]);

  // Handle same as phone checkbox
  useEffect(() => {
    if (sameAsPhone) {
      setWhatsapp(phone);
    }
  }, [phone, sameAsPhone]);

  // Update preferred day automatically from date
  const handleDateChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const dateVal = e.target.value;
    setPreferredDate(dateVal);
    if (dateVal) {
      const d = new Date(dateVal);
      const days = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];
      setPreferredDay(days[d.getDay()]);
    }
  };

  const handleNextToStep2 = () => {
    setValidationError('');
    if (!parentName.trim() || !childName.trim() || !childAge.trim() || !phone.trim()) {
      setValidationError('Please fill in Parent Name, Child Name, Age, and Phone Number.');
      return;
    }
    setStep(2);
  };

  const handleNextToStep3 = () => {
    setValidationError('');
    if (!preferredDate || !preferredDay || !reason.trim()) {
      setValidationError('Please select Preferred Date, Day, and Reason for Visit.');
      return;
    }
    setStep(3);
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setValidationError('');
    if (!consentConfirmed) {
      setValidationError('Please confirm that the information provided is correct.');
      return;
    }

    const newAppt: Appointment = {
      id: 'APPT-' + Date.now(),
      parentName: parentName.trim(),
      childName: childName.trim(),
      childAge: childAge.trim(),
      gender,
      phone: phone.trim(),
      whatsapp: whatsapp.trim() || phone.trim(),
      preferredDate,
      preferredDay,
      preferredTime,
      reason: reason.trim(),
      message: message.trim(),
      status: 'Pending',
      createdAt: new Date().toISOString(),
      location: 'AI Shifa Children and Maternity Home, Okara'
    };

    // Save to local storage for Admin view
    try {
      const existingStr = localStorage.getItem('dr_ramay_appointments');
      const existing: Appointment[] = existingStr ? JSON.parse(existingStr) : [];
      existing.unshift(newAppt);
      localStorage.setItem('dr_ramay_appointments', JSON.stringify(existing));
    } catch (err) {
      console.error('Failed to persist appointment:', err);
    }

    setSubmittedAppointment(newAppt);
    setStep(4);
  };

  const handleResetForm = () => {
    setParentName('');
    setChildName('');
    setChildAge('');
    setPhone('');
    setWhatsapp('');
    setPreferredDate('');
    setPreferredDay('');
    setMessage('');
    setConsentConfirmed(false);
    setSubmittedAppointment(null);
    setStep(1);
  };

  return (
    <section id="appointment" className="py-16 sm:py-24 bg-white border-b border-slate-100">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* HEADER */}
        <div className="text-center mb-10 space-y-2">
          <span className="text-xs font-bold uppercase tracking-wider text-teal-700 bg-teal-100/80 px-3.5 py-1 rounded-full border border-teal-200">
            AI Shifa Children & Maternity Home, Okara
          </span>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 tracking-tight">
            Book an Appointment
          </h2>
          <p className="text-sm text-slate-600 max-w-xl mx-auto">
            Schedule a medical consultation for your child with Dr. Shakeel Anjum Ramay at AI Shifa Children and Maternity Home, Okara.
          </p>
        </div>

        {/* STEP PROGRESS BAR */}
        {step !== 4 && (
          <div className="mb-8 max-w-2xl mx-auto">
            <div className="flex items-center justify-between text-xs font-bold text-slate-600 mb-2">
              <span className={step >= 1 ? 'text-teal-700' : ''}>1. Patient Info</span>
              <span className={step >= 2 ? 'text-teal-700' : ''}>2. Date & Time</span>
              <span className={step >= 3 ? 'text-teal-700' : ''}>3. Review & Submit</span>
            </div>
            <div className="w-full bg-slate-200 h-2 rounded-full overflow-hidden">
              <div 
                className="bg-teal-600 h-full transition-all duration-300"
                style={{ width: step === 1 ? '33%' : step === 2 ? '66%' : '100%' }}
              ></div>
            </div>
          </div>
        )}

        {/* VALIDATION ERROR BANNER */}
        {validationError && (
          <div className="mb-6 p-4 rounded-xl bg-red-50 border border-red-200 text-red-700 text-xs font-bold flex items-center space-x-2">
            <AlertCircle className="w-4 h-4 shrink-0" />
            <span>{validationError}</span>
          </div>
        )}

        {/* MAIN FORM CONTAINER */}
        <div className="bg-slate-50/90 rounded-3xl p-6 sm:p-10 border border-slate-200/90 shadow-md">
          
          {/* STEP 1: PATIENT INFORMATION */}
          {step === 1 && (
            <div className="space-y-6">
              <div className="border-b border-slate-200 pb-4">
                <h3 className="text-lg font-bold text-slate-900 flex items-center space-x-2">
                  <User className="w-5 h-5 text-teal-600" />
                  <span>Step 1: Patient & Guardian Information</span>
                </h3>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                <div>
                  <label className="block text-xs font-bold text-slate-800 uppercase tracking-wide mb-1.5">
                    Parent / Guardian Name *
                  </label>
                  <input
                    type="text"
                    value={parentName}
                    onChange={(e) => setParentName(e.target.value)}
                    placeholder="e.g. Muhammad Usman"
                    className="w-full px-4 py-3 bg-white border border-slate-300 rounded-xl text-sm font-medium text-slate-900 focus:outline-none focus:ring-2 focus:ring-teal-500"
                    required
                  />
                </div>

                <div>
                  <label className="block text-xs font-bold text-slate-800 uppercase tracking-wide mb-1.5">
                    Child's Name *
                  </label>
                  <input
                    type="text"
                    value={childName}
                    onChange={(e) => setChildName(e.target.value)}
                    placeholder="e.g. Ali Usman"
                    className="w-full px-4 py-3 bg-white border border-slate-300 rounded-xl text-sm font-medium text-slate-900 focus:outline-none focus:ring-2 focus:ring-teal-500"
                    required
                  />
                </div>

                <div>
                  <label className="block text-xs font-bold text-slate-800 uppercase tracking-wide mb-1.5">
                    Child's Age *
                  </label>
                  <input
                    type="text"
                    value={childAge}
                    onChange={(e) => setChildAge(e.target.value)}
                    placeholder="e.g. 3 years / 6 months"
                    className="w-full px-4 py-3 bg-white border border-slate-300 rounded-xl text-sm font-medium text-slate-900 focus:outline-none focus:ring-2 focus:ring-teal-500"
                    required
                  />
                </div>

                <div>
                  <label className="block text-xs font-bold text-slate-800 uppercase tracking-wide mb-1.5">
                    Gender *
                  </label>
                  <select
                    value={gender}
                    onChange={(e) => setGender(e.target.value)}
                    className="w-full px-4 py-3 bg-white border border-slate-300 rounded-xl text-sm font-medium text-slate-900 focus:outline-none focus:ring-2 focus:ring-teal-500"
                  >
                    <option value="Male">Male</option>
                    <option value="Female">Female</option>
                  </select>
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
                    WhatsApp Number
                  </label>
                  <input
                    type="tel"
                    value={whatsapp}
                    onChange={(e) => setWhatsapp(e.target.value)}
                    placeholder="0300 1234567"
                    disabled={sameAsPhone}
                    className="w-full px-4 py-3 bg-white border border-slate-300 rounded-xl text-sm font-medium text-slate-900 focus:outline-none focus:ring-2 focus:ring-teal-500 disabled:bg-slate-100 disabled:text-slate-500"
                  />
                  <div className="mt-2 flex items-center space-x-2">
                    <input
                      type="checkbox"
                      id="samePhone"
                      checked={sameAsPhone}
                      onChange={(e) => setSameAsPhone(e.target.checked)}
                      className="rounded text-teal-600 focus:ring-teal-500"
                    />
                    <label htmlFor="samePhone" className="text-xs text-slate-600 font-medium">
                      Same as phone number
                    </label>
                  </div>
                </div>
              </div>

              <div className="pt-4 flex justify-end">
                <button
                  type="button"
                  onClick={handleNextToStep2}
                  className="inline-flex items-center space-x-2 px-6 py-3.5 bg-teal-600 hover:bg-teal-700 text-white font-bold text-sm rounded-xl shadow-md transition-colors"
                >
                  <span>Continue to Date & Time</span>
                  <ArrowRight className="w-4 h-4" />
                </button>
              </div>
            </div>
          )}

          {/* STEP 2: DATE & TIME */}
          {step === 2 && (
            <div className="space-y-6">
              <div className="border-b border-slate-200 pb-4 flex items-center justify-between">
                <h3 className="text-lg font-bold text-slate-900 flex items-center space-x-2">
                  <Calendar className="w-5 h-5 text-teal-600" />
                  <span>Step 2: Preferred Date, Time & Reason</span>
                </h3>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-3 gap-5">
                <div>
                  <label className="block text-xs font-bold text-slate-800 uppercase tracking-wide mb-1.5">
                    Preferred Date *
                  </label>
                  <input
                    type="date"
                    min={new Date().toISOString().split('T')[0]}
                    value={preferredDate}
                    onChange={handleDateChange}
                    className="w-full px-4 py-3 bg-white border border-slate-300 rounded-xl text-sm font-medium text-slate-900 focus:outline-none focus:ring-2 focus:ring-teal-500"
                    required
                  />
                </div>

                <div>
                  <label className="block text-xs font-bold text-slate-800 uppercase tracking-wide mb-1.5">
                    Preferred Day
                  </label>
                  <input
                    type="text"
                    value={preferredDay}
                    readOnly
                    placeholder="Auto-calculated"
                    className="w-full px-4 py-3 bg-slate-100 border border-slate-300 rounded-xl text-sm font-medium text-slate-700"
                  />
                </div>

                <div>
                  <label className="block text-xs font-bold text-slate-800 uppercase tracking-wide mb-1.5">
                    Preferred Time Slot *
                  </label>
                  <select
                    value={preferredTime}
                    onChange={(e) => setPreferredTime(e.target.value)}
                    className="w-full px-4 py-3 bg-white border border-slate-300 rounded-xl text-sm font-medium text-slate-900 focus:outline-none focus:ring-2 focus:ring-teal-500"
                  >
                    <option value="Morning (10:00 AM - 01:00 PM)">Morning (10:00 AM - 01:00 PM)</option>
                    <option value="Afternoon (02:00 PM - 05:00 PM)">Afternoon (02:00 PM - 05:00 PM)</option>
                    <option value="Evening (05:00 PM - 08:00 PM)">Evening (05:00 PM - 08:00 PM)</option>
                  </select>
                </div>
              </div>

              <div className="space-y-4">
                <div>
                  <label className="block text-xs font-bold text-slate-800 uppercase tracking-wide mb-1.5">
                    Reason for Visit / Primary Symptoms *
                  </label>
                  <select
                    value={reason}
                    onChange={(e) => setReason(e.target.value)}
                    className="w-full px-4 py-3 bg-white border border-slate-300 rounded-xl text-sm font-medium text-slate-900 focus:outline-none focus:ring-2 focus:ring-teal-500"
                  >
                    <option value="General Child Health Consultation">General Child Health Consultation</option>
                    <option value="Fever & Infection Check">Fever & Infection Check</option>
                    <option value="Cough, Cold & Respiratory Issue">Cough, Cold & Respiratory Issue</option>
                    <option value="Stomach Pain / Diarrhea / Vomiting">Stomach Pain / Diarrhea / Vomiting</option>
                    <option value="Growth & Weight Assessment">Growth & Weight Assessment</option>
                    <option value="Infant Wellness / Feeding Check">Infant Wellness / Feeding Check</option>
                    <option value="Allergy / Skin Rash">Allergy / Skin Rash</option>
                    <option value="Follow-up Consultation">Follow-up Consultation</option>
                    <option value="Other Medical Concern">Other Medical Concern</option>
                  </select>
                </div>

                <div>
                  <label className="block text-xs font-bold text-slate-800 uppercase tracking-wide mb-1.5">
                    Additional Message / Medical History (Optional)
                  </label>
                  <textarea
                    rows={3}
                    value={message}
                    onChange={(e) => setMessage(e.target.value)}
                    placeholder="Briefly describe symptoms, duration, or special notes for the doctor..."
                    className="w-full px-4 py-3 bg-white border border-slate-300 rounded-xl text-sm font-medium text-slate-900 focus:outline-none focus:ring-2 focus:ring-teal-500"
                  ></textarea>
                </div>

                <div>
                  <label className="block text-xs font-bold text-slate-800 uppercase tracking-wide mb-1.5">
                    Clinic Location
                  </label>
                  <div className="p-3 bg-teal-50 border border-teal-200 rounded-xl flex items-center justify-between text-xs font-bold text-teal-900">
                    <span className="flex items-center space-x-2">
                      <MapPin className="w-4 h-4 text-teal-700" />
                      <span>AI Shifa Children & Maternity Home, Okara</span>
                    </span>
                    <span className="text-teal-700 text-[11px] font-semibold">Primary Practice Location</span>
                  </div>
                </div>
              </div>

              <div className="pt-4 flex items-center justify-between">
                <button
                  type="button"
                  onClick={() => setStep(1)}
                  className="inline-flex items-center space-x-2 px-5 py-3 border border-slate-300 bg-white hover:bg-slate-50 text-slate-700 font-bold text-sm rounded-xl transition-colors"
                >
                  <ArrowLeft className="w-4 h-4" />
                  <span>Back</span>
                </button>

                <button
                  type="button"
                  onClick={handleNextToStep3}
                  className="inline-flex items-center space-x-2 px-6 py-3.5 bg-teal-600 hover:bg-teal-700 text-white font-bold text-sm rounded-xl shadow-md transition-colors"
                >
                  <span>Review Appointment Details</span>
                  <ArrowRight className="w-4 h-4" />
                </button>
              </div>
            </div>
          )}

          {/* STEP 3: CONFIRM DETAILS */}
          {step === 3 && (
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="border-b border-slate-200 pb-4">
                <h3 className="text-lg font-bold text-slate-900 flex items-center space-x-2">
                  <ShieldCheck className="w-5 h-5 text-teal-600" />
                  <span>Step 3: Confirm Details & Submit</span>
                </h3>
              </div>

              <div className="bg-white p-5 rounded-2xl border border-slate-200 space-y-4">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 text-xs">
                  <div>
                    <span className="text-slate-500 font-medium block">Parent / Guardian:</span>
                    <span className="text-slate-900 font-bold text-sm">{parentName}</span>
                  </div>
                  <div>
                    <span className="text-slate-500 font-medium block">Child's Name & Age:</span>
                    <span className="text-slate-900 font-bold text-sm">{childName} ({childAge}, {gender})</span>
                  </div>
                  <div>
                    <span className="text-slate-500 font-medium block">Phone / WhatsApp:</span>
                    <span className="text-slate-900 font-bold text-sm">{phone}</span>
                  </div>
                  <div>
                    <span className="text-slate-500 font-medium block">Preferred Slot:</span>
                    <span className="text-teal-700 font-bold text-sm">{preferredDate} ({preferredDay}) - {preferredTime}</span>
                  </div>
                  <div className="sm:col-span-2">
                    <span className="text-slate-500 font-medium block">Reason for Visit:</span>
                    <span className="text-slate-900 font-semibold">{reason}</span>
                  </div>
                  {message && (
                    <div className="sm:col-span-2">
                      <span className="text-slate-500 font-medium block">Additional Notes:</span>
                      <span className="text-slate-800 italic">{message}</span>
                    </div>
                  )}
                  <div className="sm:col-span-2 pt-2 border-t border-slate-100">
                    <span className="text-slate-500 font-medium block">Clinic Location:</span>
                    <span className="text-slate-900 font-bold">AI Shifa Children and Maternity Home, Okara, Pakistan</span>
                  </div>
                </div>
              </div>

              {/* CONSENT CHECKBOX */}
              <div className="p-4 bg-teal-50/70 border border-teal-200 rounded-xl flex items-start space-x-3">
                <input
                  type="checkbox"
                  id="consent"
                  checked={consentConfirmed}
                  onChange={(e) => setConsentConfirmed(e.target.checked)}
                  className="mt-1 w-4 h-4 text-teal-600 rounded focus:ring-teal-500"
                  required
                />
                <label htmlFor="consent" className="text-xs font-semibold text-slate-800 leading-snug cursor-pointer">
                  I confirm that the information provided is correct.
                </label>
              </div>

              <div className="pt-2 flex items-center justify-between">
                <button
                  type="button"
                  onClick={() => setStep(2)}
                  className="inline-flex items-center space-x-2 px-5 py-3 border border-slate-300 bg-white hover:bg-slate-50 text-slate-700 font-bold text-sm rounded-xl transition-colors"
                >
                  <ArrowLeft className="w-4 h-4" />
                  <span>Back</span>
                </button>

                <button
                  type="submit"
                  className="inline-flex items-center space-x-2.5 px-8 py-3.5 bg-teal-600 hover:bg-teal-700 text-white font-bold text-sm rounded-xl shadow-lg transition-transform transform hover:-translate-y-0.5"
                >
                  <CheckCircle2 className="w-5 h-5" />
                  <span>Request Appointment</span>
                </button>
              </div>
            </form>
          )}

          {/* STEP 4: SUBMITTED CONFIRMATION */}
          {step === 4 && submittedAppointment && (
            <div className="text-center space-y-6 py-4">
              <div className="w-16 h-16 rounded-full bg-emerald-100 text-emerald-600 flex items-center justify-center mx-auto shadow-inner">
                <CheckCircle2 className="w-10 h-10" />
              </div>

              <div className="space-y-2">
                <span className="px-3 py-1 bg-amber-100 text-amber-800 text-xs font-bold rounded-full border border-amber-200 uppercase tracking-wide">
                  Status: Request Received (Pending Confirmation)
                </span>
                <h3 className="text-2xl font-extrabold text-slate-900">
                  Appointment Request Received
                </h3>
                <p className="text-sm text-slate-600 max-w-md mx-auto leading-relaxed">
                  Thank you. Your appointment request has been received. The clinic will contact you to confirm availability.
                </p>
              </div>

              <div className="bg-white p-6 rounded-2xl border border-slate-200 max-w-lg mx-auto text-left text-xs space-y-3 shadow-xs">
                <div className="flex justify-between border-b border-slate-100 pb-2">
                  <span className="text-slate-500 font-medium">Request Reference:</span>
                  <span className="font-mono font-bold text-slate-900">{submittedAppointment.id}</span>
                </div>
                <div className="flex justify-between border-b border-slate-100 pb-2">
                  <span className="text-slate-500 font-medium">Patient:</span>
                  <span className="font-bold text-slate-900">{submittedAppointment.childName} ({submittedAppointment.childAge})</span>
                </div>
                <div className="flex justify-between border-b border-slate-100 pb-2">
                  <span className="text-slate-500 font-medium">Parent:</span>
                  <span className="font-bold text-slate-900">{submittedAppointment.parentName}</span>
                </div>
                <div className="flex justify-between border-b border-slate-100 pb-2">
                  <span className="text-slate-500 font-medium">Contact Phone:</span>
                  <span className="font-bold text-slate-900">{submittedAppointment.phone}</span>
                </div>
                <div className="flex justify-between border-b border-slate-100 pb-2">
                  <span className="text-slate-500 font-medium">Preferred Slot:</span>
                  <span className="font-bold text-teal-700">{submittedAppointment.preferredDate} ({submittedAppointment.preferredDay})</span>
                </div>
                <div className="flex justify-between border-b border-slate-100 pb-2">
                  <span className="text-slate-500 font-medium">Time Window:</span>
                  <span className="font-bold text-slate-900">{submittedAppointment.preferredTime}</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-slate-500 font-medium">Location:</span>
                  <span className="font-bold text-slate-900">AI Shifa Children & Maternity Home, Okara</span>
                </div>
              </div>

              <div className="flex flex-col sm:flex-row items-center justify-center gap-3 pt-4">
                <a
                  href={DOCTOR_PROFILE.whatsappUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full sm:w-auto inline-flex items-center justify-center space-x-2 px-6 py-3 bg-emerald-600 hover:bg-emerald-700 text-white font-bold text-xs rounded-xl shadow-sm"
                >
                  <MessageCircle className="w-4 h-4 fill-white" />
                  <span>Send Immediate WhatsApp Message</span>
                </a>

                <button
                  type="button"
                  onClick={handleResetForm}
                  className="w-full sm:w-auto inline-flex items-center justify-center space-x-2 px-6 py-3 bg-slate-200 hover:bg-slate-300 text-slate-800 font-bold text-xs rounded-xl"
                >
                  <span>Book Another Appointment</span>
                </button>
              </div>
            </div>
          )}

        </div>

      </div>
    </section>
  );
};
