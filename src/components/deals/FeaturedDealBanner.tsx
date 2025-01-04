import React from 'react';
import { Star, ExternalLink, Building2, Tag } from 'lucide-react';
import { Deal } from '../../types';

interface FeaturedDealBannerProps {
  deal: Deal;
  onClick: () => void;
}

export default function FeaturedDealBanner({ deal, onClick }: FeaturedDealBannerProps) {
  const discount = Math.round(((deal.originalPrice - deal.discountedPrice) / deal.originalPrice) * 100);

  return (
    <div className="relative overflow-hidden bg-gradient-to-r from-emerald-500 to-emerald-600 rounded-2xl shadow-xl mb-8">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,_rgba(255,255,255,0.2)_1px,_transparent_1px)] [background-size:20px_20px]" />
      </div>

      <div className="relative flex flex-col md:flex-row items-center gap-6 p-6">
        {/* Image */}
        <div className="w-full md:w-72 h-48 rounded-lg overflow-hidden">
          <img
            src={deal.image}
            alt={deal.title}
            className="w-full h-full object-cover transform group-hover:scale-105 transition-transform duration-300"
          />
        </div>

        {/* Content */}
        <div className="flex-1 text-white">
          <div className="flex items-center gap-2 mb-3">
            <Star className="h-5 w-5 fill-yellow-400 text-yellow-400" />
            <span className="text-sm font-medium text-yellow-100">Featured Deal of the Week</span>
          </div>

          <h3 className="text-2xl font-bold mb-2">{deal.title}</h3>
          <p className="text-emerald-50 mb-4 line-clamp-2">{deal.description}</p>

          <div className="flex flex-wrap items-center gap-4 mb-4">
            <div className="flex items-center gap-2">
              <Building2 className="h-5 w-5 text-emerald-200" />
              <span className="text-emerald-50">{deal.brand}</span>
            </div>

            <div className="flex items-center gap-2">
              <Tag className="h-5 w-5 text-emerald-200" />
              <span className="text-emerald-50">{deal.category}</span>
            </div>
          </div>

          <div className="flex items-center gap-4">
            <span className="text-lg text-emerald-200 line-through">${deal.originalPrice}</span>
            <span className="text-3xl font-bold">${deal.discountedPrice}</span>
            <div className="bg-yellow-400 text-yellow-900 px-3 py-1.5 rounded-full text-sm font-medium shadow-sm">
              {discount}% OFF
            </div>
          </div>
        </div>

        {/* CTA Button - Right aligned on desktop */}
        <div className="w-full md:w-auto md:self-center md:ml-auto">
          <button
            onClick={onClick}
            className="w-full md:w-auto inline-flex items-center justify-center gap-2 px-6 py-3 bg-yellow-400 text-yellow-900 rounded-lg font-medium hover:bg-yellow-500 transition-colors shadow-lg hover:shadow-xl"
          >
            Buy Now
            <ExternalLink className="h-5 w-5" />
          </button>
        </div>
      </div>
    </div>
  );
}