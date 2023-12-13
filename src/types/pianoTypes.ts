export type PianoAccompanimentPatternCategory = {
    id: string;
};

export type PianoAccompanimentPatternCategoryDict = {
    name: string;
    description: string;
};

export type PianoAccompanimentPattern = {
    id: string;
    videoTutorialsUrls: string[];
    mainTutorialUrlIndex: number;
    hand: 'left' | 'right' | 'both';
    categoryId: string;
    abcNotationExampleInC: string;
    optionalMeters: ('4/4' | '3/4' | '2/4' | '6/8' | '12/8')[];
};

export type PianoAccompanimentPatternDict = {
    name: string;
    description: string;
    useCases: string[];
};
