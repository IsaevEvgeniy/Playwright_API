import { expect, test } from '@playwright/test';
import { LocationsResponse } from '../src/types/rest/locations.types';
import { API_URLS } from '../src/urls/api-urls';

test.describe.serial('REST API: Locations', () => {
  test('GET/ All locations', async ({ request }) => {
    const response = await request.get(API_URLS.rest.locations);
    expect(response.ok()).toBeTruthy();
    expect(response.status()).toBe(200);

    const allLocations: LocationsResponse[] = await response.json();
    expect(Array.isArray(allLocations)).toBeTruthy();

    allLocations.forEach((location) => {
      expect(typeof location.id).toBe('number');
      expect(typeof location.name).toBe('string');
      expect(typeof location.description).toBe('string');
      expect(typeof location.latitude).toBe('number');
      expect(typeof location.longitude).toBe('number');
    });
  });

  test('GET/ Locations by origin', async ({ request }) => {
    const response = await request.get(`${API_URLS.rest.locations}?origin=6.2071641,-75.5720321`);
    const locations: LocationsResponse[] = await response.json();
    expect(locations.length).toBeGreaterThan(0);
  });

  test('Get locations within a radius', async ({ request }) => {
    const response = await request.get(
      `${API_URLS.rest.locations}?origin=6.2071641,-75.5720321&radius=10`
    );
    const locations: LocationsResponse[] = await response.json();
    expect(Array.isArray(locations)).toBeTruthy();
    expect(locations.length).toBe(10);
  });
});
