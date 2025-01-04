import React from 'react';
import { Lock } from 'lucide-react';
import { useNavigate } from 'react-router-dom';

interface LoginTooltipProps {
  isVisible: boolean;
  onClose: () => void;
}

export default function LoginTooltip({ isVisible, onClose }: LoginTooltipProps) {
  const navigate = useNavigate();

  if (!isVisible) return null;

  return (
    <div className="absolute top-full mt-2 w-64 p-4 bg-white rounded-lg shadow-lg border border-gray-100 z-50 animate-fade-in">
      <div className="flex items-start gap-3">
        <div className="p-2 bg-emerald-100 rounded-full">
          <Lock className="h-5 w-5 text-emerald-600" />
        </div>
        <div>
          <h4 className="font-medium text-gray-900">Members Only</h4>
          <p className="text-sm text-gray-600 mb-3">Sign in to view exclusive deals in this category</p>
          <button
            onClick={() => {
              navigate('/login');
              onClose();
            }}
            className="w-full bg-emerald-600 text-white px-4 py-2 rounded-md text-sm hover:bg-emerald-700 transition-colors"
          >
            Sign In
          </button>
        </div>
      </div>
    </div>
  );
}