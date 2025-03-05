import { createContext, useState, ReactNode } from "react";

import { CartOrderItem } from "@utils/types/order";

interface CartContextType {
    cartOrderItems: Map<number, CartOrderItem>;

    addToCart: (product: CartOrderItem, quantity: number) => void;
    updateCartQuantity: (productId: number, newQuantity: number) => void;
    removeItemFromCart: (productId: number) => void;
}

interface CartProviderProps {
    children: ReactNode;
}

export const CartContext = createContext<CartContextType | null>(null);

export function CartProvider({ children }: CartProviderProps) {
    const [cartOrderItems, setCartItems] = useState<Map<number, CartOrderItem>>(new Map());

    function addToCart(product: CartOrderItem, quantity: number): void {
        setCartItems(oldCartItems => {
            const newCartItems = new Map(oldCartItems);
            const existingProduct = oldCartItems.get(product.id);

            return existingProduct
                ? newCartItems.set(product.id, { ...existingProduct, quantity: existingProduct.quantity + quantity})
                : newCartItems.set(product.id, { ...product, quantity });
        });
    }

    function updateCartQuantity(productId: number, newQuantity: number): void {
        setCartItems(oldCartItems => {
            const newCartItems = new Map(oldCartItems);

            if(newQuantity <= 0) {
                newCartItems.delete(productId);
            } else {
                const existingProduct = oldCartItems.get(productId);
                if(existingProduct) newCartItems.set(productId, { ...existingProduct, quantity: newQuantity });
            }

            return newCartItems;
        });
    }

    function removeItemFromCart(productId: number): void {
        setCartItems(oldCartItems => {
            const newCartItems = new Map(oldCartItems);
            newCartItems.delete(productId);

            return newCartItems;
        });
    }

    return (
        <CartContext.Provider value={{ cartOrderItems, addToCart, updateCartQuantity, removeItemFromCart }}>
            {children}
        </CartContext.Provider>
    );
}
