import React from 'react';
import { Link } from 'react-router-dom';
import LoginForm from '../components/auth/LoginForm';
import GoogleIcon from '../components/auth/GoogleIcon';
import SocialLoginButton from '../components/auth/SocialLoginButton';
import Logo from '../components/Logo';
import { useAuthForm } from '../hooks/useAuthForm';

export default function LoginPage() {
  const { loading, error, handleAuth, handleGoogleAuth } = useAuthForm(true);

  return (
    <div className="min-h-screen bg-gray-50 flex flex-col justify-center py-12 sm:px-6 lg:px-8">
      <div className="sm:mx-auto sm:w-full sm:max-w-md">
        <div className="flex justify-center mb-6">
          <Logo />
        </div>
        <h2 className="text-center text-3xl font-extrabold text-gray-900">Sign in to your account</h2>
        <p className="mt-2 text-center text-sm text-gray-600">
          Or{' '}
          <Link to="/register" className="font-medium text-emerald-600 hover:text-emerald-500">
            become a member today
          </Link>
        </p>
      </div>

      <div className="mt-8 sm:mx-auto sm:w-full sm:max-w-md">
        <div className="bg-white py-8 px-4 shadow sm:rounded-lg sm:px-10">
          {error && (
            <div className="mb-4 p-3 bg-red-50 text-red-700 text-sm rounded-md">
              {error}
            </div>
          )}

          <div className="space-y-6">
            <SocialLoginButton
              icon={GoogleIcon}
              provider="Google"
              onClick={handleGoogleAuth}
              loading={loading}
            />

            <div className="relative">
              <div className="absolute inset-0 flex items-center">
                <div className="w-full border-t border-gray-300" />
              </div>
              <div className="relative flex justify-center text-sm">
                <span className="px-2 bg-white text-gray-500">Or continue with</span>
              </div>
            </div>

            <LoginForm onSubmit={handleAuth} loading={loading} />
          </div>
        </div>
      </div>
    </div>
  );
}