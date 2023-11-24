'use client';

import {
    Sheet,
    SheetContent,
    SheetClose,
    SheetTrigger,
} from '@/components/ui/sheet';
import Image from 'next/image';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { getDictionaryClient } from '@/utils/getDictionaryClient';
import { Locale } from '@/i18n.config';
import HamburgerIcon from '@/components/icons/hamburgerIcon';

type NavContentProps = {
    lang: Locale;
};

const NavContent = ({ lang }: NavContentProps) => {
    const pathname = usePathname();

    const dict = getDictionaryClient(lang);

    const { sidebarLinks } = dict.shared.navbar.MobileNav;

    return (
        <section className='flex h-full flex-col gap-6 pt-16'>
            {sidebarLinks.map(item => {
                const isActive =
                    (pathname.includes(item.route) && item.route.length > 1) ||
                    pathname === item.route;

                return (
                    <SheetClose asChild key={item.route}>
                        <Link
                            href={`/${lang}/${item.route}`}
                            className={`${
                                isActive
                                    ? 'primary-gradient rounded-lg text-light-900'
                                    : 'text-dark300_light900'
                            } flex items-center justify-start gap-4 bg-transparent p-4`}>
                            <Image
                                src={item.imgURL}
                                alt={item.label}
                                width={20}
                                height={20}
                                className={`${isActive ? '' : 'invert-colors'}`}
                            />
                            <p
                                className={`${
                                    isActive ? 'base-bold' : 'base-medium'
                                }`}>
                                {item.label}
                            </p>
                        </Link>
                    </SheetClose>
                );
            })}
        </section>
    );
};

type MobileNavProps = {
    lang: Locale;
};

const MobileNav = ({ lang }: MobileNavProps) => {
    return (
        <Sheet>
            <SheetTrigger asChild>
                <HamburgerIcon className='sm:hidden cursor-pointer' />
            </SheetTrigger>
            <SheetContent
                side='left'
                className='background-light900_dark200 border-none'>
                <div>
                    <SheetClose asChild>
                        <NavContent lang={lang} />
                    </SheetClose>
                </div>
            </SheetContent>
        </Sheet>
    );
};

export default MobileNav;
