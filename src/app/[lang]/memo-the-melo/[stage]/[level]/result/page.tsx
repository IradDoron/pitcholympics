'use client';

import { useRouter } from 'next/navigation';
import { useState, useEffect } from 'react'
import memoTheMeloMockData from '@/mockData/memoTheMelo';
import LevelResult from '@/components/shared/levelResult';
import { getDictionaryClient } from '@/utils/getDictionaryClient';
import { Locale } from '@/i18n.config';

type Props = {
    params: {
        stage: number;
        level: number;
        lang: Locale;
    };
};


const Page = ({ params }: Props) => {
    const router = useRouter();
    const [score, setScore] = useState<number | null>(null);
    const dict = getDictionaryClient(params.lang);
    const { actionButtonLabel } = dict.app['memo-the-melo'].result

    const handleNextLevel = (stage: number) => {
        const nextLevel = +params.level + 1
        console.log(nextLevel);
        const currentStageLevels = memoTheMeloMockData[params.stage - 1].length;
        if (nextLevel > currentStageLevels) {
            const nextStage = +params.stage + 1;
            if (nextStage > memoTheMeloMockData.length) {
            } else {
                router.push(`/memo-the-melo/${nextStage}/1`);
            }
        } else {
            router.push(`/memo-the-melo/${params.stage}/${nextLevel}`);
        }
    };

    useEffect(() => {
        const storedScore = localStorage.getItem('score');
        if (storedScore) {
            setScore(parseInt(storedScore, 10));
        }
    }, []);


    return (
        <div className='flex items-center justify-center h-screen'>
            <LevelResult level={params.level} score={score} actionButtonLabel={actionButtonLabel} actionButtonOnClick={() => handleNextLevel(params.stage)} lang={params.lang} />
        </div>

    )
}

export default Page