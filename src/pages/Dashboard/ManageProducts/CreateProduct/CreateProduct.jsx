import { useNavigate } from "react-router-dom";
import { useForm } from "react-hook-form";

import { createProduct } from "@api/services/productService";
import { InputText } from "@components/dumbs/custom/inputs/InputText/InputText";
import { TextArea } from "@components/dumbs/custom/inputs/TextArea/TextArea";
import { InputFile } from "@components/dumbs/custom/inputs/InputFile/InputFile";
import { toastPromise } from "@utils/toast";

export function CreateProduct() {
    const navigator = useNavigate();

    // FORM HOOKS
    const {
        register,
        watch,
        handleSubmit,
        formState: { errors: newProductErrors }
    } = useForm();

    const fileList = watch("createProductImage");

    // HANDLES
    async function handleOnSubmitCreateProductForm(createProductFormData) {
        const { createProductName, createProductDescription, createProductPrice, createProductImage } = createProductFormData;

        await toastPromise(createProduct(createProductName, createProductDescription, createProductPrice, createProductImage[0]), { success: "Product created", pending: "Creating product..." });

        navigator("/dashboard/manage-products");
    }

    return (
        <main>
            <header className="section flex flex-col gap-8">
                <header className="flex flex-col gap-4 text-center">
                    <h2>Create New Product</h2>
                    <p>Add new items to your product inventory and start selling today!</p>
                </header>

                {/* PRODUCT FORM */}
                <section className="w-full max-w-2xl m-auto rounded shadow p-8">
                    <form className="flex flex-col gap-4" onSubmit={handleSubmit(handleOnSubmitCreateProductForm)}>
                        <InputText
                            label="Name"
                            id="name"
                            placeholder="Your product name"
                            type="text"
                            register={register("createProductName", {
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
                            errorMessage={newProductErrors.createProductName?.message}
                        />

                        <TextArea
                            label="Description"
                            placeholder="Product description"
                            name="description"
                            register={register("createProductDescription")}
                            errorMessage={newProductErrors.createProductDescription?.message}
                        />

                        <InputText
                            label="Price"
                            id="price"
                            placeholder="Product price"
                            type="number"
                            register={register("createProductPrice", {
                                required: "The price is required",
                                min: {
                                    value: 1,
                                    message: "The product price must be greater than 0",
                                },
                            })}
                            errorMessage={newProductErrors.createProductPrice?.message}
                        />

                        <InputFile
                            id="image"
                            fileList={fileList}
                            register={register("createProductImage", {
                                required: "The image is required",
                            })}
                            errorMessage={newProductErrors.createProductImage?.message}
                        />

                        <input className="btn btn-primary w-full" type="submit" value="Create Product" />
                    </form>
                </section>
            </header>
        </main>
    );
}