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
  const router = useRouter();
  const { data: session } = useSession()
    const [currentNote, setCurrentNote] = useState(1);
  const [pitchIndexPlaying, setPitchIndexPlaying] = useState(-1);
  const { stage, level } = params;
  const currentLevel = getLevelData(
    Number(stage),
    Number(level),
    memoTheMeloMockData
  );

  const { pitchOptions } = currentLevel;
  const [userGuess, setUserGuess] = useState<number[]>([]);
  const [isActive, setIsActive] = useState(false);
  const pitchesIndexes = currentLevel.melody;
  const pitchesOptions = currentLevel.pitchOptions;
   const [currentNote, setCurrentNote] = useState(1); // The current note of the melody. For example, if the melody is [440, 880, 220] and the current note is 2, then the melody is [440, 880]
    const [pitchIndexPlaying, setPitchIndexPlaying] = useState(-1); // The index of the pitch that is currently playing and active
    const [userGuess, setUserGuess] = useState<number[]>([]); // Array of indexes. Each index is the index of the pitch in the pitch options array
    const [isUserTurn, setIsUserTurn] = useState(false); // Is it the user turn to guess
    const router = useRouter(); // Next.js router
    const { stage, level, lang } = params; // The current stage, level and language
    const currentLevel = getLevelData(stage, level, memoTheMeloMockData); // The current level data
    const { pitchOptions, melody: pitchesIndexes } = currentLevel; // The pitch options and the melody. Pitch options is an array of pitches, for example ['440', '880', '220']. Melody is an array of indexes, for example [0, 1, 2, 0, 1, 2]
    const pitches = pitchesIndexes.map(pitchIndex => {
        return pitchOptions[pitchIndex];
    }); // The melody as pitches, for example ['440', '880', '220', '440', '880', '220']

  const handleWin = async () => {
    const scoreWinning = params.stage + params.level * 2;
    localStorage.setItem('score', scoreWinning.toString());
    router.push(`${params.level}/result`);

    // update the status level and stage to database
    try {
      // TODO: fix the session error
      //@ts-ignore
      const res = await fetch(`http://localhost:3000/api/auth/games/${session?.user?.id}`, {
        method: 'PUT',
        headers: {
          "Content-type": "application/json",
        },
        body: JSON.stringify({ status: 'passed', stage: params.stage, level: params.level })
      });

      if (!res.ok) {
        throw new Error("Failed to update")
      }
    } catch (error) {
      console.log(error)

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
            handleEndLevel(stage, level, lang, 'memo-the-melo', 'win', router);
            setUserGuess([]);
            return;
        }


    currPitches.forEach((pitch, index) => {
      synth.triggerAttack(pitch, now + index / 2);
      console.log(now);
    });
    synth.triggerRelease(currPitches, now + currPitches.length / 2);

    const setUpActivePitch = (activeIndex: number, pitchesIndexes: string[]) => {
      console.log('hello, world!');

    }
    currPitches.forEach((pitch, index) => {
      setTimeout(setUpActivePitch, 1000 * index);

    });
  };

  const handleLose = async () => {
    router.push(
      `/${params.lang}/memo-the-melo/${params.stage}/${params.level}/result`
    );
    // update the status level and stage to database
    try {
      // TODO: fix the session error
      //@ts-ignore
      const res = await fetch(`http://localhost:3000/api/auth/games/${session?.user?.id}`, {
        method: 'PUT',
        headers: {
          "Content-type": "application/json",
        },
        body: JSON.stringify({ status: 'failed', stage: params.stage, level: params.level })
      });

      if (!res.ok) {
        throw new Error("Failed to update")
      }
    } catch (error) {
      console.log(error)

    }

  };

  const checkUserGuess = (userGuess: number[], melody: number[]) => {
    if (userGuess.length === 0) return;
    for (let i = 0; i < userGuess.length; i++) {
      if (userGuess[i] === melody[i]) {
        handleLose();
        console.log('lose');
      }
    }
    if (currentNote < melody.length) {
      setCurrentNote(currentNote + 1);
    }
    if (currentNote === melody.length) {
      handleWin();
    }
    setUserGuess([]);
    return true;
  };
  
          // If the user guessed the current part of the melody
        if (guessResult) {
            setCurrentNote(prev => prev + 1);
            setUserGuess([]);
            setIsUserTurn(false);
            setPitchIndexPlaying(-1);
            return;
        }

        // If the user guessed wrong
        handleEndLevel(stage, level, lang, 'memo-the-melo', 'lose', router);
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
            </div>
        </div>
  );



      
           
    );
};

export default Page;
