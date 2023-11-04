import Theme from './Theme';
import LocaleSwitcher from './LocaleSwitcher';
import { LangParam } from '@/types';
import { getDictionaryServer } from '@/utils/getDictionaryServer';
import MobileNav from '@/components/shared/navbar/MobileNav';
import NavbarLink from './NavbarLink';

const Navbar = async ({ params: { lang } }: LangParam) => {
	const dict = await getDictionaryServer(lang);
	const { navbar } = dict.shared;
	const pagesUrls = Object.entries(navbar.pages);

	return (
		<div className='flex justify-center'>
			<nav className='grid w-full grid-cols-3 p-2 fixed max-w-[1400px] '>
				<div className='flex justify-self-start'>
					<div
						style={{
							border: 'solid salmon 2px',
							padding: '12px',
							width: '0px',
							height: '0px',
						}}
					></div>
					<LocaleSwitcher params={{ lang }} />

					<div className='flex-between gap-5'>
						<Theme />
					</div>
				</div>
				<ul className='gap-5 hidden sm:flex justify-self-center'>
					{pagesUrls.map(([url, title]) => {
						const composedUrl = url === 'home' ? `/${lang}` : `/${lang}/${url}`;
						return (
							<li key={url}>
								<NavbarLink url={composedUrl} label={title} />
							</li>
						);
					})}
				</ul>
				<div></div>

				<MobileNav lang={lang} />
			</nav>
		</div>
	);
};

export default Navbar;
