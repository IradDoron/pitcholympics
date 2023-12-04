
export * from './memoTheMelo';
export * from './memoBlocks';
export * from './pitchCatch';

export type GamesStats = {
  [game in GameNames]: number;
} & {
  totalGamesPlayed: number;
}

export type GameNames = 'memoTheMelo' | 'pitchCatch' | 'memoBlocks';

export type GameAnalytics = {
  gameName: GameNames;
  level: number;
  stage: number;
  status: 'passed' | 'failed';
  time: number;
  startDate: string;
};

export type GameProgress = {
  [game in GameNames]: Record<string, LevelStatus>;
};

export type LevelStatus = 'passed' | 'failed' | 'locked' | 'pending';
