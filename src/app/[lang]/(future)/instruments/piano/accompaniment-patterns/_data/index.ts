import {
    PianoAccompanimentPattern,
    PianoAccompanimentPatternCategory,
} from '@types';

export const pianoAccompanimentPatternCategories: Record<
    string,
    PianoAccompanimentPatternCategory
> = {
    'whole-notes-arrepegio': {
        id: '1',
    },
    'quater-notes-arrepegio': {
        id: '2',
    },
    'eight-notes-arrepegio': {
        id: '3',
    },
};

export const pianoAccompanimentPatterns: Record<
    string,
    PianoAccompanimentPattern
> = {
    '1': {
        id: '1',
        videoTutorialsUrls: [
            'https://www.youtube.com/embed/tRQsodIxoDI',
            'https://www.youtube.com/embed/tRQsodIxoDI',
            'https://www.youtube.com/embed/tRQsodIxoDI',
            'https://www.youtube.com/embed/tRQsodIxoDI',
        ],
        mainTutorialUrlIndex: 0,
        hand: 'left',
        categoryId: 'whole-notes-arrepegio',
        optionalMeters: ['4/4', '3/4', '2/4', '6/8'],
        abcNotationExampleInC: `
        M: 4/4
        L: 1/4
        K: C
        CGcG|| `,
    },
};
