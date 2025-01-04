import React from 'react';
import { LayoutGrid, List } from 'lucide-react';

interface ViewToggleProps {
  view: 'grid' | 'list';
  onViewChange: (view: 'grid' | 'list') => void;
}

export default function ViewToggle({ view, onViewChange }: ViewToggleProps) {
  return (
    <div className="hidden md:inline-flex rounded-lg border border-gray-200 bg-white p-1 shadow-sm">
      <button
        onClick={() => onViewChange('grid')}
        className={`inline-flex items-center gap-2 rounded-md px-3 py-1.5 text-sm transition-colors ${
          view === 'grid'
            ? 'bg-emerald-100 text-emerald-600'
            : 'text-gray-500 hover:text-gray-700'
        }`}
      >
        <LayoutGrid className="h-4 w-4" />
        <span className="font-medium">Grid</span>
      </button>

      <button
        onClick={() => onViewChange('list')}
        className={`inline-flex items-center gap-2 rounded-md px-3 py-1.5 text-sm transition-colors ${
          view === 'list'
            ? 'bg-emerald-100 text-emerald-600'
            : 'text-gray-500 hover:text-gray-700'
        }`}
      >
        <List className="h-4 w-4" />
        <span className="font-medium">List</span>
      </button>
    </div>
  );
}