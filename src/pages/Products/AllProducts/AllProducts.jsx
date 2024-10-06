import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

import { getAllProducts } from "@api/services/productsService";
import { Button } from "@components/dumbs/custom/Button/Button";
import { bufferArrayToImageURL } from "@utils/bufferArrayToImageURL";

export function AllProducts() {
    // STATES
    const [products, setProducts] = useState([]);
    const [isAllProducts, setIsAllProducts] = useState(false);

    // EFFECTS
    useEffect(() => {
        async function fetchAllProducts() {
            const products = await getAllProducts();

            setProducts(products);
        }

        fetchAllProducts();
    }, []);

    return (
        <main>
            {/* ALL PRODUCTS */}
            <section className="section flex flex-col gap-8 text-center md:text-left lg:text-center">
                <header className="flex flex-col gap-4">
                    <h2>Products</h2>
                    <p>Explore our wide range of products for all your needs.</p>
                </header>

                <section className={`grid grid-cols-2 gap-4 ${isAllProducts ? "max-h-none" : "max-h-[80vh] overflow-hidden"} sm:grid-cols-3 lg:grid-cols-4 2xl:grid-cols-5`}>
                    {products.map(product => {
                        return (
                            <article key={product.id}>
                                <Link to={`/products/all/${product.id}`}>
                                    <img className="m-auto" src={bufferArrayToImageURL(product.image.data)} alt="" />
                                    <h3 className="text-lg">{product.name}</h3>
                                    <h4>${product.price}</h4>
                                </Link>
                            </article>
                        );
                    })}
                </section>

                {!isAllProducts && <Button className="btn-primary w-fit m-auto" onClick={() => setIsAllProducts(true)}>View All</Button>}
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
