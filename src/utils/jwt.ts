import { jwtDecode } from "jwt-decode";

interface JwtPayload {
    username: string;
    role: string;
    [key: string]: any;
}

interface UserFromToken {
    username: string;
    role: string;
}

function getUserByToken(token: string): UserFromToken {
    const { username, role } = jwtDecode<JwtPayload>(token);

    return { username, role };
}

export {
    getUserByToken,
    type UserFromToken,
    type JwtPayload
};
