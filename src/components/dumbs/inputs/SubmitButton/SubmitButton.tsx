import { ComponentProps } from "react";

interface InputProps extends Omit<ComponentProps<"input">, "type"> {}

interface CustomProps {
    className?: string;
    disabled?: boolean;
}

interface SubmitButtonProps extends InputProps, CustomProps {}

export function SubmitButton({ className = "", disabled = false, ...inputProps }: SubmitButtonProps) {
    return (
        <input 
            className={`btn disabled:opacity-75 ${className}`} 
            type="submit" 
            disabled={disabled}
            {...inputProps}
        />
    );
}
