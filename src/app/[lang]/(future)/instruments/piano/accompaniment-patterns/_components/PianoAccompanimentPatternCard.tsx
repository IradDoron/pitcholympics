'use client';

import { Locale } from '@/i18n.config';
import { Link } from '@core';
import {
    PianoAccompanimentPattern,
    PianoAccompanimentPatternCategoryDict,
    PianoAccompanimentPatternDict,
} from '@types';
import { getDictionaryClient } from '@utils';

type Props = {
    pattern: PianoAccompanimentPattern;
    lang: Locale;
};

const PianoAccompanimentPatternCard = ({ pattern, lang }: Props) => {
    const { id, videoTutorialsUrls, hand, categoryId, optionalMeters } =
        pattern;

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

    return (
        <div className='border border-gray-300 rounded-md p-4 flex flex-col items-start'>
            <h2 className='text-xl font-bold'>{patternsDict[id].name}</h2>
            <p>{patternsDict[id].description}</p>
            <p className='text-gray-500'>ID: {id}</p>
            <p className='text-gray-500'>{categoriesDict[categoryId].name}</p>
            <p className='text-gray-500'>{handDict[hand]}</p>
            <p className='text-gray-500'>{optionalMeters.join(', ')}</p>
            <label className='text-gray-500'>
                <div>
                    {videoTutorialsUrls.map((url, index) => {
                        return (
                            <ul key={index} className='list-disc mx-4'>
                                <li>
                                    <a
                                        href={url}
                                        target='_blank'
                                        rel='noreferrer'>
                                        {url}
                                    </a>
                                </li>
                            </ul>
                        );
                    })}
                </div>
            </label>
            <Link
                url={`accompaniment-patterns/${id}`}
                label='Go to pattern'
                className='mx-auto my-4'
            />
        </div>
    );
};

export default PianoAccompanimentPatternCard;
