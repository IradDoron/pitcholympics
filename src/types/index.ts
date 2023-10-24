import { Locale } from '@/i18n.config';

export type LangParam = {
	params: { lang: Locale };
};

export type Palette = {
	colors: {
		primary: string;
		secondary: string;
		'primary-hover': string;
	};
};

export type FormattedPalette = {
	colors: {
		[key: string]: string;
	};
};

export interface SidebarLink {
	imgURL: string;
	route: string;
	label: string;
}
