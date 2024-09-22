// contexts/AuthContext.tsx
import axios from 'axios';
import React, { createContext, useState } from 'react';

// Criar o contexto
export const AuthContext = createContext<AuthContextData | null>(null);

// Definir os tipos para o contexto
type AuthContextData = {
  isAuthenticated: boolean;
  token: string | null;
  setToken: (token: string) => void;
  error: boolean | null;
  setError: (error: boolean) => void;
};


// Provedor do AuthContext
export const AuthProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [token, setToken] = useState<string | null>(null);
  const [error, setError] = useState<boolean | null>(null);
  const isAuthenticated = !!token;
  console.log('Token no context: ', token)

  // Configurando um interceptor global de requisições
  axios.interceptors.request.use(
    (config) => {
      console.log('interceptor axios');
      if (token) {
        config.headers['Authorization'] = `${token}`;
        console.log('Header da requisicao: ', token)
      }
      return config; // Retorna a configuração modificada
    },
    (error) => {
      // Lidar com erros de requisição
      return Promise.reject(error);
    }
  );

  return (
    <AuthContext.Provider value={{ isAuthenticated, token, setToken, error, setError }}>
      {children}
    </AuthContext.Provider>
  );
};



