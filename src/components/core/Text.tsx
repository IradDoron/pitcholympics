type Props = {
    children: React.ReactNode;
    className?: string;
};

export function Text({ children, className = '' }: Props) {
    return (
        <p
            className={`text-light-surface-onPrimary dark:text-dark-surface-onPrimary font-inter ${className}`}>
            {children}
        </p>
    );
}
