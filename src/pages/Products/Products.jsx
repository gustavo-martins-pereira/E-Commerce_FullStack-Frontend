import { Swiper, SwiperSlide } from 'swiper/react';
import { Link } from "react-router-dom";
import { Pagination } from "swiper/modules";

import { FeaturesSection } from "@components/dumbs/custom/FeaturesSection/FeaturesSection";
import { Button } from "@components/dumbs/custom/Button/Button";

import ImagePlaceholder from "@assets/images/placeholder-image.svg";
import IllustrationPlaceholder from "@assets/images/illustration-placeholder.svg";

import { paginationRenderBulletConfig } from "@utils/default-configs/swiper";

export function Products() {
    // MOCKED DATA
    const bannerProducts = [
        {
            name: "Product Name",
            price: "$55",
            description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Tenetur libero quaerat ut vero accusamus recusandae repellendus et rerum! Ducimus repellat, porro doloribus accusantium voluptatem quae explicabo tempora quasi unde nesciunt?",
        },
        {
            name: "Product Name",
            price: "$55",
            description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Tenetur libero quaerat ut vero accusamus recusandae repellendus et rerum! Ducimus repellat, porro doloribus accusantium voluptatem quae explicabo tempora quasi unde nesciunt?",
        },
    ];

    const arrivalsData = [
        {
            imageSrc: IllustrationPlaceholder,
            title: "Featured Products",
            description: "Explore our curated selection of top-quality products.",
            altText: "Featured Products Illustration"
        },
        {
            imageSrc: IllustrationPlaceholder,
            title: "Limited Time Offers",
            description: "Don't miss out on these exclusive deals.",
            altText: "Limited Time Offers Illustration"
        },
        {
            imageSrc: IllustrationPlaceholder,
            title: "Customer Favorites",
            description: "Discover what our customers love the most.",
            altText: "Customer Favorites Illustration"
        },
    ];

    const perfectProductData = [
        {
            imageSrc: IllustrationPlaceholder,
            title: 'Browse by Category',
            description: 'Easily navigate through our product categories to find exactly what you need.',
            altText: 'Category Illustration',
            className: 'items-start md:items-center'
        },
        {
            imageSrc: IllustrationPlaceholder,
            title: 'Sort by Price Range',
            description: 'Find products that fit your budget with our price range filter.',
            altText: 'Price Range Illustration',
            className: 'items-start md:items-center'
        },
        {
            imageSrc: IllustrationPlaceholder,
            title: 'Discover Popular Products',
            description: 'Stay up-to-date with the latest trends by exploring our most popular products.',
            altText: 'Popular Products Illustration',
            className: 'items-start md:items-center'
        }
    ];

    return (
        <main>
            {/* PRODUCTS CAROUSEL */}
            <section className="section flex flex-col gap-8">
                <section>
                    <Swiper
                        className="pb-12 lg:pb-12"
                        modules={[Pagination]}
                        spaceBetween={"50px"}
                        pagination={{
                            clickable: true,
                            renderBullet: paginationRenderBulletConfig,
                        }}
                    >
                        {bannerProducts.map((product, index) => (
                            <SwiperSlide className="lg:flex lg:gap-8" tag="article" key={index}>
                                <img className="w-full shadow-md sm:w-1/2 sm:m-auto" src={ImagePlaceholder} alt="" />

                                <header className="flex flex-col gap-4 mt-4">
                                    <h2>{product.name}</h2>
                                    <p className="text-2xl font-bold">{product.price}</p>
                                    <p>{product.description}</p>
                                </header>
                            </SwiperSlide>
                        ))}
                    </Swiper>
                </section>

                <div className="flex flex-col gap-2 -mt-12">
                    <label htmlFor="quantity">Quantity</label>
                    {/* TODO: Change to the WindUI library when the input of type number is done */}
                    <input className="w-20 border  border-input p-2 focus:outline-input" type="number" name="quantity" id="quantity" />
                </div>

                <input className="btn btn-primary" type="submit" value="Add to Cart" />
            </section>

            {/* ARRIVALS */}
            <article className="section flex flex-col gap-8">
                <div className="flex flex-col gap-4">
                    <h2>New Arrivals for You</h2>
                    <p>Check out the latest additions to our store. We constantly update our inventory to bring you the best products.</p>
                </div>

                <FeaturesSection
                    features={arrivalsData}
                    featureStyles={{
                        alignItems: "items-start",
                    }}
                />
            </article>

            {/* OUR PRODUCTS */}
            <section className="section flex flex-col gap-8 md:grid md:grid-cols-[75%_1fr]">
                <div className="flex flex-col gap-4">
                    <h2>Our Products</h2>
                    <p>Explore our wide range of high-quality products.</p>
                </div>

                <div className="md:col-span-2">
                    <Swiper
                        modules={[Pagination]}
                        spaceBetween={"24px"}
                        slidesPerView={1.5}
                        centeredSlides={true}
                        pagination={{
                            clickable: true,
                            renderBullet: paginationRenderBulletConfig,
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
                        {Array.from({ length: 9 }, (_, index) => (
                            <SwiperSlide tag="article" key={index}>
                                <img src={ImagePlaceholder} alt="" />
                                <div className="flex justify-between items-center mt-4 font-bold">
                                    <h3 className="text-xl">Product Name</h3>
                                    <p className="text-xl">$55</p>
                                </div>
                                <Button className="btn-secondary w-full mt-4">Add to Cart</Button>
                            </SwiperSlide>
                        ))}
                    </Swiper>
                </div>

                <Link className="btn btn-primary w-full text-center md:row-start-1 md:col-start-2 md:self-end" to="/products/all">View All</Link>
            </section>

            {/* PERFECT PRODUCT */}
            <article className="section flex flex-col gap-8 text-center">
                <div className="flex flex-col gap-4">
                    <h2>Find the Perfect Product for You</h2>
                    <p>Explore our wide range of products and use our advanced filter options to refine your search. Whether you're looking for a specific category, price range, popularity, or other attributes, we've got you covered.</p>
                </div>

                <FeaturesSection
                    features={perfectProductData}
                    featureStyles={{
                        alignItems: "items-start",
                        others: "md:items-center",
                    }}
                />

                <Link className="btn btn-primary self-center px-12 text-center" to="/products/all">View All</Link>
            </article>
        </main>
    );
}
