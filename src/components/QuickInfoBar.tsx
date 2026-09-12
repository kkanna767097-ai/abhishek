import React from 'react';
import { Clock, MapPin, Phone, ExternalLink, Navigation, CheckCircle2 } from 'lucide-react';
import { RESTAURANT_INFO } from '../data/restaurantData';

export const QuickInfoBar: React.FC = () => {
  return (
    <section className="bg-stone-900 border-b border-amber-900/20 py-6 text-stone-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 divide-y md:divide-y-0 md:divide-x divide-stone-800">
          
          {/* Item 1: Timings */}
          <div className="flex items-start gap-4 pt-4 md:pt-0">
            <div className="p-3 rounded-xl bg-amber-950/60 border border-amber-800/40 text-amber-400 flex-shrink-0">
              <Clock className="w-6 h-6" />
            </div>
            <div>
              <div className="flex items-center gap-2">
                <h4 className="text-stone-100 font-bold text-base">Service Hours</h4>
                <span className="text-[11px] px-2 py-0.5 rounded-full bg-emerald-950 text-emerald-400 border border-emerald-800/60 font-semibold">
                  Open Now
                </span>
              </div>
              <p className="text-amber-300/90 text-sm font-semibold mt-0.5">5:00 AM – 12:00 Midnight Daily</p>
              <p className="text-xs text-stone-400 mt-1">
                • Morning Paya & Chai: from 5:00 AM<br />
                • Fresh Dum Biryani: from 11:30 AM<br />
                • Dinner & Kebabs: till Midnight
              </p>
            </div>
          </div>

          {/* Item 2: Address & Landmark */}
          <div className="flex items-start gap-4 pt-4 md:pt-0 md:pl-6">
            <div className="p-3 rounded-xl bg-amber-950/60 border border-amber-800/40 text-amber-400 flex-shrink-0">
              <MapPin className="w-6 h-6" />
            </div>
            <div>
              <h4 className="text-stone-100 font-bold text-base">Our Location</h4>
              <p className="text-stone-300 text-sm mt-0.5 font-medium leading-snug">
                Beside Govt. Hospital, Printing Press Rd, Malakpet, Hyderabad
              </p>
              <p className="text-xs text-stone-400 mt-1">
                Near Old Malakpet Bus Stop & Chanchalguda. Dedicated parking assistance.
              </p>
              <a
                href={RESTAURANT_INFO.googleMapsUrl}
                target="_blank"
                rel="noopener noreferrer"
                id="quick-info-maps-btn"
                className="inline-flex items-center gap-1.5 text-xs font-semibold text-amber-400 hover:text-amber-300 mt-2 underline underline-offset-2"
              >
                <Navigation className="w-3.5 h-3.5" />
                <span>Open in Google Maps & Get Directions</span>
                <ExternalLink className="w-3 h-3 ml-0.5" />
              </a>
            </div>
          </div>

          {/* Item 3: Direct Phone & Takeaway */}
          <div className="flex items-start gap-4 pt-4 md:pt-0 md:pl-6">
            <div className="p-3 rounded-xl bg-amber-950/60 border border-amber-800/40 text-amber-400 flex-shrink-0">
              <Phone className="w-6 h-6" />
            </div>
            <div>
              <h4 className="text-stone-100 font-bold text-base">Orders & Bookings</h4>
              <div className="flex flex-col gap-1 mt-1">
                <a
                  href={`tel:${RESTAURANT_INFO.phone1}`}
                  className="text-sm font-bold text-amber-300 hover:text-amber-200 transition-colors"
                >
                  {RESTAURANT_INFO.phone1}
                </a>
                <a
                  href={`tel:${RESTAURANT_INFO.phone2}`}
                  className="text-xs text-stone-300 hover:text-stone-100 transition-colors"
                >
                  Mobile: {RESTAURANT_INFO.phone2}
                </a>
              </div>
              <div className="flex items-center gap-1.5 text-xs text-stone-400 mt-1.5">
                <CheckCircle2 className="w-3.5 h-3.5 text-emerald-400" />
                <span>Instant takeaway packing & Handi booking</span>
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};
