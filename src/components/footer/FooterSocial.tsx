import React from 'react';
import { Facebook, Twitter, Instagram, Youtube } from 'lucide-react';

const socialLinks = [
  { icon: Facebook, href: 'https://facebook.com/golfdeals' },
  { icon: Twitter, href: 'https://twitter.com/golfdeals' },
  { icon: Instagram, href: 'https://instagram.com/golfdeals' },
  { icon: Youtube, href: 'https://youtube.com/golfdeals' },
];

export default function FooterSocial() {
  return (
    <div className="flex items-center space-x-4 sm:space-x-6">
      {socialLinks.map(({ icon: Icon, href }) => (
        <a
          key={href}
          href={href}
          target="_blank"
          rel="noopener noreferrer"
          className="text-gray-400 hover:text-white transition-colors"
        >
          <Icon className="h-5 w-5 sm:h-6 sm:w-6" />
        </a>
      ))}
    </div>
  );
}