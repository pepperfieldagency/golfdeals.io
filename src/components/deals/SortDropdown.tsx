import React, { useState, useRef, useEffect } from 'react';
import { ArrowUpDown, Check } from 'lucide-react';

interface SortOption {
  value: string;
  label: string;
}

interface SortDropdownProps {
  value: string;
  onChange: (value: string) => void;
}

const sortOptions: SortOption[] = [
  { value: 'popular', label: 'Most Popular' },
  { value: 'savings', label: 'Biggest Savings' },
  { value: 'newest', label: 'Newest' }
];

export default function SortDropdown({ value, onChange }: SortDropdownProps) {
  const [isOpen, setIsOpen] = useState(false);
  const dropdownRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    function handleClickOutside(event: MouseEvent) {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target as Node)) {
        setIsOpen(false);
      }
    }

    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  const selectedOption = sortOptions.find(option => option.value === value);

  return (
    <div className="relative" ref={dropdownRef}>
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="inline-flex items-center gap-2 rounded-lg border border-gray-200 bg-white px-3 py-1.5 text-sm shadow-sm transition-colors hover:bg-gray-50"
      >
        <ArrowUpDown className="h-4 w-4 text-gray-500" />
        <span className="font-medium text-gray-700 text-left">{selectedOption?.label}</span>
      </button>

      {isOpen && (
        <div className="absolute right-0 sm:right-auto sm:left-0 z-50 mt-2 w-48 origin-top-right rounded-lg bg-white shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none">
          <div className="py-1" role="menu">
            {sortOptions.map((option) => (
              <button
                key={option.value}
                onClick={() => {
                  onChange(option.value);
                  setIsOpen(false);
                }}
                className={`flex w-full items-center px-4 py-2 text-sm transition-colors text-left ${
                  value === option.value
                    ? 'bg-emerald-50 text-emerald-600'
                    : 'text-gray-700 hover:bg-gray-50'
                }`}
                role="menuitem"
              >
                <span className="flex-1 text-left">{option.label}</span>
                {value === option.value && (
                  <Check className="ml-2 h-4 w-4 flex-shrink-0" />
                )}
              </button>
            ))}
          </div>
        </div>
      )}
    </div>
  );
}