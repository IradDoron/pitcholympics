'use client';
import { useRouter } from 'next/navigation';
import { useEffect, useState } from 'react';
import { MemoTheMeloGame } from '@/types';
import memoTheMeloMockData from '@/mockData/memoTheMelo';
import ButtonMelody from '@/components/shared/buttonMelody';
import LevelStepper from '@/components/shared/levelStepper';
import { Locale } from '@/i18n.config';
import Button from '@/components/core/button';
import * as Tone from 'tone';
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
  levelsData: MemoTheMeloGame
) => {
  return levelsData[stage - 1][level - 1];
};

const Page = ({ params }: Props) => {
  const [currentNote, setCurrentNote] = useState(1);
  const [pitchIndexPlaying, setPitchIndexPlaying] = useState(-1);
  const [userGuess, setUserGuess] = useState<number[]>([]);

  const router = useRouter();

  const { stage, level } = params;
  const currentLevel = getLevelData(
    Number(stage),
    Number(level),
    memoTheMeloMockData
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
   *
   * @description startMelody is a function that plays the melody and changes the style of the active pitch button
   */

  const startMelody = (pitches: string[]) => {
    const synth = new Tone.PolySynth(Tone.Synth).toDestination();
    const now = Tone.now();

    const currPitches = pitches.slice(0, currentNote);

    currPitches.forEach((pitch, index) => {
      synth.triggerAttack(pitch, now + index / 2);
      console.log(now);
    });
    synth.triggerRelease(currPitches, now + currPitches.length / 2);

    const setUpActivePitch = (
      activeIndex: number,
      pitchesIndexes: number[]
    ) => {
      setPitchIndexPlaying(pitchesIndexes[activeIndex]);
    };
    currPitches.forEach((pitch, index) => {
      setTimeout(setUpActivePitch, 1000 * index);
    });
  };
  const getIndexOfPitch = (pitch: string, pitches: string[]) => {
    return pitches.indexOf(pitch);
  };

  const handleLose = () => {
    router.push(
      `/${params.lang}/memo-the-melo/${params.stage}/${params.level}/result`
    );
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
  return (
    <div className="container mx-auto h-full flex flex-col justify-center items-center gap-8 border-red-600 border-solid border-2">
      <LevelStepper
        currentStep={currentNote}
        totalSteps={currentLevel.melody.length}
      />

      <div className="flex flex-row justify-center items-center gap-2 flex-wrap">
        {pitchOptions.map((_, index) => {
          return (
            <ButtonMelody
              key={index}
              noteId={index + 1}
              setUserGuess={setUserGuess}
              currentNote={currentNote}
              userGuess={userGuess}
              pitchOptions={pitchOptions}
            />
          );
        })}
      </div>
      <div className="flex flex-row gap-2">
        <Button
          label="Start The Melody"
          onClick={() => startMelody(pitches)}
        />
        <Button
          label="Check Guess"
          onClick={() => checkUserGuess(userGuess, currentLevel.melody)}
        />
      </div>
    </div>
  );
};

export default Page;
