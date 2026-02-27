import Link from 'next/link';
import { Instagram } from 'lucide-react';

export default function Footer() {
  return (
    <footer className="bg-brand-light border-t border-brand-gray pt-16 pb-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12">
          {/* Logo & Intro */}
          <div className="md:col-span-1">
            <h2 className="text-2xl font-bold tracking-widest uppercase mb-4">Amilou</h2>
            <p className="text-sm text-gray-500 max-w-xs font-light leading-relaxed">
              Modern minimalist fashion inspired by architecture and contemporary art. Designed for longevity.
            </p>
            {/* Social Links */}
            <div className="flex space-x-4 mt-6">
              <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" aria-label="Instagram" className="text-gray-500 hover:text-brand transition-colors">
                <Instagram className="w-5 h-5" />
              </a>
              <a href="https://pinterest.com" target="_blank" rel="noopener noreferrer" aria-label="Pinterest" className="text-gray-500 hover:text-brand transition-colors">
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24"><path d="M12 0C5.373 0 0 5.373 0 12c0 5.084 3.163 9.426 7.627 11.174-.105-.949-.2-2.405.042-3.441.218-.937 1.407-5.965 1.407-5.965s-.359-.719-.359-1.782c0-1.668.967-2.914 2.171-2.914 1.023 0 1.518.769 1.518 1.69 0 1.029-.655 2.568-.994 3.995-.283 1.194.599 2.169 1.777 2.169 2.133 0 3.772-2.249 3.772-5.495 0-2.873-2.064-4.882-5.012-4.882-3.414 0-5.418 2.561-5.418 5.207 0 1.031.397 2.138.893 2.738a.36.36 0 01.083.345c-.091.379-.293 1.194-.333 1.361-.052.22-.174.267-.402.161-1.499-.698-2.436-2.889-2.436-4.649 0-3.785 2.75-7.262 7.929-7.262 4.163 0 7.398 2.967 7.398 6.931 0 4.136-2.607 7.464-6.227 7.464-1.216 0-2.359-.632-2.75-1.378l-.748 2.853c-.271 1.043-1.002 2.35-1.492 3.146C9.57 23.812 10.763 24 12 24c6.627 0 12-5.373 12-12S18.627 0 12 0z"/></svg>
              </a>
              <a href="https://tiktok.com" target="_blank" rel="noopener noreferrer" aria-label="TikTok" className="text-gray-500 hover:text-brand transition-colors">
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24"><path d="M19.59 6.69a4.83 4.83 0 01-3.77-4.25V2h-3.45v13.67a2.89 2.89 0 01-2.88 2.5 2.89 2.89 0 01-2.89-2.89 2.89 2.89 0 012.89-2.89c.28 0 .54.04.79.1V9.01a6.27 6.27 0 00-.79-.05 6.34 6.34 0 00-6.34 6.34 6.34 6.34 0 006.34 6.34 6.34 6.34 0 006.34-6.34V8.92a8.2 8.2 0 004.76 1.52V7a4.85 4.85 0 01-1-.31z"/></svg>
              </a>
            </div>
          </div>

          {/* Links: Shop */}
          <nav aria-label="Shop">
            <h3 className="text-sm font-semibold tracking-wider uppercase mb-4">Shop</h3>
            <ul className="space-y-3 text-sm text-gray-600 font-light">
              <li><Link href="/women" className="hover:text-brand transition-colors">Women</Link></li>
              <li><Link href="/men" className="hover:text-brand transition-colors">Men</Link></li>
              <li><Link href="/accessories" className="hover:text-brand transition-colors">Accessories</Link></li>
              <li><Link href="/new" className="hover:text-brand transition-colors">New Arrivals</Link></li>
              <li><Link href="/campaign/art-of-everyday" className="hover:text-brand transition-colors">Campaigns</Link></li>
            </ul>
          </nav>

          {/* Links: Support */}
          <nav aria-label="Support">
            <h3 className="text-sm font-semibold tracking-wider uppercase mb-4">Support</h3>
            <ul className="space-y-3 text-sm text-gray-600 font-light">
              <li><Link href="/faq" className="hover:text-brand transition-colors">FAQ</Link></li>
              <li><Link href="/contact" className="hover:text-brand transition-colors">Contact Us</Link></li>
              <li><Link href="/about" className="hover:text-brand transition-colors">About</Link></li>
            </ul>
          </nav>

          {/* Newsletter */}
          <div>
            <h3 className="text-sm font-semibold tracking-wider uppercase mb-4">Newsletter</h3>
            <p className="text-sm text-gray-500 mb-4 font-light">
              Subscribe to receive updates, access to exclusive deals, and more.
            </p>
            <form className="flex flex-col space-y-2" action="#">
              <label htmlFor="footer-email" className="sr-only">Email address</label>
              <input
                id="footer-email"
                type="email"
                placeholder="Enter your email address"
                className="bg-transparent border-b border-gray-400 py-2 text-sm focus:outline-none focus:border-brand transition-colors font-light"
                required
              />
              <button
                type="submit"
                className="bg-brand text-white text-sm uppercase tracking-wider py-3 mt-4 hover:bg-brand-dark transition-colors"
              >
                Subscribe
              </button>
            </form>
          </div>
        </div>

        {/* Payment & Bottom Bar */}
        <div className="mt-12 pt-8 border-t border-gray-300">
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            <p className="text-xs text-gray-500">&copy; {new Date().getFullYear()} AMILOU STUDIO. All rights reserved.</p>
            <p className="text-xs text-gray-400">Visa &bull; Mastercard &bull; Amex &bull; PayPal &bull; Apple Pay</p>
            <div className="flex space-x-6 text-xs text-gray-500">
              <Link href="/privacy" className="hover:text-brand transition-colors">Privacy Policy</Link>
              <Link href="/terms" className="hover:text-brand transition-colors">Terms of Service</Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
