import React, { useState } from 'react';
import { Plus, X } from 'lucide-react';
import DealForm from './DealForm';
import { Deal } from '../../types';

interface AddDealButtonProps {
  onAddDeal: (deal: Partial<Deal>) => void;
  loading?: boolean;
}

export default function AddDealButton({ onAddDeal, loading }: AddDealButtonProps) {
  const [isModalOpen, setIsModalOpen] = useState(false);

  return (
    <>
      <button
        onClick={() => setIsModalOpen(true)}
        className="inline-flex items-center gap-2 px-4 py-2 bg-emerald-600 text-white rounded-lg hover:bg-emerald-700 transition-all duration-200 shadow-sm hover:shadow-md transform hover:-translate-y-0.5"
      >
        <Plus className="h-5 w-5" />
        <span className="font-medium">Add Deal</span>
      </button>

      {isModalOpen && (
        <div className="fixed inset-0 z-50 overflow-y-auto bg-gray-500/75 backdrop-blur-sm">
          <div className="flex min-h-screen items-center justify-center p-4">
            <div className="relative bg-white rounded-xl shadow-xl max-w-2xl w-full p-6">
              {/* Header */}
              <div className="flex items-center justify-between pb-6 mb-6 border-b">
                <div>
                  <h2 className="text-xl font-semibold text-gray-900">Add New Deal</h2>
                  <p className="text-sm text-gray-500 mt-1">
                    Fill in the details below to create a new deal
                  </p>
                </div>
                <button 
                  onClick={() => setIsModalOpen(false)}
                  className="p-2 hover:bg-gray-100 rounded-full transition-colors"
                >
                  <X className="h-5 w-5 text-gray-500" />
                </button>
              </div>
              
              <div className="max-h-[calc(100vh-200px)] overflow-y-auto px-2 -mx-2">
                <DealForm
                  onSubmit={(deal) => {
                    onAddDeal(deal);
                    setIsModalOpen(false);
                  }}
                  loading={loading}
                />
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
}