import { api } from "@api/apiClient";

import { User, USER_ROLES, UserLogin, UserRefreshToken } from "@utils/types/user";

async function register(username: string, password: string, role: USER_ROLES): Promise<User> {
    try {
        const response = await api.post("/register", {
            "username": username,
            "password": password,
            "role": role,
        });

        return response.data;
    } catch(error) {
        throw error;
    }
}

async function login(username: string, password: string): Promise<UserLogin> {
    try {
        const response = await api.post("/login", {
            "username": username,
            "password": password,
        }, { withCredentials: true });

        return response.data;
    } catch (error) {
        throw error;
    }
}

async function refreshToken(): Promise<UserRefreshToken> {
    try {
        const response = await api.post("/login/refresh", {}, { withCredentials: true });

        return response.data;
    } catch (error) {
        throw error;
    }
}

async function logout(): Promise<void> {
    try {
        await api.post("/users/logout", {}, { withCredentials: true });
    } catch (error) {
        throw error;
    }
}

async function getUserById(id: number): Promise<User> {
    try {
        const response = await api.get(`/users/${id}`);

        return response.data;
    } catch (error) {
        throw error;
    }
}

async function getUserByUsername(username: string): Promise<User> {
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
