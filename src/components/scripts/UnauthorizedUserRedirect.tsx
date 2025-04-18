import { useContext } from "react";
import { Navigate, Outlet } from "react-router-dom";

import { UserContext } from "@contexts/userContext";
import { USER_ROLES } from "@utils/types/user";

interface UnauthorizedUserRedirectProps {
    roles: USER_ROLES[];
}

export function UnauthorizedUserRedirect({ roles }: UnauthorizedUserRedirectProps) {
    const { user } = useContext(UserContext)!;

    return roles.some(role => user?.role.includes(role)) ? <Outlet /> : <Navigate to="/" replace />;
}
