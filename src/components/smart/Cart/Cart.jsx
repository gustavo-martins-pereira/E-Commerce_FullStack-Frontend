import { useContext, useState } from "react";
import { IoIosClose, IoMdCart } from "react-icons/io";

import { CartContext } from "@contexts/cartContext";
import { BadgeNumber } from "@components/dumbs/BadgeNumber/BadgeNumber";
import { bufferArrayToImageURL } from "@utils/bufferArrayToImageURL";

export function Cart() {
    // STATES
    const [isCartOpen, setIsCartOpen] = useState(false);

    // CONTEXTS
    const { cartItems } = useContext(CartContext);

    function totalPrice() {
        return Array.from(cartItems.values()).reduce((total, cartItem) => total + (cartItem.quantity * cartItem.price), 0).toFixed(2);
    }

    return (
        <section className={`bg-white w-80 h-full fixed top-0 right-0 flex flex-col gap-4 shadow-lg p-6 transform transition-transform duration-300 ease-in-out z-10 ${isCartOpen ? "translate-x-0" : "translate-x-full"}`}>
            <div className="flex justify-between items-center">
                <h2 className="text-2xl font-bold">Your Cart</h2>
                <IoIosClose className="cursor-pointer rounded hover:bg-red-100" size="3rem" color="red" onClick={() => setIsCartOpen(false)} />
            </div>

            <section className="flex flex-col gap-4 overflow-y-auto scrollbar--left-margin">
                {Array.from(cartItems.values()).map(cartItem => {
                    return <article className="flex items-center justify-between" key={cartItem.id}>
                        <div className="flex items-center gap-4">
                            <img className="w-12 h-12 object-fill" src={bufferArrayToImageURL(cartItem.image.data)} alt="" />
                            <div>
                                <h3 className="text-lg font-semibold">{cartItem.name}</h3>
                                <p className="text-sm text-gray-600">Price: ${cartItem.price}</p>
                                <p className="text-sm text-gray-600">Quantity: {cartItem.quantity}</p>
                            </div>
                        </div>
                        <p className="text-lg font-bold">${(cartItem.quantity * cartItem.price).toFixed(2)}</p>
                    </article>
                })}
            </section>

            <footer className="flex justify-between border-t pt-4">
                <p className="text-2xl font-semibold">Total</p>
                <p className="text-2xl font-bold">${totalPrice()}</p>
            </footer>

            {/* LABEL OPEN/CLOSE */}
            {!isCartOpen &&
                <div
                    className="bg-white absolute left-0 bottom-4 border-l border-y rounded-l shadow p-2 -translate-x-full cursor-pointer"
                    onClick={() => setIsCartOpen(true)}
                >
                    {cartItems.size ?
                        <BadgeNumber
                            number={cartItems.size}
                            accessibilityText="Cart's products quantity"
                        >
                            <IoMdCart className="text-icon-primary" size="2.5rem" />
                        </BadgeNumber> :
                        <IoMdCart className="text-icon-primary" size="2.5rem" />
                    }
                </div>}
        </section>
    );
}
