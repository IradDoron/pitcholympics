'use client';

import { useState, useEffect } from 'react';
import NoteStep from '@/components/shared/noteStep';
import { PitchCatchGame, PitchCatchLevel } from '@/types';

import PitchButton from '@/components/shared/pitchButton';
import UserOptions from '@/components/shared/userOption';
import Button from '@/components/core/button';
import pitchCatchData from '@/mockData/pitchCatch';

import { useRouter } from 'next/navigation';

type Props = {
  params: {
    stage: number;
    level: number;
  };
};
const getLevelData = (
  stage: number,
  level: number,
  levelsData: PitchCatchGame
) => {
  return levelsData[stage - 1][level - 1];
};

const Page = ({ params }: Props) => {
  const [useChoiceIndex, setChoiceIndex] = useState<number | null>(null);
  const [currQuestion, setCurrQuestion] = useState(1);
  const { stage, level } = params;
  const currentLevel = getLevelData(
    Number(stage),
    Number(level),
    pitchCatchData
  );
  const router = useRouter();
  const handleWin = () => {
    const scoreWinning = params.stage + params.level * 2;
    console.log('iam here handleWin');
    localStorage.setItem('score', scoreWinning.toString());
    // redirect(`${params.level}/result`);
    router.push(`${params.level}/result`);
  };
  const handleLose = () => {
    router.push(`${params.level}/result`);
  };

  function arrCheck(arrOne: number[], arrTwo: number[]) {
    for (let i = 0; i < arrOne.length; i++) {
      if (arrTwo[i] !== arrOne[i]) {
        return false;
      }
    }
    return true;
  }

  function checkIfCorrect(
    userChoiceIndex: number | null,
    pitchCatchLevel: PitchCatchLevel,
    indexOfQuestion: number
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
      currQuestion - 1
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
    <>
      <div className="container mx-auto h-screen flex flex-col justify-center gap-10 items-center">
        <div className="flex flex-row gap-2">
          {currentLevel.map((_, index) => {
            const getState = () => {
              if (index + 1 < currQuestion) return 'Played';
              if (index + 1 === currQuestion) return 'Current';
              if (index + 1 > currQuestion) return 'NotPlayed';
            };
            const state = getState();
            if (state)
              return (
                <NoteStep
                  state={state}
                  key={index}
                />
              );
          })}
        </div>
        <PitchButton pitches={currentLevel[currQuestion - 1].currPitch} />
        <UserOptions
          pitches={currentLevel[currQuestion - 1].userOptions}
          useChoiceIndex={useChoiceIndex}
          setChoiceIndex={setChoiceIndex}
        />
        <Button
          label="This is the pitch"
          onClick={() => handleCheckMeClick()}
        />
      </div>
    </>
  );
};

export default Page;
