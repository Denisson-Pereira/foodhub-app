export interface User {
  login: string;
  password: string;
  validate: () => boolean;
}

export interface LoginResponse {
  id: number;
  name: string;
  login: string;
  password: string;
}

export const createUser = (login: string, password: string): User => ({
  login,
  password,
  validate: () => login.length > 0 && password.length > 0,
});