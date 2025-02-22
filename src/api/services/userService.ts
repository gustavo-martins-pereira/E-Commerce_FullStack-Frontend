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
        const response = await api.post("/login/refresh", {}, { withCredentials: true });

        return response.data;
    } catch (error) {
        throw error;
    }
}

async function logout() {
    try {
        await api.post("/users/logout", {}, { withCredentials: true });
    } catch (error) {
        throw error;
    }
}

async function getUserById(id) {
    try {
        const response = await api.get(`/users/${id}`);

        return response.data;
    } catch (error) {
        throw error;
    }
}

async function getUserByUsername(username) {
    try {
        const response = await api.get(`/users/usernames/${username}`);

        return response.data;
    } catch (error) {
        throw error;
    }
}

export {
    register,
    login,
    refreshToken,
    logout,
    getUserById,
    getUserByUsername,
};
