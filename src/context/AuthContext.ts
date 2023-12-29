import { createContext } from "react";

interface AuthState {
  username: string;
  password: string;
}

export const AuthContext = createContext<AuthState>({
  username: "",
  password: "",
});
