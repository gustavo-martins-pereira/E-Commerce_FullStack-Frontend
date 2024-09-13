import { useState } from "react";

export function TextArea({ label, placeholder, name }) {
    const [value, setValue] = useState("");

    const handleOnInput = event => {
        const value = event.target.value;

        setValue(value);
    }

    return (
        <div className="flex flex-col gap-2 relative my-4">
            <label htmlFor={name}>{label}</label>
            <textarea className="border rounded p-2" id={name} value={value} placeholder={placeholder} onChange={handleOnInput}></textarea>
        </div>
    );
}
