'use client';

import { useRouter } from 'next/navigation';
import { useState, useEffect } from 'react';
import memoTheMeloMockData from '@/mockData/memoTheMelo';
import LevelResult from '@/components/shared/levelResult';
import { getDictionaryClient } from '@/utils/getDictionaryClient';

const Page = ({ ...params }) => {
    const router = useRouter();
    const [score, setScore] = useState<number>(0);
    const { lang, stage, level } = params;
    const dict = getDictionaryClient(lang);
    const { actionButtonLabel, tryAgainButtonLabel } =
        dict.app['game-result-page'];

    const handleNextLevel = (stage: number) => {
        const nextLevel = +level + 1;
        const currentStageLevels = memoTheMeloMockData[stage - 1].length;
        if (nextLevel > currentStageLevels) {
            const nextStage = +stage + 1;
            if (nextStage > memoTheMeloMockData.length) {
            } else {
                router.push(`/memo-the-melo/${nextStage}/1`);
            }
        } else {
            router.push(`/${lang}/memo-the-melo/${stage}/${nextLevel}`);
        }
    };
    const handleTryAgain = () => {
        router.push(`/${lang}/memo-the-melo/${stage}/${level}`);
    };

    useEffect(() => {
        const storedScore = localStorage.getItem('score');
        if (storedScore) {
            setScore(parseInt(storedScore, 10));
        }
    }, []);

    return (
        <div className='m-3 flex items-center justify-center'>
            <LevelResult
                level={level}
                score={score}
                actionButtonLabel={actionButtonLabel}
                actionButtonOnClick={() => handleNextLevel(stage)}
                lang={lang}
                tryAgainButtonOnClick={handleTryAgain}
                tryAgainButtonLabel={tryAgainButtonLabel}
            />
        </div>
    );
};

export default Page;
