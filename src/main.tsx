import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.tsx";
import { AuthState } from "./context/AuthState.tsx";

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <AuthState>
      <App />
    </AuthState>
  </React.StrictMode>
);
