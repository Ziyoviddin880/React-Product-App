import { useState } from "react";
import "./register.css";
import { useNavigate } from "react-router-dom";
import axios from "axios";

function Register({ setToken }) {
  // const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    // Bu erda serverga ro'yxatdan o'tish uchun so'rovni yuborish logikasini yozing
    // Misol uchun, server bilan API orqali kommunikatsiya qilish mumkin

    // Serverga yuboriladigan ma'lumotlar
    try {
      // const response = await fetch("https://reqres.in/api/register", {
      //   method: "POST",
      //   headers: {
      //     "Content-Type": "application/json",
      //   },
      //   body: JSON.stringify({ email, password }),
      // });
      const response = await axios.post("https://reqres.in/api/register", {
        email,
        password,
      });
      console.log(response);
      if (response.status === 200) {
        setToken(response.data.token);
        window.localStorage.setItem("token", response.data.token);
        console.log("Registration successful:", response.data);
        navigate("/");
        // Do something with the successful registration response
      } else {
        console.log("Registration failed");
        // Handle failed registration here
      }
    } catch (error) {
      console.log("Error occurred during registration:", error);
      // Handle error here
    }
    // setUsername("");
    setEmail("");
    setPassword("");
  };

  return (
    <div className="box">
      <div className="auth-container">
        <h2 className="text-center">Registration</h2>
        <form onSubmit={handleSubmit}>
          <div className="mb-3">
            {/* <label htmlFor="userName" className="form-label">
              UserName
            </label>
            <input
              required
              type="text"
              className="form-control"
              id="userName"
              value={username}
              onChange={(e) => setUsername(e.target.value)}
            /> */}
            <label htmlFor="exampleInputEmail1" className="form-label mt-2">
              Email address
            </label>
            <input
              required
              type="email"
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
              required
              type="password"
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

export default Register;
