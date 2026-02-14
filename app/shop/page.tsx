'use client';

import { useState, useMemo, useEffect } from 'react';
import { getAllProducts, type ShopifyProduct } from '@/lib/shopify';
import ProductCard from '@/components/ProductCard';
import FilterBar from '@/components/FilterBar';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import MobileBottomBar from '@/components/MobileBottomBar';

export default function ShopPage() {
  const [products, setProducts] = useState<ShopifyProduct[]>([]);
  const [loading, setLoading] = useState(true);
  const [selectedCategory, setSelectedCategory] = useState<string>('all');
  const [sortBy, setSortBy] = useState('featured');

  useEffect(() => {
    const fetchProducts = async () => {
      setLoading(true);
      try {
        const shopifyProducts = await getAllProducts();
        setProducts(shopifyProducts);
      } catch (error) {
        console.error('Error fetching products:', error);
      } finally {
        setLoading(false);
      }
    };
    fetchProducts();
  }, []);

  const filteredProducts = useMemo(() => {
    let filtered = [...products];

    if (sortBy === 'price-low') {
      filtered.sort((a, b) => 
        parseFloat(a.priceRange.minVariantPrice.amount) - parseFloat(b.priceRange.minVariantPrice.amount)
      );
    } else if (sortBy === 'price-high') {
      filtered.sort((a, b) => 
        parseFloat(b.priceRange.minVariantPrice.amount) - parseFloat(a.priceRange.minVariantPrice.amount)
      );
    } else if (sortBy === 'name-asc') {
      filtered.sort((a, b) => a.title.localeCompare(b.title));
    } else if (sortBy === 'name-desc') {
      filtered.sort((a, b) => b.title.localeCompare(a.title));
    }

    return filtered;
  }, [products, selectedCategory, sortBy]);

  const scrollToEstimate = () => {
    window.location.href = '/#estimate';
  };

  if (loading) {
    return (
      <>
        <Header />
        <div className="min-h-screen bg-gray-50 py-12 flex items-center justify-center">
          <div className="text-center">
            <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-[var(--orange-500)] mx-auto mb-4"></div>
            <p className="text-gray-600">Loading products...</p>
          </div>
        </div>
        <Footer />
      </>
    );
  }

  return (
    <>
      <Header />
      <div className="min-h-screen bg-gray-50 py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="mb-8">
            <h1 className="text-4xl font-bold text-[var(--dark-bg)] mb-4" style={{ fontFamily: 'var(--font-heading)' }}>
              Shop All HVAC Products
            </h1>
            <p className="text-gray-600 text-lg">
              Browse our complete selection of quality HVAC products and equipment for your home or business.
            </p>
          </div>

          <FilterBar
            sortBy={sortBy}
            onSortChange={setSortBy}
            productCount={filteredProducts.length}
          />

          {filteredProducts.length > 0 ? (
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
              {filteredProducts.map((product) => (
                <ProductCard key={product.id} product={product} />
              ))}
            </div>
          ) : (
            <div className="text-center py-16 bg-white rounded-2xl shadow-md">
              <p className="text-xl text-gray-600 mb-4">No products available at the moment</p>
              <p className="text-gray-500">Please check back later for new products</p>
            </div>
          )}
        </div>
      </div>
      <Footer />
      <MobileBottomBar onEstimateClick={scrollToEstimate} />
      <div className="h-20 lg:hidden"></div>
    </>
  );
}
