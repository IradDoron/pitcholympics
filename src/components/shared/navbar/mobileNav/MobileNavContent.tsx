'use client';

import { Locale } from '@/i18n.config';
import { getDictionaryClient } from '@/utils/getDictionaryClient';
import MobileNavLink from './MobileNavLink';

type NavLinkProps = {
    label: string;
    href: string;
    icon?: React.ReactNode;
};

type Props = {
    lang: Locale;
    handleClose: () => void;
};

const MobileNavContent = ({ lang, handleClose }: Props) => {
    const dict = getDictionaryClient(lang);

    const { sidebarLinks } = dict.shared.navbar.MobileNav;

    const navLinks: NavLinkProps[] = [
        {
            label: sidebarLinks.home,
            href: `/${lang}`,
        },
        {
            label: sidebarLinks.about,
            href: `/${lang}/about`,
        },
        {
            label: sidebarLinks.stats,
            href: `/${lang}/stats`,
        },
    ];

    return (
        <div className='flex flex-col justify-center'>
            {navLinks.map(link => {
                const { label, href, icon } = link;
                return (
                    <MobileNavLink
                        key={label}
                        label={label}
                        href={href}
                        icon={icon}
                        handleClose={handleClose}
                    />
                );
            })}
        </div>
    );
};

export default MobileNavContent;
