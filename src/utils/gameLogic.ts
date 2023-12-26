import { GameNamesToSlug, LevelStatus } from '@/types';
import { Locale } from '@/i18n.config';
import { AppRouterInstance } from 'next/dist/shared/lib/app-router-context.shared-runtime';

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

export const calcLevelScore = (stage: number, level: number) => {
  // TODO: add more complex formula
  const score = stage * 4 + level * 2;
  return score;
};

export const handleEndLevel = (
  stage: number,
  level: number,
  lang: Locale,
  game: GameNamesToSlug,
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