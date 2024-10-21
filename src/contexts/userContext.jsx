import { createContext, useState, useEffect } from 'react';

import { logout } from "@api/services/userService";
import { toastPromise } from "@utils/toast";

export const UserContext = createContext(null);

export const UserProvider = ({ children }) => {
    const [user, setUser] = useState(null);

    useEffect(() => {
        const savedUser = localStorage.getItem("loggedInUser");
        if (savedUser) {
            setUser(JSON.parse(savedUser));
        }
    }, []);

    function login(userData) {
        setUser(userData);
        localStorage.setItem("loggedInUser", JSON.stringify(userData));
    };

    async function logoutUser() {
        toastPromise(logout(), { pending: "Logging out...", success: "Successfully logged out!" })
            .then(() => {
                setUser(null);
                localStorage.removeItem("loggedInUser");
                localStorage.removeItem("accessToken");
            });
    };

    return (
        <UserContext.Provider value={{ user, login, logoutUser }}>
            {children}
        </UserContext.Provider>
    );
};
