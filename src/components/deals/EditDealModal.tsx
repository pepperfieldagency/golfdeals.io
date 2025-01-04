import React from 'react';
import { X } from 'lucide-react';
import { Deal } from '../../types';
import DealForm from './DealForm';
import { useFeaturedDeals } from '../../hooks/useFeaturedDeals';

interface EditDealModalProps {
  deal: Deal;
  onClose: () => void;
  onSubmit: (deal: Partial<Deal>) => void;
  loading?: boolean;
}

export default function EditDealModal({ deal, onClose, onSubmit, loading }: EditDealModalProps) {
  const { featuredDeals } = useFeaturedDeals();
  const isFeatured = featuredDeals.includes(deal.id);

  return (
    <div className="fixed inset-0 z-50 overflow-y-auto">
      <div className="flex items-center justify-center min-h-screen px-4">
        <div className="fixed inset-0 bg-gray-500 bg-opacity-75 transition-opacity" onClick={onClose} />
        
        <div className="relative bg-white rounded-lg max-w-md w-full p-6">
          <div className="flex justify-between items-center mb-4">
            <div>
              <h3 className="text-lg font-medium">Edit Deal</h3>
              {isFeatured && (
                <span className="inline-flex items-center px-2 py-0.5 rounded text-xs font-medium bg-yellow-100 text-yellow-800">
                  Featured
                </span>
              )}
            </div>
            <button onClick={onClose} className="text-gray-400 hover:text-gray-500">
              <X className="h-5 w-5" />
            </button>
          </div>
          
          <DealForm
            initialValues={deal}
            onSubmit={onSubmit}
            loading={loading}
          />
        </div>
      </div>
    </div>
  );
}