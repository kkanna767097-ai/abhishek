import React, { useState } from 'react';
import { Flame, Users, Calendar, Phone, CheckCircle2, Calculator, MessageSquareText } from 'lucide-react';
import { RESTAURANT_INFO } from '../data/restaurantData';

interface HandiSectionProps {
  onOpenHandiCalculator: () => void;
}

export const HandiSection: React.FC<HandiSectionProps> = ({ onOpenHandiCalculator }) => {
  const [guestCount, setGuestCount] = useState<number>(30);
  const [dishChoice, setDishChoice] = useState<'chicken' | 'mutton' | 'haleem'>('mutton');

  // Calculation estimates based on Hotel Sohail's standard dawat measurements
  const calculations = React.useMemo(() => {
    if (dishChoice === 'chicken') {
      const meatKg = Math.round(guestCount * 0.16 * 10) / 10;
      const riceKg = Math.round(guestCount * 0.16 * 10) / 10;
      const salanLitres = Math.ceil(guestCount * 0.1);
      const priceEstimate = Math.round(guestCount * 175);
      return { meatKg, riceKg, salanLitres, priceEstimate, handis: Math.ceil(guestCount / 40) };
    } else if (dishChoice === 'mutton') {
      const meatKg = Math.round(guestCount * 0.15 * 10) / 10;
      const riceKg = Math.round(guestCount * 0.15 * 10) / 10;
      const salanLitres = Math.ceil(guestCount * 0.1);
      const priceEstimate = Math.round(guestCount * 240);
      return { meatKg, riceKg, salanLitres, priceEstimate, handis: Math.ceil(guestCount / 40) };
    } else {
      const haleemKg = Math.round(guestCount * 0.25 * 10) / 10;
      const priceEstimate = Math.round(guestCount * 220);
      return { meatKg: haleemKg, riceKg: 0, salanLitres: 0, priceEstimate, handis: Math.ceil(guestCount / 30) };
    }
  }, [guestCount, dishChoice]);

  const handleSendWhatsAppInquiry = () => {
    const dishName =
      dishChoice === 'chicken'
        ? 'Chicken Dum Biryani Handi'
        : dishChoice === 'mutton'
        ? 'Mutton Dum Biryani Handi'
        : 'Shahi Mutton Haleem Dawat';

    const text = `Assalamu Alaikum / Hello Hotel Sohail,%0A%0AI would like to inquire about a Bulk Handi / Dawat Order:%0A- Dish: ${dishName}%0A- Expected Guests: ${guestCount} people%0A- Estimated Meat: ${calculations.meatKg} kg%0A- Estimated Cost: ~₹${calculations.priceEstimate}%0A%0APlease let me know the availability and delivery timing. Thank you!`;

    window.open(`https://wa.me/${RESTAURANT_INFO.whatsappNumber}?text=${text}`, '_blank');
  };

  return (
    <section id="handi" className="py-20 bg-stone-900 border-y border-amber-900/30 text-stone-100 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-14">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-amber-950 border border-amber-700/60 text-amber-300 text-xs font-semibold uppercase tracking-wider mb-3">
            <Flame className="w-3.5 h-3.5 text-amber-400" />
            <span>Dawats, Weddings & Celebrations</span>
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-serif-title font-bold text-stone-100">
            Legendary <span className="text-amber-400">Handi & Deg Bulk Catering</span>
          </h2>
          <p className="text-stone-300 text-sm sm:text-base mt-3 leading-relaxed">
            Host your guests with Hotel Sohail's authentic firewood-sealed Handis. Sealed with traditional wheat dough, opened piping hot at your venue with complimentary Mirchi ka Salan, Dahi ki Chutney & salad.
          </p>
        </div>

        {/* 2-Column Showcase & Interactive Estimator */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-stretch">
          
          {/* Left: What's included in Sohail Handi */}
          <div className="lg:col-span-5 bg-stone-950 rounded-2xl p-6 sm:p-8 border border-amber-800/40 flex flex-col justify-between shadow-xl">
            <div className="space-y-6">
              <h3 className="font-serif-title text-2xl font-bold text-amber-300">
                The Authentic Dum Handi Experience
              </h3>

              <div className="space-y-4">
                <div className="flex items-start gap-3">
                  <div className="p-2 rounded-lg bg-amber-950 text-amber-400 flex-shrink-0 mt-0.5">
                    <CheckCircle2 className="w-4 h-4" />
                  </div>
                  <div>
                    <h4 className="text-sm font-bold text-stone-100">Traditional Dough-Sealed Degs</h4>
                    <p className="text-xs text-stone-400 mt-0.5">
                      Handis are prepared fresh on firewood coals and dough-sealed so the saffron steam and cardamom aroma stay intact until served.
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <div className="p-2 rounded-lg bg-amber-950 text-amber-400 flex-shrink-0 mt-0.5">
                    <CheckCircle2 className="w-4 h-4" />
                  </div>
                  <div>
                    <h4 className="text-sm font-bold text-stone-100">Complete Accompaniments Package</h4>
                    <p className="text-xs text-stone-400 mt-0.5">
                      Every Handi comes with abundant rich Mirchi ka Salan, chilled Dahi ki Chutney, cut onions, lemons, and disposable serving spoons.
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <div className="p-2 rounded-lg bg-amber-950 text-amber-400 flex-shrink-0 mt-0.5">
                    <CheckCircle2 className="w-4 h-4" />
                  </div>
                  <div>
                    <h4 className="text-sm font-bold text-stone-100">Flexible Capacities (20 to 500+ Pax)</h4>
                    <p className="text-xs text-stone-400 mt-0.5">
                      Standard sizes for 30, 40, and 50 people, or custom multi-deg setups for large banquet functions across Hyderabad.
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* Direct Call for Emergency / Last minute Dawats */}
            <div className="mt-6 pt-6 border-t border-stone-800">
              <div className="text-xs text-stone-400 mb-2">Need quick assistance for tomorrow's event?</div>
              <a
                href={`tel:${RESTAURANT_INFO.phone2}`}
                id="handi-urgent-call"
                className="inline-flex items-center gap-2 text-sm font-bold text-amber-400 hover:text-amber-300"
              >
                <Phone className="w-4 h-4" />
                <span>Call Catering Desk: {RESTAURANT_INFO.phone2}</span>
              </a>
            </div>
          </div>

          {/* Right: Live Interactive Quick Estimator */}
          <div className="lg:col-span-7 bg-stone-950/90 rounded-2xl p-6 sm:p-8 border border-amber-600/50 shadow-2xl flex flex-col justify-between">
            <div>
              <div className="flex items-center justify-between border-b border-stone-800 pb-4 mb-6">
                <div>
                  <h3 className="text-xl font-bold text-stone-100 flex items-center gap-2">
                    <Calculator className="w-5 h-5 text-amber-400" />
                    <span>Instant Handi Estimator</span>
                  </h3>
                  <p className="text-xs text-stone-400 mt-0.5">
                    Calculate portions, ingredients & estimated price for your gathering
                  </p>
                </div>
                <span className="px-3 py-1 rounded-full bg-amber-500/20 text-amber-300 border border-amber-500/40 text-xs font-bold">
                  Live Calculator
                </span>
              </div>

              {/* Step 1: Dish Selection */}
              <div className="space-y-2 mb-6">
                <label className="text-xs font-bold uppercase tracking-wider text-stone-300">
                  1. Select Feast Specialty:
                </label>
                <div className="grid grid-cols-3 gap-2">
                  <button
                    type="button"
                    onClick={() => setDishChoice('mutton')}
                    className={`py-3 px-3 rounded-xl text-xs sm:text-sm font-bold border transition-all ${
                      dishChoice === 'mutton'
                        ? 'bg-amber-600 border-amber-500 text-stone-950 shadow-md'
                        : 'bg-stone-900 border-stone-800 text-stone-300 hover:border-amber-700'
                    }`}
                  >
                    Mutton Dum Biryani
                  </button>
                  <button
                    type="button"
                    onClick={() => setDishChoice('chicken')}
                    className={`py-3 px-3 rounded-xl text-xs sm:text-sm font-bold border transition-all ${
                      dishChoice === 'chicken'
                        ? 'bg-amber-600 border-amber-500 text-stone-950 shadow-md'
                        : 'bg-stone-900 border-stone-800 text-stone-300 hover:border-amber-700'
                    }`}
                  >
                    Chicken Dum Biryani
                  </button>
                  <button
                    type="button"
                    onClick={() => setDishChoice('haleem')}
                    className={`py-3 px-3 rounded-xl text-xs sm:text-sm font-bold border transition-all ${
                      dishChoice === 'haleem'
                        ? 'bg-amber-600 border-amber-500 text-stone-950 shadow-md'
                        : 'bg-stone-900 border-stone-800 text-stone-300 hover:border-amber-700'
                    }`}
                  >
                    Shahi Haleem Handi
                  </button>
                </div>
              </div>

              {/* Step 2: Guest Count Slider */}
              <div className="space-y-3 mb-6">
                <div className="flex items-center justify-between">
                  <label className="text-xs font-bold uppercase tracking-wider text-stone-300">
                    2. Expected Number of Guests:
                  </label>
                  <span className="text-lg font-black text-amber-400 bg-amber-950/80 px-3 py-0.5 rounded-lg border border-amber-700/60">
                    {guestCount} People
                  </span>
                </div>

                <input
                  type="range"
                  min={20}
                  max={200}
                  step={5}
                  value={guestCount}
                  onChange={(e) => setGuestCount(Number(e.target.value))}
                  id="handi-guest-range"
                  className="w-full h-2 bg-stone-800 rounded-lg appearance-none cursor-pointer accent-amber-500"
                />

                <div className="flex justify-between text-[11px] text-stone-400">
                  <span>20 Pax (Intimate)</span>
                  <span>50 Pax (Family Dawat)</span>
                  <span>100 Pax (Celebration)</span>
                  <span>200+ Pax (Grand)</span>
                </div>
              </div>

              {/* Calculated Outputs */}
              <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 p-4 rounded-xl bg-stone-900 border border-stone-800 mb-6">
                <div className="text-center p-2 rounded-lg bg-stone-950 border border-stone-800/80">
                  <div className="text-xs text-stone-400">Meat Required</div>
                  <div className="text-base font-extrabold text-amber-300 mt-0.5">
                    {calculations.meatKg} kg
                  </div>
                </div>

                {dishChoice !== 'haleem' ? (
                  <div className="text-center p-2 rounded-lg bg-stone-950 border border-stone-800/80">
                    <div className="text-xs text-stone-400">Basmati Rice</div>
                    <div className="text-base font-extrabold text-amber-300 mt-0.5">
                      {calculations.riceKg} kg
                    </div>
                  </div>
                ) : (
                  <div className="text-center p-2 rounded-lg bg-stone-950 border border-stone-800/80">
                    <div className="text-xs text-stone-400">Pure Ghee Kit</div>
                    <div className="text-base font-extrabold text-amber-300 mt-0.5">
                      Included
                    </div>
                  </div>
                )}

                <div className="text-center p-2 rounded-lg bg-stone-950 border border-stone-800/80">
                  <div className="text-xs text-stone-400">Handi Pots</div>
                  <div className="text-base font-extrabold text-amber-300 mt-0.5">
                    {calculations.handis} {calculations.handis > 1 ? 'Degs' : 'Handi'}
                  </div>
                </div>

                <div className="text-center p-2 rounded-lg bg-stone-950 border border-amber-900/60">
                  <div className="text-xs text-stone-400">Est. Total</div>
                  <div className="text-base font-black text-amber-400 mt-0.5">
                    ~₹{calculations.priceEstimate.toLocaleString()}
                  </div>
                </div>
              </div>
            </div>

            {/* Action Buttons */}
            <div className="flex flex-col sm:flex-row items-center gap-3 pt-2">
              <button
                type="button"
                onClick={handleSendWhatsAppInquiry}
                id="handi-whatsapp-inquire-btn"
                className="w-full sm:w-auto flex-1 py-3 px-4 rounded-xl bg-emerald-600 hover:bg-emerald-500 text-white font-bold text-sm flex items-center justify-center gap-2 shadow-lg shadow-emerald-950/50 transition-all"
              >
                <MessageSquareText className="w-4 h-4" />
                <span>Inquire This Estimate via WhatsApp</span>
              </button>

              <button
                type="button"
                onClick={onOpenHandiCalculator}
                id="handi-full-modal-btn"
                className="w-full sm:w-auto py-3 px-4 rounded-xl bg-stone-800 hover:bg-stone-700 text-stone-200 font-semibold text-sm transition"
              >
                Detailed Custom Booking Form
              </button>
            </div>
          </div>

        </div>

      </div>
    </section>
  );
};
