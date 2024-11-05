import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

import { getProductById } from "@api/services/productService";
import { getUSFormatFromDate } from "@utils/dateTime";

export function OrderCard({ date, total, status, orderId, itemsCount, orderItems }) {
    const PRODUCTS_TO_SHOW = 3;

    const statusStyles = {
        PENDING: "bg-order-card-pending-badge text-order-card-pending-badge",
        SHIPPED: "bg-order-card-shipped-badge text-order-card-shipped-badge",
        DELIVERED: "bg-order-card-delivered-badge text-order-card-delivered-badge"
    };

    // STATES
    const [productsNames, setProductsNames] = useState({});

    // EFFECTS
    useEffect(() => {
        (async function getProductsNames() {
            const names = {};
            await Promise.all(orderItems.map(async orderItem => {
                const product = await getProductById(orderItem.productId);
                names[orderItem.productId] = product.name;
            }));

            setProductsNames(names);
        }());
    }, []);

    return (
        <Link to={`/orders/${orderId}`} className="block">
            <article className="border rounded-lg p-4 shadow-sm transition-transform transform hover:scale-105 md:p-6 lg:p-8">
                {/* MOBILE VIEW */}
                {/* ORDER INFO */}
                <header className="flex flex-col gap-4">
                    <div className="flex items-center justify-between text-sm">
                        <div className="flex flex-col md:flex-row md:gap-4">
                            <span className="font-semibold">#{orderId}</span>
                            <p className="text-sm">{getUSFormatFromDate(new Date(date))}</p>
                        </div>

                        <span className={`rounded-full px-3 py-1 text-sm font-semibold ${statusStyles[status]}`}>
                            {status.charAt(0) + status.slice(1).toLowerCase()}
                        </span>
                    </div>
                    <p className="text-2xl font-bold">${Number(total).toFixed(2)}</p>
                </header>

                {/* TABLET/DESKTOP VIEW */}
                {/* PRODUCT ITEMS */}
                <section className="hidden md:flex md:flex-row md:justify-between md:mt-4">
                    <p className="text-sm">Items: <span className="font-semibold">{itemsCount}</span></p>

                    <section>
                        {orderItems.slice(0, PRODUCTS_TO_SHOW).map(orderItem => <article key={orderItem.productId} className="flex justify-between items-baseline gap-4">
                            <p className="text-xs opacity-75">x{orderItem.quantity}</p>
                            <h3 className="text-xl font-semibold">{productsNames[orderItem.productId]}</h3>
                        </article>)}
                        {orderItems.length > PRODUCTS_TO_SHOW && <p className="mt-2 text-end text-sm opacity-50">+{orderItems.length - PRODUCTS_TO_SHOW} more items</p>}
                    </section>
                </section>
            </article>
        </Link>
    );
}
