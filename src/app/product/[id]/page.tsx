import Image from 'next/image';
import Link from 'next/link';
import { Metadata } from 'next';
import { notFound } from 'next/navigation';
import { getProductById, products } from '@/data/products';
import { formatPrice } from '@/types/product';
import AddToCart from '@/components/product/AddToCart';
import Accordion from '@/components/ui/Accordion';

export async function generateMetadata({
  params,
}: {
  params: Promise<{ id: string }>;
}): Promise<Metadata> {
  const { id } = await params;
  const product = getProductById(id);
  if (!product) return { title: 'Product Not Found' };
  return {
    title: product.name,
    description: product.description,
    openGraph: {
      title: `${product.name} | AMILOU STUDIO`,
      description: product.description,
      images: [{ url: product.images[0], width: 800, height: 1067 }],
    },
  };
}

export function generateStaticParams() {
  return products.map((p) => ({ id: p.id }));
}

export default async function ProductDetailPage({
  params,
}: {
  params: Promise<{ id: string }>;
}) {
  const { id } = await params;
  const product = getProductById(id);

  if (!product) {
    return notFound();
  }

  // Related products: same category, exclude current
  const related = products
    .filter((p) => p.category === product.category && p.id !== product.id)
    .slice(0, 4);

  const accordionItems = [
    {
      title: 'Details & Fit',
      content: (
        <ul className="list-disc list-inside space-y-1.5">
          {product.details.map((detail, i) => (
            <li key={i}>{detail}</li>
          ))}
        </ul>
      ),
    },
    {
      title: 'Materials',
      content: <p>{product.materials}</p>,
    },
    {
      title: 'Care',
      content: <p>{product.care}</p>,
    },
    {
      title: 'Delivery & Returns',
      content: (
        <div className="space-y-2">
          <p>Free standard shipping on orders over €150.</p>
          <p>Standard delivery: 3-5 business days.</p>
          <p>Express delivery: 1-2 business days (€12).</p>
          <p>Free returns within 30 days of delivery.</p>
        </div>
      ),
    },
  ];

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
      {/* Breadcrumbs */}
      <nav aria-label="Breadcrumb" className="mb-8">
        <ol className="flex items-center space-x-2 text-xs text-gray-500">
          <li>
            <Link href="/" className="hover:text-brand transition-colors">Home</Link>
          </li>
          <li>/</li>
          <li>
            <Link href={`/${product.category}`} className="hover:text-brand transition-colors capitalize">
              {product.category}
            </Link>
          </li>
          <li>/</li>
          <li className="text-brand">{product.name}</li>
        </ol>
      </nav>

      <div className="flex flex-col lg:flex-row gap-8 lg:gap-12">
        {/* Product Images */}
        <div className="w-full lg:w-2/3 flex flex-col space-y-3">
          {product.images.map((img, i) => (
            <div key={i} className="relative aspect-[3/4] w-full bg-brand-light overflow-hidden">
              <Image
                src={img}
                alt={`${product.name} — image ${i + 1}`}
                fill
                priority={i === 0}
                className="object-cover"
                sizes="(max-width: 1024px) 100vw, 66vw"
              />
            </div>
          ))}
        </div>

        {/* Product Info — sticky */}
        <div className="w-full lg:w-1/3">
          <div className="lg:sticky lg:top-[120px] space-y-6">
            {/* Badges */}
            <div className="flex gap-2">
              {product.isNew && (
                <span className="bg-brand text-white text-[10px] uppercase tracking-widest px-2 py-1">New</span>
              )}
              {product.isBestseller && (
                <span className="bg-brand-accent text-white text-[10px] uppercase tracking-widest px-2 py-1">Bestseller</span>
              )}
            </div>

            {/* Name & Price */}
            <div>
              <h1 className="text-2xl font-light uppercase tracking-widest mb-3">
                {product.name}
              </h1>
              <span className="text-lg">{formatPrice(product.price)}</span>
            </div>

            {/* Color */}
            <div className="flex items-center gap-2">
              <span
                className="w-4 h-4 rounded-full border border-brand-gray"
                style={{ backgroundColor: product.colorHex }}
              />
              <span className="text-sm text-gray-600">{product.color}</span>
            </div>

            {/* Description */}
            <p className="text-gray-600 font-light leading-relaxed text-sm">
              {product.description}
            </p>

            {/* Add to Cart */}
            <AddToCart
              product={{
                id: product.id,
                name: product.name,
                price: product.price,
                color: product.color,
                image: product.images[0],
                sizes: product.sizes,
              }}
            />

            {/* Accordion */}
            <div className="pt-4">
              <Accordion items={accordionItems} />
            </div>
          </div>
        </div>
      </div>

      {/* You May Also Like */}
      {related.length > 0 && (
        <section className="mt-24 pt-16 border-t border-brand-gray">
          <h2 className="text-2xl font-light tracking-widest uppercase mb-12">
            You May Also Like
          </h2>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-x-4 sm:gap-x-6 gap-y-10">
            {related.map((p) => (
              <Link href={`/product/${p.id}`} key={p.id} className="group">
                <div className="relative aspect-[3/4] w-full bg-brand-light mb-4 overflow-hidden">
                  <Image
                    src={p.images[0]}
                    alt={p.name}
                    fill
                    className="object-cover transition-opacity duration-500 group-hover:opacity-0"
                    sizes="(max-width: 640px) 50vw, 25vw"
                  />
                  <Image
                    src={p.hoverImage}
                    alt={`${p.name} — alternate view`}
                    fill
                    className="object-cover opacity-0 transition-opacity duration-500 group-hover:opacity-100"
                    sizes="(max-width: 640px) 50vw, 25vw"
                  />
                </div>
                <div className="flex flex-col space-y-1">
                  <h3 className="text-sm font-medium">{p.name}</h3>
                  <span className="text-sm">{formatPrice(p.price)}</span>
                </div>
              </Link>
            ))}
          </div>
        </section>
      )}
    </div>
  );
}
