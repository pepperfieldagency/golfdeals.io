import React from 'react';
import TestimonialCard from './TestimonialCard';

const testimonials = [
  {
    name: "Michael Thompson",
    location: "San Diego, CA",
    image: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&w=200&q=80",
    quote: "Found an amazing deal on a new TaylorMade driver. The member-exclusive price saved me hundreds compared to retail!",
    rating: 5,
    savingsAmount: "$280"
  },
  {
    name: "James Wilson",
    location: "Phoenix, AZ",
    image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=200&q=80",
    quote: "The weekly deal emails are a game-changer! I love getting notified about new discounts right in my inbox - saved a fortune on my new irons.",
    rating: 5,
    savingsAmount: "$425"
  },
  {
    name: "David Chen",
    location: "Seattle, WA",
    image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?auto=format&fit=crop&w=200&q=80",
    quote: "golfdeals.io's exclusive discounts have helped me upgrade my entire golf bag without breaking the bank.",
    rating: 5,
    savingsAmount: "$650"
  }
];

export default function TestimonialsSection() {
  return (
    <section className="py-12 md:py-16 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-8 md:mb-12">
          <h2 className="text-2xl md:text-3xl font-bold text-gray-900">
            Trusted by Golfers Everywhere
          </h2>
          <p className="mt-3 md:mt-4 text-base md:text-lg text-gray-600">
            Join thousands of satisfied members who've upgraded their game for less
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
          {testimonials.map((testimonial, index) => (
            <TestimonialCard
              key={index}
              {...testimonial}
            />
          ))}
        </div>
      </div>
    </section>
  );
}