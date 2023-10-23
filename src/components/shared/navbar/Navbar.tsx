import { SignedIn, UserButton } from '@clerk/nextjs';
import Image from 'next/image';
import Link from 'next/link';
import React from 'react';
import Theme from './Theme';
import LocaleSwitcher from '@/components/shared/LocaleSwitcher';
import { LangParam } from '@/types';
import { getDictionaryServer } from '@/utils/getDictionaryServer';

const Navbar = async ({ params: { lang } }: LangParam) => {
	const dict = await getDictionaryServer(lang);
	const { Navbar } = dict.shared;
	const pagesUrls = Object.entries(Navbar.pages);
	const theme = 'dark';

	return (
		<nav className='flex-between background-light900_dark200 fixed z-50 w-full gap-5 p-6 shadow-light-300 dark:shadow-none sm:px-12'>
			<ul>
				{pagesUrls.map(([url, title]) => {
					const composedUrl = url === 'home' ? `/${lang}` : `/${lang}/${url}`;
					return (
						<li key={url}>
							<button className={`bg-${theme}:primary`}>Click</button>
							<Link href={composedUrl}>{title}</Link>
						</li>
					);
				})}
			</ul>
			<LocaleSwitcher params={{ lang }} />

			<Link href='/' className='flex items-center gap-1'>
				<Image
					src='/assets/images/site-logo.svg'
					width={23}
					height={23}
					alt='DevFlow'
				/>

				<p className='h2-bold font-spaceGrotesk text-dark-100 dark:text-light-900 max-sm:hidden'>
					Dev <span className='text-primary-500'>Overflow</span>
				</p>
			</Link>

			<div className='flex-between gap-5'>
				<Theme />
			</div>
		</nav>
	);
};

export default Navbar;
