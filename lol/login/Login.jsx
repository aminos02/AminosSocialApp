import React from "react";
import { useContext, useRef } from "react";
import { loginCall } from "../../apiCalls";
import { AuthContext } from "../../context/AuthContext";
import { CircularProgress } from "@material-ui/core";
import { useHistory } from "react-router";

import "./login.css";

function Login() {
  const history = useHistory();

  const email = useRef();
  const password = useRef();
  const { isFetching, dispatch } = useContext(AuthContext);

  const handleClick = (e) => {
    e.preventDefault();
    loginCall(
      { email: email.current.value, password: password.current.value },
      dispatch
    );
  };
  return (
    <div className="login">
      <h1>AminoSocial</h1>
      <h3>Connect with freinds and the world around you on AminoSocial</h3>
      <form className="form__container" onSubmit={handleClick}>
        <label htmlFor="login__email">
          <h4>Email</h4>
        </label>
        <input
          type="email"
          id="login__email"
          className="login__input"
          placeholder="email"
          required
          ref={email}
        />

        <label htmlFor="login__password">
          <h4>Password</h4>
        </label>
        <input
          required
          type="password"
          id="login__password"
          minLength="6"
          ref={password}
          className="login__input"
          placeholder="password"
        />
        <button type="submit" className="login__btn" disabled={isFetching}>
          {isFetching ? <CircularProgress size="20px" /> : "Log In"}
        </button>
        <button
          className="create__btn login__btn "
          onClick={() => history.push("/register")}
        >
          {isFetching ? (
            <CircularProgress size="20px" />
          ) : (
            "Create a New Account"
          )}
        </button>
        <div className="login__forgot">
          <a href="" className="login__forgot">
            Forgot Password?
          </a>
        </div>
      </form>
    </div>
  );
}

export default Login;
