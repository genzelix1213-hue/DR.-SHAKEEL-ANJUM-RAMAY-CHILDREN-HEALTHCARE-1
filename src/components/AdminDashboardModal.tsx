import React, { useState, useEffect } from 'react';
import { 
  X, Search, Filter, ShieldCheck, CheckCircle2, Clock, 
  XCircle, RotateCcw, CheckCheck, Phone, MessageCircle, Calendar, MapPin, Edit3, Trash2 
} from 'lucide-react';
import { Appointment } from '../types';

interface AdminDashboardModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export const AdminDashboardModal: React.FC<AdminDashboardModalProps> = ({ isOpen, onClose }) => {
  const [appointments, setAppointments] = useState<Appointment[]>([]);
  const [searchQuery, setSearchQuery] = useState('');
  const [statusFilter, setStatusFilter] = useState<string>('ALL');
  const [dateFilter, setDateFilter] = useState<string>('');
  const [selectedAppt, setSelectedAppt] = useState<Appointment | null>(null);

  // Load appointments from localStorage
  const loadAppointments = () => {
    try {
      const data = localStorage.getItem('dr_ramay_appointments');
      if (data) {
        setAppointments(JSON.parse(data));
      } else {
        setAppointments([]);
      }
    } catch (e) {
      console.error('Error loading appointments:', e);
    }
  };

  useEffect(() => {
    if (isOpen) {
      loadAppointments();
    }
  }, [isOpen]);

  if (!isOpen) return null;

  const updateAppointmentStatus = (id: string, newStatus: Appointment['status'], notes?: string) => {
    const updated = appointments.map(appt => {
      if (appt.id === id) {
        return {
          ...appt,
          status: newStatus,
          notes: notes !== undefined ? notes : appt.notes
        };
      }
      return appt;
    });
    setAppointments(updated);
    try {
      localStorage.setItem('dr_ramay_appointments', JSON.stringify(updated));
    } catch (e) {
      console.error('Error saving appointment:', e);
    }
    if (selectedAppt && selectedAppt.id === id) {
      setSelectedAppt({ ...selectedAppt, status: newStatus, notes: notes !== undefined ? notes : selectedAppt.notes });
    }
  };

  const deleteAppointment = (id: string) => {
    if (!window.confirm('Are you sure you want to delete this appointment request?')) return;
    const filtered = appointments.filter(a => a.id !== id);
    setAppointments(filtered);
    try {
      localStorage.setItem('dr_ramay_appointments', JSON.stringify(filtered));
    } catch (e) {
      console.error(e);
    }
    if (selectedAppt?.id === id) setSelectedAppt(null);
  };

  // Filtering
  const filteredAppointments = appointments.filter(appt => {
    const matchesSearch = 
      appt.parentName.toLowerCase().includes(searchQuery.toLowerCase()) ||
      appt.childName.toLowerCase().includes(searchQuery.toLowerCase()) ||
      appt.phone.includes(searchQuery) ||
      appt.id.toLowerCase().includes(searchQuery.toLowerCase());
    
    const matchesStatus = statusFilter === 'ALL' || appt.status === statusFilter;
    const matchesDate = !dateFilter || appt.preferredDate === dateFilter;

    return matchesSearch && matchesStatus && matchesDate;
  });

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-slate-900/80 backdrop-blur-md p-2 sm:p-4">
      <div className="relative w-full max-w-6xl max-h-[92vh] bg-white rounded-2xl shadow-2xl overflow-hidden flex flex-col border border-slate-200">
        
