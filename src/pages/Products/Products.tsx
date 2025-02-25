import { useContext, useEffect, useState, ChangeEvent } from "react";
import { Link } from "react-router-dom";
import { Swiper, SwiperSlide } from 'swiper/react';
import { Pagination } from "swiper/modules";
import { FaStar, FaClock, FaHeart, FaListUl, FaDollarSign, FaChartLine } from "react-icons/fa";

import { getAllProducts } from "@api/services/productService";
import { FeaturesSection } from "@components/dumbs/FeaturesSection/FeaturesSection";
import { Button } from "@components/dumbs/Button/Button";
import { InputNumber } from "@components/dumbs/inputs/InputNumber/InputNumber";
import { Skeleton } from "@components/dumbs/Skeleton/Skeleton";
import { CartContext } from "@contexts/cartContext";
import { paginationRenderBulletConfig } from "@utils/swiper";
import { bufferArrayToImageURL } from "@utils/bufferArrayToImageURL";

interface Product {
    id: number;
    name: string;
    description: string;
    price: number;
    image: {
        data: Buffer;
    };
}

interface Feature {
    icon: JSX.Element;
    altText: string;
    title: string;
    description: string;
    className?: string;
}

export function Products(): JSX.Element {
    const arrivalsData: Feature[] = [
        {
            icon: <FaStar className="icon-primary" />,
            altText: "Star",
            title: "Featured Products",
            description: "Explore our curated selection of top-quality products.",
        },
        {
            icon: <FaClock className="icon-primary" />,
            altText: "Clock",
            title: "Limited Time Offers",
            description: "Don't miss out on these exclusive deals.",
        },
        {
            icon: <FaHeart className="icon-primary" />,
            altText: "Heart",
            title: "Customer Favorites",
            description: "Discover what our customers love the most.",
        },
    ];

    const perfectProductData: Feature[] = [
        {
            icon: <FaListUl className="icon-primary" />,
            altText: "Bullet list",
            title: "Browse by Category",
            description: "Easily navigate through our product categories to find exactly what you need.",
            className: "items-start md:items-center",
        },
        {
            icon: <FaDollarSign className="icon-primary" />,
            altText: "Dollar sign",
            title: "Sort by Price Range",
            description: "Find products that fit your budget with our price range filter.",
            className: "items-start md:items-center",
        },
        {
            icon: <FaChartLine className="icon-primary" />,
            altText: "Graph with upward arrow",
            title: "Discover Popular Products",
            description: "Stay up-to-date with the latest trends by exploring our most popular products.",
            className: "items-start md:items-center",
        }
    ];

    // STATES
    const [products, setProducts] = useState<Product[] | null>(null);
    const [isProductsLoaded, setIsProductsLoaded] = useState<boolean>(false);
    const [selectedProduct, setSelectedProduct] = useState<Product | null>(null);
    const [productQuantity, setProductQuantity] = useState<number>(1);

    // CONTEXTS
    const { addToCart } = useContext(CartContext);

    // EFFECTS
    useEffect(() => {
        (async function fetchAllProducts(): Promise<void> {
            const fetchedProducts = await getAllProducts();

            setProducts(fetchedProducts);
            setIsProductsLoaded(true);
            setSelectedProduct(fetchedProducts[0]);
        })();
    }, []);

    // HANDLES
    const handleQuantityChange = (event: ChangeEvent<HTMLInputElement>): void => {
        setProductQuantity(Number(event.target.value));
    };

    const handleAddToCart = (product: Product, quantity: number): void => {
        addToCart(product, quantity);
    };

    return (
        <main>
            {/* PRODUCTS CAROUSEL */}
            <section className="section flex flex-col gap-8">
                <section>
                    {products ?
                        <Swiper
                            className="pb-12 lg:pb-12"
                            modules={[Pagination]}
                            spaceBetween={"50px"}
                            pagination={{
                                clickable: true,
                                renderBullet: paginationRenderBulletConfig,
                            }}
                            onSlideChange={swiper => setSelectedProduct(products[swiper.activeIndex])}
                        >
                            {products.slice(0, 3).map(product => (
                                <SwiperSlide className="lg:grid lg:grid-cols-2 lg:gap-8" tag="article" key={product.id}>
                                    <img
                                        className="w-full max-h-[30rem] object-contain sm:w-1/2 sm:m-auto lg:w-full"
                                        src={bufferArrayToImageURL(product.image.data)}
                                        alt={product.name}
                                    />

                                    <header className="flex flex-col gap-4 mt-4">
                                        <h2>{product.name}</h2>
                                        <p className="text-2xl font-bold">${product.price}</p>
                                        <p>{product.description}</p>
                                    </header>
                                </SwiperSlide>
                            ))}
                        </Swiper>
                        :
                        <Skeleton className="flex flex-col gap-2 lg:grid lg:grid-cols-2">
                            <div className="h-[30rem]"></div>
                            <div className="flex flex-col gap-4">
                                <div className="h-[3rem]"></div>
                                <div className="h-[3rem]"></div>
                                <div className="h-2/6"></div>
                            </div>
                        </Skeleton>
                    }
                </section>

                <InputNumber
                    label="Quantity"
                    id="quantity"
                    inputStyles="w-20"
                    min={1}
                    value={productQuantity}
                    onChange={handleQuantityChange}
                />

                <Button
                    className="btn-primary"
                    disabled={!isProductsLoaded}
                    onClick={() => handleAddToCart(selectedProduct!, productQuantity)}
                >
                    Add to Cart
                </Button>
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
                        alignItems: "flex-start"
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
                            1280: {
                                slidesPerView: 4.5,
                                centeredSlides: false,
                            },
                        }}
                    >
                        {products ?
                            products.slice(0, 10).map(product => (
                                <SwiperSlide className="h-auto flex flex-col justify-between" tag="article" key={product.id}>
                                    <img
                                        className="max-h-80"
                                        src={bufferArrayToImageURL(product.image.data)}
                                        alt=""
                                    />
                                    <div className="flex justify-between items-center gap-4 mt-auto font-bold">
                                        <h3 className="text-xl">{product.name}</h3>
                                        <p className="text-xl">${product.price}</p>
                                    </div>
                                    <Button
                                        className="btn-secondary w-full mt-4"
                                        onClick={() => handleAddToCart(product, 1)}
                                    >
                                        Add to Cart
                                    </Button>
                                </SwiperSlide>
                            ))
                            :
                            Array.from({ length: 5 }).map((_, index) => <SwiperSlide key={index}>
                                <Skeleton className="flex flex-col gap-2">
                                    <div className="h-80"></div>
                                    <div className="h-[3rem]"></div>
                                    <div className="h-[2rem]"></div>
                                </Skeleton>
                            </SwiperSlide>
                            )
                        }
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
                        additionalClassNames: "md:items-center",
                    }}
                />

                <Link className="btn btn-primary self-center px-12 text-center" to="/products/all">View All</Link>
            </article>
        </main>
    );
}
