import React from 'react';
import { Tag, Building2, Link as LinkIcon } from 'lucide-react';

interface ProductDetailsFieldsProps {
  category: string;
  brand: string;
  merchant: string;
  image: string;
  url: string;
  onChange: (field: string, value: string) => void;
}

export default function ProductDetailsFields({ 
  category, 
  brand, 
  merchant, 
  image, 
  url, 
  onChange 
}: ProductDetailsFieldsProps) {
  const categories = ['Equipment', 'Apparel', 'Footwear', 'Accessories'];

  return (
    <div className="space-y-4">
      <h3 className="text-lg font-medium text-gray-900">Product Details</h3>
      
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        <div>
          <label className="block text-sm font-medium text-gray-700">Category</label>
          <div className="mt-1 relative">
            <Tag className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400 h-5 w-5" />
            <select
              required
              value={category}
              onChange={(e) => onChange('category', e.target.value)}
              className="pl-10 block w-full rounded-md border-gray-300 shadow-sm focus:border-emerald-500 focus:ring-emerald-500"
            >
              {categories.map(cat => (
                <option key={cat} value={cat}>{cat}</option>
              ))}
            </select>
          </div>
        </div>

        <div>
          <label className="block text-sm font-medium text-gray-700">Brand</label>
          <div className="mt-1 relative">
            <Building2 className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400 h-5 w-5" />
            <input
              type="text"
              required
              value={brand}
              onChange={(e) => onChange('brand', e.target.value)}
              className="pl-10 block w-full rounded-md border-gray-300 shadow-sm focus:border-emerald-500 focus:ring-emerald-500"
              placeholder="e.g., TaylorMade"
            />
          </div>
        </div>
      </div>

      <div>
        <label className="block text-sm font-medium text-gray-700">Image URL</label>
        <div className="mt-1 relative">
          <LinkIcon className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400 h-5 w-5" />
          <input
            type="url"
            required
            value={image}
            onChange={(e) => onChange('image', e.target.value)}
            className="pl-10 block w-full rounded-md border-gray-300 shadow-sm focus:border-emerald-500 focus:ring-emerald-500"
            placeholder="https://example.com/image.jpg"
          />
        </div>
      </div>

      <div>
        <label className="block text-sm font-medium text-gray-700">Deal URL</label>
        <div className="mt-1 relative">
          <LinkIcon className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400 h-5 w-5" />
          <input
            type="url"
            required
            value={url}
            onChange={(e) => onChange('url', e.target.value)}
            className="pl-10 block w-full rounded-md border-gray-300 shadow-sm focus:border-emerald-500 focus:ring-emerald-500"
            placeholder="https://example.com/product"
          />
        </div>
        <p className="mt-1 text-sm text-gray-500">
          Enter the URL where users can purchase this deal
        </p>
      </div>

      <div>
        <label className="block text-sm font-medium text-gray-700">Merchant</label>
        <div className="mt-1 relative">
          <Building2 className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400 h-5 w-5" />
          <input
            type="text"
            required
            value={merchant}
            onChange={(e) => onChange('merchant', e.target.value)}
            className="pl-10 block w-full rounded-md border-gray-300 shadow-sm focus:border-emerald-500 focus:ring-emerald-500"
            placeholder="e.g., Golf Galaxy"
          />
        </div>
      </div>
    </div>
  );
}