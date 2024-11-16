import { createContext, useState } from "react";

export const CartContext = createContext(null);

export function CartProvider({ children }) {
    const [cartItems, setCartItems] = useState(new Map());

    function addToCart(product, quantity) {
        setCartItems(oldCartItems => {
            const newCartItems = new Map();
            console.log(product);

            const existingProduct = oldCartItems.get(product.id);

            return existingProduct ?
                newCartItems.set(product.id, { ...existingProduct, quantity: existingProduct.quantity + quantity }) :
                newCartItems.set(product.id, { ...product, quantity });
        });

        setTimeout(() => console.log(cartItems), 2000);
    };

    return (
        <CartContext.Provider value={{ cartItems, addToCart }}>
            {children}
        </CartContext.Provider>
    );
}
