import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { ToastContainer } from "react-toastify";

import { Home } from "@pages/Home/Home";
import { Products } from "@pages/Products/Products";
import { AllProducts } from "@pages/Products/AllProducts/AllProducts";
import { ProductDetails } from "@pages/Products/AllProducts/ProductDetails/ProductDetails";
import { Orders } from "@pages/Orders/Orders";
import { OrderDetails } from "@pages/Orders/OrderDetails/OrderDetails";
import { RegisterLogin } from "@pages/RegisterLogin/RegisterLogin";
import { Dashboard } from "@pages/Dashboard/Dashboard";
import { ManageProducts } from "@pages/Dashboard/ManageProducts/ManageProducts";
import { CreateProduct } from "@pages/Dashboard/ManageProducts/CreateProduct/CreateProduct";
import { EditProduct } from "@pages/Dashboard/ManageProducts/EditProduct/EditProduct";
import { NotFound } from "@pages/NotFound/NotFound";

import { Header } from "@components/smart/Header/Header";
import { Footer } from "@components/smart/Footer/Footer";
import { Breadcrumb } from "@components/smart/Breadcrumbs/Breadcrumbs";
import { ScrollToTop } from "@components/scripts/ScrollToTop";
import { AuthenticatedUserToHome } from "@components/scripts/AuthenticatedUserToHome";
import { UnauthenticatedRedirect } from "@components/scripts/UnauthenticatedRedirect";
import { UserProvider } from "@contexts/userContext";

export function App() {
    return (
        <React.Fragment>
            <BrowserRouter>
                <UserProvider>
                    <ScrollToTop />

                    <Header />

                    <Breadcrumb />

                    <Routes>
                        <Route path="/" element={<Home />} />

                        <Route path="/products">
                            <Route index element={<Products />} />
                            <Route path="all">
                                <Route index element={<AllProducts />} />
                                <Route path=":productId" element={<ProductDetails />} />
                            </Route>
                        </Route>

                        <Route path="/orders" element={<UnauthenticatedRedirect />}>
                            <Route index element={<Orders />} />
                            <Route path=":orderId" element={<OrderDetails />} />
                        </Route>

                        <Route
                            path="/register-login"
                            element={<AuthenticatedUserToHome>
                                <RegisterLogin />
                            </AuthenticatedUserToHome>}
                        />

                        {/* SELLER ROUTES */}
                        <Route path="/dashboard">
                            <Route index element={<Dashboard />} />

                            <Route path="manage-products">
                                <Route index element={<ManageProducts />} />
                                <Route path="create" element={<CreateProduct />} />
                                <Route path="edit/:productId" element={<EditProduct />} />
                            </Route>
                        </Route>

                        <Route path="*" element={<NotFound />} />
                    </Routes>

                    <Footer />

                    <ToastContainer />
                </UserProvider>
            </BrowserRouter>
        </React.Fragment>
    );
}
