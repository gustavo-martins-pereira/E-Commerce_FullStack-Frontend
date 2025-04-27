/** ISO 8601 date string (e.g. "2025-02-25T17:49:18.891Z") */
type ISODateString = string;

interface Product {
    id: number;
    name: string;
    description: string;
    price: number;
    ownerId: number;
    imageName: string;
    imageUrl: string;
    createdAt: ISODateString;
    updatedAt: ISODateString;
}

export {
    type Product,
}