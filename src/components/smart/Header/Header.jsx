import { useEffect, useState } from "react";
import { IoIosMenu, IoIosClose } from "react-icons/io";
import { Link, useLocation } from "react-router-dom";

import { Button } from "@components/dumbs/custom/Button/Button";

import Logo from "@assets/images/logo.svg";

export function Header() {
    const iconsStyle = { display: "inline-block", cursor: "pointer" };

    const { pathname } = useLocation();

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

    // HANDLES
    function handleOnMenuClicked() {
        setIsMenuOpen(isMenuOpen => !isMenuOpen);
    }

    return (
        <header className="bg-header sticky top-0 border-b shadow-md p-4 lg:px-16 z-10">
            <nav className="flex flex-col justify-between gap-8 lg:flex-row">
                <div className="flex justify-between items-center">
                    <Link to="/"><img src={Logo} alt="Logotype of the Shop Wave" /></Link>
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
                    <ul className="flex flex-col justify-between gap-4 lg:flex-row lg:items-center">
                        {/* TODO: Store the "link" and "linkName" in a place and apply in "Header" and "Footer" components */}
                        <li><Link className="inline-block pr-4 py-2 hover:underline lg:px-4" to="/">Home</Link></li>
                        <li><Link className="inline-block pr-4 py-2 hover:underline lg:px-4" to="/products">Shop Now</Link></li>
                        <li><Link className="inline-block pr-4 py-2 hover:underline lg:px-4" to="/orders">Orders</Link></li>
                    </ul>

                    <div className="flex flex-col justify-between gap-4 lg:flex-row">
                        <Link to="/register-login"><Button className="btn-primary w-full">Login</Button></Link>
                        <Link to="/register-login"><Button className="btn-secondary w-full">Sign Up</Button></Link>
                    </div>
                </div>}
            </nav>
        </header>
    );
}
