import React from "react";

import { Header } from "./components/Header/Header";

import ImagePlaceholder from "./assets/images/placeholder-image.svg";

export function App() {
    return (
        <React.Fragment>
            <Header />

            <main>
                <section className="flex flex-col gap-8 px-4 py-12 lg:flex-row lg:items-center lg:gap-16 lg:px-16 lg:py-24">
                    <div className="flex flex-col gap-4">
                        <h1>Discover Amazing Products for Every Occasion</h1>
                        <p>Welcome to our online store, where you'll find a wide selection of high-quality products to meet your needs. Whether you're looking for everyday essentials or unique gifts, we've got you covered.</p>

                        <div className="flex gap-4">
                            <button className="btn btn-primary">Explore</button>
                            <button className="btn btn-secondary">Sign Up</button>
                        </div>
                    </div>

                    <img src={ImagePlaceholder} alt="" />
                </section>
            </main>
        </React.Fragment>
    );
}
