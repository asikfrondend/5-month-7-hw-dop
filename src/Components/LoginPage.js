import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { login } from "../redux/authSlice";
import { Link, useNavigate } from "react-router-dom";
import "./css/LoginPage.css";

function LoginPage() {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!username || !password) {
      alert("Пожалуйста, введите имя пользователя и пароль.");
      return;
    }
    dispatch(login({ username, password }))
      .then(() => {
        navigate("/welcome");
      })
      .catch((error) => {
        alert(
          "Неверное имя пользователя или пароль. Пожалуйста, попробуйте еще раз или зарегистрируйтесь."
        );
        navigate("/register");
      });
  };

  return (
    <div className="login-container">
      <h2>Login</h2>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
          placeholder="Username"
        />
        <input
          type="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          placeholder="Password"
        />
        <label>
          <input type="checkbox" /> Remember me
        </label>
        <button type="submit">Sign In</button>
      </form>
      <p>
        Забыли <Link to="/forgot-password">password</Link>?
      </p>
      <p>
        У вас нет учетной записи? <Link to="/register">Sign Up</Link>
      </p>
    </div>
  );
}

export default LoginPage;
