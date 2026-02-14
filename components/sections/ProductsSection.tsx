'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import { ArrowRight } from 'lucide-react';
import { getAllProducts, type ShopifyProduct } from '@/lib/shopify';
import ProductCard from '@/components/ProductCard';

export default function ProductsSection() {
  const [products, setProducts] = useState<ShopifyProduct[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    async function fetchProducts() {
      try {
        const fetchedProducts = await getAllProducts();
        // Show only top 5 products on landing page
        setProducts(fetchedProducts.slice(0, 5));
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
            Best Selling Products
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto mb-6">
            Our top 5 most popular HVAC products and equipment
          </p>
          <Link
            href="/shop"
            className="inline-flex items-center gap-2 bg-gradient-to-r from-[var(--orange-500)] to-[var(--red-500)] hover:from-[var(--orange-600)] hover:to-[var(--red-600)] text-white px-6 py-3 rounded-xl font-bold transition-all duration-200 shadow-lg hover:shadow-xl hover:scale-105"
          >
            View All Products
            <ArrowRight className="h-5 w-5" />
          </Link>
        </div>

        {products.length === 0 ? (
          <div className="text-center py-12">
            <p className="text-gray-600">No products available at the moment.</p>
          </div>
        ) : (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 gap-6">
            {products.map((product) => (
              <ProductCard key={product.id} product={product} />
            ))}
          </div>
        )}
      </div>
    </section>
  );
}
