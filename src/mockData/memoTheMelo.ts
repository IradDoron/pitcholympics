import { MemoTheMeloGame } from '@/types';

const memoTheMeloMockData: MemoTheMeloGame = [
 [
  {
   pitchOptions: ['440','228'],
   melody: [0, 1, 1, 1, 1],

  },
  {
   pitchOptions: ['180','120','220'],
   melody: [1, 2, 0, 1, 0, 2],
  },
  {
   pitchOptions:  ['180','120','220'],
   melody: [1, 2, 0, 1, 0, 2, 2, 1, 0],
  },
 ],
 [
  {
   pitchOptions: ['180','120','220','440'],
   melody: [1, 2, 3, 0, 2, 3, 2],
  },
  {
   pitchOptions: ['180','120','220','440'],
   melody: [1, 2, 3, 2, 0],
  },
  {
   pitchOptions: ['180','120','220','440'],
   melody: [1, 2, 3, 0, 3, 1],
  },
 ],
];

export default memoTheMeloMockData;