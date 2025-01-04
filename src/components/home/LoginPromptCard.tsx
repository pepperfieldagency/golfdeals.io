import React from 'react';
import { useNavigate } from 'react-router-dom';
import { Lock, Tag, ShoppingBag, Sparkles, Clock } from 'lucide-react';

export default function LoginPromptCard() {
  const navigate = useNavigate();

  const benefits = [
    {
      icon: <ShoppingBag className="h-5 w-5 text-emerald-500" />,
      title: "Curated Deals",
      description: "Exclusively curated deals for our members"
    },
    {
      icon: <Tag className="h-5 w-5 text-emerald-500" />,
      title: "Exclusive Discounts",
      description: "Access member-only deals with up to 70% off retail prices"
    },
    {
      icon: <Clock className="h-5 w-5 text-emerald-500" />,
      title: "Early Access",
      description: "Shop new deals before they're available to the public"
    },
    {
      icon: <Sparkles className="h-5 w-5 text-emerald-500" />,
      title: "100% Free Service",
      description: "No fees or subscriptions - free for all golfers"
    }
  ];

  return (
    <div className="bg-white rounded-xl shadow-lg p-6 h-full flex flex-col">
      <div className="flex justify-center mb-6">
        <div className="relative">
          <div className="bg-emerald-100 p-4 rounded-full">
            <Lock className="h-8 w-8 text-emerald-600" />
          </div>
        </div>
      </div>

      <h3 className="text-xl font-bold text-center text-gray-900 mb-2">
        Unlock Member Benefits
      </h3>
      <p className="text-center text-gray-600 mb-6">
        Join thousands of golfers who save big on equipment
      </p>

      <div className="space-y-4 flex-grow">
        {benefits.map((benefit, index) => (
          <div key={index} className="flex items-start gap-3">
            <div className="flex-shrink-0 mt-1">{benefit.icon}</div>
            <div>
              <h4 className="font-medium text-gray-900">{benefit.title}</h4>
              <p className="text-sm text-gray-600">{benefit.description}</p>
            </div>
          </div>
        ))}
      </div>

      <div className="space-y-3 mt-6">
        <button
          onClick={() => navigate('/register')}
          className="w-full bg-emerald-600 text-white px-6 py-3 rounded-lg hover:bg-emerald-700 transition-colors font-medium"
        >
          Become a Member Today
        </button>
        <button
          onClick={() => navigate('/login')}
          className="w-full bg-white text-emerald-600 px-6 py-3 rounded-lg border-2 border-emerald-600 hover:bg-emerald-50 transition-colors font-medium"
        >
          Sign In
        </button>
      </div>
    </div>
  );
}