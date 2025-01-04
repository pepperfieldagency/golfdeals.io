import React, { useEffect, useState } from 'react';
import { useNavigate, useSearchParams } from 'react-router-dom';
import { CheckCircle, XCircle, Loader } from 'lucide-react';
import { verifyEmail } from '../services/authService';
import Logo from '../components/Logo';

export default function VerifyEmailPage() {
  const [searchParams] = useSearchParams();
  const navigate = useNavigate();
  const [status, setStatus] = useState<'loading' | 'success' | 'error'>('loading');
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const verifyEmailAddress = async () => {
      const actionCode = searchParams.get('oobCode');
      
      if (!actionCode) {
        setStatus('error');
        setError('Invalid verification link.');
        return;
      }

      try {
        await verifyEmail(actionCode);
        setStatus('success');
      } catch (error: any) {
        setStatus('error');
        if (error.code === 'auth/invalid-action-code') {
          setError('This verification link has expired or already been used.');
        } else {
          setError('Failed to verify email. Please try again.');
        }
      }
    };

    verifyEmailAddress();
  }, [searchParams]);

  return (
    <div className="min-h-screen bg-gray-50 flex flex-col justify-center py-12 sm:px-6 lg:px-8">
      <div className="sm:mx-auto sm:w-full sm:max-w-md">
        <div className="flex justify-center mb-6">
          <Logo />
        </div>
        
        <div className="bg-white py-8 px-4 shadow sm:rounded-lg sm:px-10">
          <div className="text-center">
            {status === 'loading' && (
              <>
                <Loader className="mx-auto h-12 w-12 text-emerald-500 animate-spin" />
                <h2 className="mt-4 text-lg font-medium text-gray-900">
                  Verifying your email...
                </h2>
              </>
            )}

            {status === 'success' && (
              <>
                <CheckCircle className="mx-auto h-12 w-12 text-emerald-500" />
                <h2 className="mt-4 text-lg font-medium text-gray-900">
                  Email verified successfully!
                </h2>
                <p className="mt-2 text-sm text-gray-600">
                  You can now access all features of your account.
                </p>
                <button
                  onClick={() => navigate('/deals')}
                  className="mt-6 w-full flex justify-center py-2 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-emerald-600 hover:bg-emerald-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-emerald-500"
                >
                  Continue to Deals
                </button>
              </>
            )}

            {status === 'error' && (
              <>
                <XCircle className="mx-auto h-12 w-12 text-red-500" />
                <h2 className="mt-4 text-lg font-medium text-gray-900">
                  Verification failed
                </h2>
                <p className="mt-2 text-sm text-red-600">
                  {error}
                </p>
                <button
                  onClick={() => navigate('/login')}
                  className="mt-6 w-full flex justify-center py-2 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-emerald-600 hover:bg-emerald-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-emerald-500"
                >
                  Back to Login
                </button>
              </>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}