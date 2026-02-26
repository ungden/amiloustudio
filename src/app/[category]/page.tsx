import Link from 'next/link';

// Dummy data for now
const products = [
  { id: '1', name: "Oversized Cotton Shirt", price: "€79", category: "Women", color: "White" },
  { id: '2', name: "Wide-Leg Wool Trousers", price: "€115", category: "Women", color: "Black" },
  { id: '3', name: "Minimalist Leather Tote", price: "€195", category: "Accessories", color: "Tan" },
  { id: '4', name: "Textured Knit Sweater", price: "€89", category: "Men", color: "Navy" },
  { id: '5', name: "Silk Blend Slip Dress", price: "€125", category: "Women", color: "Black" },
  { id: '6', name: "Tailored Blazer", price: "€150", category: "Women", color: "Charcoal" },
];

export default async function CategoryPage({
  params,
}: {
  params: Promise<{ category: string }>;
}) {
  const categoryParams = await params;
  const category = categoryParams.category;
  
  // Basic filtering for demo
  const filteredProducts = category === 'new' 
    ? products 
    : products.filter(p => p.category.toLowerCase() === category.toLowerCase() || category === 'all');

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
      {/* Category Header */}
      <div className="mb-12 text-center md:text-left">
        <h1 className="text-3xl font-light tracking-widest uppercase mb-4">
          {category === 'new' ? 'New Arrivals' : category}
        </h1>
        <p className="text-gray-500 font-light max-w-2xl">
          Explore our latest collection of {category.toLowerCase()} clothing. 
          Designed with intention and crafted for longevity.
        </p>
      </div>

      {/* Filters & Sort (Visual only for now) */}
      <div className="flex justify-between items-center mb-8 border-b border-brand-gray pb-4">
        <div className="flex space-x-6 text-sm">
          <button className="uppercase tracking-wider hover:text-gray-500 transition-colors">Filter</button>
        </div>
        <div className="flex space-x-6 text-sm">
          <span className="text-gray-400 hidden sm:inline">{filteredProducts.length} Items</span>
          <button className="uppercase tracking-wider hover:text-gray-500 transition-colors">Sort</button>
        </div>
      </div>

      {/* Product Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-x-6 gap-y-12">
        {filteredProducts.map((product) => (
          <Link href={`/product/${product.id}`} key={product.id} className="group">
            <div className="relative aspect-[3/4] w-full bg-brand-light mb-4 overflow-hidden">
              <div className="absolute inset-0 bg-[#f5f5f5] transition-transform duration-700 group-hover:scale-105" />
            </div>
            <div className="flex flex-col space-y-1">
              <div className="flex justify-between items-start">
                <h3 className="text-sm font-medium pr-4">{product.name}</h3>
                <span className="text-sm">{product.price}</span>
              </div>
              <span className="text-xs text-gray-500">{product.color}</span>
            </div>
          </Link>
        ))}
      </div>
      
      {filteredProducts.length === 0 && (
        <div className="py-24 text-center text-gray-500 font-light">
          No products found in this category.
        </div>
      )}
    </div>
  );
}
