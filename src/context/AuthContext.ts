import { createContext } from "react";

export interface AuthState {
  username: string;
  sign: string;
}

export const AuthContext = createContext<AuthState>({
  username: "",
  sign: "",
});
