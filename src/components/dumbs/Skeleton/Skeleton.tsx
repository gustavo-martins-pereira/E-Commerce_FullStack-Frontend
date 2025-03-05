import { ComponentProps } from "react";
import { twMerge } from "tailwind-merge";

interface SkeletonProps extends ComponentProps<"div"> {}

export function Skeleton({ className, ...props }: SkeletonProps) {
    return (
        <div className={twMerge("skeleton", className)} {...props} />
    );
}
