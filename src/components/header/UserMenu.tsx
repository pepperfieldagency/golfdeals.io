import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { User as UserIcon, LogOut, Settings, LogIn, UserPlus, LayoutGrid, Archive } from 'lucide-react';
import { useAuth } from '../../contexts/AuthContext';
import { auth } from '../../lib/firebase';
import { isAdmin } from '../../utils/adminUtils';

export default function UserMenu() {
  const [isOpen, setIsOpen] = useState(false);
  const navigate = useNavigate();
  const { user } = useAuth();
  const isUserAdmin = isAdmin(user);

  const handleSignOut = async () => {
    try {
      await auth.signOut();
      navigate('/');
    } catch (error) {
      console.error('Error signing out:', error);
    }
  };

  return (
    <div className="relative">
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="p-2 hover:bg-gray-100 rounded-full flex items-center"
      >
        <UserIcon className="h-6 w-6 text-gray-600" />
      </button>

      {isOpen && (
        <div className="absolute right-0 mt-2 w-48 rounded-md shadow-lg bg-white ring-1 ring-black ring-opacity-5 z-50">
          <div className="py-1">
            {user ? (
              <>
                <div className="px-4 py-2 text-sm text-gray-700 border-b">
                  <div className="font-medium">{user.displayName || 'User'}</div>
                  <div className="text-gray-500 text-xs truncate">{user.email}</div>
                  {isUserAdmin && (
                    <span className="inline-block mt-1 text-xs font-medium text-emerald-600">
                      Admin
                    </span>
                  )}
                </div>
                
                <button
                  onClick={() => {
                    setIsOpen(false);
                    navigate('/deals');
                  }}
                  className="flex w-full items-center px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
                >
                  <LayoutGrid className="h-4 w-4 mr-2" />
                  View All Deals
                </button>

                <button
                  onClick={() => {
                    setIsOpen(false);
                    navigate('/archived');
                  }}
                  className="flex w-full items-center px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
                >
                  <Archive className="h-4 w-4 mr-2" />
                  Archived Deals
                </button>

                <button
                  onClick={() => {
                    setIsOpen(false);
                    // Add settings functionality later
                  }}
                  className="flex w-full items-center px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
                >
                  <Settings className="h-4 w-4 mr-2" />
                  Settings
                </button>
                
                <button
                  onClick={() => {
                    setIsOpen(false);
                    handleSignOut();
                  }}
                  className="flex w-full items-center px-4 py-2 text-sm text-red-600 hover:bg-red-50"
                >
                  <LogOut className="h-4 w-4 mr-2" />
                  Sign Out
                </button>
              </>
            ) : (
              <>
                <button
                  onClick={() => {
                    setIsOpen(false);
                    navigate('/login');
                  }}
                  className="flex w-full items-center px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
                >
                  <LogIn className="h-4 w-4 mr-2" />
                  Sign In
                </button>
                
                <button
                  onClick={() => {
                    setIsOpen(false);
                    navigate('/register');
                  }}
                  className="flex w-full items-center px-4 py-2 text-sm text-emerald-600 hover:bg-emerald-50"
                >
                  <UserPlus className="h-4 w-4 mr-2" />
                  Create Account
                </button>
              </>
            )}
          </div>
        </div>
      )}
    </div>
  );
}