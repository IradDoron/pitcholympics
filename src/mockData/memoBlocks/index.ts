import { CellInfo, NoteStatus } from '@/types';

export const levelOneCards = [
  [
    { row: 1, col: 0, value: NoteStatus.ACTIVE },
    { row: 0, col: 1, value: NoteStatus.ACTIVE },
    { row: 1, col: 2, value: NoteStatus.ACTIVE },
    { row: 0, col: 3, value: NoteStatus.ACTIVE },
  ],
  [
    { row: 3, col: 0, value: NoteStatus.ACTIVE },
    { row: 3, col: 1, value: NoteStatus.ACTIVE },
    { row: 2, col: 2, value: NoteStatus.ACTIVE },
    { row: 2, col: 3, value: NoteStatus.ACTIVE },
  ],
  [
    { row: 4, col: 0, value: NoteStatus.ACTIVE },
    { row: 4, col: 1, value: NoteStatus.ACTIVE },
    { row: 7, col: 2, value: NoteStatus.ACTIVE },
    { row: 7, col: 3, value: NoteStatus.ACTIVE },
  ],
  [
    { row: 7, col: 0, value: NoteStatus.ACTIVE },
    { row: 5, col: 1, value: NoteStatus.ACTIVE },
    { row: 3, col: 2, value: NoteStatus.ACTIVE },
    { row: 1, col: 3, value: NoteStatus.ACTIVE },
  ]
];

export const levelTwoCards: CellInfo[][] = [
  [
    { row: 0, col: 0, value: NoteStatus.ACTIVE },
    { row: 0, col: 1, value: NoteStatus.ACTIVE },
    { row: 0, col: 2, value: NoteStatus.ACTIVE },
    { row: 0, col: 3, value: NoteStatus.ACTIVE },
  ],
  [
    { row: 3, col: 2, value: NoteStatus.ACTIVE },
    { row: 3, col: 1, value: NoteStatus.ACTIVE },
    { row: 2, col: 0, value: NoteStatus.ACTIVE },
    { row: 2, col: 1, value: NoteStatus.ACTIVE },
  ],
  [
    { row: 5, col: 0, value: NoteStatus.ACTIVE },
    { row: 5, col: 0, value: NoteStatus.ACTIVE },
    { row: 2, col: 2, value: NoteStatus.ACTIVE },
    { row: 2, col: 3, value: NoteStatus.ACTIVE },
  ],
  [
    { row: 7, col: 0, value: NoteStatus.ACTIVE },
    { row: 7, col: 0, value: NoteStatus.ACTIVE },
    { row: 4, col: 1, value: NoteStatus.ACTIVE },
    { row: 4, col: 2, value: NoteStatus.ACTIVE },
  ],

];
