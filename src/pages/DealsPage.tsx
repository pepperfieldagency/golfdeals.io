import React, { useState } from 'react';
import { useAuth } from '../contexts/AuthContext';
import { isAdmin } from '../utils/adminUtils';
import Header from '../components/Header';
import CategoryBar from '../components/CategoryBar';
import DealCard from '../components/DealCard';
import DealList from '../components/deals/DealList';
import ViewToggle from '../components/deals/ViewToggle';
import SortDropdown from '../components/deals/SortDropdown';
import AddDealButton from '../components/deals/AddDealButton';
import EditDealModal from '../components/deals/EditDealModal';
import FeaturedDealBanner from '../components/deals/FeaturedDealBanner';
import { useDeals } from '../hooks/useDeals';
import { useViewPreference } from '../hooks/useViewPreference';
import { useFeaturedDeal } from '../hooks/useFeaturedDeal';
import { Deal } from '../types';

export default function DealsPage() {
  const { user } = useAuth();
  const { deals, loading, addDeal, updateDeal, deleteDeal } = useDeals();
  const { featuredDealId, setFeaturedDeal } = useFeaturedDeal();
  const [view, setView] = useViewPreference();
  const [sortBy, setSortBy] = useState<string>('popular');
  const [selectedCategory, setSelectedCategory] = useState<string>('all');
  const [editingDeal, setEditingDeal] = useState<Deal | null>(null);

  const isUserAdmin = isAdmin(user);

  const filterAndSortDeals = (deals: Deal[]): Deal[] => {
    // First filter by category
    let filteredDeals = selectedCategory === 'all' 
      ? deals 
      : deals.filter(deal => deal.category === selectedCategory);

    // Then sort based on selected criteria
    switch (sortBy) {
      case 'savings':
        return [...filteredDeals].sort((a, b) => {
          // Calculate absolute savings amount
          const savingsA = a.originalPrice - a.discountedPrice;
          const savingsB = b.originalPrice - b.discountedPrice;
          // Sort by highest savings first
          return savingsB - savingsA;
        });
      case 'newest':
        return [...filteredDeals].sort((a, b) => {
          // Convert dates to timestamps and sort newest first
          const dateA = new Date(a.dateAdded).getTime();
          const dateB = new Date(b.dateAdded).getTime();
          return dateB - dateA;
        });
      default: // popular
        return [...filteredDeals].sort((a, b) => (b.views || 0) - (a.views || 0));
    }
  };

  const filteredAndSortedDeals = filterAndSortDeals(deals);
  const featuredDeal = deals.find(deal => deal.id === featuredDealId);
  const remainingDeals = filteredAndSortedDeals.filter(deal => deal.id !== featuredDealId);

  const handleFeaturedDealClick = () => {
    if (featuredDeal) {
      window.open(featuredDeal.url, '_blank', 'noopener,noreferrer');
    }
  };

  const handleToggleFeatured = async (dealId: string) => {
    if (!isUserAdmin) return;
    try {
      await setFeaturedDeal(featuredDealId === dealId ? null : dealId);
    } catch (error) {
      console.error('Error toggling featured deal:', error);
    }
  };

  return (
    <div className="min-h-screen bg-gray-50">
      <Header />
      <CategoryBar onCategorySelect={setSelectedCategory} selectedCategory={selectedCategory} />
      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-4 mb-6">
          <div>
            <h2 className="text-2xl font-bold text-gray-900">
              {selectedCategory === 'all' ? 'All Member Deals' : `${selectedCategory} Deals`}
            </h2>
            <p className="text-gray-600">
              Welcome back, {user?.displayName || 'Member'}
              {isUserAdmin && <span className="ml-2 text-emerald-600">(Admin)</span>}
            </p>
          </div>
          <div className="flex items-center gap-4">
            <ViewToggle view={view} onViewChange={setView} />
            <SortDropdown value={sortBy} onChange={setSortBy} />
            {isUserAdmin && <AddDealButton onAddDeal={addDeal} loading={loading} />}
          </div>
        </div>

        {/* Featured Deal */}
        {featuredDeal && (
          <FeaturedDealBanner 
            deal={featuredDeal} 
            onClick={handleFeaturedDealClick}
          />
        )}
        
        {remainingDeals.length === 0 ? (
          <div className="text-center py-12">
            <p className="text-gray-500">No deals found in this category.</p>
          </div>
        ) : view === 'grid' ? (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
            {remainingDeals.map((deal) => (
              <DealCard
                key={deal.id}
                deal={deal}
                onEdit={isUserAdmin ? setEditingDeal : undefined}
                onDelete={isUserAdmin ? deleteDeal : undefined}
              />
            ))}
          </div>
        ) : (
          <DealList
            deals={remainingDeals}
            featuredDealId={featuredDealId}
            onToggleFeatured={isUserAdmin ? handleToggleFeatured : undefined}
            onEdit={isUserAdmin ? setEditingDeal : undefined}
            onDelete={isUserAdmin ? deleteDeal : undefined}
          />
        )}
      </main>

      {editingDeal && isUserAdmin && (
        <EditDealModal
          deal={editingDeal}
          onClose={() => setEditingDeal(null)}
          onSubmit={(updatedDeal) => {
            updateDeal({ ...updatedDeal, id: editingDeal.id });
            setEditingDeal(null);
          }}
          loading={loading}
        />
      )}
    </div>
  );
}