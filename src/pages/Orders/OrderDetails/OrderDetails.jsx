import { useEffect, useState } from "react";

export function OrderDetails() {
    // STATES
    const [colSpan, setColSpan] = useState(undefined);

    // EFFECTS
    useEffect(() => {
        const mediaQuery = window.matchMedia("(min-width: 768px)");

        mediaQuery.onchange = handleOnChangeWindowSize;

        handleOnChangeWindowSize();
    }, []);

    // HANDLES
    const handleOnChangeWindowSize = () => {
        if (window.innerWidth >= 768) {
            setColSpan(3);
        } else {
            setColSpan(2);
        }
    };

    return (
        <main className="section max-w-[48rem] m-auto">
            <header className="flex flex-col gap-4">
                <h2>Order Details</h2>
                <p>View details of your order.</p>
            </header>

            {/* PRODUCTS PURCHASED */}
            <section className="mt-8">
                <table className="min-w-full border-collapse">
                    <caption className="pb-4 font-semibold text-lg text-left">Order summary</caption>

                    <thead className="border-b border-gray-300">
                        <tr className="bg-gray-100">
                            <th scope="col" className="px-4 py-2 hidden md:table-cell">Product Image</th>
                            <th scope="col" className="px-4 py-2">Product Name</th>
                            <th scope="col" className="px-4 py-2">Quantity</th>
                            <th scope="col" className="px-4 py-2">Price</th>
                        </tr>
                    </thead>

                    <tbody>
                        <tr className="border-b border-gray-300 text-left">
                            <td className="px-4 py-2 hidden md:table-cell">
                                <img src="https://via.placeholder.com/50" alt="Product 1" className="w-16 h-16 object-cover" />
                            </td>
                            <td className="px-4 py-2">Product 1</td>
                            <td className="px-4 py-2">1</td>
                            <td className="px-4 py-2">$50</td>
                        </tr>

                        <tr className="border-b border-gray-300">
                            <td className="px-4 py-2 hidden md:table-cell">
                                <img src="https://via.placeholder.com/50" alt="Product 2" className="w-16 h-16 object-cover" />
                            </td>
                            <td className="px-4 py-2">Product 2</td>
                            <td className="px-4 py-2">2</td>
                            <td className="px-4 py-2">$75</td>
                        </tr>

                        <tr className="border-b border-gray-300">
                            <td className="px-4 py-2 hidden md:table-cell">
                                <img src="https://via.placeholder.com/50" alt="Product 3" className="w-16 h-16 object-cover" />
                            </td>
                            <td className="px-4 py-2">Product 3</td>
                            <td className="px-4 py-2">3</td>
                            <td className="px-4 py-2">$100</td>
                        </tr>
                    </tbody>

                    <tfoot className="font-semibold bg-gray-100">
                        <tr>
                            <th  className="px-4 py-2 text-left" scope="row" colSpan={colSpan}>Total</th>
                            <td className="px-4 py-2 md:col-span-1">$33</td>
                        </tr>
                    </tfoot>
                </table>
            </section>

            {/* MORE INFO */}
            <footer className="mt-8 p-4 bg-gray-50 rounded-md shadow-md">
                <h3 className="font-semibold text-2xl">Order Information</h3>

                <div className="mt-2">
                    <p><span className="font-medium">Order Number:</span> #0944</p>
                    <p><span className="font-medium">Order Date:</span> 05/09/2024 • 18:56</p>
                    <p><span className="font-medium">Order Status:</span> <span className="text-green-600">Paid</span></p>
                </div>
            </footer>
        </main>
    );
}
