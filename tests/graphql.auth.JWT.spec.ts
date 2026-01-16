import { expect, test } from '@playwright/test';
import { CONFIG } from '../api.config';
import { API_URLS } from '../src/urls/api-urls';

test.describe.serial('GraphQL: Auth with JWT', () => {
  let access_token: string = '';
  let refresh_token: string = '';

  test('Authentication', async ({ request }) => {
    const query = `
      mutation {
        login(email: "${CONFIG.email}", password: "${CONFIG.password}") {
          access_token
          refresh_token
        }
      }
    `;
    const response = await request.post(`${API_URLS.graphql}/login`, {
      data: {
        query: query,
      },
    });
    expect(response.status()).toBe(200);
    const token = await response.json();
    access_token = token.data.login.access_token;
    refresh_token = token.data.login.refresh_token;
  });

  test('Get a new Access Token with a Refresh Token', async ({ request }) => {
    const query = `
    mutation {
      refreshToken(refreshToken: "${refresh_token}") {
        access_token
        refresh_token
      }
    }
  `;

    const response = await request.post(`${API_URLS.graphql}`, {
      data: {
        query: query,
      },
    });
    expect(response.status()).toBe(200);
    const token = await response.json();
    access_token = token.data.refreshToken.access_token;
    refresh_token = token.data.refreshToken.refresh_token;
  });
});
