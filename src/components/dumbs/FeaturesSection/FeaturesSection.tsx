import { FeatureItem } from "./FeatureItem/FeatureItem";

interface FeaturesSectionProps {
    features: {
        icon: JSX.Element;
        altText: string;
        title: string;
        description: string;
    }[];

    featureItemStyles?: string;
}

export function FeaturesSection({ features, featureItemStyles }: FeaturesSectionProps) {
    return (
        <section className="flex flex-col gap-8 md:grid md:grid-cols-3">
            {features.map((feature, index) => (
                <FeatureItem
                    key={index}
                    icon={feature.icon}
                    title={feature.title}
                    description={feature.description}
                    featureItemStyles={featureItemStyles}
                />
            ))}
        </section>
    );
};
