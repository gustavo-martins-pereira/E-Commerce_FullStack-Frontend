import { Product } from "@utils/types/product";

/** ISO 8601 date string (e.g. "2025-02-25T17:49:18.891Z") */
type ISODateString = string;

interface Order {
    id: number;
    total: number;
    status: ORDER_STATUS;
    clientId: number;
    sellerId: number;
    createdAt: ISODateString;
    updatedAt: ISODateString;

    orderItems: OrderItem[];
}

interface OrderItem {
    quantity: number;
    price: number;
    subtotal: number;
    orderId: number;
    createdAt: ISODateString;
    updatedAt: ISODateString;

    product: Product;
}

// TODO: Verify if is necessary all this properties
interface CartOrderItem {
    id: number;
    name: string;
    description: string;
    price: number;
    quantity: number;
    ownerId: number;
    imageName: string;
    imageUrl: string;
    createdAt: ISODateString;
    updatedAt: ISODateString;
}

enum ORDER_STATUS {
    PENDING = "PENDING",
    SHIPPED = "SHIPPED",
    DELIVERED = "DELIVERED"
}

export {
    type Order,
    type OrderItem,
    type CartOrderItem,
    ORDER_STATUS,
}