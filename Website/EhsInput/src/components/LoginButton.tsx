// components/LoginButton.tsx

import React from "react";
import { useIsAuthenticated, useMsal } from "@azure/msal-react";
import { useNavigate } from "react-router-dom";
import { loginRequest } from "../Config";

const LoginButton: React.FC = () => {
  const { instance } = useMsal();
  const isAuthenticated = useIsAuthenticated();
  const navigate = useNavigate();

  const handleLogin = () => {
    instance.loginPopup(loginRequest).then(() => {
      console.log(isAuthenticated);
      navigate("/"); // Leitet nach erfolgreicher Anmeldung auf die Startseite weiter
    }).catch((e) => {
      console.error(e);
    });
  };

  return <button onClick={handleLogin}>Login</button>;
};

export default LoginButton;
