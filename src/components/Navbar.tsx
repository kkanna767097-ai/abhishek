import React, { useState } from 'react';
import { Phone, MapPin, Clock, ShoppingBag, Menu as MenuIcon, X, UtensilsCrossed, Calendar } from 'lucide-react';
import { RESTAURANT_INFO } from '../data/restaurantData';
import { CartItem } from '../types';

interface NavbarProps {
  cart: CartItem[];
  onOpenCart: () => void;
  onOpenReservation: () => void;
  onOpenHandiCalculator: () => void;
}

export const Navbar: React.FC<NavbarProps> = ({
  cart,
  onOpenCart,
  onOpenReservation,
  onOpenHandiCalculator,
}) => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const totalCartCount = cart.reduce((sum, item) => sum + item.quantity, 0);

  return (
    <header className="sticky top-0 z-40 w-full bg-stone-900/95 backdrop-blur-md border-b border-amber-900/30 text-stone-100 shadow-xl">
      {/* Top operational announcement bar */}
      <div className="bg-gradient-to-r from-amber-950 via-amber-900 to-stone-950 text-amber-200/90 text-xs py-1.5 px-4 border-b border-amber-800/40">
        <div className="max-w-7xl mx-auto flex flex-wrap items-center justify-between gap-2">
          <div className="flex items-center gap-4 text-xs">
            <span className="flex items-center gap-1">
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500"></span>
              </span>
              <span className="font-semibold text-emerald-400">Open Now:</span> 5:00 AM – 12:00 Midnight
            </span>
            <span className="hidden sm:inline text-amber-300/40">•</span>
            <span className="hidden sm:flex items-center gap-1 text-amber-200/80">
              <MapPin className="w-3.5 h-3.5 text-amber-400" /> Malakpet / Chanchalguda, Hyderabad
            </span>
          </div>
          
          <div className="flex items-center gap-3">
            <a
              href={`tel:${RESTAURANT_INFO.phone1}`}
              id="top-call-link"
              className="flex items-center gap-1 hover:text-amber-100 transition-colors font-medium"
            >
              <Phone className="w-3 h-3 text-amber-400" />
              <span>{RESTAURANT_INFO.phone1}</span>
            </a>
            <span className="text-amber-400/40">|</span>
            <a
              href={RESTAURANT_INFO.googleMapsUrl}
              target="_blank"
              rel="noopener noreferrer"
              id="top-maps-link"
              className="text-amber-400 hover:text-amber-300 underline underline-offset-2 flex items-center gap-1"
            >
              Google Maps
            </a>
          </div>
        </div>
      </div>

      {/* Main navigation */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          {/* Logo & Identity */}
          <a href="#" className="flex items-center gap-3 group" id="brand-logo-link">
            <div className="w-12 h-12 rounded-full bg-gradient-to-br from-amber-500 to-amber-700 p-0.5 shadow-lg shadow-amber-900/50 flex items-center justify-center">
              <div className="w-full h-full rounded-full bg-stone-950 flex flex-col items-center justify-center text-center p-1">
                <UtensilsCrossed className="w-4 h-4 text-amber-400" />
                <span className="text-[9px] font-bold text-amber-400 leading-none mt-0.5">EST.</span>
              </div>
            </div>
            <div>
              <div className="flex items-baseline gap-2">
                <span className="font-serif-title text-2xl font-bold tracking-wide text-amber-100 group-hover:text-amber-400 transition-colors">
                  HOTEL SOHAIL
                </span>
                <span className="text-xs font-serif text-amber-400/80 font-medium">ہوٹل سہیل</span>
              </div>
              <p className="text-[11px] text-amber-200/70 tracking-wider uppercase font-medium">
                Authentic Hyderabadi Biryani & Haleem • Malakpet
              </p>
            </div>
          </a>

          {/* Desktop Navigation links */}
          <nav className="hidden md:flex items-center gap-6 lg:gap-8">
            <a
              href="#menu"
              id="nav-menu-link"
              className="text-sm font-medium text-stone-200 hover:text-amber-400 transition-colors py-1"
            >
              Menu
            </a>
            <button
              type="button"
              onClick={onOpenHandiCalculator}
              id="nav-handi-calculator-btn"
              className="text-sm font-medium text-amber-300 hover:text-amber-200 transition-colors py-1 flex items-center gap-1.5"
            >
              <span className="relative flex h-2 w-2">
                <span className="relative inline-flex rounded-full h-2 w-2 bg-amber-400"></span>
              </span>
              Handi Bulk Orders
            </button>
            <a
              href="#heritage"
              id="nav-heritage-link"
              className="text-sm font-medium text-stone-200 hover:text-amber-400 transition-colors py-1"
            >
              Our Story
            </a>
            <a
              href="#reviews"
              id="nav-reviews-link"
              className="text-sm font-medium text-stone-200 hover:text-amber-400 transition-colors py-1"
            >
              Reviews
            </a>
            <a
              href="#location"
              id="nav-location-link"
              className="text-sm font-medium text-stone-200 hover:text-amber-400 transition-colors py-1"
            >
              Directions
            </a>
          </nav>

          {/* Desktop Action Buttons */}
          <div className="hidden lg:flex items-center gap-3">
            <button
              type="button"
              onClick={onOpenReservation}
              id="nav-reserve-btn"
              className="inline-flex items-center gap-2 px-4 py-2 rounded-lg border border-amber-600/60 text-amber-300 hover:bg-amber-950/40 text-sm font-semibold transition-all shadow-sm"
            >
              <Calendar className="w-4 h-4 text-amber-400" />
              <span>Book Table</span>
            </button>

            <button
              type="button"
              onClick={onOpenCart}
              id="nav-cart-btn"
              className="relative inline-flex items-center gap-2 px-4 py-2 rounded-lg bg-gradient-to-r from-amber-600 to-amber-700 hover:from-amber-500 hover:to-amber-600 text-stone-950 text-sm font-bold shadow-md shadow-amber-900/30 transition-all active:scale-95"
            >
              <ShoppingBag className="w-4 h-4" />
              <span>View Order</span>
              {totalCartCount > 0 && (
                <span className="inline-flex items-center justify-center w-5 h-5 text-xs font-black text-stone-950 bg-amber-300 rounded-full ml-0.5">
                  {totalCartCount}
                </span>
              )}
            </button>
          </div>

          {/* Mobile Cart & Hamburger */}
          <div className="flex items-center gap-2 md:hidden">
            <button
              type="button"
              onClick={onOpenCart}
              id="mobile-cart-btn"
              className="relative p-2.5 rounded-lg bg-amber-950/60 border border-amber-700/50 text-amber-300 hover:text-amber-200"
              aria-label="View Cart"
            >
              <ShoppingBag className="w-5 h-5" />
              {totalCartCount > 0 && (
                <span className="absolute -top-1 -right-1 w-5 h-5 bg-amber-500 text-stone-950 text-xs font-extrabold rounded-full flex items-center justify-center shadow">
                  {totalCartCount}
                </span>
              )}
            </button>

            <button
              type="button"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              id="mobile-menu-toggle-btn"
              className="p-2.5 rounded-lg bg-stone-800 text-stone-200 hover:text-amber-400 hover:bg-stone-700 transition"
              aria-label="Toggle Navigation"
            >
              {mobileMenuOpen ? <X className="w-6 h-6" /> : <MenuIcon className="w-6 h-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu Dropdown */}
      {mobileMenuOpen && (
        <div className="md:hidden border-t border-stone-800 bg-stone-950 px-4 py-5 space-y-4 animate-in slide-in-from-top-2 duration-200">
          <nav className="flex flex-col space-y-3">
            <a
              href="#menu"
              onClick={() => setMobileMenuOpen(false)}
              className="px-3 py-2 text-base font-medium text-stone-200 hover:bg-stone-900 rounded-lg"
            >
              Explore Menu
            </a>
            <button
              type="button"
              onClick={() => {
                setMobileMenuOpen(false);
                onOpenHandiCalculator();
              }}
              className="px-3 py-2 text-left text-base font-medium text-amber-400 hover:bg-stone-900 rounded-lg flex items-center justify-between"
            >
              <span>Handi Bulk Orders (30-50+ Pax)</span>
              <span className="text-xs bg-amber-900/60 text-amber-300 px-2 py-0.5 rounded">Calculator</span>
            </button>
            <a
              href="#heritage"
              onClick={() => setMobileMenuOpen(false)}
              className="px-3 py-2 text-base font-medium text-stone-200 hover:bg-stone-900 rounded-lg"
            >
              Our Heritage & Craft
            </a>
            <a
              href="#reviews"
              onClick={() => setMobileMenuOpen(false)}
              className="px-3 py-2 text-base font-medium text-stone-200 hover:bg-stone-900 rounded-lg"
            >
              Guest Reviews (4.3★)
            </a>
            <a
              href="#location"
              onClick={() => setMobileMenuOpen(false)}
              className="px-3 py-2 text-base font-medium text-stone-200 hover:bg-stone-900 rounded-lg"
            >
              Location & Google Maps
            </a>
          </nav>

          <div className="pt-3 border-t border-stone-800 flex flex-col gap-2.5">
            <button
              type="button"
              onClick={() => {
                setMobileMenuOpen(false);
                onOpenReservation();
              }}
              className="w-full py-2.5 rounded-lg border border-amber-600/60 text-amber-300 font-semibold text-sm flex items-center justify-center gap-2"
            >
              <Calendar className="w-4 h-4" />
              <span>Book Table / Banquet</span>
            </button>
            <a
              href={`tel:${RESTAURANT_INFO.phone1}`}
              className="w-full py-2.5 rounded-lg bg-amber-600 hover:bg-amber-500 text-stone-950 font-bold text-sm flex items-center justify-center gap-2"
            >
              <Phone className="w-4 h-4" />
              <span>Call Hotel Sohail: {RESTAURANT_INFO.phone1}</span>
            </a>
          </div>
        </div>
      )}
    </header>
  );
};
