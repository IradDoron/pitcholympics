import Divider from './Divider';

type Props = {
    children: React.ReactNode;
    isLast?: boolean;
    className?: string;
    // eslint-disable-next-line no-unused-vars
    onClick?: (e: React.MouseEvent<HTMLDivElement>) => void;
};

const MenuSection = ({
    children,
    isLast = false,
    className = '',
    onClick,
}: Props) => {
    return (
        <>
            <div
                className={`flex flex-col gap-2 w-full ${className}`}
                onClick={onClick}>
                {children}
            </div>
            {!isLast && <Divider />}
        </>
    );
};

export default MenuSection;
