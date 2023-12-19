'use client';

import { Locale } from '@/i18n.config';
import memoTheMeloMockData from '@/mockData/memoTheMelo';
import { getDictionaryClient } from '@/utils/getDictionaryClient';
import { LevelResult } from '@shared';
import { useRouter } from 'next/navigation';
import { useEffect, useState } from 'react';

type Props = {
    lang: Locale;
    stage: string;
    level: string;
    result: string;
};

const Page = ({ params }: { params: Props }) => {
    const router = useRouter();
    const [score, setScore] = useState<number>(0);
    const { lang, stage, level, result } = params;
    const dict = getDictionaryClient(lang);
    const { actionButtonLabel, tryAgainButtonLabel } =
        dict.app['game-result-page'];

    const handleNextLevel = (stage: number) => {
        const nextLevel = +level + 1;
        const currentStageLevels = memoTheMeloMockData[stage - 1].length;
        if (nextLevel > currentStageLevels) {
            const nextStage = stage + 1;
            if (nextStage > memoTheMeloMockData.length) {
                router.push(`/${lang}/games/memo-the-melo`);
            } else {
                router.push(`/${lang}/games//memo-the-melo/${nextStage}/1`);
            }
        } else {
            router.push(`/${lang}/games//memo-the-melo/${stage}/${nextLevel}`);
        }
    };
    const handleTryAgain = () => {
        router.push(`/${lang}/games//memo-the-melo/${stage}/${level}`);
    };

    useEffect(() => {
        const storedScore = localStorage.getItem('score');
        if (storedScore) {
            setScore(parseInt(storedScore, 10));
        }
    }, []);

    return (
        <div className='m-3 flex items-center justify-center h-full w-full'>
            <LevelResult
                level={Number(level)}
                score={score}
                actionButtonLabel={actionButtonLabel}
                actionButtonOnClick={() => handleNextLevel(Number(stage))}
                lang={lang}
                tryAgainButtonOnClick={handleTryAgain}
                tryAgainButtonLabel={tryAgainButtonLabel}
            />
        </div>
    );
};

export default Page;
