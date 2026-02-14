'use client';

import { createContext, useContext, useState, useEffect, ReactNode } from 'react';
import { Cart, createCart, getCart, addToCart as addToCartAPI, updateCartLine, removeFromCart } from '@/lib/shopify';

interface CartContextType {
  cart: Cart | null;
  loading: boolean;
  addToCart: (variantId: string, quantity?: number) => Promise<void>;
  updateQuantity: (lineId: string, quantity: number) => Promise<void>;
  removeItem: (lineId: string) => Promise<void>;
  isCartOpen: boolean;
  openCart: () => void;
  closeCart: () => void;
}

const CartContext = createContext<CartContextType | undefined>(undefined);

export function CartProvider({ children }: { children: ReactNode }) {
  const [cart, setCart] = useState<Cart | null>(null);
  const [loading, setLoading] = useState(true);
  const [isCartOpen, setIsCartOpen] = useState(false);

  useEffect(() => {
    async function initializeCart() {
      try {
        const cartId = localStorage.getItem('cartId');
        
        if (cartId) {
          const existingCart = await getCart(cartId);
          if (existingCart) {
            setCart(existingCart);
          } else {
            const newCart = await createCart();
            localStorage.setItem('cartId', newCart.id);
            setCart(newCart);
          }
        } else {
          const newCart = await createCart();
          localStorage.setItem('cartId', newCart.id);
          setCart(newCart);
        }
      } catch (error) {
        console.error('Error initializing cart:', error);
      } finally {
        setLoading(false);
      }
    }

    initializeCart();
  }, []);

  const addToCart = async (variantId: string, quantity: number = 1) => {
    if (!cart) return;

    try {
      const updatedCart = await addToCartAPI(cart.id, variantId, quantity);
      setCart(updatedCart);
      setIsCartOpen(true);
    } catch (error) {
      console.error('Error adding to cart:', error);
      throw error;
    }
  };

  const updateQuantity = async (lineId: string, quantity: number) => {
    if (!cart) return;

    try {
      const updatedCart = await updateCartLine(cart.id, lineId, quantity);
      setCart(updatedCart);
    } catch (error) {
      console.error('Error updating cart:', error);
      throw error;
    }
  };

  const removeItem = async (lineId: string) => {
    if (!cart) return;

    try {
      const updatedCart = await removeFromCart(cart.id, [lineId]);
      setCart(updatedCart);
    } catch (error) {
      console.error('Error removing from cart:', error);
      throw error;
    }
  };

  const openCart = () => setIsCartOpen(true);
  const closeCart = () => setIsCartOpen(false);

  return (
    <CartContext.Provider
      value={{
        cart,
        loading,
        addToCart,
        updateQuantity,
        removeItem,
        isCartOpen,
        openCart,
        closeCart,
      }}
    >
      {children}
    </CartContext.Provider>
  );
}

export function useCart() {
  const context = useContext(CartContext);
  if (context === undefined) {
    throw new Error('useCart must be used within a CartProvider');
  }
  return context;
}
