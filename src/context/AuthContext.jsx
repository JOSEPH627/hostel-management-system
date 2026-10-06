import { createContext, useContext, useEffect, useState } from "react";

const AuthContext = createContext();

function AuthProvider({ children }) {
  const [currentUser, setCurrentUser] = useState(() => {
    try {
      const savedUser = localStorage.getItem("hm_hostel_user");

      return savedUser ? JSON.parse(savedUser) : null;
    } catch (error) {
      console.error("Failed to load saved user:", error);
      return null;
    }
  });

  useEffect(() => {
    if (currentUser) {
      localStorage.setItem(
        "hm_hostel_user",
        JSON.stringify(currentUser)
      );
    } else {
      localStorage.removeItem("hm_hostel_user");
    }
  }, [currentUser]);

  const login = (user) => {
    setCurrentUser(user);
  };

  const logout = () => {
    setCurrentUser(null);
  };

  const value = {
    currentUser,
    login,
    logout,
    isAuthenticated: currentUser !== null,
  };

  return (
    <AuthContext.Provider value={value}>
      {children}
    </AuthContext.Provider>
  );
}

function useAuth() {
  return useContext(AuthContext);
}

export { AuthProvider, useAuth };