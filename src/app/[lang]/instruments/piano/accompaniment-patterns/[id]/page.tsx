'use client';

import { pianoAccompanimentPatterns } from '@/data/pianoData';
import abcjs from 'abcjs';
import { useEffect } from 'react';

type Props = {
    params: {
        id: string;
    };
};

const Page = ({ params }: Props) => {
    const { id } = params;
    const pattern = pianoAccompanimentPatterns[id];
    const {
        name,
        description,
        videoTutorialsUrls,
        mainTutorialUrlIndex,
        useCases,
        hand,
        category,
        optionalMeters,
        abcNotationExampleInC,
    } = pattern;

    useEffect(() => {
        abcjs.renderAbc(`piano-pattern-${id}`, abcNotationExampleInC);
    }, []);

    return (
        <div>
            <h1>ID: {id}</h1>
            <h1>Name: {name}</h1>
            <h1>Description: {description}</h1>
            <div id={`piano-pattern-${id}`}></div>
        </div>
    );
};

export default Page;
