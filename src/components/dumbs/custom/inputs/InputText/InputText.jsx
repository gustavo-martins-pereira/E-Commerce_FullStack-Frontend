import React from "react";

export function InputText({ label, id, type, placeholder, register, errorMessage }) {
    return (
        <div className="flex flex-col gap-2 relative">
            <label className="font-semibold" htmlFor={id}>{label}</label>
            <input className="border rounded p-2" id={id} type={type} placeholder={placeholder} {...register} />
            <p className="text-input-error">{errorMessage}</p>
        </div>
    );
}
