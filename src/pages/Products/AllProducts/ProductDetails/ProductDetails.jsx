import { Link } from "react-router-dom";

import { Button } from "@components/dumbs/custom/Button/Button";
import Accordion from "@components/dumbs/windui/Accordion/Accordion";

import PlaceholderImage from "@assets/images/placeholder-image.svg";

export function ProductDetails() {
    return (
        <main>
            {/* PRODUCT ITSELF */}
            <section className="section flex flex-col gap-8 lg:flex-row-reverse">
                <img className="w-1/2 m-auto lg:m-0 lg:ml-auto" src={PlaceholderImage} alt="" />

                <div className="flex flex-col gap-4 flex-grow">
                    <h2>Product Name</h2>
                    <h3>$55</h3>
                    <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Autem, vel. Doloribus inventore reiciendis nesciunt expedita? Quaerat dolore fugit in adipisci laborum incidunt praesentium eos, consequatur fuga cumque ipsam fugiat laudantium.</p>
                    <Button className="btn-secondary">Add to Cart</Button>
                </div>
            </section>

            {/* DISCOVER */}
            <section className="section flex flex-col gap-4 text-center lg:gap-6">
                <h2>Discover Our Amazing Products</h2>
                <p>Explore our wide range of high-quality products and find your perfect match.</p>

                <div className="flex gap-4 justify-center">
                    <Link to="/products"><Button className="btn-secondary">Explore More</Button></Link>
                    <Link to="/products/all"><Button className="btn-primary">View all Products</Button></Link>
                </div>
            </section>

            {/* FAQ */}
            <section className="section flex flex-col gap-4 text-center lg:w-3/4 lg:max-w-[40rem] lg:m-auto">
                <h2>FAQs</h2>
                <p>Find answers to commonly asked questions about the product.</p>

                <section className="flex flex-col mt-4 text-left">
                    <Accordion
                        question="What are the features?"
                        answer="Lorem ipsum dolor sit amet consectetur adipisicing elit. Tenetur, voluptatum modi unde non pariatur quae. Ullam obcaecati quod, ipsam nobis veniam similique amet fugit adipisci inventore eius corrupti facilis sapiente."
                    />
                    <Accordion
                        question="What are the features?"
                        answer="Lorem ipsum dolor sit amet consectetur adipisicing elit. Tenetur, voluptatum modi unde non pariatur quae. Ullam obcaecati quod, ipsam nobis veniam similique amet fugit adipisci inventore eius corrupti facilis sapiente."
                    />
                    <Accordion
                        question="What are the features?"
                        answer="Lorem ipsum dolor sit amet consectetur adipisicing elit. Tenetur, voluptatum modi unde non pariatur quae. Ullam obcaecati quod, ipsam nobis veniam similique amet fugit adipisci inventore eius corrupti facilis sapiente."
                    />
                    <Accordion
                        question="What are the features?"
                        answer="Lorem ipsum dolor sit amet consectetur adipisicing elit. Tenetur, voluptatum modi unde non pariatur quae. Ullam obcaecati quod, ipsam nobis veniam similique amet fugit adipisci inventore eius corrupti facilis sapiente."
                    />
                </section>
            </section>
        </main>
    );
}
