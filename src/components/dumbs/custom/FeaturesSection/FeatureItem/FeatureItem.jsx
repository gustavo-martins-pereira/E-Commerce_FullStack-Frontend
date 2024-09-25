export function FeatureItem({ imageSrc, altText, title, description, featureStyles }) {
    return (
        <article
            className={`
                flex flex-col gap-4
                ${featureStyles?.alignItems ? featureStyles.alignItems : "items-center"}
                ${featureStyles?.others}
            `}
        >
            <img className="w-8" src={imageSrc} alt={altText || ""} />
            <h3>{title}</h3>
            <p>{description}</p>
        </article>
    );
}
