import { USER_ROLES } from "./enums/userRoles";

const mainMenu = [
    {
        title: "Home",
        path: "/",
    },
    {
        title: "Shop Now",
        path: "/products",
    },
    {
        title: "Orders",
        path: "/orders",
        visibleTo: [USER_ROLES.USER, USER_ROLES.SELLER],
    },
];

export {
    mainMenu,
};
