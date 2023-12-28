import { Locale } from '@/i18n.config';
import en from '@/i18n/en.json';
import he from '@/i18n/he.json';

export const getDictionaryClient = (locale: Locale) => {
	switch (locale) {
		case 'en':
			return en;
		case 'he':
			return he;
		default:
			return en;
	}
};
