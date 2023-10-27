import { SidebarLink, ThemeMode } from '@/types';

export const LANGS_FULL_NAMES = {
	en: 'English',
	he: 'עברית',
};

type ThemesObject = {
	value: ThemeMode;
	label: string;
	icon: string;
};

export const themes = [
	{ value: 'light', label: 'Light', icon: '/assets/icons/sun.svg' },
	{ value: 'dark', label: 'Dark', icon: '/assets/icons/moon.svg' },
	{ value: 'system', label: 'System', icon: '/assets/icons/computer.svg' },
] as ThemesObject[];
