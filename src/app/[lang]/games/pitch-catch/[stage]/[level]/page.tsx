'use client';

import { useState } from 'react';
import { PitchCatchGame, PitchCatchLevel } from '@/types';
import PitchButton from '@/components/shared/pitchButton';
import UserOptions from '@/components/shared/userOption';
import Button from '@/components/core/button';
import pitchCatchData from '@/mockData/pitchCatch';
import { useRouter } from 'next/navigation';
import LevelStepper from '@/components/shared/levelStepper';
import { useSession } from 'next-auth/react';
import { handleEndLevel } from '@/utils';
import { Locale } from '@/i18n.config';
import { getDictionaryClient } from '@/utils/getDictionaryClient';

type Props = {
    params: {
        stage: number;
        level: number;
        lang: Locale;
    };
};
const getLevelData = (
    stage: number,
    level: number,
    levelsData: PitchCatchGame,
) => {
    return levelsData[stage - 1][level - 1];
};

const Page = ({ params }: Props) => {
    const [useChoiceIndex, setChoiceIndex] = useState<number | null>(null);
    const [currQuestion, setCurrQuestion] = useState(1);
    const [playCount, setPlayCount] = useState(0);
    const { stage, level, lang } = params;
    const { data: session } = useSession();
    const currentLevel = getLevelData(stage, level, pitchCatchData);
    const router = useRouter();

    const dict = getDictionaryClient(lang);

    const { submitButton } = dict.app['pitch-catch'];

    const updateDbWin = async () => {
        // update the status level and stage to database
        try {
            // TODO: fix the session error
            //@ts-ignore
            const res = await fetch(
                //@ts-ignore
                `http://localhost:3000/api/games/pitch-catch/${session?.user?.id}`,
                {
                    method: 'PUT',
                    headers: {
                        'Content-type': 'application/json',
                    },
                    body: JSON.stringify({
                        status: 'passed',
                        stage: stage,
                        level: level,
                    }),
                },
            );

            if (!res.ok) {
                throw new Error('Failed to update');
            }
        } catch (error) {
            console.log(error);
        }
    };

    const updateDbLose = async () => {
        // update the status level and stage to database
        try {
            // TODO: fix the session error
            const user = session?.user;
            //@ts-ignore
            const res = await fetch(
                //@ts-ignore
                `http://localhost:3000/api/games/pitch-catch/${session?.user?.id}`,
                {
                    method: 'PUT',
                    headers: {
                        'Content-type': 'application/json',
                    },
                    body: JSON.stringify({
                        status: 'failed',
                        stage: params.stage,
                        level: params.level,
                    }),
                },
            );

            if (!res.ok) {
                throw new Error('Failed to update');
            }
        } catch (error) {
            console.log(error);
        }
    };

    const handleWin = () => {
        updateDbWin();
        setPlayCount(0);
        const scoreWinning = params.stage + params.level * 2;
        localStorage.setItem('score', scoreWinning.toString());
        handleEndLevel(stage, level, lang, 'pitch-catch', 'win', router);
    };
    const handleLose = () => {
        updateDbLose();
        setPlayCount(0);
        localStorage.setItem('score', '0');
        handleEndLevel(stage, level, lang, 'pitch-catch', 'lose', router);
    };

    function arrCheck(arrOne: string[], arrTwo: string[]) {
        for (let i = 0; i < arrOne.length; i++) {
            if (arrTwo[i] !== arrOne[i]) {
                return false;
            }
        }
        setPlayCount(0);
        return true;
    }

    function checkIfCorrect(
        userChoiceIndex: number | null,
        pitchCatchLevel: PitchCatchLevel,
        indexOfQuestion: number,
    ) {
        if (userChoiceIndex === null) return;
        const choices = pitchCatchLevel[indexOfQuestion].userOptions;
        const chosenValue = choices[userChoiceIndex];
        const correctAnswer = pitchCatchLevel[indexOfQuestion].currPitch;

        return arrCheck(chosenValue, correctAnswer);
    }
    function handleCheckMeClick() {
        const isCorrect = checkIfCorrect(
            useChoiceIndex,
            currentLevel,
            currQuestion - 1,
        );

        if (isCorrect) {
            if (currQuestion < currentLevel.length) {
                setCurrQuestion(currQuestion + 1);
            } else {
                handleWin();
            }
        } else {
            localStorage.setItem('score', '0');
            handleLose();
        }
    }
    return (
        <div className='container mx-auto h-screen flex flex-col justify-center gap-10 items-center'>
            <div className='flex flex-row gap-2'>
                <LevelStepper
                    currentStep={currQuestion}
                    totalSteps={currentLevel.length}
                />
            </div>
            <PitchButton
                pitches={currentLevel[currQuestion - 1].currPitch}
                playCount={playCount}
                setPlayCount={setPlayCount}
            />
            <UserOptions
                pitches={currentLevel[currQuestion - 1].userOptions}
                useChoiceIndex={useChoiceIndex}
                setChoiceIndex={setChoiceIndex}
            />
            <Button label={submitButton} onClick={handleCheckMeClick} />
        </div>
    );
};

export default Page;
