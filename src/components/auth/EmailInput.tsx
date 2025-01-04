import React from 'react';
import { Mail } from 'lucide-react';

interface EmailInputProps {
  value: string;
  onChange: (value: string) => void;
  disabled?: boolean;
}

export default function EmailInput({ value, onChange, disabled }: EmailInputProps) {
  return (
    <div>
      <label htmlFor="email" className="block text-sm font-medium text-gray-700">
        Email address
      </label>
      <div className="mt-1 relative rounded-md shadow-sm">
        <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
          <Mail className="h-5 w-5 text-gray-400" />
        </div>
        <input
          id="email"
          name="email"
          type="email"
          autoComplete="email"
          required
          className="block w-full pl-10 pr-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-emerald-500 focus:border-emerald-500"
          value={value}
          onChange={(e) => onChange(e.target.value)}
          disabled={disabled}
        />
      </div>
    </div>
  );
}