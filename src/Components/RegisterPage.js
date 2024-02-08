import React, { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { register } from "../redux/authSlice";
import { Link } from "react-router-dom";
import PhoneInput from "react-phone-input-2";
import "react-phone-input-2/lib/style.css";
import "./css/RegisterPage.css";

function RegisterPage() {
  const isAuthenticated = useSelector((state) => state.auth.isAuthenticated);
  const [email, setEmail] = useState("");
  const [phoneNumber, setPhoneNumber] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [verificationCode, setVerificationCode] = useState("");
  const dispatch = useDispatch();

  const handleSubmit = (e) => {
    e.preventDefault();
    if (
      !email ||
      !phoneNumber ||
      !password ||
      !confirmPassword ||
      !verificationCode
    ) {
      alert(" Пожалуйста, заполните все поля.");
      return;
    }
    if (password !== confirmPassword) {
      alert("Пароли не совпадают. Пожалуйста, попробуйте еще раз.");
      return;
    }
    dispatch(register({ email, phoneNumber, password, verificationCode }));
  };

  const handleGetCode = () => {
    console.log("Код подтверждения отправлен на", email, phoneNumber);
  };

  return (
    <div className="register-container">
      <h2>Register</h2>
      <form onSubmit={handleSubmit}>
        <div>
          <label>Email:</label>
          <input
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
        </div>
        <div>
          <label>Phone Number:</label>
          <PhoneInput
            international
            defaultCountry="RU"
            value={phoneNumber}
            onChange={(value) => setPhoneNumber(value)}
          />
        </div>
        <div>
          <label>Password:</label>
          <input
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
        </div>
        <div>
          <label>Confirm Password:</label>
          <input
            type="password"
            value={confirmPassword}
            onChange={(e) => setConfirmPassword(e.target.value)}
          />
        </div>
        <div>
          <label>Verification Code:</label>
          <input
            type="text"
            value={verificationCode}
            onChange={(e) => setVerificationCode(e.target.value)}
          />
          <button type="button" onClick={handleGetCode}>
            Get Code
          </button>
        </div>
        <button type="submit">Register</button>
      </form>
      <p>
        У вас уже есть аккаунт? <Link to="/login">Login</Link>
      </p>
    </div>
  );
}

export default RegisterPage;
