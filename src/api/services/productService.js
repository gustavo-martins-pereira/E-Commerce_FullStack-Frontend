import { api } from "@api/apiClient";

// TODO: Delete this function after apply the refresh token logic
async function updateProduct(accessToken) {
    try {
        const response = await api.put("/products/1", {
                "name": "Product Edited",
                "description": "Description edited",
                "price": 2,
            },
            {
                headers: {
                    Authorization: `Bearer ${accessToken}`,
                }
            },
        );

        return response;
    } catch (error) {
        throw error;
    }
}

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
    updateProduct,
};
