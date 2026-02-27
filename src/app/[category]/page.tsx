import Link from 'next/link';
import Image from 'next/image';
import { Metadata } from 'next';
import { notFound } from 'next/navigation';
import { getProductsByCategory, getAllCategories, products } from '@/data/products';
import { formatPrice } from '@/types/product';

const categoryTitles: Record<string, string> = {
  women: "Women's Collection",
  men: "Men's Collection",
  accessories: 'Accessories',
  new: 'New Arrivals',
  bestsellers: 'Bestsellers',
};

const categoryDescriptions: Record<string, string> = {
  women: 'Discover our women\'s collection — timeless pieces designed with intention and crafted for longevity.',
  men: 'Explore our men\'s collection — refined essentials that balance structured tailoring with effortless comfort.',
  accessories: 'Complete your look with our curated accessories — leather goods and finishing details made to last.',
  new: 'The latest additions to AMILOU STUDIO. Explore freshly arrived pieces from our newest collection.',
  bestsellers: 'Our most loved pieces. Discover the styles that define AMILOU STUDIO.',
};

const validCategories = ['women', 'men', 'accessories', 'new', 'bestsellers'];

export async function generateMetadata({
  params,
}: {
  params: Promise<{ category: string }>;
}): Promise<Metadata> {
  const { category } = await params;
  const title = categoryTitles[category];
  if (!title) return { title: 'Collection' };
  return {
    title,
    description: categoryDescriptions[category],
  };
}

export function generateStaticParams() {
  return validCategories.map((category) => ({ category }));
}

export default async function CategoryPage({
  params,
}: {
  params: Promise<{ category: string }>;
}) {
  const { category } = await params;

  if (!validCategories.includes(category)) {
    notFound();
  }

  const filteredProducts = getProductsByCategory(category);
  const title = categoryTitles[category] || category;

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
      {/* Breadcrumbs */}
      <nav aria-label="Breadcrumb" className="mb-8">
        <ol className="flex items-center space-x-2 text-xs text-gray-500">
          <li><Link href="/" className="hover:text-brand transition-colors">Home</Link></li>
          <li>/</li>
          <li className="text-brand capitalize">{title}</li>
        </ol>
      </nav>

      {/* Category Header */}
      <div className="mb-12">
        <h1 className="text-3xl font-light tracking-widest uppercase mb-4">{title}</h1>
        <p className="text-gray-500 font-light max-w-2xl">
          {categoryDescriptions[category]}
        </p>
      </div>

      {/* Product count */}
      <div className="flex justify-between items-center mb-8 border-b border-brand-gray pb-4">
        <span className="text-sm text-gray-500">{filteredProducts.length} {filteredProducts.length === 1 ? 'item' : 'items'}</span>
      </div>

      {/* Product Grid */}
      <div className="grid grid-cols-2 md:grid-cols-3 xl:grid-cols-4 gap-x-4 sm:gap-x-6 gap-y-10 sm:gap-y-12">
        {filteredProducts.map((product) => (
          <Link href={`/product/${product.id}`} key={product.id} className="group">
            <div className="relative aspect-[3/4] w-full bg-brand-light mb-4 overflow-hidden">
              <Image
                src={product.images[0]}
                alt={product.name}
                fill
                className="object-cover transition-opacity duration-500 group-hover:opacity-0"
                sizes="(max-width: 640px) 50vw, (max-width: 1024px) 33vw, 25vw"
              />
              <Image
                src={product.hoverImage}
                alt={`${product.name} — alternate view`}
                fill
                className="object-cover opacity-0 transition-opacity duration-500 group-hover:opacity-100"
                sizes="(max-width: 640px) 50vw, (max-width: 1024px) 33vw, 25vw"
              />
              {product.isNew && (
                <span className="absolute top-3 left-3 bg-brand text-white text-[10px] uppercase tracking-widest px-2 py-1">New</span>
              )}
              {product.isBestseller && !product.isNew && (
                <span className="absolute top-3 left-3 bg-brand-accent text-white text-[10px] uppercase tracking-widest px-2 py-1">Bestseller</span>
              )}
            </div>
            <div className="flex flex-col space-y-1">
              <div className="flex justify-between items-start">
                <h3 className="text-sm font-medium pr-4">{product.name}</h3>
                <span className="text-sm whitespace-nowrap">{formatPrice(product.price)}</span>
              </div>
              <span className="text-xs text-gray-500">{product.color}</span>
            </div>
          </Link>
        ))}
      </div>

      {filteredProducts.length === 0 && (
        <div className="py-24 text-center">
          <p className="text-gray-500 font-light text-lg mb-4">No products found in this category.</p>
          <Link href="/" className="text-sm border-b border-brand pb-1 hover:text-gray-500 transition-colors uppercase tracking-wider">
            Back to Home
          </Link>
        </div>
      )}
    </div>
  );
}
