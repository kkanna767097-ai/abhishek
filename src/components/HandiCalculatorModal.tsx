import React, { useState } from 'react';
import { X, Flame, Users, Calendar, Clock, MapPin, Phone, MessageSquareText, Sparkles, CheckCircle2 } from 'lucide-react';
import { RESTAURANT_INFO } from '../data/restaurantData';

interface HandiCalculatorModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export const HandiCalculatorModal: React.FC<HandiCalculatorModalProps> = ({ isOpen, onClose }) => {
  const [guests, setGuests] = useState<number>(40);
  const [dish, setDish] = useState<'chicken' | 'mutton' | 'haleem'>('mutton');
  const [includeMeetha, setIncludeMeetha] = useState(true);
  const [name, setName] = useState('');
  const [phone, setPhone] = useState('');
  const [eventDate, setEventDate] = useState('');
  const [eventTime, setEventTime] = useState('Lunch (1:00 PM)');
  const [venue, setVenue] = useState('');

  if (!isOpen) return null;

  // Exact catering calculations
  const meatKg =
    dish === 'chicken'
      ? Math.round(guests * 0.16 * 10) / 10
      : dish === 'mutton'
      ? Math.round(guests * 0.15 * 10) / 10
      : Math.round(guests * 0.25 * 10) / 10;

  const riceKg = dish !== 'haleem' ? Math.round(guests * 0.16 * 10) / 10 : 0;
  const salanLitres = dish !== 'haleem' ? Math.ceil(guests * 0.1) : 0;
  const raitaLitres = dish !== 'haleem' ? Math.ceil(guests * 0.1) : 0;

  const basePricePerHead = dish === 'chicken' ? 175 : dish === 'mutton' ? 240 : 220;
  const meethaPrice = includeMeetha ? guests * 45 : 0;
  const estimatedTotal = guests * basePricePerHead + meethaPrice;

  const handleSendWhatsApp = () => {
    const dishTitle =
      dish === 'chicken'
        ? 'Chicken Dum Biryani Handi'
        : dish === 'mutton'
        ? 'Hyderabadi Mutton Dum Biryani Handi'
        : 'Pure Desi Ghee Shahi Haleem Bulk Deg';

    const message = `Assalamu Alaikum / Hello Hotel Sohail,%0A%0AI would like to place a Bulk Handi / Dawat Catering Inquiry:%0A%0A*Name:* ${name || 'Prospective Host'}%0A*Phone:* ${phone || 'Not provided'}%0A*Occasion / Date:* ${eventDate || 'Upcoming'} (${eventTime})%0A*Venue:* ${venue || 'Hyderabad'}%0A%0A*ESTIMATED REQUIREMENTS:*%0A- Dish: ${dishTitle}%0A- Guests: ${guests} Persons%0A- Meat Weight: ~${meatKg} kg%0A${riceKg > 0 ? `- Basmati Rice: ~${riceKg} kg%0A` : ''}${salanLitres > 0 ? `- Mirchi ka Salan: ${salanLitres} Litres%0A- Dahi ki Chutney: ${raitaLitres} Litres%0A` : ''}- Include Double ka Meetha / Qubani: ${includeMeetha ? 'YES' : 'NO'}%0A*Est. Budget:* ~₹${estimatedTotal.toLocaleString()}%0A%0APlease confirm Handi availability and advance booking details. Thank you!`;

    window.open(`https://wa.me/${RESTAURANT_INFO.whatsappNumber}?text=${message}`, '_blank');
  };

