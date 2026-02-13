'use client';

import { useState, useEffect } from 'react';
import Image from 'next/image';
import { ShoppingCart, ExternalLink } from 'lucide-react';
import { getAllProducts, formatPrice, type ShopifyProduct } from '@/lib/shopify';

export default function ProductsSection() {
  const [products, setProducts] = useState<ShopifyProduct[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    async function fetchProducts() {
      try {
        const fetchedProducts = await getAllProducts();
        setProducts(fetchedProducts);
      } catch (err) {
        console.error('Error fetching products:', err);
        setError('Failed to load products. Please try again later.');
      } finally {
        setLoading(false);
      }
    }

    fetchProducts();
  }, []);

  if (loading) {
    return (
      <section id="products" className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <div className="inline-block animate-spin rounded-full h-12 w-12 border-b-2 border-[var(--orange-500)]"></div>
            <p className="mt-4 text-gray-600">Loading products...</p>
          </div>
        </div>
      </section>
    );
  }

  if (error) {
    return (
      <section id="products" className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <p className="text-red-600">{error}</p>
          </div>
        </div>
      </section>
    );
  }

  return (
    <section id="products" className="py-20 bg-white relative overflow-hidden">
      {/* Background decorations */}
      <div className="absolute top-20 right-10 w-96 h-96 bg-[var(--orange-500)] rounded-full opacity-5 blur-3xl" />
      <div className="absolute bottom-20 left-10 w-96 h-96 bg-[var(--blue-500)] rounded-full opacity-5 blur-3xl" />
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center mb-12">
          <div className="inline-block mb-3">
            <span className="text-[var(--orange-500)] font-semibold text-sm uppercase tracking-wider bg-[var(--orange-500)]/10 px-4 py-2 rounded-full">
              Our Products
            </span>
          </div>
          <h2 className="text-4xl sm:text-5xl font-bold text-[var(--dark-bg)] mb-4" style={{ fontFamily: 'var(--font-heading)' }}>
            HVAC Products & Equipment
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Quality HVAC products and equipment for your home or business
          </p>
        </div>

        {products.length === 0 ? (
          <div className="text-center py-12">
            <p className="text-gray-600">No products available at the moment.</p>
          </div>
        ) : (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
            {products.map((product) => {
              const imageUrl = product.images.edges[0]?.node.url || '/placeholder-product.png';
              const price = formatPrice(product.priceRange.minVariantPrice.amount, product.priceRange.minVariantPrice.currencyCode);
              const isAvailable = product.variants.edges.some(v => v.node.availableForSale);

              return (
                <div
                  key={product.id}
                  className="group bg-white rounded-2xl shadow-md hover:shadow-2xl transition-all duration-300 overflow-hidden border border-gray-100 hover:border-[var(--orange-500)] flex flex-col"
                >
                  {/* Product Image */}
                  <div className="relative h-64 bg-gray-100 overflow-hidden">
                    <Image
                      src={imageUrl}
                      alt={product.title}
                      fill
                      className="object-cover group-hover:scale-110 transition-transform duration-500"
                      sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 25vw"
                    />
                    {!isAvailable && (
                      <div className="absolute inset-0 bg-black/50 flex items-center justify-center">
                        <span className="bg-red-500 text-white px-4 py-2 rounded-lg font-bold">
                          Out of Stock
                        </span>
                      </div>
                    )}
                  </div>

                  {/* Product Info */}
                  <div className="p-5 flex flex-col flex-grow">
                    <h3 className="text-lg font-bold text-[var(--dark-bg)] mb-2 line-clamp-2 group-hover:text-[var(--orange-600)] transition-colors" style={{ fontFamily: 'var(--font-heading)' }}>
                      {product.title}
                    </h3>
                    
                    {product.description && (
                      <p className="text-sm text-gray-600 mb-4 line-clamp-3 flex-grow">
                        {product.description.replace(/<[^>]*>/g, '')}
                      </p>
                    )}

                    <div className="mt-auto">
                      <div className="flex items-center justify-between mb-3">
                        <span className="text-2xl font-bold text-[var(--orange-600)]">
                          {price}
                        </span>
                      </div>

                      <a
                        href={`https://ab-group-9125.myshopify.com/products/${product.handle}`}
                        target="_blank"
                        rel="noopener noreferrer"
                        className={`w-full flex items-center justify-center gap-2 px-4 py-3 rounded-xl font-bold transition-all duration-200 ${
                          isAvailable
                            ? 'bg-gradient-to-r from-[var(--orange-500)] to-[var(--red-500)] hover:from-[var(--orange-600)] hover:to-[var(--red-600)] text-white shadow-lg hover:shadow-xl hover:scale-105'
                            : 'bg-gray-300 text-gray-500 cursor-not-allowed'
                        }`}
                        {...(!isAvailable && { onClick: (e) => e.preventDefault() })}
                      >
                        {isAvailable ? (
                          <>
                            <ShoppingCart className="h-5 w-5" />
                            View Product
                            <ExternalLink className="h-4 w-4" />
                          </>
                        ) : (
                          'Out of Stock'
                        )}
                      </a>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        )}
      </div>
    </section>
  );
}
