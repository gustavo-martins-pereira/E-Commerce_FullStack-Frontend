interface FeatureItemProps {
    icon: JSX.Element;
    title: string;
    description: string;
    featureItemStyles?: React.CSSProperties;
}

export function FeatureItem({ icon, title, description, featureItemStyles }: FeatureItemProps) {
    return (
        <article className="flex flex-col gap-4 items-center" style={featureItemStyles}>
            {icon}
            <h3>{title}</h3>
            <p>{description}</p>
        </article>
    );
}
