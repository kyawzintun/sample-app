import React from "react";
import { useHistory } from "react-router-dom";
import styles from "./Login.module.css";

const Login = () => {
  const history = useHistory();

  const handleClick = () => {
    history.push("/home");
  };

  return (
    <div className={styles.loginContainer}>
      <div className={styles.wrapLogin}>
        <form
          className={styles.loginForm}
          name="loginForm"
          autoComplete="off"
          onSubmit={handleClick}
        >
          <span className={styles.loginFormTitle}>Member Login</span>
          <div className={styles.wrapInput}>
            <input
              type="email"
              className={styles.formInput}
              name="email"
              placeholder="Email"
              autoFocus="on"
              required
            />
          </div>
          <div className={styles.wrapInput}>
            <input
              type="password"
              className={styles.formInput}
              name="password"
              placeholder="Password"
              required
            />
          </div>
          <div className={styles.loginFormBtn}>
            <button type="submit" className={styles.loginBtn}>
              Login
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Login;
