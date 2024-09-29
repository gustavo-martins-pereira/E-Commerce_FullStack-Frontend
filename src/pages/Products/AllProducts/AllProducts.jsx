import { Link } from "react-router-dom";

import { Button } from "@components/dumbs/custom/Button/Button";

import PlaceholderImage from "@assets/images/placeholder-image.svg";

export function AllProducts() {
    return (
        <main>
            {/* ALL PRODUCTS */}
            <section className="section flex flex-col gap-8 text-center md:text-left lg:text-center">
                <header className="flex flex-col gap-4">
                    <h2>Products</h2>
                    <p>Explore our wide range of products for all your needs.</p>
                </header>

                <section className="grid grid-cols-2 gap-4 sm:grid-cols-3 lg:grid-cols-4 2xl:grid-cols-5">
                    {Array.from({ length: 10 }).map((_, index) => {
                        return (
                            <article key={index}>
                                <Link to={`/products/all/${index + 1}`}>
                                    <img src={PlaceholderImage} alt="" />
                                    <h3 className="text-lg">Product Name</h3>
                                    <h4>$55</h4>
                                </Link>
                            </article>
                        );
                    })}
                </section>

                <Button className="btn-primary w-fit m-auto">View All</Button>
            </section>

            {/* DISCOVER */}
            <section className="section bg-banner flex flex-col gap-8">
                <h2>Discover Our Amazing Products Today</h2>
                <p>Explore our wide range of high-quality products and find exactly what you need.</p>

                <div className="flex gap-4">
                    <Link to="/register-login"><Button className="btn-secondary">Sign Up</Button></Link>
                    <Link to="/register-login"><Button className="btn-primary">Log In</Button></Link>
                </div>
            </section>
        </main>
    );
}
