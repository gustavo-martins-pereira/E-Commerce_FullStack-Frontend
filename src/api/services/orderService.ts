import { api } from "@api/apiClient";
import { withTokenRefresh } from "@api/authHelper";
import { getUserByLoggedUser } from "@utils/localstorage";
import { getUserByUsername } from "./userService";

async function createOrder(total: number, orderItems) {
    return await withTokenRefresh(async () => {
        const user = await getUserByUsername(getUserByLoggedUser().username);

        const accessToken = localStorage.getItem("accessToken");
        const response = await api.post("/orders/", {
            clientId: user.id,
            sellerId: orderItems[0].ownerId,
            total,
            status: "PENDING",
            orderItems: orderItems.map(orderItem => {
                return {
                    quantity: orderItem.quantity,
                    price: orderItem.price,
                    subtotal: orderItem.price * orderItem.quantity,
                    productId: orderItem.id,
                };
            }),
        }, {
            headers: {
                Authorization: `Bearer ${accessToken}`,
            },
        });

        return response.data;
    });
}

async function getOrderById(orderId: number) {
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

async function getOrdersByUsername(username: string) {
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

async function getOrdersByClientId(clientId: number) {
    return await withTokenRefresh(async () => {
        const accessToken = localStorage.getItem("accessToken");
        const response = await api.get(`/orders/clients/${clientId}`, {
            headers: {
                Authorization: `Bearer ${accessToken}`,
            },
        });

        return response.data;
    });
}

async function getOrdersBySellerId(sellerId: number) {
    return await withTokenRefresh(async () => {
        const accessToken = localStorage.getItem("accessToken");
        const response = await api.get(`/orders/sellers/${sellerId}`, {
            headers: {
                Authorization: `Bearer ${accessToken}`,
            },
        });

        return response.data;
    });
}

async function updateOrderStatusById(orderId: number, status) {
    return await withTokenRefresh(async () => {
        const accessToken = localStorage.getItem("accessToken");
        await api.patch(`/orders/${orderId}`, { status }, {
            headers: {
                Authorization: `Bearer ${accessToken}`,
            },
        });
    });
}

export {
    createOrder,
    getOrderById,
    getOrdersByUsername,
    getOrdersByClientId,
    getOrdersBySellerId,
    updateOrderStatusById,
};
