import { useContext } from "react";
import { Link } from "react-router-dom";

import Logo from "@assets/images/logo.svg";
import { mainMenu } from "@utils/appLinksVisibility";
import { UserContext } from "@contexts/userContext";

export function Footer() {
    // CONTEXTS
    const { user } = useContext(UserContext);

    return (
        <footer className="bg-footer flex flex-col justify-between items-start gap-8 border-t p-4 lg:flex-row lg:p-16">
            <Link to="/"><img className="lg:scale-150" src={Logo} alt="" /></Link>

            <nav>
                <ul className="flex flex-col justify-between gap-4 lg:items-end">
                    {mainMenu
                        .filter(link => !link.visibleTo || link.visibleTo.includes(user?.role))
                        .map(link => <li key={link.path}><Link className="inline-block pr-4 py-2 pl-0 hover:underline lg:px-4" to={link.path}>{link.title}</Link></li>)}
                </ul>
            </nav>
        </footer>
    );
}
