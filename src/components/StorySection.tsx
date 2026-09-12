import React from 'react';
import { Flame, Clock, Heart, Award, ShieldCheck } from 'lucide-react';

export const StorySection: React.FC = () => {
  return (
    <section id="heritage" className="py-20 bg-stone-950 text-stone-100 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          
          {/* Left: Atmospheric Image Collage */}
          <div className="lg:col-span-6 grid grid-cols-2 gap-4">
            <div className="space-y-4">
              <div className="rounded-2xl overflow-hidden border border-amber-900/40 shadow-xl h-60">
                <img
                  src="https://images.unsplash.com/photo-1541832676-9b763b0239ab?w=600&auto=format&fit=crop&q=80"
                  alt="Hotel Sohail Shahi Haleem with Ghee and Cashews"
                  className="w-full h-full object-cover hover:scale-105 transition-transform duration-500"
                  referrerPolicy="no-referrer"
                  loading="lazy"
                />
              </div>
              <div className="rounded-2xl overflow-hidden border border-amber-900/40 shadow-xl h-44 bg-amber-950/40 p-5 flex flex-col justify-between">
                <div>
                  <span className="text-amber-400 font-serif-title text-3xl font-black">40+</span>
                  <div className="text-xs text-stone-300 font-semibold uppercase tracking-wider mt-1">
                    Years of Culinary Pride
                  </div>
                </div>
                <p className="text-xs text-stone-400">
                  Preserving true Nizami royal culinary traditions in Old Hyderabad.
                </p>
              </div>
            </div>

            <div className="space-y-4 pt-6">
              <div className="rounded-2xl overflow-hidden border border-amber-900/40 shadow-xl h-44 bg-stone-900 p-5 flex flex-col justify-between">
                <div className="flex items-center gap-2 text-amber-400">
                  <Flame className="w-6 h-6" />
                  <span className="font-bold text-sm text-stone-100">Wood-Fired Dum</span>
                </div>
                <p className="text-xs text-stone-300">
                  Sealed with wet dough under glowing charcoal embers for slow, smoky infusion.
                </p>
              </div>
              <div className="rounded-2xl overflow-hidden border border-amber-900/40 shadow-xl h-60">
                <img
                  src="https://images.unsplash.com/photo-1576092768241-dec231879fc3?w=600&auto=format&fit=crop&q=80"
                  alt="Authentic Hyderabadi Irani Chai at Hotel Sohail"
                  className="w-full h-full object-cover hover:scale-105 transition-transform duration-500"
                  referrerPolicy="no-referrer"
                  loading="lazy"
                />
              </div>
            </div>
          </div>

          {/* Right: Narrative Story */}
          <div className="lg:col-span-6 space-y-6">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-amber-950/80 border border-amber-800/60 text-amber-300 text-xs font-semibold uppercase tracking-wider">
              <Award className="w-3.5 h-3.5 text-amber-400" />
              <span>Old City Heritage • Malakpet</span>
            </div>

            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-serif-title font-bold text-stone-100 leading-tight">
              A Legacy Brewed with <span className="text-amber-400">Passion, Spices</span> and Firewood
            </h2>

            <p className="text-stone-300 text-sm sm:text-base leading-relaxed">
              Situated beside the Government Area Hospital on Printing Press Road, <strong className="text-amber-300">Hotel Sohail</strong> has stood as a beloved gastronomic cornerstone of Chanchalguda and Malakpet for decades.
            </p>

            <p className="text-stone-300 text-sm sm:text-base leading-relaxed">
              Our master ustaads continue the royal Asaf Jahi recipe legacy: from the early dawn simmer of gelatinous Paya Nahari and freshly kneaded Sheermal, to our afternoon wood-fired Dum Biryani, and the late-night gatherings over steaming cups of rich Irani Dum Chai and warm Osmania biscuits.
            </p>

            {/* Core Pillars */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-2">
              <div className="p-4 rounded-xl bg-stone-900 border border-stone-800">
                <div className="flex items-center gap-2.5 text-amber-400 font-bold text-sm mb-1">
                  <ShieldCheck className="w-4 h-4" />
                  <span>100% Halal Meats</span>
                </div>
                <p className="text-xs text-stone-400">
                  Procured fresh every single morning from certified trusted local butchers.
                </p>
              </div>

              <div className="p-4 rounded-xl bg-stone-900 border border-stone-800">
                <div className="flex items-center gap-2.5 text-amber-400 font-bold text-sm mb-1">
                  <Heart className="w-4 h-4" />
                  <span>Pure Ghee & Potli Masala</span>
                </div>
                <p className="text-xs text-stone-400">
                  Hand-crushed cardamom, mace, shahi zeera, and pure desi ghee—no compromises.
                </p>
              </div>
            </div>

            <div className="pt-2">
              <a
                href="#menu"
                className="inline-flex items-center gap-2 text-sm font-bold text-amber-400 hover:text-amber-300 underline underline-offset-4"
              >
                <span>Browse our specialty menu & order online</span>
                <span>→</span>
              </a>
            </div>

          </div>

        </div>

      </div>
    </section>
  );
};
