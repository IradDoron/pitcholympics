'use client';

import { useRouter } from 'next/navigation';
import { useState } from 'react';
import { MemoTheMeloGame } from '@/types';
import memoTheMeloMockData from '@/mockData/memoTheMelo';
import ButtonMelody from '@/components/shared/buttonMelody';
import LevelStepper from '@/components/shared/levelStepper';
import { Locale } from '@/i18n.config';
import Button from '@/components/core/button';
import { isTwoArraysEqual } from '@/utils';
import { handleEndLevel } from '@/utils';
import { convertPitchesToIndexes } from '@/utils';
import * as Tone from 'tone';
import { useSession } from 'next-auth/react';

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
    const [isActive, setIsActive] = useState(false);
    const pitchesOptions = currentLevel.pitchOptions;
    const [currentNote, setCurrentNote] = useState(1); // The current note of the melody. For example, if the melody is [440, 880, 220] and the current note is 2, then the melody is [440, 880]
    const [pitchIndexPlaying, setPitchIndexPlaying] = useState(-1); // The index of the pitch that is currently playing and active
    const [userGuess, setUserGuess] = useState<number[]>([]); // Array of indexes. Each index is the index of the pitch in the pitch options array
    const [isUserTurn, setIsUserTurn] = useState(false); // Is it the user turn to guess
    const { pitchOptions, melody: pitchesIndexes } = currentLevel; // The pitch options and the melody. Pitch options is an array of pitches, for example ['440', '880', '220']. Melody is an array of indexes, for example [0, 1, 2, 0, 1, 2]
    const pitches = pitchesIndexes.map(pitchIndex => {
        return pitchOptions[pitchIndex];
    }); // The melody as pitches, for example ['440', '880', '220', '440', '880', '220']

    const handleWin = async () => {
        // update the status level and stage to database
        try {
            // TODO: fix the session error
            //@ts-ignore
            const res = await fetch(
                //@ts-ignore
                `http://localhost:3000/api/auth/games/${session?.user?.id}`,
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
                `http://localhost:3000/api/auth/games/${session?.user?.id}`,
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
        partOfMelodyIndexes.forEach((indexOfPitch, index) => {
            setTimeout(() => {
                setPitchIndexPlaying(indexOfPitch);
            }, 1000 * index);
        });

        setTimeout(() => {
            setPitchIndexPlaying(-1);
            setIsUserTurn(true);
        }, 1000 * partOfMelodyIndexes.length);
    };

    const checkUserGuess = (userGuess: number[], melody: number[]) => {
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
            playMelody(pitches, pitchOptions, currentNote + 1);
            return;
        } else {
            handleLose();
            handleEndLevel(stage, level, lang, 'memo-the-melo', 'lose', router);
            setUserGuess([]);
            return;
        }
    };

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
                    label='Start The Melody'
                    onClick={() =>
                        playMelody(pitches, pitchOptions, currentNote)
                    }
                />
                <Button
                    label='Check Guess'
                    onClick={() =>
                        checkUserGuess(userGuess, currentLevel.melody)
                    }
                />
                <Button
                    label='Debug Win'
                    onClick={() =>
                        checkUserGuess(currentLevel.melody, currentLevel.melody)
                    }
                />
                <Button
                    label='Debug Lose'
                    onClick={() =>
                        checkUserGuess(
                            currentLevel.melody,
                            new Array(currentLevel.melody.length).fill(0),
                        )
                    }
                />
            </div>
        </div>
    );
};

export default Page;
