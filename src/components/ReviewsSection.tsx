import React from 'react';
import { Star, MessageSquare, ExternalLink, ThumbsUp, Quote } from 'lucide-react';
import { CUSTOMER_REVIEWS, RESTAURANT_INFO } from '../data/restaurantData';

export const ReviewsSection: React.FC = () => {
  return (
    <section id="reviews" className="py-20 bg-stone-900 border-t border-amber-900/20 text-stone-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-12">
          <div>
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-amber-950 border border-amber-700/60 text-amber-300 text-xs font-semibold uppercase tracking-wider mb-2">
              <Star className="w-3.5 h-3.5 fill-amber-400 text-amber-400" />
              <span>Patron Love & Community Praise</span>
            </div>
            <h2 className="text-3xl sm:text-4xl font-serif-title font-bold text-stone-100">
              Rated <span className="text-amber-400">4.3★ by 20,000+</span> Hyderabadis
            </h2>
            <p className="text-stone-400 text-sm mt-1 max-w-xl">
              From daily chai conversations to wedding biryani handis, see what our guests say across Google Maps and Justdial.
            </p>
          </div>

          <div className="flex items-center gap-3">
            <a
              href={RESTAURANT_INFO.googleMapsUrl}
              target="_blank"
              rel="noopener noreferrer"
              id="reviews-write-google-review-btn"
              className="inline-flex items-center gap-2 px-4 py-2.5 rounded-xl bg-amber-600 hover:bg-amber-500 text-stone-950 font-bold text-xs sm:text-sm shadow-md transition-all"
            >
              <MessageSquare className="w-4 h-4" />
              <span>Write a Review on Google</span>
              <ExternalLink className="w-3.5 h-3.5" />
            </a>
          </div>
        </div>

        {/* Reviews Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {CUSTOMER_REVIEWS.map((rev) => (
            <div
              key={rev.id}
              className="bg-stone-950 rounded-2xl p-5 border border-stone-800 hover:border-amber-700/50 transition-all flex flex-col justify-between shadow-lg relative group"
            >
              <Quote className="w-8 h-8 text-amber-500/20 absolute top-4 right-4 pointer-events-none" />

              <div className="space-y-3">
                {/* Rating Stars */}
                <div className="flex items-center gap-1">
                  {[...Array(5)].map((_, i) => (
                    <Star
                      key={i}
                      className={`w-4 h-4 ${
                        i < rev.rating
                          ? 'fill-amber-400 text-amber-400'
                          : 'fill-stone-800 text-stone-800'
                      }`}
                    />
                  ))}
                  <span className="text-xs font-bold text-amber-300 ml-1.5">{rev.rating}.0</span>
                </div>

                <p className="text-xs text-stone-300 leading-relaxed italic">
                  "{rev.comment}"
                </p>
              </div>

              <div className="pt-4 mt-4 border-t border-stone-800/80">
                <div className="flex items-center justify-between">
                  <div>
                    <h4 className="text-xs font-bold text-stone-100">{rev.author}</h4>
                    <span className="text-[10px] text-stone-400">Via {rev.platform} Reviews</span>
                  </div>
                  <span className="text-[10px] px-2 py-0.5 rounded bg-stone-900 border border-stone-800 text-amber-300/90 font-medium">
                    {rev.favoriteDish}
                  </span>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Quick Trust Bar */}
        <div className="mt-10 p-5 rounded-2xl bg-stone-950/70 border border-stone-800/80 flex flex-wrap items-center justify-between gap-4 text-xs text-stone-300">
          <div className="flex items-center gap-2">
            <ThumbsUp className="w-4 h-4 text-amber-400" />
            <span>Over 19,000+ verified ratings on Justdial & 4.3★ on Google Business</span>
          </div>
          <div className="flex items-center gap-4 text-stone-400">
            <span>• Air-Conditioned Family Dining</span>
            <span>• Takeaway Parcel Counter</span>
            <span>• Handi Catering Support</span>
          </div>
        </div>

      </div>
    </section>
  );
};
