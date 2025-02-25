import { USER_ROLES } from "@utils/types/user";

export interface MenuItem {
    title: string;
    path: string;
    visibleTo?: USER_ROLES[];
    styles?: string;
}

const mainMenu: MenuItem[] = [
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
    {
        title: "My Store",
        path: "/dashboard",
        visibleTo: [USER_ROLES.SELLER],
        styles: "px-3 py-1.5 text-link-primary border border-btn-secondary rounded-md transition-colors duration-150 hover:text-sunset-orange",
    }
];

export { mainMenu };
