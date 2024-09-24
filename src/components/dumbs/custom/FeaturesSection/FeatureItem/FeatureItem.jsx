export function FeatureItem({ imageSrc, title, description, altText }) {
    return (
        <article className="flex flex-col items-center gap-4">
            <img className="w-8" src={imageSrc} alt={altText || ""} />
            <h3>{title}</h3>
            <p>{description}</p>
        </article>
    );
}
