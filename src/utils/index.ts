import { LevelStatus } from '@/types';
import { Locale } from '@/i18n.config';
import { AppRouterInstance } from 'next/dist/shared/lib/app-router-context.shared-runtime';

export const getXpForLevel = (level: number): number => {
    const x = 0.07;
    const y = 2;
    // formula: ( level / x ) ^ y
    return Math.floor(Math.pow(level / x, y));
};

export const isTwoArraysEqual = (arr1: any[], arr2: any[]): boolean => {
    if (arr1.length !== arr2.length) return false;
    return arr1.every((item, index) => item === arr2[index]);
};

export const calcLevelScore = (stage: number, level: number) => {
    const score = stage * 4 + level * 2;
    return score;
};

export const isLevelExisting = (
    stage: number,
    level: number,
    gameData: {
        [key: string]: LevelStatus;
    },
) => {
    const levelKey = `${stage}_${level}`;

    if (gameData[levelKey]) {
        return true;
    } else {
        return false;
    }
};

export const handleEndLevel = (
    stage: number,
    level: number,
    lang: Locale,
    game: 'memo-the-melo' | 'pitch-catch' | 'memo-blocks',
    status: 'win' | 'lose',
    router: AppRouterInstance,
) => {
    if (status === 'win') {
        const score = calcLevelScore(stage, level);
        localStorage.setItem('score', score.toString());
        router.push(`/${lang}/games/${game}/${stage}/${level}/win`);
    } else {
        localStorage.setItem('score', '0');
        router.push(`/${lang}/games/${game}/${stage}/${level}/lose`);
    }
};

/**
 * @param pitches array of pitches, for example ['440', '880', '220', '440', '880', '220']
 * @param pitchOptions array of pitches options, for example ['440', '880', '220']
 * @returns array of indexes, for example [0, 1, 2, 0, 1, 2]
 */
export const convertPitchesToIndexes = (
    pitches: string[],
    pitchOptions: string[],
) => {
    return pitches.map(pitch => {
        return pitchOptions.indexOf(pitch);
    });
};

export const convertKebabCaseToCamelCase = (str: string) => {
    return str.replace(/-([a-z])/g, function (g) {
        return g[1].toUpperCase();
    });
};
