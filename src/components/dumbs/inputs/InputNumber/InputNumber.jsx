import React from "react";

export function InputNumber({ inputNumberStyles, label, id, inputStyles, step, placeholder, disabled, min, register, errorMessage }) {
    return (
        <div className={`flex flex-col gap-2 relative ${inputNumberStyles}`}>
            <label className="font-semibold" htmlFor={id}>{label}</label>
            <input
                className={`border rounded p-2 disabled:cursor-not-allowed disabled:opacity-75 ${inputStyles}`}
                id={id}
                type="number"
                step={step}
                placeholder={placeholder}
                disabled={disabled}
                min={min}
                {...register}
            />
            <p className="text-input-error">{errorMessage}</p>
        </div>
    );
}
