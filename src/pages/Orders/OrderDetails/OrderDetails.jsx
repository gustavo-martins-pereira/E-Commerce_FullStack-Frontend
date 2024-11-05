import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

import { getOrderById } from "@api/services/orderService";
import { getUSFormatFromDate } from "@utils/dateTime";
import { bufferArrayToImageURL } from "@utils/bufferArrayToImageURL";

export function OrderDetails() {
    const statusStyles = {
        PENDING: "text-order-card-pending-badge",
        SHIPPED: "text-order-card-shipped-badge",
        DELIVERED: "text-order-card-delivered-badge"
    };

    const { orderId } = useParams();

    // STATES
    const [colSpan, setColSpan] = useState(undefined);
    const [order, setOrder] = useState({});

    // EFFECTS
    useEffect(() => {
        (async function fetchProductById() {
            const order = await getOrderById(orderId);

            setOrder(order);
        }());

        const mediaQuery = window.matchMedia("(min-width: 768px)");

        mediaQuery.onchange = handleOnChangeWindowSize;

        handleOnChangeWindowSize();
    }, []);

    // HANDLES
    const handleOnChangeWindowSize = () => {
        // TODO: Existing a way to change this behavior?
        if (window.innerWidth >= 768) {
            setColSpan(4);
        } else {
            setColSpan(3);
        }
    };

    return (
        <main className="section max-w-[60rem] m-auto">
            <header className="flex flex-col gap-4">
                <h2>Order Details</h2>
                <p>View details of your order.</p>
            </header>

            {/* PRODUCTS PURCHASED */}
            <section className="mt-8">
                <table className="w-full border-collapse">
                    <caption className="pb-4 font-semibold text-lg text-left">Order summary</caption>

                    <thead className="border-b border-gray-300">
                        <tr className="bg-order-details-table-header text-white text-left">
                            <th scope="col" className="px-4 py-2 hidden md:table-cell">Product Image</th>
                            <th scope="col" className="px-4 py-2">Product Name</th>
                            <th scope="col" className="px-4 py-2">Product Price</th>
                            <th scope="col" className="px-4 py-2">Quantity</th>
                            <th scope="col" className="px-4 py-2">Sub-total</th>
                        </tr>
                    </thead>

                    <tbody>
                        {order.orderItems?.map(orderItem => {
                            return <tr className="odd:bg-order-details-table-odd-line even:bg-order-details-table-even-line border-b border-gray-300" key={orderItem.product.id}>
                                <td className="px-4 py-2 hidden md:table-cell">
                                    <img src={bufferArrayToImageURL(orderItem.product.image.data)} alt="Product 1" className="w-16 h-16 object-cover" />
                                </td>
                                <td className="px-4 py-2">{orderItem.product.name}</td>
                                <td className="px-4 py-2">${orderItem.product.price}</td>
                                <td className="px-4 py-2">{orderItem.quantity}</td>
                                <td className="px-4 py-2">${(orderItem.quantity * orderItem.product.price).toFixed(2)}</td>
                            </tr>
                        })}
                    </tbody>

                    <tfoot className="bg-order-details-table-footer text-white font-semibold">
                        <tr>
                            <th className="px-4 py-2 text-left" scope="row" colSpan={colSpan}>Total</th>
                            <td className="px-4 py-2 md:col-span-1">${order.total}</td>
                        </tr>
                    </tfoot>
                </table>
            </section>

            {/* MORE INFO */}
            <footer className="mt-8 p-4 bg-gray-50 rounded-md shadow-lg">
                <h3 className="font-semibold text-2xl">Order Information</h3>

                <div className="mt-2">
                    <p><span className="font-medium">Order Number: </span>#{order.id}</p>
                    <p><span className="font-medium">Order Date: </span>{getUSFormatFromDate(new Date(order.createdAt))}</p>
                    <p><span className="font-medium">Order Status: </span><span className={statusStyles[order.status]}>{order.status}</span></p>
                </div>
            </footer>
        </main>
    );
}
