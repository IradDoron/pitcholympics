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

type NavContentProps = {
	lang: Locale;
};

const NavContent = ({ lang }: NavContentProps) => {
	const pathname = usePathname();

	const dict = getDictionaryClient(lang);

	const { sidebarLinks } = dict.shared.navbar.MobileNav;

	return (
		<section className='flex h-full flex-col gap-6 pt-16'>
			{sidebarLinks.map((item) => {
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
							} flex items-center justify-start gap-4 bg-transparent p-4`}
						>
							<Image
								src={item.imgURL}
								alt={item.label}
								width={20}
								height={20}
								className={`${isActive ? '' : 'invert-colors'}`}
							/>
							<p className={`${isActive ? 'base-bold' : 'base-medium'}`}>
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
				<svg
					width='24'
					height='24'
					viewBox='0 0 24 24'
					fill='#fff'
					xmlns='http://www.w3.org/2000/svg'
					className='invert-colors sm:hidden cursor-pointer'
				>
					<path
						d='M20.05 11H3.95C3.42533 11 3 11.4253 3 11.95V12.05C3 12.5747 3.42533 13 3.95 13H20.05C20.5747 13 21 12.5747 21 12.05V11.95C21 11.4253 20.5747 11 20.05 11Z'
						className='bg-dark-background-default dark:bg-light-background-default'
					/>
					<path
						d='M20.05 16H3.95C3.42533 16 3 16.4253 3 16.95V17.05C3 17.5747 3.42533 18 3.95 18H20.05C20.5747 18 21 17.5747 21 17.05V16.95C21 16.4253 20.5747 16 20.05 16Z'
						fill='#FFF'
					/>
					<path
						d='M20.05 6H3.95C3.42533 6 3 6.42533 3 6.95V7.05C3 7.57467 3.42533 8 3.95 8H20.05C20.5747 8 21 7.57467 21 7.05V6.95C21 6.42533 20.5747 6 20.05 6Z'
						fill='#FFF'
					/>
				</svg>

				{/* <Image
					src='/assets/icons/hamburger.svg'
					width={36}
					height={36}
					alt='Menu'
					className='invert-colors sm:hidden '
					style={{ cursor: 'pointer', border: 'solid red 2px' }}
				/> */}
			</SheetTrigger>
			<SheetContent
				side='left'
				className='background-light900_dark200 border-none'
			>
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
