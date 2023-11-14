
export type Notes = 'C' | 'B' | 'A' | 'G' | 'F' | 'E' | 'D';

export type MatrixCell = {
  note: Notes;
  isActive: boolean;
  isTied: boolean;
};

export type Matrix = MatrixCell[][];
export type Colors = Record<Notes, string>;

export type MemoBlockCardNote = { coordinate: Coordinate, isActive: boolean, isTied: boolean }

export type Coordinate = {
  row: number;
  col: number;
}

export type MemoBlockCardMelody = MemoBlockCardNote[]

