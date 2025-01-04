import React from 'react';
import { Mail, AlertTriangle, CheckCircle, Loader } from 'lucide-react';
import { useAuth } from '../../contexts/AuthContext';
import { useEmailVerification } from '../../hooks/useEmailVerification';

export default function EmailVerificationBanner() {
  const { user } = useAuth();
  const { loading, error, success, resendVerification } = useEmailVerification();

  if (!user || user.emailVerified) {
    return null;
  }

  return (
    <div className="bg-yellow-50 border-b border-yellow-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-3">
        <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-3">
          <div className="flex items-center gap-2 text-yellow-800">
            <AlertTriangle className="h-5 w-5 flex-shrink-0" />
            <p className="text-sm sm:text-base">
              Please verify your email to be able to get weekly deals
            </p>
          </div>
          
          <button
            onClick={() => resendVerification(user)}
            disabled={loading || success}
            className="inline-flex items-center justify-center gap-2 px-4 py-2 rounded-md text-sm font-medium transition-colors disabled:opacity-50 disabled:cursor-not-allowed
              bg-yellow-100 text-yellow-800 hover:bg-yellow-200 w-full sm:w-auto"
          >
            {loading ? (
              <>
                <Loader className="h-4 w-4 animate-spin" />
                <span>Sending...</span>
              </>
            ) : success ? (
              <>
                <CheckCircle className="h-4 w-4" />
                <span>Email Sent</span>
              </>
            ) : (
              <>
                <Mail className="h-4 w-4" />
                <span className="whitespace-nowrap">Resend Verification</span>
              </>
            )}
          </button>
        </div>
        
        {error && (
          <p className="mt-2 text-sm text-red-600 text-center sm:text-left">{error}</p>
        )}
      </div>
    </div>
  );
}