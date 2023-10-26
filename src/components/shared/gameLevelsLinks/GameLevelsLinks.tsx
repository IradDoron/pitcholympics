import LevelLink from '@/components/core/levelLink/LevelLink';
import LevelsLinksContainer from '@/components/core/levelsLinksContainer';
import React from 'react';
import memoTheMeloMockData from '@/mockData/memoTheMelo';
import { MemoTheMeloGame, PitchCatchGame } from '@/types';

type Props = {
  levelsData: MemoTheMeloGame | PitchCatchGame;
  baseUrl: string;
};

const GameLevelsLinks = ({ levelsData, baseUrl }: Props) => {
  console.log(levelsData);
  return (
    <>
      <LevelsLinksContainer>
        {levelsData?.map((stage, stageIndex) => {
          return (
            <div
              key={stageIndex}
              className="ml-5 border-purple-950 border-2 border-solid">
              {stage.map((level, levelIndex) => {
                return (
                  <LevelLink
                    key={levelIndex}
                    url={`${baseUrl}/${stageIndex + 1}/${levelIndex + 1}`}
                    state="passed"
                    level={levelIndex + 1}
                  />
                );
              })}
            </div>
          );
        })}
      </LevelsLinksContainer>
    </>
  );
};

export default GameLevelsLinks;
