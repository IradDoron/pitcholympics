import { Matrix, SidebarLink, ThemeMode } from '@/types';

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

export const ICON_SIZES = {
    small: 'w-6 h-6',
    medium: 'w-8 h-8',
    large: 'w-12 h-12',
};

export const ICON_COLORS = {
    primary: 'fill-light-primary-main dark:fill-dark-primary-main',
    secondary: 'fill-light-secondary-main dark:fill-dark-secondary-main',
    tertiary: 'fill-light-tertiary-main dark:fill-dark-tertiary-main',
};

function setColorsMatrix() {
	const rows = 8;
	const columns = 4;
	const letters = ['C', 'B', 'A', 'G', 'F', 'E', 'D', 'C'];
	let colorsMatrix: Matrix = [];

	for (let i = 0; i < rows; i++) {
		colorsMatrix.push([]);
		for (let j = 0; j < columns; j++) {
			colorsMatrix[i].push(letters[i % letters.length]);
		}
	}

	return colorsMatrix;
};

export const colorsTemplateMatrix = setColorsMatrix();
export const BIG_NUMBER_FOR_MEMO_THE_MELO = 1000;
