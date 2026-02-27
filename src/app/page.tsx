import Image from "next/image";
import Link from "next/link";
import { products, heroImages } from "@/data/products";
import { formatPrice } from "@/types/product";

const newArrivals = products.filter((p) => p.isNew).slice(0, 4);
const bestsellers = products.filter((p) => p.isBestseller);

export default function Home() {
  return (
    <div className="flex flex-col w-full">
      {/* ── Hero Section ── */}
      <section className="relative h-[90vh] w-full flex items-center justify-center">
        <Image
          src={heroImages.main}
          alt="AMILOU STUDIO Spring Summer 2026 Campaign"
          fill
          priority
          className="object-cover"
          sizes="100vw"
        />
        {/* Dark overlay for text readability */}
        <div className="absolute inset-0 bg-black/30" />

        <div className="relative z-10 flex flex-col items-center text-center px-4">
          <h1 className="text-4xl md:text-6xl font-light tracking-widest uppercase mb-6 text-white">
            Spring Summer 2026
          </h1>
          <p className="text-lg md:text-xl text-white/90 mb-8 max-w-lg font-light">
            A study in volume and proportion. Discover the new collection.
          </p>
          <div className="flex flex-col sm:flex-row gap-4">
            <Link
              href="/women"
              className="px-8 py-3 bg-white text-brand text-sm uppercase tracking-widest hover:bg-white/90 transition-colors"
            >
              Shop Women
            </Link>
            <Link
              href="/men"
              className="px-8 py-3 bg-transparent border border-white text-white text-sm uppercase tracking-widest hover:bg-white hover:text-brand transition-colors"
            >
              Shop Men
            </Link>
          </div>
        </div>
      </section>

      {/* ── New Arrivals Section ── */}
      <section className="py-24 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto w-full">
        <div className="flex flex-col md:flex-row justify-between items-end mb-12">
          <h2 className="text-2xl font-light tracking-widest uppercase">
            New Arrivals
          </h2>
          <Link
            href="/new"
            className="text-sm border-b border-brand pb-1 hover:text-gray-500 transition-colors mt-4 md:mt-0 uppercase tracking-wider"
          >
            View All
          </Link>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-x-6 gap-y-12">
          {newArrivals.map((product) => (
            <Link
              href={`/product/${product.id}`}
              key={product.id}
              className="group"
            >
              <div className="relative aspect-[3/4] w-full bg-brand-light mb-4 overflow-hidden">
                {/* Default image */}
                <Image
                  src={product.images[0]}
                  alt={product.name}
                  fill
                  className="object-cover transition-opacity duration-500 group-hover:opacity-0"
                  sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 25vw"
                />
                {/* Hover image */}
                <Image
                  src={product.hoverImage}
                  alt={`${product.name} — alternate view`}
                  fill
                  className="object-cover opacity-0 transition-opacity duration-500 group-hover:opacity-100"
                  sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 25vw"
                />
                {/* New badge */}
                {product.isNew && (
                  <span className="absolute top-3 left-3 bg-brand text-white text-[10px] uppercase tracking-widest px-2 py-1">
                    New
                  </span>
                )}
              </div>
              <div className="flex flex-col space-y-1">
                <span className="text-xs text-gray-500 uppercase tracking-wider">
                  {product.category}
                </span>
                <h3 className="text-sm font-medium">{product.name}</h3>
                <span className="text-sm">{formatPrice(product.price)}</span>
              </div>
            </Link>
          ))}
        </div>
      </section>

      {/* ── Editorial Section ── */}
      <section className="py-24 bg-brand-light">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            <div className="order-2 md:order-1 relative aspect-[4/5] w-full overflow-hidden">
              <Image
                src={heroImages.editorial}
                alt="AMILOU STUDIO Editorial — The Art of Everyday"
                fill
                className="object-cover"
                sizes="(max-width: 768px) 100vw, 50vw"
              />
            </div>
            <div className="order-1 md:order-2 flex flex-col justify-center">
              <span className="text-xs uppercase tracking-widest mb-4">
                Editorial
              </span>
              <h2 className="text-3xl font-light tracking-wider uppercase mb-6 leading-tight">
                The Art of Everyday
              </h2>
              <p className="text-gray-600 mb-8 max-w-md leading-relaxed font-light">
                Exploring the intersection of comfort and structured design. Our
                latest editorial focuses on pieces that form the foundation of a
                modern wardrobe.
              </p>
              <Link
                href="/new"
                className="self-start text-sm border-b border-brand pb-1 hover:text-gray-500 transition-colors uppercase tracking-wider"
              >
                Explore Collection
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* ── Bestsellers Section ── */}
      <section className="py-24 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto w-full">
        <div className="flex flex-col md:flex-row justify-between items-end mb-12">
          <h2 className="text-2xl font-light tracking-widest uppercase">
            Bestsellers
          </h2>
          <Link
            href="/bestsellers"
            className="text-sm border-b border-brand pb-1 hover:text-gray-500 transition-colors mt-4 md:mt-0 uppercase tracking-wider"
          >
            View All
          </Link>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-x-8 gap-y-12">
          {bestsellers.map((product) => (
            <Link
              href={`/product/${product.id}`}
              key={product.id}
              className="group"
            >
              <div className="relative aspect-[3/4] w-full bg-brand-light mb-4 overflow-hidden">
                {/* Default image */}
                <Image
                  src={product.images[0]}
                  alt={product.name}
                  fill
                  className="object-cover transition-opacity duration-500 group-hover:opacity-0"
                  sizes="(max-width: 640px) 100vw, 50vw"
                />
                {/* Hover image */}
                <Image
                  src={product.hoverImage}
                  alt={`${product.name} — alternate view`}
                  fill
                  className="object-cover opacity-0 transition-opacity duration-500 group-hover:opacity-100"
                  sizes="(max-width: 640px) 100vw, 50vw"
                />
                {/* Bestseller badge */}
                <span className="absolute top-3 left-3 bg-brand-accent text-white text-[10px] uppercase tracking-widest px-2 py-1">
                  Bestseller
                </span>
              </div>
              <div className="flex flex-col space-y-1">
                <span className="text-xs text-gray-500 uppercase tracking-wider">
                  {product.category}
                </span>
                <h3 className="text-sm font-medium">{product.name}</h3>
                <span className="text-sm">{formatPrice(product.price)}</span>
              </div>
            </Link>
          ))}
        </div>
      </section>
    </div>
  );
}
