export interface Deal {
  id: string;
  title: string;
  description: string;
  originalPrice: number;
  discountedPrice: number;
  image: string;
  category: string;
  merchant: string;
  brand: string;
  dateAdded: string;
  url: string;
  views: number;
}