'use client';

import { Filter } from 'lucide-react';

interface FilterBarProps {
  sortBy: string;
  onSortChange: (sort: string) => void;
  productCount: number;
}

export default function FilterBar({
  sortBy,
  onSortChange,
  productCount,
}: FilterBarProps) {
  return (
    <div className="bg-white border border-gray-200 rounded-xl p-6 mb-8 shadow-sm">
      <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
        <div className="flex items-center gap-2">
          <Filter className="h-5 w-5 text-gray-600" />
          <span className="text-gray-700 font-medium">
            {productCount} {productCount === 1 ? 'Product' : 'Products'}
          </span>
        </div>

        <div className="flex items-center gap-3">
          <label htmlFor="sort" className="text-sm font-medium text-gray-700">
            Sort By:
          </label>
          <select
            id="sort"
            value={sortBy}
            onChange={(e) => onSortChange(e.target.value)}
            className="px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[var(--orange-500)] focus:border-transparent bg-white text-gray-900 font-medium"
          >
            <option value="featured">Featured</option>
            <option value="name-asc">Name: A to Z</option>
            <option value="name-desc">Name: Z to A</option>
            <option value="price-low">Price: Low to High</option>
            <option value="price-high">Price: High to Low</option>
          </select>
        </div>
      </div>
    </div>
  );
}
