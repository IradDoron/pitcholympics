'use client'
import Card from "@/components/core/card";
import type { User } from '@/types';
import type { GameAnalytics, GameNames, GamesStats, Resources } from '@/types/gameLogic';
import { getDictionaryClient } from '@/utils/getDictionaryClient';
import users from '@/mockData/users';
import { Locale } from "@/i18n.config";

type Props = {
  type: "resources" | "gamesStats";
  lang: Locale;
  color: "primary" | "secondary" | "tertiary";
}

const StatsSection = ({ type, lang, color }: Props) => {
  const user = users[0];

  function countGames(user: User, gameName: GameNames): number {
    return user.gamesAnalytics.reduce((count: number, curr: GameAnalytics) => {
      if (curr.gameName === gameName) {
        count += 1;
      }
      return count;
    }, 0);
  }

  const memoTheMeloGamesCount = countGames(user, "memoTheMelo");
  const pitchCatchGamesCount = countGames(user, "pitchCatch");


  const stats = {
    resources: { ...user.resources },
    gamesStats: {
      memoTheMeloGames: memoTheMeloGamesCount,
      pitchCatchGames: pitchCatchGamesCount,
      totalGamesPlayed: memoTheMeloGamesCount + pitchCatchGamesCount,
    }
  }
  const dict = getDictionaryClient(lang);
  const { page } = dict.app.stats;
  const selectedPage = page[type];
  const keyValues = Object.entries(selectedPage).filter(([key, v]) => key !== 'title');

  return (
    <div className="w-full items-center place-self-center">
      <h1 className="text-center text-light-background-onDefault dark:text-dark-background-onDefault font-inter text-xl font-bold">
        {page[type].title}
      </h1>
      <div className="flex flex-col sm:flex-row items-center gap-x-0">
        {
          keyValues.map(([key, value]) => {
            // Use type assertions to tell TypeScript the expected type
            const title = type === "resources" ? stats.resources[key as keyof Resources] : stats.gamesStats[key as keyof GamesStats]
            return (
              <Card
                key={key}
                title={title.toString()}
                subTitle={value}
                color={color}
              />
            )
          })
        }
      </div>
    </div>
  )
}

export default StatsSection