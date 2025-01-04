import React from 'react';
import { Star } from 'lucide-react';

interface TestimonialCardProps {
  name: string;
  location: string;
  image: string;
  quote: string;
  rating: number;
  savingsAmount: string;
}

export default function TestimonialCard({ 
  name, 
  location, 
  image, 
  quote, 
  rating,
  savingsAmount 
}: TestimonialCardProps) {
  return (
    <div className="bg-white rounded-xl shadow-md p-4 md:p-6 flex flex-col h-full">
      <div className="flex items-start gap-3 md:gap-4 mb-3 md:mb-4">
        <img
          src={image}
          alt={name}
          className="w-10 h-10 md:w-12 md:h-12 rounded-full object-cover"
        />
        <div>
          <h4 className="font-semibold text-gray-900 text-sm md:text-base">{name}</h4>
          <p className="text-xs md:text-sm text-gray-500">{location}</p>
        </div>
      </div>
      
      <div className="flex items-center gap-1 mb-2 md:mb-3">
        {[...Array(rating)].map((_, i) => (
          <Star key={i} className="h-3.5 w-3.5 md:h-4 md:w-4 fill-yellow-400 text-yellow-400" />
        ))}
      </div>

      <blockquote className="text-sm md:text-base text-gray-600 flex-grow mb-3 md:mb-4">
        "{quote}"
      </blockquote>

      <div className="text-xs md:text-sm text-emerald-600 font-medium">
        Saved {savingsAmount} on golf equipment
      </div>
    </div>
  );
}