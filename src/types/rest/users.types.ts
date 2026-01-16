export interface UsersCreateDTO {
  name: string;
  email: string;
  password: string;
  avatar: string;
}

export interface UserUpdateDTO {
  name?: string;
  email?: string;
}

export interface UserResponse {
  id: number;
  email: string;
  name: string;
  role: string;
  avatar: string;
  creationAt: string;
  updatedAt: string;
}
