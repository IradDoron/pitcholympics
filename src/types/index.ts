import { Locale } from '@/i18n.config';
import { StaticImageData } from 'next/image';
import { GameNames } from '.';
import { MemoBlocksGame, MemoTheMeloGame, PitchCatchGame } from './games';

export type FilterObject = {
    [key: string]: boolean;
};

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

export type Game = {
    name: GameNames;
    game: MemoTheMeloGame | PitchCatchGame | MemoBlocksGame;
};

export type ThemeMode = 'light' | 'dark' | 'system';

export type CollaboratorRoles =
    | 'full-stack-developer'
    | 'designer'
    | 'project-manager';

export type Collaborator = {
    id: string;
    firstName: string;
    lastName: string;
    roles: CollaboratorRoles[];
    city: string;
    image: StaticImageData;
    lookingFor?: string;
    github?: string;
    linkedin?: string;
    portfolio?: string;
};

export type IconProps = {
    color?: MainColorCategories;
    size?: 'small' | 'medium' | 'large';
    onClick?: () => void;
    className?: string;
};

export type MainColorCategories = 'primary' | 'secondary' | 'tertiary';

export * from './achievements';
export * from './gameItems';
export * from './gameLogic';
export * from './games';
export * from './pianoTypes';
