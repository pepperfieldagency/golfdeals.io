import React from 'react';
import { useDeals } from '../hooks/useDeals';
import { useFeaturedDeals } from '../hooks/useFeaturedDeals';
import DealCard from './DealCard';
import LoginPrompt from './LoginPrompt';
import { isAdmin } from '../utils/adminUtils';
import { useAuth } from '../contexts/AuthContext';

interface DealGridProps {
  selectedCategory?: string;
}

export default function DealGrid({ selectedCategory = 'all' }: DealGridProps) {
  const { user } = useAuth();
  const { deals } = useDeals();
  const { featuredDeals, toggleFeaturedDeal } = useFeaturedDeals();
  const isUserAdmin = isAdmin(user);

  // Filter deals by category first
  const filteredDeals = selectedCategory === 'all'
    ? deals
    : deals.filter(deal => deal.category === selectedCategory);

  // Then get featured deals from the filtered list
  const featuredDealsList = filteredDeals.filter(deal => featuredDeals.includes(deal.id));
  
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
      {/* Featured Deals */}
      {featuredDealsList.map((deal) => (
        <DealCard
          key={deal.id}
          deal={deal}
          isFeatured={true}
          onToggleFeatured={isUserAdmin ? () => toggleFeaturedDeal(deal.id) : undefined}
        />
      ))}
      
      {/* Only show login prompt for non-authenticated users */}
      {!user && <LoginPrompt />}
    </div>
  );
}