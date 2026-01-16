import { expect, test } from '@playwright/test';
import { API_URLS } from '../src/urls/api-urls';

test.describe('API: Documentation', () => {
  test('GET/docs/ - homepage should be accessible with correct title', async ({ request }) => {
    const response = await request.get(API_URLS.docs.base);
    expect(response.status()).toBe(200);
    const body = await response.text();
    expect(body).toContain('Platzi Fake Store API');
  });

  test('GET/docs/introduction - should be successful HTML response', async ({ request }) => {
    const response = await request.get(API_URLS.docs.introduction);
    expect(response.ok()).toBeTruthy();
    expect(response.headers()['content-type']).toContain('text/html');
  });

  test('GET/docs/showcase - should load quickly with valid content', async ({ request }) => {
    const start = Date.now();
    const response = await request.get(API_URLS.docs.showcase);
    const duration = Date.now() - start;
    expect(response.status()).toBe(200);
    console.log(`Showcase page loaded in ${duration}ms`);
    expect(duration).toBeLessThan(2000);
    const body = await response.text();
    expect(body).toContain('<!DOCTYPE html>');
    expect(body.toLowerCase()).toContain('showcase');
  });
});
