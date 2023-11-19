import type { Matrix, Notes, MatrixCell } from '@/types';

export function getRandomNumber(min: number, max: number) {
  return Math.floor(Math.random() * (max - min + 1)) + min;
}

export const demoCell: MatrixCell = { note: 'C', isActive: false, isTied: false };
export const demoActiveCell: MatrixCell = { note: 'D', isActive: true, isTied: false };

export const memoBlocksMockData: Matrix[] = [
  [...Array(8).fill(Array(4).fill(demoCell))],
  [...Array(8).fill(Array(4).fill(demoCell))],
  [...Array(8).fill(Array(4).fill(demoCell))],
  [...Array(2).fill([demoCell, demoActiveCell, demoCell, demoActiveCell]), ...Array(6).fill(Array(4).fill(demoCell))],
  [
    ...Array(2).fill([demoCell, demoActiveCell, demoActiveCell, demoActiveCell]),
    ...Array(3).fill(Array(4).fill(demoCell)),
    ...Array(2).fill([demoActiveCell, demoActiveCell, demoCell, demoCell]),
    Array(4).fill(demoCell),
  ],

];