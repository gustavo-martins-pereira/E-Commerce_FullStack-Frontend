import { getUserByUsername } from "@api/services/userService";
import { api } from "@api/apiClient";
import { withTokenRefresh } from "@api/authHelper";
import { getUserByLoggedUser } from "@utils/localstorage";
import { Product } from "@utils/types/product";

async function createProduct(name: string, description: string, price: number, image: File): Promise<void> {
    return await withTokenRefresh(async () => {
        const formData = new FormData();
        formData.append("name", name);
        formData.append("description", description);
        formData.append("price", price.toString());
        formData.append("image", image);

        const loggedUser = getUserByLoggedUser();
        if(!loggedUser) throw new Error("User is not logged in");

        const user = await getUserByUsername(loggedUser.username);

        formData.append("ownerId", user.id.toString());

        const accessToken = localStorage.getItem("accessToken");
        await api.post("/products", formData, {
            headers: {
                "Authorization": `Bearer ${accessToken}`,
                "Content-Type": "multipart/form-data",
            },
        });
    });
}

async function getAllProducts(): Promise<Product[] | undefined> {
    try {
        const response = await api.get("/products");

        return response.data;
    } catch (error) {
        throw error;
    }
}

async function getProductById(productId: number): Promise<Product | undefined> {
    try {
        const response = await api.get(`/products/${productId}`);

        return response.data;
    } catch (error) {
        throw error;
    }
}

async function getProductsBySellerId(sellerId: number): Promise<Product[] | undefined> {
    try {
        const response = await api.get(`/products/seller/${sellerId}`);

        return response.data;
    } catch (error) {
        throw error;
    }
}

async function editProductById(productId: number, name: string, description: string, price: number): Promise<void> {
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

async function deleteProductById(productId: number): Promise<void> {
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
