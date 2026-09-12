import React, { useState } from 'react';
import { X, Calendar, Clock, Users, CheckCircle2, Phone, Sparkles } from 'lucide-react';
import { RESTAURANT_INFO } from '../data/restaurantData';

interface ReservationModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export const ReservationModal: React.FC<ReservationModalProps> = ({ isOpen, onClose }) => {
  const [name, setName] = useState('');
  const [phone, setPhone] = useState('');
  const [guests, setGuests] = useState('4');
  const [date, setDate] = useState('');
  const [timeSlot, setTimeSlot] = useState('Dinner (8:00 PM)');
  const [section, setSection] = useState('AC Family Dining (1st Floor)');
  const [notes, setNotes] = useState('');
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [resId, setResId] = useState('');

  if (!isOpen) return null;

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!name.trim() || !phone.trim()) return;

    const code = 'SOH-' + Math.floor(100000 + Math.random() * 900000);
    setResId(code);
    setIsSubmitted(true);
  };

  const handleSendToWhatsApp = () => {
    const text = `Assalamu Alaikum / Hello Hotel Sohail,%0A%0AI would like to confirm my Table Reservation:%0A- Booking Ref: ${resId}%0A- Name: ${name}%0A- Phone: ${phone}%0A- Guests: ${guests} People%0A- Date & Time: ${date || 'Today'} at ${timeSlot}%0A- Section: ${section}%0A- Notes: ${notes || 'None'}%0A%0APlease confirm our table availability. Thank you!`;

    window.open(`https://wa.me/${RESTAURANT_INFO.whatsappNumber}?text=${text}`, '_blank');
  };

  const resetModal = () => {
    setIsSubmitted(false);
    setName('');
    setPhone('');
    setNotes('');
    onClose();
  };

  return (
    <div className="fixed inset-0 z-50 overflow-y-auto">
      <div className="fixed inset-0 bg-black/80 backdrop-blur-sm transition-opacity" onClick={resetModal} />

      <div className="min-h-screen px-4 py-8 flex items-center justify-center relative">
        <div className="relative bg-stone-900 text-stone-100 rounded-3xl max-w-lg w-full border border-amber-800/60 shadow-2xl p-6 sm:p-8 space-y-6">
          
          {/* Header */}
          <div className="flex items-start justify-between border-b border-stone-800 pb-4">
            <div>
              <div className="flex items-center gap-1.5 text-amber-400 text-xs font-bold uppercase tracking-wider">
                <Calendar className="w-4 h-4" />
                <span>Table & Family Dining Booking</span>
              </div>
              <h2 className="text-2xl font-serif-title font-bold text-stone-100 mt-1">
                Reserve at Hotel Sohail
              </h2>
              <p className="text-xs text-stone-400 mt-0.5">
                Malakpet, Hyderabad • Air-Conditioned Family Dining available
              </p>
            </div>
            <button
              type="button"
              onClick={resetModal}
              className="p-1.5 text-stone-400 hover:text-stone-200 rounded-lg hover:bg-stone-800"
              aria-label="Close modal"
            >
              <X className="w-5 h-5" />
            </button>
          </div>

          {isSubmitted ? (
            /* Success confirmation screen */
            <div className="text-center py-6 space-y-4">
              <div className="w-16 h-16 rounded-full bg-emerald-950 border border-emerald-600/60 flex items-center justify-center mx-auto text-emerald-400">
                <CheckCircle2 className="w-8 h-8" />
              </div>

              <div>
                <h3 className="font-serif-title text-xl font-bold text-stone-100">
                  Table Request Received!
                </h3>
                <p className="text-xs text-stone-400 mt-1">
                  We look forward to hosting you at Hotel Sohail.
                </p>
              </div>

              <div className="p-4 rounded-xl bg-stone-950 border border-amber-800/40 text-left space-y-2 text-xs">
                <div className="flex justify-between">
                  <span className="text-stone-400">Booking Reference:</span>
                  <span className="font-mono font-bold text-amber-400">{resId}</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-stone-400">Guest Name:</span>
                  <span className="font-semibold text-stone-200">{name}</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-stone-400">Party Size:</span>
                  <span className="font-semibold text-stone-200">{guests} Guests</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-stone-400">Section:</span>
                  <span className="font-semibold text-amber-300">{section}</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-stone-400">Timing:</span>
                  <span className="font-semibold text-stone-200">{timeSlot}</span>
                </div>
              </div>

              <div className="space-y-2 pt-2">
                <button
                  type="button"
                  onClick={handleSendToWhatsApp}
                  className="w-full py-3 rounded-xl bg-emerald-600 hover:bg-emerald-500 text-white font-bold text-xs uppercase tracking-wider shadow-lg transition flex items-center justify-center gap-2"
                >
                  <span>Send Confirmation via WhatsApp</span>
                </button>
                <button
                  type="button"
                  onClick={resetModal}
                  className="w-full py-2.5 rounded-xl bg-stone-800 hover:bg-stone-700 text-stone-300 font-semibold text-xs transition"
                >
                  Done
                </button>
              </div>
            </div>
          ) : (
            /* Reservation Form */
            <form onSubmit={handleSubmit} className="space-y-4">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                <div className="space-y-1">
                  <label className="text-xs font-semibold text-stone-300">Your Full Name *</label>
                  <input
                    type="text"
                    required
                    placeholder="e.g. Mirza Baig"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    className="w-full px-3 py-2 rounded-xl bg-stone-950 border border-stone-800 text-xs text-stone-200 placeholder-stone-500 focus:outline-none focus:border-amber-500"
                  />
                </div>

                <div className="space-y-1">
                  <label className="text-xs font-semibold text-stone-300">Phone Number *</label>
                  <input
                    type="tel"
                    required
                    placeholder="e.g. +91 98765 43210"
                    value={phone}
                    onChange={(e) => setPhone(e.target.value)}
                    className="w-full px-3 py-2 rounded-xl bg-stone-950 border border-stone-800 text-xs text-stone-200 placeholder-stone-500 focus:outline-none focus:border-amber-500"
                  />
                </div>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                <div className="space-y-1">
                  <label className="text-xs font-semibold text-stone-300">Date of Visit *</label>
                  <input
                    type="date"
                    required
                    value={date}
                    onChange={(e) => setDate(e.target.value)}
                    className="w-full px-3 py-2 rounded-xl bg-stone-950 border border-stone-800 text-xs text-stone-200 focus:outline-none focus:border-amber-500"
                  />
                </div>

                <div className="space-y-1">
                  <label className="text-xs font-semibold text-stone-300">Number of Guests</label>
                  <select
                    value={guests}
                    onChange={(e) => setGuests(e.target.value)}
                    className="w-full px-3 py-2 rounded-xl bg-stone-950 border border-stone-800 text-xs text-stone-200 focus:outline-none focus:border-amber-500"
                  >
                    <option value="2">2 Guests (Couple)</option>
                    <option value="4">4 Guests (Family)</option>
                    <option value="6">6 Guests</option>
                    <option value="8">8 Guests (Large Family)</option>
                    <option value="12">12 Guests (Group)</option>
                    <option value="20+">20+ Guests (Dawat / Banquet)</option>
                  </select>
                </div>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                <div className="space-y-1">
                  <label className="text-xs font-semibold text-stone-300">Preferred Meal / Time</label>
                  <select
                    value={timeSlot}
                    onChange={(e) => setTimeSlot(e.target.value)}
                    className="w-full px-3 py-2 rounded-xl bg-stone-950 border border-stone-800 text-xs text-stone-200 focus:outline-none focus:border-amber-500"
                  >
                    <option value="Morning Paya & Chai (7:00 AM - 10:00 AM)">Morning Paya & Chai (7:00 - 10:00 AM)</option>
                    <option value="Lunch (12:30 PM - 2:30 PM)">Lunch (12:30 PM - 2:30 PM)</option>
                    <option value="Evening High Tea (4:30 PM - 6:30 PM)">Evening High Tea (4:30 PM - 6:30 PM)</option>
                    <option value="Dinner (8:00 PM - 11:30 PM)">Dinner (8:00 PM - 11:30 PM)</option>
                  </select>
                </div>

                <div className="space-y-1">
                  <label className="text-xs font-semibold text-stone-300">Seating Preference</label>
                  <select
                    value={section}
                    onChange={(e) => setSection(e.target.value)}
                    className="w-full px-3 py-2 rounded-xl bg-stone-950 border border-stone-800 text-xs text-stone-200 focus:outline-none focus:border-amber-500"
                  >
                    <option value="AC Family Dining (1st Floor)">AC Family Dining (1st Floor)</option>
                    <option value="Main Dining Hall">Main Dining Hall</option>
                    <option value="Banquet Hall Inquiry (Celebrations)">Banquet Hall Inquiry (Celebrations)</option>
                  </select>
                </div>
              </div>

              <div className="space-y-1">
                <label className="text-xs font-semibold text-stone-300">Special Notes</label>
                <textarea
                  placeholder="e.g. Need high chair, pre-order Handi Biryani, birthday celebration..."
                  rows={2}
                  value={notes}
                  onChange={(e) => setNotes(e.target.value)}
                  className="w-full px-3 py-2 rounded-xl bg-stone-950 border border-stone-800 text-xs text-stone-200 placeholder-stone-500 focus:outline-none focus:border-amber-500 resize-none"
                />
              </div>

              <button
                type="submit"
                id="submit-reservation-btn"
                className="w-full py-3 rounded-xl bg-gradient-to-r from-amber-500 to-amber-600 hover:from-amber-400 hover:to-amber-500 text-stone-950 font-bold text-sm shadow-lg shadow-amber-950/60 transition active:scale-98"
              >
                Confirm Table Reservation
              </button>

              <div className="text-center">
                <a
                  href={`tel:${RESTAURANT_INFO.phone1}`}
                  className="text-xs text-stone-400 hover:text-amber-400 transition"
                >
                  Or call directly: <strong className="text-stone-200">{RESTAURANT_INFO.phone1}</strong>
                </a>
              </div>
            </form>
          )}

        </div>
      </div>
    </div>
  );
};
