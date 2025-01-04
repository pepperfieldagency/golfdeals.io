import React from 'react';
import { Star } from 'lucide-react';
import { useFeaturedDeal } from '../../hooks/useFeaturedDeal';

interface FeaturedDealToggleProps {
  dealId: string;
}

export default function FeaturedDealToggle({ dealId }: FeaturedDealToggleProps) {
  const { featuredDealId, setFeaturedDeal } = useFeaturedDeal();
  const isFeatured = featuredDealId === dealId;

  const handleToggle = async () => {
    try {
      await setFeaturedDeal(isFeatured ? null : dealId);
    } catch (error) {
      console.error('Error toggling featured deal:', error);
    }
  };

  return (
    <button
      onClick={handleToggle}
      className={`p-1.5 rounded-full transition-colors ${
        isFeatured
          ? 'bg-yellow-400 text-white hover:bg-yellow-500'
          : 'bg-gray-100 text-gray-400 hover:bg-gray-200'
      }`}
      title={isFeatured ? 'Remove from featured' : 'Set as featured deal'}
    >
      <Star className="h-4 w-4" fill={isFeatured ? 'currentColor' : 'none'} />
    </button>
  );
}