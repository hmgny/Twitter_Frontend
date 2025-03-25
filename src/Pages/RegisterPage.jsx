import React, { useState } from "react";
import { useHistory } from "react-router-dom";
import { register } from "../utils/api";
import { toast } from "react-toastify";

const RegisterPage = ({ onRegister }) => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const history = useHistory();
  const [error, setError] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await register({ username, password });

      if (response.status === 200 || response.status === 201) {
        toast.success("Registration successful!");
        history.push("/user/login");
      } else {
        setError("Registration failed. Please try again.");
        toast.error("Registration failed. Please try again.");
      }
    } catch (error) {
      console.error("Registration error:", error);
      setError(
        error.response?.data?.message ||
          "Registration failed. Please try again."
      );
      toast.error(
        error.response?.data?.message ||
          "An error occurred. Please try again later."
      );
    }
  };

  return (
    <div className="login-container">
      <form onSubmit={handleSubmit} className="login-form">
        <h2 className="login-title">REGISTER</h2>
        {error && <p className="error">{error}</p>}
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
          Register
        </button>
        <p className="signup-link">
          Already have an account?
          <a href="/user/login" className="signup-link-text">
            Login
          </a>
        </p>
      </form>
    </div>
  );
};

export default RegisterPage;
