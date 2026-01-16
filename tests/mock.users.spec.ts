import { expect, test } from '@playwright/test';
import { statusFixtures } from '../src/fixtures/rest/status.fixtures';
import { StatusDTO } from '../src/types/rest/status.type';
import { API_URLS } from '../src/urls/api-urls';

test('Mock: GET users returns mocked response', async ({ page }) => {
  const mockData: StatusDTO = statusFixtures.success.created;

  await page.route(API_URLS.rest.users, async (route) => {
    await route.fulfill({
      status: 201,
      contentType: 'application/json',
      body: JSON.stringify(mockData),
    });
  });

  const fetchedData: StatusDTO = await page.evaluate(async (url) => {
    const response: Response = await fetch(url);
    return await response.json();
  }, API_URLS.rest.users);
  expect(mockData).toEqual(fetchedData);
});
