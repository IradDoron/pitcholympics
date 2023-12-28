'use client';

import { Locale } from '@/i18n.config';
import { Text } from '@core';
import {
    PianoAccompanimentPatternCategoryDict,
    PianoAccompanimentPatternDict,
} from '@types';
import { getDictionaryClient } from '@utils';
import abcjs from 'abcjs';
import { useEffect } from 'react';
import { pianoAccompanimentPatterns } from '../_data';

type Props = {
    params: {
        id: string;
        lang: Locale;
    };
};

const Page = ({ params }: Props) => {
    const { id, lang } = params;
    const pattern = pianoAccompanimentPatterns[id];
    const {
        videoTutorialsUrls,
        mainTutorialUrlIndex,
        hand,
        categoryId,
        optionalMeters,
        abcNotationExampleInC,
    } = pattern;

    const dict = getDictionaryClient(lang);

    const categoriesDict = dict.data.pianoDataDict
        .pianoAccompanimentPatternCategoriesDict as Record<
        string,
        PianoAccompanimentPatternCategoryDict
    >;

    const patternsDict = dict.data.pianoDataDict
        .pianoAccompanimentPatternsDict as Record<
        string,
        PianoAccompanimentPatternDict
    >;

    const handDict = dict.data.pianoDataDict.handDict;

    useEffect(() => {
        abcjs.renderAbc(`piano-pattern-${id}`, abcNotationExampleInC, {
            scale: 1.5,
        });
    }, []);

    return (
        <div className='flex flex-col items-center justify-center gap-4'>
            <Text className='text-2xl'>ID {id}</Text>
            {categoryId && (
                <Text className='text-lg'>
                    {categoriesDict[categoryId].name}
                </Text>
            )}
            <Text className='text-lg'>{patternsDict[id].description}</Text>
            {hand && <Text className='text-lg'>{handDict[hand]} hand</Text>}
            <div className='flex gap-4'>
                {optionalMeters?.map(meter => {
                    return <Text key={meter}>{meter}</Text>;
                })}
            </div>
            <div id={`piano-pattern-${id}`}></div>
            <Text className='text-lg'>Main Tutorial:</Text>
            <iframe
                width='560'
                height='315'
                src={videoTutorialsUrls[mainTutorialUrlIndex]}
                title='YouTube video player'
                allow='accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture'></iframe>
            <Text className='text-lg'>More Tutorials:</Text>
            <div className='flex gap-4 flex-wrap items-center justify-center'>
                {videoTutorialsUrls.map((url, index) => {
                    if (index === mainTutorialUrlIndex) return null;
                    return (
                        <iframe
                            key={index}
                            width='360'
                            height='200'
                            src={url}
                            title='YouTube video player'
                            allow='accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture'></iframe>
                    );
                })}
            </div>
            <Text className='text-lg'>Use cases:</Text>
            <ul className='flex gap-4 list-disc flex-col'>
                {patternsDict[id].useCases.map(useCase => {
                    return (
                        <li key={useCase}>
                            <Text>{useCase}</Text>
                        </li>
                    );
                })}
            </ul>
        </div>
    );
};

export default Page;
