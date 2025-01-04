import React from 'react';
import { ExternalLink, Building2, Calendar } from 'lucide-react';
import { Deal } from '../../../types';
import DealActions from '../DealActions';
import FeaturedToggle from '../FeaturedToggle';

interface CustomAction {
  icon: LucideIcon;
  label: string;
  onClick: (dealId: string) => void;
  className?: string;
}

interface DealListItemProps {
  deal: Deal;
  onEdit?: (deal: Deal) => void;
  onDelete?: (dealId: string) => void;
  customActions?: CustomAction[];
  isFeatured?: boolean;
  onToggleFeatured?: (dealId: string) => void;
}

export default function DealListItem({ 
  deal, 
  onEdit, 
  onDelete, 
  customActions,
  isFeatured,
  onToggleFeatured
}: DealListItemProps) {
  const discount = Math.round(
    ((deal.originalPrice - deal.discountedPrice) / deal.originalPrice) * 100
  );
  const dateAdded = new Date(deal.dateAdded).toLocaleDateString();

  return (
    <div className="bg-white rounded-lg shadow-md hover:shadow-lg transition-all duration-200">
      <div className="sm:p-4">
        <div className="flex flex-col sm:flex-row gap-4">
          {/* Image - Full width on mobile, fixed width on desktop */}
          <div className="w-full sm:w-32 flex-shrink-0">
            <img
              src={deal.image}
              alt={deal.title}
              className="w-full h-48 sm:h-24 object-cover sm:rounded-lg"
            />
          </div>
          
          {/* Content */}
          <div className="flex-1 min-w-0 px-4 sm:px-0 pb-4 sm:pb-0">
            {/* Title and Actions Row */}
            <div className="flex items-start justify-between gap-4">
              <div className="min-w-0">
                <h3 className="text-base sm:text-lg font-semibold text-gray-900 mb-1">{deal.title}</h3>
                <p className="text-sm text-gray-600 mb-2 line-clamp-2">{deal.description}</p>
                <div className="flex flex-col sm:flex-row sm:items-center gap-2 sm:gap-4">
                  <div className="flex items-center gap-2 text-gray-500 text-sm">
                    <Calendar className="h-4 w-4" />
                    <span>{dateAdded}</span>
                  </div>
                  <div className="flex items-center gap-2 text-gray-600 text-sm">
                    <Building2 className="h-4 w-4" />
                    <span>{deal.brand}</span>
                  </div>
                </div>
              </div>
              
              {/* Standard or Custom Actions */}
              <div className="hidden sm:flex items-center gap-2">
                {onToggleFeatured && (
                  <FeaturedToggle
                    isFeatured={isFeatured || false}
                    onToggle={() => onToggleFeatured(deal.id)}
                  />
                )}
                {customActions ? (
                  customActions.map((action, index) => {
                    const Icon = action.icon;
                    return (
                      <button
                        key={index}
                        onClick={() => action.onClick(deal.id)}
                        className={`flex items-center gap-2 px-3 py-1.5 rounded-md text-sm ${action.className}`}
                      >
                        <Icon className="h-4 w-4" />
                        <span>{action.label}</span>
                      </button>
                    );
                  })
                ) : (
                  onEdit && onDelete && (
                    <DealActions
                      deal={deal}
                      onEdit={onEdit}
                      onDelete={onDelete}
                    />
                  )
                )}
              </div>
            </div>

            {/* Price and Action Buttons */}
            <div className="mt-3 sm:mt-2 flex flex-col sm:flex-row items-start sm:items-center gap-3 sm:justify-between">
              <div className="flex flex-wrap items-center gap-2 sm:gap-3">
                <span className="text-sm text-red-600 line-through">
                  ${deal.originalPrice}
                </span>
                <span className="text-lg font-bold text-emerald-600">
                  ${deal.discountedPrice}
                </span>
                <div className="bg-red-500 text-white px-3 py-1 rounded-full text-sm font-medium shadow-sm">
                  {discount}% OFF
                </div>
              </div>

              <div className="w-full sm:w-auto flex items-center justify-between gap-2">
                {/* Mobile Actions */}
                <div className="sm:hidden flex items-center gap-2">
                  {onToggleFeatured && (
                    <FeaturedToggle
                      isFeatured={isFeatured || false}
                      onToggle={() => onToggleFeatured(deal.id)}
                    />
                  )}
                  {customActions ? (
                    customActions.map((action, index) => {
                      const Icon = action.icon;
                      return (
                        <button
                          key={index}
                          onClick={() => action.onClick(deal.id)}
                          className={`flex items-center gap-2 px-3 py-1.5 rounded-md text-sm ${action.className}`}
                        >
                          <Icon className="h-4 w-4" />
                          <span>{action.label}</span>
                        </button>
                      );
                    })
                  ) : (
                    onEdit && onDelete && (
                      <DealActions
                        deal={deal}
                        onEdit={onEdit}
                        onDelete={onDelete}
                      />
                    )
                  )}
                </div>
                
                <a
                  href={deal.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex-1 sm:flex-initial inline-flex items-center justify-center gap-1.5 px-4 py-2 sm:py-1.5 bg-emerald-600 text-white text-sm rounded-lg hover:bg-emerald-700 transition-colors"
                >
                  <span>Buy Now</span>
                  <ExternalLink className="h-3.5 w-3.5" />
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}