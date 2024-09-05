import { useIsAuthenticated } from "@azure/msal-react";
import { Navigate } from "react-router-dom";

interface RouteProps {
    site: JSX.Element;

}

export default function ProtectedRoute({ site }: RouteProps) {
    const isAuthenticated = useIsAuthenticated();
    console.log(isAuthenticated);
    if (isAuthenticated)
        return site;
    else
        return <Navigate to="/login" />;

}