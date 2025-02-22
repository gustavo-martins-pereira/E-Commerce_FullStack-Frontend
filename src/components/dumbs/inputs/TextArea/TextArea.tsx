export function TextArea({ label, placeholder, name, disabled, register, errorMessage }) {
    return (
        <div className="flex flex-col gap-2 relative">
            <label className="font-semibold" htmlFor={name}>{label}</label>
            <textarea className="border rounded p-2 disabled:cursor-not-allowed disabled:opacity-75" id={name} placeholder={placeholder} disabled={disabled} {...register}></textarea>
            <p className="text-input-error">{errorMessage}</p>
        </div>
    );
}
