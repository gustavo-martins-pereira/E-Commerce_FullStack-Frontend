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

export {
    register,
};
