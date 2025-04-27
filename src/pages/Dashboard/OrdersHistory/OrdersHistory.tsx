import { useEffect, useState, ChangeEvent } from "react";

import { getOrdersBySellerId, updateOrderStatusById } from "@api/services/orderService";
import { getUserById, getUserByUsername } from "@api/services/userService";
import { Button } from "@components/dumbs/Button/Button";
import { Modal } from "@components/smart/Modal/Modal";
import { Skeleton } from "@components/dumbs/Skeleton/Skeleton";
import { getUserByLoggedUser } from "@utils/localstorage";
import { getUSFormatFromDate } from "@utils/dateTime";
import { toastPromise } from "@utils/toast";
import { Order } from "@utils/types/order";

interface Client {
    id: number;
    username: string;
}

interface ClientsMap {
    [key: number]: Client;
}

export function OrdersHistory() {
    // STATES
    const [orders, setOrders] = useState<Order[] | null>(null);
    const [clients, setClients] = useState<ClientsMap>({});
    const [selectedOrder, setSelectedOrder] = useState<Order | null>(null);

    // EFFECTS
    useEffect(() => {
        (async function fetchOrders() {
            const user = await getUserByUsername(getUserByLoggedUser()?.username || "");
            const fetchedOrders = await getOrdersBySellerId(user.id);
            setOrders(fetchedOrders);

            if (fetchedOrders) {
                const fetchedClients: ClientsMap = {};
                for (const order of fetchedOrders) {
                    const client = await getUserById(order.clientId);
                    fetchedClients[order.id] = client;
                }

                setClients(fetchedClients);
            }
        })();
    }, []);

    // HANDLES
    function handleShowOrderDetails(order: Order): void {
        setSelectedOrder(order);
    }

    async function handleStatusChange(orderId: number, newStatus: Order['status']): Promise<void> {
        await toastPromise(
            updateOrderStatusById(orderId, newStatus),
            { success: "Status updated", pending: "Updating" }
        );

        setOrders(prevOrders =>
            prevOrders?.map(order =>
                order.id === orderId
                    ? { ...order, status: newStatus }
                    : order
            ) || null
        );
    }

    return (
        <main>
            <section className="section overflow-auto">
                <table className="w-full rounded text-center" cellSpacing="0">
                    <caption className="pb-4 font-semibold text-lg text-left">Client Orders</caption>

                    <thead className="border-b border-gray-300">
                        <tr className="bg-order-details-table-header text-white">
                            <th scope="col" className="px-4 py-2">ID</th>
                            <th scope="col" className="px-4 py-2">Client Name</th>
                            <th scope="col" className="px-4 py-2">Date</th>
                            <th scope="col" className="px-4 py-2">Total</th>
                            <th scope="col" className="px-4 py-2">Status</th>
                            <th scope="col" className="px-4 py-2">Actions</th>
                        </tr>
                    </thead>

                    <tbody>
                        {orders === null
                            ? Array.from({ length: 3 }).map((_, index) => (
                                <tr key={index}>
                                    <td colSpan={999}>
                                        <Skeleton>
                                            <div className="h-20"></div>
                                        </Skeleton>
                                    </td>
                                </tr>
                            ))
                            : orders.length > 0
                                ? orders.map(order => (
                                    // TODO: Add a line between each order
                                    <tr className="border-x odd:bg-order-details-table-odd-line even:bg-order-details-table-even-line last:border-b" key={order.id}>
                                        <td className="px-4 py-2">{order.id}</td>
                                        <td className="px-4 py-2">{clients[order.id]?.username}</td>
                                        <td className="px-4 py-2">
                                            {getUSFormatFromDate(new Date(order.createdAt))}
                                        </td>
                                        <td className="px-4 py-2">${order.total}</td>
                                        <th scope="col" className="px-4 py-2">
                                            <select
                                                className="p-2 border"
                                                value={order.status}
                                                onChange={(e: ChangeEvent<HTMLSelectElement>) =>
                                                    handleStatusChange(order.id, e.target.value as Order['status'])
                                                }
                                            >
                                                <option value="PENDING">PENDING</option>
                                                <option value="SHIPPED">SHIPPED</option>
                                                <option value="DELIVERED">DELIVERED</option>
                                            </select>
                                        </th>
                                        <td className="px-4 py-2">
                                            <Button
                                                className="btn-primary rounded p-1 text-sm"
                                                onClick={() => handleShowOrderDetails(order)}
                                            >
                                                Show Details
                                            </Button>
                                        </td>
                                    </tr>
                                ))
                                : (
                                    <tr>
                                        <td colSpan={6} className="text-center p-4 text-gray-500">
                                            No orders yet
                                        </td>
                                    </tr>
                                )
                        }
                    </tbody>
                </table>
            </section>

            {selectedOrder && <Modal
                title="Order Details"
                onClose={() => setSelectedOrder(null)}
            >
                <div className="space-y-4">
                    {selectedOrder.orderItems.map((product, index) => (
                        <div key={index} className="border-b pb-4 mb-4 last:border-none">
                            <h2 className="text-xl font-semibold">
                                {product.product.name}
                            </h2>
                            <p className="text-sm text-gray-600">
                                {product.product.description}
                            </p>
                            <div className="flex flex-col justify-between gap-2 mt-2 md:flex-row">
                                <p><strong>Quantity</strong>: {product.quantity}</p>
                                <p><strong>Price</strong>: ${product.price.toFixed(2)}</p>
                                <p><strong>Subtotal</strong>: ${product.subtotal.toFixed(2)}</p>
                            </div>
                        </div>
                    ))}
                </div>
            </Modal>}
        </main>
    );
}
