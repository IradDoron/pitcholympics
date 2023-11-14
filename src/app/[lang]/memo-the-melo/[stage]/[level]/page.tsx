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
import * as Tone from 'tone';
import { BIG_NUMBER_FOR_MEMO_THE_MELO } from '@/constants';

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
    levelsData: MemoTheMeloGame,
) => {
    return levelsData[stage - 1][level - 1];
};

const Page = ({ params }: Props) => {
    const [currentNote, setCurrentNote] = useState(1);
    const [pitchIndexPlaying, setPitchIndexPlaying] = useState(-1);
    const [pitchIndexActive, setPitchIndexActive] = useState(-1);
    const [userGuess, setUserGuess] = useState<number[]>([]); // Array of indexes. Each index is the index of the pitch in the pitch options array
    const [isUserTurn, setIsUserTurn] = useState(false);
    const router = useRouter();
    const { stage, level } = params;
    const currentLevel = getLevelData(
        Number(stage),
        Number(level),
        memoTheMeloMockData,
    );
    const { pitchOptions } = currentLevel;
    const pitchesIndexes = currentLevel.melody;
    const pitchesOptions = currentLevel.pitchOptions;
    const pitches = pitchesIndexes.map(pitchIndex => {
        return pitchesOptions[pitchIndex];
    });

    /**
     * @description handleWin is a function that handles the win situation
     */
    const handleWin = () => {
        const scoreWinning = params.stage + params.level * 2;
        localStorage.setItem('score', scoreWinning.toString());
        router.push(`${params.level}/result`);
    };

    /**
     * @param pitches array of pitches, for example ['440', '880', '220', '440', '880', '220']
     * @param pitchesOptions array of pitches options, for example ['440', '880', '220']
     * @returns array of indexes, for example [0, 1, 2, 0, 1, 2]
     */
    const convertPitchesToIndexes = (
        pitches: string[],
        pitchesOptions: string[],
    ) => {
        return pitches.map(pitch => {
            return pitchesOptions.indexOf(pitch);
        });
    };

    /**
     * @param pitches array of pitches, for example ['440', '880', '220', '440', '880', '220']
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
                if (indexOfPitch === pitchIndexPlaying) {
                    setPitchIndexPlaying(
                        indexOfPitch + BIG_NUMBER_FOR_MEMO_THE_MELO,
                    );
                }
                setPitchIndexActive(indexOfPitch);
                setPitchIndexPlaying(indexOfPitch);
            }, 1000 * index);
        });

        setTimeout(() => {
            setPitchIndexActive(-1);
            setPitchIndexPlaying(-1);
            setIsUserTurn(true);
        }, 1000 * partOfMelodyIndexes.length);
    };

    const handleLose = () => {
        router.push(
            `/${params.lang}/memo-the-melo/${params.stage}/${params.level}/result`,
        );
    };

    const checkUserGuess = (userGuess: number[], melody: number[]) => {
        const melodyPart = melody.slice(0, userGuess.length); // The part of the melody that the user guessed
        const guessResult = isTwoArraysEqual(userGuess, melodyPart);
        // If the user guessed the whole melody
        if (guessResult && userGuess.length === melody.length) {
            handleWin();
            setUserGuess([]);
            return;
        }

        // If the user guessed the current part of the melody
        if (guessResult) {
            setCurrentNote(prev => prev + 1);
            setUserGuess([]);
            setIsUserTurn(false);
            return;
        }

        // If the user guessed wrong
        handleLose();
    };
    return (
        <div className='container mx-auto h-full flex flex-col justify-center items-center gap-8 border-red-600 border-solid border-2'>
            <LevelStepper
                currentStep={currentNote}
                totalSteps={currentLevel.melody.length}
            />

            <div className='flex flex-row justify-center items-center gap-2 flex-wrap'>
                {pitchOptions.map((_, index) => {
                    const isCurrNoteActive = pitchIndexActive === index;
                    const isCurrNotePlaying = pitchIndexPlaying === index;
                    return (
                        <ButtonMelody
                            key={index}
                            isActive={isCurrNoteActive}
                            isPlaying={isCurrNotePlaying}
                            pitch={pitchOptions[index]}
                            isUserTurn={isUserTurn}
                            pitchOptionIndex={index}
                            setUserGuess={setUserGuess}
                            userGuess={userGuess}
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
            </div>
        </div>
    );
};

export default Page;
