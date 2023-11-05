
import { splitCamelCaseToString } from "@/lib/utils";
import { Game, User } from "@/types";

type Props = {
  game: Game;
  user: User;
}

const GameInfo = ({ game, user }: Props) => {

  const name = splitCamelCaseToString(game.name); // Get the game name
  const gameProgress = user.gameProgress[game.name]?.filter(level => level.status === "passed"); // Get the user's progress in the game (only the levels that are passed)
  const levelsCleared = gameProgress?.reduce((count, stage) => count + stage.level, 0); // Count the number of levels cleared in the game by the user
  const levelCount = game.game.reduce((count, stage) => count + stage.length, 0); // Count the number of levels in the game

  return (
    <div className="flex items-center justify-center flex-col">
      <h1 className="text-lg text-light-background-onDefault dark:text-dark-background-onDefault font-inter font-bold ">
        {name}
      </h1>
      <h1 className="text-lg text-light-background-onDefault dark:text-dark-background-onDefault font-inter font-bold ">
        {`${levelsCleared}/${levelCount}`}
      </h1>
    </div>
  )
}
export default GameInfo;