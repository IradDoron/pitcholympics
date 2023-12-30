'use client';

import { Locale } from '@/i18n.config';
import {
    GameNamesToSlug,
    LevelStatus,
    MemoBlocksGame,
    MemoTheMeloGame,
    PitchCatchGame,
} from '@types';
import type { Session } from 'next-auth';
import { useSession } from 'next-auth/react';
import { useEffect, useState } from 'react';
import LevelLink from './LevelLink';
import LevelsLinksContainer from './LevelsLinksContainer';
import StageLevelsContainer from './StageLevelsContainer';
import StageTitle from './StageTitle';

type Props = {
    levelsData: MemoTheMeloGame | PitchCatchGame | MemoBlocksGame;
    lang: Locale;
    game: GameNamesToSlug;
};

type UserProgressEntry = Record<string, LevelStatus>;

type ExtendedSession = Session & {
    user: Session['user'] & {
        id: string; // Change the type of id according to your setup
    };
};

const GameLevelsLinks = ({ levelsData, lang, game }: Props) => {
    const { data: session } = useSession() as { data: ExtendedSession | null };
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
            if (userProgress[levelKey] === 'locked' && levelIndex === 0) {
                // allow first level to be unlocked by default in each stage
                return 'pending';
            }
            return userProgress[levelKey];
        }
    };

    useEffect(() => {
        // Fetch user progress from the backend using the user's ID (session.id)
        const fetchUserProgress = async () => {
            try {
                const response = await fetch(
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
        <div className='h-full flex justify-center items-center'>
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
