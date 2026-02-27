'use client';

import { useEffect } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { useCartStore, selectSubtotal } from '@/store/useCartStore';
import { formatPrice } from '@/types/product';
import { motion, AnimatePresence } from 'framer-motion';
import { X, Trash2, Minus, Plus } from 'lucide-react';

export default function MiniCart() {
  const items = useCartStore((state) => state.items);
  const isOpen = useCartStore((state) => state.isOpen);
  const toggleCart = useCartStore((state) => state.toggleCart);
  const removeItem = useCartStore((state) => state.removeItem);
  const updateQuantity = useCartStore((state) => state.updateQuantity);
  const subtotal = useCartStore(selectSubtotal);

  // Lock body scroll when cart is open
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden';
      return () => {
        document.body.style.overflow = '';
      };
    }
  }, [isOpen]);

  // Close on Escape key
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape' && isOpen) {
        toggleCart();
      }
    };
    document.addEventListener('keydown', handleKeyDown);
    return () => document.removeEventListener('keydown', handleKeyDown);
  }, [isOpen, toggleCart]);

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
            aria-label="Close shopping bag"
          />

          {/* Cart Drawer */}
          <motion.div
            initial={{ x: '100%' }}
            animate={{ x: 0 }}
            exit={{ x: '100%' }}
            transition={{ type: 'tween', duration: 0.3 }}
            className="fixed top-0 right-0 h-full w-full sm:w-[420px] bg-white z-50 shadow-xl flex flex-col"
            role="dialog"
            aria-modal="true"
            aria-label="Shopping bag"
          >
            {/* Header */}
            <div className="flex items-center justify-between p-6 border-b border-brand-gray">
              <h2 className="text-xl font-light tracking-widest uppercase">
                Shopping Bag
              </h2>
              <button
                onClick={toggleCart}
                className="p-2 hover:bg-brand-light transition-colors rounded-full"
                aria-label="Close shopping bag"
              >
                <X className="w-5 h-5" />
              </button>
            </div>

            {/* Items */}
            <div className="flex-1 overflow-y-auto p-6 space-y-6">
              {items.length === 0 ? (
                <div className="flex flex-col items-center justify-center h-full text-gray-500 font-light space-y-4">
                  <p>Your bag is empty.</p>
                  <button
                    onClick={toggleCart}
                    className="border-b border-brand pb-1 text-brand uppercase tracking-wider text-sm hover:text-gray-500 transition-colors"
                  >
                    Continue Shopping
                  </button>
                </div>
              ) : (
                items.map((item) => (
                  <div
                    key={`${item.id}-${item.size}`}
                    className="flex gap-4 group border-b border-brand-gray pb-6 last:border-0 last:pb-0"
                  >
                    {/* Product thumbnail */}
                    <div className="w-24 h-32 bg-brand-light flex-shrink-0 relative overflow-hidden">
                      <Image
                        src={item.image}
                        alt={item.name}
                        fill
                        sizes="96px"
                        className="object-cover"
                      />
                    </div>

                    <div className="flex-1 flex flex-col justify-between py-1">
                      <div>
                        <div className="flex justify-between items-start">
                          <h3 className="font-medium text-sm">{item.name}</h3>
                          <button
                            onClick={() => removeItem(item.id, item.size)}
                            className="text-gray-400 hover:text-brand transition-colors ml-2"
                            aria-label={`Remove ${item.name} from bag`}
                          >
                            <Trash2 className="w-4 h-4" />
                          </button>
                        </div>
                        <p className="text-xs text-gray-500 mt-1">
                          Color: {item.color}
                        </p>
                        <p className="text-xs text-gray-500 mt-0.5">
                          Size: {item.size}
                        </p>
                      </div>

                      <div className="flex justify-between items-end mt-4">
                        {/* Quantity controls */}
                        <div className="flex items-center border border-brand-gray">
                          <button
                            onClick={() =>
                              updateQuantity(
                                item.id,
                                item.size,
                                item.quantity - 1
                              )
                            }
                            className="px-3 py-1 hover:bg-brand-light transition-colors"
                            aria-label={`Decrease quantity of ${item.name}`}
                          >
                            <Minus className="w-3 h-3" />
                          </button>
                          <span className="px-3 text-sm min-w-[2rem] text-center">
                            {item.quantity}
                          </span>
                          <button
                            onClick={() =>
                              updateQuantity(
                                item.id,
                                item.size,
                                item.quantity + 1
                              )
                            }
                            className="px-3 py-1 hover:bg-brand-light transition-colors"
                            aria-label={`Increase quantity of ${item.name}`}
                          >
                            <Plus className="w-3 h-3" />
                          </button>
                        </div>

                        <p className="font-medium text-sm">
                          {formatPrice(item.price * item.quantity)}
                        </p>
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
                  <span className="uppercase tracking-wider text-sm font-medium">
                    Subtotal
                  </span>
                  <span className="font-medium">{formatPrice(subtotal)}</span>
                </div>
                <p className="text-xs text-gray-500 mb-6">
                  Shipping &amp; taxes calculated at checkout
                </p>
                <Link
                  href="/checkout"
                  onClick={toggleCart}
                  className="block w-full bg-brand text-white py-4 uppercase tracking-widest text-sm hover:bg-brand-dark transition-colors text-center"
                >
                  Checkout
                </Link>
              </div>
            )}
          </motion.div>
        </>
      )}
    </AnimatePresence>
  );
}
