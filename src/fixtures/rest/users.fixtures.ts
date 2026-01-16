import { USER_DATA } from '../../constants/rest/user.data';
import { UsersCreateDTO, UserUpdateDTO } from '../../types/rest/users.types';

export const usersFixtures = {
  create: {
    valid: {
      customer: {
        email: USER_DATA.EMAILS.CUSTOMER,
        password: USER_DATA.PASSWORDS.CUSTOMER,
        name: `${USER_DATA.NAMES.CUSTOMER}_${Date.now()}`,
        avatar: USER_DATA.AVATARS.CUSTOMER,
      } as UsersCreateDTO,

      admin: {
        email: USER_DATA.EMAILS.ADMIN,
        password: USER_DATA.PASSWORDS.ADMIN,
        name: `${USER_DATA.NAMES.ADMIN}_${Date.now()}`,
        avatar: USER_DATA.AVATARS.ADMIN,
      } as UsersCreateDTO,
    },

    invalid: {
      customerEmptyName: {
        email: USER_DATA.EMAILS.CUSTOMER,
        password: USER_DATA.PASSWORDS.CUSTOMER,
        name: '',
        avatar: USER_DATA.AVATARS.CUSTOMER,
      } as UsersCreateDTO,
    },
  },
  update: {
    valid: {
      customer: {
        name: `NewName_${USER_DATA.NAMES.CUSTOMER}_${Date.now()}`,
        email: `NewEmail_${USER_DATA.EMAILS.CUSTOMER}`,
      } as UserUpdateDTO,

      admin: {
        name: `NewName_${USER_DATA.NAMES.ADMIN}_${Date.now()}`,
        email: `NewEmail_${USER_DATA.EMAILS.ADMIN}`,
      } as UserUpdateDTO,
    },
  },
};
