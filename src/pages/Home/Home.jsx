import { Link } from "react-router-dom";

import ImagePlaceholder from "../../assets/images/placeholder-image.svg";
import IllustrationPlaceholder from "../../assets/images/illustration-placeholder.svg";

export function Home() {
    return (
        <main>
            {/* HERO */}
            <section className="section flex flex-col gap-8 lg:flex-row lg:items-center lg:gap-16">
                <div className="flex flex-col gap-4">
                    <h1>Discover Amazing Products for Every Occasion</h1>
                    <p>Welcome to our online store, where you'll find a wide selection of high-quality products to meet your needs. Whether you're looking for everyday essentials or unique gifts, we've got you covered.</p>
                    
                    <div className="flex gap-4">
                        <Link className="btn btn-primary" to="/products">Explore</Link>
                        <button className="btn btn-secondary">Sign Up</button>
                    </div>
                </div>

                <img src={ImagePlaceholder} alt="" />
            </section>

            {/* FEATURES */}
            <section className="section flex flex-col gap-12 text-center">
                <header className="flex flex-col gap-4">
                    <h2>Shop with Confidence on Our Site</h2>
                    <p>Experience fast shipping, quality guarantee, and excellent customer service when you shop with us.</p>
                </header>

                <section>
                    <div className="flex flex-col gap-8 md:grid md:grid-cols-3">
                        <article className="flex flex-col items-center gap-4">
                            <img className="w-8" src={IllustrationPlaceholder} alt="" />
                            <h3>Fast Shipping</h3>
                            <p>Get your products delivered quickly and efficiently.</p>
                        </article>

                        <article className="flex flex-col items-center gap-4">
                            <img className="w-8" src={IllustrationPlaceholder} alt="" />
                            <h3>Excellent Customer Service</h3>
                            <p>Our dedicated customer service team is here to assist you every step of the way.</p>
                        </article>

                        <article className="flex flex-col items-center gap-4">
                            <img className="w-8" src={IllustrationPlaceholder} alt="" />
                            <h3>Quality Guarantee</h3>
                            <p>Shop with confidence knowing that our products are of the highest quality.</p>
                        </article>
                    </div>

                    <button className="btn mt-4 hover:underline">Sign Up &gt;</button>
                </section>
            </section>

            {/* HOW WORKS */}
            <section className="section flex flex-col gap-12 text-center">
                <h2>Browse, Select, and Purchase Products with Ease</h2>

                <section>
                    <div className="flex flex-col gap-8 md:grid md:grid-cols-3">
                        <article className="flex flex-col items-center gap-4">
                            <img src={IllustrationPlaceholder} alt="" />
                            <h3>Find the Perfect Product for Your Needs</h3>
                            <p>Explore our wide range of high-quality products and choose the one that suits you best.</p>
                        </article>

                        <article className="flex flex-col items-center gap-4">
                            <img src={IllustrationPlaceholder} alt="" />
                            <h3>Enjoy Secure and Convenient Online Shopping</h3>
                            <p>With our user-friendly interface, you can easily browse, select, and purchase products hassle-free.</p>
                        </article>

                        <article className="flex flex-col items-center gap-4">
                            <img src={IllustrationPlaceholder} alt="" />
                            <h3>Discover New Products and Exciting Deals</h3>
                            <p>Stay updated with our latest product releases and exclusive promotions.</p>
                        </article>
                    </div>

                    <Link className="btn mt-4 hover:underline" to="/products">Buy &gt;</Link>
                </section>
            </section>
        </main>
    );
}
