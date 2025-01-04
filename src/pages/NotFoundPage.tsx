import React, { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { MoveLeft } from 'lucide-react';
import Logo from '../components/Logo';

export default function NotFoundPage() {
  const navigate = useNavigate();

  // Automatically redirect to homepage after 3 seconds
  useEffect(() => {
    const timer = setTimeout(() => {
      navigate('/', { replace: true });
    }, 3000);

    return () => clearTimeout(timer);
  }, [navigate]);

  return (
    <div className="min-h-screen bg-gray-50 flex flex-col items-center justify-center px-4">
      <div className="text-center">
        <div className="flex justify-center mb-8">
          <Logo />
        </div>
        
        <h1 className="text-6xl font-bold text-gray-900 mb-4">404</h1>
        <p className="text-xl text-gray-600 mb-8">
          Page not found. Redirecting you to homepage...
        </p>
        
        <button
          onClick={() => navigate('/')}
          className="inline-flex items-center gap-2 px-6 py-3 bg-emerald-600 text-white rounded-lg hover:bg-emerald-700 transition-colors"
        >
          <MoveLeft className="h-5 w-5" />
          <span>Go to Homepage</span>
        </button>
      </div>
    </div>
  );
}