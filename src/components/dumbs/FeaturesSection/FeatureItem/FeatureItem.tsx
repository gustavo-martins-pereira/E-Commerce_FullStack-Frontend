interface FeatureItemProps {
    icon: JSX.Element;
    title: string;
    description: string;
    featureStyles?: React.CSSProperties;
}

export function FeatureItem({ icon, title, description, featureStyles }: FeatureItemProps) {
    return (
        <article className="flex flex-col gap-4 items-center" style={featureStyles}>
            {icon}
            <h3>{title}</h3>
            <p>{description}</p>
        </article>
    );
}
