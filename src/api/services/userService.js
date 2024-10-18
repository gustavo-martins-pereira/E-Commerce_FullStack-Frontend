import { api } from "@api/apiClient";

async function register(username, password, role) {
    try {
        const response = await api.post("/register", {
            "username": username,
            "password": password,
            "role": role,
        });

        return response;
    } catch(error) {
        throw error;
    }
}

async function login(username, password) {
    try {
        const response = await api.post("/login", {
            "username": username,
            "password": password,
        }, {
            withCredentials: true,
        });

        return response;
    } catch (error) {
        throw error;
    }
}

async function refreshToken() {
    try {
        const response = await api.post("/login/refresh", {}, { withCredentials: true });
        
        return response;
    } catch (error) {
        throw error;
    }
}

export {
    register,
    login,
    refreshToken,
};
