import React from 'react';

interface SocialLoginButtonProps {
  icon: React.ComponentType;
  provider: string;
  onClick: () => void;
  loading?: boolean;
}

export default function SocialLoginButton({ 
  icon: Icon, 
  provider, 
  onClick, 
  loading 
}: SocialLoginButtonProps) {
  return (
    <button
      onClick={onClick}
      disabled={loading}
      className="w-full flex items-center justify-center gap-3 px-4 py-2.5 border border-gray-300 rounded-md shadow-sm text-sm font-medium text-gray-700 bg-white hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-emerald-500 disabled:opacity-50 disabled:cursor-not-allowed transition-colors duration-200"
    >
      <Icon />
      <span>Continue with {provider}</span>
    </button>
  );
}