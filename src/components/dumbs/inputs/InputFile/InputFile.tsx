import { ComponentProps } from "react";
import { FaCheck, FaRegImage } from "react-icons/fa";

interface InputProps extends Omit<ComponentProps<"input">, 'id'> {}

interface CustomProps {
    id: string;
    register: any;
    fileList: FileList | null;
    errorMessage: string;
}

interface InputFileProps extends InputProps, CustomProps {}

export function InputFile({ id, fileList, register, errorMessage, ...inputProps }: InputFileProps) {
    return (
        <div>
            <input
                id={id}
                type="file"
                className="peer hidden"
                accept=".gif,.jpg,.png,.jpeg"
                {...inputProps}
                {...register}
            />
            <label
                htmlFor={id}
                className="flex flex-col items-center gap-6 border border-dashed rounded border-slate-300 px-6 py-10 text-center cursor-pointer"
            >
                <span className="h-12 inline-flex items-center justify-center self-center rounded px-3">
                    {fileList?.length ? <FaCheck className="text-green-400" size="2rem" /> : <FaRegImage className="text-slate-400" size="2rem" />}
                </span>

                <p className="flex flex-col items-center justify-center gap-1 text-sm">
                    {fileList?.length ? <span className="text-link-primary">File uploaded!</span> : <>
                        <span className="text-link-primary">Upload media</span>
                        <span className="text-slate-600"> PNG, JPG or GIF</span>
                    </>}
                </p>
            </label>

            <p className="text-input-error">{errorMessage}</p>
        </div>
    );
}
