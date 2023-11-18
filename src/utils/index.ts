import { LevelData } from '@/types';

export const getXpForLevel = (level: number): number => {
	const x = 0.07;
	const y = 2;
	// formula: ( level / x ) ^ y
	return Math.floor(Math.pow(level / x, y));
};

export const getTimeZone = (): string => {
	return /\((.*)\)/.exec(new Date().toString())![1];
};


export const isLevelExisting = (stage: number, level: number, gameData: LevelData[]) => {
	for (let i = 0; i < gameData.length; i++) {
		if (stage === gameData[i].stage && level === gameData[i].level) {
			return i
		}
	}
	return -1
}
