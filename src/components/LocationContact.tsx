import React from 'react';
import { MapPin, Phone, Clock, Navigation, ExternalLink, MessageSquare, Car, Bus, Train } from 'lucide-react';
import { RESTAURANT_INFO } from '../data/restaurantData';

export const LocationContact: React.FC = () => {
  return (
    <section id="location" className="py-20 bg-stone-950 text-stone-100 border-t border-amber-900/30">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-14">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-amber-950 border border-amber-700/60 text-amber-300 text-xs font-semibold uppercase tracking-wider mb-2">
            <MapPin className="w-3.5 h-3.5 text-amber-400" />
            <span>Visit Us in Malakpet</span>
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-serif-title font-bold text-stone-100">
            Find <span className="text-amber-400">Hotel Sohail</span>
          </h2>
          <p className="text-stone-300 text-sm sm:text-base mt-2">
            Conveniently located on Government Printing Press Road in Chanchalguda, right beside the Government Area Hospital.
          </p>
        </div>

        {/* 2-Column Grid: Map on Left/Top, Details on Right */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          
          {/* Map & Direction Actions */}
          <div className="lg:col-span-7 space-y-4">
            <div className="relative rounded-2xl overflow-hidden border border-amber-800/50 shadow-2xl bg-stone-900 h-80 sm:h-96">
              {/* Responsive Google Maps Embed with pointer */}
              <iframe
                title="Hotel Sohail Google Maps Location"
                src="https://maps.google.com/maps?q=17.372458,78.4992825&hl=en&z=16&output=embed"
                width="100%"
                height="100%"
                style={{ border: 0, filter: 'contrast(1.05) saturate(1.1)' }}
                allowFullScreen={false}
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              ></iframe>

              {/* Float badge over map */}
              <div className="absolute top-3 left-3 bg-stone-950/90 backdrop-blur-md px-3 py-1.5 rounded-xl border border-amber-600/60 shadow-lg text-xs font-bold text-amber-300 flex items-center gap-1.5">
                <MapPin className="w-3.5 h-3.5 text-red-500" />
                <span>HOTEL SOHAIL • Malakpet</span>
              </div>
            </div>

            {/* Direct Open in Google Maps Primary Button */}
            <div className="p-4 rounded-xl bg-stone-900 border border-stone-800 flex flex-col sm:flex-row items-center justify-between gap-4">
              <div className="text-xs text-stone-300 text-center sm:text-left">
                <strong className="text-stone-100 block text-sm">Navigating here?</strong>
                Open directly in Google Maps application for turn-by-turn live navigation and live traffic updates.
              </div>
              <a
                href={RESTAURANT_INFO.googleMapsUrl}
                target="_blank"
                rel="noopener noreferrer"
                id="maps-direct-navigation-btn"
                className="w-full sm:w-auto px-5 py-2.5 rounded-xl bg-gradient-to-r from-amber-500 to-amber-600 hover:from-amber-400 hover:to-amber-500 text-stone-950 font-black text-xs uppercase tracking-wider flex items-center justify-center gap-2 shadow-lg shadow-amber-950/50 transition-all flex-shrink-0"
              >
                <Navigation className="w-4 h-4" />
                <span>Open Google Maps</span>
                <ExternalLink className="w-3.5 h-3.5" />
              </a>
            </div>

            {/* Transit & Commute tips */}
            <div className="grid grid-cols-3 gap-3 text-center">
              <div className="p-3 rounded-xl bg-stone-900/60 border border-stone-800">
                <Bus className="w-4 h-4 text-amber-400 mx-auto mb-1" />
                <div className="text-xs font-bold text-stone-200">Bus Transit</div>
                <div className="text-[10px] text-stone-400 mt-0.5">2 min from Old Malakpet Bus Stop</div>
              </div>
              <div className="p-3 rounded-xl bg-stone-900/60 border border-stone-800">
                <Train className="w-4 h-4 text-amber-400 mx-auto mb-1" />
                <div className="text-xs font-bold text-stone-200">Metro Station</div>
                <div className="text-[10px] text-stone-400 mt-0.5">5 min from Malakpet Metro</div>
              </div>
              <div className="p-3 rounded-xl bg-stone-900/60 border border-stone-800">
                <Car className="w-4 h-4 text-amber-400 mx-auto mb-1" />
                <div className="text-xs font-bold text-stone-200">Parking</div>
                <div className="text-[10px] text-stone-400 mt-0.5">Valet & roadside assistance</div>
              </div>
            </div>
          </div>

          {/* Contact Details, Hours & Address Card */}
          <div className="lg:col-span-5 space-y-5">
            
            {/* Address Card */}
            <div className="p-6 rounded-2xl bg-stone-900 border border-amber-900/40 shadow-xl space-y-4">
              <h3 className="font-serif-title text-xl font-bold text-amber-300">
                Contact & Address
              </h3>

              <div className="space-y-3 text-xs sm:text-sm">
                <div className="flex items-start gap-3">
                  <MapPin className="w-4 h-4 text-amber-400 flex-shrink-0 mt-1" />
                  <div>
                    <span className="font-bold text-stone-200 block">Complete Address:</span>
                    <p className="text-stone-300 mt-0.5 leading-relaxed">
                      {RESTAURANT_INFO.address}
                    </p>
                    <span className="text-xs text-amber-400/90 font-medium block mt-1">
                      Landmark: {RESTAURANT_INFO.landmark}
                    </span>
                  </div>
                </div>

                <div className="flex items-start gap-3 pt-2 border-t border-stone-800">
                  <Phone className="w-4 h-4 text-amber-400 flex-shrink-0 mt-1" />
                  <div>
                    <span className="font-bold text-stone-200 block">Telephone & Hotline:</span>
                    <div className="flex flex-wrap gap-x-4 gap-y-1 mt-1 font-semibold text-amber-300">
                      <a href={`tel:${RESTAURANT_INFO.phone1}`} className="hover:underline">
                        {RESTAURANT_INFO.phone1}
                      </a>
                      <a href={`tel:${RESTAURANT_INFO.phone2}`} className="hover:underline">
                        {RESTAURANT_INFO.phone2}
                      </a>
                    </div>
                  </div>
                </div>

                <div className="flex items-start gap-3 pt-2 border-t border-stone-800">
                  <MessageSquare className="w-4 h-4 text-emerald-400 flex-shrink-0 mt-1" />
                  <div>
                    <span className="font-bold text-stone-200 block">WhatsApp Orders & Handi Inquiries:</span>
                    <a
                      href={`https://wa.me/${RESTAURANT_INFO.whatsappNumber}`}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-emerald-400 hover:text-emerald-300 font-bold block mt-0.5"
                    >
                      +91 77023 02357 (Chat Directly)
                    </a>
                  </div>
                </div>
              </div>
            </div>

            {/* Daily Routine / Timeline */}
            <div className="p-6 rounded-2xl bg-stone-900 border border-stone-800 shadow-xl space-y-4">
              <div className="flex items-center justify-between">
                <h3 className="font-serif-title text-lg font-bold text-stone-100 flex items-center gap-2">
                  <Clock className="w-4 h-4 text-amber-400" />
                  <span>Daily Dining Timings</span>
                </h3>
                <span className="text-[11px] px-2 py-0.5 rounded bg-amber-950 text-amber-300 border border-amber-800 font-semibold">
                  7 Days
                </span>
              </div>

              <div className="space-y-2.5 text-xs text-stone-300">
                <div className="p-2.5 rounded-lg bg-stone-950 border border-stone-800/80 flex items-center justify-between">
                  <div>
                    <div className="font-bold text-stone-100">Morning Paya & Chai</div>
                    <div className="text-[11px] text-stone-400">Paya Nahari, Zuban & Irani Chai</div>
                  </div>
                  <span className="text-amber-400 font-bold">5:00 AM – 11:00 AM</span>
                </div>

                <div className="p-2.5 rounded-lg bg-stone-950 border border-stone-800/80 flex items-center justify-between">
                  <div>
                    <div className="font-bold text-stone-100">Lunch Dum Biryani</div>
                    <div className="text-[11px] text-stone-400">Hot Mutton & Chicken Dum Biryani</div>
                  </div>
                  <span className="text-amber-400 font-bold">11:30 AM – 4:30 PM</span>
                </div>

                <div className="p-2.5 rounded-lg bg-stone-950 border border-stone-800/80 flex items-center justify-between">
                  <div>
                    <div className="font-bold text-stone-100">Evening Chai & Lukhmi</div>
                    <div className="text-[11px] text-stone-400">Osmania Biscuits & Keema Lukhmi</div>
                  </div>
                  <span className="text-amber-400 font-bold">4:00 PM – 7:30 PM</span>
                </div>

                <div className="p-2.5 rounded-lg bg-stone-950 border border-stone-800/80 flex items-center justify-between">
                  <div>
                    <div className="font-bold text-stone-100">Dinner & Late Night</div>
                    <div className="text-[11px] text-stone-400">Kebabs, Haleem, Biryani & Marag</div>
                  </div>
                  <span className="text-amber-400 font-bold">7:00 PM – 12:00 AM</span>
                </div>
              </div>
            </div>

          </div>

        </div>

      </div>
    </section>
  );
};
