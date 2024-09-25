import { Link } from "react-router-dom";

import Logo from "@assets/images/logo.svg";

export function Footer() {
    return (
        <footer className="flex flex-col justify-between items-start gap-8 border-t p-4 lg:flex-row lg:p-16">
            <Link to="/"><img className="lg:scale-150" src={Logo} alt="" /></Link>

            <nav>
                <ul className="flex flex-col justify-between gap-4 lg:items-end">
                    <li><Link className="inline-block pr-4 py-2 pl-0 hover:underline lg:px-4" to="/">Home</Link></li>
                    <li><Link className="inline-block pr-4 py-2 pl-0 hover:underline lg:px-4" to="/products">Shop Now</Link></li>
                    <li><Link className="inline-block pr-4 py-2 pl-0 hover:underline lg:px-4" to="/orders">Orders</Link></li>
                </ul>
            </nav>
        </footer>
    );
}
