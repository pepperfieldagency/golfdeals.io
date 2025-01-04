import React from 'react';
import Header from '../components/Header';
import ContactForm from '../components/contact/ContactForm';
import { useScrollToTop } from '../hooks/useScrollToTop';

export default function ContactPage() {
  useScrollToTop();

  return (
    <div className="min-h-screen bg-gray-50">
      <Header />
      <main className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="text-center mb-12">
          <h1 className="text-3xl font-bold text-gray-900 mb-4">Contact Us</h1>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Have a question or need assistance? We're here to help! Reach out to our team and we'll get back to you as soon as possible.
          </p>
        </div>

        <ContactForm />
      </main>
    </div>
  );
}