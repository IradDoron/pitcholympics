export type PitchCatchLevel = PitchCatchQuestion[];

export type PitchCatchStage = PitchCatchLevel[];

export type PitchCatchGame = PitchCatchStage[];

export type PitchCatchQuestion = {
  currPitch: string[];
  userOptions: string[][];
};