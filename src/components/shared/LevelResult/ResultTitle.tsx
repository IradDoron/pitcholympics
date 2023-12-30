'use client';

import { Locale } from '@/i18n.config';
import { getDictionaryClient } from '@utils';

type Props = {
    level: number;
    lang: Locale;
    score: number;
};

export const ResultTitle = ({ level, lang, score }: Props) => {
    const dict = getDictionaryClient(lang);
    const {
        titleCompleteLevel,
        titleComplete,
        titleForFailed,
        titleForFailedLevel,
    } = dict.app['game-result-page'];
    return (
        <div className='items-start self-stretch flex justify-center gap-4 px-5 max-md:max-w-full max-md:flex-wrap max-md:justify-center'>
            <div className='text-light-background-onDefault dark:text-dark-background-onDefault text-center text-5xl font-bold my-auto max-md:text-4xl'>
                {score === 0 ? titleForFailed : titleCompleteLevel}
            </div>
            <div className='text-violet-700 text-center text-7xl font-bold self-stretch max-md:text-4xl'>
                {level}
            </div>
            <div className='text-light-background-onDefault dark:text-dark-background-onDefault text-center text-5xl font-bold self-center my-auto whitespace-nowrap max-md:text-4xl'>
                {score === 0 ? titleForFailedLevel : titleComplete}
            </div>
        </div>
    );
};
