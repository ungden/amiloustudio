import Link from 'next/link';

export default function NotFound() {
  return (
    <div className="min-h-[70vh] flex flex-col items-center justify-center px-4 text-center">
      <p className="text-sm uppercase tracking-[0.3em] text-brand-accent mb-6">
        404
      </p>
      <h1 className="text-4xl md:text-5xl font-light tracking-widest uppercase mb-4">
        Page Not Found
      </h1>
      <p className="text-gray-500 max-w-md mb-10 font-light leading-relaxed">
        The page you are looking for may have been moved, removed, or perhaps
        never existed. Let us guide you back.
      </p>
      <Link
        href="/"
        className="px-8 py-3 bg-brand text-white text-sm uppercase tracking-widest hover:bg-brand-dark transition-colors"
      >
        Return Home
      </Link>
      <div className="mt-16 flex space-x-8 text-xs text-gray-400 uppercase tracking-wider">
        <Link href="/women" className="hover:text-brand transition-colors">
          Women
        </Link>
        <Link href="/men" className="hover:text-brand transition-colors">
          Men
        </Link>
        <Link href="/new" className="hover:text-brand transition-colors">
          New Arrivals
        </Link>
        <Link href="/contact" className="hover:text-brand transition-colors">
          Contact
        </Link>
      </div>
    </div>
  );
}
