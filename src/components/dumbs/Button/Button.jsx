export function Button({ children, className, disabled, onClick }) {
    return (
        <button
            className={`btn disabled:opacity-50 disabled:cursor-auto ${className}`}
            disabled={disabled}
            onClick={onClick}
        >
            {children}
        </button>
    );
}
