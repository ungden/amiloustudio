'use client';

import { useCartStore } from '@/store/useCartStore';
import { motion, AnimatePresence } from 'framer-motion';
import { X, Trash2 } from 'lucide-react';

export default function MiniCart() {
  const { items, isOpen, toggleCart, removeItem } = useCartStore();

  return (
    <AnimatePresence>
      {isOpen && (
        <>
          {/* Overlay */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={toggleCart}
            className="fixed inset-0 bg-black/50 z-50 backdrop-blur-sm"
          />

          {/* Cart Drawer */}
          <motion.div
            initial={{ x: '100%' }}
            animate={{ x: 0 }}
            exit={{ x: '100%' }}
            transition={{ type: 'tween', duration: 0.3 }}
            className="fixed top-0 right-0 h-full w-full sm:w-[400px] bg-white z-50 shadow-xl flex flex-col"
          >
            {/* Header */}
            <div className="flex items-center justify-between p-6 border-b border-brand-gray">
              <h2 className="text-xl font-light tracking-widest uppercase">Shopping Bag</h2>
              <button onClick={toggleCart} className="p-2 hover:bg-brand-light transition-colors rounded-full">
                <X className="w-5 h-5" />
              </button>
            </div>

            {/* Items */}
            <div className="flex-1 overflow-y-auto p-6 space-y-6">
              {items.length === 0 ? (
                <div className="flex flex-col items-center justify-center h-full text-gray-500 font-light space-y-4">
                  <p>Your bag is empty.</p>
                  <button onClick={toggleCart} className="border-b border-brand pb-1 text-brand uppercase tracking-wider text-sm hover:text-gray-500 transition-colors">
                    Continue Shopping
                  </button>
                </div>
              ) : (
                items.map((item) => (
                  <div key={`${item.id}-${item.size}`} className="flex gap-4 group border-b border-brand-gray pb-6 last:border-0 last:pb-0">
                    <div className="w-24 h-32 bg-brand-light flex-shrink-0" />
                    <div className="flex-1 flex flex-col justify-between py-1">
                      <div>
                        <div className="flex justify-between items-start">
                          <h3 className="font-medium text-sm">{item.name}</h3>
                          <button onClick={() => removeItem(item.id, item.size)} className="text-gray-400 hover:text-brand transition-colors">
                            <Trash2 className="w-4 h-4" />
                          </button>
                        </div>
                        <p className="text-xs text-gray-500 mt-1">Color: {item.color}</p>
                        <p className="text-xs text-gray-500 mt-1">Size: {item.size}</p>
                      </div>
                      
                      <div className="flex justify-between items-end mt-4">
                        <div className="flex items-center border border-brand-gray">
                          <button className="px-3 py-1 hover:bg-brand-light transition-colors">-</button>
                          <span className="px-3 text-sm">{item.quantity}</span>
                          <button className="px-3 py-1 hover:bg-brand-light transition-colors">+</button>
                        </div>
                        <p className="font-medium">{item.price}</p>
                      </div>
                    </div>
                  </div>
                ))
              )}
            </div>

            {/* Footer */}
            {items.length > 0 && (
              <div className="border-t border-brand-gray p-6 bg-brand-light">
                <div className="flex justify-between mb-4">
                  <span className="uppercase tracking-wider text-sm font-medium">Subtotal</span>
                  <span className="font-medium">
                    {/* Placeholder for real calculation */}
                    €{items.reduce((total, item) => total + (parseFloat(item.price.replace('€', '')) * item.quantity), 0).toFixed(2)}
                  </span>
                </div>
                <p className="text-xs text-gray-500 mb-6">Shipping & taxes calculated at checkout</p>
                <button className="w-full bg-brand text-white py-4 uppercase tracking-widest text-sm hover:bg-brand-dark transition-colors">
                  Checkout
                </button>
              </div>
            )}
          </motion.div>
        </>
      )}
    </AnimatePresence>
  );
}
