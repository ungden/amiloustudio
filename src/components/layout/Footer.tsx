import Link from 'next/link';

export default function Footer() {
  return (
    <footer className="bg-brand-light border-t border-brand-gray pt-16 pb-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12">
          {/* Logo & Intro */}
          <div className="md:col-span-1">
            <h2 className="text-2xl font-bold tracking-widest uppercase mb-4">Amilou</h2>
            <p className="text-sm text-gray-500 max-w-xs">
              Modern minimalist fashion inspired by architecture and contemporary art. Designed for longevity.
            </p>
          </div>

          {/* Links: Shop */}
          <div>
            <h3 className="text-sm font-semibold tracking-wider uppercase mb-4">Shop</h3>
            <ul className="space-y-3 text-sm text-gray-600">
              <li><Link href="/women" className="hover:text-black transition-colors">Women</Link></li>
              <li><Link href="/men" className="hover:text-black transition-colors">Men</Link></li>
              <li><Link href="/new" className="hover:text-black transition-colors">New Arrivals</Link></li>
              <li><Link href="/campaign" className="hover:text-black transition-colors">Campaigns</Link></li>
            </ul>
          </div>

          {/* Links: Support */}
          <div>
            <h3 className="text-sm font-semibold tracking-wider uppercase mb-4">Support</h3>
            <ul className="space-y-3 text-sm text-gray-600">
              <li><Link href="/faq" className="hover:text-black transition-colors">FAQ</Link></li>
              <li><Link href="/shipping" className="hover:text-black transition-colors">Shipping & Returns</Link></li>
              <li><Link href="/size-guide" className="hover:text-black transition-colors">Size Guide</Link></li>
              <li><Link href="/contact" className="hover:text-black transition-colors">Contact Us</Link></li>
            </ul>
          </div>

          {/* Newsletter */}
          <div>
            <h3 className="text-sm font-semibold tracking-wider uppercase mb-4">Newsletter</h3>
            <p className="text-sm text-gray-500 mb-4">
              Subscribe to receive updates, access to exclusive deals, and more.
            </p>
            <form className="flex flex-col space-y-2">
              <input
                type="email"
                placeholder="Enter your email address"
                className="bg-transparent border-b border-gray-400 py-2 text-sm focus:outline-none focus:border-black transition-colors"
                required
              />
              <button
                type="submit"
                className="bg-black text-white text-sm uppercase tracking-wider py-3 mt-4 hover:bg-gray-800 transition-colors"
              >
                Subscribe
              </button>
            </form>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="mt-16 pt-8 border-t border-gray-300 flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0 text-xs text-gray-500">
          <p>&copy; {new Date().getFullYear()} AMILOU STUDIO. All rights reserved.</p>
          <div className="flex space-x-6">
            <Link href="/privacy" className="hover:text-black">Privacy Policy</Link>
            <Link href="/terms" className="hover:text-black">Terms of Service</Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
