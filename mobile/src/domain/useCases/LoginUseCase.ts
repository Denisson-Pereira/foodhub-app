import { LoginResponse, User, createUser } from '../entities/User';

export interface UserRepository {
  login: (user: User) => Promise<LoginResponse>;
}

export const loginUseCase = (userRepository: UserRepository) => 
  async (login: string, password: string): Promise<LoginResponse> => {
    const user = createUser(login, password);
    if (user.validate()) {
      return await userRepository.login(user);
    } else {
      throw new Error('Login or password cannot be empty');
    }
};