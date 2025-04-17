import { ComponentProps } from "react";

interface TextAreaProps extends Omit<ComponentProps<"textarea">, "id"> {}

interface CustomProps {
    id: string;
    label: string;
    register?: any;
    errorMessage?: string;
}

interface TextAreaComponentProps extends TextAreaProps, CustomProps {}

export function TextArea({ id, label, register, errorMessage, ...props }: TextAreaComponentProps) {
    return (
        <div className="flex flex-col gap-2 relative">
            <label className="font-semibold" htmlFor={id}>{label}</label>
            <textarea 
                className="border rounded p-2 disabled:cursor-not-allowed disabled:opacity-75" 
                id={id}
                {...register}
                {...props}
            />
            <p className="text-input-error">{errorMessage}</p>
        </div>
    );
}
