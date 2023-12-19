import type { Locale } from '@/i18n.config';
import 'server-only';

const dictionaries = {
	en: () => import('@/i18n/en.json').then((module) => module.default),
	he: () => import('@/i18n/he.json').then((module) => module.default),
};

export const getDictionaryServer = async (locale: Locale) =>
	dictionaries[locale]();
