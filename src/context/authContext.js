import { createContext, useState } from "react";
import { useNavigate } from "react-router-dom";
import {
  login as loginService,
  logout as logoutService,
} from "../services/authService";

export const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  const navigate = useNavigate();

  const login = async (credentials) => {
    const userData = await loginService(credentials);
    setUser(userData);
    navigate("/");
  };

  const logout = () => {
    logoutService(user);
    setUser(null);
    navigate("/");
  };

  const isAuthenticated = () => {
    return user !== null;
  };

  return (
    <AuthContext.Provider value={{ user, login, logout, isAuthenticated }}>
      {children}
    </AuthContext.Provider>
  );
};
