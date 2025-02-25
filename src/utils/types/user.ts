/** ISO 8601 date string (e.g. "2025-02-25T17:49:18.891Z") */
type ISODateString = string;

interface User {
    id: number;
    username: string;
    password: string;
    role: USER_ROLES;
    createdAt: ISODateString;
    updatedAt: ISODateString;
}

enum USER_ROLES {
    SELLER = "SELLER",
    USER = "USER",
};

// User Related Routes
interface UserLogin {
    accessToken: string;
    loginMaxAge: number;
}

interface UserRefreshToken {
    accessToken: string;
}

export {
    type User,
    type UserLogin,
    type UserRefreshToken,
    USER_ROLES,
}