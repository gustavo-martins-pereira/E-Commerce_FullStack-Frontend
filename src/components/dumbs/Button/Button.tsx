import { ComponentProps } from "react";
import { twMerge } from "tailwind-merge";

interface ButtonProps extends ComponentProps<"button"> {}

export function Button({ className, ...props }: ButtonProps) {
    return (
        <button
            className={twMerge("btn disabled:opacity-50 disabled:cursor-auto", className)}
            {...props}
        />
    );
}
