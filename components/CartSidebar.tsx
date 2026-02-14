'use client';

import { useCart } from '@/contexts/CartContext';
import Image from 'next/image';
import Link from 'next/link';
import { X, Plus, Minus, Trash2, ShoppingBag, ExternalLink } from 'lucide-react';
import { formatPrice } from '@/lib/shopify';
import { useState } from 'react';
import ProductImagePlaceholder from '@/components/ProductImagePlaceholder';

export default function CartSidebar() {
  const { cart, isCartOpen, closeCart, updateQuantity, removeItem } = useCart();
  const [updatingLines, setUpdatingLines] = useState<Set<string>>(new Set());

  if (!isCartOpen) return null;

  const cartLines = cart?.lines.edges.map(edge => edge.node) || [];
  const isEmpty = cartLines.length === 0;

  const handleUpdateQuantity = async (lineId: string, newQuantity: number) => {
    if (newQuantity < 1) return;
    
    setUpdatingLines(prev => new Set(prev).add(lineId));
    try {
      await updateQuantity(lineId, newQuantity);
    } finally {
      setUpdatingLines(prev => {
        const next = new Set(prev);
        next.delete(lineId);
        return next;
      });
    }
  };

  const handleRemoveItem = async (lineId: string) => {
    setUpdatingLines(prev => new Set(prev).add(lineId));
    try {
      await removeItem(lineId);
    } finally {
      setUpdatingLines(prev => {
        const next = new Set(prev);
        next.delete(lineId);
        return next;
      });
    }
  };

  return (
    <>
      {/* Backdrop */}
      <div
        className="fixed inset-0 bg-black/50 z-40 transition-opacity"
        onClick={closeCart}
      />

      {/* Sidebar */}
      <div className="fixed right-0 top-0 h-full w-full max-w-md bg-white shadow-2xl z-50 flex flex-col">
        {/* Header */}
        <div className="flex items-center justify-between p-6 border-b">
          <h2 className="text-2xl font-bold text-[var(--dark-bg)]" style={{ fontFamily: 'var(--font-heading)' }}>
            Shopping Cart
          </h2>
          <button
            onClick={closeCart}
            className="p-2 hover:bg-gray-100 rounded-full transition-colors"
            aria-label="Close cart"
          >
            <X className="h-6 w-6" />
          </button>
        </div>

        {/* Cart Items */}
        <div className="flex-1 overflow-y-auto p-6">
          {isEmpty ? (
            <div className="flex flex-col items-center justify-center h-full text-center">
              <ShoppingBag className="h-24 w-24 text-gray-300 mb-4" />
              <h3 className="text-xl font-bold text-gray-900 mb-2">Your cart is empty</h3>
              <p className="text-gray-600 mb-6">Add some products to get started!</p>
              <button
                onClick={closeCart}
                className="bg-gradient-to-r from-[var(--orange-500)] to-[var(--red-500)] text-white px-6 py-3 rounded-xl font-bold hover:from-[var(--orange-600)] hover:to-[var(--red-600)] transition-all"
              >
                Continue Shopping
              </button>
            </div>
          ) : (
            <div className="space-y-4">
              {cartLines.map((line) => {
                const isUpdating = updatingLines.has(line.id);
                const imageUrl = line.merchandise.product.featuredImage?.url;
                const hasImage = !!imageUrl;
                
                return (
                  <div
                    key={line.id}
                    className={`flex gap-4 p-4 bg-gray-50 rounded-xl transition-opacity ${
                      isUpdating ? 'opacity-50' : ''
                    }`}
                  >
                    {/* Product Image */}
                    <Link
                      href={`/products/${line.merchandise.product.handle}`}
                      onClick={closeCart}
                      className="relative w-24 h-24 flex-shrink-0 bg-white rounded-lg overflow-hidden"
                    >
                      {hasImage ? (
                        <Image
                          src={imageUrl}
                          alt={line.merchandise.product.title}
                          fill
                          className="object-cover"
                          sizes="96px"
                        />
                      ) : (
                        <div className="w-full h-full flex items-center justify-center">
                          <ProductImagePlaceholder />
                        </div>
                      )}
                    </Link>

                    {/* Product Info */}
                    <div className="flex-1 min-w-0">
                      <Link
                        href={`/products/${line.merchandise.product.handle}`}
                        onClick={closeCart}
                        className="font-bold text-[var(--dark-bg)] hover:text-[var(--orange-600)] transition-colors line-clamp-2"
                      >
                        {line.merchandise.product.title}
                      </Link>
                      
                      {line.merchandise.title !== 'Default Title' && (
                        <p className="text-sm text-gray-600 mt-1">{line.merchandise.title}</p>
                      )}

                      <p className="text-lg font-bold text-[var(--orange-600)] mt-2">
                        {formatPrice(line.merchandise.priceV2.amount, line.merchandise.priceV2.currencyCode)}
                      </p>

                      {/* Quantity Controls */}
                      <div className="flex items-center gap-3 mt-3">
                        <div className="flex items-center border border-gray-300 rounded-lg">
                          <button
                            onClick={() => handleUpdateQuantity(line.id, line.quantity - 1)}
                            disabled={isUpdating || line.quantity <= 1}
                            className="p-2 hover:bg-gray-100 disabled:opacity-50 disabled:cursor-not-allowed transition-colors"
                            aria-label="Decrease quantity"
                          >
                            <Minus className="h-4 w-4" />
                          </button>
                          <span className="px-4 font-semibold min-w-[3ch] text-center">
                            {line.quantity}
                          </span>
                          <button
                            onClick={() => handleUpdateQuantity(line.id, line.quantity + 1)}
                            disabled={isUpdating}
                            className="p-2 hover:bg-gray-100 disabled:opacity-50 disabled:cursor-not-allowed transition-colors"
                            aria-label="Increase quantity"
                          >
                            <Plus className="h-4 w-4" />
                          </button>
                        </div>

                        <button
                          onClick={() => handleRemoveItem(line.id)}
                          disabled={isUpdating}
                          className="p-2 text-red-600 hover:bg-red-50 rounded-lg transition-colors disabled:opacity-50"
                          aria-label="Remove item"
                        >
                          <Trash2 className="h-5 w-5" />
                        </button>
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>
          )}
        </div>

        {/* Footer */}
        {!isEmpty && cart && (
          <div className="border-t p-6 space-y-4">
            <div className="space-y-2">
              <div className="flex justify-between text-gray-600">
                <span>Subtotal</span>
                <span className="font-semibold">
                  {formatPrice(cart.cost.subtotalAmount.amount, cart.cost.subtotalAmount.currencyCode)}
                </span>
              </div>
              <div className="flex justify-between text-lg font-bold text-[var(--dark-bg)]">
                <span>Total</span>
                <span className="text-[var(--orange-600)]">
                  {formatPrice(cart.cost.totalAmount.amount, cart.cost.totalAmount.currencyCode)}
                </span>
              </div>
              <p className="text-xs text-gray-500">Shipping and taxes calculated at checkout</p>
            </div>

            <a
              href={cart.checkoutUrl}
              className="w-full flex items-center justify-center gap-2 bg-gradient-to-r from-[var(--orange-500)] to-[var(--red-500)] text-white px-6 py-4 rounded-xl font-bold text-lg hover:from-[var(--orange-600)] hover:to-[var(--red-600)] transition-all shadow-lg hover:shadow-xl"
            >
              Proceed to Checkout
              <ExternalLink className="h-5 w-5" />
            </a>

            <button
              onClick={closeCart}
              className="w-full text-center text-[var(--orange-600)] font-semibold hover:text-[var(--orange-700)] transition-colors"
            >
              Continue Shopping
            </button>
          </div>
        )}
      </div>
    </>
  );
}
