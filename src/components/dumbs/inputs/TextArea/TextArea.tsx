import { ComponentProps } from "react";

interface TextAreaProps extends ComponentProps<"textarea"> {}

interface CustomProps {
    label: string;
    register: any;
    errorMessage?: string;
}

interface TextAreaComponentProps extends TextAreaProps, CustomProps {}

export function TextArea({ label, register, errorMessage, ...textAreaProps }: TextAreaComponentProps) {
    return (
        <div className="flex flex-col gap-2 relative">
            <label className="font-semibold" htmlFor={textAreaProps.id}>{label}</label>
            <textarea 
                className="border rounded p-2 disabled:cursor-not-allowed disabled:opacity-75" 
                {...register}
                {...textAreaProps}
            />
            <p className="text-input-error">{errorMessage}</p>
        </div>
    );
}
