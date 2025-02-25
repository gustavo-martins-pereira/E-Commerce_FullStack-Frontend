import { Outlet } from "react-router-dom";

import { Cart } from "@components/smart/Cart/Cart";
import { CartProvider } from "@contexts/cartContext";

export function ProductsLayout(): JSX.Element {
    return (
        <CartProvider>
            <Cart />
            <Outlet />
        </CartProvider>
    );
}
