export function FeatureItem({ icon, altText, title, description, featureStyles }) {
    return (
        <article className={`flex flex-col gap-4 items-center ${featureStyles?.additionalClassNames}`} style={featureStyles}>
            {icon}
            <h3>{title}</h3>
            <p>{description}</p>
        </article>
    );
}
