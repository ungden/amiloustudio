import Image from 'next/image';
import Link from 'next/link';
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'The Art of Everyday — Campaign',
  description: 'Exploring the intersection of comfort and structured design. An AMILOU STUDIO editorial.',
};

export default function ArtOfEverydayPage() {
  return (
    <div className="flex flex-col">
      {/* Full-bleed Hero */}
      <section className="relative h-[85vh] flex items-end justify-start">
        <Image
          src="https://images.unsplash.com/photo-1509631179647-0177331693ae?w=1600&q=80"
          alt="The Art of Everyday — AMILOU STUDIO Campaign"
          fill
          priority
          className="object-cover"
          sizes="100vw"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />
        <div className="relative z-10 p-8 sm:p-16 max-w-2xl">
          <span className="text-xs uppercase tracking-widest text-white/70 mb-4 block">
            Spring Summer 2026 Campaign
          </span>
          <h1 className="text-4xl md:text-6xl font-light tracking-widest uppercase text-white mb-4">
            The Art of Everyday
          </h1>
          <p className="text-white/80 font-light text-lg">
            A visual exploration of what it means to dress with intention.
          </p>
        </div>
      </section>

      {/* Intro Text */}
      <section className="py-24 px-4 sm:px-6 lg:px-8 max-w-3xl mx-auto text-center">
        <p className="text-xl font-light leading-relaxed text-gray-600">
          We began this collection by asking a simple question: what does the everyday demand of the clothes we wear? The answer led us to a place where comfort meets architecture, where softness meets structure, and where simplicity becomes the most radical form of luxury.
        </p>
      </section>

      {/* Image + Text Block 1 */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pb-24">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          <div className="relative aspect-[3/4] overflow-hidden">
            <Image
              src="https://images.unsplash.com/photo-1515886657613-9f3515b0c78f?w=1200&q=80"
              alt="Editorial look — oversized silhouettes"
              fill
              className="object-cover"
              sizes="(max-width: 768px) 100vw, 50vw"
            />
          </div>
          <div className="flex flex-col justify-center">
            <h2 className="text-2xl font-light tracking-wider uppercase mb-6">Volume & Proportion</h2>
            <p className="text-gray-600 font-light leading-relaxed mb-4">
              This season, we explore the tension between volume and precision. Oversized silhouettes are balanced by sharp tailoring. Wide-leg trousers meet structured blazers. Fluid dresses are paired with architectural outerwear.
            </p>
            <p className="text-gray-600 font-light leading-relaxed">
              The result is a wardrobe that moves with you — designed not for a single occasion, but for the full spectrum of daily life.
            </p>
          </div>
        </div>
      </section>

      {/* Pull Quote */}
      <section className="py-20 bg-brand-light">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <blockquote className="text-2xl md:text-3xl font-light italic leading-relaxed text-brand">
            &ldquo;The most powerful design is often what you choose to leave out.&rdquo;
          </blockquote>
          <p className="text-sm text-gray-500 mt-6 uppercase tracking-widest">
            — AMILOU STUDIO Design Team
          </p>
        </div>
      </section>

      {/* Image + Text Block 2 */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          <div className="order-2 md:order-1 flex flex-col justify-center">
            <h2 className="text-2xl font-light tracking-wider uppercase mb-6">Palette of Restraint</h2>
            <p className="text-gray-600 font-light leading-relaxed mb-4">
              Our colour palette this season is drawn from the urban landscape: concrete grey, midnight navy, warm camel, and the eternal anchor of black and white. These are colours that do not compete for attention — they complement each other, and they complement you.
            </p>
            <p className="text-gray-600 font-light leading-relaxed">
              Every piece in this collection was designed to pair with every other piece. Build your wardrobe like a vocabulary: each word intentional, every sentence effortless.
            </p>
          </div>
          <div className="order-1 md:order-2 relative aspect-[3/4] overflow-hidden">
            <Image
              src="https://images.unsplash.com/photo-1496747611176-843222e1e57c?w=1200&q=80"
              alt="Editorial look — palette of restraint"
              fill
              className="object-cover"
              sizes="(max-width: 768px) 100vw, 50vw"
            />
          </div>
        </div>
      </section>

      {/* Final Image */}
      <section className="relative h-[70vh] flex items-center justify-center">
        <Image
          src="https://images.unsplash.com/photo-1539008835657-9e8e9680c956?w=1200&q=80"
          alt="Editorial closing — the art of everyday"
          fill
          className="object-cover"
          sizes="100vw"
        />
        <div className="absolute inset-0 bg-black/30" />
        <div className="relative z-10 text-center px-4">
          <h2 className="text-3xl md:text-4xl font-light tracking-widest uppercase text-white mb-8">
            Shop the Collection
          </h2>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/women"
              className="px-8 py-3 bg-white text-brand text-sm uppercase tracking-widest hover:bg-white/90 transition-colors"
            >
              Shop Women
            </Link>
            <Link
              href="/men"
              className="px-8 py-3 border border-white text-white text-sm uppercase tracking-widest hover:bg-white hover:text-brand transition-colors"
            >
              Shop Men
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
