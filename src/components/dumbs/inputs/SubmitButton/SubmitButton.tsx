import { ComponentProps } from "react";
import { twMerge } from "tailwind-merge";

interface InputProps extends ComponentProps<"input"> {}

export function SubmitButton({ className, ...props }: InputProps) {
    return (
        <input 
            className={twMerge("btn disabled:opacity-75", className)} 
            type="submit" 
            {...props}
        />
    );
}
