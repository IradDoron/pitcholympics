import {
    PianoAccompanimentPattern,
    PianoAccompanimentPatternCategory,
} from '@/types';

export const pianoAccompanimentPatternCategories: Record<
    string,
    PianoAccompanimentPatternCategory
> = {
    'whole-notes-arrepegio': {
        name: 'Whole notes arrepegio',
        description: 'Play whole notes arrepegio',
    },
    'quater-notes-arrepegio': {
        name: 'Quater notes arrepegio',
        description: 'Play quater notes arrepegio',
    },
    'eight-notes-arrepegio': {
        name: 'Eight notes arrepegio',
        description: 'Play eight notes arrepegio',
    },
};

export const pianoAccompanimentPatterns: Record<
    string,
    PianoAccompanimentPattern
> = {
    '1': {
        id: '1',
        name: 'Basic accompaniment pattern 1',
        description: 'Basic accompaniment pattern 1',
        videoTutorialsUrls: ['https://www.youtube.com/watch?v=7XUWtB2rXro'],
        mainTutorialUrlIndex: 0,
        useCases: [''],
        hand: 'left',
        category: pianoAccompanimentPatternCategories['whole-notes-arrepegio'],
        optionalMeters: ['4/4', '3/4', '2/4', '6/8'],
        abcNotationExampleInC: `
        M: 4/4
        L: 1/4
        K: C
        CGcG|| `,
    },
    '2': {
        id: '2',
        name: 'Basic accompaniment pattern 2',
        description: 'Basic accompaniment pattern 2',
        videoTutorialsUrls: ['https://www.youtube.com/watch?v=7XUWtB2rXro'],
        mainTutorialUrlIndex: 0,
        useCases: [''],
        hand: 'left',
        category: pianoAccompanimentPatternCategories['quater-notes-arrepegio'],
        optionalMeters: ['4/4', '3/4', '2/4', '6/8'],
        abcNotationExampleInC: ``,
    },
};
