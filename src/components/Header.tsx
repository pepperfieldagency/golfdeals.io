import React from 'react';
import TrustBar from './header/TrustBar';
import MainNav from './navigation/MainNav';
import UserMenu from './header/UserMenu';

export default function Header() {
  return (
    <header>
      <TrustBar />
      <div className="bg-white shadow-sm">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16">
            <MainNav />
            <UserMenu />
          </div>
        </div>
      </div>
    </header>
  );
}