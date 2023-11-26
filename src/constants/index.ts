import {
    Colors,
    IconProps,
    Matrix,
    SidebarLink,
    // ThemeModeDragEvent,
} from '@/types';
import SunIcon from '@/components/icons/sunIcon';
import MoonIcon from '@/components/icons/moonIcon/MoonIcon';
import GearIcon from '@/components/icons/gearIcon';
import { MatrixAsaf } from '@/types';
import { ThemeMode } from '@/types';

export const LANGS_FULL_NAMES = {
    en: 'English',
    he: 'עברית',
};

type ThemesObject = {
    value: ThemeMode;
    label: string;
    // eslint-disable-next-line no-unused-vars
    icon: ({ color, size }: IconProps) => JSX.Element;
};

export const themes = [
    { value: 'light', label: 'Light', icon: SunIcon },
    { value: 'dark', label: 'Dark', icon: MoonIcon },
    { value: 'system', label: 'System', icon: GearIcon },
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
    //let colorsMatrix: Matrix = { id: crypto.randomUUID(), data: [] };

    for (let i = 0; i < rows; i++) {
        //colorsMatrix.push(
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

function setColorsMatrixAsaf() {
    const rows = 8;
    const columns = 4;
    const letters = ['C', 'B', 'A', 'G', 'F', 'E', 'D', 'C'];
    //let colorsMatrix: Matrix = [];
    let colorsMatrix: MatrixAsaf = { id: crypto.randomUUID(), data: [] };

    for (let i = 0; i < rows; i++) {
        //colorsMatrix.push(
        colorsMatrix.data.push(
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
export const colorsTemplateMatrixAsaf = setColorsMatrixAsaf();

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

export const DOMAINS = {
    DEV: 'http://localhost:3000',
    PRODUCTION: 'https://pitcholympics.vercel.app',
};

export const CURRENT_DOMAIN = DOMAINS.DEV;
