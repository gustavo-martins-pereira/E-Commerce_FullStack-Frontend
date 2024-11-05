import { api } from "@api/apiClient";
import { withTokenRefresh } from "@api/authHelper";
import { getUserByUsername } from "./userService";

async function getOrderById(orderId) {
    return await withTokenRefresh(async () => {
        const accessToken = localStorage.getItem("accessToken");
        const response = await api.get(`/orders/${orderId}`, {
            headers: {
                Authorization: `Bearer ${accessToken}`,
            },
        });

        return response.data;
    });
}

async function getOrdersByUsername(username) {
    return await withTokenRefresh(async () => {
        const user = await getUserByUsername(username);

        const accessToken = localStorage.getItem("accessToken");
        const response = await api.get(`/orders/users/${user.id}`, {
            headers: {
                Authorization: `Bearer ${accessToken}`,
            },
        });
        return response.data;
    });
}

export {
    getOrderById,
    getOrdersByUsername,
};
