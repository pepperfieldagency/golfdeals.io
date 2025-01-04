import React from 'react';
import { DollarSign } from 'lucide-react';

interface PricingFieldsProps {
  originalPrice: string;
  discountedPrice: string;
  onChange: (field: string, value: string) => void;
}

export default function PricingFields({ originalPrice, discountedPrice, onChange }: PricingFieldsProps) {
  return (
    <div className="space-y-4">
      <h3 className="text-lg font-medium text-gray-900">Pricing</h3>
      
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        <div>
          <label className="block text-sm font-medium text-gray-700">Original Price</label>
          <div className="mt-1 relative">
            <DollarSign className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400 h-5 w-5" />
            <input
              type="number"
              required
              min="0"
              step="0.01"
              value={originalPrice}
              onChange={(e) => onChange('originalPrice', e.target.value)}
              className="pl-10 block w-full rounded-md border-gray-300 shadow-sm focus:border-emerald-500 focus:ring-emerald-500"
              placeholder="0.00"
            />
          </div>
        </div>

        <div>
          <label className="block text-sm font-medium text-gray-700">Discounted Price</label>
          <div className="mt-1 relative">
            <DollarSign className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400 h-5 w-5" />
            <input
              type="number"
              required
              min="0"
              step="0.01"
              value={discountedPrice}
              onChange={(e) => onChange('discountedPrice', e.target.value)}
              className="pl-10 block w-full rounded-md border-gray-300 shadow-sm focus:border-emerald-500 focus:ring-emerald-500"
              placeholder="0.00"
            />
          </div>
        </div>
      </div>
    </div>
  );
}