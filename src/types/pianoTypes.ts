export type PianoAccompanimentPatternCategory = {
    name: string;
    description: string;
};

export type PianoAccompanimentPattern = {
    id: string;
    name: string;
    description: string;
    videoTutorialsUrls: string[];
    mainTutorialUrlIndex: number;
    useCases: string[];
    hand: 'left' | 'right' | 'both';
    category: PianoAccompanimentPatternCategory;
    abcNotationExampleInC: string;
    optionalMeters: ('4/4' | '3/4' | '2/4' | '6/8' | '12/8')[];
};
