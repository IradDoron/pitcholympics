import { User } from '@/types';

const users: User[] = [
    {
        id: '1',
        email: 'dio.brando@gmail.com',
        name: 'Dio Brando',
        picture: 'user-avatar.jpg',
        gender: 'Male',
        locale: 'en_US',
        timezone: 'UTC-5',
        gameProgress: {
            memoTheMelo: {
                '1_1': 'passed',
                '1_2': 'passed',
                '1_3': 'failed',
            },

            pitchCatch: {
                '1_1': 'passed',
                '1_2': 'failed',
                '1_3': 'passed',
                '1_4': 'passed',
                '1_5': 'failed',
            },
        },
        xp: 8500,
        userLevel: 7,
        attributes: {
            musicalMemory: 80,
            pitchRecognition: 75,
        },
        achievements: {
            '1': {
                criteriaStatus: [true, true, true, true, true, false],
                completeAmount: 1,
            },
        },
        resources: {
            coins: 1000,
            musicalTreasures: 10,
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
            {
                gameName: 'memoTheMelo',
                level: 2,
                stage: 1,
                status: 'passed',
                time: 75000,
                startDate: '2021-01-02T00:00:00.000Z',
            },
            {
                gameName: 'memoTheMelo',
                level: 3,
                stage: 1,
                status: 'failed',
                time: 90000,
                startDate: '2021-01-03T00:00:00.000Z',
            },
            {
                gameName: 'pitchCatch',
                level: 1,
                stage: 1,
                status: 'passed',
                time: 90000,
                startDate: '2021-01-04T00:00:00.000Z',
            },
            {
                gameName: 'pitchCatch',
                level: 2,
                stage: 1,
                status: 'failed',
                time: 100000,
                startDate: '2021-01-05T00:00:00.000Z',
            },
            {
                gameName: 'pitchCatch',
                level: 3,
                stage: 1,
                status: 'passed',
                time: 110000,
                startDate: '2021-01-06T00:00:00.000Z',
            },
            {
                gameName: 'pitchCatch',
                level: 4,
                stage: 1,
                status: 'passed',
                time: 115000,
                startDate: '2021-01-09T00:00:00.000Z',
            },
            {
                gameName: 'pitchCatch',
                level: 5,
                stage: 1,
                status: 'failed',
                time: 120000,
                startDate: '2021-01-10T00:00:00.000Z',
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
            memoTheMelo: {
                '1_1': 'passed',
                '1_2': 'passed',
                '1_3': 'passed',
            },

            pitchCatch: {
                '1_1': 'passed',
                '1_2': 'passed',
                '1_3': 'passed',
                '1_4': 'passed',
                '1_5': 'passed',
            },
        },
        xp: 6500,
        userLevel: 5,
        attributes: {
            musicalMemory: 70,
            pitchRecognition: 65,
        },
        achievements: {
            '1': {
                criteriaStatus: [true, true, true, true, true, false],
                completeAmount: 9,
            },
        },
        resources: {
            coins: 500,
            musicalTreasures: 5,
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
