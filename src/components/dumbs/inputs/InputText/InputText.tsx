import { ComponentProps } from "react";

interface InputProps extends ComponentProps<"input"> {}

interface CustomProps {
    label: string;
    register: any;
    errorMessage: string;
}

interface InputTextProps extends InputProps, CustomProps {}

export function InputText({ label, register, errorMessage, ...inputProps }: InputTextProps) {
    return (
        <div className="flex flex-col gap-2 relative">
            <label className="font-semibold" htmlFor={inputProps.id}>{label}</label>
            <input
                className="border rounded p-2 disabled:cursor-not-allowed disabled:opacity-75"
                {...register}
                {...inputProps}
            />
            <p className="text-input-error">{errorMessage}</p>
        </div>
    );
}
