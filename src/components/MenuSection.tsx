import React, { useState, useMemo } from 'react';
import { Search, Flame, Plus, Minus, Check, Sparkles, Filter, Info } from 'lucide-react';
import { MENU_ITEMS } from '../data/restaurantData';
import { MenuCategory, MenuItem, CartItem } from '../types';

interface MenuSectionProps {
  cart: CartItem[];
  onAddToCart: (item: MenuItem) => void;
  onUpdateQuantity: (itemId: string, delta: number) => void;
  onOpenHandiCalculator: () => void;
}

const CATEGORIES: { id: MenuCategory; label: string }[] = [
  { id: 'all', label: 'All Specialties' },
  { id: 'biryani', label: 'Dum Biryani' },
  { id: 'haleem', label: 'Shahi Haleem' },
  { id: 'curries', label: 'Nizami Curries & Marag' },
  { id: 'starters', label: 'Kebabs & Starters' },
  { id: 'breads', label: 'Breads & Sheermal' },
  { id: 'chai-bakery', label: 'Irani Chai & Bakery' },
  { id: 'desserts', label: 'Meetha & Desserts' },
  { id: 'handi-bulk', label: 'Handi Bulk (30-50 Pax)' },
];

export const MenuSection: React.FC<MenuSectionProps> = ({
  cart,
  onAddToCart,
  onUpdateQuantity,
  onOpenHandiCalculator,
}) => {
  const [selectedCategory, setSelectedCategory] = useState<MenuCategory>('all');
  const [searchQuery, setSearchQuery] = useState('');
  const [dietaryFilter, setDietaryFilter] = useState<'all' | 'veg' | 'non-veg'>('all');
  const [cardSize, setCardSize] = useState<'small' | 'regular'>('small');

  const filteredItems = useMemo(() => {
    return MENU_ITEMS.filter((item) => {
      // Category match
      if (selectedCategory !== 'all' && item.category !== selectedCategory) {
        return false;
      }
      // Dietary filter
      if (dietaryFilter === 'veg' && !item.isVeg) return false;
      if (dietaryFilter === 'non-veg' && item.isVeg) return false;

      // Search match
      if (searchQuery.trim()) {
        const query = searchQuery.toLowerCase();
        const matchesName = item.name.toLowerCase().includes(query);
        const matchesDesc = item.description.toLowerCase().includes(query);
        const matchesUrdu = item.urduName?.includes(query);
        return matchesName || matchesDesc || matchesUrdu;
      }
      return true;
    });
  }, [selectedCategory, dietaryFilter, searchQuery]);

  const getItemQuantity = (itemId: string) => {
    const found = cart.find((c) => c.item.id === itemId);
    return found ? found.quantity : 0;
  };

  return (
    <section id="menu" className="py-20 bg-stone-950 text-stone-100 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-12">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-amber-950/70 border border-amber-800/60 text-amber-300 text-xs font-semibold tracking-wider uppercase mb-3">
            <Sparkles className="w-3.5 h-3.5 text-amber-400" />
            <span>Curated Nizami Gastronomy</span>
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-serif-title font-bold text-stone-100">
            Hotel Sohail <span className="text-amber-400">Authentic Menu</span>
          </h2>
          <p className="text-stone-400 text-sm sm:text-base mt-3 leading-relaxed">
            Every dish is prepared using time-honored slow-cooking methods, genuine Hyderabad spices, fresh daily halal meats, and pure desi ghee.
          </p>
        </div>

        {/* Search & Filter Controls */}
        <div className="bg-stone-900/90 rounded-2xl p-4 sm:p-5 border border-amber-900/40 shadow-xl mb-8 space-y-4">
          <div className="flex flex-col sm:flex-row gap-3 items-center justify-between">
            {/* Search Input */}
            <div className="relative w-full sm:max-w-md">
              <Search className="w-4 h-4 text-stone-400 absolute left-3.5 top-1/2 -translate-y-1/2" />
              <input
                type="text"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                placeholder="Search Biryani, Haleem, Marag, Chai, Sheermal..."
                id="menu-search-input"
                className="w-full pl-10 pr-4 py-2.5 rounded-xl bg-stone-950 border border-stone-800 text-stone-200 placeholder-stone-500 text-sm focus:outline-none focus:border-amber-500 transition-colors"
              />
              {searchQuery && (
                <button
                  type="button"
                  onClick={() => setSearchQuery('')}
                  className="absolute right-3 top-1/2 -translate-y-1/2 text-xs text-stone-400 hover:text-stone-200"
                >
                  Clear
                </button>
              )}
            </div>

            {/* Dietary Tabs & Size Switcher */}
            <div className="flex flex-wrap items-center gap-2 self-stretch sm:self-auto justify-between sm:justify-end">
              {/* Dietary Tabs */}
              <div className="flex items-center gap-1.5 p-1 bg-stone-950 rounded-xl border border-stone-800">
                <button
                  type="button"
                  onClick={() => setDietaryFilter('all')}
                  id="filter-all-btn"
                  className={`px-3 py-1.5 rounded-lg text-xs font-semibold transition-all ${
                    dietaryFilter === 'all'
                      ? 'bg-amber-600 text-stone-950 shadow-sm'
                      : 'text-stone-400 hover:text-stone-200'
                  }`}
                >
                  All Dishes
                </button>
                <button
                  type="button"
                  onClick={() => setDietaryFilter('non-veg')}
                  id="filter-nonveg-btn"
                  className={`px-3 py-1.5 rounded-lg text-xs font-semibold transition-all flex items-center gap-1.5 ${
                    dietaryFilter === 'non-veg'
                      ? 'bg-red-950 text-red-300 border border-red-800/80 shadow-sm'
                      : 'text-stone-400 hover:text-stone-200'
                  }`}
                >
                  <span className="w-2 h-2 rounded-full bg-red-500"></span>
                  <span>Non-Veg</span>
                </button>
                <button
                  type="button"
                  onClick={() => setDietaryFilter('veg')}
                  id="filter-veg-btn"
                  className={`px-3 py-1.5 rounded-lg text-xs font-semibold transition-all flex items-center gap-1.5 ${
                    dietaryFilter === 'veg'
                      ? 'bg-emerald-950 text-emerald-300 border border-emerald-800/80 shadow-sm'
                      : 'text-stone-400 hover:text-stone-200'
                  }`}
                >
                  <span className="w-2 h-2 rounded-full bg-emerald-500"></span>
                  <span>Veg & Chai</span>
                </button>
              </div>

              {/* Card Size Switcher */}
              <div className="flex items-center gap-1 p-1 bg-stone-950 rounded-xl border border-stone-800 text-xs">
                <button
                  type="button"
                  onClick={() => setCardSize('small')}
                  id="size-small-btn"
                  className={`px-2.5 py-1.5 rounded-lg font-semibold transition-all ${
                    cardSize === 'small'
                      ? 'bg-amber-500 text-stone-950 font-bold shadow-sm'
                      : 'text-stone-400 hover:text-stone-200'
                  }`}
                  title="Small size card layout"
                >
                  Small Size
                </button>
                <button
                  type="button"
                  onClick={() => setCardSize('regular')}
                  id="size-regular-btn"
                  className={`px-2.5 py-1.5 rounded-lg font-semibold transition-all ${
                    cardSize === 'regular'
                      ? 'bg-amber-500 text-stone-950 font-bold shadow-sm'
                      : 'text-stone-400 hover:text-stone-200'
                  }`}
                  title="Regular size card layout"
                >
                  Regular
                </button>
              </div>
            </div>
          </div>

          {/* Category Tabs */}
          <div className="flex items-center gap-2 overflow-x-auto pb-1 pt-1 no-scrollbar scroll-smooth">
            {CATEGORIES.map((cat) => (
              <button
                key={cat.id}
                type="button"
                onClick={() => setSelectedCategory(cat.id)}
                id={`cat-btn-${cat.id}`}
                className={`whitespace-nowrap px-4 py-2 rounded-xl text-xs sm:text-sm font-semibold transition-all flex-shrink-0 ${
                  selectedCategory === cat.id
                    ? 'bg-gradient-to-r from-amber-500 to-amber-600 text-stone-950 shadow-md font-bold'
                    : 'bg-stone-950/80 text-stone-300 hover:text-amber-300 hover:bg-stone-950 border border-stone-800'
                }`}
              >
                {cat.label}
              </button>
            ))}
          </div>
        </div>

        {/* Handi Bulk Quick Banner if in bulk category */}
        {selectedCategory === 'handi-bulk' && (
          <div className="mb-8 p-4 rounded-xl bg-amber-950/50 border border-amber-700/60 flex flex-col sm:flex-row items-center justify-between gap-4">
            <div className="flex items-center gap-3">
              <div className="p-2.5 rounded-lg bg-amber-900/60 text-amber-300">
                <Flame className="w-6 h-6" />
              </div>
              <div>
                <h4 className="text-sm font-bold text-stone-100">Need Custom Quantity for 20 to 500+ Guests?</h4>
                <p className="text-xs text-stone-300">
                  Use our interactive Dawat Handi Calculator to estimate exact meat/rice kg, salan, and pricing.
                </p>
              </div>
            </div>
            <button
              type="button"
              onClick={onOpenHandiCalculator}
              id="bulk-calc-trigger-banner"
              className="px-4 py-2 rounded-lg bg-amber-500 hover:bg-amber-400 text-stone-950 font-bold text-xs whitespace-nowrap shadow"
            >
              Open Handi Calculator
            </button>
          </div>
        )}

        {/* Empty state */}
        {filteredItems.length === 0 ? (
          <div className="text-center py-16 bg-stone-900/50 rounded-2xl border border-stone-800">
            <p className="text-stone-400 text-base">No dishes found matching your search or filters.</p>
            <button
              type="button"
              onClick={() => {
                setSearchQuery('');
                setDietaryFilter('all');
                setSelectedCategory('all');
              }}
              className="mt-3 text-xs font-semibold text-amber-400 hover:underline"
            >
              Reset all filters
            </button>
          </div>
        ) : (
          /* Menu Cards Grid */
          <div
            className={`grid transition-all duration-300 ${
              cardSize === 'small'
                ? 'grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4 sm:gap-5'
                : 'grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6'
            }`}
          >
            {filteredItems.map((dish) => {
              const qty = getItemQuantity(dish.id);
              const isSmall = cardSize === 'small';
              return (
                <div
                  key={dish.id}
                  id={`dish-card-${dish.id}`}
                  className="rounded-2xl bg-stone-900 border border-stone-800/90 hover:border-amber-700/60 transition-all duration-300 flex flex-col overflow-hidden shadow-lg group hover:shadow-amber-950/30"
                >
                  {/* Dish Image */}
                  <div
                    className={`relative w-full overflow-hidden bg-stone-950 transition-all duration-300 ${
                      isSmall ? 'h-32 sm:h-36' : 'h-48'
                    }`}
                  >
                    <img
                      src={dish.imageUrl}
                      alt={dish.name}
                      className="w-full h-full object-cover transform group-hover:scale-105 transition-transform duration-500"
                      referrerPolicy="no-referrer"
                      loading="lazy"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-stone-900 via-transparent to-black/30"></div>

                    {/* Veg / Non-Veg Indicator */}
                    <div className="absolute top-2.5 left-2.5 flex items-center gap-1.5">
                      <span
                        className={`w-3.5 h-3.5 rounded border flex items-center justify-center bg-stone-950/90 ${
                          dish.isVeg ? 'border-emerald-500' : 'border-red-500'
                        }`}
                      >
                        <span
                          className={`w-1.5 h-1.5 rounded-full ${
                            dish.isVeg ? 'bg-emerald-500' : 'bg-red-500'
                          }`}
                        ></span>
                      </span>

                      {dish.isSpecial && (
                        <span className="px-2 py-0.5 rounded-full bg-amber-500 text-stone-950 text-[9px] font-black uppercase tracking-wider">
                          Must Try
                        </span>
                      )}

                      {dish.isBestSeller && (
                        <span className="px-2 py-0.5 rounded-full bg-amber-950/90 text-amber-300 border border-amber-700/60 text-[9px] font-bold">
                          Bestseller
                        </span>
                      )}
                    </div>

                    {/* Price Badge */}
                    <div
                      className={`absolute bottom-2.5 right-2.5 bg-stone-950/90 backdrop-blur-md rounded-lg border border-amber-800/60 text-amber-400 font-extrabold shadow ${
                        isSmall ? 'px-2 py-0.5 text-xs sm:text-sm' : 'px-3 py-1 text-base'
                      }`}
                    >
                      ₹{dish.price}
                    </div>
                  </div>

                  {/* Dish Info */}
                  <div
                    className={`flex-1 flex flex-col justify-between ${
                      isSmall ? 'p-3.5 sm:p-4 space-y-2.5' : 'p-5 space-y-4'
                    }`}
                  >
                    <div className="space-y-1">
                      <div className="flex items-baseline justify-between gap-2">
                        <h3
                          className={`font-serif-title font-bold text-stone-100 group-hover:text-amber-300 transition-colors ${
                            isSmall ? 'text-base line-clamp-1' : 'text-lg'
                          }`}
                        >
                          {dish.name}
                        </h3>
                      </div>

                      {dish.urduName && (
                        <div className="text-[11px] font-serif text-amber-400/90 font-medium">
                          {dish.urduName}
                        </div>
                      )}

                      <p className="text-xs text-stone-400 line-clamp-2 leading-relaxed">
                        {dish.description}
                      </p>
                    </div>

                    {/* Meta info: Serves & Spice */}
                    <div className="flex items-center justify-between text-[11px] text-stone-400 pt-2 border-t border-stone-800/60">
                      <span>
                        Serves: <strong className="text-stone-300">{dish.serves || '1 person'}</strong>
                      </span>

                      {dish.spiceLevel && (
                        <span className="flex items-center gap-1">
                          <span>Spice:</span>
                          <span className="text-red-400 font-semibold">
                            {'🌶️'.repeat(dish.spiceLevel)}
                          </span>
                        </span>
                      )}
                    </div>

                    {/* Action Button: Add or Stepper */}
                    <div>
                      {qty === 0 ? (
                        <button
                          type="button"
                          onClick={() => onAddToCart(dish)}
                          id={`add-btn-${dish.id}`}
                          className={`w-full rounded-xl bg-stone-800 hover:bg-amber-600 hover:text-stone-950 text-stone-200 font-bold text-xs uppercase tracking-wider transition-all flex items-center justify-center gap-1.5 shadow-sm active:scale-98 ${
                            isSmall ? 'py-2' : 'py-2.5'
                          }`}
                        >
                          <Plus className="w-3.5 h-3.5" />
                          <span>Add to Order</span>
                        </button>
                      ) : (
                        <div className="flex items-center justify-between p-1 rounded-xl bg-amber-950/70 border border-amber-600/60">
                          <button
                            type="button"
                            onClick={() => onUpdateQuantity(dish.id, -1)}
                            id={`minus-btn-${dish.id}`}
                            className="w-8 h-8 rounded-lg bg-stone-900 hover:bg-amber-700 text-stone-200 flex items-center justify-center transition"
                            aria-label="Decrease quantity"
                          >
                            <Minus className="w-3.5 h-3.5" />
                          </button>

                          <span className="text-sm font-black text-amber-300 px-3">
                            {qty} in Cart
                          </span>

                          <button
                            type="button"
                            onClick={() => onUpdateQuantity(dish.id, 1)}
                            id={`plus-btn-${dish.id}`}
                            className="w-8 h-8 rounded-lg bg-amber-500 hover:bg-amber-400 text-stone-950 flex items-center justify-center transition font-bold"
                            aria-label="Increase quantity"
                          >
                            <Plus className="w-3.5 h-3.5" />
                          </button>
                        </div>
                      )}
                    </div>

                  </div>
                </div>
              );
            })}
          </div>
        )}

      </div>
    </section>
  );
};
