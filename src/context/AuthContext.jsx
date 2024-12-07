import { createContext, useState, useContext } from "react";

// Create an AuthContext
const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
  const [auth, setAuth] = useState({ isAuthenticated: false, user: [] }); 
  return (
    <AuthContext.Provider value={{ auth, setAuth }}>
      {children}
    </AuthContext.Provider>
  );
};
// Custom hook to use the context
export const useAuth = () => useContext(AuthContext);
