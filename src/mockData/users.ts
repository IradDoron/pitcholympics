import { User } from '@/types';

const users: User[] = [
	{
		id: '1',
		email: 'user@example.com',
		name: 'John Doe',
		picture: 'user-avatar.jpg', // URL to the user's profile picture
		gender: 'Male',
		locale: 'en_US',
		timezone: 'UTC-5',
		gameProgress: {
			memoTheMelo: [
				{
					status: 'passed',
					stage: 1,
					level: 1,
				},
				{
					status: 'passed',
					stage: 1,
					level: 2,
				},
				{
					status: 'failed',
					stage: 1,
					level: 3,
				},
			],
			pitchCatch: [
				{
					status: 'passed',
					stage: 1,
					level: 1,
				},
				{
					status: 'passed',
					stage: 1,
					level: 2,
				},
			],
		},
		xp: 8500,
		userLevel: 7,
		attributes: {
			musicalMemory: 80,
			pitchRecognition: 75,
		},
		achievements: {
			'1': {
				currentStatus: 'Completed',
				completeAmount: 1,
			},
			achievement2: {
				currentStatus: 'InProgress',
				completeAmount: 3,
			},
		},
		resources: {
			coins: 1000,
			musicalTreasure: 10,
			gems: 40,
			health: 5,
		},
		gameItems: {
			1: {
				quantity: 5,
			},
		},
		gamesAnalytics: [
			{
				gameName: 'memoTheMelo',
				level: 1,
				stage: 1,
				status: 'passed',
				time: 60000,
				startDate: '2021-01-01T00:00:00.000Z',
			},
		],
	},

	{
		id: '2',
		email: 'user2@example.com',
		name: 'Jane Smith',
		picture: 'user2-avatar.jpg', // URL to the user's profile picture
		gender: 'Female',
		locale: 'en_GB',
		timezone: 'UTC+0',
		gameProgress: {
			memoTheMelo: [
				{
					status: 'passed',
					stage: 1,
					level: 1,
				},
				{
					status: 'passed',
					stage: 2,
					level: 1,
				},
			],
			pitchCatch: [
				{
					status: 'passed',
					stage: 1,
					level: 1,
				},
			],
		},
		xp: 6500,
		userLevel: 5,
		attributes: {
			musicalMemory: 70,
			pitchRecognition: 65,
		},
		achievements: {
			'1': {
				currentStatus: 'InProgress',
				completeAmount: 2,
			},
			'3': {
				currentStatus: 'NotStarted',
				completeAmount: 0,
			},
		},
		resources: {
			coins: 500,
			musicalTreasure: 5,
			gems: 20,
			health: 3,
		},
		gameItems: {
			1: {
				quantity: 5,
			},
		},
		gamesAnalytics: [
			{
				gameName: 'pitchCatch',
				level: 1,
				stage: 1,
				status: 'passed',
				time: 45000,
				startDate: '2021-02-15T14:30:00.000Z',
			},
		],
	},
];

export default users;
