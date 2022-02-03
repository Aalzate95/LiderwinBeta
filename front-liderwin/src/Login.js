import "./assets/css/login.css";
import { Link } from "react-router-dom";
import logo from "./assets/images/logo-liderwin.png";

const Login = () => {
  return (
    <body className="fondo">
      <div className="centrado">
        <main className="form-signin">
          <form>
            <img className="mb-4 liderwin-logo" src={logo} alt="" />
            <h1 className="h3 mb-3 fw-normal text-center">Please sign in</h1>

            <div className="form-floating">
              <input
                type="email"
                className="form-control"
                id="floatingInput"
                placeholder="name@example.com"
              />
              <label for="floatingInput">Email address</label>
            </div>
            <div className="form-floating">
              <input
                type="password"
                className="form-control"
                id="floatingPassword"
                placeholder="Password"
              />
              <label for="floatingPassword">Password</label>
            </div>

            <div className="checkbox mb-3">
              <label>
                <input type="checkbox" value="remember-me" /> Remember me
              </label>
            </div>
            <Link to="/dashboard">
              <button className="w-100 secondary-btn" type="submit">
                Sign in
              </button>
            </Link>
            <p className="mt-5 mb-3 footer-login text-center">
              Copyright © 2021 All rights reserved by TROJANS
            </p>
          </form>
        </main>
      </div>
    </body>
  );
};

export default Login;
