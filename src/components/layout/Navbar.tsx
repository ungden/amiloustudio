'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import { Menu, Search, ShoppingBag, X } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';
import { useCartStore } from '@/store/useCartStore';
import MiniCart from '../cart/MiniCart';

export default function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const { toggleCart, totalItems } = useCartStore();
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  return (
    <>
      <header className="fixed top-0 left-0 right-0 z-50 bg-white/80 backdrop-blur-md border-b border-brand-gray">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            {/* Mobile menu button */}
            <div className="flex items-center md:hidden">
              <button
                type="button"
                className="text-brand p-2"
                onClick={() => setIsMenuOpen(true)}
              >
                <Menu className="h-6 w-6" />
              </button>
            </div>

            {/* Logo */}
            <div className="flex-shrink-0 flex items-center justify-center flex-1 md:flex-none md:justify-start">
              <Link href="/" className="text-2xl font-bold tracking-widest uppercase">
                Amilou
              </Link>
            </div>

            {/* Desktop Navigation */}
            <nav className="hidden md:flex space-x-8">
              <Link href="/women" className="text-sm font-medium hover:text-gray-600 transition-colors uppercase tracking-wider">
                Women
              </Link>
              <Link href="/men" className="text-sm font-medium hover:text-gray-600 transition-colors uppercase tracking-wider">
                Men
              </Link>
              <Link href="/new" className="text-sm font-medium hover:text-gray-600 transition-colors uppercase tracking-wider">
                New Arrivals
              </Link>
              <Link href="/about" className="text-sm font-medium hover:text-gray-600 transition-colors uppercase tracking-wider">
                Studio
              </Link>
            </nav>

            {/* Right side icons */}
            <div className="flex items-center space-x-4">
              <button className="text-brand p-2 hidden sm:block">
                <Search className="h-5 w-5" />
              </button>
              <button className="text-brand p-2 relative" onClick={toggleCart}>
                <ShoppingBag className="h-5 w-5" />
                {mounted && totalItems() > 0 && (
                  <span className="absolute top-1 right-1 h-2 w-2 rounded-full bg-black"></span>
                )}
              </button>
            </div>
          </div>
        </div>
      </header>

      <MiniCart />

      {/* Mobile Menu Overlay */}
      <AnimatePresence>
        {isMenuOpen && (
          <motion.div
            initial={{ opacity: 0, x: '-100%' }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: '-100%' }}
            transition={{ type: 'tween', duration: 0.3 }}
            className="fixed inset-0 z-[60] bg-white"
          >
            <div className="flex justify-between items-center p-4 border-b border-brand-gray">
              <span className="text-xl font-bold tracking-widest uppercase">Amilou</span>
              <button onClick={() => setIsMenuOpen(false)} className="p-2">
                <X className="h-6 w-6" />
              </button>
            </div>
            <div className="flex flex-col p-6 space-y-6">
              <Link href="/women" onClick={() => setIsMenuOpen(false)} className="text-2xl font-light uppercase tracking-wider">Women</Link>
              <Link href="/men" onClick={() => setIsMenuOpen(false)} className="text-2xl font-light uppercase tracking-wider">Men</Link>
              <Link href="/new" onClick={() => setIsMenuOpen(false)} className="text-2xl font-light uppercase tracking-wider">New Arrivals</Link>
              <Link href="/about" onClick={() => setIsMenuOpen(false)} className="text-2xl font-light uppercase tracking-wider">Studio</Link>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
