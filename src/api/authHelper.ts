import { refreshToken } from "@api/services/userService";

async function withTokenRefresh(requestFunc) {
    try {
        return await requestFunc();
    } catch (error) {
        if (error.response?.data?.error === "Token expired") {
            const { accessToken } = await refreshToken();
            localStorage.setItem("accessToken", accessToken);

            return await requestFunc();
        }

        throw error;
    }
}

export { withTokenRefresh };
