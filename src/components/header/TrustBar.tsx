import React from 'react';
import { Users, Star, Sparkles } from 'lucide-react';

const stats = [
  {
    icon: <Users className="h-4 w-4" />,
    value: "50K+",
    label: "Active Members"
  },
  {
    icon: <Star className="h-4 w-4" />,
    value: "4.9/5",
    label: "Member Rating"
  },
  {
    icon: <Sparkles className="h-4 w-4" />,
    value: "100%",
    label: "Free Forever"
  }
];

export default function TrustBar() {
  return (
    <div className="bg-emerald-50 border-b border-emerald-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-3 md:flex md:justify-end py-2 md:space-x-6 text-sm">
          {stats.map((stat, index) => (
            <div key={index} className="flex flex-col md:flex-row items-center md:items-center text-emerald-700 space-y-0.5 md:space-y-0 md:space-x-1">
              <div className="flex items-center space-x-1">
                {stat.icon}
                <span className="font-semibold">{stat.value}</span>
              </div>
              <span className="text-xs md:text-sm text-emerald-600">{stat.label}</span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}