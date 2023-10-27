'use client';

import { LANGS_FULL_NAMES } from '@/constants';
import { i18n } from '@/i18n.config';
import { LangParam } from '@/types';
import { getDictionaryClient } from '@/utils/getDictionaryClient';
import { redirectedPathName } from '@/utils/redirectedPathName';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import {
	Menubar,
	MenubarContent,
	MenubarItem,
	MenubarMenu,
	MenubarTrigger,
} from '@/components/ui/menubar';
import Image from 'next/image';

const LocaleSwitcher = ({ params: { lang } }: LangParam) => {
	const pathName = usePathname();
	return (
		<Menubar className='relative border-none bg-transparent shadow-none '>
			<MenubarMenu>
				<MenubarTrigger className='focus:bg-light-900 data-[state=open]:bg-light-900 dark:focus:bg-dark-200 dark:data-[state=open]:bg-dark-200 w-12'>
					{lang === 'he' ? (
						<Image
							src='/assets/icons/flags/israel-flag-icon.svg'
							alt='israel'
							width={24}
							height={24}
							className='active-theme'
						/>
					) : (
						<Image
							src='/assets/icons/flags/united-states-flag-icon.svg'
							alt='usa'
							width={24}
							height={24}
							className='active-theme'
						/>
					)}
				</MenubarTrigger>
				<MenubarContent className='absolute right-[-3rem] mt-3 min-w-[120px] rounded border py-2 dark:border-dark-400 dark:bg-dark-300'>
					{i18n.locales.map((locale) => {
						return (
							<MenubarItem key={locale}>
								<Link key={locale} href={redirectedPathName(locale, pathName)}>
									{LANGS_FULL_NAMES[locale]}
								</Link>
							</MenubarItem>
						);
					})}
				</MenubarContent>
			</MenubarMenu>
		</Menubar>
	);
};

export default LocaleSwitcher;
