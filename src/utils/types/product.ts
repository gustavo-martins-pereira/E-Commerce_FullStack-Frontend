/** ISO 8601 date string (e.g. "2025-02-25T17:49:18.891Z") */
type ISODateString = string;

interface Product {
    id: number;
    name: string;
    description: string;
    price: number;
    ownerId: number;
    createdAt: ISODateString;
    updatedAt: ISODateString;

    image: ProductImage;
}

interface ProductImage {
    id: number;
    name: string;
    data: Buffer;
    createdAt: ISODateString;
    updatedAt: ISODateString;
}

export {
    type Product,
    type ProductImage,
}