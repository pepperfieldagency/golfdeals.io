import React from 'react';
import { Helmet } from 'react-helmet-async';
import { Deal } from '../types';

interface MetaTagsProps {
  title: string;
  description: string;
  image?: string;
  deal?: Deal;
}

export default function MetaTags({ title, description, image, deal }: MetaTagsProps) {
  // If we have a deal, use its image and create a deal-specific description
  const metaImage = deal?.image || image || 'https://golfdeals.io/og-image.jpg';
  const metaDescription = deal 
    ? `Save ${Math.round(((deal.originalPrice - deal.discountedPrice) / deal.originalPrice) * 100)}% on ${deal.title}. Original price: $${deal.originalPrice}, now only $${deal.discountedPrice}!` 
    : description;

  return (
    <Helmet>
      <title>{title}</title>
      <meta name="description" content={metaDescription} />

      {/* Open Graph / Facebook */}
      <meta property="og:type" content="website" />
      <meta property="og:title" content={title} />
      <meta property="og:description" content={metaDescription} />
      <meta property="og:image" content={metaImage} />

      {/* Twitter */}
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content={title} />
      <meta name="twitter:description" content={metaDescription} />
      <meta name="twitter:image" content={metaImage} />
    </Helmet>
  );
}