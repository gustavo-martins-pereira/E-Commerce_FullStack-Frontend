import { useContext } from "react";
import { Navigate, Outlet } from "react-router-dom";

import { UserContext } from "@contexts/userContext";

export function UnauthenticatedRedirect() {
    const { user } = useContext(UserContext)!;

    return !user ? <Navigate to="/register-login" replace /> : <Outlet />;
}
