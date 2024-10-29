import { createContext, useState, useEffect } from 'react';
import { Link } from "react-router-dom";

import { logout } from "@api/services/userService";
import { Button } from "@components/dumbs/custom/Button/Button";
import { toastWarning, toastPromise } from "@utils/toast";

export const UserContext = createContext(null);

const LogoutMessage = ({ closeToast }) => (
    <article className="flex flex-col gap-4 pl-4">
        <p>Account disconnected, please log in again to access user features again</p>

        <div className="flex gap-4">
            <Button className="btn-primary" onClick={closeToast}>Ok</Button>
            <Link to="/register-login"><Button className="btn-primary" onClick={closeToast}>Go to the Login page</Button></Link>
        </div>
    </article>
);

export const UserProvider = ({ children }) => {
    // STATES
    const [user, setUser] = useState(null);

    // EFFECTS
    useEffect(() => {
        const savedUser = localStorage.getItem("loggedInUser");
        const loginMaxAge = localStorage.getItem("loginMaxAge");
        const isLoginExpired = (new Date()).getTime() > loginMaxAge;
        if(savedUser) {
            setUser(JSON.parse(savedUser));

            if(isLoginExpired) {
                forceLogout();
            }
        }
    }, []);

    function login(userData, loginMaxAge) {
        setUser(userData);
        localStorage.setItem("loggedInUser", JSON.stringify(userData));

        const timeUntilExpires = loginMaxAge - (new Date()).getTime();
        localStorage.setItem("loginMaxAge", loginMaxAge);
        setTimeout(forceLogout, timeUntilExpires);
    };

    async function logoutUser() {
        toastPromise(logout(), { pending: "Logging out...", success: "Successfully logged out!" })
            .then(clearUserStorage);
    };

    function forceLogout() {
        clearUserStorage();

        toastWarning(
            <LogoutMessage />,
            {
                position: "top-center",
                autoClose: 15000,
                closeOnClick: false,
                theme: "light",
            }
        );
    }

    function clearUserStorage() {
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
