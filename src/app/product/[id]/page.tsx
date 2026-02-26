import Link from 'next/link';
import AddToCart from '@/components/product/AddToCart';

// Dummy data
const products = [
  { id: '1', name: "Oversized Cotton Shirt", price: "€79", category: "Women", color: "White" },
  { id: '2', name: "Wide-Leg Wool Trousers", price: "€115", category: "Women", color: "Black" },
  { id: '3', name: "Minimalist Leather Tote", price: "€195", category: "Accessories", color: "Tan" },
  { id: '4', name: "Textured Knit Sweater", price: "€89", category: "Men", color: "Navy" },
  { id: '5', name: "Silk Blend Slip Dress", price: "€125", category: "Women", color: "Black" },
  { id: '6', name: "Tailored Blazer", price: "€150", category: "Women", color: "Charcoal" },
];

export default async function ProductDetailPage({
  params,
}: {
  params: Promise<{ id: string }>;
}) {
  const { id } = await params;
  const product = products.find(p => p.id === id);

  if (!product) {
    return (
      <div className="py-32 text-center text-gray-500 font-light text-2xl">
        Product not found.
      </div>
    );
  }

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 flex flex-col md:flex-row gap-12">
      {/* Product Images - taking up 2/3 of space on desktop */}
      <div className="w-full md:w-2/3 flex flex-col space-y-4">
        <div className="aspect-[3/4] bg-brand-light w-full"></div>
        <div className="grid grid-cols-2 gap-4">
          <div className="aspect-[3/4] bg-brand-light w-full"></div>
          <div className="aspect-[3/4] bg-brand-light w-full"></div>
        </div>
      </div>

      {/* Product Info - sticky on desktop */}
      <div className="w-full md:w-1/3">
        <div className="sticky top-24 space-y-8">
          <div>
            <div className="flex justify-between items-start mb-2">
              <h1 className="text-2xl font-light uppercase tracking-widest">{product.name}</h1>
              <span className="text-lg font-medium">{product.price}</span>
            </div>
            <p className="text-gray-500 text-sm">Color: {product.color}</p>
          </div>

          <div className="space-y-4">
            <p className="text-gray-600 font-light leading-relaxed">
              Crafted from crisp organic cotton, this oversized shirt features dropped shoulders, 
              a classic collar, and a clean concealed placket. An essential piece for the modern wardrobe.
            </p>
          </div>

          <AddToCart product={product} />

          <div className="space-y-2 text-sm text-gray-600 pt-8">
            <p className="flex justify-between py-2 border-b border-brand-gray cursor-pointer hover:text-brand">
              <span className="uppercase tracking-wider">Details & Fit</span>
              <span>+</span>
            </p>
            <p className="flex justify-between py-2 border-b border-brand-gray cursor-pointer hover:text-brand">
              <span className="uppercase tracking-wider">Delivery & Returns</span>
              <span>+</span>
            </p>
            <p className="flex justify-between py-2 border-b border-brand-gray cursor-pointer hover:text-brand">
              <span className="uppercase tracking-wider">Materials</span>
              <span>+</span>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
