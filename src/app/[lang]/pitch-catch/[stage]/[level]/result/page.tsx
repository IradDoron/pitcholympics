'use client';

import { useRouter } from 'next/navigation';
import { useState, useEffect } from 'react'
import LevelResult from '@/components/shared/levelResult';
import { getDictionaryClient } from '@/utils/getDictionaryClient';
import { Locale } from '@/i18n.config';
import pitchCatchData from '@/mockData/pitchCatch';

type Props = {
    params: {
        stage: number;
        level: number;
        lang: Locale;
    };
};


const Page = ({ params }: Props) => {
    const router = useRouter();
    const [score, setScore] = useState<number>(0);
    const dict = getDictionaryClient(params.lang);
    const { actionButtonLabel,tryAgainButtonLabel } = dict.app['game-result-page']
   
    const handleNextLevel = () => {
        const nextLevel = +params.level + 1
        console.log(nextLevel);
        const currentStageLevels = pitchCatchData[params.stage - 1].length;
        if (nextLevel > currentStageLevels) {
            const nextStage = +params.stage + 1;
            if (nextStage > pitchCatchData.length) {
            } else {
                router.push(`/${params.lang}/pitch-catch/${nextStage}/1`);
            }
        } else {
            router.push(`/${params.lang}/pitch-catch/${params.stage}/${nextLevel}`);
        }
    };
    const handleTryAgain = () => {
        router.push(`/${params.lang}/pitch-catch/${params.stage}/${params.level}`);
    
    }

    useEffect(() => {
        const storedScore = localStorage.getItem('score');
        if (storedScore) {
            setScore(parseInt(storedScore, 10));
        }
    }, []);


    return (
        <div className='flex items-center justify-center h-screen'>
            <LevelResult level={params.level} score={score} actionButtonLabel={actionButtonLabel} actionButtonOnClick={() => handleNextLevel()} lang={params.lang} tryAgainButtonLabel={tryAgainButtonLabel} tryAgainButtonOnClick={handleTryAgain}/>
        </div>

    )
}

export default Page