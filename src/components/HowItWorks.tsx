import React from 'react';
import { UserPlus, Tag, ShoppingBag, ArrowRight } from 'lucide-react';
import '../styles/typography.css';

const steps = [
  {
    number: 1,
    icon: <UserPlus className="h-8 w-8 text-emerald-600" />,
    title: "Become a Member",
    description: "Join our network of golf enthusiasts and gain access to deals curated specifically for golfdeals.io members.",
    details: [
      "Members-only prices not available anywhere else",
      "Direct partnerships with top golf brands",
      "Personalized deal recommendations"
    ]
  },
  {
    number: 2,
    icon: <Tag className="h-8 w-8 text-emerald-600" />,
    title: "Find the Best Deal",
    description: "Get access to custom-negotiated discounts through our direct partnerships with golf manufacturers.",
    details: [
      "Discounts up to 70% off",
      "Early access to new product releases",
      "Limited-time flash sales for members only"
    ]
  },
  {
    number: 3,
    icon: <ShoppingBag className="h-8 w-8 text-emerald-600" />,
    title: "Purchase with Confidence",
    description: "Buy directly through our trusted network of official golf equipment partners.",
    details: [
      "100% authentic products guaranteed",
      "Save money on premium golf gear"
    ]
  }
];

export default function HowItWorks() {
  return (
    <section className="py-12 md:py-16 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-8 md:mb-12">
          <h2 className="section-headline mb-4">How golfdeals.io Works</h2>
          <p className="subheadline max-w-2xl mx-auto">
            We partner directly with golf brands to bring you deals you won't find anywhere else
          </p>
        </div>
        
        <div className="space-y-6 md:space-y-8 relative">
          {steps.map((step, index) => (
            <div key={index} className="relative">
              {index < steps.length - 1 && (
                <div className="hidden md:block absolute left-[2.25rem] top-24 bottom-0 w-0.5 bg-emerald-200" />
              )}
              
              <div className="flex flex-col md:flex-row gap-4 md:gap-8 items-center md:items-start">
                <div className="flex-shrink-0 relative z-10">
                  <div className="w-14 h-14 md:w-16 md:h-16 rounded-full bg-emerald-100 flex items-center justify-center">
                    {step.icon}
                  </div>
                  <div className="absolute -top-2 -right-2 w-6 h-6 md:w-8 md:h-8 rounded-full bg-emerald-600 flex items-center justify-center text-white font-bold text-sm md:text-base">
                    {step.number}
                  </div>
                </div>

                <div className="flex-1 bg-white rounded-lg p-4 md:p-6 shadow-md hover:shadow-lg transition-shadow text-center md:text-left">
                  <h3 className="text-lg md:text-xl font-semibold text-gray-900 mb-2 md:mb-3">{step.title}</h3>
                  <p className="text-sm md:text-base text-gray-600 mb-3 md:mb-4">{step.description}</p>
                  
                  <ul className="space-y-2">
                    {step.details.map((detail, detailIndex) => (
                      <li key={detailIndex} className="flex items-center text-sm md:text-base text-gray-700 justify-center md:justify-start">
                        <ArrowRight className="h-4 w-4 text-emerald-500 mr-2 flex-shrink-0" />
                        <span>{detail}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}