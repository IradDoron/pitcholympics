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

export type SuggestionPostComment = {
    content: string;
    authorId: string;
    date: number;
    reactions: Reactions;
    comments: SuggestionPostComment[];
} | null;

export type SuggestionPost = {
    authorId: string;
    title: string;
    content: string;
    category: string;
    reactions: Reactions;
    comments: SuggestionPostComment[];
};

export type IconProps = {
    color?: MainColorCategories;
    size?: 'small' | 'medium' | 'large';
    onClick?: () => void;
    className?: string;
};

export type MainColorCategories = 'primary' | 'secondary' | 'tertiary';

export type Vote = {
    userId: string;
    value: 1 | -1;
};

export type FAQ = {
    _id: string;
    originalQuestion: string;
    votes: Vote[];
    question: {
        en: string;
        he: string;
    };
    answer: {
        en: string;
        he: string;
    };
};

export * from './achievements';
export * from './gameItems';
export * from './gameLogic';
export * from './games';
export * from './patchNote';
export * from './pianoTypes';
export * from './piecesTypes';
