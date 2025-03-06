import { useNavigate } from "react-router-dom";
import { useForm, SubmitHandler } from "react-hook-form";

import { createProduct } from "@api/services/productService";
import { InputText } from "@components/dumbs/inputs/InputText/InputText";
import { TextArea } from "@components/dumbs/inputs/TextArea/TextArea";
import { InputNumber } from "@components/dumbs/inputs/InputNumber/InputNumber";
import { InputFile } from "@components/dumbs/inputs/InputFile/InputFile";
import { SubmitButton } from "@components/dumbs/inputs/SubmitButton/SubmitButton";
import { toastPromise } from "@utils/toast";

interface CreateProductFormData {
    createProductName: string;
    createProductDescription: string;
    createProductPrice: number;
    createProductImage: FileList;
}

export function CreateProduct() {
    const navigate = useNavigate();

    // FORM HOOKS
    const {
        register,
        watch,
        handleSubmit,
        formState: { errors: newProductErrors }
    } = useForm<CreateProductFormData>();

    const fileList = watch("createProductImage");

    // HANDLES
    const handleOnSubmitCreateProductForm: SubmitHandler<CreateProductFormData> = async (createProductFormData): Promise<void> => {
        const { 
            createProductName, 
            createProductDescription, 
            createProductPrice, 
            createProductImage 
        } = createProductFormData;

        await toastPromise(
            createProduct(
                createProductName, 
                createProductDescription, 
                createProductPrice, 
                createProductImage[0]
            ), 
            { 
                success: "Product created", 
                pending: "Creating product..." 
            }
        );

        navigate("/dashboard/manage-products");
    };

    return (
        <main>
            <header className="section flex flex-col gap-8">
                <header className="flex flex-col gap-4 text-center">
                    <h2>Create New Product</h2>
                    <p>Add new items to your product inventory and start selling today!</p>
                </header>

                {/* PRODUCT FORM */}
                <section className="w-full max-w-2xl m-auto rounded shadow p-8">
                    <form 
                        className="flex flex-col gap-4" 
                        onSubmit={handleSubmit(handleOnSubmitCreateProductForm)}
                    >
                        <InputText
                            label="Name"
                            id="name"
                            placeholder="Your product name"
                            register={register("createProductName", {
                                required: "The name is required",
                                minLength: {
                                    value: 5,
                                    message: "The product name must be greater than 5 characters",
                                },
                                maxLength: {
                                    value: 100,
                                    message: "The product name must be less than 100 characters",
                                },
                            })}
                            errorMessage={newProductErrors.createProductName?.message}
                        />

                        <TextArea
                            id="description"
                            label="Description"
                            placeholder="Product description"
                            name="description"
                            register={register("createProductDescription")}
                            errorMessage={newProductErrors.createProductDescription?.message}
                        />

                        <InputNumber
                            label="Price"
                            id="price"
                            step={0.01}
                            placeholder="Product price"
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

                        <SubmitButton className="btn-primary" value="Create Product" />
                    </form>
                </section>
            </header>
        </main>
    );
}
