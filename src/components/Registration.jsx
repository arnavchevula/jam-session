import React, { useState } from "react";
import axios from "axios";

const Registration = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [message, setMessage] = useState("");

  const handleSubmit = async e => {
    e.preventDefault();
    try {
      const response = await axios.post(
        "http://localhost:3000/api/auth/register",
        {
          username,
          password
        }
      );
      console.log(response);
      if (response.data.message) {
        setMessage(response.data.message);
      }
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div className="mx-auto container flex items-center justify-center min-h-screen flex-col">
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
          Register
        </button>
      </form>
      {message && <p>{message}</p>}
    </div>
  );
};

export default Registration;
