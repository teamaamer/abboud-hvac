'use client';

import { useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { ShoppingCart, ChevronLeft, Check, Share2, Plus, Minus, ChevronDown } from 'lucide-react';
import { formatPrice, type ShopifyProduct } from '@/lib/shopify';
import { useCart } from '@/contexts/CartContext';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import MobileBottomBar from '@/components/MobileBottomBar';
import ProductImagePlaceholder from '@/components/ProductImagePlaceholder';

interface ProductDetailProps {
  product: ShopifyProduct;
}

export default function ProductDetail({ product }: ProductDetailProps) {
  const [selectedImage, setSelectedImage] = useState(0);
  const [selectedVariant, setSelectedVariant] = useState(0);
  const [quantity, setQuantity] = useState(1);
  const [isAdding, setIsAdding] = useState(false);
  const [showDetails, setShowDetails] = useState(false);
  const { addToCart } = useCart();

  const images = product.images.edges.map(edge => edge.node);
  const variants = product.variants.edges.map(edge => edge.node);
  const currentVariant = variants[selectedVariant];
  const isAvailable = currentVariant?.availableForSale || false;

  const handleAddToCart = async () => {
    if (!currentVariant || !isAvailable) return;
    
    setIsAdding(true);
    try {
      await addToCart(currentVariant.id, quantity);
    } catch (error) {
      console.error('Failed to add to cart:', error);
      alert('Failed to add item to cart. Please try again.');
    } finally {
      setIsAdding(false);
    }
  };

  const handleShare = () => {
    if (navigator.share) {
      navigator.share({
        title: product.title,
        text: product.description,
        url: window.location.href,
      }).catch(() => {
        navigator.clipboard.writeText(window.location.href);
        alert('Link copied to clipboard!');
      });
    } else {
      navigator.clipboard.writeText(window.location.href);
      alert('Link copied to clipboard!');
    }
  };

  const scrollToEstimate = () => {
    window.location.href = '/#estimate';
  };

  return (
    <>
      <Header />
      <div className="min-h-screen bg-gray-50">
        {/* Breadcrumb Navigation */}
        <div className="bg-white border-b">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
            <nav className="flex items-center gap-2 text-sm">
              <Link href="/" className="text-gray-600 hover:text-[var(--orange-600)] transition-colors">
                Home
              </Link>
              <span className="text-gray-400">/</span>
              <Link href="/shop" className="text-gray-600 hover:text-[var(--orange-600)] transition-colors">
                Shop
              </Link>
              <span className="text-gray-400">/</span>
              <span className="text-[var(--dark-bg)] font-medium">{product.title}</span>
            </nav>
          </div>
        </div>

      {/* Product Detail */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Image Gallery */}
          <div className="space-y-4">
            {/* Main Image */}
            <div className="relative aspect-square bg-white rounded-2xl overflow-hidden shadow-lg border border-gray-200">
              {images.length > 0 && images[selectedImage]?.url ? (
                <Image
                  src={images[selectedImage].url}
                  alt={images[selectedImage]?.altText || product.title}
                  fill
                  className="object-cover"
                  priority
                  sizes="(max-width: 1024px) 100vw, 50vw"
                />
              ) : (
                <div className="w-full h-full flex items-center justify-center">
                  <ProductImagePlaceholder />
                </div>
              )}
            </div>

            {/* Thumbnail Images */}
            {images.length > 1 && (
              <div className="grid grid-cols-4 gap-4">
                {images.map((image, index) => (
                  <button
                    key={index}
                    onClick={() => setSelectedImage(index)}
                    className={`relative aspect-square rounded-lg overflow-hidden border-2 transition-all ${
                      selectedImage === index
                        ? 'border-[var(--orange-500)] shadow-md'
                        : 'border-gray-200 hover:border-gray-300'
                    }`}
                  >
                    <Image
                      src={image.url}
                      alt={image.altText || `${product.title} ${index + 1}`}
                      fill
                      className="object-cover"
                      sizes="(max-width: 1024px) 25vw, 12.5vw"
                    />
                  </button>
                ))}
              </div>
            )}
          </div>

          {/* Product Info */}
          <div className="space-y-6">
            <div>
              <h1 className="text-4xl font-bold text-[var(--dark-bg)] mb-4" style={{ fontFamily: 'var(--font-heading)' }}>
                {product.title}
              </h1>
              
              <div className="flex items-center gap-4 mb-6">
                <span className="text-4xl font-bold text-[var(--orange-600)]">
                  {formatPrice(currentVariant?.priceV2.amount || product.priceRange.minVariantPrice.amount, currentVariant?.priceV2.currencyCode || product.priceRange.minVariantPrice.currencyCode)}
                </span>
                {isAvailable ? (
                  <span className="inline-flex items-center gap-2 bg-green-100 text-green-800 px-4 py-2 rounded-full font-semibold">
                    <Check className="h-4 w-4" />
                    In Stock
                  </span>
                ) : (
                  <span className="bg-red-100 text-red-800 px-4 py-2 rounded-full font-semibold">
                    Out of Stock
                  </span>
                )}
              </div>
            </div>

            {/* Description */}
            {product.description && (
              <div className="prose prose-lg max-w-none">
                <h3 className="text-xl font-bold text-[var(--dark-bg)] mb-3">Description</h3>
                <div 
                  className="text-gray-700 leading-relaxed"
                  dangerouslySetInnerHTML={{ __html: product.description }}
                />
              </div>
            )}

            {/* Variants */}
            {variants.length > 1 && (
              <div>
                <h3 className="text-xl font-bold text-[var(--dark-bg)] mb-3">Options</h3>
                <div className="grid grid-cols-2 gap-3">
                  {variants.map((variant, index) => (
                    <button
                      key={variant.id}
                      onClick={() => setSelectedVariant(index)}
                      disabled={!variant.availableForSale}
                      className={`p-4 rounded-xl border-2 transition-all text-left ${
                        selectedVariant === index
                          ? 'border-[var(--orange-500)] bg-[var(--orange-500)]/5'
                          : variant.availableForSale
                          ? 'border-gray-200 hover:border-gray-300'
                          : 'border-gray-100 bg-gray-50 opacity-50 cursor-not-allowed'
                      }`}
                    >
                      <div className="font-semibold text-[var(--dark-bg)]">{variant.title}</div>
                      <div className="text-sm text-gray-600 mt-1">
                        {formatPrice(variant.priceV2.amount, variant.priceV2.currencyCode)}
                      </div>
                      {!variant.availableForSale && (
                        <div className="text-xs text-red-600 mt-1">Out of Stock</div>
                      )}
                    </button>
                  ))}
                </div>
              </div>
            )}

            {/* Quantity Selector */}
            <div>
              <label className="block text-sm font-semibold text-[var(--dark-bg)] mb-2">Quantity</label>
              <div className="flex items-center border-2 border-gray-300 rounded-lg w-fit">
                <button
                  onClick={() => setQuantity(Math.max(1, quantity - 1))}
                  disabled={quantity <= 1}
                  className="p-3 hover:bg-gray-100 disabled:opacity-50 disabled:cursor-not-allowed transition-colors"
                  aria-label="Decrease quantity"
                >
                  <Minus className="h-5 w-5" />
                </button>
                <span className="px-6 py-3 font-bold text-lg min-w-[60px] text-center">{quantity}</span>
                <button
                  onClick={() => setQuantity(quantity + 1)}
                  className="p-3 hover:bg-gray-100 transition-colors"
                  aria-label="Increase quantity"
                >
                  <Plus className="h-5 w-5" />
                </button>
              </div>
            </div>

            {/* Add to Cart & Share Buttons */}
            <div className="flex gap-4">
              <button
                onClick={handleAddToCart}
                disabled={!isAvailable || isAdding}
                className={`flex-1 flex items-center justify-center gap-3 px-8 py-4 rounded-xl font-bold text-lg transition-all duration-200 ${
                  isAvailable && !isAdding
                    ? 'bg-gradient-to-r from-[var(--orange-500)] to-[var(--red-500)] hover:from-[var(--orange-600)] hover:to-[var(--red-600)] text-white shadow-lg hover:shadow-xl hover:scale-105'
                    : 'bg-gray-300 text-gray-500 cursor-not-allowed'
                }`}
              >
                {!isAvailable ? (
                  'Out of Stock'
                ) : isAdding ? (
                  <>
                    <div className="animate-spin rounded-full h-6 w-6 border-b-2 border-white"></div>
                    Adding to Cart...
                  </>
                ) : (
                  <>
                    <ShoppingCart className="h-6 w-6" />
                    Add to Cart
                  </>
                )}
              </button>
              <button
                onClick={handleShare}
                className="px-6 py-4 border-2 border-[var(--orange-500)] text-[var(--orange-600)] rounded-xl font-bold hover:bg-[var(--orange-50)] transition-all"
                aria-label="Share product"
              >
                <Share2 className="h-6 w-6" />
              </button>
            </div>

            {/* Accordion for Full Details */}
            <div className="border border-gray-200 rounded-xl overflow-hidden">
              <button
                onClick={() => setShowDetails(!showDetails)}
                className="w-full flex items-center justify-between p-4 bg-white hover:bg-gray-50 transition-colors"
              >
                <span className="font-bold text-[var(--dark-bg)]">View Full Details</span>
                <ChevronDown className={`h-5 w-5 transition-transform ${showDetails ? 'rotate-180' : ''}`} />
              </button>
              {showDetails && (
                <div className="p-4 bg-gray-50 border-t border-gray-200">
                  <div 
                    className="text-gray-700 leading-relaxed prose prose-sm max-w-none"
                    dangerouslySetInnerHTML={{ __html: product.description }}
                  />
                </div>
              )}
            </div>

            <p className="text-sm text-gray-600 text-center">
              Secure checkout powered by Shopify
            </p>

            {/* Additional Info */}
            <div className="bg-blue-50 border border-blue-200 rounded-xl p-6 space-y-3">
              <h4 className="font-bold text-[var(--dark-bg)]">Why Choose AB HVAC?</h4>
              <ul className="space-y-2 text-sm text-gray-700">
                <li className="flex items-start gap-2">
                  <Check className="h-5 w-5 text-[var(--orange-500)] flex-shrink-0 mt-0.5" />
                  <span>Professional installation available</span>
                </li>
                <li className="flex items-start gap-2">
                  <Check className="h-5 w-5 text-[var(--orange-500)] flex-shrink-0 mt-0.5" />
                  <span>Expert technical support</span>
                </li>
                <li className="flex items-start gap-2">
                  <Check className="h-5 w-5 text-[var(--orange-500)] flex-shrink-0 mt-0.5" />
                  <span>Quality guaranteed products</span>
                </li>
                <li className="flex items-start gap-2">
                  <Check className="h-5 w-5 text-[var(--orange-500)] flex-shrink-0 mt-0.5" />
                  <span>Fast and reliable delivery</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
      </div>
      <Footer />
      <MobileBottomBar onEstimateClick={scrollToEstimate} />
      <div className="h-20 lg:hidden"></div>
    </>
  );
}
