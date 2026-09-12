import React, { useState } from 'react';
import { X, Trash2, Plus, Minus, ShoppingBag, Send, Phone, Bike, Store, Utensils } from 'lucide-react';
import { CartItem } from '../types';
import { RESTAURANT_INFO } from '../data/restaurantData';

interface OrderCartDrawerProps {
  isOpen: boolean;
  onClose: () => void;
  cart: CartItem[];
  onUpdateQuantity: (itemId: string, delta: number) => void;
  onRemoveItem: (itemId: string) => void;
  onClearCart: () => void;
}

export const OrderCartDrawer: React.FC<OrderCartDrawerProps> = ({
  isOpen,
  onClose,
  cart,
  onUpdateQuantity,
  onRemoveItem,
  onClearCart,
}) => {
  const [orderType, setOrderType] = useState<'takeaway' | 'delivery' | 'dine-in'>('takeaway');
  const [customerName, setCustomerName] = useState('');
  const [customerPhone, setCustomerPhone] = useState('');
  const [addressOrTable, setAddressOrTable] = useState('');
  const [specialNotes, setSpecialNotes] = useState('');

  if (!isOpen) return null;

  const subtotal = cart.reduce((sum, item) => sum + item.item.price * item.quantity, 0);
  const packagingCharge = cart.length > 0 && orderType !== 'dine-in' ? 25 : 0;
  const grandTotal = subtotal + packagingCharge;

  const handleSendOrderWhatsApp = () => {
    if (cart.length === 0) return;

    const itemsSummary = cart
      .map(
        (c, idx) =>
          `${idx + 1}. ${c.item.name} x ${c.quantity} = ₹${c.item.price * c.quantity}`
      )
      .join('%0A');

    const orderTypeLabel =
      orderType === 'takeaway'
        ? 'Parcel / Takeaway Pickup'
        : orderType === 'delivery'
        ? 'Home Delivery'
        : 'Dine-In Table Order';

    const text = `Assalamu Alaikum / Hello Hotel Sohail,%0A%0AI would like to place an order:%0A%0A*ORDER TYPE:* ${orderTypeLabel}%0A*CUSTOMER:* ${customerName || 'Valued Guest'}%0A*PHONE:* ${customerPhone || 'Not provided'}%0A*LOCATION / TABLE:* ${addressOrTable || 'At restaurant counter'}%0A%0A*ITEMS:*%0A${itemsSummary}%0A%0A*Subtotal:* ₹${subtotal}%0A*Packaging:* ₹${packagingCharge}%0A*GRAND TOTAL:* ₹${grandTotal}%0A%0A*Special Notes:* ${specialNotes || 'None'}%0A%0APlease confirm my order. Thank you!`;

    window.open(`https://wa.me/${RESTAURANT_INFO.whatsappNumber}?text=${text}`, '_blank');
  };

  return (
    <div className="fixed inset-0 z-50 overflow-hidden">
      {/* Backdrop */}
      <div
        className="fixed inset-0 bg-black/75 backdrop-blur-sm transition-opacity"
        onClick={onClose}
      />

      <div className="fixed inset-y-0 right-0 max-w-full flex pl-10">
        <div className="w-screen max-w-md bg-stone-900 text-stone-100 shadow-2xl border-l border-amber-900/40 flex flex-col">
          
          {/* Header */}
          <div className="p-5 border-b border-stone-800 bg-stone-950 flex items-center justify-between">
            <div className="flex items-center gap-2">
              <ShoppingBag className="w-5 h-5 text-amber-400" />
              <h3 className="font-serif-title text-lg font-bold text-stone-100">
                Your Order Bag
              </h3>
              <span className="text-xs bg-amber-950 text-amber-300 px-2 py-0.5 rounded-full border border-amber-800">
                {cart.reduce((sum, i) => sum + i.quantity, 0)} items
              </span>
            </div>

            <button
              type="button"
              onClick={onClose}
              id="close-cart-btn"
              className="p-1.5 rounded-lg text-stone-400 hover:text-stone-200 hover:bg-stone-800 transition"
              aria-label="Close cart"
            >
              <X className="w-5 h-5" />
            </button>
          </div>

          {/* Cart Content */}
          <div className="flex-1 overflow-y-auto p-5 space-y-4">
            {cart.length === 0 ? (
              <div className="text-center py-16 space-y-3">
                <div className="w-16 h-16 rounded-full bg-stone-800 flex items-center justify-center mx-auto text-stone-400">
                  <ShoppingBag className="w-8 h-8" />
                </div>
                <h4 className="text-stone-200 font-bold text-base">Your Bag is Empty</h4>
                <p className="text-xs text-stone-400 max-w-xs mx-auto">
                  Explore our famous Hyderabadi Dum Biryani, Shahi Haleem, Mutton Marag, and Irani Chai to add dishes!
                </p>
                <button
                  type="button"
                  onClick={onClose}
                  className="px-4 py-2 rounded-lg bg-amber-500 hover:bg-amber-400 text-stone-950 font-bold text-xs shadow mt-2"
                >
                  Browse Menu
                </button>
              </div>
            ) : (
              <>
                {/* Order Type Selector */}
                <div className="bg-stone-950 p-3 rounded-xl border border-stone-800 space-y-2">
                  <span className="text-[11px] font-bold text-stone-400 uppercase tracking-wider block">
                    Order Type:
                  </span>
                  <div className="grid grid-cols-3 gap-1.5">
                    <button
                      type="button"
                      onClick={() => setOrderType('takeaway')}
                      className={`p-2 rounded-lg text-xs font-semibold flex flex-col items-center gap-1 border transition ${
                        orderType === 'takeaway'
                          ? 'bg-amber-600 border-amber-500 text-stone-950 font-bold shadow'
                          : 'bg-stone-900 border-stone-800 text-stone-300'
                      }`}
                    >
                      <Store className="w-3.5 h-3.5" />
                      <span>Takeaway</span>
                    </button>
                    <button
                      type="button"
                      onClick={() => setOrderType('delivery')}
                      className={`p-2 rounded-lg text-xs font-semibold flex flex-col items-center gap-1 border transition ${
                        orderType === 'delivery'
                          ? 'bg-amber-600 border-amber-500 text-stone-950 font-bold shadow'
                          : 'bg-stone-900 border-stone-800 text-stone-300'
                      }`}
                    >
                      <Bike className="w-3.5 h-3.5" />
                      <span>Delivery</span>
                    </button>
                    <button
                      type="button"
                      onClick={() => setOrderType('dine-in')}
                      className={`p-2 rounded-lg text-xs font-semibold flex flex-col items-center gap-1 border transition ${
                        orderType === 'dine-in'
                          ? 'bg-amber-600 border-amber-500 text-stone-950 font-bold shadow'
                          : 'bg-stone-900 border-stone-800 text-stone-300'
                      }`}
                    >
                      <Utensils className="w-3.5 h-3.5" />
                      <span>Dine-In</span>
                    </button>
                  </div>
                </div>

                {/* Items List */}
                <div className="space-y-2.5">
                  <div className="flex items-center justify-between text-xs text-stone-400">
                    <span>Order Items</span>
                    <button
                      type="button"
                      onClick={onClearCart}
                      className="text-red-400 hover:underline flex items-center gap-1"
                    >
                      <Trash2 className="w-3 h-3" /> Clear all
                    </button>
                  </div>

                  {cart.map((c) => (
                    <div
                      key={c.item.id}
                      className="p-3 rounded-xl bg-stone-950 border border-stone-800/90 flex items-center justify-between gap-3"
                    >
                      <div className="flex-1 min-w-0">
                        <div className="flex items-center gap-1.5">
                          <span
                            className={`w-2.5 h-2.5 rounded-full ${
                              c.item.isVeg ? 'bg-emerald-500' : 'bg-red-500'
                            }`}
                          />
                          <h4 className="text-xs font-bold text-stone-100 truncate">
                            {c.item.name}
                          </h4>
                        </div>
                        <div className="text-[11px] text-amber-400 font-semibold mt-0.5">
                          ₹{c.item.price} each
                        </div>
                      </div>

                      <div className="flex items-center gap-2">
                        <div className="flex items-center bg-stone-900 rounded-lg border border-stone-800 p-0.5">
                          <button
                            type="button"
                            onClick={() => onUpdateQuantity(c.item.id, -1)}
                            className="p-1 text-stone-400 hover:text-stone-200"
                            aria-label="Decrease"
                          >
                            <Minus className="w-3 h-3" />
                          </button>
                          <span className="text-xs font-bold text-stone-200 px-2">
                            {c.quantity}
                          </span>
                          <button
                            type="button"
                            onClick={() => onUpdateQuantity(c.item.id, 1)}
                            className="p-1 text-amber-400 hover:text-amber-300"
                            aria-label="Increase"
                          >
                            <Plus className="w-3 h-3" />
                          </button>
                        </div>

                        <span className="text-xs font-extrabold text-stone-100 min-w-[50px] text-right">
                          ₹{c.item.price * c.quantity}
                        </span>

                        <button
                          type="button"
                          onClick={() => onRemoveItem(c.item.id)}
                          className="p-1 text-stone-500 hover:text-red-400"
                          aria-label="Remove item"
                        >
                          <Trash2 className="w-3.5 h-3.5" />
                        </button>
                      </div>
                    </div>
                  ))}
                </div>

                {/* Customer Details Form */}
                <div className="space-y-3 pt-2">
                  <span className="text-[11px] font-bold text-stone-400 uppercase tracking-wider block">
                    Contact & Delivery Information:
                  </span>

                  <input
                    type="text"
                    placeholder="Your Name *"
                    value={customerName}
                    onChange={(e) => setCustomerName(e.target.value)}
                    className="w-full px-3 py-2 rounded-lg bg-stone-950 border border-stone-800 text-xs text-stone-200 placeholder-stone-500 focus:outline-none focus:border-amber-500"
                  />

                  <input
                    type="tel"
                    placeholder="Phone Number (WhatsApp) *"
                    value={customerPhone}
                    onChange={(e) => setCustomerPhone(e.target.value)}
                    className="w-full px-3 py-2 rounded-lg bg-stone-950 border border-stone-800 text-xs text-stone-200 placeholder-stone-500 focus:outline-none focus:border-amber-500"
                  />

                  <input
                    type="text"
                    placeholder={
                      orderType === 'delivery'
                        ? 'Delivery Address (Street, Colony, Landmark) *'
                        : orderType === 'dine-in'
                        ? 'Table Number (e.g. Table 12 or AC Hall)'
                        : 'Pickup Time (e.g. In 20 minutes)'
                    }
                    value={addressOrTable}
                    onChange={(e) => setAddressOrTable(e.target.value)}
                    className="w-full px-3 py-2 rounded-lg bg-stone-950 border border-stone-800 text-xs text-stone-200 placeholder-stone-500 focus:outline-none focus:border-amber-500"
                  />

                  <textarea
                    placeholder="Special cooking notes (e.g. Extra salan, spicy, double ghee...)"
                    value={specialNotes}
                    onChange={(e) => setSpecialNotes(e.target.value)}
                    rows={2}
                    className="w-full px-3 py-2 rounded-lg bg-stone-950 border border-stone-800 text-xs text-stone-200 placeholder-stone-500 focus:outline-none focus:border-amber-500 resize-none"
                  />
                </div>
              </>
            )}
          </div>

          {/* Footer Summary & Order Action */}
          {cart.length > 0 && (
            <div className="p-5 border-t border-stone-800 bg-stone-950 space-y-3">
              <div className="space-y-1.5 text-xs text-stone-300">
                <div className="flex justify-between">
                  <span>Subtotal</span>
                  <span className="font-bold text-stone-100">₹{subtotal}</span>
                </div>
                {packagingCharge > 0 && (
                  <div className="flex justify-between text-stone-400">
                    <span>Hygienic Foil Packaging</span>
                    <span>₹{packagingCharge}</span>
                  </div>
                )}
                <div className="flex justify-between text-sm font-extrabold text-amber-400 pt-1 border-t border-stone-800">
                  <span>Total Amount</span>
                  <span>₹{grandTotal}</span>
                </div>
              </div>

              <div className="space-y-2 pt-1">
                <button
                  type="button"
                  onClick={handleSendOrderWhatsApp}
                  id="cart-whatsapp-order-btn"
                  className="w-full py-3 rounded-xl bg-emerald-600 hover:bg-emerald-500 text-white font-bold text-sm flex items-center justify-center gap-2 shadow-lg shadow-emerald-950/60 transition"
                >
                  <Send className="w-4 h-4" />
                  <span>Send Order via WhatsApp</span>
                </button>

                <a
                  href={`tel:${RESTAURANT_INFO.phone1}`}
                  id="cart-call-order-btn"
                  className="w-full py-2.5 rounded-xl bg-stone-800 hover:bg-stone-700 text-stone-200 font-semibold text-xs flex items-center justify-center gap-2 transition"
                >
                  <Phone className="w-3.5 h-3.5 text-amber-400" />
                  <span>Or Call {RESTAURANT_INFO.phone1}</span>
                </a>
              </div>
            </div>
          )}

        </div>
      </div>
    </div>
  );
};
