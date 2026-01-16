import { expect, test } from '@playwright/test';
import { API_URLS } from '../src/urls/api-urls';

test.describe.serial('GraphQL: Users', () => {
  test('Get all users emails', async ({ request }) => {
    const query = `
          query {
            users {
              id
              name
              email
            }
          }
        `;

    const response = await request.post(API_URLS.graphql, {
      data: {
        query: query,
      },
    });
    const result = (await response.json()) as {
      data?: {
        users: Array<{ id: number; name: string; email: string }>;
      };
    };
    const users = result.data?.users || [];
    const usersEmail: string[] = users.map((u) => u.email);
    expect(usersEmail).toBeInstanceOf(Array);
  });

  test('Create a user', async ({ request }) => {
    const query = `
          mutation {
            addUser(
              data: {
                name: "Nicolas"
                email: "nico@gmail.com"
                password: "12345"
                avatar: "https://api.lorem.space/image/face?w=150&h=220"
              }
            ) {
              id
              name
              avatar
            }
          }
        `;
    const response = await request.post(API_URLS.graphql, {
      data: {
        query: query,
      },
    });

    expect(response.ok()).toBeTruthy();
    const result = (await response.json()) as {
      data?: {
        addUser: { id: number; name: string; avatar: string };
      };
    };
    const createdUser = result.data?.addUser;
    expect(createdUser?.id).toBeDefined();
    expect(createdUser?.name).toBe('Nicolas');
    expect(createdUser?.avatar).toBe('https://api.lorem.space/image/face?w=150&h=220');
  });

  test('Check the email', async ({ request }) => {
    const response = await request.post(API_URLS.graphql, {
      data: {
        query: `
        query {
          isAvailable(email: "john@mail.com")
        }
      `,
      },
    });
    const result = (await response.json()) as {
      data?: {
        isAvailable: boolean;
      };
    };
    expect(response.ok()).toBeTruthy();
    expect(result.data?.isAvailable).toBe(false);
  });
});
