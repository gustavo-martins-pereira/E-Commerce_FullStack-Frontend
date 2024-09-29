import { OrderCard } from "@components/smart/OrderCard/OrderCard";
import { Button } from "@components/dumbs/custom/Button/Button";

export function Orders() {
    return (
        <main>
            <section className="section">
                <header className="flex flex-col gap-4 text-center">
                    <h2>Your Order History</h2>
                    <p>View and track your past orders.</p>
                </header>

                {/* ORDERS */}
                <section className="flex flex-col gap-4 mt-8 md:grid md:grid-cols-2 xl:grid-cols-3">
                    {Array.from({ length: 10 }).map((_, index) => {
                        return <OrderCard
                            key={index}
                            date="January 15, 2022 21:34"
                            total="150.00"
                            status="PAID"
                        />
                    })}

                    <Button className="btn-primary mt-8 md:col-span-2 md:w-1/2 md:m-auto xl:col-span-3">View All</Button>
                </section>
            </section>
        </main>
    );
}
