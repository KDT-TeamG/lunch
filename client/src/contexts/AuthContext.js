import React, { useState } from "react";

const AuthContext = React.createContext();

const AuthProvider = ({ children }) => {
  const token = sessionStorage.getItem("userId");
  const [isLogin, setIsLogin] = useState(token);

  const userLogin = !!token;

  return (
    <AuthContext.Provider value={{ userLogin, isLogin, setIsLogin }}>
      {children}
    </AuthContext.Provider>
  );
};

const AuthConsumer = AuthContext.Consumer;

export { AuthProvider, AuthConsumer, AuthContext };
