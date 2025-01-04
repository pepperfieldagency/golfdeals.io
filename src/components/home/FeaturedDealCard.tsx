import React from 'react';
import { useNavigate } from 'react-router-dom';
import { Building2, Calendar, ExternalLink, Tag } from 'lucide-react';
import { useAuth } from '../../contexts/AuthContext';
import { Deal } from '../../types';

interface FeaturedDealCardProps {
  deal: Deal;
}

export default function FeaturedDealCard({ deal }: FeaturedDealCardProps) {
  const { user } = useAuth();
  const navigate = useNavigate();
  const discount = Math.round(((deal.originalPrice - deal.discountedPrice) / deal.originalPrice) * 100);
  const dateAdded = new Date(deal.dateAdded).toLocaleDateString();

  const handleViewDeal = (e: React.MouseEvent) => {
    e.preventDefault();
    if (!user) {
      navigate('/login');
    } else {
      window.open(deal.url, '_blank', 'noopener,noreferrer');
    }
  };

  return (
    <div className="bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-xl transition-shadow h-full">
      <div className="relative aspect-[16/9] sm:aspect-[2/1] md:aspect-[16/9]">
        <img
          src={deal.image}
          alt={deal.title}
          className="absolute inset-0 w-full h-full object-cover object-center"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent" />
        <div className="absolute top-4 left-4 flex flex-wrap items-center gap-2">
          <span className="bg-emerald-500 text-white px-3 py-1.5 rounded-full text-sm font-medium">
            Featured Deal
          </span>
          <span className="bg-red-500 text-white px-3 py-1.5 rounded-full text-sm font-medium">
            {discount}% OFF
          </span>
        </div>
      </div>
      
      <div className="p-4 sm:p-6">
        <h3 className="text-lg sm:text-xl font-bold text-gray-900 mb-2">{deal.title}</h3>
        <p className="text-gray-600 text-sm sm:text-base mb-4 line-clamp-2">{deal.description}</p>
        
        <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4 mb-4">
          <div className="flex flex-wrap items-center gap-4">
            <div className="flex items-center gap-2">
              <Building2 className="h-4 w-4 text-gray-400" />
              <span className="text-sm text-gray-600">{deal.brand}</span>
            </div>
            <div className="flex items-center gap-2">
              <Tag className="h-4 w-4 text-gray-400" />
              <span className="text-sm text-gray-600">{deal.category}</span>
            </div>
          </div>
          <div className="flex items-center gap-2">
            <Calendar className="h-4 w-4 text-gray-400" />
            <span className="text-sm text-gray-600">Added {dateAdded}</span>
          </div>
        </div>
        
        <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
          <div className="flex items-center gap-4">
            <span className="text-xl sm:text-2xl text-red-600 line-through">${deal.originalPrice}</span>
            <span className="text-xl sm:text-2xl font-bold text-emerald-600">${deal.discountedPrice}</span>
          </div>
          <button
            onClick={handleViewDeal}
            className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-6 py-3 bg-emerald-600 text-white rounded-lg hover:bg-emerald-700 transition-colors"
          >
            <span>View Deal</span>
            <ExternalLink className="h-4 w-4" />
          </button>
        </div>
      </div>
    </div>
  );
}