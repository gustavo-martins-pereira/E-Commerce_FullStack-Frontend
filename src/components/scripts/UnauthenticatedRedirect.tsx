import { useContext } from "react";
import { Navigate, Outlet } from "react-router-dom";

import { UserContext } from "@contexts/userContext";

export function UnauthenticatedRedirect() {
    const { loggedInUser } = useContext(UserContext)!;

    return !loggedInUser ? <Navigate to="/register-login" replace /> : <Outlet />;
}
