import IllustrationPlaceholder from "@assets/images/illustration-placeholder.svg";

export function SellerDashboard() {
    return (
        <main>
            <header className="section flex flex-col gap-8 text-center">
                <h2 className="text-4xl">Welcome to your Shop</h2>
                <p>Manage your products and stay updated with our seller's account.</p>
            </header>

            {/* DASHBOARD FEATURES */}
            <section className="section flex flex-col gap-16">
                <h2 className="text-center">Dashboard Features</h2>

                <section className="flex flex-col gap-8 md:grid md:grid-cols-2">
                    <article className="flex flex-col items-center gap-4 text-center">
                        <img src={IllustrationPlaceholder} alt="" />
                        <h3>Manage Existing Products</h3>
                        <p className="mt-auto">The seller can easily create new products and add them to their inventory.</p>
                    </article>

                    <article className="flex flex-col items-center gap-4 text-center">
                        <img src={IllustrationPlaceholder} alt="" />
                        <h3>View Orders History</h3>
                        <p className="mt-auto">Sellers can conveniently track and manage their order history.</p>
                    </article>
                </section>
            </section>
        </main>
    );
}