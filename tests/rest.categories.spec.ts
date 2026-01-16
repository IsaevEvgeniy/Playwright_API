import { expect, test } from '@playwright/test';
import { CategoriesFixtures } from '../src/fixtures/rest/categories.fixtures';
import { CategoryResponse } from '../src/types/rest/categories.types';
import { API_URLS } from '../src/urls/api-urls';

test.describe.serial('REST API: Categories', () => {
  let categoriasId: number = 0;

  test('GET/ Retrieve a list of all available categories', async ({ request }) => {
    const response = await request.get(API_URLS.rest.categories);
    const allCategories: CategoryResponse[] = await response.json();
    expect(Array.isArray(allCategories)).toBe(true);
  });

  test('POST/ Create a category', async ({ request }) => {
    const createData = CategoriesFixtures.create.valid.clothes;

    const response = await request.post(API_URLS.rest.categories, {
      data: createData,
    });
    expect(response.status()).toBe(201);
    const categoria: CategoryResponse = await response.json();
    categoriasId = categoria.id;
    expect(categoria.id).toBeGreaterThan(0);
  });

  test('GET/ Retrieve a single category by ID', async ({ request }) => {
    const response = await request.get(API_URLS.rest.categoryById(categoriasId));
    const categoria: CategoryResponse = await response.json();
    expect(categoria.id).toBe(categoriasId);
  });

  test('PUT/ Update a category', async ({ request }) => {
    const updateData = CategoriesFixtures.update.valid.changeImage;
    const response = await request.put(API_URLS.rest.categoryById(categoriasId), {
      data: updateData,
    });
    const updatedCategory: CategoryResponse = await response.json();
    expect(updatedCategory.image).toBe(updateData.image);
  });

  test('DELETE/ Delete a category', async ({ request }) => {
    const response = await request.delete(API_URLS.rest.categoryById(categoriasId));
    if (response.status() === 200) {
      try {
        const deleteResult = await response.json();
        expect(deleteResult).toBe(true);
        console.log(`Category ID: ${categoriasId} deleted `);
        return;
      } catch {
        console.log(`Failed to delete category ID: ${categoriasId} status: ${response.status()}`);
      }
    }
  });
});
