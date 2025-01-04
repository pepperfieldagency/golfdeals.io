import { useState, useCallback, useEffect } from 'react';
import { Deal } from '../types';

const ARCHIVED_DEALS_KEY = 'dealfinder_archived_deals';

export function useArchivedDeals() {
  const [archivedDeals, setArchivedDeals] = useState<Deal[]>(() => {
    const saved = localStorage.getItem(ARCHIVED_DEALS_KEY);
    return saved ? JSON.parse(saved) : [];
  });

  // Save to localStorage whenever archivedDeals changes
  useEffect(() => {
    localStorage.setItem(ARCHIVED_DEALS_KEY, JSON.stringify(archivedDeals));
  }, [archivedDeals]);

  const archiveDeal = useCallback((deal: Deal) => {
    setArchivedDeals(prev => {
      // Check if deal already exists in archive
      const exists = prev.some(d => d.id === deal.id);
      if (exists) return prev;
      
      // Add new deal to beginning of archive with timestamp
      const newDeal = { 
        ...deal, 
        archivedAt: new Date().toISOString() 
      };
      return [newDeal, ...prev];
    });
  }, []);

  const restoreDeal = useCallback((dealId: string) => {
    setArchivedDeals(prev => prev.filter(deal => deal.id !== dealId));
  }, []);

  const permanentlyDeleteDeal = useCallback((dealId: string) => {
    setArchivedDeals(prev => prev.filter(deal => deal.id !== dealId));
  }, []);

  return {
    archivedDeals,
    archiveDeal,
    restoreDeal,
    permanentlyDeleteDeal
  };
}