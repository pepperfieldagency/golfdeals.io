import React, { useState } from 'react';
import { Mail, ArrowRight, Check, X } from 'lucide-react';
import { subscribeToNewsletter } from '../services/newsletterService';

export default function NewsletterSubscription() {
  const [email, setEmail] = useState('');
  const [status, setStatus] = useState<'idle' | 'loading' | 'success' | 'error'>('idle');

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatus('loading');
    
    try {
      await subscribeToNewsletter(email);
      setStatus('success');
      setEmail('');
      setTimeout(() => setStatus('idle'), 3000);
    } catch (error) {
      setStatus('error');
      setTimeout(() => setStatus('idle'), 3000);
    }
  };

  return (
    <section className="bg-gradient-to-br from-emerald-600 to-emerald-700">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="max-w-2xl mx-auto text-center">
          <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-emerald-500/20 mb-6">
            <Mail className="h-8 w-8 text-white" />
          </div>
          
          <h2 className="text-3xl font-bold text-white mb-3">
            Get Weekly Golf Deals
          </h2>
          <p className="text-emerald-100 text-lg mb-8">
            Join 50,000+ golfers who save big with our weekly deals newsletter
          </p>

          <form onSubmit={handleSubmit} className="max-w-md mx-auto mb-4">
            <div className="relative">
              <input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="Enter your email"
                className="w-full px-6 py-4 rounded-full text-gray-900 bg-white focus:outline-none focus:ring-2 focus:ring-white/50 pr-36"
                required
                disabled={status === 'loading'}
              />
              <button
                type="submit"
                disabled={status === 'loading'}
                className="absolute right-2 top-2 px-6 py-2 bg-emerald-600 text-white rounded-full hover:bg-emerald-700 transition-colors flex items-center gap-2 disabled:opacity-50 disabled:cursor-not-allowed"
              >
                {status === 'loading' ? 'Subscribing...' : 'Subscribe'}
                <ArrowRight className="h-4 w-4" />
              </button>
            </div>
          </form>

          {/* Status Messages */}
          {status === 'success' && (
            <div className="flex items-center justify-center gap-2 text-emerald-100 mb-4">
              <Check className="h-5 w-5" />
              <span>Thank you for subscribing!</span>
            </div>
          )}
          {status === 'error' && (
            <div className="flex items-center justify-center gap-2 text-red-200 mb-4">
              <X className="h-5 w-5" />
              <span>Something went wrong. Please try again.</span>
            </div>
          )}

          <p className="text-emerald-100/80 text-sm">
            By subscribing, you agree to receive marketing emails from golfdeals.io. 
            You can unsubscribe at any time.
          </p>
        </div>
      </div>
    </section>
  );
}