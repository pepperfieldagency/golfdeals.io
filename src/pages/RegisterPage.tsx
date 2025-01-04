import React from 'react';
import { Link } from 'react-router-dom';
import RegisterForm from '../components/auth/RegisterForm';
import GoogleIcon from '../components/auth/GoogleIcon';
import SocialLoginButton from '../components/auth/SocialLoginButton';
import Logo from '../components/Logo';
import { useAuthForm } from '../hooks/useAuthForm';

export default function RegisterPage() {
  const { loading, error, handleAuth, handleGoogleAuth } = useAuthForm(false);

  const handleRegister = (name: string, email: string, password: string) => {
    handleAuth(email, password, name);
  };

  return (
    <div className="min-h-screen bg-gray-50 flex flex-col justify-center py-12 sm:px-6 lg:px-8">
      <div className="sm:mx-auto sm:w-full sm:max-w-md">
        <div className="flex justify-center mb-6">
          <Logo />
        </div>
        <h2 className="text-center text-3xl font-extrabold text-gray-900">Create your account</h2>
        <p className="mt-2 text-center text-sm text-gray-600">
          Already have an account?{' '}
          <Link to="/login" className="font-medium text-emerald-600 hover:text-emerald-500">
            Sign in
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

            <RegisterForm onSubmit={handleRegister} loading={loading} />
          </div>
          
          <div className="mt-6">
            <p className="text-xs text-center text-gray-500">
              By creating an account, you agree to our{' '}
              <Link to="/terms" className="text-emerald-600 hover:text-emerald-500">
                Terms of Service
              </Link>{' '}
              and{' '}
              <Link to="/privacy" className="text-emerald-600 hover:text-emerald-500">
                Privacy Policy
              </Link>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}