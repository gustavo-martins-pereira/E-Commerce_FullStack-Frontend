import { InputText } from "@components/dumbs/custom/InputText/InputText";
import { TextArea } from "@components/dumbs/custom/TextArea/TextArea";

export function EditProduct() {
    return (
        <main>
            <header className="section flex flex-col gap-8">
                <header className="flex flex-col gap-4 text-center">
                    <h2>Edit Product</h2>
                    <p>Edit your product inventory and update your store!</p>
                </header>

                {/* PRODUCT FORM */}
                <section className="w-full max-w-2xl m-auto">
                    <form>
                        <InputText
                            label="Name"
                            placeholder="Your product name"
                            name="name"
                            inputType="text"
                        />

                        <TextArea
                            label="Description"
                            placeholder="Product description"
                            name="description"
                        />

                        <InputText
                            label="Price"
                            placeholder="Product price"
                            name="price"
                            inputType="number"
                        />

                        <input className="btn btn-secondary w-full mt-8" type="submit" value="Create Product" />
                    </form>
                </section>
            </header>
        </main>
    );
}
