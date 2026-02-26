import Image from "next/image";
import Link from "next/link";

export default function Home() {
  return (
    <div className="flex flex-col w-full">
      {/* Hero Section */}
      <section className="relative h-[85vh] w-full flex items-center justify-center bg-brand-light">
        {/* Placeholder for Hero Image - in production this would be a high-quality fashion editorial image */}
        <div className="absolute inset-0 w-full h-full bg-[#e5e5e5] overflow-hidden">
          {/* We use a simple colored div as placeholder for now, 
              but you can imagine a stunning model shot here */}
        </div>
        
        <div className="relative z-10 flex flex-col items-center text-center px-4">
          <h1 className="text-4xl md:text-6xl font-light tracking-widest uppercase mb-6 text-brand">
            Spring Summer 2026
          </h1>
          <p className="text-lg md:text-xl text-brand mb-8 max-w-lg font-light">
            A study in volume and proportion. Discover the new collection.
          </p>
          <div className="flex flex-col sm:flex-row gap-4">
            <Link 
              href="/women" 
              className="px-8 py-3 bg-brand text-white text-sm uppercase tracking-widest hover:bg-brand-dark transition-colors"
            >
              Shop Women
            </Link>
            <Link 
              href="/men" 
              className="px-8 py-3 bg-transparent border border-brand text-brand text-sm uppercase tracking-widest hover:bg-brand hover:text-white transition-colors"
            >
              Shop Men
            </Link>
          </div>
        </div>
      </section>

      {/* Featured Collection / Lookbook Teaser */}
      <section className="py-24 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto w-full">
        <div className="flex flex-col md:flex-row justify-between items-end mb-12">
          <h2 className="text-2xl font-light tracking-widest uppercase">New Arrivals</h2>
          <Link href="/new" className="text-sm border-b border-brand pb-1 hover:text-gray-500 transition-colors mt-4 md:mt-0 uppercase tracking-wider">
            View All
          </Link>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-x-6 gap-y-12">
          {/* Product Cards Placeholder */}
          {[
            { id: 1, name: "Oversized Cotton Shirt", price: "€79", category: "Women" },
            { id: 2, name: "Wide-Leg Wool Trousers", price: "€115", category: "Women" },
            { id: 3, name: "Minimalist Leather Tote", price: "€195", category: "Accessories" },
            { id: 4, name: "Textured Knit Sweater", price: "€89", category: "Men" },
          ].map((product) => (
            <div key={product.id} className="group cursor-pointer">
              <div className="relative aspect-[3/4] w-full bg-brand-light mb-4 overflow-hidden">
                {/* Image Placeholder */}
                <div className="absolute inset-0 bg-[#f0f0f0] transition-transform duration-700 group-hover:scale-105" />
              </div>
              <div className="flex flex-col space-y-1">
                <span className="text-xs text-gray-500 uppercase tracking-wider">{product.category}</span>
                <h3 className="text-sm font-medium">{product.name}</h3>
                <span className="text-sm">{product.price}</span>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Editorial Section */}
      <section className="py-24 bg-brand-light">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            <div className="order-2 md:order-1 aspect-[4/5] bg-[#e0e0e0] w-full" />
            <div className="order-1 md:order-2 flex flex-col justify-center">
              <span className="text-xs uppercase tracking-widest mb-4">Editorial</span>
              <h2 className="text-3xl font-light tracking-wider uppercase mb-6 leading-tight">
                The Art of Everyday
              </h2>
              <p className="text-gray-600 mb-8 max-w-md leading-relaxed font-light">
                Exploring the intersection of comfort and structured design. 
                Our latest editorial focuses on pieces that form the foundation 
                of a modern wardrobe.
              </p>
              <Link 
                href="/campaign/art-of-everyday" 
                className="self-start text-sm border-b border-brand pb-1 hover:text-gray-500 transition-colors uppercase tracking-wider"
              >
                Read Story
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
