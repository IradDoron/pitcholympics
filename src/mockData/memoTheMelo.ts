import { MemoTheMeloGame } from '@/types';

const memoTheMeloMockData: MemoTheMeloGame = [
 [
  {
   notesAmount: 2,
   melody: [1, 2, 2, 1, 1],
  },
  {
   notesAmount: 3,
   melody: [1, 2, 3, 1, 3, 2],
  },
  {
   notesAmount: 3,
   melody: [1, 2, 3, 1, 3, 2, 2, 1, 3],
  },
 ],
 [
  {
   notesAmount: 4,
   melody: [1, 2, 3, 1, 4, 3, 4],
  },
  {
   notesAmount: 4,
   melody: [1, 2, 3, 2, 4],
  },
  {
   notesAmount: 4,
   melody: [1, 2, 3, 4, 3, 1],
  },
 ],
];

export default memoTheMeloMockData;