import axios from "axios";

const api = axios.create({
    baseURL: "https://e-commerce-fullstack-backend.onrender.com",
});

export { api };
