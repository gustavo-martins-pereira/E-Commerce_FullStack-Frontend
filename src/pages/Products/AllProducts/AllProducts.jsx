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

                <section className="grid grid-cols-2 gap-4 md:gap-12 lg:grid-cols-4 lg:gap-4">
                    <article>
                        <Link to="/products/all/1">
                            <img src={PlaceholderImage} alt="" />
                            <h3 className="text-lg">Product Name</h3>
                            <h4>$55</h4>
                        </Link>
                    </article>

                    <article>
                        <Link to="/products/all/2">
                            <img src={PlaceholderImage} alt="" />
                            <h3 className="text-lg">Product Name</h3>
                            <h4>$55</h4>
                        </Link>
                    </article>

                    <article>
                        <Link to="/products/all/3">
                            <img src={PlaceholderImage} alt="" />
                            <h3 className="text-lg">Product Name</h3>
                            <h4>$55</h4>
                        </Link>
                    </article>

                    <article>
                        <Link to="/products/all/4">
                            <img src={PlaceholderImage} alt="" />
                            <h3 className="text-lg">Product Name</h3>
                            <h4>$55</h4>
                        </Link>
                    </article>

                    <article>
                        <Link to="/products/all/5">
                            <img src={PlaceholderImage} alt="" />
                            <h3 className="text-lg">Product Name</h3>
                            <h4>$55</h4>
                        </Link>
                    </article>

                    <article>
                        <Link to="/products/all/6">
                            <img src={PlaceholderImage} alt="" />
                            <h3 className="text-lg">Product Name</h3>
                            <h4>$55</h4>
                        </Link>
                    </article>

                    <article>
                        <Link to="/products/all/7">
                            <img src={PlaceholderImage} alt="" />
                            <h3 className="text-lg">Product Name</h3>
                            <h4>$55</h4>
                        </Link>
                    </article>

                    <article>
                        <Link to="/products/all/8">
                            <img src={PlaceholderImage} alt="" />
                            <h3 className="text-lg">Product Name</h3>
                            <h4>$55</h4>
                        </Link>
                    </article>
                </section>

                <Button className="btn-primary w-fit m-auto">View All</Button>
            </section>

            {/* DISCOVER */}
            <section className="section bg-black-50 flex flex-col gap-8 text-white">
                <h2>Discover Our Amazing Products Today</h2>
                <p>Explore our wide range of high-quality products and find exactly what you need.</p>

                <div className="flex gap-4">
                    <Button className="btn-secondary">Sign Up</Button>
                    <Button className="btn-primary">Log In</Button>
                </div>
            </section>
        </main>
    );
}
