import { Game } from '@types';
import { memoTheMeloMockData } from './memoTheMeloMockData';
import { pitchCatchMockData } from './pitchCatchMockData';
// generate mock data for more games and import them here

export const gamesData: Game[] = [
    {
        name: 'memoTheMelo',
        game: memoTheMeloMockData,
    },
    {
        name: 'pitchCatch',
        game: pitchCatchMockData,
    },
];
