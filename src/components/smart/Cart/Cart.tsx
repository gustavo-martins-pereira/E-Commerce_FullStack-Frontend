import { useContext, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { IoIosClose, IoMdCart } from "react-icons/io";
import { MdDelete } from "react-icons/md";

import { createOrder } from "@api/services/orderService";
import { UserContext } from "@contexts/userContext";
import { CartContext } from "@contexts/cartContext";
import { BadgeNumber } from "@components/dumbs/BadgeNumber/BadgeNumber";
import { Button } from "@components/dumbs/Button/Button";
import { bufferArrayToImageURL } from "@utils/bufferArrayToImageURL";
import { toastPromise } from "@utils/toast";

export function Cart() {
    const navigate = useNavigate();

    // STATES
    const [isCartOpen, setIsCartOpen] = useState(false);

    // CONTEXTS
    const { user } = useContext(UserContext);
    const { cartItems, updateCartQuantity, removeItemFromCart } = useContext(CartContext);

    // HANDLES
    async function handleOnBuy() {
        await toastPromise(createOrder(totalPrice(), Array.from(cartItems.values())), { pending: "Buying", success: "Order placed!" });

        navigate("/orders");
    }

    function totalPrice() {
        return Array.from(cartItems.values())
            .reduce((total, cartItem) => total + cartItem.quantity * cartItem.price, 0)
            .toFixed(2);
    }

    return (
        <section className={`bg-white w-80 h-full fixed top-0 right-0 flex flex-col gap-4 shadow-lg p-6 transform transition-transform duration-300 ease-in-out z-10 ${isCartOpen ? "translate-x-0" : "translate-x-full"}`}>
            <div className="flex justify-between items-center">
                <h2 className="text-2xl font-bold">Your Cart</h2>
                <IoIosClose
                    className="cursor-pointer rounded hover:bg-red-100"
                    size="3rem"
                    color="red"
                    onClick={() => setIsCartOpen(false)}
                />
            </div>

            <section className="flex flex-col gap-4 overflow-y-auto scrollbar--left-margin">
                {Array.from(cartItems.values()).map(cartItem => (
                    <article className="flex items-center justify-between" key={cartItem.id}>
                        <div className="flex items-center gap-4">
                            <img
                                className="w-12 h-12 object-fill"
                                src={bufferArrayToImageURL(cartItem.image.data)}
                                alt=""
                            />

                            <div>
                                <h3 className="text-lg font-semibold">{cartItem.name}</h3>
                                <p className="text-sm">Price: ${cartItem.price}</p>

                                <div className="flex items-center gap-2 text-sm">
                                    Quantity:
                                    <button
                                        className="bg-red-100 w-6 h-6 flex justify-center items-center pb-[0.1rem] rounded text-red-800 hover:bg-red-200"
                                        onClick={() => updateCartQuantity(cartItem.id, cartItem.quantity - 1)}
                                    >
                                        -
                                    </button>
                                    <p className="text-sm text-gray-600"> {cartItem.quantity}</p>
                                    <button
                                        className="bg-green-100 rounded w-6 h-6 flex justify-center items-center md:pb-[0.1rem] lg:pb-[0.2rem] text-green-800 hover:bg-green-200"
                                        onClick={() => updateCartQuantity(cartItem.id, cartItem.quantity + 1)}
                                    >
                                        +
                                    </button>
                                </div>

                                <Button className="bg-red-500 hover:bg-red-600 mt-2 rounded p-2 cursor-pointer" onClick={() => removeItemFromCart(cartItem.id)}>
                                    <MdDelete className="text-red-100" size="1rem" />
                                </Button>
                            </div>
                        </div>
                        <p className="text-lg font-bold">${(cartItem.quantity * cartItem.price).toFixed(2)}</p>
                    </article>
                ))}
            </section>

            <footer className="flex justify-between border-t pt-4">
                <p className="text-2xl font-semibold">Total</p>
                <p className="text-2xl font-bold">${totalPrice()}</p>
            </footer>

            <div className="mt-auto">
                {user ?
                    <Button className="btn-primary w-full" onClick={handleOnBuy}>Buy</Button>
                    :
                    <Link to="/register-login">
                        <Button className="btn-primary w-full">Login First to Buy</Button>
                    </Link>
                }
            </div>

            {!isCartOpen && (
                <div
                    className="bg-white absolute left-0 bottom-4 border-l border-y rounded-l shadow p-2 -translate-x-full cursor-pointer"
                    onClick={() => setIsCartOpen(true)}
                >
                    {cartItems.size ? (
                        <BadgeNumber number={cartItems.size} accessibilityText="Cart's products quantity">
                            <IoMdCart className="text-icon-primary" size="2.5rem" />
                        </BadgeNumber>
                    ) : (
                        <IoMdCart className="text-icon-primary" size="2.5rem" />
                    )}
                </div>
            )}
        </section>
    );
}
