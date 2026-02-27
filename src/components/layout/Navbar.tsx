'use client';

import { useState, useEffect, useRef, useCallback } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { Menu, Search, ShoppingBag, X } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';
import { useCartStore, selectTotalItems } from '@/store/useCartStore';
import { products } from '@/data/products';
import MiniCart from '../cart/MiniCart';

const navLinks = [
  { href: '/women', label: 'Women' },
  { href: '/men', label: 'Men' },
  { href: '/new', label: 'New Arrivals' },
  { href: '/about', label: 'Studio' },
];

function SearchOverlay({
  isOpen,
  onClose,
}: {
  isOpen: boolean;
  onClose: () => void;
}) {
  const [query, setQuery] = useState('');
  const inputRef = useRef<HTMLInputElement>(null);

  const filteredProducts = query.trim()
    ? products.filter((p) =>
        p.name.toLowerCase().includes(query.toLowerCase())
      )
    : [];

  useEffect(() => {
    if (isOpen) {
      // Small delay to ensure the overlay is rendered before focusing
      const timer = setTimeout(() => inputRef.current?.focus(), 100);
      return () => clearTimeout(timer);
    } else {
      setQuery('');
    }
  }, [isOpen]);

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose();
    };
    if (isOpen) {
      document.addEventListener('keydown', handleKeyDown);
      return () => document.removeEventListener('keydown', handleKeyDown);
    }
  }, [isOpen, onClose]);

  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.2 }}
          className="fixed inset-0 z-[70] bg-white/95 backdrop-blur-md"
          role="dialog"
          aria-modal="true"
          aria-label="Search products"
        >
          <div className="max-w-2xl mx-auto px-4 pt-24">
            <div className="flex items-center justify-between mb-8">
              <h2 className="text-lg font-light uppercase tracking-widest">
                Search
              </h2>
              <button
                onClick={onClose}
                className="p-2 hover:bg-brand-light transition-colors rounded-full"
                aria-label="Close search"
              >
                <X className="h-5 w-5" />
              </button>
            </div>

            <div className="relative">
              <Search className="absolute left-0 top-1/2 -translate-y-1/2 h-5 w-5 text-gray-400" />
              <input
                ref={inputRef}
                type="text"
                value={query}
                onChange={(e) => setQuery(e.target.value)}
                placeholder="Search products..."
                className="w-full pl-8 pr-4 py-3 border-b border-brand-gray bg-transparent text-brand text-lg font-light focus:outline-none focus:border-brand placeholder:text-gray-400 tracking-wide"
              />
            </div>

            {query.trim() && (
              <div className="mt-6 space-y-1 max-h-[60vh] overflow-y-auto">
                {filteredProducts.length === 0 ? (
                  <p className="text-sm text-gray-500 font-light py-4">
                    No products found for &ldquo;{query}&rdquo;
                  </p>
                ) : (
                  filteredProducts.map((product) => (
                    <Link
                      key={product.id}
                      href={`/product/${product.id}`}
                      onClick={onClose}
                      className="flex items-center gap-4 py-3 px-2 hover:bg-brand-light transition-colors rounded group"
                    >
                      <div
                        className="w-12 h-14 bg-brand-light flex-shrink-0 rounded overflow-hidden bg-cover bg-center"
                        style={{ backgroundImage: `url(${product.images[0]})` }}
                      />
                      <div className="flex-1">
                        <p className="text-sm font-medium group-hover:text-brand-accent transition-colors">
                          {product.name}
                        </p>
                        <p className="text-xs text-gray-500 mt-0.5 capitalize">
                          {product.color}
                        </p>
                      </div>
                    </Link>
                  ))
                )}
              </div>
            )}
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}

