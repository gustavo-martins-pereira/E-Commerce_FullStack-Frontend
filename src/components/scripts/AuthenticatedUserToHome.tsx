import { ReactNode, useContext } from "react";
import { Navigate } from "react-router-dom";

import { UserContext } from "@contexts/userContext";

interface AuthenticatedUserToHomeProps {
    children: ReactNode;
}

export function AuthenticatedUserToHome({ children }: AuthenticatedUserToHomeProps) {
    const { loggedInUser } = useContext(UserContext)!;

    return loggedInUser ? <Navigate to="/" replace /> : children;
}
