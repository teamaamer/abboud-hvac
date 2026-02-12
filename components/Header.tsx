'use client';

import { useState } from 'react';
import Image from 'next/image';
import { Phone, Menu, X, Facebook } from 'lucide-react';
import { CONTACT_INFO, NAVIGATION_ITEMS } from '@/lib/constants';

export default function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
      setMobileMenuOpen(false);
    }
  };

  const renderNavButton = (id: string, label: string, className: string = '') => (
    <button
      key={id}
      onClick={() => scrollToSection(id)}
      className={className || "text-white hover:text-[var(--orange-400)] transition-colors font-medium"}
    >
      {label}
    </button>
  );

  return (
    <>
      <header className="sticky top-0 z-50 bg-[var(--dark-bg)] shadow-lg border-b border-[var(--dark-secondary)]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-28">
            <div className="flex-shrink-0">
              <div className="bg-[var(--dark-bg)] p-2 rounded-lg">
                <Image
                  src="/logo.png?v=2"
                  alt="Abboud Electric and HVAC"
                  width={240}
                  height={169}
                  className="h-24 w-auto"
                  priority
                  unoptimized
                />
              </div>
            </div>

            <nav className="hidden lg:flex items-center space-x-8">
              {NAVIGATION_ITEMS.map(({ id, label }) => renderNavButton(id, label))}
            </nav>

            <div className="hidden lg:flex items-center space-x-4">
              <a
                href={CONTACT_INFO.facebook.href}
                target="_blank"
                rel="noopener noreferrer"
                className="text-white hover:text-[var(--orange-400)] transition-colors"
                aria-label="Facebook"
              >
                <Facebook className="h-6 w-6" />
              </a>
              <a
                href={CONTACT_INFO.phone.href}
                className="flex items-center text-white hover:text-[var(--orange-400)] transition-colors font-semibold"
              >
                <Phone className="h-5 w-5 mr-2" />
                {CONTACT_INFO.phone.display}
              </a>
              <a
                href={CONTACT_INFO.phone.href}
                className="bg-gradient-to-r from-[var(--orange-500)] to-[var(--red-500)] hover:from-[var(--orange-600)] hover:to-[var(--red-600)] text-white px-6 py-3 rounded-xl font-bold transition-all duration-200 shadow-lg hover:shadow-xl hover:scale-105"
              >
                Call Now
              </a>
            </div>

            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="lg:hidden text-white p-2"
              aria-label="Toggle menu"
            >
              {mobileMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </button>
          </div>
        </div>

        {mobileMenuOpen && (
          <div className="lg:hidden bg-[var(--dark-secondary)] border-t border-[var(--dark-tertiary)]">
            <div className="px-4 py-6 space-y-4">
              {NAVIGATION_ITEMS.map(({ id, label }) => 
                renderNavButton(
                  id,
                  label,
                  "block w-full text-left text-white hover:text-[var(--orange-400)] transition-colors font-medium py-2"
                )
              )}
              <a
                href={CONTACT_INFO.phone.href}
                className="flex items-center justify-center bg-gradient-to-r from-[var(--orange-500)] to-[var(--red-500)] hover:from-[var(--orange-600)] hover:to-[var(--red-600)] text-white px-6 py-3 rounded-xl font-bold transition-all duration-200 mt-4"
              >
                <Phone className="h-5 w-5 mr-2" />
                Call Now
              </a>
            </div>
          </div>
        )}
      </header>
    </>
  );
}
