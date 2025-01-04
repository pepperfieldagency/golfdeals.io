import React from 'react';
import { FileText } from 'lucide-react';

interface BasicInfoFieldsProps {
  title: string;
  description: string;
  onChange: (field: string, value: string) => void;
}

export default function BasicInfoFields({ title, description, onChange }: BasicInfoFieldsProps) {
  return (
    <div className="space-y-4">
      <h3 className="text-lg font-medium text-gray-900">Basic Information</h3>
      
      <div>
        <label className="block text-sm font-medium text-gray-700">Title</label>
        <div className="mt-1 relative">
          <FileText className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400 h-5 w-5" />
          <input
            type="text"
            required
            value={title}
            onChange={(e) => onChange('title', e.target.value)}
            className="pl-10 block w-full rounded-md border-gray-300 shadow-sm focus:border-emerald-500 focus:ring-emerald-500"
            placeholder="e.g., TaylorMade Stealth 2 Driver"
          />
        </div>
      </div>

      <div>
        <label className="block text-sm font-medium text-gray-700">Description</label>
        <div className="mt-1">
          <textarea
            required
            value={description}
            onChange={(e) => onChange('description', e.target.value)}
            rows={3}
            className="block w-full rounded-md border-gray-300 shadow-sm focus:border-emerald-500 focus:ring-emerald-500"
            placeholder="Describe the deal and any important details..."
          />
        </div>
      </div>
    </div>
  );
}