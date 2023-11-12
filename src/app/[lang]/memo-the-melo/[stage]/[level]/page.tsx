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
  const router = useRouter();
  const handleWin = () => {
    const scoreWinning = params.stage + params.level * 2;
    localStorage.setItem('score', scoreWinning.toString());
    router.push(`${params.level}/result`);
  };

  const [currentNote, setCurrentNote] = useState(1);

  const { stage, level } = params;
  const currentLevel = getLevelData(
    Number(stage),
    Number(level),
    memoTheMeloMockData
  );

  const { pitchOptions } = currentLevel;
  const [userGuess, setUserGuess] = useState<number[]>([]);

  const pitchesIndexes = currentLevel.melody;
  const pitchesOptions = currentLevel.pitchOptions;

  const pitches = pitchesIndexes.map(pitchIndex => {
    return pitchesOptions[pitchIndex];
  });

  // useEffect(() => {
  //   checkUserGuess(userGuess, currentLevel.melody);
  // }, [currentNote,userGuess]);

  const startMelody = () => {
    const synth = new Tone.PolySynth(Tone.Synth).toDestination();
    const now = Tone.now();

    pitches.forEach((pitch, index) => {
      synth.triggerAttack(pitch, now + index / 2);
    });
    synth.triggerRelease(pitches, now + pitches.length / 2);
  };

  const checkUserGuess = (userGuess: number[], melody: number[]) => {
    if (userGuess.length === 0) return;
    for (let i = 0; i < userGuess.length; i++) {
      if (!(userGuess[i] === melody[i])) {
      }
    }
    if (currentNote < melody.length) {
      console.log(currentNote + 'current Note');
      setCurrentNote(currentNote + 1);
    }
    if (currentNote === melody.length) {
      handleWin();
    }
    setUserGuess([]);
    return true;
  };
  return (
    <div className="container mx-auto h-full flex flex-col justify-center items-center gap-10 border-red-600 border-solid border-2">
      <LevelStepper
        currentStep={1}
        totalSteps={pitchOptions.length}
      />

      <div className="flex flex-row justify-center items-center gap-5 flex-wrap w-60">
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
      <Button
        label="start melody"
        onClick={startMelody}
      />
      <Button 
      label='Check Guess'
      onClick={() => checkUserGuess(userGuess, currentLevel.melody)}
      />
    </div>
  );
};

export default Page;
