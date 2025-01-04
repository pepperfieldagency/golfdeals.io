import React from 'react';
import { Link } from 'react-router-dom';

interface LogoProps {
  className?: string;
  color?: 'emerald' | 'white';
}

export default function Logo({ className, color = 'emerald' }: LogoProps) {
  // Filter for emerald-600 color
  const emeraldFilter = `brightness(0) saturate(100%) invert(40%) sepia(85%) saturate(1119%) hue-rotate(127deg) brightness(96%) contrast(101%)`;
  // Filter for white
  const whiteFilter = `brightness(0) saturate(100%) invert(100%)`;

  return (
    <Link to="/" className={`flex items-center gap-3 ${className}`}>
      <img 
        src="/Black logo - no background.svg" 
        alt="golfdeals.io" 
        className="h-12"
        style={{ filter: color === 'white' ? whiteFilter : emeraldFilter }}
      />
    </Link>
  );
}