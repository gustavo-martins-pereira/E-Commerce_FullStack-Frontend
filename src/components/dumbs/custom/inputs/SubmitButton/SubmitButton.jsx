export function SubmitButton({ className, value, disabled }) {
    return (
        <input className={`btn disabled:opacity-75 ${className}`} type="submit" value={value} disabled={disabled} />
    );
}