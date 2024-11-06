import { api } from "@api/apiClient";
import { withTokenRefresh } from "@api/authHelper";

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

async function getProductsBySellerId(sellerId) {
    try {
        const response = await api.get(`/products/seller/${sellerId}`);

        return response.data;
    } catch (error) {
        console.error(error.response.data?.error);
    }
}

async function deleteProductById(productId) {
    return await withTokenRefresh(async () => {
        const accessToken = localStorage.getItem("accessToken");
        await api.delete(`/products/${productId}`, {
            headers: {
                Authorization: `Bearer ${accessToken}`,
            },
        });
    });
}

export {
    getAllProducts,
    getProductById,
    getProductsBySellerId,
    deleteProductById,
};
