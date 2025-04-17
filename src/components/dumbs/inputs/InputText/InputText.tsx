import { ComponentProps } from "react";

interface InputProps extends Omit<ComponentProps<"input">, "id"> {}

interface CustomProps {
    id: string;
    label: string;
    register?: any;
    errorMessage?: string;
}

interface InputTextProps extends InputProps, CustomProps {}

export function InputText({ id, label, register, errorMessage, ...props }: InputTextProps) {
    return (
        <div className="flex flex-col gap-2 relative">
            <label className="font-semibold" htmlFor={id}>{label}</label>
            <input
                className="border rounded p-2 disabled:cursor-not-allowed disabled:opacity-75"
                {...register}
                {...props}
            />
            <p className="text-input-error">{errorMessage}</p>
        </div>
    );
}
