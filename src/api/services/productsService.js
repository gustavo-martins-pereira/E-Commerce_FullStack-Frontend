import { api } from "@api/apiClient";

async function getAllProducts() {
    try {
        const response = await api.get("/products");

        return response.data;
    } catch(error) {
        console.error("Error fetching products: ", error.message);
    }
}

export {
    getAllProducts,
};
