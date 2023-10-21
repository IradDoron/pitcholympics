import { Locale } from '@/i18n.config';

export const getHtmlDirection = (lang: Locale) => {
	switch (lang) {
		case 'he':
			return 'rtl';
		case 'en':
			return 'ltr';
		default:
			return 'ltr';
	}
};
