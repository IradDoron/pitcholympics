'use client';

import { LANGS_FULL_NAMES } from '@/constants';
import { i18n } from '@/i18n.config';
import { LangParam } from '@/types';
import { redirectedPathName } from '@/utils/redirectedPathName';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { Menubar } from '@/components/core';
import Image from 'next/image';
import FlagIsrael from '@/assets/icons/flags/israel-flag-icon.svg';
import FlagUnitedStates from '@/assets/icons/flags/united-states-flag-icon.svg';

const LocaleSwitcher = ({ params: { lang } }: LangParam) => {
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

export default LocaleSwitcher;