export default function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isSearchOpen, setIsSearchOpen] = useState(false);
  const toggleCart = useCartStore((state) => state.toggleCart);
  const totalItems = useCartStore(selectTotalItems);
  const [mounted, setMounted] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    setMounted(true);
  }, []);

  // Lock body scroll when mobile menu is open
  useEffect(() => {
    if (isMenuOpen) {
      document.body.style.overflow = 'hidden';
      return () => {
        document.body.style.overflow = '';
      };
    }
  }, [isMenuOpen]);

  const handleCloseSearch = useCallback(() => {
    setIsSearchOpen(false);
  }, []);

  const isActiveLink = (href: string) => {
    if (href === '/') return pathname === '/';
    return pathname.startsWith(href);
  };

  return (
    <>
      <header className="fixed top-0 left-0 right-0 z-50">
        {/* Announcement Bar */}
        <div className="bg-brand text-white text-center py-1.5">
          <p className="text-xs tracking-wider font-light">
            Free shipping on orders over €150
          </p>
        </div>

        {/* Main Navigation */}
        <div className="bg-white/80 backdrop-blur-md border-b border-brand-gray">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="flex justify-between items-center h-16">
              {/* Mobile menu button */}
              <div className="flex items-center md:hidden">
                <button
                  type="button"
                  className="text-brand p-2"
                  onClick={() => setIsMenuOpen(true)}
                  aria-label="Open menu"
                >
                  <Menu className="h-6 w-6" />
                </button>
              </div>

              {/* Logo */}
              <div className="flex-shrink-0 flex items-center justify-center flex-1 md:flex-none md:justify-start">
                <Link
                  href="/"
                  className="text-2xl font-bold tracking-widest uppercase"
                >
                  Amilou
                </Link>
              </div>

              {/* Desktop Navigation */}
              <nav className="hidden md:flex space-x-8">
                {navLinks.map((link) => (
                  <Link
                    key={link.href}
                    href={link.href}
                    className={`text-sm font-medium transition-colors uppercase tracking-wider relative ${
                      isActiveLink(link.href)
                        ? 'text-brand'
                        : 'text-gray-500 hover:text-brand'
                    }`}
                  >
                    {link.label}
                    {isActiveLink(link.href) && (
                      <motion.span
                        layoutId="navbar-active"
                        className="absolute -bottom-[1px] left-0 right-0 h-px bg-brand"
                        transition={{ type: 'spring', stiffness: 380, damping: 30 }}
                      />
                    )}
                  </Link>
                ))}
              </nav>

              {/* Right side icons */}
              <div className="flex items-center space-x-4">
                <button
                  className="text-brand p-2 hidden sm:block hover:bg-brand-light transition-colors rounded-full"
                  onClick={() => setIsSearchOpen(true)}
                  aria-label="Search products"
                >
                  <Search className="h-5 w-5" />
                </button>
                <button
                  className="text-brand p-2 relative hover:bg-brand-light transition-colors rounded-full"
                  onClick={toggleCart}
                  aria-label="Open shopping bag"
                >
                  <ShoppingBag className="h-5 w-5" />
                  {mounted && totalItems > 0 && (
                    <span className="absolute -top-0.5 -right-0.5 h-4 w-4 rounded-full bg-brand text-white text-[10px] font-medium flex items-center justify-center leading-none">
                      {totalItems}
                    </span>
                  )}
                </button>
              </div>
            </div>
          </div>
        </div>
      </header>

      <MiniCart />

      <SearchOverlay isOpen={isSearchOpen} onClose={handleCloseSearch} />

      {/* Mobile Menu Overlay */}
      <AnimatePresence>
        {isMenuOpen && (
          <motion.div
            initial={{ opacity: 0, x: '-100%' }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: '-100%' }}
            transition={{ type: 'tween', duration: 0.3 }}
            className="fixed inset-0 z-[60] bg-white"
            role="dialog"
            aria-modal="true"
          >
            <div className="flex justify-between items-center p-4 border-b border-brand-gray">
              <span className="text-xl font-bold tracking-widest uppercase">
                Amilou
              </span>
              <button
                onClick={() => setIsMenuOpen(false)}
                className="p-2"
                aria-label="Close menu"
              >
                <X className="h-6 w-6" />
              </button>
            </div>
            <div className="flex flex-col p-6 space-y-6">
              {navLinks.map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  onClick={() => setIsMenuOpen(false)}
                  className={`text-2xl font-light uppercase tracking-wider transition-colors ${
                    isActiveLink(link.href)
                      ? 'text-brand'
                      : 'text-gray-400 hover:text-brand'
                  }`}
                >
                  {link.label}
                </Link>
              ))}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
