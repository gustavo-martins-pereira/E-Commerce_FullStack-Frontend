import { useEffect, useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { useForm, SubmitHandler } from "react-hook-form";

import { getProductById, editProductById } from "@api/services/productService";
import { InputText } from "@components/dumbs/inputs/InputText/InputText";
import { TextArea } from "@components/dumbs/inputs/TextArea/TextArea";
import { SubmitButton } from "@components/dumbs/inputs/SubmitButton/SubmitButton";
import { toastPromise } from "@utils/toast";

interface EditProductFormData {
    editProductName: string;
    editProductDescription: string;
    editProductPrice: number;
}

interface ProductData {
    name: string;
    description: string;
    price: number;
}

export function EditProduct(): JSX.Element {
    const { productId } = useParams<{ productId: string }>();
    const navigate = useNavigate();

    // STATES
    const [isProductLoaded, setIsProductLoaded] = useState<boolean>(false);

    // FORM HOOKS
    const {
        register,
        setValue,
        handleSubmit,
        formState: { errors: editProductErrors }
    } = useForm<EditProductFormData>();

    // EFFECTS
    useEffect(() => {
        (async function fetchProductById(): Promise<void> {
            if (!productId) return;

            const productData: ProductData = await getProductById(Number(productId));

            setValue("editProductName", productData.name);
            setValue("editProductDescription", productData.description);
            setValue("editProductPrice", productData.price);

            setIsProductLoaded(true);
        })();
    }, [productId, setValue]);

    // HANDLES
    const handleOnSubmitEditProductForm: SubmitHandler<EditProductFormData> = async (
        editProductFormData
    ): Promise<void> => {
        if (!productId) return;

        const { 
            editProductName, 
            editProductDescription, 
            editProductPrice 
        } = editProductFormData;

        await toastPromise(
            editProductById(
                Number(productId), 
                editProductName, 
                editProductDescription, 
                editProductPrice
            ), 
            { 
                success: "Product edited", 
                pending: "Editing product..." 
            }
        );

        navigate("/dashboard/manage-products");
    };

    return (
        <main>
            <header className="section flex flex-col gap-8">
                <header className="flex flex-col gap-4 text-center">
                    <h2>Edit Product</h2>
                    <p>Edit your product inventory and update your store!</p>
                </header>

                {/* PRODUCT FORM */}
                <section className="w-full max-w-2xl m-auto">
                    <form className="flex flex-col gap-4" onSubmit={handleSubmit(handleOnSubmitEditProductForm)}>
                        <InputText
                            label="Name"
                            id="name"
                            placeholder="Your product name"
                            type="text"
                            disabled={!isProductLoaded}
                            register={register("editProductName", {
                                required: "The name is required",
                                minLength: {
                                    value: 5,
                                    message: "The product name must be greater than 5",
                                },
                                maxLength: {
                                    value: 100,
                                    message: "The product name must be less than 100",
                                },
                            })}
                            errorMessage={editProductErrors.editProductName?.message}
                        />

                        <TextArea
                            label="Description"
                            placeholder="Product description"
                            name="description"
                            disabled={!isProductLoaded}
                            register={register("editProductDescription")}
                            errorMessage={editProductErrors.editProductDescription?.message}
                        />

                        <InputText
                            label="Price"
                            id="price"
                            placeholder="Product price"
                            type="number"
                            step="0.01"
                            disabled={!isProductLoaded}
                            register={register("editProductPrice", {
                                required: "The price is required",
                                min: {
                                    value: 1,
                                    message: "The product price must be greater than 0",
                                },
                            })}
                            errorMessage={editProductErrors.editProductPrice?.message}
                        />

                        <SubmitButton className="btn-primary" value="Edit Product" disabled={!isProductLoaded} />
                    </form>
                </section>
            </header>
        </main>
    );
}
