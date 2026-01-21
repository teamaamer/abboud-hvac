'use client';

import { Phone, FileText } from 'lucide-react';
import { CONTACT_INFO } from '@/lib/constants';
import type { MobileBottomBarProps } from '@/lib/types';

export default function MobileBottomBar({ onEstimateClick }: MobileBottomBarProps) {
  return (
    <div className="fixed bottom-0 left-0 right-0 z-50 bg-[var(--dark-bg)] border-t border-[var(--dark-secondary)] shadow-2xl lg:hidden">
      <div className="grid grid-cols-2 gap-2 p-3">
        <a
          href={CONTACT_INFO.phone.href}
          className="flex items-center justify-center bg-gradient-to-r from-[var(--orange-500)] to-[var(--red-500)] hover:from-[var(--orange-600)] hover:to-[var(--red-600)] text-white px-4 py-3 rounded-xl font-bold transition-all duration-200"
          style={{ minHeight: '44px' }}
        >
          <Phone className="h-5 w-5 mr-2" />
          Call Now
        </a>
        <button
          onClick={onEstimateClick}
          className="flex items-center justify-center bg-white hover:bg-gray-100 text-[var(--dark-bg)] px-4 py-3 rounded-xl font-bold transition-all duration-200 border-2 border-[var(--blue-500)]"
          style={{ minHeight: '44px' }}
        >
          <FileText className="h-5 w-5 mr-2" />
          Get Estimate
        </button>
      </div>
    </div>
  );
}
