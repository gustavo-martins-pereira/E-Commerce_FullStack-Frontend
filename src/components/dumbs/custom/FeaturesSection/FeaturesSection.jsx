import { FeatureItem } from "./FeatureItem/FeatureItem";

export function FeaturesSection({ features, featureStyles }) {
    return (
        <section className="flex flex-col gap-8 md:grid md:grid-cols-3">
            {features.map((feature, index) => (
                <FeatureItem
                    key={index}
                    icon={feature.icon}
                    altText={feature.altText}
                    title={feature.title}
                    description={feature.description}
                    featureStyles={featureStyles}
                />
            ))}
        </section>
    );
};
