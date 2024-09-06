import ImagePlaceholder from "../../assets/images/placeholder-image.svg";
import IllustrationPlaceholder from "../../assets/images/illustration-placeholder.svg";

export function Products() {
    return (
        <main>
            {/* PRODUCTS CAROUSEL */}
            <section className="flex flex-col gap-8 p-8">
                <img src={ImagePlaceholder} alt="" />

                <header className="flex flex-col gap-4">
                    <h2>Product Name</h2>
                    <p className="text-2xl font-bold">$55</p>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Suscipit id nemo minima a recusandae ab quaerat explicabo pariatur numquam, natus repellat blanditiis maiores eaque ipsum maxime vitae iure sapiente atque.</p>
                </header>

                <div className="flex flex-col gap-2">
                    <label htmlFor="quantity">Quantity</label>
                    <input className="w-20 border border-black p-2" type="number" name="quantity" id="quantity" />
                </div>

                <input className="btn btn-secondary" type="submit" value="Add to Cart" />
            </section>

            {/* ARRIVALS */}
            <article className="flex flex-col gap-8 p-8">
                <div className="flex flex-col gap-4">
                    <h2>New Arrivals for You</h2>
                    <p>Check out the latest additions to our store. We constantly update our inventory to bring you the best products.</p>
                </div>

                <section className="flex flex-col gap-8">
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
            <section className="flex flex-col gap-8 p-8">
                <div className="flex flex-col gap-4">
                    <h2>Our Products</h2>
                    <p>Explore our wide range of high-quality products.</p>
                </div>

                <article className="flex flex-col gap-4">
                    <img src={ImagePlaceholder} alt="" />
                    
                    <div className="flex justify-between items-center font-bold">
                        <h3 className="text-xl">Product Name</h3>
                        <p className="text-xl">$55</p>
                    </div>

                    <button className="btn btn-primary">Add to Cart</button>
                </article>
            </section>

            {/* PERFECT PRODUCT */}
            <article className="flex flex-col gap-8 p-8">
            <div className="flex flex-col gap-4">
                    <h2>Find the Perfect Product for You</h2>
                    <p>Explore our wide range of products and use our advanced filter options to refine your search. Whether you're looking for a specific category, price range, popularity, or other attributes, we've got you covered.</p>
                </div>

                <section className="flex flex-col gap-8">
                    <article className="flex flex-col items-start gap-4">
                        <img src={IllustrationPlaceholder} alt="" />
                        <h3>Browse by Category</h3>
                        <p>Easily navigate through our product categories to find exactly what you need.</p>
                    </article>

                    <article className="flex flex-col items-start gap-4">
                        <img src={IllustrationPlaceholder} alt="" />
                        <h3>Sort by Price Range</h3>
                        <p>Find products that fit your budget with our price range filter.</p>
                    </article>

                    <article className="flex flex-col items-start gap-4">
                        <img src={IllustrationPlaceholder} alt="" />
                        <h3>Discover Popular Products</h3>
                        <p>Stay up-to-date with the latest trends by exploring our most popular products.</p>
                    </article>
                </section>
            </article>
        </main>
    );
}
