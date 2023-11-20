'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';

type Props = {
    url: string;
    label: string;
};

const CurrentLink = ({ label }: Props) => {
    return (
        <div className='text-light-primary-light dark:text-dark-primary-light font-bold text-big '>
            {label}
            <div className='h-1 bg-light-primary-light dark:bg-dark-primary-light'></div>
        </div>
    );
};

const NotCurrentLink = ({ label }: Props) => {
    return (
        <div className='text-light-surface-onNatural dark:text-dark-surface-onNatural font-bold text-big '>
            {label}
            <div className='h-1 bg-light-surface-onNatural dark:bg-dark-surface-onNatural'></div>
        </div>
    );
};

const NavbarLink = ({ url, label }: Props) => {
    const isCurrent = url === usePathname();
    return (
        <Link href={url}>
            {isCurrent ? (
                <CurrentLink url={url} label={label} />
            ) : (
                <NotCurrentLink url={url} label={label} />
            )}
        </Link>
    );
};

export default NavbarLink;
