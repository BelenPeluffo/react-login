import React, { useState } from "react";
import { AuthContext } from "./AuthContext";
import { LoginData, User, getUser } from "../services/AuthServices";

export const AuthState = ({ children }: { children: React.ReactNode }) => {
  const [user, setUser] = useState<User>({
    name: "",
    email: "",
    password: "",
    sign: "",
  });
  const [token, setToken] = useState<string>(
    localStorage.getItem("token") || ""
  );

  const login = (userData: LoginData) => {
    try {
      const response = getUser(userData.email, userData.password);
      if (response) {
        setUser(response.user);
        setToken(response.token);
        localStorage.setItem("token", response.token);
        return false;
      }
      throw new Error("The user or the password is not correct.");
    } catch (error) {
      return error.message;
    }
  };

  const logout = () => {
    setUser({} as User);
    setToken("");
    localStorage.removeItem("token");
  };

  return (
    <AuthContext.Provider value={{ user, token, login, logout }}>
      {children}
    </AuthContext.Provider>
  );
};
