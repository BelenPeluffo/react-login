import React from "react";
import { AuthContext } from "./AuthContext";

export const AuthState = ({ children }: { children: React.ReactNode }) => {
  return <AuthContext.Provider value={}>{children}</AuthContext.Provider>;
};
