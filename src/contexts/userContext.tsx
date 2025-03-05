import { createContext, useState, useEffect, ReactNode } from 'react';
import { useNavigate } from "react-router-dom";

import { logout } from "@api/services/userService";
import { LogoutMessage } from "@components/dumbs/toastify/LogoutMessage";
import { toastWarning, toastPromise } from "@utils/toast";
import { USER_ROLES } from "@utils/types/user";

interface User {
    id: number;
    username: string;
    role: USER_ROLES;
}

interface UserContextType {
    user: User | null;

    login: (userData: User, loginMaxAge: number) => void;
    logoutUser: () => Promise<void>;
}

interface UserProviderProps {
    children: ReactNode;
}

export const UserContext = createContext<UserContextType | null>(null);

export function UserProvider({ children }: UserProviderProps) {
    const navigate = useNavigate();

    // STATES
    const [user, setUser] = useState<User | null>(null);

    // EFFECTS
    useEffect(() => {
        const savedUser = localStorage.getItem("loggedInUser");
        const loginMaxAge = localStorage.getItem("loginMaxAge");
        const isLoginExpired = loginMaxAge ? (new Date()).getTime() > Number(loginMaxAge) : false;
        
        if(savedUser) {
            setUser(JSON.parse(savedUser));

            if(isLoginExpired) forceLogout();
        }
    }, []);

    function login(userData: User, loginMaxAge: number): void {
        setUser(userData);
        localStorage.setItem("loggedInUser", JSON.stringify(userData));
        localStorage.setItem("loginMaxAge", loginMaxAge.toString());
        
        const timeUntilExpires = loginMaxAge - (new Date()).getTime();
        setTimeout(forceLogout, timeUntilExpires);
    }

    async function logoutUser(): Promise<void> {
        await toastPromise(logout(), { 
            pending: "Logging out...", 
            success: "Successfully logged out!" 
        });
        clearUserStorage();
        navigate("/");
    }

    function forceLogout(): void {
        clearUserStorage();
        toastWarning(
            <LogoutMessage closeToast={() => {}}/>,
            {
                position: "top-center",
                autoClose: 15000,
                closeOnClick: false,
                theme: "light",
            }
        );
    }

    function clearUserStorage(): void {
        setUser(null);
        localStorage.removeItem("loggedInUser");
        localStorage.removeItem("accessToken");
        localStorage.removeItem("loginMaxAge");
    }

    return (
        <UserContext.Provider value={{ user, login, logoutUser }}>
            {children}
        </UserContext.Provider>
    );
};
