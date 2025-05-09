import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { BsBoxSeam } from "react-icons/bs";

import { getUserByUsername } from "@api/services/userService";
import { getProductsBySellerId, deleteProductById } from "@api/services/productService";
import { Button } from "@components/dumbs/Button/Button";
import { Skeleton } from "@components/dumbs/Skeleton/Skeleton";
import { Product } from "@utils/types/product";
import { toastPromise } from "@utils/toast";
import { User } from "@utils/types/user";

export function ManageProducts() {
    // STATES
    const [products, setProducts] = useState<Product[] | null>(null);
    const [showConfirmDelete, setShowConfirmDelete] = useState<boolean>(false);
    const [productToDelete, setProductToDelete] = useState<number | null>(null);
    const [isDeleting, setIsDeleting] = useState<boolean>(false);

    // EFFECTS
    useEffect(() => {
        fetchProducts();
    }, []);

    // HANDLES
    function handleOpenDeletePopup(id: number): void {
        setProductToDelete(id);
        setShowConfirmDelete(true);
    }

    function handleCloseDeletePopup(): void {
        setProductToDelete(null);
        setShowConfirmDelete(false);
    }

    async function handleConfirmDelete(): Promise<void> {
        if (productToDelete) {
            setIsDeleting(true);
            try {
                await toastPromise(
                    deleteProductById(productToDelete), 
                    { success: "Product deleted", pending: "Deleting" }
                );

                await fetchProducts();
                handleCloseDeletePopup();
            } finally {
                setIsDeleting(false);
            }
        }
    }

    async function fetchProducts(): Promise<void> {
        const savedUser = localStorage.getItem("loggedInUser");
        if (!savedUser) return;

        const { username } = JSON.parse(savedUser) as User;
        const user = await getUserByUsername(username);
        const fetchedProducts = await getProductsBySellerId(user.id);

        setProducts(fetchedProducts);
    }

    return (
        <main>
            <header className="section flex flex-col gap-8 text-center">
                <h2>Manage Your Products</h2>
                <p>View, edit, and delete your listed products.</p>
            </header>

            {/* PRODUCTS */}
            <section className="section flex flex-col gap-4 pt-0">
                {products && products.length > 0 && <Link className="self-end" to="/dashboard/manage-products/create"><Button className="btn-primary">Create Product</Button></Link>}

                <div className="flex flex-col gap-8 xl:gap-2">
                    {products ?
                        products.length > 0 ?
                            products.map(product => (
                                <article key={product.id} className="flex flex-col gap-4 xl:flex-row xl:border xl:p-4">
                                    <img className="max-h-40 object-contain md:max-h-80" src={product.imageUrl} alt="" />

                                    <div className="flex flex-col gap-4">
                                        <h3>{product.name}</h3>
                                        <p>{product.description}</p>
                                        <p className="text-xl font-bold">${product.price}</p>

                                        <div className="flex gap-4">
                                            <Link to={`/dashboard/manage-products/edit/${product.id}`}><Button className="btn btn-primary">Edit</Button></Link>
                                            <Button 
                                                className="btn btn-secondary" 
                                                onClick={() => handleOpenDeletePopup(product.id)}
                                            >
                                                Delete
                                            </Button>
                                        </div>
                                    </div>
                                </article>
                            ))
                            :
                            <div className="flex flex-col items-center justify-center gap-6 p-8 border border-primary rounded-lg">
                                <BsBoxSeam className="w-16 h-16 text-icon-primary" />
                                <div className="text-center">
                                    <h3 className="text-xl font-semibold text-ebony">No Products Created Yet</h3>
                                    <p className="text-black-50 mt-2">Start by creating your first product to showcase in your store.</p>
                                </div>
                                <Link to="/dashboard/manage-products/create">
                                    <Button className="btn-primary">Create Your First Product</Button>
                                </Link>
                            </div>
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
                            <Button className="btn btn-primary" onClick={handleConfirmDelete} disabled={isDeleting}>Yes, Delete</Button>
                            <Button className="btn btn-secondary" onClick={handleCloseDeletePopup}>Cancel</Button>
                        </div>
                    </div>
                </div>
            )}
        </main>
    );
}
