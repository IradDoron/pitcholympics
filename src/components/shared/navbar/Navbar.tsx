'use client';

import Theme from './Theme';
import LocaleSwitcher from './LocaleSwitcher';
import { LangParam } from '@/types';
import { getDictionaryClient } from '@/utils/getDictionaryClient';
import MobileNav from '@/components/shared/navbar/MobileNav';
import NavbarLink from './NavbarLink';
import AuthButton from './AuthButton';

const Navbar = ({ params: { lang } }: LangParam) => {
  const dict = getDictionaryClient(lang);
  const { navbar } = dict.shared;
  const pagesUrls = Object.entries(navbar.pages);

  return (
    <div className="flex flex-row justify-center">
      <nav className="grid grid-cols-3 p-2 fixed w-full">
        <div className="flex justify-self-start px-10">
          <LocaleSwitcher params={{ lang }} />

          <div className="flex-between gap-5">
            <Theme />
          </div>
        </div>
        <ul className="gap-5 hidden sm:flex justify-self-center">
          {pagesUrls.map(([url, title]) => {
            const composedUrl = url === "home" ? `/${lang}` : `/${lang}/${url}`;
            return (
              <li key={url}>
                <NavbarLink url={composedUrl} label={title} />
              </li>
            );
          })}
        </ul>
        <div className="flex justify-self-end pe-10">
          <AuthButton />
        </div>
        <MobileNav lang={lang} />
      </nav>
    </div>
  );
};

export default Navbar;
