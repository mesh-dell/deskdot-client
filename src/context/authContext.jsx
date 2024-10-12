import { createContext, useState } from "react";

export const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);

  const setLogin = (userData) => {
    setUser(userData);
  };

  const setLogout = () => {
    setUser(null);
  };

  return (
    <AuthContext.Provider value={{ user, setLogin, setLogout }}>
      {children}
    </AuthContext.Provider>
  );
};
