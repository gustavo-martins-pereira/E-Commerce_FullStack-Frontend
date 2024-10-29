import { jwtDecode } from "jwt-decode";

function getUserByToken(token) {
    const { username, role } = jwtDecode(token);

    return {username, role};
}

export {
    getUserByToken,
};
