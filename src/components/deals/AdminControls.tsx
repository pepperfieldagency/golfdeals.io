import React from 'react';
import { useAdminCheck } from '../../hooks/useAdminCheck';
import FeaturedDealToggle from './FeaturedDealToggle';
import DealActions from './DealActions';
import { Deal } from '../../types';

interface AdminControlsProps {
  deal: Deal;
  onEdit?: (deal: Deal) => void;
  onDelete?: (dealId: string) => void;
}

export default function AdminControls({ deal, onEdit, onDelete }: AdminControlsProps) {
  const { isAdminUser, loading } = useAdminCheck();

  if (loading || !isAdminUser) {
    return null;
  }

  return (
    <div className="flex items-center gap-2">
      <FeaturedDealToggle dealId={deal.id} />
      {onEdit && onDelete && (
        <DealActions
          deal={deal}
          onEdit={onEdit}
          onDelete={onDelete}
        />
      )}
    </div>
  );
}