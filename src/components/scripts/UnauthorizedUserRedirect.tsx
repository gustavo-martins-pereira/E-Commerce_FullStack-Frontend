import { useContext } from "react";
import { Navigate, Outlet } from "react-router-dom";

import { UserContext } from "@contexts/userContext";
import { USER_ROLES } from "@utils/types/user";

interface UnauthorizedUserRedirectProps {
    roles: USER_ROLES[];
}

export function UnauthorizedUserRedirect({ roles }: UnauthorizedUserRedirectProps) {
    const { loggedInUser } = useContext(UserContext)!;

    return roles.some(role => loggedInUser?.role.includes(role)) ? <Outlet /> : <Navigate to="/" replace />;
}
