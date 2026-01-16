import { expect, test } from '@playwright/test';
import { CONFIG } from '../api.config';
import { authJWTResponse } from '../src/types/rest/auth.JWT.types';
import { UserResponse } from '../src/types/rest/users.types';
import { API_URLS } from '../src/urls/api-urls';

test.describe.serial('REST API: Auth with JWT', () => {
  let access_token: string = '';
  let refresh_token: string = '';

  test('POST/ Login - get JWT tokens', async ({ request }) => {
    const response = await request.post(`${API_URLS.rest.auth}/login`, {
      data: {
        email: CONFIG.email,
        password: CONFIG.password,
      },
    });
    expect(response.status()).toBe(201);
    const tokens: authJWTResponse = await response.json();
    access_token = tokens.access_token;
    refresh_token = tokens.refresh_token;
  });

  test('GET/ Profile - get user profile', async ({ request }) => {
    const response = await request.get(`${API_URLS.rest.auth}/profile`, {
      headers: {
        Authorization: `Bearer ${access_token}`,
      },
    });
    expect(response.status()).toBe(200);
    const UserProfile: UserResponse = await response.json();
  });

  test('POST/ Refresh-Token - refreshing access token', async ({ request }) => {
    const response = await request.post(`${API_URLS.rest.auth}/refresh-token`, {
      data: {
        refreshToken: refresh_token,
      },
    });
    expect(response.status()).toBe(201);
    const newTokens: authJWTResponse = await response.json();
    expect(newTokens.access_token).not.toBe(access_token);
    expect(newTokens.refresh_token).not.toBe(refresh_token);
  });
});
