import React, { useState } from 'react';
import EmailInput from './EmailInput';
import PasswordInput from './PasswordInput';
import ForgotPasswordModal from './ForgotPasswordModal';

interface LoginFormProps {
  onSubmit: (email: string, password: string) => void;
  loading?: boolean;
}

export default function LoginForm({ onSubmit, loading }: LoginFormProps) {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [showForgotPassword, setShowForgotPassword] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    onSubmit(email, password);
  };

  return (
    <>
      <form className="space-y-6" onSubmit={handleSubmit}>
        <EmailInput
          value={email}
          onChange={setEmail}
          disabled={loading}
        />

        <PasswordInput
          value={password}
          onChange={setPassword}
          disabled={loading}
        />

        <div className="flex items-center justify-between">
          <div className="flex items-center">
            <input
              id="remember-me"
              name="remember-me"
              type="checkbox"
              className="h-4 w-4 text-emerald-600 focus:ring-emerald-500 border-gray-300 rounded"
            />
            <label htmlFor="remember-me" className="ml-2 block text-sm text-gray-900">
              Remember me
            </label>
          </div>

          <button
            type="button"
            onClick={() => setShowForgotPassword(true)}
            className="text-sm font-medium text-emerald-600 hover:text-emerald-500"
          >
            Forgot your password?
          </button>
        </div>

        <div>
          <button
            type="submit"
            className="w-full flex justify-center py-2 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-emerald-600 hover:bg-emerald-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-emerald-500 disabled:opacity-50 disabled:cursor-not-allowed"
            disabled={loading}
          >
            {loading ? 'Signing in...' : 'Sign in'}
          </button>
        </div>
      </form>

      {showForgotPassword && (
        <ForgotPasswordModal onClose={() => setShowForgotPassword(false)} />
      )}
    </>
  );
}