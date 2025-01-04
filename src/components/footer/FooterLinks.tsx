import React from 'react';
import { Link } from 'react-router-dom';

const links = [
  { label: 'About Us', href: '/about' },
  { label: 'Contact Us', href: '/contact' },
  { label: 'FAQ', href: '/faq' },
  { label: 'Terms', href: '/terms' },
  { label: 'Privacy', href: '/privacy' }
];

export default function FooterLinks() {
  return (
    <nav className="flex flex-wrap items-center justify-center gap-4 md:gap-8">
      {links.map(link => (
        <Link 
          key={link.href}
          to={link.href} 
          className="text-sm text-gray-300 hover:text-white transition-colors"
        >
          {link.label}
        </Link>
      ))}
    </nav>
  );
}