// components/LoginScreen.tsx

import React from "react";
import LoginButton from "./LoginButton";
import { useIsAuthenticated } from "@azure/msal-react";
import { useNavigate } from "react-router-dom";

const LoginScreen: React.FC = () => {
  const isAuthenticated = useIsAuthenticated();
  const navigate = useNavigate();

  if (!isAuthenticated) {
    console.log(isAuthenticated);
    return (
      <div className="container">
        <h1>Login</h1>
        <LoginButton />
      </div>
    );
  } else {
    React.useEffect(() => {
      navigate("/manage");
    });
  }
};

export default LoginScreen;
