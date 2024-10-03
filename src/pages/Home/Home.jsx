import { Link } from "react-router-dom";
import { FaShippingFast, FaHeadset, FaAward, FaSearch, FaShoppingCart, FaTag } from "react-icons/fa";

import { FeaturesSection } from "@components/dumbs/custom/FeaturesSection/FeaturesSection";
import { Button } from "@components/dumbs/custom/Button/Button";
import { LinkArrow } from "@components/dumbs/custom/LinkArrow/LinkArrow";

import OnlineShopping from "./images/online-shopping.svg";

export function Home() {
    const iconSize = "3rem";

    const shopWithConfidenceData = [
        {
            icon: <FaShippingFast size={iconSize} className="text-icon-primary" />,
            title: "Fast Shipping",
            description: "Get your products delivered quickly and efficiently.",
            altText: "Shipping Illustration"
        },
        {
            icon: <FaHeadset size={iconSize} className="text-icon-primary" />,
            title: "Excellent Customer Service",
            description: "Our dedicated customer service team is here to assist you every step of the way.",
            altText: "Customer Service Illustration"
        },
        {
            icon: <FaAward size={iconSize} className="text-icon-primary" />,
            title: "Quality Guarantee",
            description: "Shop with confidence knowing that our products are of the highest quality.",
            altText: "Quality Guarantee Illustration"
        },
    ];

    const howWorksData = [
        {
            icon: <FaSearch size={iconSize} className="text-icon-primary" />,
            title: "Find the Perfect Product for Your Needs",
            description: "Explore our wide range of high-quality products and choose the one that suits you best.",
            altText: "Product Illustration"
        },
        {
            icon: <FaShoppingCart size={iconSize} className="text-icon-primary" />,
            title: "Enjoy Secure and Convenient Online Shopping",
            description: "With our user-friendly interface, you can easily browse, select, and purchase products hassle-free.",
            altText: "Online Shopping Illustration"
        },
        {
            icon: <FaTag size={iconSize} className="text-icon-primary" />,
            title: "Discover New Products and Exciting Deals",
            description: "Stay updated with our latest product releases and exclusive promotions.",
            altText: "Deals and Promotions Illustration"
        },
    ];

    return (
        <main>
            {/* HERO */}
            <section className="section flex flex-col gap-8 lg:flex-row lg:items-center lg:gap-16">
                <div className="flex flex-col gap-4">
                    <h1>Discover Amazing Products for Every Occasion</h1>
                    <p>Welcome to our online store, where you'll find a wide selection of high-quality products to meet your needs. Whether you're looking for everyday essentials or unique gifts, we've got you covered.</p>

                    <div className="flex gap-4">
                        <Link to="/products"><Button className="btn-primary">Explore</Button></Link>
                        <Link to="/register-login"><Button className="btn-secondary">Sign Up</Button></Link>
                    </div>
                </div>

                <img className="lg:w-1/2" src={OnlineShopping} alt="" />
            </section>

            {/* SHOP WITH CONFIDENCE */}
            <section className="section flex flex-col gap-12 text-center">
                <header className="flex flex-col gap-4">
                    <h2>Shop with Confidence on Our Site</h2>
                    <p>Experience fast shipping, quality guarantee, and excellent customer service when you shop with us.</p>
                </header>

                <FeaturesSection features={shopWithConfidenceData} />

                <LinkArrow
                    url="/register-login"
                    text="Sign Up"
                />
            </section>

            {/* HOW WORKS */}
            <section className="section flex flex-col gap-12 text-center">
                <h2>Browse, Select, and Purchase Products with Ease</h2>

                <FeaturesSection features={howWorksData} />

                <LinkArrow
                    url="/products"
                    text="Buy"
                />
            </section>
        </main>
    );
}
