import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.tsx";
import { AuthState } from "./context/AuthState.tsx";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Register from "./pages/Register.tsx";

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <BrowserRouter>
      <AuthState>
        <Routes>
          <Route path="/" element={<App />} />
          <Route path="/register" element={<Register />} />
        </Routes>
      </AuthState>
    </BrowserRouter>
  </React.StrictMode>
);
