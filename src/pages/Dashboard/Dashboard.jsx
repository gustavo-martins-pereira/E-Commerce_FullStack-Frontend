import { Link } from "react-router-dom";
import { FaBox, FaHistory } from "react-icons/fa";

export function Dashboard() {
    return (
        <main>
            <header className="section flex flex-col gap-8 text-center">
                <h2 className="text-4xl">Welcome to your Shop</h2>
                <p>Manage your products and stay updated with our seller's account.</p>
            </header>

            {/* DASHBOARD FEATURES */}
            <section className="section flex flex-col gap-16">
                <h2 className="text-center">Dashboard Features</h2>

                <section className="max-w-[80%] flex flex-col gap-8 m-auto md:grid md:grid-cols-2">
                    <Link to="/dashboard/manage-products">
                        <article className="flex flex-col items-center gap-4 border-2 border-primary rounded p-4 text-center transition-transform hover:scale-110">
                            <FaBox size={50} className="icon-primary" />
                            <h3>Manage Existing Products</h3>
                            <p className="mt-auto">The seller can easily create new products and add them to their inventory.</p>
                        </article>
                    </Link>

                    <article className="flex flex-col items-center gap-4 border-2 border-primary rounded p-4 text-center">
                        <FaHistory size={50} className="icon-primary" />
                        <h3>View Orders History</h3>
                        <p className="mt-auto">Sellers can conveniently track and manage their order history.</p>
                    </article>
                </section>
            </section>
        </main>
    );
}
