export interface ProductVariant {
  id: string;
  name: string;
  color?: string;
  size?: string;
  price: number;
  images: string[];
  stock: number;
}

export interface Product {
  id: string;
  name: string;
  slug: string;
  description: string;
  price: number;
  images: string[];
  variants: ProductVariant[];
  categoryId: string;
  rating: number;
  isFeatured?: boolean;
}

export interface Category {
  id: string;
  name: string;
  slug: string;
  parentId?: string;
} 