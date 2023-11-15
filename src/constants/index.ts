import { Colors, Matrix, SidebarLink, ThemeMode } from '@/types';

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
        colorsMatrix.push(
            Array(columns).fill({
                note: letters[i],
                isActive: true,
                isTied: false,
            }),
        );
    }

    return colorsMatrix;
}

export const colorsTemplateMatrix = setColorsMatrix();

export const colors: Colors = {
    C: 'bg-light-notes-C dark:bg-dark-notes-C',
    D: 'bg-light-notes-D dark:bg-dark-notes-D',
    E: 'bg-light-notes-E dark:bg-dark-notes-E',
    F: 'bg-light-notes-F dark:bg-dark-notes-F',
    G: 'bg-light-notes-G dark:bg-dark-notes-G',
    A: 'bg-light-notes-A dark:bg-dark-notes-A',
    B: 'bg-light-notes-B dark:bg-dark-notes-B',
};

export const BIG_NUMBER_FOR_MEMO_THE_MELO = 1000;
