import Logo from "@assets/images/logo.svg";

import { Header } from "@components/Header/Header";

export function Footer() {
    return (
        <footer className="flex flex-col justify-between items-start gap-8 border-t p-4 lg:flex-row lg:p-16">
            <img className="lg:scale-150" src={Logo} alt="" />

            <Header />

            <nav>
                <ul className="flex flex-col justify-between gap-4 lg:items-end">
                    <li><a className="inline-block px-4 py-2 pl-0 hover:underline" href="">Home</a></li>
                    <li><a className="inline-block px-4 py-2 pl-0 hover:underline" href="">Shop Now</a></li>
                </ul>
            </nav>
        </footer>
    );
}
