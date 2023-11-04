'use client';

import { useState, useEffect } from 'react';
import NoteStep from '@/components/shared/noteStep';
import { PitchCatchGame, PitchCatchLevel } from '@/types';
import memoTheMeloMockData from '@/mockData/memoTheMelo';
import PitchButton from '@/components/shared/pitchButton';
import UserOptions from '@/components/shared/userOption';
import Button from '@/components/core/button';
import pitchCatchData from '@/mockData/pitchCatch';

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
  console.log(stage, level, levelsData);
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

  // const [currPitch, setCurrPitch] = useState(
  //   currentLevel[currQuestion - 1].currPitch
  // );

  console.log(currentLevel);
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
    console.log(chosenValue, correctAnswer, 'i have been clicked');
    return arrCheck(chosenValue, correctAnswer);
  }
  function handleCheckMeClick() {
    const isCorrect = checkIfCorrect(
      useChoiceIndex,
      currentLevel,
      currQuestion - 1
    );

    if (isCorrect) {
      console.log('correct');
      if (currQuestion <= currentLevel.length - 1) {
        setCurrQuestion(currQuestion + 1);
        console.log('currquestion', currQuestion);
      }
      if (currQuestion > currentLevel.length - 1) {
        console.log('move to the next level');
      }

      console.log('currquestion', currQuestion);
    } else {
      console.log('move to result page');
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
