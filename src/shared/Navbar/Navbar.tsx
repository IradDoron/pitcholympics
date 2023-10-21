import LocaleSwitcher from '@/shared/LocaleSwitcher';
import { LangParam } from '@/types';
import { getDictionaryServer } from '@/utils/getDictionaryServer';
import Link from 'next/link';

const Navbar = async ({ params: { lang } }: LangParam) => {
	const dict = await getDictionaryServer(lang);
	const { Navbar } = dict.shared;
	const pagesUrls = Object.entries(Navbar.pages);

	return (
		<nav>
			<p>{Navbar.title}</p>
			<ul>
				{pagesUrls.map(([url, title]) => {
					const composedUrl = url === 'home' ? `/${lang}` : `/${lang}/${url}`;
					return (
						<li key={url}>
							<Link href={composedUrl}>{title}</Link>
						</li>
					);
				})}
			</ul>
			<LocaleSwitcher params={{ lang }} />
		</nav>
	);
};

export default Navbar;
