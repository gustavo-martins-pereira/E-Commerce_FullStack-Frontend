import { useEffect, useState } from "react";

import { getOrdersBySellerId, updateOrderStatusById } from "@api/services/orderService";
import { getUserById, getUserByUsername } from "@api/services/userService";
import { Modal } from "@components/dumbs/Modal/Modal";
import { Button } from "@components/dumbs/Button/Button";
import { Skeleton } from "@components/smart/Skeleton/Skeleton";
import { getUserByLoggedUser } from "@utils/localstorage";
import { getUSFormatFromDate } from "@utils/dateTime";
import { toastPromise } from "@utils/toast";

export function OrdersHistory() {
    // STATES
    const [orders, setOrders] = useState();
    const [clients, setClients] = useState({});
    const [selectedOrder, setSelectedOrder] = useState(null);

    // EFFECTS
    useEffect(() => {
        (async function fetchOrders() {
            const user = await getUserByUsername(getUserByLoggedUser().username);
            const orders = await getOrdersBySellerId(user.id);
            setOrders(orders);

            const clients = {};
            for (const order of orders) {
                const client = await getUserById(order.clientId);
                clients[order.id] = client;
            }

            setClients(clients);
        })();
    }, []);

    // HANDLES
    function handleShowOrderDetails(order) {
        setSelectedOrder(order);
    }

    async function handleStatusChange(orderId, newStatus) {
        await toastPromise(updateOrderStatusById(orderId, newStatus), { success: "Status updated", pending: "Updating" });

        setOrders(prevOrders => prevOrders.map(order => order.id === orderId ? { ...order, status: newStatus } : order));
    };

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
                        {orders ?
                            orders.map(order => <tr key={order.id}>
                                <td className="px-4 py-2">{order.id}</td>
                                <td className="px-4 py-2">{clients[order.id]?.username}</td>
                                <td className="px-4 py-2">{getUSFormatFromDate(new Date(order.createdAt))}</td>
                                <td className="px-4 py-2">${order.total}</td>
                                <th scope="col" className="px-4 py-2">
                                    <select
                                        className="p-2 border"
                                        value={order.status}
                                        onChange={(e) => handleStatusChange(order.id, e.target.value)}
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
                            </tr>)
                            :
                            Array.from({ length: 3 }).map((_, index) => <tr key={index}>
                                <td colSpan="999">
                                    <Skeleton>
                                        <div className="h-20"></div>
                                    </Skeleton>
                                </td>
                            </tr>)
                        }
                    </tbody>
                </table>
            </section>

            {selectedOrder && <Modal
                title="Order Details"
                onClose={() => setSelectedOrder(null)}
            >
                <div className="space-y-4">
                    {selectedOrder.orderItems.map((item, index) => (
                        <div key={index} className="border-b pb-4 mb-4 last:border-none">
                            <h2 className="text-xl font-semibold">
                                {item.product.name}
                            </h2>
                            <p className="text-sm text-gray-600">
                                {item.product.description}
                            </p>
                            <div className="flex flex-col justify-between gap-2 mt-2 md:flex-row">
                                <p><strong>Quantity</strong>: {item.quantity}</p>
                                <p><strong>Price</strong>: ${item.price.toFixed(2)}</p>
                                <p><strong>Subtotal</strong>: ${item.subtotal.toFixed(2)}</p>
                            </div>
                        </div>
                    ))}
                </div>
            </Modal>}
        </main>
    );
}
