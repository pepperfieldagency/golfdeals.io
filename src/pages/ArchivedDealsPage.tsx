import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { ArrowLeft, RotateCcw, Trash2 } from 'lucide-react';
import Header from '../components/Header';
import DealList from '../components/deals/DealList';
import DeleteConfirmationModal from '../components/modals/DeleteConfirmationModal';
import { useArchivedDeals } from '../hooks/useArchivedDeals';
import { useDeals } from '../hooks/useDeals';
import { Deal } from '../types';

export default function ArchivedDealsPage() {
  const navigate = useNavigate();
  const { archivedDeals, restoreDeal, permanentlyDeleteDeal } = useArchivedDeals();
  const { addDeal } = useDeals();
  const [dealToDelete, setDealToDelete] = useState<Deal | null>(null);

  const handleRestore = async (dealId: string) => {
    const dealToRestore = archivedDeals.find(d => d.id === dealId);
    if (dealToRestore) {
      await addDeal(dealToRestore);
      restoreDeal(dealId);
    }
  };

  const handleDelete = (deal: Deal) => {
    setDealToDelete(deal);
  };

  const confirmDelete = () => {
    if (dealToDelete) {
      permanentlyDeleteDeal(dealToDelete.id);
      setDealToDelete(null);
    }
  };

  return (
    <div className="min-h-screen bg-gray-50">
      <Header />
      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="flex items-center justify-between mb-6">
          <div className="flex items-center gap-4">
            <button
              onClick={() => navigate('/deals')}
              className="flex items-center gap-2 text-gray-600 hover:text-gray-900"
            >
              <ArrowLeft className="h-5 w-5" />
              <span>Back to Deals</span>
            </button>
            <h2 className="text-2xl font-bold text-gray-900">Archived Deals</h2>
          </div>
        </div>

        {archivedDeals.length === 0 ? (
          <div className="text-center py-12">
            <p className="text-gray-500">No archived deals found.</p>
          </div>
        ) : (
          <DealList
            deals={archivedDeals}
            customActions={[
              {
                icon: RotateCcw,
                label: 'Restore Deal',
                onClick: handleRestore,
                className: 'text-emerald-600 hover:text-emerald-700 hover:bg-emerald-50'
              },
              {
                icon: Trash2,
                label: 'Delete Permanently',
                onClick: (dealId) => {
                  const deal = archivedDeals.find(d => d.id === dealId);
                  if (deal) handleDelete(deal);
                },
                className: 'text-red-600 hover:text-red-700 hover:bg-red-50'
              }
            ]}
          />
        )}
      </main>

      {/* Delete Confirmation Modal */}
      {dealToDelete && (
        <DeleteConfirmationModal
          title="Delete Deal Permanently"
          message="Are you sure you want to permanently delete this deal? This action cannot be undone."
          onConfirm={confirmDelete}
          onCancel={() => setDealToDelete(null)}
        />
      )}
    </div>
  );
}