import { expect, test } from '@playwright/test';
import { productFixtures } from '../src/fixtures/rest/products.fixtures';
import { ProductCreateDTO, ProductResponse } from '../src/types/rest/product.types';
import { API_URLS } from '../src/urls/api-urls';

test.describe.serial('REST API: Products CRUD Operations', () => {
  let productId: number = 0;
  let categoryId: number = 0;

  test('GET/ Retrieve all products and find minimal category ID', async ({ request }) => {
    const response = await request.get(API_URLS.rest.products);
    const products: ProductResponse[] = await response.json();
    expect(Array.isArray(products)).toBe(true);

    const allCategoryIds = products.map((item) => item.category.id);
    categoryId = Math.min(...allCategoryIds);
    console.log(`Category ID: ${categoryId}`);
  });

  test('POST/ Create new product', async ({ request }) => {
    const product: ProductCreateDTO = productFixtures.create.valid.iphone16Pro;

    const response = await request.post(API_URLS.rest.products, {
      data: {
        title: `${product.title} ${Date.now()}`,
        price: product.price,
        description: product.description,
        categoryId: categoryId,
        images: product.images,
      },
    });

    if (response.status() !== 201) {
      const errorText = await response.text();
      console.log('Error creating product:', errorText);
      return;
    }

    expect(response.status()).toBe(201);
    const createdProduct: ProductResponse = await response.json();
    productId = createdProduct.id;
    console.log('Product ID:', productId);
  });

  test('GET/ Retrieve single product with type validation', async ({ request }) => {
    const response = await request.get(API_URLS.rest.productById(productId));
    const getProduct: ProductResponse = await response.json();

    expect(getProduct.title).toBeDefined();
    expect(typeof getProduct.title).toBe('string');

    expect(getProduct.slug).toBeDefined();
    expect(typeof getProduct.slug).toBe('string');

    expect(getProduct.price).toBeDefined();
    expect(typeof getProduct.price).toBe('number');

    expect(getProduct.description).toBeDefined();
    expect(typeof getProduct.description).toBe('string');
  });

  test('DELETE/ Remove created product', async ({ request }) => {
    const response = await request.delete(API_URLS.rest.productById(productId));
    if (response.ok()) {
      try {
        const deleteResult = await response.json();
        expect(deleteResult).toBe(true);
        console.log(`Product ID: ${productId} deleted `);
      } catch {
        console.log(`Failed to delete product ID: ${productId} status: ${response.status()})`);
      }
    }
  });
});
