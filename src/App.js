import React from "react";
import { Routes, Route, Navigate } from "react-router-dom";
import LoginPage from "./Components/LoginPage";
import RegisterPage from "./Components/RegisterPage";
import HomePage from "./Components/HomePage";
import { useSelector } from "react-redux";

function App() {
  const isAuthenticated = useSelector((state) => state.auth.isAuthenticated);

  return (
    <Routes>
      <Route
        path="/login"
        element={isAuthenticated ? <Navigate to="/" /> : <LoginPage />}
      />
      <Route
        path="/register"
        element={isAuthenticated ? <Navigate to="/" /> : <RegisterPage />}
      />
      <Route
        path="/"
        element={isAuthenticated ? <HomePage /> : <Navigate to="/login" />}
      />
    </Routes>
  );
}

export default App;
