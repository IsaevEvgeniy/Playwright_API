import { expect, test } from '@playwright/test';
import { usersFixtures } from '../src/fixtures/rest/users.fixtures';
import { UserResponse, UsersCreateDTO, UserUpdateDTO } from '../src/types/rest/users.types';
import { API_URLS } from '../src/urls/api-urls';

test.describe.serial('REST API: Users', () => {
  let userId: number = 0;

  test('GET/ Users filtering by role', async ({ request }) => {
    const response = await request.get(API_URLS.rest.users);
    const apiUsers: UserResponse[] = await response.json();
    expect(apiUsers).toBeInstanceOf(Array);
    expect(apiUsers.length).toBeGreaterThan(0);

    const usersAdmin: UserResponse[] = apiUsers.filter(
      (user: UserResponse) => user.role === 'admin'
    );
    const usersCustomer: UserResponse[] = apiUsers.filter(
      (user: UserResponse) => user.role === 'customer'
    );

    expect(usersAdmin.every((user) => user.role === 'admin')).toBe(true);
    expect(usersCustomer.every((user) => user.role === 'customer')).toBe(true);
  });

  test('POST/ Create user from test data', async ({ request }) => {
    const userToCreate: UsersCreateDTO = usersFixtures.create.valid.customer;
    const response = await request.post(API_URLS.rest.users, {
      data: {
        name: userToCreate.name,
        email: userToCreate.email,
        password: userToCreate.password,
        avatar: userToCreate.avatar,
      },
    });

    expect(response.ok()).toBeTruthy();
    expect(response.status()).toBe(201);

    const createdUser: UserResponse = await response.json();
    userId = createdUser.id;
    expect(createdUser.id).toBeDefined();
  });

  test('PUT/ Update user', async ({ request }) => {
    const userToUpdate: UserUpdateDTO = usersFixtures.update.valid.customer;
    const response = await request.put(API_URLS.rest.userById(userId), {
      data: {
        email: userToUpdate.email,
      },
    });
    expect(response.ok()).toBeTruthy();
    expect(response.status()).toBe(200);

    const updatedUser: UserResponse = await response.json();
    expect(updatedUser.id).toBe(userId);
    expect(updatedUser.email).toBe(userToUpdate.email);
  });

  test('DELETE/ Remove created user', async ({ request }) => {
    const response = await request.delete(API_URLS.rest.userById(userId));
    expect(response.status()).toBe(200);
  });
});
