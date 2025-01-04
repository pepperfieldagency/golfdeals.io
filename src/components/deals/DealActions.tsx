import React from 'react';
import { MoreVertical, Edit2, Trash2 } from 'lucide-react';
import { Deal } from '../../types';

interface DealActionsProps {
  deal: Deal;
  onEdit: (deal: Deal) => void;
  onDelete: (dealId: string) => void;
}

export default function DealActions({ deal, onEdit, onDelete }: DealActionsProps) {
  const [isOpen, setIsOpen] = React.useState(false);

  return (
    <div className="relative">
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="p-1 rounded-full hover:bg-gray-100"
      >
        <MoreVertical className="h-5 w-5 text-gray-500" />
      </button>

      {isOpen && (
        <div className="absolute right-0 mt-2 w-48 rounded-md shadow-lg bg-white ring-1 ring-black ring-opacity-5 z-10">
          <div className="py-1">
            <button
              onClick={() => {
                onEdit(deal);
                setIsOpen(false);
              }}
              className="flex items-center px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 w-full"
            >
              <Edit2 className="h-4 w-4 mr-2" />
              Edit Deal
            </button>
            <button
              onClick={() => {
                onDelete(deal.id);
                setIsOpen(false);
              }}
              className="flex items-center px-4 py-2 text-sm text-red-600 hover:bg-red-50 w-full"
            >
              <Trash2 className="h-4 w-4 mr-2" />
              Delete Deal
            </button>
          </div>
        </div>
      )}
    </div>
  );
}