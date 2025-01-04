import React from 'react';

export default function FounderMessage() {
  return (
    <section className="py-16 bg-white">
      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Simple, centered header */}
        <h2 className="text-center text-3xl font-bold text-gray-900 mb-12">
          A Message from Our Founder
        </h2>

        {/* Clean, centered message content */}
        <div className="space-y-6 text-center text-gray-600 leading-relaxed">
          <p>
            I fell in love with golf because it's more than just a sport—it's a way to connect, 
            unwind, and challenge yourself. But let's be honest, golf can be expensive. When I started, 
            I couldn't afford to buy equipment and apparel at full price, so I spent countless hours 
            hunting for deals online and visiting discount stores just to make it work.
          </p>
          
          <p>
            That experience inspired me to create golfdeals.io, a passion project built for golfers like you. 
            My mission is simple: to help golfers find the best deals on equipment, apparel, and more.
          </p>

          <p>
            At the same time, I realized that many golf manufacturers struggle to move products efficiently. 
            That's where golfdeals.io comes in—a platform to bridge the gap between retailers and consumers 
            through unique partnerships and exclusive offers.
          </p>

          <p>
            My ultimate goal is to make golf accessible and affordable for everyone, so more people can 
            fall in love with this incredible game, just like I did.
          </p>

          {/* Minimalist signature */}
          <div className="pt-10 mt-10 border-t border-gray-100">
            <div className="inline-flex flex-col items-center">
              <span className="text-2xl font-serif text-emerald-600">HC</span>
              <span className="text-sm text-gray-500">Founder, GolfDeals.io</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}