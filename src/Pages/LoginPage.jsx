import React, { useState } from "react";
import { useHistory } from "react-router-dom";
import { login } from "../utils/api";
import { toast } from "react-toastify";

const LoginPage = ({ setAuthenticated }) => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const history = useHistory();

  const handleLogin = async (e) => {
    e.preventDefault();

    try {
      const response = await login({ username, password });
      console.log("Login successful:", response.data);
      toast.success("Login successful!");
      history.push("/home");
      localStorage.setItem("userId", response.data.id); // Store userId
      localStorage.setItem("username", response.data.userName);
      const authToken = btoa(`${username}:${password}`);
      localStorage.setItem("authToken", authToken);
    } catch (error) {
      console.error("Login failed:", error.response.data);
      alert("Login failed. Please check your credentials.");
    }
  };

  return (
    <div className="login-container">
      <form onSubmit={handleLogin} className="login-form">
        <h2 className="login-title">LOGIN</h2>
        <div className="input-group">
          <label htmlFor="username" className="input-label">
            User Name
          </label>
          <input
            type="text"
            id="username"
            placeholder="User Name"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
            required
            className="input-field"
          />
        </div>
        <div className="input-group">
          <label htmlFor="password" className="input-label">
            Password
          </label>
          <input
            type="password"
            id="password"
            placeholder="Password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
            className="input-field"
          />
        </div>
        <button type="submit" className="login-button">
          Login
        </button>
        <p className="signup-link">
          Don't have an account?
          <a href="/signup" className="signup-link-text">
            Sign Up
          </a>
        </p>
      </form>
    </div>
  );
};

export default LoginPage;
