import { ComponentProps } from "react";

interface InputProps extends Omit<ComponentProps<"input">, 'id'> {}

interface CustomProps {
    id: string;
    label: string;
    register: any;
    errorMessage: string;
}

interface InputRadiusProps extends InputProps, CustomProps {}

export function InputRadius({ name, id, label, value, checked, register, errorMessage }: InputRadiusProps) {
    return (
        <div className="flex items-center gap-1 cursor-pointer">
            <input
                className="appearance-none w-6 h-6 relative border rounded-full cursor-pointer checked:after:bg-input-radius--checked checked:after:w-5 checked:after:h-5 checked:after:absolute checked:after:top-1/2 checked:after:left-1/2 checked:after:-translate-x-1/2 checked:after:-translate-y-1/2 checked:after:rounded-full"
                type="radio"
                name={name}
                id={id}
                value={value}
                defaultChecked={checked}
                {...register}
            />
            <label className="cursor-pointer" htmlFor={id}>{label}</label>
            {errorMessage && <p className="text-input-error">{errorMessage}</p>}
        </div>
    );
}
