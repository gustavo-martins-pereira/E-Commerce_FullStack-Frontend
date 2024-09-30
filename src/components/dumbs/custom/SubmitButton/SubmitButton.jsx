export function SubmitButton({ className, value }) {
    return (
        <input className={`btn ${className}`} type="submit" value={value} />
    );
}