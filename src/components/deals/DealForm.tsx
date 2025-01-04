import React, { useState } from 'react';
import { FileText, DollarSign, Tag, Building2, Link as LinkIcon } from 'lucide-react';
import { Deal } from '../../types';
import FormSection from './form/FormSection';

interface DealFormProps {
  onSubmit: (deal: Partial<Deal>) => void;
  initialValues?: Partial<Deal>;
  loading?: boolean;
}

export default function DealForm({ onSubmit, initialValues = {}, loading }: DealFormProps) {
  const [formData, setFormData] = useState({
    title: initialValues.title || '',
    description: initialValues.description || '',
    originalPrice: initialValues.originalPrice || '',
    discountedPrice: initialValues.discountedPrice || '',
    image: initialValues.image || '',
    category: initialValues.category || 'Equipment',
    brand: initialValues.brand || '',
    merchant: initialValues.merchant || '',
    url: initialValues.url || ''
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    onSubmit({
      ...formData,
      originalPrice: Number(formData.originalPrice),
      discountedPrice: Number(formData.discountedPrice),
      soldCount: initialValues.soldCount || 0
    });
  };

  const handleFieldChange = (field: string, value: string) => {
    setFormData(prev => ({ ...prev, [field]: value }));
  };

  const inputClasses = `
    w-full px-4 py-2.5 
    border border-gray-300 rounded-lg
    shadow-sm
    focus:ring-2 focus:ring-emerald-500/20 focus:border-emerald-500
    placeholder:text-gray-400
    transition-all duration-200
  `;

  const categories = ['Equipment', 'Apparel', 'Footwear', 'Accessories'];

  return (
    <form onSubmit={handleSubmit} className="space-y-8">
      <FormSection 
        icon={FileText}
        title="Basic Information"
        description="Enter the main details about the deal"
      >
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-1">Title</label>
          <input
            type="text"
            required
            value={formData.title}
            onChange={(e) => handleFieldChange('title', e.target.value)}
            className={inputClasses}
            placeholder="e.g., TaylorMade Stealth 2 Driver"
          />
        </div>

        <div>
          <label className="block text-sm font-medium text-gray-700 mb-1">Description</label>
          <textarea
            required
            value={formData.description}
            onChange={(e) => handleFieldChange('description', e.target.value)}
            rows={3}
            className={`${inputClasses} resize-none`}
            placeholder="Describe the deal and any important details..."
          />
        </div>
      </FormSection>

      <FormSection 
        icon={DollarSign}
        title="Pricing"
        description="Set the original and discounted prices"
      >
        <div className="grid grid-cols-2 gap-4">
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">Original Price</label>
            <div className="relative">
              <span className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-500">$</span>
              <input
                type="number"
                required
                min="0"
                step="0.01"
                value={formData.originalPrice}
                onChange={(e) => handleFieldChange('originalPrice', e.target.value)}
                className={`${inputClasses} pl-7`}
                placeholder="0.00"
              />
            </div>
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">Discounted Price</label>
            <div className="relative">
              <span className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-500">$</span>
              <input
                type="number"
                required
                min="0"
                step="0.01"
                value={formData.discountedPrice}
                onChange={(e) => handleFieldChange('discountedPrice', e.target.value)}
                className={`${inputClasses} pl-7`}
                placeholder="0.00"
              />
            </div>
          </div>
        </div>
      </FormSection>

      <FormSection 
        icon={Tag}
        title="Product Details"
        description="Categorize and identify the product"
      >
        <div className="grid grid-cols-2 gap-4">
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">Category</label>
            <select
              required
              value={formData.category}
              onChange={(e) => handleFieldChange('category', e.target.value)}
              className={inputClasses}
            >
              {categories.map(cat => (
                <option key={cat} value={cat}>{cat}</option>
              ))}
            </select>
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">Brand</label>
            <input
              type="text"
              required
              value={formData.brand}
              onChange={(e) => handleFieldChange('brand', e.target.value)}
              className={inputClasses}
              placeholder="e.g., TaylorMade"
            />
          </div>
        </div>
      </FormSection>

      <FormSection 
        icon={Building2}
        title="Merchant Information"
        description="Specify where the deal can be purchased"
      >
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-1">Merchant Name</label>
          <input
            type="text"
            required
            value={formData.merchant}
            onChange={(e) => handleFieldChange('merchant', e.target.value)}
            className={inputClasses}
            placeholder="e.g., Golf Galaxy"
          />
        </div>
      </FormSection>

      <FormSection 
        icon={LinkIcon}
        title="Links"
        description="Add product image and purchase URLs"
      >
        <div className="space-y-4">
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">Image URL</label>
            <input
              type="url"
              required
              value={formData.image}
              onChange={(e) => handleFieldChange('image', e.target.value)}
              className={inputClasses}
              placeholder="https://example.com/image.jpg"
            />
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">Deal URL</label>
            <input
              type="url"
              required
              value={formData.url}
              onChange={(e) => handleFieldChange('url', e.target.value)}
              className={inputClasses}
              placeholder="https://example.com/product"
            />
            <p className="mt-1.5 text-sm text-gray-500">
              Enter the URL where users can purchase this deal
            </p>
          </div>
        </div>
      </FormSection>

      <div className="sticky bottom-0 pt-6 mt-8 border-t bg-white">
        <button
          type="submit"
          disabled={loading}
          className="w-full flex justify-center py-2.5 px-4 border border-transparent rounded-lg shadow-sm text-sm font-medium text-white bg-emerald-600 hover:bg-emerald-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-emerald-500 disabled:opacity-50 disabled:cursor-not-allowed transition-colors duration-200"
        >
          {loading ? 'Creating Deal...' : 'Create Deal'}
        </button>
      </div>
    </form>
  );
}