import React from 'react';
import { Target, Users, DollarSign, ShieldCheck } from 'lucide-react';

const values = [
  {
    icon: Target,
    title: 'Our Mission',
    description: 'To make quality golf equipment accessible to everyone by providing the best deals and discounts'
  },
  {
    icon: Users,
    title: 'Community First',
    description: 'Building a community of golfers who help each other improve their game without breaking the bank'
  },
  {
    icon: DollarSign,
    title: 'Real Savings',
    description: 'Negotiating directly with brands to secure exclusive discounts you won\'t find anywhere else'
  },
  {
    icon: ShieldCheck,
    title: 'Trust & Quality',
    description: 'Shop with confidence - we personally verify all deals & we work only with the best retailers'
  }
];

export default function AboutMission() {
  return (
    <section className="py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-gray-900 mb-4">
            Our Values & Mission
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Founded by golfers for golfers, we're committed to making the sport more accessible through amazing deals.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {values.map((value, index) => {
            const Icon = value.icon;
            return (
              <div
                key={index}
                className="bg-white rounded-xl p-6 shadow-md hover:shadow-lg transition-shadow"
              >
                <div className="w-12 h-12 bg-emerald-100 rounded-lg flex items-center justify-center mb-4">
                  <Icon className="h-6 w-6 text-emerald-600" />
                </div>
                <h3 className="text-lg font-semibold text-gray-900 mb-2">
                  {value.title}
                </h3>
                <p className="text-gray-600">
                  {value.description}
                </p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}