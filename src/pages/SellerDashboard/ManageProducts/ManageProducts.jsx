export function ManageProducts() {
    return (
        <main>
            <header className="section flex flex-col gap-8 text-center">
                <h2>Manage Your Products</h2>
                <p>View, edit, and delete your listed products.</p>
            </header>

            {/* PRODUCTS */}
            <section className="section pt-0 flex flex-col gap-8">
                <article className="flex flex-col gap-4 even:bg-slate-200 xl:grid xl:grid-cols-[2fr_4fr_auto_auto] xl:items-center">
                    <h3>Product Name</h3>
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit...</p>
                    <p className="text-xl font-bold">$55</p>

                    <div className="flex gap-4">
                        <button className="btn btn-primary">Edit</button>
                        <button className="btn btn-secondary">Delete</button>
                    </div>
                </article>

                <article className="flex flex-col gap-4 even:bg-slate-200 xl:grid xl:grid-cols-[2fr_4fr_auto_auto] xl:items-center">
                    <h3>Product Name</h3>
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit...</p>
                    <p className="text-xl font-bold">$55</p>

                    <div className="flex gap-4">
                        <button className="btn btn-primary">Edit</button>
                        <button className="btn btn-secondary">Delete</button>
                    </div>
                </article>

                <article className="flex flex-col gap-4 xl:grid xl:grid-cols-[2fr_4fr_auto_auto] xl:items-center">
                    <h3>Product Name</h3>
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit...</p>
                    <p className="text-xl font-bold">$55</p>

                    <div className="flex gap-4">
                        <button className="btn btn-primary">Edit</button>
                        <button className="btn btn-secondary">Delete</button>
                    </div>
                </article>

                <article className="flex flex-col gap-4 xl:grid xl:grid-cols-[2fr_4fr_auto_auto] xl:items-center">
                    <h3>Product Name</h3>
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit...</p>
                    <p className="text-xl font-bold">$55</p>

                    <div className="flex gap-4">
                        <button className="btn btn-primary">Edit</button>
                        <button className="btn btn-secondary">Delete</button>
                    </div>
                </article>

                <article className="flex flex-col gap-4 xl:grid xl:grid-cols-[2fr_4fr_auto_auto] xl:items-center">
                    <h3>Product Name</h3>
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit...</p>
                    <p className="text-xl font-bold">$55</p>

                    <div className="flex gap-4">
                        <button className="btn btn-primary">Edit</button>
                        <button className="btn btn-secondary">Delete</button>
                    </div>
                </article>
            </section>
        </main>
    );
}