        {/* HEADER */}
        <div className="flex items-center justify-between px-6 py-4 bg-slate-900 text-white border-b border-slate-800">
          <div className="flex items-center space-x-3">
            <div className="w-9 h-9 rounded-xl bg-teal-600 flex items-center justify-center">
              <ShieldCheck className="w-5 h-5 text-white" />
            </div>
            <div>
              <h2 className="text-base font-bold">Clinic Staff Portal — Appointment Management</h2>
              <p className="text-xs text-slate-400">Dr. Shakeel Anjum Ramay Clinic (Adda Gamber)</p>
            </div>
          </div>
          <button
            onClick={onClose}
            className="p-2 text-slate-400 hover:text-white bg-slate-800 hover:bg-slate-700 rounded-full transition-colors"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* CONTROLS BAR */}
        <div className="p-4 bg-slate-50 border-b border-slate-200 grid grid-cols-1 sm:grid-cols-3 gap-3">
          
          {/* Search */}
          <div className="relative">
            <Search className="w-4 h-4 text-slate-400 absolute left-3 top-3" />
            <input
              type="text"
              placeholder="Search parent, child name, or phone..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full pl-9 pr-3 py-2 bg-white border border-slate-300 rounded-xl text-xs font-medium text-slate-900 focus:outline-none focus:ring-2 focus:ring-teal-500"
            />
          </div>

          {/* Status Filter */}
          <div className="flex items-center space-x-2">
            <Filter className="w-4 h-4 text-slate-500 shrink-0" />
            <select
              value={statusFilter}
              onChange={(e) => setStatusFilter(e.target.value)}
              className="w-full py-2 px-3 bg-white border border-slate-300 rounded-xl text-xs font-medium text-slate-900 focus:outline-none focus:ring-2 focus:ring-teal-500"
            >
              <option value="ALL">All Statuses</option>
              <option value="Pending">Pending</option>
              <option value="Confirmed">Confirmed</option>
              <option value="Rescheduled">Rescheduled</option>
              <option value="Completed">Completed</option>
              <option value="Cancelled">Cancelled</option>
            </select>
          </div>

          {/* Date Filter */}
          <div className="flex items-center space-x-2">
            <Calendar className="w-4 h-4 text-slate-500 shrink-0" />
            <input
              type="date"
              value={dateFilter}
              onChange={(e) => setDateFilter(e.target.value)}
              className="w-full py-2 px-3 bg-white border border-slate-300 rounded-xl text-xs font-medium text-slate-900 focus:outline-none focus:ring-2 focus:ring-teal-500"
            />
            {dateFilter && (
              <button
                onClick={() => setDateFilter('')}
                className="text-xs text-slate-500 hover:text-slate-800 underline"
              >
                Clear
              </button>
            )}
          </div>

        </div>

        {/* MAIN BODY GRID */}
        <div className="flex-1 overflow-hidden grid grid-cols-1 lg:grid-cols-12 divide-y lg:divide-y-0 lg:divide-x divide-slate-200">
          
          {/* APPOINTMENTS TABLE / LIST */}
          <div className="lg:col-span-7 overflow-y-auto p-4 space-y-3">
            <div className="flex items-center justify-between text-xs font-bold text-slate-500 px-1 pb-1">
              <span>Appointment Requests ({filteredAppointments.length})</span>
              <span>Sorted by Latest</span>
            </div>

            {filteredAppointments.length === 0 ? (
              <div className="p-12 text-center text-slate-500 space-y-2">
                <p className="text-sm font-semibold">No appointments found matching your filters.</p>
                <p className="text-xs">New appointment submissions from the website will automatically appear here.</p>
              </div>
            ) : (
              filteredAppointments.map((appt) => (
                <div
                  key={appt.id}
                  onClick={() => setSelectedAppt(appt)}
                  className={`p-4 rounded-xl border transition-all cursor-pointer ${
                    selectedAppt?.id === appt.id
                      ? 'border-teal-600 bg-teal-50/60 shadow-xs'
                      : 'border-slate-200 bg-white hover:border-slate-300'
                  }`}
                >
                  <div className="flex items-start justify-between">
                    <div>
                      <div className="flex items-center space-x-2">
                        <span className="font-bold text-sm text-slate-900">{appt.childName}</span>
                        <span className="text-xs font-semibold text-slate-500">({appt.childAge}, {appt.gender})</span>
                      </div>
                      <p className="text-xs text-slate-600 mt-0.5">Parent: <strong className="text-slate-800">{appt.parentName}</strong> — {appt.phone}</p>
                    </div>

                    {/* Status Badge */}
                    <span className={`px-2.5 py-1 text-[10px] font-extrabold uppercase rounded-full border ${
                      appt.status === 'Confirmed' ? 'bg-emerald-100 text-emerald-800 border-emerald-300' :
                      appt.status === 'Pending' ? 'bg-amber-100 text-amber-800 border-amber-300' :
                      appt.status === 'Completed' ? 'bg-blue-100 text-blue-800 border-blue-300' :
                      appt.status === 'Rescheduled' ? 'bg-purple-100 text-purple-800 border-purple-300' :
                      'bg-slate-100 text-slate-600 border-slate-300'
                    }`}>
                      {appt.status}
                    </span>
                  </div>

                  <div className="mt-3 flex flex-wrap items-center justify-between text-xs text-slate-600 pt-2 border-t border-slate-100">
                    <span className="font-semibold text-teal-800">
                      📅 {appt.preferredDate} ({appt.preferredDay})
                    </span>
                    <span>🕒 {appt.preferredTime}</span>
                  </div>
                </div>
              ))
            )}
          </div>

          {/* DETAIL VIEW / STATUS MANAGEMENT */}
          <div className="lg:col-span-5 bg-slate-50 p-6 overflow-y-auto">
            {selectedAppt ? (
              <div className="space-y-6">
                
                <div className="border-b border-slate-200 pb-4 flex items-center justify-between">
                  <div>
                    <span className="text-[10px] font-mono font-bold text-slate-400 uppercase">{selectedAppt.id}</span>
                    <h3 className="text-lg font-bold text-slate-900">{selectedAppt.childName}'s Consultation</h3>
                  </div>
                  <button
                    onClick={() => deleteAppointment(selectedAppt.id)}
                    className="p-1.5 text-red-600 hover:bg-red-100 rounded-lg transition-colors"
                    title="Delete Request"
                  >
                    <Trash2 className="w-4 h-4" />
                  </button>
                </div>

                {/* Status Changer */}
                <div className="space-y-2">
                  <label className="block text-xs font-bold text-slate-700 uppercase tracking-wide">
                    Update Appointment Status
                  </label>
                  <div className="grid grid-cols-2 gap-2">
                    <button
                      onClick={() => updateAppointmentStatus(selectedAppt.id, 'Confirmed')}
                      className={`py-2 px-3 text-xs font-bold rounded-xl border flex items-center justify-center space-x-1.5 ${
                        selectedAppt.status === 'Confirmed'
                          ? 'bg-emerald-600 text-white border-emerald-700'
                          : 'bg-white text-emerald-800 border-emerald-300 hover:bg-emerald-50'
                      }`}
                    >
                      <CheckCircle2 className="w-3.5 h-3.5" />
                      <span>Confirm</span>
                    </button>

                    <button
                      onClick={() => updateAppointmentStatus(selectedAppt.id, 'Rescheduled')}
                      className={`py-2 px-3 text-xs font-bold rounded-xl border flex items-center justify-center space-x-1.5 ${
                        selectedAppt.status === 'Rescheduled'
                          ? 'bg-purple-600 text-white border-purple-700'
                          : 'bg-white text-purple-800 border-purple-300 hover:bg-purple-50'
                      }`}
                    >
                      <RotateCcw className="w-3.5 h-3.5" />
                      <span>Reschedule</span>
                    </button>

                    <button
                      onClick={() => updateAppointmentStatus(selectedAppt.id, 'Completed')}
                      className={`py-2 px-3 text-xs font-bold rounded-xl border flex items-center justify-center space-x-1.5 ${
                        selectedAppt.status === 'Completed'
                          ? 'bg-blue-600 text-white border-blue-700'
                          : 'bg-white text-blue-800 border-blue-300 hover:bg-blue-50'
                      }`}
                    >
                      <CheckCheck className="w-3.5 h-3.5" />
                      <span>Completed</span>
                    </button>

                    <button
                      onClick={() => updateAppointmentStatus(selectedAppt.id, 'Cancelled')}
                      className={`py-2 px-3 text-xs font-bold rounded-xl border flex items-center justify-center space-x-1.5 ${
                        selectedAppt.status === 'Cancelled'
                          ? 'bg-red-600 text-white border-red-700'
                          : 'bg-white text-red-800 border-red-300 hover:bg-red-50'
                      }`}
                    >
                      <XCircle className="w-3.5 h-3.5" />
                      <span>Cancel</span>
                    </button>
                  </div>
                </div>

                {/* Details Breakdown */}
                <div className="bg-white p-4 rounded-xl border border-slate-200 text-xs space-y-2.5">
                  <div>
                    <span className="text-slate-500 block font-medium">Parent / Guardian:</span>
                    <span className="font-bold text-slate-900">{selectedAppt.parentName}</span>
                  </div>
                  <div>
                    <span className="text-slate-500 block font-medium">Child Details:</span>
                    <span className="font-bold text-slate-900">{selectedAppt.childName} ({selectedAppt.childAge}, {selectedAppt.gender})</span>
                  </div>
                  <div>
                    <span className="text-slate-500 block font-medium">Contact Phone / WhatsApp:</span>
                    <div className="flex items-center space-x-2 mt-1">
                      <a href={`tel:${selectedAppt.phone}`} className="inline-flex items-center space-x-1 px-2 py-1 bg-slate-100 rounded text-slate-800 font-bold">
                        <Phone className="w-3 h-3 text-teal-600" />
                        <span>{selectedAppt.phone}</span>
                      </a>
                      <a 
                        href={`https://wa.me/${selectedAppt.whatsapp.replace(/[^0-9]/g, '')}`} 
                        target="_blank" 
                        rel="noreferrer"
                        className="inline-flex items-center space-x-1 px-2 py-1 bg-emerald-50 text-emerald-800 rounded font-bold border border-emerald-200"
                      >
                        <MessageCircle className="w-3 h-3 text-emerald-600" />
                        <span>WhatsApp</span>
                      </a>
                    </div>
                  </div>
                  <div>
                    <span className="text-slate-500 block font-medium">Requested Slot:</span>
                    <span className="font-bold text-teal-800">{selectedAppt.preferredDate} ({selectedAppt.preferredDay}) - {selectedAppt.preferredTime}</span>
                  </div>
                  <div>
                    <span className="text-slate-500 block font-medium">Reason for Visit:</span>
                    <span className="font-semibold text-slate-900">{selectedAppt.reason}</span>
                  </div>
                  {selectedAppt.message && (
                    <div>
                      <span className="text-slate-500 block font-medium">Parent Message:</span>
                      <p className="p-2 bg-slate-50 rounded border border-slate-200 italic">{selectedAppt.message}</p>
                    </div>
                  )}
                  <div>
                    <span className="text-slate-500 block font-medium">Location:</span>
                    <span className="font-bold text-slate-900">Adda Gamber Clinic</span>
                  </div>
                </div>

                {/* Staff Notes */}
                <div className="space-y-1.5">
                  <label className="block text-xs font-bold text-slate-700 flex items-center space-x-1">
                    <Edit3 className="w-3.5 h-3.5 text-teal-600" />
                    <span>Clinic Staff Internal Notes</span>
                  </label>
                  <textarea
                    rows={3}
                    value={selectedAppt.notes || ''}
                    onChange={(e) => updateAppointmentStatus(selectedAppt.id, selectedAppt.status, e.target.value)}
                    placeholder="Add staff notes (e.g., called parent, confirmed 11:30 AM)..."
                    className="w-full p-2.5 bg-white border border-slate-300 rounded-xl text-xs font-medium text-slate-900 focus:outline-none focus:ring-2 focus:ring-teal-500"
                  ></textarea>
                </div>

              </div>
            ) : (
              <div className="h-full flex flex-col items-center justify-center text-center text-slate-400 p-8">
                <ShieldCheck className="w-12 h-12 mb-2 text-slate-300" />
                <p className="text-xs font-semibold">Select an appointment request on the left to view details and manage confirmation status.</p>
              </div>
            )}
          </div>

        </div>

      </div>
    </div>
  );
};
