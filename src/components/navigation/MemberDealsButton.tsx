import React from 'react';
import { useNavigate } from 'react-router-dom';
import { Lock } from 'lucide-react';
import { useAuth } from '../../contexts/AuthContext';

export default function MemberDealsButton() {
  const { user } = useAuth();
  const navigate = useNavigate();

  // Don't render anything if user is not logged in
  if (!user) {
    return null;
  }

  return (
    <button
      onClick={() => navigate('/deals')}
      className={`
        hidden md:flex
        relative group overflow-hidden
        items-center gap-2.5 px-6 py-3
        rounded-full font-medium text-sm
        transition-all duration-300
        bg-gradient-to-r from-emerald-500 to-emerald-600
        hover:from-emerald-600 hover:to-emerald-700
        text-white shadow-lg hover:shadow-xl
        hover:scale-105 transform
        border border-emerald-400/20
      `}
    >
      <div className="absolute inset-0 bg-gradient-to-r from-emerald-400/20 to-transparent w-[200%] -translate-x-full group-hover:translate-x-0 transition-transform duration-700" />
      
      <div className="relative flex items-center gap-2">
        <Lock className="h-4 w-4 animate-pulse" />
        <span>View Member Deals</span>
      </div>
    </button>
  );
}