'use client';

import { LANGS_FULL_NAMES } from '@/constants';
import { i18n } from '@/i18n.config';
import { LangParam } from '@/types';
import { getDictionaryClient } from '@/utils/getDictionaryClient';
import { redirectedPathName } from '@/utils/redirectedPathName';
import Link from 'next/link';
import { usePathname } from 'next/navigation';

const LocaleSwitcher = ({ params: { lang } }: LangParam) => {
	const pathName = usePathname();
	const dict = getDictionaryClient(lang);

	return (
		<div>
			<p>{dict.shared.LocaleSwitcher.Language}</p>
			<ul>
				{i18n.locales.map((locale) => {
					return (
						<li key={locale}>
							<Link key={locale} href={redirectedPathName(locale, pathName)}>
								{LANGS_FULL_NAMES[locale]}
							</Link>
						</li>
					);
				})}
			</ul>
		</div>
	);
};

export default LocaleSwitcher;
