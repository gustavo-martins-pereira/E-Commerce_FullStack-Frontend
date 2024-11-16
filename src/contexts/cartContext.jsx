import { createContext, useState } from "react";

export const CartContext = createContext(null);

export function CartProvider({ children }) {
    const [cartItems, setCartItems] = useState(new Map());

    function addToCart(product, quantity) {
        setCartItems(oldCartItems => {
            const newCartItems = new Map(oldCartItems);

            const existingProduct = oldCartItems.get(product.id);

            return existingProduct ? newCartItems.set(product.id, { ...existingProduct, quantity: existingProduct.quantity + quantity }) :
                newCartItems.set(product.id, { ...product, quantity });
        });
    };

    return (
        <CartContext.Provider value={{ cartItems, addToCart }}>
            {children}
        </CartContext.Provider>
    );
}
