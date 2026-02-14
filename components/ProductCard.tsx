'use client';

import { useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { ShoppingCart, Eye } from 'lucide-react';
import { formatPrice, type ShopifyProduct } from '@/lib/shopify';
import { useCart } from '@/contexts/CartContext';
import ProductImagePlaceholder from '@/components/ProductImagePlaceholder';

interface ProductCardProps {
  product: ShopifyProduct;
}

export default function ProductCard({ product }: ProductCardProps) {
  const { addToCart } = useCart();
  const [isAdding, setIsAdding] = useState(false);

  const imageUrl = product.images.edges[0]?.node.url;
  const hasImage = !!imageUrl;
  const price = formatPrice(
    product.priceRange.minVariantPrice.amount,
    product.priceRange.minVariantPrice.currencyCode
  );
  const isAvailable = product.variants.edges.some(v => v.node.availableForSale);
  const defaultVariantId = product.variants.edges[0]?.node.id;

  const handleAddToCart = async (e: React.MouseEvent) => {
    e.preventDefault();
    if (!defaultVariantId || !isAvailable || isAdding) return;

    setIsAdding(true);
    try {
      await addToCart(defaultVariantId, 1);
    } catch (error) {
      console.error('Failed to add to cart:', error);
    } finally {
      setIsAdding(false);
    }
  };

  return (
    <div className="group bg-white border border-gray-200 rounded-xl overflow-hidden hover:shadow-xl transition-all duration-300 flex flex-col">
      <Link href={`/products/${product.handle}`} className="relative aspect-square bg-gray-100 overflow-hidden">
        {hasImage ? (
          <Image
            src={imageUrl}
            alt={product.title}
            fill
            className="object-cover group-hover:scale-110 transition-transform duration-500"
            sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 25vw"
          />
        ) : (
          <div className="w-full h-full flex items-center justify-center">
            <ProductImagePlaceholder />
          </div>
        )}
        {!isAvailable && (
          <div className="absolute inset-0 bg-black/50 flex items-center justify-center">
            <span className="bg-red-500 text-white px-4 py-2 rounded-lg font-bold">
              Out of Stock
            </span>
          </div>
        )}
      </Link>

      <div className="p-5 flex flex-col flex-grow">
        <Link href={`/products/${product.handle}`}>
          <h3 className="text-lg font-bold text-[var(--dark-bg)] mb-2 line-clamp-2 group-hover:text-[var(--orange-600)] transition-colors" style={{ fontFamily: 'var(--font-heading)' }}>
            {product.title}
          </h3>
        </Link>

        {product.description && (
          <p className="text-sm text-gray-600 mb-4 line-clamp-3 flex-grow">
            {product.description.replace(/<[^>]*>/g, '').substring(0, 100)}...
          </p>
        )}

        <div className="mt-auto space-y-3">
          <div className="flex items-center justify-between">
            <span className="text-2xl font-bold text-[var(--orange-600)]">
              {price}
            </span>
          </div>

          <div className="flex gap-2">
            <Link
              href={`/products/${product.handle}`}
              className="flex-1 flex items-center justify-center gap-2 px-4 py-2.5 border-2 border-[var(--orange-500)] text-[var(--orange-600)] rounded-lg font-semibold hover:bg-[var(--orange-50)] transition-colors"
            >
              <Eye className="h-4 w-4" />
              View
            </Link>
            <button
              onClick={handleAddToCart}
              disabled={!isAvailable || isAdding}
              className={`flex-1 flex items-center justify-center gap-2 px-4 py-2.5 rounded-lg font-semibold transition-all ${
                isAvailable && !isAdding
                  ? 'bg-gradient-to-r from-[var(--orange-500)] to-[var(--red-500)] hover:from-[var(--orange-600)] hover:to-[var(--red-600)] text-white shadow-md hover:shadow-lg'
                  : 'bg-gray-300 text-gray-500 cursor-not-allowed'
              }`}
            >
              {isAdding ? (
                <>
                  <div className="animate-spin rounded-full h-4 w-4 border-b-2 border-white"></div>
                  Adding...
                </>
              ) : (
                <>
                  <ShoppingCart className="h-4 w-4" />
                  Add
                </>
              )}
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
