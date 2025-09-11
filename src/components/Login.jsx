import React, { useState, useContext } from "react";
import axios from "axios";
import { AuthContext } from "./AuthContext";
import { useNavigate } from "react-router-dom";

const Login = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [errorMessage, setErrorMessage] = useState(null); // New state for handling error messages
  console.log(AuthContext);
  const { setToken } = useContext(AuthContext);
  const navigate = useNavigate();
  const handleSubmit = async e => {
    e.preventDefault();
    try {
      const response = await axios.post(
        "http://localhost:3000/api/auth/login",
        {
          username,
          password
        }
      );
      setToken(response.data.token);
      localStorage.setItem("token", response.data.token);
      navigate("/jam-list");
    } catch (error) {
      console.error("Authentication failed:", error);
      setToken(null);
      localStorage.removeItem("token");
      if (error.response && error.response.data) {
        setErrorMessage(error.response.data); // Set the error message if present in the error response
      } else {
        setErrorMessage("An unexpected error occurred. Please try again.");
      }
    }
  };

  return (
    <div className="mx-auto container flex items-center justify-center min-h-screen">
      {errorMessage && <div style={{ color: "red" }}>{errorMessage}</div>}{" "}
      <form
        onSubmit={handleSubmit}
        className="rounded-md border-cyan-600 border-2 p-8 shadow-2xl w-1/2"
      >
        <div className="mb-6">
          <label htmlFor="email" className="mb-3 block text-gray-700">
            Email Address:
          </label>
          <input
            value={username}
            type="email"
            id="email"
            className="bg-white rounded-full border border-gray-200 p-3 focus:outline:none w-full"
            placeholder="john.doe@company.com"
            onChange={e => setUsername(e.target.value)}
            required
          />
        </div>
        <div className="mb-6">
          <label htmlFor="password" className="mb-3 block text-gray-700">
            Password:
          </label>
          <input
            value={password}
            type="password"
            id="password"
            className="bg-white rounded-full border border-gray-200 p-3 focus:outline:none w-full"
            placeholder="Password"
            onChange={e => setPassword(e.target.value)}
            required
          />
        </div>
        <button
          className="py-3 px-12 bg-teal-500 hover:bg-teal-600 mr-5 rounded-full text-white text-lg focus:outline-none w-full"
          type="submit"
        >
          Login
        </button>
      </form>
    </div>
  );
};

export default Login;
