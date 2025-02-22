import { useContext } from "react";
import { Navigate } from "react-router-dom";

import { UserContext } from "@contexts/userContext";

export function AuthenticatedUserToHome({ children }) {
    const { user } = useContext(UserContext);

    return user ? <Navigate to="/" replace /> : children;
}
