import { OrderCard } from "@components/smart/OrderCard/OrderCard";
import { Button } from "@components/dumbs/custom/Button/Button";

export function Orders() {
    const orders = [
        {
            "id": 1,
            "total": 1508.26,
            "status": "SHIPPED",
            "clientId": 26,
            "sellerId": 9,
            "createdAt": "2024-10-02T17:46:34.701Z",
            "updatedAt": "2024-10-02T17:46:34.701Z",
            "orderItems": [
                {
                    "quantity": 2,
                    "price": 44.72,
                    "subtotal": 89.44,
                    "orderId": 1,
                    "productId": 20,
                    "createdAt": "2024-10-02T17:46:34.753Z",
                    "updatedAt": "2024-10-02T17:46:34.753Z"
                },
                {
                    "quantity": 3,
                    "price": 426.96,
                    "subtotal": 1280.88,
                    "orderId": 1,
                    "productId": 31,
                    "createdAt": "2024-10-02T17:46:34.753Z",
                    "updatedAt": "2024-10-02T17:46:34.753Z"
                },
                {
                    "quantity": 1,
                    "price": 137.94,
                    "subtotal": 137.94,
                    "orderId": 1,
                    "productId": 50,
                    "createdAt": "2024-10-02T17:46:34.753Z",
                    "updatedAt": "2024-10-02T17:46:34.753Z"
                }
            ]
        },
        {
            "id": 9,
            "total": 2291.42,
            "status": "DELIVERED",
            "clientId": 26,
            "sellerId": 24,
            "createdAt": "2024-10-02T17:46:34.701Z",
            "updatedAt": "2024-10-02T17:46:34.701Z",
            "orderItems": [
                {
                    "quantity": 2,
                    "price": 371.26,
                    "subtotal": 742.52,
                    "orderId": 9,
                    "productId": 55,
                    "createdAt": "2024-10-02T17:46:34.753Z",
                    "updatedAt": "2024-10-02T17:46:34.753Z"
                },
                {
                    "quantity": 2,
                    "price": 488.82,
                    "subtotal": 977.64,
                    "orderId": 9,
                    "productId": 59,
                    "createdAt": "2024-10-02T17:46:34.753Z",
                    "updatedAt": "2024-10-02T17:46:34.753Z"
                },
                {
                    "quantity": 3,
                    "price": 18.28,
                    "subtotal": 54.84,
                    "orderId": 9,
                    "productId": 61,
                    "createdAt": "2024-10-02T17:46:34.753Z",
                    "updatedAt": "2024-10-02T17:46:34.753Z"
                },
                {
                    "quantity": 3,
                    "price": 172.14,
                    "subtotal": 516.42,
                    "orderId": 9,
                    "productId": 70,
                    "createdAt": "2024-10-02T17:46:34.753Z",
                    "updatedAt": "2024-10-02T17:46:34.753Z"
                }
            ]
        },
        {
            "id": 24,
            "total": 299.07,
            "status": "PENDING",
            "clientId": 26,
            "sellerId": 1,
            "createdAt": "2024-10-02T17:46:34.701Z",
            "updatedAt": "2024-10-02T17:46:34.701Z",
            "orderItems": [
                {
                    "quantity": 3,
                    "price": 99.69,
                    "subtotal": 299.07,
                    "orderId": 24,
                    "productId": 4,
                    "createdAt": "2024-10-02T17:46:34.753Z",
                    "updatedAt": "2024-10-02T17:46:34.753Z"
                }
            ]
        }
    ];

    return (
        <main className="bg-gray-50 min-h-screen p-4 md:p-8">
            <header className="flex flex-col gap-2 text-center mb-8">
                <h2 className="text-2xl font-bold text-gray-800">Your Order History</h2>
                <p className="text-gray-500">View and track your past orders.</p>
            </header>

            {/* ORDERS */}
            <section className="max-w-xl m-auto flex flex-col gap-6">
                {orders.map((order, index) => {
                    return <OrderCard
                        key={index}
                        date={order.createdAt}
                        total={order.total}
                        status={order.status}
                        orderId={order.id}
                        itemsCount={order.orderItems.length}
                        orderItems={order.orderItems}
                    />
                })}

                <Button className="btn-primary">
                    View All
                </Button>
            </section>
        </main>
    );
}
