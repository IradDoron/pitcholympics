import { AchievementStatus, GameItem } from '@/types';

export type GameAnalytics = {
	gameName: GameNames;
	level: number;
	stage: number;
	status: 'passed' | 'failed';
	time: number;
	startDate: string;
};

export type GameNames = 'memoTheMelo' | 'pitchCatch';

export type Resources = {
	coins: number;
	musicalTreasure: number;
	gems: number;
	health: number;
};

export type GamesStats = {
	"memoTheMeloGames": number;
	"pitchCatchGames": number;
	"totalGamesPlayed": number;
}

export type Price = {
	[resource in keyof Resources]: number;
};

export type LevelData = {
	status: 'passed' | 'failed' | 'locked';
	stage: number;
	level: number;
};

export type GameProgress = {
	memoTheMelo: LevelData[];
	pitchCatch: LevelData[];
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
			currentStatus: AchievementStatus;
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
