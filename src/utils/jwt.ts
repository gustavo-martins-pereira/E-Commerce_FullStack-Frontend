import { getUserByUsername } from "@api/services/userService";
import { jwtDecode } from "jwt-decode";
import { User } from "./types/user";

interface JwtPayload {
    username: string;
    role: string;
    [key: string]: any;
}

function getUserByToken(token: string): Promise<User> {
    const { username } = jwtDecode<JwtPayload>(token);

    return getUserByUsername(username);
}

export {
    getUserByToken,
    type JwtPayload
};
