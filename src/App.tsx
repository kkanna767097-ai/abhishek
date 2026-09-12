import React, { useState, useEffect } from 'react';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { QuickInfoBar } from './components/QuickInfoBar';
import { MenuSection } from './components/MenuSection';
import { HandiSection } from './components/HandiSection';
import { StorySection } from './components/StorySection';
import { ReviewsSection } from './components/ReviewsSection';
import { LocationContact } from './components/LocationContact';
import { Footer } from './components/Footer';
import { OrderCartDrawer } from './components/OrderCartDrawer';
import { HandiCalculatorModal } from './components/HandiCalculatorModal';
import { ReservationModal } from './components/ReservationModal';
import { CartItem, MenuItem } from './types';
import { RESTAURANT_INFO } from './data/restaurantData';
import { Phone, MessageSquare, ShoppingBag } from 'lucide-react';

export default function App() {
  const [cart, setCart] = useState<CartItem[]>(() => {
    try {
      const saved = localStorage.getItem('hotel_sohail_cart');
      return saved ? JSON.parse(saved) : [];
    } catch {
      return [];
    }
  });

  const [isCartOpen, setIsCartOpen] = useState(false);
  const [isReservationOpen, setIsReservationOpen] = useState(false);
  const [isHandiCalculatorOpen, setIsHandiCalculatorOpen] = useState(false);

  // Sync cart to localStorage
  useEffect(() => {
    try {
      localStorage.setItem('hotel_sohail_cart', JSON.stringify(cart));
    } catch {
      // ignore
    }
  }, [cart]);

  const handleAddToCart = (item: MenuItem) => {
    setCart((prev) => {
      const existing = prev.find((c) => c.item.id === item.id);
      if (existing) {
        return prev.map((c) =>
          c.item.id === item.id ? { ...c, quantity: c.quantity + 1 } : c
        );
      }
      return [...prev, { item, quantity: 1 }];
    });
  };

  const handleUpdateQuantity = (itemId: string, delta: number) => {
    setCart((prev) => {
      return prev
        .map((c) => {
          if (c.item.id === itemId) {
            const newQty = c.quantity + delta;
            return newQty > 0 ? { ...c, quantity: newQty } : null;
          }
          return c;
        })
        .filter(Boolean) as CartItem[];
    });
  };

  const handleRemoveItem = (itemId: string) => {
    setCart((prev) => prev.filter((c) => c.item.id !== itemId));
  };

  const handleClearCart = () => {
    setCart([]);
  };

  const scrollToMenu = () => {
    const el = document.getElementById('menu');
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const totalCartCount = cart.reduce((sum, item) => sum + item.quantity, 0);

  return (
    <div className="min-h-screen bg-stone-950 text-stone-100 flex flex-col selection:bg-amber-500 selection:text-stone-950">
      {/* Navigation */}
      <Navbar
        cart={cart}
        onOpenCart={() => setIsCartOpen(true)}
        onOpenReservation={() => setIsReservationOpen(true)}
        onOpenHandiCalculator={() => setIsHandiCalculatorOpen(true)}
      />

      {/* Main Content Sections */}
      <main className="flex-1">
        <Hero
          onOpenReservation={() => setIsReservationOpen(true)}
          onOpenHandiCalculator={() => setIsHandiCalculatorOpen(true)}
          onScrollToMenu={scrollToMenu}
        />

        <QuickInfoBar />

        <MenuSection
          cart={cart}
          onAddToCart={handleAddToCart}
          onUpdateQuantity={handleUpdateQuantity}
          onOpenHandiCalculator={() => setIsHandiCalculatorOpen(true)}
        />

        <HandiSection
          onOpenHandiCalculator={() => setIsHandiCalculatorOpen(true)}
        />

        <StorySection />

        <ReviewsSection />

        <LocationContact />
      </main>

      {/* Footer */}
      <Footer
        onOpenReservation={() => setIsReservationOpen(true)}
        onOpenHandiCalculator={() => setIsHandiCalculatorOpen(true)}
      />

      {/* Modals and Drawers */}
      <OrderCartDrawer
        isOpen={isCartOpen}
        onClose={() => setIsCartOpen(false)}
        cart={cart}
        onUpdateQuantity={handleUpdateQuantity}
        onRemoveItem={handleRemoveItem}
        onClearCart={handleClearCart}
      />

      <HandiCalculatorModal
        isOpen={isHandiCalculatorOpen}
        onClose={() => setIsHandiCalculatorOpen(false)}
      />

      <ReservationModal
        isOpen={isReservationOpen}
        onClose={() => setIsReservationOpen(false)}
      />

      {/* Floating Action Buttons for quick ordering / calling on mobile & desktop */}
      <div className="fixed bottom-5 right-5 z-30 flex flex-col gap-2.5">
        {/* WhatsApp Fast Order */}
        <a
          href={`https://wa.me/${RESTAURANT_INFO.whatsappNumber}?text=Assalamu%20Alaikum%20Hotel%20Sohail%2C%20I%20would%20like%20to%20order%20food%20%2F%20inquire%20about%20Handi.`}
          target="_blank"
          rel="noopener noreferrer"
          id="floating-whatsapp-btn"
          className="w-12 h-12 rounded-full bg-emerald-600 hover:bg-emerald-500 text-white shadow-xl shadow-emerald-950/60 flex items-center justify-center transition-all hover:scale-105 active:scale-95"
          aria-label="Order on WhatsApp"
        >
          <MessageSquare className="w-5 h-5 fill-white" />
        </a>

        {/* Call Restaurant */}
        <a
          href={`tel:${RESTAURANT_INFO.phone1}`}
          id="floating-call-btn"
          className="w-12 h-12 rounded-full bg-stone-900 border border-amber-600/70 text-amber-400 hover:text-amber-300 shadow-xl shadow-black/80 flex items-center justify-center transition-all hover:scale-105 active:scale-95"
          aria-label="Call Hotel Sohail"
        >
          <Phone className="w-5 h-5" />
        </a>

        {/* View Cart Pill if items exist */}
        {totalCartCount > 0 && (
          <button
            type="button"
            onClick={() => setIsCartOpen(true)}
            id="floating-cart-btn"
            className="px-4 py-2.5 rounded-full bg-gradient-to-r from-amber-500 to-amber-600 text-stone-950 font-black text-xs shadow-2xl shadow-amber-950 flex items-center gap-2 transition-all hover:scale-105 active:scale-95 animate-bounce"
          >
            <ShoppingBag className="w-4 h-4" />
            <span>Bag ({totalCartCount})</span>
          </button>
        )}
      </div>
    </div>
  );
}
