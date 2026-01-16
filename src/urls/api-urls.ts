export interface IApiUrls {
  docs: {
    base: string;
    introduction: string;
    showcase: string;
    swagger: string;
  };

  rest: {
    products: string;
    categories: string;
    users: string;
    auth: string;
    locations: string;
    files: string;

    productById: (id: string | number) => string;
    categoryById: (id: string | number) => string;
    userById: (id: string | number) => string;
  };

  graphql: string;
}

export const API_URLS: IApiUrls = {
  docs: {
    base: 'https://fakeapi.platzi.com/en',
    introduction: 'https://fakeapi.platzi.com/en/about/introduction/',
    showcase: 'https://fakeapi.platzi.com/en/about/showcase/',
    swagger: 'https://fakeapi.platzi.com/en/rest/swagger/',
  },

  rest: {
    products: 'https://api.escuelajs.co/api/v1/products/',
    categories: 'https://api.escuelajs.co/api/v1/categories',
    users: 'https://api.escuelajs.co/api/v1/users/',
    auth: 'https://api.escuelajs.co/api/v1/auth',
    locations: 'https://api.escuelajs.co/api/v1/locations',
    files: 'https://api.escuelajs.co/api/v1/files/upload',

    productById: (id: string | number) => `https://api.escuelajs.co/api/v1/products/${id}`,
    categoryById: (id: string | number) => `https://api.escuelajs.co/api/v1/categories/${id}`,
    userById: (id: string | number) => `https://api.escuelajs.co/api/v1/users/${id}`,
  },

  graphql: 'https://api.escuelajs.co/graphql',
} as const;