  return (
    <div className="fixed inset-0 z-50 overflow-y-auto">
      <div className="fixed inset-0 bg-black/80 backdrop-blur-sm transition-opacity" onClick={onClose} />

      <div className="min-h-screen px-4 py-8 flex items-center justify-center relative">
        <div className="relative bg-stone-900 text-stone-100 rounded-3xl max-w-2xl w-full border border-amber-800/60 shadow-2xl p-6 sm:p-8 space-y-6">
          
          {/* Header */}
          <div className="flex items-start justify-between border-b border-stone-800 pb-4">
            <div>
              <div className="flex items-center gap-2 text-amber-400 text-xs font-bold uppercase tracking-wider">
                <Flame className="w-4 h-4" />
                <span>Hotel Sohail Bulk Dawat Specialist</span>
              </div>
              <h2 className="text-2xl sm:text-3xl font-serif-title font-bold text-stone-100 mt-1">
                Handi & Deg Catering Calculator
              </h2>
              <p className="text-xs text-stone-400 mt-0.5">
                Authentic firewood dum cooking for 20 to 500+ guests. Sealed and delivered hot.
              </p>
            </div>
            <button
              type="button"
              onClick={onClose}
              className="p-1.5 text-stone-400 hover:text-stone-200 rounded-lg hover:bg-stone-800"
              aria-label="Close modal"
            >
              <X className="w-6 h-6" />
            </button>
          </div>

          {/* Form */}
          <div className="space-y-5">
            {/* 1. Dish Choice */}
            <div>
              <label className="text-xs font-bold text-stone-300 uppercase tracking-wider block mb-2">
                1. Select Signature Cuisine
              </label>
              <div className="grid grid-cols-3 gap-2">
                <button
                  type="button"
                  onClick={() => setDish('mutton')}
                  className={`p-3 rounded-xl border text-xs sm:text-sm font-bold transition flex flex-col items-center gap-1 ${
                    dish === 'mutton'
                      ? 'bg-amber-600 border-amber-500 text-stone-950 shadow-md'
                      : 'bg-stone-950 border-stone-800 text-stone-300'
                  }`}
                >
                  <span>Mutton Dum Biryani</span>
                  <span className="text-[10px] opacity-80">Our Crown Specialty</span>
                </button>
                <button
                  type="button"
                  onClick={() => setDish('chicken')}
                  className={`p-3 rounded-xl border text-xs sm:text-sm font-bold transition flex flex-col items-center gap-1 ${
                    dish === 'chicken'
                      ? 'bg-amber-600 border-amber-500 text-stone-950 shadow-md'
                      : 'bg-stone-950 border-stone-800 text-stone-300'
                  }`}
                >
                  <span>Chicken Dum Biryani</span>
                  <span className="text-[10px] opacity-80">Popular Dawat Feast</span>
                </button>
                <button
                  type="button"
                  onClick={() => setDish('haleem')}
                  className={`p-3 rounded-xl border text-xs sm:text-sm font-bold transition flex flex-col items-center gap-1 ${
                    dish === 'haleem'
                      ? 'bg-amber-600 border-amber-500 text-stone-950 shadow-md'
                      : 'bg-stone-950 border-stone-800 text-stone-300'
                  }`}
                >
                  <span>Shahi Haleem</span>
                  <span className="text-[10px] opacity-80">Pure Ghee & Cashews</span>
                </button>
              </div>
            </div>

            {/* 2. Guests Range */}
            <div className="space-y-2">
              <div className="flex items-center justify-between">
                <label className="text-xs font-bold text-stone-300 uppercase tracking-wider">
                  2. Number of Guests:
                </label>
                <span className="text-base font-extrabold text-amber-400 bg-amber-950 px-3 py-1 rounded-lg border border-amber-800">
                  {guests} People
                </span>
              </div>
              <input
                type="range"
                min={20}
                max={250}
                step={5}
                value={guests}
                onChange={(e) => setGuests(Number(e.target.value))}
                className="w-full h-2 bg-stone-800 rounded-lg appearance-none cursor-pointer accent-amber-500"
              />
              <div className="flex justify-between text-[11px] text-stone-400">
                <span>20 Pax</span>
                <span>50 Pax</span>
                <span>100 Pax</span>
                <span>250 Pax</span>
              </div>
            </div>

            {/* 3. Add-on Dessert */}
            <div className="flex items-center justify-between p-3 rounded-xl bg-stone-950 border border-stone-800">
              <div>
                <span className="text-xs font-bold text-stone-200 block">
                  Include Traditional Sweet / Meetha?
                </span>
                <span className="text-[11px] text-stone-400">
                  Double ka Meetha or Qubani ka Meetha with fresh Malai (+₹45/person)
                </span>
              </div>
              <input
                type="checkbox"
                checked={includeMeetha}
                onChange={(e) => setIncludeMeetha(e.target.checked)}
                className="w-5 h-5 accent-amber-500 cursor-pointer"
              />
            </div>

            {/* Event & Contact fields */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 pt-1">
              <input
                type="text"
                placeholder="Host Name *"
                value={name}
                onChange={(e) => setName(e.target.value)}
                className="w-full px-3 py-2.5 rounded-xl bg-stone-950 border border-stone-800 text-xs text-stone-200 placeholder-stone-500 focus:outline-none focus:border-amber-500"
              />
              <input
                type="tel"
                placeholder="Contact Phone Number *"
                value={phone}
                onChange={(e) => setPhone(e.target.value)}
                className="w-full px-3 py-2.5 rounded-xl bg-stone-950 border border-stone-800 text-xs text-stone-200 placeholder-stone-500 focus:outline-none focus:border-amber-500"
              />
              <input
                type="date"
                value={eventDate}
                onChange={(e) => setEventDate(e.target.value)}
                className="w-full px-3 py-2.5 rounded-xl bg-stone-950 border border-stone-800 text-xs text-stone-200 focus:outline-none focus:border-amber-500"
              />
              <input
                type="text"
                placeholder="Venue / Function Hall in Hyderabad"
                value={venue}
                onChange={(e) => setVenue(e.target.value)}
                className="w-full px-3 py-2.5 rounded-xl bg-stone-950 border border-stone-800 text-xs text-stone-200 placeholder-stone-500 focus:outline-none focus:border-amber-500"
              />
            </div>

            {/* Calculations Breakdown */}
            <div className="p-4 rounded-2xl bg-amber-950/40 border border-amber-800/50 space-y-2">
              <div className="text-xs font-bold text-amber-300 uppercase tracking-wider flex items-center gap-1.5">
                <Sparkles className="w-3.5 h-3.5" />
                <span>Estimated Catering Summary</span>
              </div>
              <div className="grid grid-cols-2 sm:grid-cols-4 gap-2 text-xs pt-1">
                <div className="p-2 rounded-lg bg-stone-950/80 border border-stone-800">
                  <span className="text-stone-400 block text-[10px]">Meat Ratio</span>
                  <strong className="text-amber-300 font-bold">{meatKg} kg</strong>
                </div>
                {dish !== 'haleem' ? (
                  <div className="p-2 rounded-lg bg-stone-950/80 border border-stone-800">
                    <span className="text-stone-400 block text-[10px]">Basmati Rice</span>
                    <strong className="text-amber-300 font-bold">{riceKg} kg</strong>
                  </div>
                ) : (
                  <div className="p-2 rounded-lg bg-stone-950/80 border border-stone-800">
                    <span className="text-stone-400 block text-[10px]">Ghee & Cashews</span>
                    <strong className="text-amber-300 font-bold">Generous kit</strong>
                  </div>
                )}
                <div className="p-2 rounded-lg bg-stone-950/80 border border-stone-800">
                  <span className="text-stone-400 block text-[10px]">Salan & Raita</span>
                  <strong className="text-amber-300 font-bold">
                    {salanLitres > 0 ? `${salanLitres}L each` : 'Included'}
                  </strong>
                </div>
                <div className="p-2 rounded-lg bg-stone-950/80 border border-amber-700/60">
                  <span className="text-stone-400 block text-[10px]">Estimated Price</span>
                  <strong className="text-amber-400 font-black text-sm">
                    ~₹{estimatedTotal.toLocaleString()}
                  </strong>
                </div>
              </div>
            </div>
          </div>

          {/* Modal Actions */}
          <div className="flex flex-col sm:flex-row gap-3 pt-2">
            <button
              type="button"
              onClick={handleSendWhatsApp}
              className="flex-1 py-3 px-4 rounded-xl bg-emerald-600 hover:bg-emerald-500 text-white font-bold text-sm flex items-center justify-center gap-2 shadow-lg shadow-emerald-950/50 transition"
            >
              <MessageSquareText className="w-4 h-4" />
              <span>Send Quotation to WhatsApp</span>
            </button>
            <a
              href={`tel:${RESTAURANT_INFO.phone2}`}
              className="py-3 px-5 rounded-xl bg-stone-800 hover:bg-stone-700 text-stone-200 font-semibold text-xs flex items-center justify-center gap-2 transition"
            >
              <Phone className="w-4 h-4 text-amber-400" />
              <span>Call Catering Desk</span>
            </a>
          </div>

        </div>
      </div>
    </div>
  );
};
