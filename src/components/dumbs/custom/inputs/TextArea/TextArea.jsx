export function TextArea({ label, placeholder, name, register, errorMessage }) {
    return (
        <div className="flex flex-col gap-2 relative">
            <label className="font-semibold" htmlFor={name}>{label}</label>
            <textarea className="border rounded p-2" id={name} placeholder={placeholder} {...register}></textarea>
            <p className="text-input-error">{errorMessage}</p>
        </div>
    );
}
