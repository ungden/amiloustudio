'use client';

import { useState } from 'react';
import { useCartStore } from '@/store/useCartStore';

interface AddToCartProps {
  product: {
    id: string;
    name: string;
    price: string;
    color: string;
  };
}

export default function AddToCart({ product }: AddToCartProps) {
  const [selectedSize, setSelectedSize] = useState<string | null>(null);
  const addItem = useCartStore((state) => state.addItem);

  const handleAddToCart = () => {
    if (!selectedSize) {
      alert("Please select a size");
      return;
    }

    addItem({
      id: product.id,
      name: product.name,
      price: product.price,
      size: selectedSize,
      color: product.color,
      quantity: 1,
    });
  };

  return (
    <div className="space-y-4 pt-4 border-t border-brand-gray">
      <div className="flex justify-between items-center text-sm mb-2">
        <span className="font-medium uppercase tracking-wider">Size</span>
        <button className="underline text-gray-500 hover:text-brand transition-colors">Size Guide</button>
      </div>
      
      {/* Size Selector */}
      <div className="grid grid-cols-4 gap-2">
        {['XS', 'S', 'M', 'L'].map(size => (
          <button 
            key={size}
            onClick={() => setSelectedSize(size)}
            className={`py-3 transition-colors border ${
              selectedSize === size 
                ? 'border-brand bg-brand text-white' 
                : 'border-brand-gray hover:border-brand text-brand'
            }`}
          >
            {size}
          </button>
        ))}
      </div>

      <button 
        onClick={handleAddToCart}
        className="w-full bg-brand text-white uppercase tracking-widest py-4 mt-4 hover:bg-brand-dark transition-colors"
      >
        Add to Bag
      </button>
    </div>
  );
}
