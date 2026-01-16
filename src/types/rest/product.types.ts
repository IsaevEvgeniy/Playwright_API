import { CategoryDTO } from '../../types/rest/categories.types';

export interface ProductDTO {
  id: number;
  title: string;
  slug: string;
  price: number;
  description: string;
  category: CategoryDTO;
  images: string[];
  creationA?: string;
  updatedAt?: string;
}

export interface ProductCreateDTO {
  title: string;
  price: number;
  description: string;
  categoryId: number;
  images: string[];
}

export interface ProductUpdateDTO {
  title?: string;
  price?: number;
  description?: string;
  categoryId?: number;
  images?: string[];
}

export type ProductResponse = ProductDTO;
