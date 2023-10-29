import LevelsLinksContainer from './LevelsLinksContainer';
import React from 'react';
import memoTheMeloMockData from '@/mockData/memoTheMelo';
import { MemoTheMeloGame, PitchCatchGame } from '@/types';
import StageTitle from './StageTitle';
import StageLevelsContainer from './StageLevelsContainer';
import LevelLink from './LevelLink';

type Props = {
	levelsData: MemoTheMeloGame | PitchCatchGame;
	baseUrl: string;
};

const GameLevelsLinks = ({ levelsData, baseUrl }: Props) => {
	return (
		<>
			<div className='mt-[400px] '>
				<LevelsLinksContainer>
					{levelsData?.map((stage, stageIndex) => {
						return (
							<div key={stageIndex} className='flex flex-col items-center'>
								<StageTitle stageNumber={stageIndex + 1} />
								<StageLevelsContainer>
									{stage.map((level, levelIndex) => {
										return (
											<LevelLink
												key={levelIndex}
												url={`${baseUrl}/${stageIndex + 1}/${levelIndex + 1}`}
												status='passed'
												levelNumber={levelIndex + 1}
											/>
										);
									})}
								</StageLevelsContainer>
							</div>
						);
					})}
				</LevelsLinksContainer>
			</div>
		</>
	);
};

export default GameLevelsLinks;
