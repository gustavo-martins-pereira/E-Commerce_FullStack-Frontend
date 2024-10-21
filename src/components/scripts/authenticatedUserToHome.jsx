import { UserContext } from "@contexts/userContext";
import { useContext } from "react";
import { Navigate } from "react-router-dom";

export function AuthenticatedUseToHome({ children }) {
    const { user } = useContext(UserContext);

    return user ? <Navigate to="/" /> : children;
}
