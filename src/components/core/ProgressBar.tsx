type Props = {
    progress: number;
    max: number;
    width?: string; // w-X where X is a number or a fraction
    height?: string; // h-X where X is a number or a fraction
    className?: string;
};

export const ProgressBar = ({
    progress,
    max,
    className,
    width = 'w-56',
    height = 'h-6',
}: Props) => {
    const percentage = Math.max(0, Math.min(100, (progress / max) * 100));

    return (
        <>
            <div
                className={`p-0.5 rounded-2xl bg-gray-300 dark:bg-dark-background-onDefault ${width} ${className}`}>
                <div
                    className={`${height} rounded-2xl bg-light-tertiary-dark dark:bg-dark-tertiary-dark`}
                    style={{ width: `${percentage}%` }}></div>
            </div>
        </>
    );
};