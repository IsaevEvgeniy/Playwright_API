import { expect, test } from '@playwright/test';
import { API_URLS } from '../src/urls/api-urls';

test.describe.serial('GraphQL: Products', () => {
  test('Get all products', async ({ request }) => {
    const query = `
        query {
          products {
          id
          title
          price
          description
          images
            category {
            id
            name
            image
        }
      }
    }
   `;
    const response = await request.post(API_URLS.graphql, {
      headers: {
        'Content-Type': 'application/json',
      },
      data: {
        query: query,
      },
    });
    const allProducts = await response.json();
    console.log(allProducts);
  });

  test('Create a product', async ({ request }) => {
    const query = `
        mutation {
          addProduct(
            data: {
              title: "New Product"
              price: 10
              description: "A description"
              categoryId: 1
              images: ["https://placeimg.com/640/480/any"]
            }
          ) {
            id
            title
            price
            description
            images
            category {
              id
              name
              image
            }
          }
        }
      `;

    const response = await request.post(API_URLS.graphql, {
      headers: {
        'Content-Type': 'application/json',
      },
      data: {
        query: query,
      },
    });

    expect(response.ok()).toBeTruthy();
    console.log('Status:', response.status());
  });
});
