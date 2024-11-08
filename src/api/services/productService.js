import { api } from "@api/apiClient";
import { withTokenRefresh } from "@api/authHelper";
import { getUserByUsername } from "./userService";

async function createProduct(name, description, price, image) {
    return await withTokenRefresh(async () => {
        const formData = new FormData();
        formData.append("name", name);
        formData.append("description", description);
        formData.append("price", price);
        formData.append("image", image);

        const username = JSON.parse(localStorage.getItem("loggedInUser")).username;
        const user = await getUserByUsername(username);

        formData.append("ownerId", user.id);

        const accessToken = localStorage.getItem("accessToken");
        await api.post("/products", formData, {
            headers: {
                "Authorization": `Bearer ${accessToken}`,
                "Content-Type": "multipart/form-data",
            },
        });
    });
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

async function getProductsBySellerId(sellerId) {
    try {
        const response = await api.get(`/products/seller/${sellerId}`);

        return response.data;
    } catch (error) {
        console.error(error.response.data?.error);
    }
}

async function editProductById(productId, name, description, price) {
    return await withTokenRefresh(async () => {
        const accessToken = localStorage.getItem("accessToken");
        await api.put(`/products/${productId}`, {
            name,
            description,
            price,
        }, {
            headers: {
                "Authorization": `Bearer ${accessToken}`,
            },
        });
    });
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
    createProduct,
    getAllProducts,
    getProductById,
    getProductsBySellerId,
    editProductById,
    deleteProductById,
};
