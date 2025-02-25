interface ButtonProps {
    children: React.ReactNode;
    className?: string;
    disabled?: boolean;
    onClick?: () => void;
}

export function Button({ children, className, disabled = false, onClick = () => {} }: ButtonProps) {
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
