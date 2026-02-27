'use client';

import { useState } from 'react';
import { useCartStore } from '@/store/useCartStore';
import { useToastStore } from '@/components/ui/Toast';

interface AddToCartProps {
  product: {
    id: string;
    name: string;
    price: number;
    color: string;
    image: string;
    sizes: string[];
  };
}

export default function AddToCart({ product }: AddToCartProps) {
  const isOneSize = product.sizes.length === 1 && product.sizes[0] === 'One Size';
  const [selectedSize, setSelectedSize] = useState<string | null>(
    isOneSize ? 'One Size' : null
  );
  const addItem = useCartStore((state) => state.addItem);
  const addToast = useToastStore((state) => state.addToast);

  const handleAddToCart = () => {
    if (!selectedSize) {
      addToast('Please select a size', 'error');
      return;
    }

    addItem({
      id: product.id,
      name: product.name,
      price: product.price,
      size: selectedSize,
      color: product.color,
      image: product.image,
      quantity: 1,
    });
    addToast('Added to bag');
  };

  return (
    <div className="space-y-4 pt-6 border-t border-brand-gray">
      {!isOneSize && (
        <>
          <div className="flex justify-between items-center text-sm mb-2">
            <span className="font-medium uppercase tracking-wider">Size</span>
            <button className="underline text-gray-500 hover:text-brand transition-colors text-xs">
              Size Guide
            </button>
          </div>
          <div className="grid grid-cols-4 gap-2" role="radiogroup" aria-label="Select size">
            {product.sizes.map((size) => (
              <button
                key={size}
                onClick={() => setSelectedSize(size)}
                aria-pressed={selectedSize === size}
                className={`py-3 text-sm transition-colors border ${
                  selectedSize === size
                    ? 'border-brand bg-brand text-white'
                    : 'border-brand-gray hover:border-brand text-brand'
                }`}
              >
                {size}
              </button>
            ))}
          </div>
        </>
      )}

      <button
        onClick={handleAddToCart}
        className="w-full bg-brand text-white uppercase tracking-widest py-4 text-sm hover:bg-brand-dark transition-colors mt-2"
      >
        Add to Bag
      </button>
    </div>
  );
}
