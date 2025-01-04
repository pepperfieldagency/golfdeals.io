import React, { useState } from 'react';
import { Club, Shirt, Footprints, ShoppingBag, ChevronDown, ChevronUp } from 'lucide-react';
import { useAuth } from '../contexts/AuthContext';

const iconMap: Record<string, React.ReactNode> = {
  club: <Club className="h-5 w-5" />,
  shirt: <Shirt className="h-5 w-5" />,
  footprints: <Footprints className="h-5 w-5" />,
  'shopping-bag': <ShoppingBag className="h-5 w-5" />,
};

interface CategoryBarProps {
  onCategorySelect?: (category: string) => void;
  selectedCategory?: string;
}

export default function CategoryBar({ onCategorySelect, selectedCategory = 'all' }: CategoryBarProps) {
  const { user } = useAuth();
  const [isCategoryMenuOpen, setIsCategoryMenuOpen] = useState(false);

  // Don't render anything if user is not authenticated
  if (!user) {
    return null;
  }

  const categories = [
    { id: 'all', name: 'All Deals', icon: 'shopping-bag' },
    { id: 'Equipment', name: 'Equipment', icon: 'club' },
    { id: 'Apparel', name: 'Apparel', icon: 'shirt' },
    { id: 'Footwear', name: 'Footwear', icon: 'footprints' },
    { id: 'Accessories', name: 'Accessories', icon: 'shopping-bag' },
  ];

  return (
    <div className="bg-white border-b">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Desktop Categories */}
        <div className="hidden md:flex justify-between py-3">
          {categories.map((category) => (
            <button
              key={category.id}
              onClick={() => onCategorySelect?.(category.id)}
              className={`flex items-center space-x-2 px-4 py-2 rounded-lg transition-colors ${
                selectedCategory === category.id
                  ? 'bg-emerald-50 text-emerald-600'
                  : 'hover:bg-gray-100'
              }`}
            >
              {iconMap[category.icon]}
              <span>{category.name}</span>
            </button>
          ))}
        </div>

        {/* Mobile Categories */}
        <div className="md:hidden relative">
          <button
            onClick={() => setIsCategoryMenuOpen(!isCategoryMenuOpen)}
            className="w-full flex items-center justify-between py-3"
          >
            <span className="font-medium">Categories</span>
            {isCategoryMenuOpen ? (
              <ChevronUp className="h-5 w-5" />
            ) : (
              <ChevronDown className="h-5 w-5" />
            )}
          </button>
          
          {isCategoryMenuOpen && (
            <div className="absolute left-0 right-0 top-full z-50 bg-white border-x border-b rounded-b-lg shadow-lg">
              <div className="py-2">
                {categories.map((category) => (
                  <button
                    key={category.id}
                    onClick={() => {
                      onCategorySelect?.(category.id);
                      setIsCategoryMenuOpen(false);
                    }}
                    className={`flex items-center space-x-3 w-full px-4 py-2 transition-colors ${
                      selectedCategory === category.id
                        ? 'bg-emerald-50 text-emerald-600'
                        : 'hover:bg-gray-100'
                    }`}
                  >
                    {iconMap[category.icon]}
                    <span>{category.name}</span>
                  </button>
                ))}
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}