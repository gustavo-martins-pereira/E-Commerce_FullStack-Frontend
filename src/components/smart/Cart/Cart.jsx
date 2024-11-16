import { useEffect, useState } from "react";
import { IoIosClose, IoMdCart } from "react-icons/io";

import { getProductById } from "@api/services/productService";
import { bufferArrayToImageURL } from "@utils/bufferArrayToImageURL";

export function Cart() {
    // STATES
    const [product, setProduct] = useState();
    const [isCartOpen, setIsCartOpen] = useState(false);

    // EFFECTS
    useEffect(() => {
        (async function fetchProduct() {
            const product = await getProductById(1);

            setProduct(product);
        })();
    }, []);

    return (
        <section className={`bg-white w-80 h-full fixed top-0 right-0 flex flex-col gap-4 shadow-lg p-6 transform transition-transform duration-300 ease-in-out z-10 ${isCartOpen ? "translate-x-0" : "translate-x-full"}`}>
            <div className="flex justify-between items-center">
                <h2 className="text-2xl font-bold">Your Cart</h2>
                <IoIosClose className="cursor-pointer rounded hover:bg-red-100" size="3rem" color="red" onClick={() => setIsCartOpen(false)} />
            </div>

            <section className="flex flex-col gap-4 overflow-y-auto scrollbar--left-margin">
                <article className="flex items-center justify-between">
                    <div className="flex items-center gap-4">
                        <img className="w-12 h-12 object-fill" src={bufferArrayToImageURL(product?.image.data)} alt="" />
                        <div>
                            <h3 className="text-lg font-semibold">{product?.name}</h3>
                            <p className="text-sm text-gray-600">Price: ${product?.price}</p>
                            <p className="text-sm text-gray-600">Quantity: 1</p>
                        </div>
                    </div>
                    <p className="text-lg font-bold">$20.00</p>
                </article>

                <article className="flex items-center justify-between">
                    <div className="flex items-center gap-4">
                        <img className="w-12 h-12 object-fill" src={bufferArrayToImageURL(product?.image.data)} alt="" />
                        <div>
                            <h3 className="text-lg font-semibold">{product?.name}</h3>
                            <p className="text-sm text-gray-600">Price: ${product?.price}</p>
                            <p className="text-sm text-gray-600">Quantity: 1</p>
                        </div>
                    </div>
                    <p className="text-lg font-bold">$20.00</p>
                </article>

                <article className="flex items-center justify-between">
                    <div className="flex items-center gap-4">
                        <img className="w-12 h-12 object-fill" src={bufferArrayToImageURL(product?.image.data)} alt="" />
                        <div>
                            <h3 className="text-lg font-semibold">{product?.name}</h3>
                            <p className="text-sm text-gray-600">Price: ${product?.price}</p>
                            <p className="text-sm text-gray-600">Quantity: 1</p>
                        </div>
                    </div>
                    <p className="text-lg font-bold">$20.00</p>
                </article>

                <article className="flex items-center justify-between">
                    <div className="flex items-center gap-4">
                        <img className="w-12 h-12 object-fill" src={bufferArrayToImageURL(product?.image.data)} alt="" />
                        <div>
                            <h3 className="text-lg font-semibold">{product?.name}</h3>
                            <p className="text-sm text-gray-600">Price: ${product?.price}</p>
                            <p className="text-sm text-gray-600">Quantity: 1</p>
                        </div>
                    </div>
                    <p className="text-lg font-bold">$20.00</p>
                </article>

                <article className="flex items-center justify-between">
                    <div className="flex items-center gap-4">
                        <img className="w-12 h-12 object-fill" src={bufferArrayToImageURL(product?.image.data)} alt="" />
                        <div>
                            <h3 className="text-lg font-semibold">{product?.name}</h3>
                            <p className="text-sm text-gray-600">Price: ${product?.price}</p>
                            <p className="text-sm text-gray-600">Quantity: 1</p>
                        </div>
                    </div>
                    <p className="text-lg font-bold">$20.00</p>
                </article>

                <article className="flex items-center justify-between">
                    <div className="flex items-center gap-4">
                        <img className="w-12 h-12 object-fill" src={bufferArrayToImageURL(product?.image.data)} alt="" />
                        <div>
                            <h3 className="text-lg font-semibold">{product?.name}</h3>
                            <p className="text-sm text-gray-600">Price: ${product?.price}</p>
                            <p className="text-sm text-gray-600">Quantity: 1</p>
                        </div>
                    </div>
                    <p className="text-lg font-bold">$20.00</p>
                </article>

                <article className="flex items-center justify-between">
                    <div className="flex items-center gap-4">
                        <img className="w-12 h-12 object-fill" src={bufferArrayToImageURL(product?.image.data)} alt="" />
                        <div>
                            <h3 className="text-lg font-semibold">{product?.name}</h3>
                            <p className="text-sm text-gray-600">Price: ${product?.price}</p>
                            <p className="text-sm text-gray-600">Quantity: 1</p>
                        </div>
                    </div>
                    <p className="text-lg font-bold">$20.00</p>
                </article>

                <article className="flex items-center justify-between">
                    <div className="flex items-center gap-4">
                        <img className="w-12 h-12 object-fill" src={bufferArrayToImageURL(product?.image.data)} alt="" />
                        <div>
                            <h3 className="text-lg font-semibold">{product?.name}</h3>
                            <p className="text-sm text-gray-600">Price: ${product?.price}</p>
                            <p className="text-sm text-gray-600">Quantity: 1</p>
                        </div>
                    </div>
                    <p className="text-lg font-bold">$20.00</p>
                </article>

                <article className="flex items-center justify-between">
                    <div className="flex items-center gap-4">
                        <img className="w-12 h-12 object-fill" src={bufferArrayToImageURL(product?.image.data)} alt="" />
                        <div>
                            <h3 className="text-lg font-semibold">{product?.name}</h3>
                            <p className="text-sm text-gray-600">Price: ${product?.price}</p>
                            <p className="text-sm text-gray-600">Quantity: 1</p>
                        </div>
                    </div>
                    <p className="text-lg font-bold">$20.00</p>
                </article>

                <article className="flex items-center justify-between">
                    <div className="flex items-center gap-4">
                        <img className="w-12 h-12 object-fill" src={bufferArrayToImageURL(product?.image.data)} alt="" />
                        <div>
                            <h3 className="text-lg font-semibold">{product?.name}</h3>
                            <p className="text-sm text-gray-600">Price: ${product?.price}</p>
                            <p className="text-sm text-gray-600">Quantity: 1</p>
                        </div>
                    </div>
                    <p className="text-lg font-bold">$20.00</p>
                </article>

                <article className="flex items-center justify-between">
                    <div className="flex items-center gap-4">
                        <img className="w-12 h-12 object-fill" src={bufferArrayToImageURL(product?.image.data)} alt="" />
                        <div>
                            <h3 className="text-lg font-semibold">{product?.name}</h3>
                            <p className="text-sm text-gray-600">Price: ${product?.price}</p>
                            <p className="text-sm text-gray-600">Quantity: 1</p>
                        </div>
                    </div>
                    <p className="text-lg font-bold">$20.00</p>
                </article>

                <article className="flex items-center justify-between">
                    <div className="flex items-center gap-4">
                        <img className="w-12 h-12 object-fill" src={bufferArrayToImageURL(product?.image.data)} alt="" />
                        <div>
                            <h3 className="text-lg font-semibold">{product?.name}</h3>
                            <p className="text-sm text-gray-600">Price: ${product?.price}</p>
                            <p className="text-sm text-gray-600">Quantity: 1</p>
                        </div>
                    </div>
                    <p className="text-lg font-bold">$20.00</p>
                </article>

                <article className="flex items-center justify-between">
                    <div className="flex items-center gap-4">
                        <img className="w-12 h-12 object-fill" src={bufferArrayToImageURL(product?.image.data)} alt="" />
                        <div>
                            <h3 className="text-lg font-semibold">{product?.name}</h3>
                            <p className="text-sm text-gray-600">Price: ${product?.price}</p>
                            <p className="text-sm text-gray-600">Quantity: 1</p>
                        </div>
                    </div>
                    <p className="text-lg font-bold">$20.00</p>
                </article>
            </section>

            <footer className="flex justify-between border-t pt-4">
                <p className="text-2xl font-semibold">Total</p>
                <p className="text-2xl font-bold">$20.00</p>
            </footer>

            {/* LABEL OPEN/CLOSE */}
            {!isCartOpen && <div className="bg-white absolute left-0 bottom-4 border-l border-y rounded-l shadow p-2 -translate-x-full cursor-pointer" onClick={() => setIsCartOpen(true)}>
                <IoMdCart className="text-icon-primary" size="2.5rem" />
            </div>}
        </section>
    );
}
