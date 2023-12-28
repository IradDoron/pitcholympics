import { Locale } from '@/i18n.config';
import { StaticImageData } from 'next/image';
import * as Tone from 'tone';
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
export type ReactionType =
    | 'like'
    | 'dislike'
    | 'love'
    | 'haha'
    | 'wow'
    | 'sad'
    | 'angry';

export type Reactions =
    | {
          // eslint-disable-next-line no-unused-vars
          [key in ReactionType]: string[]; //array of userIds
      }
    | null;

export type PostComment = {
    id: string;
    content: string;
    authorId: string;
    date: number | null;
    reactions: Reactions;
    comments: PostComment[];
};

export type Post = {
    authorId: string;
    title: string;
    content: string;
    tags: string[];
    category: string;
    reactions: Reactions;
    comments: PostComment[];
};

export type IconProps = {
    color?: MainColorCategories;
    size?: 'small' | 'medium' | 'large' | 'extraLarge';
    onClick?: () => void;
    isActive?: boolean;
    className?: string;
    exit?: object;
};

export type MainColorCategories = 'primary' | 'secondary' | 'tertiary';

export type Vote = {
    userId: string;
    value: 1 | -1;
};

export type FAQ = {
    _id: string;
    originalQuestion: string;
    votes: { [key: string]: 1 | -1 | 0 };
    question: {
        en: string;
        he: string;
    };
    answer: {
        en: string;
        he: string;
    };
};

export type IToneSampler = {
    urls: Tone.SamplerOptions['urls'];
    baseUrl: Tone.SamplerOptions['baseUrl'];
};

export * from './achievements';
export * from './gameItems';
export * from './gameLogic';
export * from './games';
export * from './libraryPageTypes';
export * from './patchNote';
export * from './pianoTypes';
export * from './piecesTypes';
