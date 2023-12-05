export type Notes = 'C' | 'B' | 'A' | 'G' | 'F' | 'E' | 'D';

export type MatrixCell = {
  note: Notes;
  isActive: boolean;
  isTied: boolean;
};

export enum NoteStatus {
  'EMPTY',
  'ACTIVE',
  'TIED',
};

export type CellInfo = {
  row: number;
  col: number;
  value: NoteStatus;
};

export type Matrix = MatrixCell[][]; // changed to the line below
export type MatrixWithId = { id: string; data: Matrix };
export type Colors = Record<Notes, string>;

export type MemoBlockCardNote = {
  coordinate: Coordinate;
  isActive: boolean;
  isTied: boolean;
};

export type Coordinate = {
  row: number;
  col: number;
};

export type DragEvent = {
  activatorEvent: PointerEvent;
  active: {
    id: string;
    data: any;
    rect: any;
  };
  collisions: any[];
  delta: {
    x: number;
    y: number;
    scaleX: number;
    scaleY: number;
  };
  over: {
    id: string;
    rect: any;
    data: any;
    disabled: boolean;
  };
};

export type MemoBlockCardMelody = MemoBlockCardNote[];

export type MemoBlocksLevel = CellInfo[][];

export type MemoBlocksStage = MemoBlocksLevel[];

export type MemoBlocksGame = MemoBlocksStage[];

