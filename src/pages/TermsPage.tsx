import React from 'react';
import Header from '../components/Header';
import Footer from '../components/footer/Footer';
import { useScrollToTop } from '../hooks/useScrollToTop';

export default function TermsPage() {
  useScrollToTop();

  return (
    <div className="min-h-screen bg-gray-50 flex flex-col">
      <Header />
      <main className="flex-grow max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="bg-white rounded-xl shadow-sm p-8">
          <h1 className="text-3xl font-bold text-gray-900 mb-8">Terms of Service</h1>
          
          <div className="space-y-8">
            <section>
              <h2 className="text-xl font-semibold text-gray-900 mb-4">1. Agreement to Terms</h2>
              <p className="text-gray-600">
                By accessing and using golfdeals.io, you agree to be bound by these Terms of Service and all applicable laws and regulations. If you do not agree with any of these terms, you are prohibited from using or accessing this site.
              </p>
            </section>

            <section>
              <h2 className="text-xl font-semibold text-gray-900 mb-4">2. Use License</h2>
              <div className="space-y-4 text-gray-600">
                <p>Permission is granted to temporarily access the materials on golfdeals.io for personal, non-commercial viewing only. This is the grant of a license, not a transfer of title, and under this license you may not:</p>
                <ul className="list-disc pl-6 space-y-2">
                  <li>Modify or copy the materials</li>
                  <li>Use the materials for any commercial purpose</li>
                  <li>Attempt to reverse engineer any software contained on the website</li>
                  <li>Remove any copyright or proprietary notations</li>
                  <li>Transfer the materials to another person or server</li>
                </ul>
              </div>
            </section>

            <section>
              <h2 className="text-xl font-semibold text-gray-900 mb-4">3. Disclaimer</h2>
              <p className="text-gray-600">
                The materials on golfdeals.io are provided on an 'as is' basis. We make no warranties, expressed or implied, and hereby disclaim and negate all other warranties including, without limitation, implied warranties or conditions of merchantability, fitness for a particular purpose, or non-infringement of intellectual property or other violation of rights.
              </p>
            </section>

            <section>
              <h2 className="text-xl font-semibold text-gray-900 mb-4">4. Limitations</h2>
              <p className="text-gray-600">
                In no event shall golfdeals.io or its suppliers be liable for any damages (including, without limitation, damages for loss of data or profit, or due to business interruption) arising out of the use or inability to use our services.
              </p>
            </section>

            <section>
              <h2 className="text-xl font-semibold text-gray-900 mb-4">5. Account Terms</h2>
              <div className="space-y-4 text-gray-600">
                <p>You are responsible for:</p>
                <ul className="list-disc pl-6 space-y-2">
                  <li>Maintaining the security of your account</li>
                  <li>All activities that occur under your account</li>
                  <li>Ensuring your account information is accurate</li>
                  <li>Notifying us of any unauthorized access</li>
                </ul>
              </div>
            </section>

            <section>
              <h2 className="text-xl font-semibold text-gray-900 mb-4">6. Modifications</h2>
              <p className="text-gray-600">
                We reserve the right to modify or replace these terms at any time. Your continued use of the site after any changes constitutes acceptance of those changes.
              </p>
            </section>
          </div>

          <div className="mt-12 pt-8 border-t border-gray-200">
            <p className="text-sm text-gray-500">
              Last updated: {new Date().toLocaleDateString()}
            </p>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
}