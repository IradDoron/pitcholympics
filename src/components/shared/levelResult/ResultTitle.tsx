"use client"
import { Locale } from '@/i18n.config';
import { getDictionaryClient } from '@/utils/getDictionaryClient';

type Props = {
    level: number;
    lang: Locale;
};



const ResultTitle = ({ level, lang }: Props) => {
    const dict = getDictionaryClient(lang);
    const { titleCompleteLevel, titleComplete } = dict.app['memo-the-melo'].result
    return (
        <div className="items-start self-stretch flex justify-center gap-4 px-5 max-md:max-w-full max-md:flex-wrap max-md:justify-center">
            <div className="text-light-background-onDefault dark:text-dark-background-onDefault text-center text-5xl font-bold my-auto max-md:text-4xl">
                {titleCompleteLevel}
            </div>
            <div className="text-violet-700 text-center text-7xl font-bold self-stretch max-md:text-4xl">
                {level}
            </div>
            <div className="text-light-background-onDefault dark:text-dark-background-onDefault text-center text-5xl font-bold self-center my-auto whitespace-nowrap max-md:text-4xl">
                {titleComplete}
            </div>
        </div>
    )
}

export default ResultTitle