import { ComponentProps } from "react";

interface InputProps extends ComponentProps<"input"> {}

interface CustomProps {
    inputNumberStyles?: string;
    label: string;
    inputStyles?: string;
    register: any;
    errorMessage: string;
}

interface InputNumberProps extends InputProps, CustomProps {}

export function InputNumber({ inputNumberStyles, label, inputStyles, register, errorMessage, ...inputProps}: InputNumberProps) {
    return (
        <div className={`flex flex-col gap-2 relative ${inputNumberStyles}`}>
            <label className="font-semibold" htmlFor={inputProps.id}>{label}</label>
            <input
                className={`border rounded p-2 focus:outline-input disabled:cursor-not-allowed disabled:opacity-75 ${inputStyles}`}
                type="number"
                {...register}
                {...inputProps}
            />
            <p className="text-input-error">{errorMessage}</p>
        </div>
    );
}
