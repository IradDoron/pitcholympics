'use client';

import { LangParam } from '@/types';
import { getDictionaryClient } from '@/utils/getDictionaryClient';
import { SettingsMenu } from '@shared';
import { useState } from 'react';
import AuthButton from './AuthButton';
import LocaleSwitcher from './LocaleSwitcher';
import NavbarLink from './NavbarLink';
import Theme from './Theme';
import MobileNav from './mobileNav';

const Navbar = ({ params: { lang } }: LangParam) => {
    const [isSettingsMenuOpen, setIsSettingsMenuOpen] = useState(false);
    const dict = getDictionaryClient(lang);
    const { pages } = dict.shared.navbar;

    return (
        <div className='flex flex-row justify-center z-50'>
            <nav className='flex flex-row p-2 sticky w-full bg-light-background-defaultBlur dark:bg-dark-background-defaultBlur '>
                <div className='flex justify-self-start px-10 w-fit'>
                    <LocaleSwitcher params={{ lang }} />
                    <div className='flex-between gap-2'>
                        <Theme />
                    </div>
                </div>
                <ul className='gap-5 hidden sm:flex sm:flex-wrap sm:w-full justify-self-center'>
                    <li>
                        <NavbarLink url={`/${lang}`} label={pages.home} />
                    </li>
                    <li>
                        <NavbarLink
                            url={`/${lang}/games`}
                            label={pages.games}
                        />
                    </li>
                    <li>
                        <NavbarLink
                            url={`/${lang}/about`}
                            label={pages.about}
                        />
                    </li>
                    <li>
                        <NavbarLink
                            url={`/${lang}/stats`}
                            label={pages.stats}
                        />
                    </li>
                    <li>
                        <NavbarLink
                            url={`/${lang}/library`}
                            label={pages.library}
                        />
                    </li>
                    <li>
                        <NavbarLink
                            url={`/${lang}/suggestions`}
                            label={pages.suggestions}
                        />
                    </li>
                    <li>
                        <NavbarLink
                            url={`/${lang}/courses`}
                            label={pages.courses}
                        />
                    </li>
                    <li>
                        <NavbarLink
<<<<<<< HEAD
                            url={`/${lang}/items`}
                            label={pages.items}
=======
                            url={`/${lang}/website-analytics`}
                            label={pages.websiteAnalytics}
                        />
                    </li>
                    <li>
                        <NavbarLink
                            url={`/${lang}/music-history`}
                            label={pages.musicHistory}
                        />
                    </li>
                    <li>
                        <NavbarLink
                            url={`/${lang}/leaderboard`}
                            label={pages.leaderboard}
                        />
                    </li>
                    <li>
                        <NavbarLink
                            url={`/${lang}/pieces`}
                            label={pages.pieces}
                        />
                    </li>
                    <li>
                        <NavbarLink
                            url={`/${lang}/practice`}
                            label={pages.practice}
                        />
                    </li>
                    <li>
                        <NavbarLink
                            url={`/${lang}/instruments`}
                            label={pages.instruments}
>>>>>>> origin/development
                        />
                    </li>
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
