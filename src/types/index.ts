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

export type SidebarLink = {
	imgURL: string;
	route: string;
	label: string;
};

export type MemoTheMeloLevel = {
	notesAmount: number;
	melody: number[];
};

export type MemoTheMeloStage = MemoTheMeloLevel[];

export type MemoTheMeloGame = MemoTheMeloStage[];

export type PitchCatchLevel = PitchCatchQuestion[];

export type PitchCatchStage = PitchCatchLevel[];

export type PitchCatchGame = PitchCatchStage[];

export type PitchCatchQuestion = {
	pitch: number[];
	options: number[][];
};

export type ThemeMode = 'light' | 'dark' | 'system';

export * from './gameItems';
export * from './achievements';
export * from './gameLogic';
