export const USER_DATA = {
  IDS: {
    ADMIN: 1,
    CUSTOMER: 2,
  },

  EMAILS: {
    ADMIN: 'admin@example.com',
    CUSTOMER: 'customer@example.com',
  },

  PASSWORDS: {
    ADMIN: 'admin123',
    CUSTOMER: 'customer123',
  },

  NAMES: {
    ADMIN: 'Admin User',
    CUSTOMER: 'Customer User',
  },

  ROLES: {
    ADMIN: 'admin',
    CUSTOMER: 'customer',
  },

  AVATARS: {
    ADMIN: 'https://api.lorem.space/image/face?w=640&h=480',
    CUSTOMER: 'https://api.lorem.space/image/face?w=640&h=480',
  },

  DATES: {
    CREATION: {
      ADMIN: '',
      CUSTOMER: '',
    },

    UPDATE: {
      ADMIN: '',
      CUSTOMER: '',
    },
  },
} as const;
