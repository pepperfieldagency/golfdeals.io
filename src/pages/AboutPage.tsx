import React from 'react';
import Header from '../components/Header';
import AboutHero from '../components/about/AboutHero';
import AboutMission from '../components/about/AboutMission';
import FounderMessage from '../components/about/FounderMessage';
import NewsletterSubscription from '../components/NewsletterSubscription';
import { useScrollToTop } from '../hooks/useScrollToTop';

export default function AboutPage() {
  useScrollToTop();

  return (
    <div className="min-h-screen bg-gray-50">
      <Header />
      <main>
        <AboutHero />
        <AboutMission />
        <FounderMessage />
        <NewsletterSubscription />
      </main>
    </div>
  );
}