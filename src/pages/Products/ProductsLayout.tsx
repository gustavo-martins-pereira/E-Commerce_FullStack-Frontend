import { Outlet } from "react-router-dom";

import { Cart } from "@components/smart/Cart/Cart";
import { CartProvider } from "@contexts/cartContext";

export function ProductsLayout() {
    return (
        <CartProvider>
            <Cart />

            <Outlet />
        </CartProvider>
    );
}
