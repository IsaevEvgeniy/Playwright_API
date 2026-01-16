import dotenv from 'dotenv';

dotenv.config();

export const CONFIG = {
  email: process.env.USER_EMAIL,
  password: process.env.USER_PASSWORD,
};
