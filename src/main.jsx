import React from "react";
import ReactDOM from "react-dom/client";

import "swiper/css";
import "swiper/css/effect-flip";
import "swiper/css/pagination";
import "swiper/css/navigation";
import "react-toastify/dist/ReactToastify.css";

import "./index.css";

import { App } from "./App.jsx";

ReactDOM.createRoot(document.getElementById("root")).render(
    <React.StrictMode>
        <App />
    </React.StrictMode>
);
