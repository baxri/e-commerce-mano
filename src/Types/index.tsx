export interface Product {
  id: number;
  title: string;
  images: Array<{ thumbnail: string; large: string }>;
  categories: Array<{ title: string }>;
  price: number;
  sku: string;
  class_name: string;
  original_price: string;
  discounted_price: string;
}
