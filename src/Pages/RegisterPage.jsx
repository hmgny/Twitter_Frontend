import React, { useState } from "react";
import { useHistory } from "react-router-dom"; // Import useHistory
import { register } from "../utils/api"; // Import register function
import { toast } from "react-toastify"; // Import toast

const RegisterPage = ({ onRegister }) => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const history = useHistory(); // Initialize history

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await register({ username, password }); // Use register function from api.js

      if (response.status === 201) {
        // Assuming 201 is successful registration
        toast.success("Registration successful!");
        history.push("/login"); // Redirect to login page
      } else {
        toast.error("Registration failed. Please try again.");
      }
    } catch (error) {
      console.error("Registration error:", error);
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
          <a href="/login" className="signup-link-text">
            Login
          </a>
        </p>
      </form>
    </div>
  );
};

export default RegisterPage;
