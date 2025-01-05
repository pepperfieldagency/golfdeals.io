import React from 'react';
import Header from '../components/Header';
import Footer from '../components/footer/Footer';
import AboutHero from '../components/about/AboutHero';
import AboutMission from '../components/about/AboutMission';
import FounderMessage from '../components/about/FounderMessage';
import NewsletterSubscription from '../components/NewsletterSubscription';
import { useScrollToTop } from '../hooks/useScrollToTop';

export default function AboutPage() {
  useScrollToTop();

  return (
    <div className="min-h-screen bg-gray-50 flex flex-col">
      <Header />
      <main className="flex-grow">
        <AboutHero />
        <AboutMission />
        <FounderMessage />
        <NewsletterSubscription />
      </main>
      <Footer />
    </div>
  );
}