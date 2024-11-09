import React from "react";

export function InputText({ label, id, type, step, placeholder, disabled, register, errorMessage }) {
    return (
        <div className="flex flex-col gap-2 relative">
            <label className="font-semibold" htmlFor={id}>{label}</label>
            <input className="border rounded p-2 disabled:cursor-not-allowed disabled:opacity-75" id={id} type={type} step={step} placeholder={placeholder} disabled={disabled} {...register} />
            <p className="text-input-error">{errorMessage}</p>
        </div>
    );
}
