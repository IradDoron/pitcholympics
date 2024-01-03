import { GameAnalytics, GameProgress } from './games';

export type Resources = {
    coins: number;
    musicalTreasures: number;
    gems: number;
    health: number;
};

export type Price = {
    [resource in keyof Resources]: number;
};

export type User = {
    id: string;
    email: string;
    name: string;
    picture: string;
    gender?: string;
    locale?: string;
    timezone?: string;
    gameProgress: GameProgress;
    xp: number;
    userLevel: number;
    attributes: {
        musicalMemory: number;
        pitchRecognition: number;
    };
    achievements: {
        [achievementId: string]: {
            criteriaStatus: boolean[];
            completeAmount: number;
        };
    };
    gameItems: {
        [gameItemId: string]: {
            quantity: number;
        };
    };
    resources: Resources;

    gamesAnalytics: GameAnalytics[];
};
