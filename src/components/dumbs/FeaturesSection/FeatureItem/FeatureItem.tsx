import { twMerge } from "tailwind-merge";

interface FeatureItemProps {
    icon: JSX.Element;
    title: string;
    description: string;
    featureItemStyles?: string;
}

export function FeatureItem({ icon, title, description, featureItemStyles }: FeatureItemProps) {
    return (
        <article className={twMerge("flex flex-col gap-4 items-center", featureItemStyles)}>
            {icon}
            <h3>{title}</h3>
            <p>{description}</p>
        </article>
    );
}
