import React from "react";
import ReactDOM from "react-dom/client";

import "swiper/swiper-bundle.css";
import "react-toastify/dist/ReactToastify.css";

import "./index.css";

import { App } from "./App.tsx";

ReactDOM.createRoot(document.getElementById("root")!).render(
    <React.StrictMode>
        <App />
    </React.StrictMode>
);
