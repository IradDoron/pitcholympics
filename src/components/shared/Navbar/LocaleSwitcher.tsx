'use client';

import FlagIsrael from '@/assets/icons/flags/israel-flag-icon.svg';
import FlagUnitedStates from '@/assets/icons/flags/united-states-flag-icon.svg';
import { Locale, i18n } from '@/i18n.config';
import { Menubar } from '@core';
import { redirectedPathName } from '@utils';
import Image from 'next/image';
import Link from 'next/link';
import { usePathname } from 'next/navigation';

export const LANGS_FULL_NAMES = {
    en: 'English',
    he: 'עברית',
};

type Props = {
    params: {
        lang: Locale;
    };
};

export const LocaleSwitcher = ({ params }: Props) => {
    const { lang } = params;
    const pathName = usePathname();
    return (
        <Menubar
            trigger={
                <div className='w-12'>
                    {lang === 'he' ? (
                        <Image
                            src={FlagIsrael}
                            alt='israel'
                            width={24}
                            height={24}
                            className='active-theme'
                        />
                    ) : (
                        <Image
                            src={FlagUnitedStates}
                            alt='usa'
                            width={24}
                            height={24}
                            className='active-theme'
                        />
                    )}
                </div>
            }
            content={
                <div>
                    {i18n.locales.map(locale => {
                        return (
                            <div key={locale}>
                                <Link
                                    key={locale}
                                    href={redirectedPathName(locale, pathName)}>
                                    {LANGS_FULL_NAMES[locale]}
                                </Link>
                            </div>
                        );
                    })}
                </div>
            }
        />
    );
};
