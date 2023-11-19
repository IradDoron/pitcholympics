'use client';

import LevelsLinksContainer from './LevelsLinksContainer';
import React, { useEffect, useState } from 'react';
import { MemoTheMeloGame, PitchCatchGame } from '@/types';
import StageTitle from './StageTitle';
import StageLevelsContainer from './StageLevelsContainer';
import LevelLink from './LevelLink';
import { useSession } from 'next-auth/react';
import { LevelStatus } from '@/types';
import { Locale } from '@/i18n.config';

type Props = {
    levelsData: MemoTheMeloGame | PitchCatchGame;
    lang: Locale;
    game: string;
};
type UserProgressEntry = {
    [key: string]: LevelStatus;
};

const GameLevelsLinks = ({ levelsData, lang, game }: Props) => {
    const { data: session } = useSession();
    const [userProgress, setUserProgress] = useState<UserProgressEntry>({});

    const getStatus = (
        userProgress: UserProgressEntry | null | undefined,
        levelIndex: number,
        stageIndex: number,
    ): LevelStatus => {
        if (!userProgress) {
            return 'locked';
        }

        const levelKey = `${stageIndex + 1}_${levelIndex + 1}`;
        const isKeyInUserProgress =
            Object.keys(userProgress).includes(levelKey);

        if (!isKeyInUserProgress) {
            return 'locked';
        } else {
            return userProgress[levelKey];
        }
    };

    useEffect(() => {
        // Fetch user progress from the backend using the user's ID (session.id)
        console.log('game', game);
        const fetchUserProgress = async () => {
            try {
                //@ts-ignore
                const response = await fetch(
                    //@ts-ignore
                    `/api/games/${game}/${session?.user?.id}`,
                );
                const data = await response.json();
                setUserProgress(data.gameData);
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
                                    const stageNumber = stageIndex + 1;
                                    const levelNumber = levelIndex + 1;
                                    const url = `/${lang}/games/${game}/${stageNumber}/${levelNumber}`;
                                    return (
                                        <LevelLink
                                            key={levelIndex}
                                            url={url}
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
