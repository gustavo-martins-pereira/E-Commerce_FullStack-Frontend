import { api } from "@api/apiClient";
import { getUserByUsername, refreshToken } from "./userService";

async function getOrderById(orderId) {
    try {
        const accessToken = localStorage.getItem("accessToken");
        const response = await api.get(`/orders/${orderId}`, {
            headers: {
                Authorization: `Bearer ${accessToken}`,
            },
        });

        return response.data;
    } catch (error) {
        if(error.response.data?.error == "Token expired") {
            const { accessToken } = await refreshToken();
            localStorage.setItem("accessToken", accessToken);

            return await getOrderById(orderId);
        }

        console.error(error.response.data?.error);
    }
}

async function getOrdersByUsername(username) {
    try {
        const user = await getUserByUsername(username);

        const accessToken = localStorage.getItem("accessToken");
        const response = await api.get(`/orders/users/${user.id}`, {
            headers: {
                Authorization: `Bearer ${accessToken}`,
            },
        });

        return response.data;
    } catch (error) {
        if(error.response.data?.error == "Token expired") {
            const { accessToken } = await refreshToken();
            localStorage.setItem("accessToken", accessToken);

            return await getOrdersByUsername(username);
        }

        console.error(error.response.data?.error);
    }
}

export {
    getOrderById,
    getOrdersByUsername,
};
