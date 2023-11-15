import { MemoTheMeloGame } from '@/types';

const memoTheMeloMockData: MemoTheMeloGame = [
    [
        {
            pitchOptions: ['261.63', '293.66', '329.63'],
            melody: [0, 1, 2],
        },
        {
            pitchOptions: ['261.63', '329.63', '293.66'],
            melody: [0, 1, 2, 1],
        },
        {
            pitchOptions: ['261.63', '329.63', '392.00'],
            melody: [1, 2, 0, 1, 0],
        },
        {
            pitchOptions: ['349.23', '392.00', '440.00'],
            melody: [0, 2, 1, 2, 0],
        },
        {
            pitchOptions: ['349.23', '440.00', '523.25'],
            melody: [1, 2, 0, 1, 0, 2],
        },
        {
            pitchOptions: ['293.66', '369.99', '440.00'],
            melody: [1, 0, 0, 1, 0, 1, 2],
        },
        {
            pitchOptions: ['659.25', '830.61', '987.77'],
            melody: [0, 1, 2, 1, 0, 1, 2],
        },
        {
            pitchOptions: ['293.66', '349.23', '440.00'],
            melody: [0, 1, 2, 1, 0, 1, 2],
        },
    ],
    [
        {
            pitchOptions: ['349.23', '440.00', '523.25', '659.25'],
            melody: [0, 1, 2, 3],
        },
        {
            pitchOptions: ['349.23', '440.00', '523.25', '659.25'],
            melody: [0, 2, 1, 3, 0],
        },
        {
            pitchOptions: ['261.63', '329.63', '392.00', '246.94'],
            melody: [0, 2, 1, 3, 0, 2],
        },
        {
            pitchOptions: ['196.00', '261.63', '293.66', '329.63'],
            melody: [1, 2, 3, 0, 3, 1],
        },
    ],
];

export default memoTheMeloMockData;
