import { Swiper, SwiperSlide } from 'swiper/react';
import { Link } from "react-router-dom";
import { Pagination } from "swiper/modules";

import ImagePlaceholder from "@assets/images/placeholder-image.svg";
import IllustrationPlaceholder from "@assets/images/illustration-placeholder.svg";

export function Products() {
    return (
        <main>
            {/* PRODUCTS CAROUSEL */}
            <section className="section flex flex-col gap-8">
                <section>
                    <Swiper
                        className="pb-12 lg:pb-8"
                        modules={[ Pagination ]}
                        spaceBetween={"50px"}
                        pagination={{
                            clickable: true,
                        }}
                    >
                        <SwiperSlide className="lg:flex lg:gap-8" tag="article">
                            <img className="w-full md:w-1/2 md:m-auto" src={ImagePlaceholder} alt="" />

                            <header className="flex flex-col gap-4 mt-4">
                                <h2>Product Name</h2>
                                <p className="text-2xl font-bold">$55</p>
                                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Suscipit id nemo minima a recusandae ab quaerat explicabo pariatur numquam, natus repellat blanditiis maiores eaque ipsum maxime vitae iure sapiente atque.</p>
                            </header>
                        </SwiperSlide>

                        <SwiperSlide className="lg:flex lg:gap-8" tag="article">
                            <img className="w-full md:w-1/2 md:m-auto" src={ImagePlaceholder} alt="" />

                            <header className="flex flex-col gap-4 mt-4">
                                <h2>Product Name</h2>
                                <p className="text-2xl font-bold">$55</p>
                                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Suscipit id nemo minima a recusandae ab quaerat explicabo pariatur numquam, natus repellat blanditiis maiores eaque ipsum maxime vitae iure sapiente atque.</p>
                            </header>
                        </SwiperSlide>
                    </Swiper>
                </section>

                <div className="flex flex-col gap-2 -mt-12">
                    <label htmlFor="quantity">Quantity</label>
                    <input className="w-20 border border-black p-2" type="number" name="quantity" id="quantity" />
                </div>

                <input className="btn btn-secondary" type="submit" value="Add to Cart" />
            </section>

            {/* ARRIVALS */}
            <article className="section flex flex-col gap-8">
                <div className="flex flex-col gap-4">
                    <h2>New Arrivals for You</h2>
                    <p>Check out the latest additions to our store. We constantly update our inventory to bring you the best products.</p>
                </div>

                <section className="flex flex-col gap-8 md:grid md:grid-cols-3">
                    <article className="flex flex-col items-start gap-4">
                        <img src={IllustrationPlaceholder} alt="" />
                        <h3>Featured Products</h3>
                        <p>Explore our curated selection of top-quality products.</p>
                    </article>

                    <article className="flex flex-col items-start gap-4">
                        <img src={IllustrationPlaceholder} alt="" />
                        <h3>Limited Time Offers</h3>
                        <p>Don't miss out on these exclusive deals.</p>
                    </article>

                    <article className="flex flex-col items-start gap-4">
                        <img src={IllustrationPlaceholder} alt="" />
                        <h3>Customer Favorites</h3>
                        <p>Discover what our customers love the most.</p>
                    </article>
                </section>
            </article>

            {/* OUR PRODUCTS */}
            <section className="section flex flex-col gap-8 md:grid md:grid-cols-[75%_1fr]">
                <div className="flex flex-col gap-4">
                    <h2>Our Products</h2>
                    <p>Explore our wide range of high-quality products.</p>
                </div>

                <div className="md:col-span-2">
                    <Swiper
                        modules={[ Pagination ]}
                        spaceBetween={"24px"}
                        slidesPerView={1.5}
                        centeredSlides={true}
                        pagination={{
                            clickable: true,
                        }}
                        style={{ paddingBottom: "3rem" }}
                        breakpoints={{
                            768: {
                                centeredSlides: false,
                                slidesPerView: 2.25,
                            },
                            1024: {
                                slidesPerView: 3.25,
                                centeredSlides: false,
                            },
                        }}
                    >
                        <SwiperSlide tag="article">
                            <img src={ImagePlaceholder} alt="" />
                            <div className="flex justify-between items-center mt-4 font-bold">
                                <h3 className="text-xl">Product Name</h3>
                                <p className="text-xl">$55</p>
                            </div>
                            <button className="btn btn-primary w-full mt-4">Add to Cart</button>
                        </SwiperSlide>

                        <SwiperSlide tag="article">
                            <img src={ImagePlaceholder} alt="" />
                            <div className="flex justify-between items-center mt-4 font-bold">
                                <h3 className="text-xl">Product Name</h3>
                                <p className="text-xl">$55</p>
                            </div>
                            <button className="btn btn-primary w-full mt-4">Add to Cart</button>
                        </SwiperSlide>

                        <SwiperSlide tag="article">
                            <img src={ImagePlaceholder} alt="" />
                            <div className="flex justify-between items-center mt-4 font-bold">
                                <h3 className="text-xl">Product Name</h3>
                                <p className="text-xl">$55</p>
                            </div>
                            <button className="btn btn-primary w-full mt-4">Add to Cart</button>
                        </SwiperSlide>

                        <SwiperSlide tag="article">
                            <img src={ImagePlaceholder} alt="" />
                            <div className="flex justify-between items-center mt-4 font-bold">
                                <h3 className="text-xl">Product Name</h3>
                                <p className="text-xl">$55</p>
                            </div>
                            <button className="btn btn-primary w-full mt-4">Add to Cart</button>
                        </SwiperSlide>

                        <SwiperSlide tag="article">
                            <img src={ImagePlaceholder} alt="" />
                            <div className="flex justify-between items-center mt-4 font-bold">
                                <h3 className="text-xl">Product Name</h3>
                                <p className="text-xl">$55</p>
                            </div>
                            <button className="btn btn-primary w-full mt-4">Add to Cart</button>
                        </SwiperSlide>

                        <SwiperSlide tag="article">
                            <img src={ImagePlaceholder} alt="" />
                            <div className="flex justify-between items-center mt-4 font-bold">
                                <h3 className="text-xl">Product Name</h3>
                                <p className="text-xl">$55</p>
                            </div>
                            <button className="btn btn-primary w-full mt-4">Add to Cart</button>
                        </SwiperSlide>
                    </Swiper>
                </div>

                <Link className="btn btn-primary w-full text-center md:row-start-1 md:col-start-2 md:self-end">View All</Link>
            </section>

            {/* PERFECT PRODUCT */}
            <article className="section flex flex-col gap-8 text-center">
                <div className="flex flex-col gap-4">
                    <h2>Find the Perfect Product for You</h2>
                    <p>Explore our wide range of products and use our advanced filter options to refine your search. Whether you're looking for a specific category, price range, popularity, or other attributes, we've got you covered.</p>
                </div>

                <section className="flex flex-col gap-8 md:grid md:grid-cols-3">
                    <article className="flex flex-col items-start gap-4 md:items-center">
                        <img src={IllustrationPlaceholder} alt="" />
                        <h3>Browse by Category</h3>
                        <p>Easily navigate through our product categories to find exactly what you need.</p>
                    </article>

                    <article className="flex flex-col items-start gap-4 md:items-center">
                        <img src={IllustrationPlaceholder} alt="" />
                        <h3>Sort by Price Range</h3>
                        <p>Find products that fit your budget with our price range filter.</p>
                    </article>

                    <article className="flex flex-col items-start gap-4 md:items-center">
                        <img src={IllustrationPlaceholder} alt="" />
                        <h3>Discover Popular Products</h3>
                        <p>Stay up-to-date with the latest trends by exploring our most popular products.</p>
                    </article>
                </section>

                <Link className="btn btn-primary self-center px-12 text-center">View All</Link>
            </article>
        </main>
    );
}
