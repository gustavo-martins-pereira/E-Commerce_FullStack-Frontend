import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";

import { Header } from "./components/Header/Header";
import { Footer } from "./components/Footer/Footer";
import { Home } from "./pages/Home/Home";
import { NotFound } from "./pages/NotFound/NotFound";
import { ScrollToTop } from "./components/scripts/ScrollToTop/ScrollToTop";

export function App() {
    return (
        <React.Fragment>
            <BrowserRouter>
                <ScrollToTop />

                <Header />

                <Routes>
                    <Route path="/" element={<Home />} />

                    <Route path="*" element={<NotFound />} />
                </Routes>

                <Footer />
            </BrowserRouter>
        </React.Fragment>
    );
}
