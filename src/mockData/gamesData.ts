import { Game } from '@/types';
import memoTheMeloMockData from './memoTheMelo';
import pitchCatchMockData from './pitchCatch';
// generate mock data for more games and import them here

const gamesData: Game[] = [
  {
    name: 'memoTheMelo',
    game: memoTheMeloMockData
  },
  {
    name: 'pitchCatch',
    game: pitchCatchMockData
  },
];

export default gamesData;