import Image from 'next/image';
import { Phone, Facebook } from 'lucide-react';
import { CONTACT_INFO } from '@/lib/constants';

export default function Footer() {
  return (
    <footer className="bg-[var(--dark-bg)] text-white py-12 border-t border-[var(--dark-secondary)]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid md:grid-cols-3 gap-12 mb-8">
          <div>
            <div className="bg-[var(--dark-bg)] p-2 rounded-lg inline-block mb-4">
              <Image
                src="/logo.png?v=2"
                alt="Abboud Electric and HVAC"
                width={240}
                height={169}
                className="h-24 w-auto"
                unoptimized
              />
            </div>
            <p className="text-gray-300 mb-4">
              Reliable HVAC & Electrical service built on quality and trust.
            </p>
            <a
              href={CONTACT_INFO.facebook.href}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center text-gray-300 hover:text-[var(--orange-400)] transition-colors"
              aria-label="Follow us on Facebook"
            >
              <Facebook className="h-6 w-6 mr-2" />
              Follow us on Facebook
            </a>
          </div>

          <div>
            <h3 className="text-xl font-bold mb-4" style={{ fontFamily: 'var(--font-heading)' }}>Contact</h3>
            <div className="space-y-3">
              <a href={CONTACT_INFO.phone.href} className="flex items-center text-gray-300 hover:text-[var(--orange-400)] transition-colors">
                <Phone className="h-5 w-5 mr-3" />
                {CONTACT_INFO.phone.display}
              </a>
              <p className="text-gray-300">
                <strong>Email:</strong> {CONTACT_INFO.email}
              </p>
              <p className="text-gray-300">
                <strong>Hours:</strong> {CONTACT_INFO.hours.weekday}<br />
                {CONTACT_INFO.hours.saturday}, {CONTACT_INFO.hours.sunday}
              </p>
            </div>
          </div>

          <div>
            <h3 className="text-xl font-bold mb-4" style={{ fontFamily: 'var(--font-heading)' }}>Legal</h3>
            <div className="space-y-2">
              <a href="#" className="block text-gray-300 hover:text-[var(--orange-400)] transition-colors text-sm">
                Privacy Policy
              </a>
              <a href="#" className="block text-gray-300 hover:text-[var(--orange-400)] transition-colors text-sm">
                Terms of Service
              </a>
            </div>
          </div>
        </div>

        <div className="border-t border-[var(--dark-secondary)] pt-8 text-center text-gray-400 text-sm">
          <p>&copy; {new Date().getFullYear()} Abboud Electric and HVAC. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}
