import { useContext, useEffect, useState } from "react";
import { Link } from "react-router-dom";

import { getAllProducts } from "@api/services/productService";
import { Button } from "@components/dumbs/Button/Button";
import { Skeleton } from "@components/dumbs/Skeleton/Skeleton";
import { UserContext } from "@contexts/userContext";
import { Product } from "@utils/types/product";

export function AllProducts() {
    const INITIAL_PRODUCTS_TO_SHOW = 10;

    // CONTEXTS
    const { loggedInUser } = useContext(UserContext)!;

    // STATES
    const [productsData, setProductsData] = useState<Product[] | null>(null);
    const [productsToShow, setProductsToShow] = useState<Product[]>([]);
    const [isAllProducts, setIsAllProducts] = useState<boolean>(false);

    // EFFECTS
    useEffect(() => {
        (async function fetchAllProducts(): Promise<void> {
            const products = await getAllProducts();

            setProductsData(products);
            if(products) setProductsToShow(products.slice(0, INITIAL_PRODUCTS_TO_SHOW));
        })();
    }, []);

    // HANDLES
    function handleShowAllProducts(): void {
        if (!productsData) return;
        
        setIsAllProducts(true);
        setProductsToShow(productsData);
    }

    return (
        <main>
            {/* ALL PRODUCTS */}
            <section className="section flex flex-col gap-8 text-center md:text-left lg:text-center">
                <header className="flex flex-col gap-4">
                    <h2>Products</h2>
                    <p>Explore our wide range of products for all your needs.</p>
                </header>

                <section className="grid grid-cols-2 gap-4 sm:grid-cols-3 lg:grid-cols-4 2xl:grid-cols-5">
                    {productsData ? (
                        productsToShow.map((product: Product) => (
                            <article key={product.id}>
                                <Link
                                    className="h-full flex flex-col justify-between gap-4"
                                    to={`/products/all/${product.id}`}
                                >
                                    <img
                                        className="max-h-[30rem] mx-auto object-contain"
                                        src={product.imageUrl}
                                        alt={product.name}
                                    />

                                    <section>
                                        <h3 className="text-lg">
                                            {product.name.length > 50 
                                                ? `${product.name.substring(0, 50)}...` 
                                                : product.name}
                                        </h3>
                                        <h4>${product.price}</h4>
                                    </section>
                                </Link>
                            </article>
                        ))
                    ) : (
                        Array.from({ length: INITIAL_PRODUCTS_TO_SHOW }).map((_, index) => (
                            <Skeleton className="flex flex-col gap-2" key={index}>
                                <div className="h-[15rem]" />
                                <div className="h-[2.5rem]" />
                                <div className="h-[1.5rem]" />
                            </Skeleton>
                        ))
                    )}
                </section>

                {(productsData?.length ?? 0) > INITIAL_PRODUCTS_TO_SHOW && !isAllProducts && (
                    <Button 
                        className="btn-primary w-fit m-auto" 
                        onClick={handleShowAllProducts}
                    >
                        View All
                    </Button>
                )}
            </section>

            {/* DISCOVER */}
            {!loggedInUser && (
                <section className="bg-banner py-12">
                    <div className="flex flex-col gap-8 mx-section">
                        <h2>Discover Our Amazing Products Today</h2>
                        <p>Explore our wide range of high-quality products and find exactly what you need.</p>
                        <div className="flex gap-4">
                            <Link to="/register-login">
                                <Button className="btn-secondary">Sign Up</Button>
                            </Link>
                            <Link to="/register-login">
                                <Button className="btn-primary">Log In</Button>
                            </Link>
                        </div>
                    </div>
                </section>
            )}
        </main>
    );
}
