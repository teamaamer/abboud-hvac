'use client';

import { useState } from 'react';
import Image from 'next/image';
import { Phone, Menu, X } from 'lucide-react';
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
      className={className || "text-white hover:text-[var(--cyan-400)] transition-colors font-medium"}
    >
      {label}
    </button>
  );

  return (
    <>
      <header className="sticky top-0 z-50 bg-[var(--navy-900)] shadow-lg">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-20">
            <div className="flex-shrink-0">
              <div className="bg-white px-3 py-1.5 rounded-xl shadow-md">
                <Image
                  src="/logo.png"
                  alt="Abboud Electric and HVAC"
                  width={160}
                  height={53}
                  className="h-12 w-auto"
                  priority
                />
              </div>
            </div>

            <nav className="hidden lg:flex items-center space-x-8">
              {NAVIGATION_ITEMS.map(({ id, label }) => renderNavButton(id, label))}
            </nav>

            <div className="hidden lg:flex items-center space-x-4">
              <a
                href={CONTACT_INFO.phone.href}
                className="flex items-center text-white hover:text-[var(--cyan-400)] transition-colors font-semibold"
              >
                <Phone className="h-5 w-5 mr-2" />
                {CONTACT_INFO.phone.display}
              </a>
              <a
                href={CONTACT_INFO.phone.href}
                className="bg-[var(--cyan-500)] hover:bg-[var(--cyan-600)] text-[var(--navy-900)] px-6 py-3 rounded-xl font-bold transition-all duration-200 shadow-lg hover:shadow-xl hover:scale-105"
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
          <div className="lg:hidden bg-[var(--navy-800)] border-t border-[var(--navy-700)]">
            <div className="px-4 py-6 space-y-4">
              {NAVIGATION_ITEMS.map(({ id, label }) => 
                renderNavButton(
                  id,
                  label,
                  "block w-full text-left text-white hover:text-[var(--cyan-400)] transition-colors font-medium py-2"
                )
              )}
              <a
                href={CONTACT_INFO.phone.href}
                className="flex items-center justify-center bg-[var(--cyan-500)] hover:bg-[var(--cyan-600)] text-[var(--navy-900)] px-6 py-3 rounded-xl font-bold transition-all duration-200 mt-4"
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
