import { api } from "@api/apiClient";
import { getUserByUsername, refreshToken } from "./userService";

async function getOrdersByUsername(username) {
    try {
        const user = await getUserByUsername(username);

        const accessToken = localStorage.getItem("accessToken");
        const response = await api.get(`/orders/${user.id}`, {
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

        console.error(error);
    }
}

export {
    getOrdersByUsername,
};
