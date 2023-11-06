"use client"
import { Locale } from '@/i18n.config';
import { getDictionaryClient } from '@/utils/getDictionaryClient';

type Props = {
    score: number | null;
    lang: Locale
}

const ResultData = ({ score, lang }: Props) => {
    const dict = getDictionaryClient(lang);
    const { dataScoreLevel } = dict.app['game-result-page']
    return (
        <div className="border-light-primary-light dark:border-cyan-300 shadow-medium-light dark:shadow-medium-dark dark:hover:shadow-large-dark transition ease-out duration-1000 bg-light-surface-primary dark:bg-dark-surface-primary self-center flex w-[307px] max-w-full flex-col p-5 rounded-xl border-[3px] border-solid max-md:mt-10 hover:shadow-large-light">
            <div className="self-center flex max-w-full items-start gap-3">
                <div className="text-light-surface-onPrimary dark:text-dark-surface-onPrimary text-center text-3xl font-bold self-center my-auto whitespace-nowrap">
                    {score} $
                </div>
            </div>
            <div className="self-center flex  max-w-full items-start gap-3 mt-4">
                <div className="text-light-surface-onPrimary dark:text-dark-surface-onPrimary text-center text-3xl font-bold mt-1 self-start whitespace-nowrap">
                    {score !== null && `+ ${score}  ${dataScoreLevel}`}
                </div>
            </div>
        </div>
    )
}

export default ResultData