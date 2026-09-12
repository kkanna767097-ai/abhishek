import React from 'react';
import { UtensilsCrossed, Phone, MapPin, Clock, Navigation, ShieldCheck, Heart, ExternalLink } from 'lucide-react';
import { RESTAURANT_INFO } from '../data/restaurantData';

interface FooterProps {
  onOpenReservation: () => void;
  onOpenHandiCalculator: () => void;
}

export const Footer: React.FC<FooterProps> = ({ onOpenReservation, onOpenHandiCalculator }) => {
  return (
    <footer className="bg-stone-950 text-stone-300 border-t border-amber-950 pt-16 pb-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Main Footer Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-10 pb-12 border-b border-stone-800">
          
          {/* Col 1: Brand & Heritage */}
          <div className="lg:col-span-4 space-y-4">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-full bg-gradient-to-br from-amber-500 to-amber-700 p-0.5 flex items-center justify-center">
                <div className="w-full h-full rounded-full bg-stone-950 flex items-center justify-center">
                  <UtensilsCrossed className="w-4 h-4 text-amber-400" />
                </div>
              </div>
              <div>
                <span className="font-serif-title text-xl font-bold text-stone-100 tracking-wide block">
                  HOTEL SOHAIL
                </span>
                <span className="text-[11px] text-amber-400/80 font-medium">
                  Malakpet • Chanchalguda, Hyderabad
                </span>
              </div>
            </div>

            <p className="text-xs text-stone-400 leading-relaxed max-w-sm">
              An iconic Hyderabad culinary institution. Renowned for authentic Dum Biryani, Shahi Haleem, Mutton Marag with Sheermal, and traditional Irani Chai.
            </p>

            <div className="flex items-center gap-2 pt-2">
              <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-stone-900 border border-amber-800/50 text-[11px] font-bold text-amber-300">
                <ShieldCheck className="w-3.5 h-3.5 text-emerald-400" />
                <span>100% Halal Meats</span>
              </span>
              <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-stone-900 border border-stone-800 text-[11px] text-stone-400">
                ★ 4.3 (20,000+ Reviews)
              </span>
            </div>
          </div>

          {/* Col 2: Quick Links */}
          <div className="lg:col-span-2 space-y-3">
            <h4 className="text-xs font-bold text-amber-300 uppercase tracking-wider">
              Quick Links
            </h4>
            <ul className="space-y-2 text-xs">
              <li>
                <a href="#menu" className="hover:text-amber-400 transition">
                  Full Menu & Prices
                </a>
              </li>
              <li>
                <button
                  type="button"
                  onClick={onOpenHandiCalculator}
                  className="hover:text-amber-400 transition text-left"
                >
                  Handi Bulk Calculator
                </button>
              </li>
              <li>
                <button
                  type="button"
                  onClick={onOpenReservation}
                  className="hover:text-amber-400 transition text-left"
                >
                  Table & Banquet Booking
                </button>
              </li>
              <li>
                <a href="#heritage" className="hover:text-amber-400 transition">
                  Our Culinary Heritage
                </a>
              </li>
              <li>
                <a href="#reviews" className="hover:text-amber-400 transition">
                  Customer Ratings & Reviews
                </a>
              </li>
              <li>
                <a href="#location" className="hover:text-amber-400 transition">
                  Location & Map
                </a>
              </li>
            </ul>
          </div>

          {/* Col 3: Timings & Operations */}
          <div className="lg:col-span-3 space-y-3">
            <h4 className="text-xs font-bold text-amber-300 uppercase tracking-wider flex items-center gap-1.5">
              <Clock className="w-3.5 h-3.5" />
              <span>Service Schedule</span>
            </h4>
            <div className="space-y-2 text-xs text-stone-400">
              <div className="flex justify-between border-b border-stone-900 pb-1">
                <span>Daily Hours:</span>
                <span className="font-semibold text-stone-200">5:00 AM – 12:00 Midnight</span>
              </div>
              <div className="flex justify-between border-b border-stone-900 pb-1">
                <span>Morning Paya & Nihari:</span>
                <span className="font-semibold text-amber-300">From 5:00 AM</span>
              </div>
              <div className="flex justify-between border-b border-stone-900 pb-1">
                <span>Fresh Dum Biryani:</span>
                <span className="font-semibold text-stone-200">11:30 AM – 4:30 PM</span>
              </div>
              <div className="flex justify-between border-b border-stone-900 pb-1">
                <span>Evening Irani Chai:</span>
                <span className="font-semibold text-stone-200">4:00 PM – 7:30 PM</span>
              </div>
              <div className="flex justify-between">
                <span>Dinner & Kebabs:</span>
                <span className="font-semibold text-stone-200">7:00 PM – Midnight</span>
              </div>
            </div>
          </div>

          {/* Col 4: Address & Maps Link */}
          <div className="lg:col-span-3 space-y-3">
            <h4 className="text-xs font-bold text-amber-300 uppercase tracking-wider flex items-center gap-1.5">
              <MapPin className="w-3.5 h-3.5" />
              <span>Location in Hyderabad</span>
            </h4>
            <p className="text-xs text-stone-400 leading-relaxed">
              No. 16-8-992, Government Printing Press Rd, Beside Government Hospital, Officers Colony, Chanchalguda / Old Malakpet, Hyderabad 500024.
            </p>
            <div className="pt-1">
              <a
                href={RESTAURANT_INFO.googleMapsUrl}
                target="_blank"
                rel="noopener noreferrer"
                id="footer-google-maps-link"
                className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-stone-900 hover:bg-amber-950 border border-amber-800/60 text-xs font-semibold text-amber-300 transition"
              >
                <Navigation className="w-3 h-3" />
                <span>Open Google Maps Pin</span>
                <ExternalLink className="w-2.5 h-2.5" />
              </a>
            </div>
            <div className="text-xs text-stone-400 pt-1">
              <span>Hotline: </span>
              <a href={`tel:${RESTAURANT_INFO.phone1}`} className="text-stone-200 hover:text-amber-400 font-bold">
                {RESTAURANT_INFO.phone1}
              </a>
            </div>
          </div>

        </div>

        {/* Bottom copyright */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-stone-500">
          <p>© {new Date().getFullYear()} Hotel Sohail, Malakpet, Hyderabad. All rights reserved.</p>
          <p className="flex items-center gap-1">
            <span>Crafted for true Hyderabadi biryani lovers</span>
          </p>
        </div>

      </div>
    </footer>
  );
};
