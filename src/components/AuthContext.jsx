import React, { createContext, useState, useEffect } from "react";

export const AuthContext = createContext("light");

export const AuthProvider = ({ children }) => {
  const [token, setToken] = useState("1");
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const storedToken = localStorage.getItem("token");
    setToken(storedToken);
    setLoading(false);
  }, []);

  return (
    <AuthContext.Provider value={{ token, setToken, loading }}>
      {children}
    </AuthContext.Provider>
  );
};
