import { useContext, useEffect, useRef, useState } from "react";
import { IoIosMenu, IoIosClose, IoIosLogOut } from "react-icons/io";
import { Link, useLocation } from "react-router-dom";

import { Button } from "@components/dumbs/custom/Button/Button";
import { UserContext } from "@contexts/userContext";
import { mainMenu } from "@utils/appLinksVisibility";

import Logo from "@assets/images/logo.svg";

export function Header() {
    const iconsStyle = { display: "inline-block", cursor: "pointer" };

    const { pathname } = useLocation();

    // REFS
    const headerRef = useRef(null);

    // CONTEXTS
    const { user, logoutUser } = useContext(UserContext);

    // STATES
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const [isMobile, setIsMobile] = useState(undefined);

    // EFFECTS
    useEffect(() => {
        const mediaQuery = window.matchMedia("(min-width: 1024px)");

        function handleOnChangeWindowSize() {
            setIsMobile(mediaQuery.matches ? false : true);
        }

        mediaQuery.onchange = handleOnChangeWindowSize;

        handleOnChangeWindowSize();
    }, []);

    useEffect(() => {
        setIsMenuOpen(false);
    }, [pathname]);

    useEffect(() => {
        if(headerRef.current) {
            const headerHeight = headerRef.current.offsetHeight;
            document.documentElement.style.setProperty("--toastify-toast-top", `calc(${headerHeight}px + 1rem)`);
        }
    }, [isMenuOpen, isMobile]);

    // HANDLES
    function handleOnMenuClicked() {
        setIsMenuOpen(isMenuOpen => !isMenuOpen);
    }

    return (
        <header className="bg-header sticky top-0 border-b shadow-md p-4 z-10 lg:px-16 lg:h-header" ref={headerRef}>
            <nav className="flex flex-col justify-between gap-8 lg:flex-row">
                <div className="flex justify-between items-center">
                    <Link to="/"><img src={Logo} alt="Logotype of the Shop Wave" /></Link>

                    {/* OPEN/CLOSE MENU BUTTON */}
                    {isMobile ?
                        <button
                            aria-label="Main menu"
                            aria-controls="main-menu"
                            aria-expanded={isMenuOpen}
                            onClick={handleOnMenuClicked}
                        >
                            {isMenuOpen ?
                                <IoIosClose size="3rem" style={iconsStyle} />
                                : <IoIosMenu size="3rem" style={iconsStyle} />}
                        </button>
                        :
                        ""}
                </div>

                {(isMobile ? isMenuOpen : true) && <div id="main-menu" className="flex flex-col justify-between gap-8 lg:flex-row">
                    {/* LINKS */}
                    <ul className="flex flex-col justify-between gap-4 lg:flex-row lg:items-center">
                        {mainMenu
                            .filter(link => !link.visibleTo || link.visibleTo.includes(user?.role))
                            .map(link => <li key={link.path}><Link className={`inline-block pr-4 py-2 text-center hover:underline lg:px-4 ${link.styles}`} to={link.path}>{link.title}</Link></li>)}
                    </ul>

                    <hr className="-my-4 lg:hidden" />

                    {/* PROFILE */}
                    <div className="flex items-center gap-4 lg:flex-row">
                        {user ? (
                            <div className="flex items-center self-start gap-4 text-xl lg:self-auto">
                                <p>Hello, <strong>{user.username}</strong></p>
                                <IoIosLogOut className="text-red" size="2.5rem" style={iconsStyle} onClick={logoutUser} />
                            </div>
                        ) : (
                            <>
                                <Link to="/register-login">
                                    <Button className="btn-primary w-full">Login</Button>
                                </Link>
                                <Link to="/register-login">
                                    <Button className="btn-secondary w-full">Sign Up</Button>
                                </Link>
                            </>
                        )}
                    </div>
                </div>}
            </nav>
        </header>
    );
}
