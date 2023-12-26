'use client';

import { LangParam } from '@/types';
import { getDictionaryClient } from '@/utils/getDictionaryClient';
import { SettingsMenu } from '@shared';
import { useState } from 'react';
import Accesibility from '../accessibility/Accesibility';
import AuthButton from './AuthButton';
import LocaleSwitcher from './LocaleSwitcher';
import NavbarLink from './NavbarLink';
import Theme from './Theme';
import MobileNav from './mobileNav';

const Navbar = ({ params: { lang } }: LangParam) => {
    const [isSettingsMenuOpen, setIsSettingsMenuOpen] = useState(false);
    const dict = getDictionaryClient(lang);
    const { pages } = dict.shared.navbar;

    const navPages = [
        { url: `/${lang}`, label: pages.home },
        { url: `/${lang}/about`, label: pages.about },
        { url: `/${lang}/courses`, label: pages.courses },
        { url: `/${lang}/dev-info/tech`, label: pages.devInfo },
        { url: `/${lang}/faq`, label: pages.faq },
        { url: `/${lang}/games`, label: pages.games },
        { url: `/${lang}/how-to-contribute`, label: pages.howToContribute },
        { url: `/${lang}/instruments`, label: pages.instruments },
        { url: `/${lang}/items`, label: pages.items },
        { url: `/${lang}/leaderboard`, label: pages.leaderboard },
        { url: `/${lang}/library`, label: pages.library },
        { url: `/${lang}/music-history`, label: pages.musicHistory },
        { url: `/${lang}/musical-patterns`, label: pages.musicalPatterns },
        { url: `/${lang}/patch-note`, label: pages.patchNote },
        { url: `/${lang}/pieces`, label: pages.pieces },
        { url: `/${lang}/polls`, label: pages.polls },
        { url: `/${lang}/practice`, label: pages.practice },
        { url: `/${lang}/profile`, label: pages.profile },
        { url: `/${lang}/q&a`, label: pages['q&a'] },
        { url: `/${lang}/roadmap`, label: pages.roadmap },
        { url: `/${lang}/shop`, label: pages.shop },
        { url: `/${lang}/stats`, label: pages.stats },
        { url: `/${lang}/suggestions`, label: pages.suggestions },
        { url: `/${lang}/website-analytics`, label: pages.websiteAnalytics },
        { url: `/${lang}/teaching`, label: pages.teaching },
    ];

    return (
        <div className=' flex flex-row justify-center'>
            <Accesibility />
            <nav className='flex flex-row p-2 sticky w-full bg-light-background-defaultBlur dark:bg-dark-background-defaultBlur '>
                <div className='flex justify-self-start px-10 w-fit'>
                    <LocaleSwitcher params={{ lang }} />
                    <div className='flex-between gap-2'>
                        <Theme />
                    </div>
                </div>
                <ul className='gap-5 hidden sm:flex sm:flex-wrap sm:w-full justify-self-center'>
                    {navPages.map(({ url, label }) => (
                        <NavbarLink key={url} url={url} label={label} />
                    ))}
                </ul>
                <div className='flex justify-self-end pe-10 relative w-fit'>
                    <AuthButton
                        isSettingsMenuOpen={isSettingsMenuOpen}
                        setIsSettingsMenuOpen={setIsSettingsMenuOpen}
                    />
                    <SettingsMenu
                        isOpen={isSettingsMenuOpen}
                        setIsOpen={setIsSettingsMenuOpen}
                        lang={lang}
                    />
                </div>
                <MobileNav lang={lang} />
            </nav>
        </div>
    );
};

export default Navbar;
