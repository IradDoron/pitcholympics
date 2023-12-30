'use client';

import { Locale } from '@/i18n.config';
import { StatsCard } from '@core';
import type {
    GameAnalytics,
    GameNames,
    GamesStats,
    Resources,
    User,
} from '@types';
import { getDictionaryClient } from '@utils';
import { useEffect } from 'react';

type Props = {
    type: 'resources' | 'gamesStats';
    lang: Locale;
    color: 'primary' | 'secondary' | 'tertiary';
};

export const StatsSection = async ({ type, lang, color }: Props) => {
    let user: User | null = null;

    useEffect(() => {
        async function fetchData() {
            const data = await fetch(`${process.env.BASE_URL}/api/users/`);
            user = await data.json();
        }
        fetchData();
    }, []);

    function countGames(user: User, gameName: GameNames): number {
        return (
            user?.gamesAnalytics?.reduce(
                (count: number, curr: GameAnalytics) => {
                    if (curr.gameName === gameName) {
                        count += 1;
                    }
                    return count;
                },
                0,
            ) || 0
        );
    }

    if (!user) return null;

    const stats = {
        resources: { ...(user as User)?.resources },
        gamesStats: {
            memoBlocks: countGames(user, 'memoTheMelo'),
            memoTheMelo: countGames(user, 'pitchCatch'),
            pitchCatch: countGames(user, 'memoBlocks'),
            totalGamesPlayed: (user as User)?.gamesAnalytics?.length ?? 0,
        },
    };
    const dict = getDictionaryClient(lang);
    const { page } = dict.app.stats;
    const selectedPage =
        type === 'resources' ? page.resources : page.gamesStats;

    const keyValues = Object.entries(selectedPage).filter(
        ([key, v]) => key !== 'title',
    );

    return (
        <div className='w-full items-center place-self-center'>
            <h2 className='text-center text-light-background-onDefault dark:text-dark-background-onDefault font-inter text-xl font-bold'>
                {selectedPage.title}
            </h2>
            <div className='flex flex-col sm:flex-row items-center gap-x-0'>
                {keyValues.map(([key, value]) => {
                    // Use type assertions to tell TypeScript the expected type
                    const title =
                        type === 'resources'
                            ? stats.resources[key as keyof Resources] || 0
                            : stats.gamesStats[key as keyof GamesStats];
                    return (
                        <StatsCard
                            key={key}
                            title={title?.toString()}
                            subTitle={value}
                            color={color}
                        />
                    );
                })}
            </div>
        </div>
    );
};
