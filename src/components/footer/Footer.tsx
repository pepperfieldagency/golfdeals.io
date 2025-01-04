import React from 'react';
import Logo from '../Logo';
import FooterLinks from './FooterLinks';

export default function Footer() {
  return (
    <footer className="bg-gray-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 sm:py-12">
        <div className="flex flex-col md:flex-row items-start justify-between gap-8">
          {/* Logo and Description */}
          <div className="flex flex-col items-start space-y-4 max-w-sm">
            <Logo color="white" />
            <p className="text-gray-400 text-base text-left">
              Your trusted source for the best golf equipment deals. Save big on premium gear from top brands.
            </p>
          </div>

          {/* Links Section */}
          <div className="flex justify-center">
            <FooterLinks />
          </div>
        </div>

        {/* Copyright */}
        <div className="mt-8 sm:mt-12 pt-6 sm:pt-8 border-t border-gray-700">
          <p className="text-sm sm:text-base text-gray-400 text-center">
            © {new Date().getFullYear()} golfdeals.io. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}