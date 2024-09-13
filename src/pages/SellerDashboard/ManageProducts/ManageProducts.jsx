import { Button } from "@components/dumbs/custom/Button/Button";
import { Link } from "react-router-dom";

export function ManageProducts() {
    return (
        <main>
            <header className="section flex flex-col gap-8 text-center">
                <h2>Manage Your Products</h2>
                <p>View, edit, and delete your listed products.</p>
            </header>

            {/* PRODUCTS */}
            <section className="section flex flex-col gap-4 pt-0">
                <Link className="self-end" to="/seller-dashboard/manage-products/create"><Button className="btn-primary">Create Product</Button></Link>

                <div className="flex flex-col gap-8 xl:gap-0">
                    <article className="flex flex-col gap-4 xl:even:bg-slate-200 xl:grid xl:grid-cols-[2fr_4fr_auto_auto] xl:items-center xl:border xl:p-4">
                        <h3>Product Name</h3>
                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit...</p>
                        <p className="text-xl font-bold">$55</p>

                        <div className="flex gap-4">
                            <Link to="/seller-dashboard/manage-products/edit"><Button className="btn btn-primary">Edit</Button></Link>
                            <Button className="btn btn-secondary">Delete</Button>
                        </div>
                    </article>

                    <article className="flex flex-col gap-4 xl:even:bg-slate-200 xl:grid xl:grid-cols-[2fr_4fr_auto_auto] xl:items-center xl:border xl:p-4">
                        <h3>Product Name</h3>
                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit...</p>
                        <p className="text-xl font-bold">$55</p>

                        <div className="flex gap-4">
                            <Link to="/seller-dashboard/manage-products/edit"><Button className="btn btn-primary">Edit</Button></Link>
                            <Button className="btn btn-secondary">Delete</Button>
                        </div>
                    </article>

                    <article className="flex flex-col gap-4 xl:even:bg-slate-200 xl:grid xl:grid-cols-[2fr_4fr_auto_auto] xl:items-center xl:border xl:p-4">
                        <h3>Product Name</h3>
                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit...</p>
                        <p className="text-xl font-bold">$55</p>

                        <div className="flex gap-4">
                            <Link to="/seller-dashboard/manage-products/edit"><Button className="btn btn-primary">Edit</Button></Link>
                            <Button className="btn btn-secondary">Delete</Button>
                        </div>
                    </article>

                    <article className="flex flex-col gap-4 xl:even:bg-slate-200 xl:grid xl:grid-cols-[2fr_4fr_auto_auto] xl:items-center xl:border xl:p-4">
                        <h3>Product Name</h3>
                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit...</p>
                        <p className="text-xl font-bold">$55</p>

                        <div className="flex gap-4">
                            <Link to="/seller-dashboard/manage-products/edit"><Button className="btn btn-primary">Edit</Button></Link>
                            <Button className="btn btn-secondary">Delete</Button>
                        </div>
                    </article>

                    <article className="flex flex-col gap-4 xl:even:bg-slate-200 xl:grid xl:grid-cols-[2fr_4fr_auto_auto] xl:items-center xl:border xl:p-4">
                        <h3>Product Name</h3>
                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit...</p>
                        <p className="text-xl font-bold">$55</p>

                        <div className="flex gap-4">
                            <Link to="/seller-dashboard/manage-products/edit"><Button className="btn btn-primary">Edit</Button></Link>
                            <Button className="btn btn-secondary">Delete</Button>
                        </div>
                    </article>
                </div>
            </section>
        </main>
    );
}
