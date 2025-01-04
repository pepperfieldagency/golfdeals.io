import React from 'react';
import { LucideIcon } from 'lucide-react';
import { Deal } from '../../types';
import DealListItem from './list/DealListItem';

interface CustomAction {
  icon: LucideIcon;
  label: string;
  onClick: (dealId: string) => void;
  className?: string;
}

interface DealListProps {
  deals: Deal[];
  onEdit?: (deal: Deal) => void;
  onDelete?: (dealId: string) => void;
  customActions?: CustomAction[];
  featuredDealId?: string | null;
  onToggleFeatured?: (dealId: string) => void;
}

export default function DealList({ 
  deals, 
  onEdit, 
  onDelete, 
  customActions,
  featuredDealId,
  onToggleFeatured 
}: DealListProps) {
  // Ensure each deal has a unique ID and is only rendered once
  const uniqueDeals = Array.from(new Map(deals.map(deal => [deal.id, deal])).values());

  return (
    <div className="space-y-6">
      {uniqueDeals.map((deal) => (
        <DealListItem
          key={deal.id}
          deal={deal}
          onEdit={onEdit}
          onDelete={onDelete}
          customActions={customActions}
          isFeatured={deal.id === featuredDealId}
          onToggleFeatured={onToggleFeatured}
        />
      ))}
    </div>
  );
}