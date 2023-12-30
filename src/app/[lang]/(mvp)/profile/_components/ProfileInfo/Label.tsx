type Props = {
    label: string;
    children: React.ReactNode;
    className?: string;
};

export const Label = ({ label, children, className = '' }: Props) => {
    return (
        <label
            className={`w-full text-light-surface-onPrimary dark:text-dark-surface-onPrimary ${className}`}>
            <span>{label}:</span>
            {children}
        </label>
    );
};
