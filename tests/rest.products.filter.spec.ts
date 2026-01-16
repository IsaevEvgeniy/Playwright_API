import { expect, test } from '@playwright/test';
import { ProductResponse } from '../src/types/rest/product.types';
import { API_URLS } from '../src/urls/api-urls';

test.describe.serial('REST API: Products Filtering', () => {
  test('GET/ Filter products by title containing "Generic"', async ({ request }) => {
    const response = await request.get(`${API_URLS.rest.products}?title=Generic`);
    const products: ProductResponse[] = await response.json();
    const filter = products.filter((p) => p.title.includes('Generic'));
    expect(response.ok()).toBeTruthy();
    expect(filter.length).toBe(products.length);
  });

  test('GET/ Filter products with exact price 100', async ({ request }) => {
    const response = await request.get(`${API_URLS.rest.products}?price=100`);
    const products: ProductResponse[] = await response.json();
    const count = products.reduce((acc, product) => {
      if (product.price === 100) {
        return acc + 1;
      }
      return acc;
    }, 0);
    expect(response.ok()).toBeTruthy();
    expect(count).toBe(products.length);
    console.log(count);
  });

  test('GET/ Filter products with price between 900 and 1000', async ({ request }) => {
    const response = await request.get(`${API_URLS.rest.products}?price_min=900&price_max=1000`);
    const products: ProductResponse[] = await response.json();
    const filter = products.filter((p: any) => p.price >= 900 && p.price <= 1000);
    expect(response.ok()).toBeTruthy();
    expect(filter.length).toBe(products.length);
  });

  test('GET/ Filter products by category ID 1', async ({ request }) => {
    let count: number = 0;
    const response = await request.get(`${API_URLS.rest.products}?categoryId=1`);
    const products: ProductResponse[] = await response.json();
    products.forEach((product) => {
      if (product.category.id === 1) {
        count++;
      }
    });
    expect(response.ok()).toBeTruthy();
    expect(count).toBe(products.length);
  });
});
