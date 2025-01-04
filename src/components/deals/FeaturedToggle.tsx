import React from 'react';
import { Star } from 'lucide-react';

interface FeaturedToggleProps {
  isFeatured: boolean;
  onToggle: () => void;
  disabled?: boolean;
}

export default function FeaturedToggle({ isFeatured, onToggle, disabled }: FeaturedToggleProps) {
  return (
    <button
      onClick={(e) => {
        e.stopPropagation();
        onToggle();
      }}
      disabled={disabled}
      className={`
        p-1.5 rounded-full transition-colors
        ${isFeatured
          ? 'bg-yellow-400 text-white hover:bg-yellow-500'
          : 'bg-gray-100 text-gray-400 hover:bg-gray-200'
        }
        ${disabled ? 'opacity-50 cursor-not-allowed' : 'cursor-pointer'}
      `}
      title={isFeatured ? 'Remove from featured' : 'Set as featured deal'}
    >
      <Star className="h-4 w-4" fill={isFeatured ? 'currentColor' : 'none'} />
    </button>
  );
}