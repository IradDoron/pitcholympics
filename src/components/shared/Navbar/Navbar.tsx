'use client';

import { Button } from '@core';
import { SettingsMenu } from '@shared';
import { LangParam } from '@types';
import { getDictionaryClient } from '@utils';
import { useEffect, useState } from 'react';
import { AuthButton } from './AuthButton';
import { LocaleSwitcher } from './LocaleSwitcher';
import { NavbarLink } from './NavbarLink';
import { Theme } from './Theme';
import { ThemeToggler } from './ThemeToggler';
import { MobileNav } from './mobileNav';

export function Navbar({ params: { lang } }: LangParam) {
    const [isSettingsMenuOpen, setIsSettingsMenuOpen] = useState(false);
    const [isMvp, setIsMvp] = useState(true);
    const [navPages, setNavPages] = useState<NavPage[]>([]);
    const dict = getDictionaryClient(lang);
    const { pages } = dict.shared.navbar;

    type NavPage = {
        url: string;
        label: string;
    };

    const mvpNavPages = [
        { url: `/${lang}`, label: pages.home },
        { url: `/${lang}/games`, label: pages.games },
        { url: `/${lang}/profile`, label: pages.profile },
        { url: `/${lang}/stats`, label: pages.stats },
    ] as NavPage[];

    const futureNavPages = [
        { url: `/${lang}/about`, label: pages.about },
        { url: `/${lang}/courses`, label: pages.courses },
        { url: `/${lang}/dev-info/tech`, label: pages.devInfo },
        { url: `/${lang}/faq`, label: pages.faq },
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
        { url: `/${lang}/q&a`, label: pages['q&a'] },
        { url: `/${lang}/roadmap`, label: pages.roadmap },
        { url: `/${lang}/shop`, label: pages.shop },
        { url: `/${lang}/suggestions`, label: pages.suggestions },
        { url: `/${lang}/website-analytics`, label: pages.websiteAnalytics },
        { url: `/${lang}/teaching`, label: pages.teaching },
        { url: `/${lang}/tools`, label: pages.tools },
    ] as NavPage[];

    const handleNavPagesToggleClick = () => {
        setIsMvp(!isMvp);
    };

    useEffect(() => {
        if (isMvp) {
            setNavPages(mvpNavPages);
        } else {
            const allNavPages = [...mvpNavPages, ...futureNavPages];
            setNavPages(allNavPages);
        }
    }, [isMvp]);

    return (
        <div className='flex flex-col items-center'>
            <Button
                label={isMvp ? 'MVP' : 'All'}
                onClick={handleNavPagesToggleClick}
                size='small'
            />
            <ThemeToggler />
            <div className=' flex flex-row justify-center'>
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
        </div>
    );
}
