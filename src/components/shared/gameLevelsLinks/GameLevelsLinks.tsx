'use client';

import LevelsLinksContainer from './LevelsLinksContainer';
import React, { useEffect, useState } from 'react';
import memoTheMeloMockData from '@/mockData/memoTheMelo';
import { MemoTheMeloGame, PitchCatchGame } from '@/types';
import StageTitle from './StageTitle';
import StageLevelsContainer from './StageLevelsContainer';
import LevelLink from './LevelLink';
import { useSession } from 'next-auth/react';

type Props = {
    levelsData: MemoTheMeloGame | PitchCatchGame;
    baseUrl: string;
};
type UserProgressEntry = {
    stage: number;
    level: number;
    status: 'passed' | 'failed' | 'locked';
};

const GameLevelsLinks = ({ levelsData, baseUrl }: Props) => {
    const { data: session } = useSession();
    const [userProgress, setUserProgress] = useState<UserProgressEntry[]>([]);

    const getStatus = (
        userProgress: UserProgressEntry[],
        levelIndex: number,
        stageIndex: number,
    ): 'passed' | 'failed' | 'locked' => {
        return (
            userProgress.find(
                entry =>
                    entry.stage === stageIndex + 1 &&
                    entry.level === levelIndex + 1,
            )?.status || 'locked'
        );
    };

    useEffect(() => {
        // Fetch user progress from the backend using the user's ID (session.id)
        const fetchUserProgress = async () => {
            try {
                //@ts-ignore
                const response = await fetch(
                    `/api/auth/games/${session?.user?.id}`,
                );
                const data = await response.json();
                setUserProgress(data.memoTheMeloObjects);
            } catch (error) {
                console.error('Error fetching user progress:', error);
            }
        };

        if (session) {
            fetchUserProgress();
        }
    }, [session]);

    return (
        <div className='mt-[100px] sm:mt-[250px]'>
            <LevelsLinksContainer>
                {levelsData?.map((stage, stageIndex) => {
                    return (
                        <div
                            key={stageIndex}
                            className='flex flex-col items-center'>
                            <StageTitle stageNumber={stageIndex + 1} />
                            <StageLevelsContainer>
                                {stage.map((level, levelIndex) => {
                                    const status = getStatus(
                                        userProgress,
                                        levelIndex,
                                        stageIndex,
                                    );
                                    return (
                                        <LevelLink
                                            key={levelIndex}
                                            url={`${baseUrl}/${
                                                stageIndex + 1
                                            }/${levelIndex + 1}`}
                                            status={status}
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
    );
};

export default GameLevelsLinks;
