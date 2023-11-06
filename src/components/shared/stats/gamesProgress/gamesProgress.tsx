import gamesData from "@/mockData/gamesData";
import { Game } from "@/types";
import GameInfo from "./gameInfo";
import users from "@/mockData/users";
const GameProgress = () => {

  const user = users[0]; // TODO: Replace with the actual user

  return (
    <div className="flex flex-col gap-10 justify-center sm:flex-row">
      {gamesData.map((game: Game) => (
        <GameInfo game={game} key={game.name} user={user} />
      ))}
    </div>
  )
}
export default GameProgress;