import { api } from "@api/apiClient";

async function getAllProducts() {
    try {
        const response = await api.get("/products");

        return response.data;
    } catch (error) {
        console.error(error.response.data?.error);
    }
}

async function getProductById(productId) {
    try {
        const response = await api.get(`/products/${productId}`);

        return response.data;
    } catch (error) {
        console.error(error.response.data?.error);
    }
}

export {
    getAllProducts,
    getProductById,
};
