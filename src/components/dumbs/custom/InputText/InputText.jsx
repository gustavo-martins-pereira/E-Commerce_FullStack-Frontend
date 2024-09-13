import React, { useState } from "react";

export function InputText({ label, placeholder, name, inputType }) {
    const [value, setValue] = useState("");

    const handleOnInput = event => {
        const value = event.target.value;

        setValue(value);
    }

    return (
        <div className="flex flex-col gap-2 relative my-4">
            <label htmlFor={name}>{label}</label>
            <input className="border rounded p-2" type={inputType} id={name} value={value} placeholder={placeholder} onChange={handleOnInput} />
        </div>
    );
}
