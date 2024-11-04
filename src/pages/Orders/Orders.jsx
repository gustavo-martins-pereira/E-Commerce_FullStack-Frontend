import { useEffect, useState } from "react";

import { getOrdersByUsername } from "@api/services/orderService";
import { OrderCard } from "@components/smart/OrderCard/OrderCard";
import { Button } from "@components/dumbs/custom/Button/Button";

export function Orders() {
    // STATES
    const [ordersData, setOrdersData] = useState([]);
    const [ordersToShow, setOrdersToShow] = useState([]);
    const [isAllOrders, setIsAllOrders] = useState(false);

    // EFFECTS
    useEffect(() => {
        async function fetchOrdersData() {
            const user = JSON.parse(localStorage.getItem("loggedInUser"));

            const orders = await getOrdersByUsername(user.username);
            setOrdersData(orders);
            setOrdersToShow(orders.slice(0, 3));
        };

        fetchOrdersData();
    }, []);

    // HANDLES
    function handleShowAllOrders() {
        setOrdersToShow(ordersData);
        setIsAllOrders(true);
    }

    return (
        <main className="bg-gray-50 min-h-screen p-4 md:p-8">
            <header className="flex flex-col gap-2 text-center mb-8">
                <h2 className="text-2xl font-bold text-gray-800">Your Order History</h2>
                <p className="text-gray-500">View and track your past orders.</p>
            </header>

            {/* ORDERS */}
            <section className="max-w-xl m-auto flex flex-col gap-6">
                {ordersToShow.map(order => {
                    return <OrderCard
                        key={order.id}
                        date={order.createdAt}
                        total={order.total}
                        status={order.status}
                        orderId={order.id}
                        itemsCount={order.orderItems.length}
                        orderItems={order.orderItems}
                    />
                })}

                {ordersData.length > 3 && !isAllOrders && <Button className="btn-primary" onClick={handleShowAllOrders}>
                    View All
                </Button>}
            </section>
        </main>
    );
}
