import React from 'react';
import { useDeals } from '../../hooks/useDeals';
import { useFeaturedDeal } from '../../hooks/useFeaturedDeal';
import FeaturedDealCard from './FeaturedDealCard';
import LoginPromptCard from './LoginPromptCard';

export default function FeaturedDealSection() {
  const { deals } = useDeals();
  const { featuredDealId } = useFeaturedDeal();
  
  const featuredDeal = featuredDealId 
    ? deals.find(deal => deal.id === featuredDealId)
    : deals[0];

  if (!featuredDeal) {
    return null;
  }

  return (
    <div className="grid md:grid-cols-5 gap-0 md:gap-6">
      <div className="md:col-span-3">
        <FeaturedDealCard deal={featuredDeal} />
      </div>
      <div className="md:col-span-2 mt-4 md:mt-0">
        <LoginPromptCard />
      </div>
    </div>
  );
}