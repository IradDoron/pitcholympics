import { Button } from '@/components/core';
import ResultData from './ResultData';
import ResultTitle from './ResultTitle';
import { Locale } from '@/i18n.config';

type Props = {
    level: number;
    score: number;
    actionButtonLabel: string;
    actionButtonOnClick: () => void;
    tryAgainButtonOnClick: () => void;
    tryAgainButtonLabel: string;
    lang: Locale;
};

const LevelResult = ({
    level,
    score,
    actionButtonLabel,
    actionButtonOnClick,
    tryAgainButtonOnClick,
    tryAgainButtonLabel,
    lang,
}: Props) => {
    return (
        <>
            {score === 0 ? (
                <div className='items-center flex flex-col gap-10'>
                    <ResultTitle level={level} lang={lang} score={score} />
                    <ResultData score={score} lang={lang} />
                    <div className='flex flex-row gap-6'>
                        <Button
                            label={tryAgainButtonLabel}
                            onClick={tryAgainButtonOnClick}
                        />
                        <Button
                            label={actionButtonLabel}
                            onClick={actionButtonOnClick}
                        />
                    </div>
                </div>
            ) : (
                <div className='items-center flex flex-col gap-10'>
                    <ResultTitle level={level} lang={lang} score={score} />
                    <ResultData score={score} lang={lang} />
                    <Button
                        label={actionButtonLabel}
                        onClick={actionButtonOnClick}
                    />
                </div>
            )}
        </>
    );
};

//   score ? (<div className="items-center flex flex-col gap-10">
// //    <ResultTitle level={level} lang={lang} />
// //    <ResultData score={score} lang={lang} />
// //    <Button label={actionButtonLabel} onClick={actionButtonOnClick} />

// // </div>))

export default LevelResult;
