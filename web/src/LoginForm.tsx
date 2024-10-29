// LoginForm.tsx
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { IUser } from './models/User';
import { loginService } from './services/login';

const LoginForm: React.FC = () => {
  const [login, setLogin] = useState<string>('');
  const [password, setPassword] = useState<string>('');
  const [error, setError] = useState<string | null>(null);
  const navigate = useNavigate();

  const handleLogin = async (e: React.FormEvent) => {
    e.preventDefault();
    setError(null);

    try {
      const response = await loginService(login, password, (user: IUser) => {
        console.log("Usuário logado:", user);
      });

      if (response.status) {
        navigate('/bem-vindo');
      } 
    } catch (error) {
      console.error("Erro ao tentar logar:", error);
      setError("Erro ao tentar logar. Por favor, tente novamente.");
    }
  };

  return (
    <form onSubmit={handleLogin}>
      <input 
        type="text" 
        placeholder="login"
        value={login} 
        onChange={(e) => setLogin(e.target.value)}
      />
      <input 
        type="password" 
        placeholder="password"
        value={password} 
        onChange={(e) => setPassword(e.target.value)}
      />
      <button type="submit">LOGIN</button>
      {error && <p style={{ color: 'red' }}>{error}</p>}
    </form>
  );
};

export default LoginForm;
