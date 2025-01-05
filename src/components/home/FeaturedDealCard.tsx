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

  const handleClick = (e: React.MouseEvent) => {
    e.preventDefault();
    if (user) {
      window.open(deal.url, '_blank', 'noopener,noreferrer');
    } else {
      navigate('/login');
    }
  };

  return (
    <div className="bg-white rounded-2xl shadow-xl overflow-hidden">
      {/* Image Container */}
      <div className="relative aspect-[16/9]">
        <img
          src={deal.image}
          alt={deal.title}
          className="absolute inset-0 w-full h-full object-cover object-center"
        />
        
        {/* Badges */}
        <div className="absolute top-4 left-4 flex flex-wrap items-center gap-2">
          <span className="bg-yellow-400 text-yellow-900 px-3 py-1.5 rounded-full text-sm font-medium shadow-lg">
            Featured Deal
          </span>
          <span className="bg-red-500 text-white px-3 py-1.5 rounded-full text-sm font-medium shadow-lg">
            {discount}% OFF
          </span>
        </div>
      </div>

      {/* Content */}
      <div className="p-4 sm:p-6">
        <div className="mb-4">
          <h3 className="text-xl font-bold text-gray-900 mb-2 line-clamp-2">{deal.title}</h3>
          <p className="text-gray-600 line-clamp-2">{deal.description}</p>
        </div>

        <div className="flex flex-wrap items-center gap-4 mb-6 text-sm text-gray-600">
          <div className="flex items-center gap-2">
            <Building2 className="h-4 w-4 text-gray-400" />
            <span>{deal.brand}</span>
          </div>
          <div className="flex items-center gap-2">
            <Tag className="h-4 w-4 text-gray-400" />
            <span>{deal.category}</span>
          </div>
          <div className="flex items-center gap-2">
            <Calendar className="h-4 w-4 text-gray-400" />
            <span>Added {dateAdded}</span>
          </div>
        </div>

        <div className="flex flex-col sm:flex-row sm:items-center gap-4 sm:gap-0 sm:justify-between">
          <div className="flex items-center gap-3">
            <span className="text-lg text-red-600 line-through">${deal.originalPrice}</span>
            <span className="text-3xl font-bold text-emerald-600">${deal.discountedPrice}</span>
          </div>
          
          <button
            onClick={handleClick}
            type="button"
            className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-6 py-3 bg-emerald-600 text-white rounded-lg font-medium"
          >
            <span>{user ? 'Buy Now' : 'Sign In to Buy'}</span>
            <ExternalLink className="h-4 w-4" />
          </button>
        </div>
      </div>
    </div>
  );
}