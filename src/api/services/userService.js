import { api } from "@api/apiClient";

async function register(username, password, role) {
    try {
        return await api.post("/register", {
            "username": username,
            "password": password,
            "role": role,
        });
    } catch(error) {
        throw error;
    }
}

async function login(username, password) {
    try {
        return await api.post("/login", {
            "username": username,
            "password": password,
        }, { withCredentials: true });
    } catch (error) {
        throw error;
    }
}

async function refreshToken() {
    try {
        return await api.post("/login/refresh", {}, { withCredentials: true });
    } catch (error) {
        throw error;
    }
}

export {
    register,
    login,
    refreshToken,
};
