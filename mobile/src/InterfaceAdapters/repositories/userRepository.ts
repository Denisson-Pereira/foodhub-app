import { api } from '../../FramerowksDrivers/api/api';
import { User, LoginResponse } from '../../domain/entities/User';

export const userRepository = () => ({
  login: async (user: User): Promise<LoginResponse> => {
    try {
      const response = await api.post<LoginResponse>('/login', { 
        login: user.login, 
        password: user.password 
      });
      return response.data;
    } catch (error: any) {
      if (error.response) {
        throw new Error(`Login failed: ${error.response.data.message || 'Unknown error'}`);
      } else {
        throw new Error('Login failed: Network or server error');
      }
    }
  }
});