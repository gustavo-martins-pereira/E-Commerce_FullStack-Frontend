import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

import { getUserByUsername } from "@api/services/userService";
import { getProductsBySellerId, deleteProductById } from "@api/services/productService";
import { Button } from "@components/dumbs/Button/Button";
import { Skeleton } from "@components/smart/Skeleton/Skeleton";
import { bufferArrayToImageURL } from "@utils/bufferArrayToImageURL";
import { toastPromise } from "@utils/toast";

export function ManageProducts() {
    // STATES
    const [products, setProducts] = useState();
    const [showConfirmDelete, setShowConfirmDelete] = useState(false);
    const [productToDelete, setProductToDelete] = useState(null);

    // EFFECTS
    useEffect(() => {
        fetchProducts();
    }, []);

    // HANDLES
    function handleOpenDeletePopup(id) {
        setProductToDelete(id);
        setShowConfirmDelete(true);
    }

    function handleCloseDeletePopup() {
        setProductToDelete(null);
        setShowConfirmDelete(false);
    }

    async function handleConfirmDelete() {
        await toastPromise(deleteProductById(productToDelete), { success: "Product deleted", pending: "Deleting" });

        fetchProducts();

        handleCloseDeletePopup();
    }

    async function fetchProducts() {
        const { username } = JSON.parse(localStorage.getItem("loggedInUser"));
        const user = await getUserByUsername(username);

        const products = await getProductsBySellerId(user.id);

        setProducts(products);
    };

    return (
        <main>
            <header className="section flex flex-col gap-8 text-center">
                <h2>Manage Your Products</h2>
                <p>View, edit, and delete your listed products.</p>
            </header>

            {/* PRODUCTS */}
            <section className="section flex flex-col gap-4 pt-0">
                <Link className="self-end" to="/dashboard/manage-products/create"><Button className="btn-primary">Create Product</Button></Link>

                <div className="flex flex-col gap-8 xl:gap-2">
                    {products ?
                        products.map(product => (
                            <article key={product.id} className="flex flex-col gap-4 xl:flex-row xl:border xl:p-4">
                                <img className="max-h-40 object-contain md:max-h-80" src={bufferArrayToImageURL(product.image.data)} alt="" />

                                <div className="flex flex-col gap-4">
                                    <h3>{product.name}</h3>
                                    <p>{product.description}</p>
                                    <p className="text-xl font-bold">${product.price}</p>

                                    <div className="flex gap-4">
                                        <Link to={`/dashboard/manage-products/edit/${product.id}`}><Button className="btn btn-primary">Edit</Button></Link>
                                        <Button className="btn btn-secondary" onClick={() => handleOpenDeletePopup(product.id)}>Delete</Button>
                                    </div>
                                </div>
                            </article>
                        ))
                        :
                        Array.from({ length: 3 }).map((_, index) => <Skeleton className="flex flex-col gap-4 border p-4 xl:flex-row xl:p-4" key={index}>
                            <div>
                                <div className="w-40 h-60 m-auto"></div>
                            </div>

                            <div className="flex flex-col gap-8 xl:w-full">
                                <div className="flex flex-col gap-2">
                                    <div className="w-1/2 h-8"></div>
                                    <div className="h-20"></div>
                                    <div className="w-1/4 h-8"></div>
                                </div>

                                <div className="flex gap-4">
                                    <div className="w-20 h-10"></div>
                                    <div className="w-20 h-10"></div>
                                </div>
                            </div>
                        </Skeleton>)
                    }
                </div>
            </section>

            {/* DELETE CONFIRMATION POPUP */}
            {showConfirmDelete && (
                <div className="bg-popup-overlay bg-opacity-50 fixed inset-0 flex items-center justify-center z-50">
                    <div className="bg-popup p-6 rounded shadow-lg text-center transition-transform duration-300 ease-in-out transform scale-100 popup-scale">
                        <h3 className="mb-4 text-lg font-semibold">Confirm Deletion</h3>

                        <p>Are you sure you want to delete this product?</p>
                        <div className="flex justify-center gap-4 mt-6">
                            <Button className="btn btn-primary" onClick={handleConfirmDelete}>Yes, Delete</Button>
                            <Button className="btn btn-secondary" onClick={handleCloseDeletePopup}>Cancel</Button>
                        </div>
                    </div>
                </div>
            )}
        </main>
    );
}
