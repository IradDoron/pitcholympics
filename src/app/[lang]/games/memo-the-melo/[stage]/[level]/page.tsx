'use client';

import { useRouter } from 'next/navigation';
import { useState, useEffect } from 'react';
import { MemoTheMeloGame } from '@/types';
import memoTheMeloMockData from '@/mockData/memoTheMelo';
import ButtonMelody from '@/components/shared/buttonMelody';
import LevelStepper from '@/components/shared/levelStepper';
import { Locale } from '@/i18n.config';
import Button from '@/components/core/button';
import { isTwoArraysEqual } from '@/utils';
import { handleEndLevel } from '@/utils';
import { convertPitchesToIndexes } from '@/utils';
import { useSession } from 'next-auth/react';
import { getDictionaryClient } from '@/utils/getDictionaryClient';
import { CURRENT_DOMAIN } from '@/constants';

type Props = {
    params: {
        stage: number;
        level: number;
        status: string;
        lang: Locale;
    };
};
const getLevelData = (
    stage: number,
    level: number,
    levelsData: MemoTheMeloGame,
) => {
    return levelsData[stage - 1][level - 1];
};

const Page = ({ params }: Props) => {
    const router = useRouter(); // Next.js router
    const { data: session } = useSession();
    const { stage, level, lang } = params; // The current stage, level and language
    const currentLevel = getLevelData(stage, level, memoTheMeloMockData); // The current level data
    const [currentNote, setCurrentNote] = useState(1); // The current note of the melody. For example, if the melody is [440, 880, 220] and the current note is 2, then the melody is [440, 880]
    const [pitchIndexPlaying, setPitchIndexPlaying] = useState(-1); // The index of the pitch that is currently playing and active
    const [userGuess, setUserGuess] = useState<number[]>([]); // Array of indexes. Each index is the index of the pitch in the pitch options array
    const [isUserTurn, setIsUserTurn] = useState(false); // Is it the user turn to guess
    const { pitchOptions, melody: pitchesIndexes } = currentLevel; // The pitch options and the melody. Pitch options is an array of pitches, for example ['440', '880', '220']. Melody is an array of indexes, for example [0, 1, 2, 0, 1, 2]
    const pitches = pitchesIndexes.map(pitchIndex => {
        return pitchOptions[pitchIndex];
    }); // The melody as pitches, for example ['440', '880', '220', '440', '880', '220']
    const [checkUserButtonState, setCheckUserButtonState] = useState<
        'disabled' | 'default'
    >('default');
    const [startMelodyButtonState, setStartMelodyButtonState] = useState<
        'disabled' | 'default'
    >('default');

    const dict = getDictionaryClient(lang);

    const { startMelody, checkGuess } = dict.app['memo-the-melo'];

    const handleWin = async () => {
        // update the status level and stage to database
        try {
            // TODO: fix the session error
            //@ts-ignore
            const res = await fetch(
                //@ts-ignore
                `${CURRENT_DOMAIN}/api/games/memo-the-melo/${session?.user?.id}`,
                {
                    method: 'PUT',
                    headers: {
                        'Content-type': 'application/json',
                    },
                    body: JSON.stringify({
                        status: 'passed',
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

    const handleLose = async () => {
        // update the status level and stage to database
        try {
            // TODO: fix the session error
            //@ts-ignore
            const res = await fetch(
                //@ts-ignore
                `${CURRENT_DOMAIN}/api/games/memo-the-melo/${session?.user?.id}`,
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

    /**
     * @param pitches array of pitches, for example ['440', '880', '220', '440', '880', '220']
     * @param pitchOptions array of pitches, for example ['440', '880', '220']
     * @param currentNote the current note of the melody. For example, if the melody is [440, 880, 220] and the current note is 2, then the melody is [440, 880]
     */
    const playMelody = (
        pitches: string[],
        pitchOptions: string[],
        currentNote: number,
    ) => {
        const indexesOfPitches = convertPitchesToIndexes(pitches, pitchOptions);
        const partOfMelodyIndexes = indexesOfPitches.slice(0, currentNote);
        const timeConstant = 100;
        partOfMelodyIndexes.forEach((indexOfPitch, index) => {
            setTimeout(
                () => {
                    setPitchIndexPlaying(indexOfPitch);
                },
                1000 * index + timeConstant,
            );
        });

        setTimeout(
            () => {
                setPitchIndexPlaying(-1);
                setIsUserTurn(true);
            },
            1000 * partOfMelodyIndexes.length + timeConstant,
        );
    };

    const checkUserGuess = (userGuess: number[], melody: number[]) => {
        if (userGuess.length === 0) {
            return;
        }
        const melodyPart = melody.slice(0, userGuess.length); // The part of the melody that the user guessed
        const guessResult = isTwoArraysEqual(userGuess, melodyPart);
        // If the user guessed the whole melody
        if (guessResult && userGuess.length === melody.length) {
            handleWin();
            handleEndLevel(stage, level, lang, 'memo-the-melo', 'win', router);
            setUserGuess([]);
            return;
        } else if (guessResult) {
            setCurrentNote(prevState => prevState + 1);
            setUserGuess([]);
            setIsUserTurn(false);
            setPitchIndexPlaying(-1);
            return;
        } else {
            handleLose();
            handleEndLevel(stage, level, lang, 'memo-the-melo', 'lose', router);
            setUserGuess([]);
            return;
        }
    };

    useEffect(() => {
        if (!isUserTurn) {
            setCheckUserButtonState('disabled');
            setStartMelodyButtonState('default');
        } else {
            setCheckUserButtonState('default');
            setStartMelodyButtonState('disabled');
        }
    }, [isUserTurn]);

    return (
        <div className='container mx-auto h-full flex flex-col justify-center items-center gap-8'>
            <LevelStepper
                currentStep={currentNote}
                totalSteps={currentLevel.melody.length}
            />

            <div className='flex flex-row justify-center items-center gap-2 flex-wrap'>
                {pitchOptions.map((_, index) => {
                    const isCurrNotePlaying = pitchIndexPlaying === index;

                    return (
                        <ButtonMelody
                            key={index}
                            isPlaying={isCurrNotePlaying}
                            pitch={pitchOptions[index]}
                            isUserTurn={isUserTurn}
                            pitchOptionIndex={index}
                            setUserGuess={setUserGuess}
                            userGuess={userGuess}
                            setPitchIndexPlaying={setPitchIndexPlaying}
                        />
                    );
                })}
            </div>
            <div className='flex flex-row gap-2'>
                <Button
                    label={startMelody}
                    state={startMelodyButtonState}
                    onClick={() =>
                        playMelody(pitches, pitchOptions, currentNote)
                    }
                />
                <Button
                    label={checkGuess}
                    state={checkUserButtonState}
                    onClick={() =>
                        checkUserGuess(userGuess, currentLevel.melody)
                    }
                />
            </div>
        </div>
    );
};

export default Page;

//  <Button
//                 label='Debug Win'
//                 onClick={() =>
//                     checkUserGuess(currentLevel.melody, currentLevel.melody)
//                 }
//             />
//             <Button
//                 label='Debug Lose'
//                 onClick={() =>
//                     checkUserGuess(
//                         currentLevel.melody,
//                         new Array(currentLevel.melody.length).fill(0),
//                     )
//                 }
//             />
