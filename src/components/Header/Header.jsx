import { useEffect, useState } from "react";
import { IoIosMenu, IoIosClose } from "react-icons/io";

import Logo from "../../assets/images/logo.svg";

export function Header() {
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

    // HANDLES
    function handleOnMenuClicked() {
        setIsMenuOpen(isMenuOpen => !isMenuOpen);
    }

    return (
        <header className="bg-white sticky top-0 border-b p-4 lg:px-16">
            <nav className="flex flex-col justify-between gap-8 lg:flex-row">
                <div className="flex justify-between items-center">
                    <a href=""><img src={Logo} alt="Logotype of the Shop Wave" /></a>
                    {isMobile ?
                        <button
                            aria-label="Main menu"
                            aria-controls="main-menu"
                            aria-expanded={isMenuOpen}
                            onClick={handleOnMenuClicked}
                        >
                        {isMenuOpen ?
                            <IoIosClose size="3rem" style={{ display: "inline-block", cursor: "pointer" }} />
                            : <IoIosMenu size="3rem" style={{ display: "inline-block", cursor: "pointer" }} />}
                        </button>
                        :
                        ""}
                </div>

                {(isMobile ? isMenuOpen : true) && <div id="main-menu" className="flex flex-col justify-between gap-8 lg:flex-row" aria-hidden={!isMenuOpen}>
                    <ul className="flex flex-col justify-between gap-4 lg:flex-row lg:items-center">
                        <li><a className="inline-block px-4 py-2 hover:underline" href="">Home</a></li>
                        <li><a className="inline-block px-4 py-2 hover:underline" href="">Shop Now</a></li>
                    </ul>

                    <div className="flex flex-col justify-between gap-4 lg:flex-row">
                        <button className="btn btn-primary">Login</button>
                        <button className="btn btn-secondary">Sign Up</button>
                    </div>
                </div>}
            </nav>
        </header>
    );
}
