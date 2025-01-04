import React from 'react';
import { ArrowRight } from 'lucide-react';
import { useNavigate } from 'react-router-dom';

export default function AboutHero() {
  const navigate = useNavigate();

  return (
    <section className="relative h-[400px] overflow-hidden">
      {/* Background Image with Overlay */}
      <div 
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{ 
          backgroundImage: 'url("https://images.unsplash.com/photo-1629673120178-53a664eec9e8?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D?auto=format&fit=crop&w=2000&q=80")'
        }}
      >
        {/* Green Overlay */}
        <div className="absolute inset-0 bg-emerald-600/80" />
        
        {/* Decorative Pattern */}
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,_rgba(255,255,255,0.1)_1px,_transparent_1px)] [background-size:20px_20px]" />
      </div>

      {/* Content */}
      <div className="relative h-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-center">
        <div className="text-center max-w-3xl mx-auto">
          <h1 className="text-4xl sm:text-5xl font-bold text-white mb-6">
            Making Golf More 
            <span className="block text-emerald-200">Accessible for Everyone</span>
          </h1>
          <p className="text-xl text-emerald-50 mb-8">
            We're on a mission to help golfers save money on premium equipment through exclusive deals and member-only discounts.
          </p>
          <button
            onClick={() => navigate('/register')}
            className="inline-flex items-center gap-2 bg-white text-emerald-600 px-8 py-3 rounded-full font-medium hover:bg-emerald-50 transition-all duration-200 shadow-lg hover:shadow-xl transform hover:-translate-y-0.5"
          >
            Join Our Community
            <ArrowRight className="h-5 w-5" />
          </button>
        </div>
      </div>
    </section>
  );
}