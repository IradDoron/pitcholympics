'use client';

import { useRouter } from 'next/navigation';
import { useState, useEffect } from 'react'
import LevelResult from '@/components/shared/levelResult';
import { getDictionaryClient } from '@/utils/getDictionaryClient';
import { Locale } from '@/i18n.config';
import pitchCatchData from '@/mockData/pitchCatch';

type Props = {
    stage: number;
    level: number;
    lang: Locale;
};


const Page = ({ stage, level, lang }: Props) => {
    const router = useRouter();
    const [score, setScore] = useState<number>(0);
    const dict = getDictionaryClient(lang);
    const { actionButtonLabel, tryAgainButtonLabel } = dict.app['game-result-page']

    const handleNextLevel = () => {
        const nextLevel = +level + 1
        console.log(nextLevel);
        const currentStageLevels = pitchCatchData[stage - 1].length;
        if (nextLevel > currentStageLevels) {
            const nextStage = +stage + 1;
            if (nextStage > pitchCatchData.length) {
            } else {
                router.push(`${lang}/pitch-catch/${nextStage}/1`);
            }
        } else {
            router.push(`${lang}/pitch-catch/${stage}/${nextLevel}`);
        }
    };
    const handleTryAgain = () => {
        router.push(`${lang}/pitch-catch/${stage}/${level}`);

    }

    useEffect(() => {
        const storedScore = localStorage.getItem('score');
        if (storedScore) {
            setScore(parseInt(storedScore, 10));
        }
    }, []);


    return (
        <div className='flex items-center justify-center h-screen'>
            <LevelResult level={level} score={score} actionButtonLabel={actionButtonLabel} actionButtonOnClick={() => handleNextLevel()} lang={params.lang} tryAgainButtonLabel={tryAgainButtonLabel} tryAgainButtonOnClick={handleTryAgain} />
        </div>

    )
}

export default Page