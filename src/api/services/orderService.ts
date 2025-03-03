import { api } from "@api/apiClient";
import { withTokenRefresh } from "@api/authHelper";
import { getUserByUsername } from "@api/services/userService";
import { getUserByLoggedUser } from "@utils/localstorage";
import { CartOrderItem, Order, ORDER_STATUS } from "@utils/types/order";

async function createOrder(total: number, orderItems: CartOrderItem[]): Promise<void> {
    return await withTokenRefresh(async () => {
        const loggedUser = getUserByLoggedUser();
        if(!loggedUser) throw new Error("User is not logged in");

        const user = await getUserByUsername(loggedUser.username);

        const accessToken = localStorage.getItem("accessToken");
        await api.post("/orders/", {
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
    });
}

async function getOrderById(orderId: number): Promise<Order> {
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

async function getOrdersByUsername(username: string): Promise<Order[] | undefined> {
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

async function getOrdersByClientId(clientId: number): Promise<Order[] | undefined> {
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

async function getOrdersBySellerId(sellerId: number): Promise<Order[] | undefined> {
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

async function updateOrderStatusById(orderId: number, status: ORDER_STATUS): Promise<void> {
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
