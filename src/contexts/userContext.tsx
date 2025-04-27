import { createContext, useState, useEffect, ReactNode } from 'react';
import { useLocation, useNavigate } from "react-router-dom";

import { getUserByUsername, logout } from "@api/services/userService";
import { LogoutMessage } from "@components/dumbs/toastify/LogoutMessage";
import { toastWarning, toastPromise } from "@utils/toast";
import { LoggedInUser, User } from "@utils/types/user";

interface UserContextType {
    loggedInUser: LoggedInUser | null;

    login: (userData: User, loginMaxAge: number) => void;
    logoutUser: () => Promise<void>;
}

interface UserProviderProps {
    children: ReactNode;
}

export const UserContext = createContext<UserContextType | null>(null);

export function UserProvider({ children }: UserProviderProps) {
    const navigate = useNavigate();
    const location = useLocation();

    // STATES
    const [loggedInUser, setLoggedInUser] = useState<LoggedInUser | null>(null);

    // EFFECTS
    useEffect(() => {
        (async function checkUser(): Promise<void> {
            const savedUser = localStorage.getItem("loggedInUser");
            const loginMaxAge = localStorage.getItem("loginMaxAge");
            const isLoginExpired = loginMaxAge ? (new Date()).getTime() > Number(loginMaxAge) : false;

            if(savedUser) {
                if(isLoginExpired) forceLogout();

                const loggedUser: LoggedInUser = JSON.parse(savedUser);

                const user = await getUserByUsername(loggedUser.username);
                if(!user.refreshToken) {
                    clearUserStorage();

                    navigate(location.pathname);
                    window.location.reload();
                }

                setLoggedInUser(loggedUser);
            }
        })();
    }, [location.pathname]);

    function login(userData: User, loginMaxAge: number): void {
        const user = {
            username: userData.username,
            role: userData.role,
        };
        setLoggedInUser(user);
        localStorage.setItem("loggedInUser", JSON.stringify(user));

        localStorage.setItem("loginMaxAge", loginMaxAge.toString());
        const timeUntilExpires = loginMaxAge - (new Date()).getTime();
        setTimeout(forceLogout, timeUntilExpires);
    }

    async function logoutUser(): Promise<void> {
        await toastPromise(logout(), { 
            pending: "Logging out...", 
            success: "Successfully logged out!"
        });

        forceLogout();
        navigate("/");
    }

    function forceLogout(): void {
        clearUserStorage();
        showWarning();
    }

    function clearUserStorage(): void {
        setLoggedInUser(null);
        localStorage.removeItem("loggedInUser");
        localStorage.removeItem("accessToken");
        localStorage.removeItem("loginMaxAge");
    }

    function showWarning() {
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

    return (
        <UserContext.Provider value={{ loggedInUser, login, logoutUser }}>
            {children}
        </UserContext.Provider>
    );
};
