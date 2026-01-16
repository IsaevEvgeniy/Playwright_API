export interface CategoryDTO {
  id: number;
  name: string;
  image: string;
  creationAt: string;
  updatedAt: string;
}

export interface CategoriesCreateDTO {
  name: string;
  image: string;
}

export interface CategoriesUpdateDTO {
  name?: string;
  image?: string;
}

export interface CategoryResponse extends CategoryDTO {
  slug: string;
}
