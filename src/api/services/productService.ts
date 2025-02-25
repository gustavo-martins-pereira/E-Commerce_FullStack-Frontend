import { getUserByUsername } from "./userService";
import { api } from "@api/apiClient";
import { withTokenRefresh } from "@api/authHelper";
import { getUserByLoggedUser } from "@utils/localstorage";

async function createProduct(name: string, description: string, price: number, image: File) {
    return await withTokenRefresh(async () => {
        const formData = new FormData();
        formData.append("name", name);
        formData.append("description", description);
        formData.append("price", price.toString());
        formData.append("image", image);

        const user = await getUserByUsername(getUserByLoggedUser().username);

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
    } catch (error: any) {
        console.error(error.response.data?.error);
    }
}

async function getProductById(productId: number) {
    try {
        const response = await api.get(`/products/${productId}`);

        return response.data;
    } catch (error: any) {
        console.error(error.response.data?.error);
    }
}

async function getProductsBySellerId(sellerId: number) {
    try {
        const response = await api.get(`/products/seller/${sellerId}`);

        return response.data;
    } catch (error: any) {
        console.error(error.response.data?.error);
    }
}

async function editProductById(productId: number, name: string, description: string, price: number) {
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

async function deleteProductById(productId: number) {
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
