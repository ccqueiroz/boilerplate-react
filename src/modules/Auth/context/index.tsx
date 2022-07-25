import React, { createContext, useContext } from 'react';
// import { useLocation, useNavigate } from 'react-router-dom';
import { authUseCases } from '../../../services/providers/auth';

interface AuthContextProps {
  isAuthenticated: boolean;
}

type AuthProvider = {
  children: React.ReactElement;
};

const AuthContext = createContext({} as AuthContextProps);

const AuthProvider: React.FC<AuthProvider> = ({ children }) => {
  const { isAuthenticated } = authUseCases.handleGetAuth();

  return <AuthContext.Provider value={{ isAuthenticated: Boolean(isAuthenticated) }}>{children}</AuthContext.Provider>;
};

function useAuth(): AuthContextProps {
  const context = useContext<AuthContextProps>(AuthContext);
  if (!context) {
    throw new Error('useAuth must be used within an AuthProvider.');
  }
  return context;
}

export { AuthProvider, useAuth };
