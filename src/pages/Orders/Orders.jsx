import { useEffect, useState } from "react";

import { getUserByUsername } from "@api/services/userService";
import { getOrdersByClientId } from "@api/services/orderService";
import { OrderCard } from "@components/smart/OrderCard/OrderCard";
import { Button } from "@components/dumbs/Button/Button";
import { getUserByLoggedUser } from "@utils/localstorage";

export function Orders() {
    // STATES
    const [ordersData, setOrdersData] = useState([]);
    const [ordersToShow, setOrdersToShow] = useState([]);
    const [isAllOrders, setIsAllOrders] = useState(false);

    // EFFECTS
    useEffect(() => {
        (async function fetchOrdersData() {
            const user = await getUserByUsername(getUserByLoggedUser().username);
            const orders = await getOrdersByClientId(user.id);

            setOrdersData(orders);
            setOrdersToShow(orders.slice(0, 3));
        })();
    }, []);

    // HANDLES
    function handleShowAllOrders() {
        setOrdersToShow(ordersData);
        setIsAllOrders(true);
    }

    return (
        <main className="min-h-screen p-4 md:p-8">
            <header className="flex flex-col gap-2 text-center mb-8">
                <h2 className="text-2xl font-bold text-gray-800">Your Order History</h2>
                <p className="text-gray-500">View and track your past orders.</p>
            </header>

            {/* ORDERS */}
            <section className="max-w-xl m-auto flex flex-col gap-6">
                {ordersToShow.map(order => {
                    return <OrderCard
                        key={order.id}
                        orderId={order.id}
                        date={order.createdAt}
                        total={order.total}
                        status={order.status}
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
