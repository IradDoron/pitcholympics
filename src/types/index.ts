import { Locale } from '@/i18n.config';
import { GameNames } from '.';
import { StaticImageData } from 'next/image';

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
    pitchOptions: string[];
    melody: number[];
};

export type Game = {
    name: GameNames;
    game: MemoTheMeloGame | PitchCatchGame;
};

export type MemoTheMeloStage = MemoTheMeloLevel[];

export type MemoTheMeloGame = MemoTheMeloStage[];

export type PitchCatchLevel = PitchCatchQuestion[];

export type PitchCatchStage = PitchCatchLevel[];

export type PitchCatchGame = PitchCatchStage[];

export type PitchCatchQuestion = {
    currPitch: string[];
    userOptions: string[][];
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

export * from './gameItems';
export * from './achievements';
export * from './gameLogic';
export * from './memo-blocks';
