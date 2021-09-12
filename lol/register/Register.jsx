import React from "react";
import "../login/Login";
import "./register.css";
function Register() {
  return (
    <div className="login">
      <h1>AminoSocial</h1>
      <h3>Connect with freinds and the world around you on AminoSocial</h3>
      <div className="form__container">
        <label htmlFor="login__username">
          <h4>UserName</h4>
        </label>
        <input
          type="text"
          id="login__username"
          className="login__input"
          placeholder="Username"
        />
        <label htmlFor="register__email">
          <h4>Email</h4>
        </label>
        <input
          type="email"
          id="login__email"
          className="login__input"
          placeholder="email"
        />

        <label htmlFor="login__password">
          <h4>Password</h4>
        </label>
        <input
          type="password"
          id="login__password"
          className="login__input"
          placeholder="password"
        />
        <button type="submit" className="login__btn">
          Register
        </button>
        <button type="submit" className="create__btn login__btn ">
          Go To Log In
        </button>
      </div>
    </div>
  );
}

export default Register;
