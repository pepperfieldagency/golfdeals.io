import { useState, useCallback } from 'react';

const FEATURED_DEALS_KEY = 'featuredDeals';

export function useFeaturedDeals() {
  const [featuredDeals, setFeaturedDeals] = useState<string[]>(() => {
    const saved = localStorage.getItem(FEATURED_DEALS_KEY);
    return saved ? JSON.parse(saved) : [];
  });

  const toggleFeaturedDeal = useCallback((dealId: string) => {
    setFeaturedDeals(prev => {
      const newFeaturedDeals = prev.includes(dealId)
        ? prev.filter(id => id !== dealId)
        : [...prev, dealId];
      
      localStorage.setItem(FEATURED_DEALS_KEY, JSON.stringify(newFeaturedDeals));
      return newFeaturedDeals;
    });
  }, []);

  return {
    featuredDeals,
    toggleFeaturedDeal,
  };
}