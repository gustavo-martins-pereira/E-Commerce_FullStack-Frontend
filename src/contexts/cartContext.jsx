import { createContext, useState } from "react";

export const CartContext = createContext(null);

export function CartProvider({ children }) {
    const [cartItems, setCartItems] = useState(new Map());

    function addToCart(product, quantity) {
        setCartItems(oldCartItems => {
            const newCartItems = new Map(oldCartItems);

            const existingProduct = oldCartItems.get(product.id);

            return existingProduct
                ? newCartItems.set(product.id, { ...existingProduct, quantity: existingProduct.quantity + quantity})
                : newCartItems.set(product.id, { ...product, quantity });
        });
    }

    function updateCartQuantity(productId, newQuantity) {
        setCartItems(oldCartItems => {
            const newCartItems = new Map(oldCartItems);

            if(newQuantity <= 0) {
                newCartItems.delete(productId);
            } else {
                const existingProduct = oldCartItems.get(productId);
                if(existingProduct) {
                    newCartItems.set(productId, { ...existingProduct, quantity: newQuantity });
                }
            }

            return newCartItems;
        });
    }

    function removeItemFromCart(productId) {
        setCartItems(oldCartItems => {
            const newCartItems = new Map(oldCartItems);
            newCartItems.delete(productId);

            return newCartItems;
        });
    }

    return (
        <CartContext.Provider value={{ cartItems, addToCart, updateCartQuantity, removeItemFromCart }}>
            {children}
        </CartContext.Provider>
    );
}

