import React from 'react';

const stats = [
  { value: '50K+', label: 'Active Members' },
  { value: '$320', label: 'Avg. Annual Savings' },
  { value: '1000+', label: 'Deals Posted' },
  { value: '4.9/5', label: 'Member Rating' }
];

export default function AboutStats() {
  return (
    <section className="bg-emerald-600 py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">
          {stats.map((stat, index) => (
            <div key={index} className="text-center">
              <div className="text-4xl sm:text-5xl font-bold text-white mb-2">
                {stat.value}
              </div>
              <div className="text-emerald-100 text-lg">
                {stat.label}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}