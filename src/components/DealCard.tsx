import React from 'react';
import { Building2, Calendar, ExternalLink } from 'lucide-react';
import { Deal } from '../types';
import AdminControls from './deals/AdminControls';

interface DealCardProps {
  deal: Deal;
  onEdit?: (deal: Deal) => void;
  onDelete?: (dealId: string) => void;
}

export default function DealCard({ deal, onEdit, onDelete }: DealCardProps) {
  const discount = Math.round(((deal.originalPrice - deal.discountedPrice) / deal.originalPrice) * 100);
  const dateAdded = new Date(deal.dateAdded).toLocaleDateString();

  return (
    <div className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-lg transition-shadow">
      <div className="relative w-full pt-[75%]">
        <img
          src={deal.image}
          alt={deal.title}
          className="absolute inset-0 w-full h-full object-cover object-center"
        />
        <div className="absolute top-4 left-4 bg-red-500 text-white px-3 py-1.5 rounded-full font-medium shadow-sm">
          {discount}% OFF
        </div>
        <div className="absolute top-4 right-4">
          <AdminControls 
            deal={deal}
            onEdit={onEdit}
            onDelete={onDelete}
          />
        </div>
      </div>
      
      <div className="p-4">
        <h3 className="text-lg font-semibold mb-2">{deal.title}</h3>
        <p className="text-gray-600 text-sm mb-4">{deal.description}</p>
        
        <div className="flex items-center justify-between mb-4">
          <div className="flex items-center space-x-2">
            <Building2 className="h-4 w-4 text-gray-400" />
            <span className="text-sm text-gray-600">{deal.brand}</span>
          </div>
          <div className="flex items-center space-x-2">
            <Calendar className="h-4 w-4 text-gray-400" />
            <span className="text-sm text-gray-600">Added {dateAdded}</span>
          </div>
        </div>
        
        <div className="flex items-center justify-between">
          <div>
            <span className="text-red-600 line-through text-sm">${deal.originalPrice}</span>
            <span className="text-2xl font-bold text-emerald-600 ml-2">${deal.discountedPrice}</span>
          </div>
          <a
            href={deal.url}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center px-4 py-2 border border-transparent text-sm font-medium rounded-md shadow-sm text-white bg-emerald-600 hover:bg-emerald-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-emerald-500"
          >
            Buy Now
            <ExternalLink className="ml-2 h-4 w-4" />
          </a>
        </div>
      </div>
    </div>
  );
}