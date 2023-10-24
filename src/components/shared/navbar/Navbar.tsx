import { SignedIn, UserButton } from '@clerk/nextjs';
import Image from 'next/image';
import Link from 'next/link';
import React from 'react';
import Theme from './Theme';
import LocaleSwitcher from './LocaleSwitcher';
import { LangParam } from '@/types';
import { getDictionaryServer } from '@/utils/getDictionaryServer';

const Navbar = async ({ params: { lang } }: LangParam) => {
	const dict = await getDictionaryServer(lang);
	const { Navbar } = dict.shared;
	const pagesUrls = Object.entries(Navbar.pages);

	return (
		<nav className='flex justify-center items-center w-full flex-row dark:bg-dark-400'>
			<ul className='flex justify-center items-center gap-5'>
				{pagesUrls.map(([url, title]) => {
					const composedUrl = url === 'home' ? `/${lang}` : `/${lang}/${url}`;
					return (
						<li key={url}>
							<Link
								className='text-dark-100 dark:text-light-800'
								href={composedUrl}
							>
								{title}
							</Link>
						</li>
					);
				})}
			</ul>
			<LocaleSwitcher params={{ lang }} />

			<div className='flex-between gap-5'>
				<Theme />
			</div>
		</nav>
	);
};

export default Navbar;
