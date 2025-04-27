import { useContext } from "react";
import { Link } from "react-router-dom";

import Logo from "@assets/images/logo.svg";
import { UserContext } from "@contexts/userContext";
import { mainMenu, MenuItem } from "@utils/appLinksVisibility";

export function Footer() {
    // CONTEXTS
    const { loggedInUser } = useContext(UserContext)!;

    return (
        <footer className="bg-footer flex flex-col justify-between items-start gap-8 border-t p-4 lg:flex-row lg:p-16">
            <Link to="/">
                <img className="lg:w-32" src={Logo} alt="Company Logo" />
            </Link>

            <nav>
                <ul className="flex flex-col justify-between gap-4 lg:items-end">
                    {mainMenu
                        .filter((link: MenuItem) => !link.visibleTo || (loggedInUser && link.visibleTo.includes(loggedInUser.role)))
                        .map((link: MenuItem) => (
                            <li key={link.path}>
                                <Link 
                                    className={`inline-block pr-4 py-2 pl-0 hover:underline lg:px-4 ${link.styles || ''}`}
                                    to={link.path}
                                >
                                    {link.title}
                                </Link>
                            </li>
                        ))}
                </ul>
            </nav>
        </footer>
    );
}
