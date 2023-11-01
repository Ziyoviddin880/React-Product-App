import { useState } from "react";
import { useNavigate } from "react-router-dom";

import http from "../services/http";

function Login({ setToken }) {
  const [hasErr, setHasErr] = useState(false);

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();

    http
      .post("/login", {
        email,
        password,
      })
      .then((res) => {
        setToken(res.data.token);
        window.localStorage.setItem("token", res.data.token);
        navigate("/");
      })
      .catch((err) => {
        console.log(err);
        setHasErr(true);
      });
  };

  return (
    <div className="box">
      <div className="auth-container">
        <h2 className="text-center">Login</h2>
        {hasErr && (
          <div className="alert alert-danger" role="alert">
            Login or Password is wrong
          </div>
        )}

        <form onSubmit={handleSubmit}>
          <div className="mb-3">
            <label htmlFor="exampleInputEmail1" className="form-label">
              Email address
            </label>
            <input
              type="email"
              required
              className="form-control"
              id="exampleInputEmail1"
              aria-describedby="emailHelp"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
          </div>
          <div className="mb-3">
            <label htmlFor="exampleInputPassword1" className="form-label">
              Password
            </label>
            <input
              type="password"
              required
              className="form-control"
              id="exampleInputPassword1"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
          </div>
          <button type="submit" className="btn btn-primary w-100">
            Submit
          </button>
        </form>
      </div>
    </div>
  );
}

export default Login;
