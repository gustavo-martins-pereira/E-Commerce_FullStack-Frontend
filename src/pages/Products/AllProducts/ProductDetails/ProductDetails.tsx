import { useContext, useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";

import { getProductById } from "@api/services/productService";
import { Button } from "@components/dumbs/Button/Button";
import { Accordion } from "@components/dumbs/Accordion/Accordion";
import { InputNumber } from "@components/dumbs/inputs/InputNumber/InputNumber";
import { Skeleton } from "@components/dumbs/Skeleton/Skeleton";
import { CartContext } from "@contexts/cartContext";
import { bufferArrayToImageURL } from "@utils/bufferArrayToImageURL";

export function ProductDetails() {
    const { productId } = useParams();

    // STATES
    const [product, setProduct] = useState();
    const [productQuantity, setProductQuantity] = useState(1);

    // CONTEXTS
    const { addToCart } = useContext(CartContext);

    // EFFECTS
    useEffect(() => {
        (async function fetchProductById() {
            const product = await getProductById(productId);

            setProduct(product);
        })();
    }, []);

    return (
        <main>
            {/* PRODUCT ITSELF */}
            <section className="section flex flex-col gap-8 lg:flex-row-reverse">
                {product ?
                    <img className="w-1/2 m-auto lg:m-0 lg:ml-auto" src={bufferArrayToImageURL(product.image.data)} alt="" />
                    :
                    <Skeleton className="w-1/2 m-auto lg:m-0 lg:ml-auto">
                        <div className="h-[35rem]"></div>
                    </Skeleton>
                }

                <div className="flex flex-col gap-4 flex-grow">
                    {product ?
                        <>
                            <h2>{product.name}</h2>
                            <h3>${product.price}</h3>
                            <p>{product.description}</p>
                        </>
                        :
                        <Skeleton className="flex flex-col gap-2">
                            <div className="h-12"></div>
                            <div className="h-12"></div>
                            <div className="h-40"></div>
                        </Skeleton>
                    }


                    <InputNumber
                        label="Quantity"
                        id="quantity"
                        inputStyles="w-20"
                        min={1}
                        value={productQuantity}
                        onChange={event => setProductQuantity(Number(event.target.value))}
                    />
                    <Button
                        className="btn-secondary"
                        disabled={!product}
                        onClick={() => addToCart(product, productQuantity)}
                    >
                        Add to Cart
                    </Button>
                </div>
            </section>

            {/* DISCOVER */}
            <section className="section flex flex-col gap-4 text-center lg:gap-6">
                <h2>Discover Our Amazing Products</h2>
                <p>Explore our wide range of high-quality products and find your perfect match.</p>

                <div className="flex gap-4 justify-center">
                    <Link to="/products"><Button className="btn-secondary">Explore More</Button></Link>
                    <Link to="/products/all"><Button className="btn-primary">View all Products</Button></Link>
                </div>
            </section>

            {/* FAQ */}
            <section className="section flex flex-col gap-4 text-center lg:w-3/4 lg:max-w-[40rem] lg:m-auto">
                <h2>FAQs</h2>
                <p>Find answers to commonly asked questions about the product.</p>

                <section className="flex flex-col mt-4 text-left">
                    <Accordion
                        question="When I add the product to the cart, can I edit the quantity?"
                        answer="Yes, you can adjust the quantity of any product in the cart."
                    />
                    <Accordion
                        question="How many products can I put in the cart?"
                        answer="As much as you want."
                    />
                    <Accordion
                        question="When I go to the payment system, I won't need to provide my personal data, right?"
                        answer="No, the payment system is just a SIMULATION, so you can see what the system would be like if it were developed for real E-Commerce."
                    />
                    <Accordion
                        question="Because these questions aren't your standard questions like, 'Will I get a refund? Etc...'?"
                        answer="Because these would be standard questions that would be very boring and not very engaging, I wanted to answer the most frequently asked questions that a recruiter would ask if they enter the site to see how it works."
                    />
                </section>
            </section>
        </main>
    );
}
