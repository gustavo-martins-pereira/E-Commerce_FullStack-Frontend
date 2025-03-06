import { Link } from "react-router-dom";
import { FaBox, FaHistory } from "react-icons/fa";
import { ReactElement } from "react";

interface DashboardFeature {
    link: string;
    title: string;
    description: string;
    icon: ReactElement;
}

export function Dashboard() {
    const features: DashboardFeature[] = [
        {
            link: "/dashboard/manage-products",
            title: "Manage Products",
            description: "The seller can easily create new products and add them to their inventory.",
            icon: <FaBox size={50} className="icon-primary" />
        },
        {
            link: "/dashboard/orders-history",
            title: "View Orders History",
            description: "Sellers can conveniently track and manage their order history.",
            icon: <FaHistory size={50} className="icon-primary" />
        }
    ];

    return (
        <main>
            <header className="section flex flex-col gap-8 text-center">
                <h2 className="text-4xl">Welcome to your Shop</h2>
                <p>Manage your products and stay updated with our seller's account.</p>
            </header>

            {/* DASHBOARD FEATURES */}
            <section className="section flex flex-col gap-16">
                <h2 className="text-center">Dashboard Features</h2>

                <section className="max-w-[80%] flex flex-col gap-8 m-auto md:grid md:grid-cols-2">
                    {features.map((feature: DashboardFeature, index: number) => (
                        <Link to={feature.link} key={index}>
                            <article className="h-full flex flex-col items-center gap-4 border-2 border-primary rounded p-4 text-center transition-transform hover:scale-110">
                                {feature.icon}
                                <h3>{feature.title}</h3>
                                <p>{feature.description}</p>
                            </article>
                        </Link>
                    ))}
                </section>
            </section>
        </main>
    );
}
