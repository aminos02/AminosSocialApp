import React from "react";
import "./login.css";
function Login() {
  return (
    <div className="login">
      <h1>AminoSocial</h1>
      <h3>Connect with freinds and the world around you on AminoSocial</h3>
      <div className="form__container">
        <label htmlFor="login__email">
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
          Log In
        </button>
        <button type="submit" className="create__btn login__btn ">
          Create a New Account
        </button>
        <div className="login__forgot">
          <a href="" className="login__forgot">
            Forgot Password?
          </a>
        </div>
      </div>
    </div>
  );
}

export default Login;
