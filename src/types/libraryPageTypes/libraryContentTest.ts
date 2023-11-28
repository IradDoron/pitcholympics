import { LibraryContentBase } from './index';

export type LibraryContentTestBase = LibraryContentBase & {
    contentType: 'test';
};

export type McqQuestion = {
    question: string;
    options: string[];
    correctAnswer: string;
};

export type TrueFalseQuestion = {
    question: string;
    correctAnswer: boolean;
};

export type MatchingQuestion = {
    question: string;
    pairs: { left: string; right: string }[];
};

export type FillInTheBlankQuestion = {
    question: string;
    blanks: string[]; // Array of blanks to be filled in
    correctAnswers: string[]; // Array of correct answers corresponding to the blanks
};

export type NumericAnswerQuestion = {
    question: string;
    correctAnswer: number;
};

export type LibraryContentTestQuestion = {
    type: TestTypeNames;
    question:
        | McqQuestion
        | TrueFalseQuestion
        | MatchingQuestion
        | FillInTheBlankQuestion
        | NumericAnswerQuestion;
};

export type TestTypeNames =
    | 'mcq'
    | 'trueFalse'
    | 'matching'
    | 'fillInTheBlank'
    | 'numericAnswer';

export type LibraryContentTest = LibraryContentTestBase & {
    questions: LibraryContentTestQuestion[];
};
