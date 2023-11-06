export type MemoBlockCardNote = { coordinate: Coordinate, haveNote: boolean, haveTie: boolean }

export type Coordinate = {
    row: number;
    col: number;
}

export type MemoBlockCardMelody = MemoBlockCardNote[]

