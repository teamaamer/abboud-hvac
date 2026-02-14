'use client';

import { useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { Phone, Menu, X, ShoppingCart } from 'lucide-react';
import { CONTACT_INFO } from '@/lib/constants';
import { useCart } from '@/contexts/CartContext';

const NAV_LINKS = [
  { href: '/shop', label: 'Shop', type: 'link' },
  { href: '/#services', label: 'Services', type: 'scroll', section: 'services' },
  { href: '/#reviews', label: 'Reviews', type: 'scroll', section: 'reviews' },
  { href: '/#faqs', label: 'FAQs', type: 'scroll', section: 'faqs' },
] as const;

export default function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const { cart, openCart } = useCart();
  const pathname = usePathname();
  const itemCount = cart?.totalQuantity || 0;

  const handleNavClick = (item: typeof NAV_LINKS[number]) => {
    if (item.type === 'scroll') {
      if (pathname === '/') {
        const element = document.getElementById(item.section!);
        if (element) {
          element.scrollIntoView({ behavior: 'smooth' });
        }
      } else {
        window.location.href = item.href;
      }
    }
    setMobileMenuOpen(false);
  };

  return (
    <header className="sticky top-0 z-50 bg-[var(--dark-bg)] shadow-lg border-b border-[var(--dark-secondary)]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="hidden lg:grid lg:grid-cols-3 lg:items-center lg:gap-8 h-24">
          {/* Left Column - Logo */}
          <div className="flex items-center">
            <Link href="/" className="flex-shrink-0">
              <Image
                src="/logo.png"
                alt="AB HVAC"
                width={240}
                height={169}
                className="h-20 w-auto"
                priority
              />
            </Link>
          </div>

          {/* Center Column - Navigation */}
          <nav className="flex items-center justify-center gap-6">
            {NAV_LINKS.map((item) => (
              item.type === 'link' ? (
                <Link
                  key={item.href}
                  href={item.href}
                  className="text-white hover:text-[var(--orange-400)] transition-colors font-medium text-base whitespace-nowrap"
                >
                  {item.label}
                </Link>
              ) : (
                <button
                  key={item.href}
                  onClick={() => handleNavClick(item)}
                  className="text-white hover:text-[var(--orange-400)] transition-colors font-medium text-base whitespace-nowrap"
                >
                  {item.label}
                </button>
              )
            ))}
          </nav>

          {/* Right Column - Actions */}
          <div className="flex items-center justify-end gap-4">
            <button
              onClick={openCart}
              className="relative text-white hover:text-[var(--orange-400)] transition-colors p-2"
              aria-label="Shopping cart"
            >
              <ShoppingCart className="h-5 w-5" />
              {itemCount > 0 && (
                <span className="absolute -top-1 -right-1 bg-[var(--orange-500)] text-white text-xs font-bold rounded-full h-5 w-5 flex items-center justify-center">
                  {itemCount}
                </span>
              )}
            </button>
            <a
              href={CONTACT_INFO.phone.href}
              className="flex items-center gap-2 bg-gradient-to-r from-[var(--orange-500)] to-[var(--red-500)] hover:from-[var(--orange-600)] hover:to-[var(--red-600)] text-white px-5 py-2.5 rounded-lg font-bold text-base transition-all duration-200 shadow-lg hover:shadow-xl whitespace-nowrap"
            >
              <Phone className="h-5 w-5" />
              <span className="hidden xl:inline">{CONTACT_INFO.phone.display}</span>
              <span className="xl:hidden">Call</span>
            </a>
          </div>
        </div>

        {/* Mobile Layout */}
        <div className="flex lg:hidden items-center justify-between h-24">
          {/* Logo */}
          <Link href="/" className="flex-shrink-0">
            <Image
              src="/logo.png"
              alt="AB HVAC"
              width={240}
              height={169}
              className="h-20 w-auto"
              priority
            />
          </Link>

          {/* Mobile Menu Button */}
          <div className="flex items-center gap-2">
            <button
              onClick={openCart}
              className="relative text-white hover:text-[var(--orange-400)] transition-colors p-2"
              aria-label="Shopping cart"
            >
              <ShoppingCart className="h-6 w-6" />
              {itemCount > 0 && (
                <span className="absolute -top-1 -right-1 bg-[var(--orange-500)] text-white text-xs font-bold rounded-full h-5 w-5 flex items-center justify-center">
                  {itemCount}
                </span>
              )}
            </button>
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="text-white p-2"
              aria-label="Toggle menu"
            >
              {mobileMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      {mobileMenuOpen && (
        <div className="lg:hidden bg-[var(--dark-secondary)] border-t border-[var(--dark-tertiary)]">
          <nav className="px-4 py-6 space-y-3">
            {NAV_LINKS.map((item) => (
              item.type === 'link' ? (
                <Link
                  key={item.href}
                  href={item.href}
                  onClick={() => setMobileMenuOpen(false)}
                  className="block text-white hover:text-[var(--orange-400)] transition-colors font-medium py-2"
                >
                  {item.label}
                </Link>
              ) : (
                <button
                  key={item.href}
                  onClick={() => handleNavClick(item)}
                  className="block w-full text-left text-white hover:text-[var(--orange-400)] transition-colors font-medium py-2"
                >
                  {item.label}
                </button>
              )
            ))}
            <a
              href={CONTACT_INFO.phone.href}
              className="flex items-center justify-center gap-2 bg-gradient-to-r from-[var(--orange-500)] to-[var(--red-500)] hover:from-[var(--orange-600)] hover:to-[var(--red-600)] text-white px-6 py-3 rounded-xl font-bold transition-all duration-200 mt-4"
            >
              <Phone className="h-5 w-5" />
              {CONTACT_INFO.phone.display}
            </a>
          </nav>
        </div>
      )}
    </header>
  );
}
