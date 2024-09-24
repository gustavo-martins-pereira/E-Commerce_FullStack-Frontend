import { FeatureItem } from "./FeatureItem/FeatureItem";

export function FeaturesSection({ features }) {
    return (
        <section className="flex flex-col gap-8 md:grid md:grid-cols-3">
            {features.map((feature, index) => (
                <FeatureItem
                    key={index}
                    imageSrc={feature.imageSrc}
                    title={feature.title}
                    description={feature.description}
                    altText={feature.altText}
                />
            ))}
        </section>
    );
};
