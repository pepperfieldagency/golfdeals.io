import React from 'react';
import { Helmet } from 'react-helmet-async';
import { useAuthRedirect } from '../hooks/useAuthRedirect';
import Header from '../components/Header';
import FeaturedDealSection from '../components/home/FeaturedDealSection';
import HowItWorks from '../components/HowItWorks';
import SavingsStats from '../components/SavingsStats';
import NewsletterSubscription from '../components/NewsletterSubscription';
import TestimonialsSection from '../components/testimonials/TestimonialsSection';
import '../styles/typography.css';

export default function HomePage() {
  const { loading } = useAuthRedirect('/deals');

  if (loading) {
    return null;
  }

  return (
    <div className="min-h-screen bg-gray-50">
      <Helmet>
        <title>Golf Deals & Discounts | Save Up to 70% on Golf Equipment | golfdeals.io</title>
        <meta name="description" content="Find the best golf deals and discounts on premium equipment, apparel, and accessories. Save up to 70% on top golf brands. Join 50,000+ golfers who save big with golfdeals.io" />
      </Helmet>

      <Header />
      <main>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-2 md:py-8">
          <div className="text-center mb-8">
            <h1 className="headline mb-4">
              Best Golf Deals & Discounts
            </h1>
            <p className="subheadline max-w-2xl mx-auto px-4 sm:px-0">
              Join 50,000+ golfers saving up to 70% on premium golf gear from top brands.
            </p>
          </div>
          <FeaturedDealSection />
        </div>
        <SavingsStats />
        <HowItWorks />
        <TestimonialsSection />
        <NewsletterSubscription />
      </main>
    </div>
  );
}