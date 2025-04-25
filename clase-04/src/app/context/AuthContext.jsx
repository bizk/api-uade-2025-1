// src/app/context/AuthContext.jsx
'use client';
import { createContext, useContext, useState } from 'react';

const AuthContext = createContext(null);

export const useAuth = () => useContext(AuthContext);

export const AuthProvider = ({ children }) => {
  const [auth, setAuth] = useState({ token: null, role: null });

  const login = ({ token, role }) => {
    setAuth({ token, role });
    localStorage.setItem('token', token);
  };
  const logout = () => {
    setAuth({ token: null, role: null });
    localStorage.removeItem('token');
  };

  return (
    <AuthContext.Provider value={{ auth, login, logout }}>
      {children}
    </AuthContext.Provider>
  );
};
