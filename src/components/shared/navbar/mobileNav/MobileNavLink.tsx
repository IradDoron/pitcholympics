import Link from 'next/link';

type Props = {
    label: string;
    href: string;
    icon?: React.ReactNode;
    handleClose: () => void;
};

export const MobileNavLink = ({ label, href, icon, handleClose }: Props) => {
    return (
        <Link
            className='flex justify-center items-center gap-4'
            href={href}
            onClick={handleClose}>
            <span className='flex justify-center items-center w-fit h-fit'>
                {icon}
            </span>
            <span className='text-light-background-onDefault dark:text-dark-background-onDefault text-xl'>
                {label}
            </span>
        </Link>
    );
};
