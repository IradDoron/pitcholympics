import { CellInfo, MemoBlocksGame, MemoBlocksLevel, NoteStatus } from '@/types';

const s1l1Cards: MemoBlocksLevel = [
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

const s1l2Cards: MemoBlocksLevel = [
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

const s1l3Cards: MemoBlocksLevel = [
  [
    { row: 3, col: 0, value: NoteStatus.ACTIVE },
    { row: 3, col: 1, value: NoteStatus.ACTIVE },
    { row: 5, col: 3, value: NoteStatus.ACTIVE },
  ],
  [
    { row: 6, col: 2, value: NoteStatus.ACTIVE },
    { row: 6, col: 3, value: NoteStatus.ACTIVE },
    { row: 7, col: 2, value: NoteStatus.ACTIVE },
    { row: 7, col: 3, value: NoteStatus.ACTIVE },
  ],
  [
    { row: 1, col: 0, value: NoteStatus.ACTIVE },
    { row: 1, col: 1, value: NoteStatus.ACTIVE },
    { row: 2, col: 2, value: NoteStatus.ACTIVE },
    { row: 2, col: 3, value: NoteStatus.ACTIVE },
  ],
  [
    { row: 4, col: 0, value: NoteStatus.ACTIVE },
    { row: 4, col: 1, value: NoteStatus.ACTIVE },
    { row: 5, col: 2, value: NoteStatus.ACTIVE },
    { row: 5, col: 3, value: NoteStatus.ACTIVE },
  ],
];

export const memoBlocksLevels: MemoBlocksGame = [
  [ // Stage 1
    s1l1Cards,
    s1l2Cards,
    s1l3Cards,
  ],
  // TODO: Add more stages
]