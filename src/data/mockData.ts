import { Deal, Category } from '../types';

export const categories: Category[] = [
  { id: '1', name: 'Equipment', icon: 'club' },
  { id: '2', name: 'Apparel', icon: 'shirt' },
  { id: '3', name: 'Footwear', icon: 'footprints' },
  { id: '4', name: 'Accessories', icon: 'shopping-bag' },
];

export const deals: Deal[] = [
  {
    id: '1',
    title: 'TaylorMade Qi10 Driver',
    description: 'Revolutionary AI-designed driver with advanced carbon construction for maximum distance and forgiveness',
    originalPrice: 599.99,
    discountedPrice: 499.99,
    image: 'https://images.unsplash.com/photo-1535131749006-b7f58c99034b?auto=format&fit=crop&w=800&q=80',
    category: 'Equipment',
    merchant: 'Golf Galaxy',
    brand: 'TaylorMade',
    dateAdded: new Date().toISOString(),
    url: 'https://example.com/taylormade-driver'
  },
  {
    id: '2',
    title: 'Nike Dri-FIT Victory Golf Polo',
    description: 'Premium golf polo with moisture-wicking technology for all-day comfort on the course',
    originalPrice: 65,
    discountedPrice: 49.99,
    image: 'https://images.unsplash.com/photo-1576566588028-4147f3842f27?auto=format&fit=crop&w=800&q=80',
    category: 'Apparel',
    merchant: 'PGA Tour Superstore',
    brand: 'Nike',
    dateAdded: new Date().toISOString(),
    url: 'https://example.com/nike-polo'
  },
  {
    id: '3',
    title: 'Titleist Pro V1 Golf Balls (12-Pack)',
    description: 'Tour-proven performance with exceptional distance, consistent flight, and Drop-and-Stop control',
    originalPrice: 54.99,
    discountedPrice: 39.99,
    image: 'https://images.unsplash.com/photo-1587174486073-ae5e5cff23aa?auto=format&fit=crop&w=800&q=80',
    category: 'Equipment',
    merchant: 'Dick\'s Sporting Goods',
    brand: 'Titleist',
    dateAdded: new Date().toISOString(),
    url: 'https://example.com/titleist-balls'
  }
];