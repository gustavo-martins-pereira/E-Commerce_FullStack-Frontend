import { useEffect, useState } from "react";

import { getUserByUsername } from "@api/services/userService";
import { getOrdersByClientId } from "@api/services/orderService";
import { Button } from "@components/dumbs/Button/Button";
import { OrderCard } from "@components/smart/OrderCard/OrderCard";
import { Skeleton } from "@components/dumbs/Skeleton/Skeleton";
import { getUserByLoggedUser } from "@utils/localstorage";
import { Order } from "@utils/types/order";

export function Orders() {
    const INITIAL_ORDERS_TO_SHOW = 3;

    // STATES
    const [ordersData, setOrdersData] = useState<Order[] | null>(null);
    const [ordersToShow, setOrdersToShow] = useState<Order[]>([]);
    const [isAllOrders, setIsAllOrders] = useState<boolean>(false);

    // EFFECTS
    useEffect(() => {
        (async function fetchOrdersData(): Promise<void> {
            const loggedUser = getUserByLoggedUser();
            if (!loggedUser) return;

            const user = await getUserByUsername(loggedUser.username);
            const orders = await getOrdersByClientId(user.id);

            // Sort orders by date in descending order (newest first)
            const sortedOrders = orders?.sort((a, b) => 
                new Date(b.createdAt).getTime() - new Date(a.createdAt).getTime()
            ) ?? null;

            setOrdersData(sortedOrders);
            if(sortedOrders) {
                setOrdersToShow(sortedOrders.slice(0, INITIAL_ORDERS_TO_SHOW));
            }
        })();
    }, []);

    // HANDLES
    function handleShowAllOrders(): void {
        if (!ordersData) return;
        
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
                {ordersData ?
                    ordersData.length > 0 ?
                        ordersToShow.map((order: Order) => (
                            <OrderCard
                                key={order.id}
                                orderId={order.id}
                                date={order.createdAt}
                                total={order.total}
                                status={order.status}
                                itemsCount={order.orderItems.length}
                                orderItems={order.orderItems}
                            />
                        ))
                        :
                        <h4 className="mt-12 text-center">No Orders to show</h4>
                    :
                    <Skeleton className="flex flex-col gap-2">
                        {Array.from({ length: INITIAL_ORDERS_TO_SHOW }).map((_, index) => (
                            <div className="h-40" key={index} />
                        ))}
                    </Skeleton>
                }

                {(ordersData?.length ?? 0) > INITIAL_ORDERS_TO_SHOW && !isAllOrders && (
                    <Button 
                        className="btn-primary" 
                        onClick={handleShowAllOrders}
                    >
                        View All
                    </Button>
                )}
            </section>
        </main>
    );
}
