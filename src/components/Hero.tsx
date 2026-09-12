import React from 'react';
import { Star, MapPin, ArrowRight, Flame, ShieldCheck, Clock, Award, Sparkles } from 'lucide-react';
import { RESTAURANT_INFO } from '../data/restaurantData';

interface HeroProps {
  onOpenReservation: () => void;
  onOpenHandiCalculator: () => void;
  onScrollToMenu: () => void;
}

export const Hero: React.FC<HeroProps> = ({
  onOpenReservation,
  onOpenHandiCalculator,
  onScrollToMenu,
}) => {
  return (
    <section className="relative bg-stone-950 text-stone-100 overflow-hidden border-b border-amber-900/30">
      {/* Background ambient lighting and subtle texture */}
      <div className="absolute inset-0 z-0 opacity-25 bg-[radial-gradient(#d4af37_1px,transparent_1px)] [background-size:24px_24px]"></div>
      <div className="absolute top-0 right-1/4 w-96 h-96 bg-amber-600/15 rounded-full blur-3xl pointer-events-none"></div>
      <div className="absolute -bottom-10 left-10 w-96 h-96 bg-amber-800/20 rounded-full blur-3xl pointer-events-none"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 lg:py-24 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          
          {/* Left Hero Content */}
          <div className="lg:col-span-7 space-y-6">
            
            {/* Crown Eyebrow Badge */}
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-amber-950/80 border border-amber-700/60 text-amber-300 text-xs font-semibold tracking-wide uppercase shadow-inner">
              <Sparkles className="w-3.5 h-3.5 text-amber-400" />
              <span>Iconic Hyderabadi Culinary Landmark • Malakpet</span>
            </div>

            {/* Main Headline */}
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-serif-title font-bold text-stone-100 leading-tight">
              The True Royal Taste of <span className="text-transparent bg-clip-text bg-gradient-to-r from-amber-300 via-amber-400 to-amber-600">Hyderabadi Dum Biryani</span> & Shahi Haleem
            </h1>

            {/* Description */}
            <p className="text-base sm:text-lg text-stone-300 max-w-2xl leading-relaxed">
              Welcome to <span className="text-amber-300 font-semibold">Hotel Sohail</span> in Chanchalguda, Malakpet. Revered by generations of food connoisseurs for authentic firewood-dum biryani, pure ghee Ramzan-style haleem, velvety mutton marag, and rich Irani chai.
            </p>

            {/* Primary Action Buttons */}
            <div className="flex flex-wrap items-center gap-3 pt-2">
              <button
                type="button"
                onClick={onScrollToMenu}
                id="hero-view-menu-btn"
                className="px-6 py-3.5 rounded-xl bg-gradient-to-r from-amber-500 to-amber-600 hover:from-amber-400 hover:to-amber-500 text-stone-950 font-bold text-base shadow-lg shadow-amber-950/50 flex items-center gap-2 transition-all transform active:scale-95"
              >
                <span>Explore Full Menu</span>
                <ArrowRight className="w-4 h-4" />
              </button>

              <button
                type="button"
                onClick={onOpenHandiCalculator}
                id="hero-handi-calculator-btn"
                className="px-6 py-3.5 rounded-xl bg-amber-950/70 hover:bg-amber-900/80 border border-amber-600/70 text-amber-200 font-semibold text-base transition-all flex items-center gap-2 shadow-sm"
              >
                <Flame className="w-4 h-4 text-amber-400" />
                <span>Bulk Handi for Dawats (30-50+ Pax)</span>
              </button>

              <button
                type="button"
                onClick={onOpenReservation}
                id="hero-reserve-table-btn"
                className="px-5 py-3.5 rounded-xl bg-stone-900/80 hover:bg-stone-850 border border-stone-700 text-stone-200 font-medium text-base transition-all"
              >
                Reserve Table
              </button>
            </div>

            {/* Trust and Key stats */}
            <div className="pt-6 border-t border-stone-800/80 grid grid-cols-2 sm:grid-cols-4 gap-4">
              <div className="flex items-center gap-3">
                <div className="p-2.5 rounded-lg bg-amber-950/50 border border-amber-800/40 text-amber-400">
                  <Star className="w-5 h-5 fill-amber-400 text-amber-400" />
                </div>
                <div>
                  <div className="text-xl font-bold text-stone-100 flex items-center gap-1">
                    <span>4.3</span>
                    <span className="text-xs text-amber-400">★</span>
                  </div>
                  <div className="text-xs text-stone-400">20,000+ Reviews</div>
                </div>
              </div>

              <div className="flex items-center gap-3">
                <div className="p-2.5 rounded-lg bg-amber-950/50 border border-amber-800/40 text-amber-400">
                  <ShieldCheck className="w-5 h-5" />
                </div>
                <div>
                  <div className="text-base font-bold text-stone-100">100% Halal</div>
                  <div className="text-xs text-stone-400">Certified Fresh Meats</div>
                </div>
              </div>

              <div className="flex items-center gap-3">
                <div className="p-2.5 rounded-lg bg-amber-950/50 border border-amber-800/40 text-amber-400">
                  <Flame className="w-5 h-5" />
                </div>
                <div>
                  <div className="text-base font-bold text-stone-100">Firewood Dum</div>
                  <div className="text-xs text-stone-400">Slow Charcoal Cooked</div>
                </div>
              </div>

              <div className="flex items-center gap-3">
                <div className="p-2.5 rounded-lg bg-amber-950/50 border border-amber-800/40 text-amber-400">
                  <Clock className="w-5 h-5" />
                </div>
                <div>
                  <div className="text-base font-bold text-stone-100">5 AM – Midnight</div>
                  <div className="text-xs text-stone-400">Open 7 Days a Week</div>
                </div>
              </div>
            </div>

          </div>

          {/* Right Hero Visual Card */}
          <div className="lg:col-span-5 relative">
            <div className="relative rounded-2xl overflow-hidden border border-amber-800/50 shadow-2xl shadow-amber-950/80 bg-stone-900 group">
              <img
                src="https://images.unsplash.com/photo-1563379091339-03b21ab4a4f8?w=1000&auto=format&fit=crop&q=80"
                alt="Hotel Sohail Authentic Hyderabadi Dum Biryani"
                className="w-full h-80 sm:h-96 object-cover transform group-hover:scale-105 transition-transform duration-700"
                referrerPolicy="no-referrer"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-stone-950 via-stone-950/40 to-transparent"></div>

              {/* Floating Featured Dish Card */}
              <div className="absolute bottom-4 left-4 right-4 p-4 rounded-xl bg-stone-900/90 backdrop-blur-md border border-amber-700/50 text-stone-100 shadow-xl">
                <div className="flex items-start justify-between gap-3">
                  <div>
                    <div className="flex items-center gap-2">
                      <span className="text-xs font-bold text-amber-400 uppercase tracking-wide">Signature Masterpiece</span>
                      <span className="text-xs px-2 py-0.5 rounded bg-red-950/90 text-red-300 border border-red-800/50 font-medium">Non-Veg</span>
                    </div>
                    <h3 className="font-serif-title text-lg font-bold text-stone-100 mt-0.5">
                      Hyderabadi Mutton Dum Biryani
                    </h3>
                    <p className="text-xs text-stone-300 line-clamp-1 mt-0.5">
                      Slow-cooked tender goat meat, aged basmati rice & saffron potli spices.
                    </p>
                  </div>
                  <div className="text-right flex-shrink-0">
                    <span className="text-xs text-stone-400 block">From</span>
                    <span className="text-xl font-black text-amber-400">₹300</span>
                  </div>
                </div>

                <div className="mt-3 pt-3 border-t border-stone-800 flex items-center justify-between text-xs">
                  <span className="text-stone-300 flex items-center gap-1">
                    <MapPin className="w-3.5 h-3.5 text-amber-400" /> Malakpet, Hyderabad
                  </span>
                  <a
                    href={RESTAURANT_INFO.googleMapsUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-amber-400 hover:text-amber-300 font-semibold flex items-center gap-1 underline underline-offset-2"
                  >
                    View on Maps
                  </a>
                </div>
              </div>

              {/* Floating Badge Top Right */}
              <div className="absolute top-4 right-4 bg-amber-500 text-stone-950 font-bold px-3 py-1.5 rounded-full text-xs shadow-lg flex items-center gap-1.5">
                <Award className="w-3.5 h-3.5" />
                <span>Malakpet's Favorite</span>
              </div>
            </div>

            {/* Quick Micro-strip of Famous Dishes */}
            <div className="grid grid-cols-3 gap-2 mt-3">
              <div className="p-2.5 rounded-xl bg-stone-900 border border-amber-900/40 text-center">
                <div className="text-amber-400 font-bold text-sm">Shahi Haleem</div>
                <div className="text-[11px] text-stone-400">Pure Desi Ghee</div>
              </div>
              <div className="p-2.5 rounded-xl bg-stone-900 border border-amber-900/40 text-center">
                <div className="text-amber-400 font-bold text-sm">Mutton Marag</div>
                <div className="text-[11px] text-stone-400">With Hot Sheermal</div>
              </div>
              <div className="p-2.5 rounded-xl bg-stone-900 border border-amber-900/40 text-center">
                <div className="text-amber-400 font-bold text-sm">Irani Chai</div>
                <div className="text-[11px] text-stone-400">& Osmania Biscuits</div>
              </div>
            </div>

          </div>

        </div>
      </div>
    </section>
  );
};
