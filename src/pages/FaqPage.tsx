import React from 'react';
import Header from '../components/Header';
import FaqSection from '../components/faq/FaqSection';
import NewsletterSubscription from '../components/NewsletterSubscription';
import { useScrollToTop } from '../hooks/useScrollToTop';

export default function FaqPage() {
  useScrollToTop();

  return (
    <div className="min-h-screen bg-gray-50">
      <Header />
      <main>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
          <div className="text-center mb-12">
            <h1 className="text-3xl font-bold text-gray-900 mb-4">
              Frequently Asked Questions
            </h1>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Everything you need to know about golfdeals.io and how we help golfers save money on premium equipment.
            </p>
          </div>
          <FaqSection />
        </div>
        <NewsletterSubscription />
      </main>
    </div>
  );
}