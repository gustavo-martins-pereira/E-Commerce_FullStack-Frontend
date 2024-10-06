import { api } from "@api/apiClient";

async function getAllProducts() {
    try {
        const response = await api.get("/products");

        return response.data;
    } catch(error) {
        console.error("Error fetching products: ", error.message);
    }
}

async function getProductById(productId) {
    try {
        const response = await api.get(`/products/${productId}`);

        return response.data;
    } catch(error) {
        console.error("Error fetching product by ID: ", error.message);
    }
}

export {
    getAllProducts,
    getProductById,
};
