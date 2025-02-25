interface BadgeNumberProps {
    number: number;
    accessibilityText: string;
    children: React.ReactNode;
}

export function BadgeNumber({ number, accessibilityText, children }: BadgeNumberProps) {
    return (
        <span className="relative">
            <span className="bg-badge w-4 h-4 absolute top-0 right-0 flex justify-center items-center rounded-full -translate-y-1/4">
                {number}
                <span className="sr-only">{accessibilityText}</span>
            </span>

            {children}
        </span>
    )
}
