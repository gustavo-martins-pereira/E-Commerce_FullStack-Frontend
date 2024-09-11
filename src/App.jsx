import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";

import { Home } from "@pages/Home/Home";
import { Products } from "@pages/Products/Products";
import { AllProducts } from "@pages/Products/AllProducts/AllProducts";
import { ProductDetails } from "@pages/Products/AllProducts/ProductDetails/ProductDetails";
import { Orders } from "@pages/Orders/Orders";
import { OrderDetails } from "@pages/Orders/OrderDetails/OrderDetails";
import { NotFound } from "@pages/NotFound/NotFound";

import { Header } from "@components/smart/Header/Header";
import { Footer } from "@components/smart/Footer/Footer";
import { ScrollToTop } from "@components/scripts/ScrollToTop/ScrollToTop";

export function App() {
    return (
        <React.Fragment>
            <BrowserRouter>
                <ScrollToTop />

                <Header />

                <Routes>
                    <Route path="/" element={<Home />} />
                    <Route path="/products">
                        <Route index element={<Products />} />
                        <Route path="all">
                            <Route index element={<AllProducts />} />
                            <Route path=":productId" element={<ProductDetails />} />
                        </Route>
                    </Route>

                    <Route path="/orders">
                        <Route index element={<Orders />} />
                        <Route path=":id" element={<OrderDetails />} />
                    </Route>

                    <Route path="*" element={<NotFound />} />
                </Routes>

                <Footer />
            </BrowserRouter>
        </React.Fragment>
    );
}
