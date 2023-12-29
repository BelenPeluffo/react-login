import { createContext } from "react";
import { LoginData, User } from "../services/AuthServices";

export interface AuthState {
  user: User;
  token: string;
  login: (userData: LoginData) => void;
  logout: () => void;
}

// const defaultData = { email: "", password: "" };

export const AuthContext = createContext<AuthState>({
  user: {} as User,
  token: "",
  login: (defaultData) => {
    console.log("data?", defaultData);
  },
  logout: () => {
    console.log("void");
  },
});
