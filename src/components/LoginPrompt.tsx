import React from 'react';
import { Lock, Sparkles, Tag } from 'lucide-react';
import { useNavigate } from 'react-router-dom';

export default function LoginPrompt() {
  const navigate = useNavigate();

  return (
    <div className="bg-gradient-to-br from-emerald-50 to-teal-50 rounded-lg shadow-lg p-8 text-center border border-emerald-100 transform transition-all hover:scale-105 hover:shadow-xl">
      <div className="flex justify-center mb-6">
        <div className="relative">
          <div className="bg-emerald-100 p-4 rounded-full">
            <Lock className="h-8 w-8 text-emerald-600" />
          </div>
          <div className="absolute -top-2 -right-2">
            <Sparkles className="h-5 w-5 text-yellow-500" />
          </div>
        </div>
      </div>
      
      <h3 className="text-2xl font-bold text-gray-800 mb-3">
        Unlock Premium Deals
      </h3>
      
      <div className="space-y-4 mb-6">
        <div className="flex items-center justify-center gap-2 text-gray-600">
          <Tag className="h-5 w-5 text-emerald-500" />
          <span>Save up to 70% on exclusive offers</span>
        </div>
        <p className="text-gray-600">
          Join thousands of smart golfers who save big every day!
        </p>
      </div>
      
      <button 
        onClick={() => navigate('/login')}
        className="w-full bg-emerald-600 text-white px-6 py-3 rounded-lg hover:bg-emerald-700 transition-colors font-semibold shadow-md hover:shadow-lg mb-4"
      >
        Sign In to View All Deals
      </button>
      
      <p className="text-sm text-gray-500">
        New to golfdeals.io?{' '}
        <button 
          onClick={() => navigate('/register')}
          className="text-emerald-600 hover:text-emerald-700 font-medium hover:underline"
        >
          Create an account
        </button>
      </p>
    </div>
  );
}