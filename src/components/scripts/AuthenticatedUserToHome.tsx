import { ReactNode, useContext } from "react";
import { Navigate } from "react-router-dom";

import { UserContext } from "@contexts/userContext";

interface AuthenticatedUserToHomeProps {
    children: ReactNode;
}

export function AuthenticatedUserToHome({ children }: AuthenticatedUserToHomeProps) {
    const { user } = useContext(UserContext);

    return user ? <Navigate to="/" replace /> : children;
}
