import React, { createContext, useEffect, useState } from "react";
import authService from "../services/auth.service";
import userService from "../services/user.service";

export const TOKEN_NAME = "authToken";

export const AuthContext = createContext();

export const AuthContextWrapper = ({ children }) => {
  const [user, setUser] = useState();
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState();

  useEffect(() => {
    authenticate();
  }, []);

  const storeToken = (token) => {
    localStorage.setItem(TOKEN_NAME, token);
  };

  const removeToken = () => {
    localStorage.removeItem(TOKEN_NAME);
  };

  const logout = () => {
    setLoading(false);
    setUser();
    removeToken();
  };

  const authenticate = async () => {
    const token = localStorage.getItem(TOKEN_NAME);
    if (!token) {
      logout();
    }
    setLoading(true);
    return authService
      .verify(token)
      .then((user) => {
        setLoading(false);
        userService.getCurrentUser().then(({ data }) => setUser(data));
      })
      .catch((err) => {
        logout();
        setError("You are not authenticated!");
      });
  };

  return (
    <AuthContext.Provider
      value={{
        loading,
        user,
        storeToken,
        authenticate,
        setUser,
        logout,
        removeToken,
        error,
      }}
    >
      {children}
    </AuthContext.Provider>
  );
};
