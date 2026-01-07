'use client';

import { Phone, FileText } from 'lucide-react';
import { CONTACT_INFO } from '@/lib/constants';
import type { MobileBottomBarProps } from '@/lib/types';

export default function MobileBottomBar({ onEstimateClick }: MobileBottomBarProps) {
  return (
    <div className="fixed bottom-0 left-0 right-0 z-50 bg-[var(--navy-900)] border-t border-[var(--navy-700)] shadow-2xl lg:hidden">
      <div className="grid grid-cols-2 gap-2 p-3">
        <a
          href={CONTACT_INFO.phone.href}
          className="flex items-center justify-center bg-[var(--cyan-500)] hover:bg-[var(--cyan-600)] text-[var(--navy-900)] px-4 py-3 rounded-xl font-bold transition-all duration-200"
          style={{ minHeight: '44px' }}
        >
          <Phone className="h-5 w-5 mr-2" />
          Call Now
        </a>
        <button
          onClick={onEstimateClick}
          className="flex items-center justify-center bg-white hover:bg-gray-100 text-[var(--navy-900)] px-4 py-3 rounded-xl font-bold transition-all duration-200 border-2 border-[var(--cyan-500)]"
          style={{ minHeight: '44px' }}
        >
          <FileText className="h-5 w-5 mr-2" />
          Get Estimate
        </button>
      </div>
    </div>
  );
}
